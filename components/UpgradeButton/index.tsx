'use client'

import { Button } from '@/components/ui/button'
import { trpc } from '@/app/_trpc/client'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface UpgradeButtonProps {
  slug: string
  isPro?: boolean
  isElite?: boolean
  priceAmount: number
  isYearly?: boolean
}

const UpgradeButton = ({ slug, isPro, isElite, priceAmount, isYearly }: UpgradeButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const { mutate: createStripeSession } = trpc.createStripeSession.useMutation({
    onSuccess: ({ url }) => {
      if (url) {
        const tier = isPro 
          ? (isYearly ? 'Pro Yearly' : 'Pro') 
          : isElite 
            ? (isYearly ? 'Elite Yearly' : 'Elite') 
            : 'Free'
        console.log(`Subscription successful for ${tier} tier! Redirecting to:`, url)
        window.location.href = url
      }
      setIsLoading(false)
    },
    onError: (err) => {
      console.error('Error creating stripe session:', err)
      setIsLoading(false)
    },
  })

  const handleClick = async () => {
    if (priceAmount === 0) {
      router.push('/dashboard')
      return
    }

    try {
      setIsLoading(true)
      console.log('Creating session for plan:', slug)
      createStripeSession({ planId: slug })
    } catch (error) {
      console.error('Error:', error)
      setIsLoading(false)
    }
  }

  return (
    <Button 
      onClick={handleClick}
      disabled={isLoading}
      className={cn(
        'mt-8 block w-full py-2 relative overflow-hidden',
        {
          'bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-400 hover:to-yellow-300': isPro,
          'bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400': isElite,
          'border border-gray-200 hover:bg-gray-100': !isPro && !isElite
        }
      )}
      variant={!isPro && !isElite ? 'outline' : 'default'}>
      {isLoading ? 'Loading...' : priceAmount === 0 ? 'Get started' : 'Upgrade now'}
    </Button>
  )
}

export default UpgradeButton