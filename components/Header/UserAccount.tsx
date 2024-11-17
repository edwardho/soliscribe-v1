'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Image from 'next/image'
import Link from 'next/link'
import { Gem } from 'lucide-react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { User } from 'lucide-react'
import { useEffect, useState } from 'react'

interface SubscriptionPlan {
  isSubscribed: boolean
  name?: string
  isCanceled?: boolean
  stripeCurrentPeriodEnd?: string
}

interface UserAccountProps {
  email: string | undefined
  name: string
  imageUrl: string
}

const UserAccount = ({
  email,
  imageUrl,
  name
}: UserAccountProps) => {
  const [subscriptionPlan, setSubscriptionPlan] = useState<SubscriptionPlan | null>(null)

  useEffect(() => {
    const getSubscription = async () => {
      try {
        const response = await fetch('/api/subscription', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const text = await response.text()
        const data = text ? JSON.parse(text) : null
        
        setSubscriptionPlan(data || { isSubscribed: false })
      } catch (error) {
        console.error('Error fetching subscription:', error)
        setSubscriptionPlan({ isSubscribed: false })
      }
    }

    getSubscription()
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className='overflow-visible'>
        <Button className='rounded-full h-9 w-9 aspect-square bg-transparent border-2 border-slate-300 hover:border-slate-400'>
            <Avatar className='relative w-8 h-8 flex items-center justify-center'>
                <AvatarImage>
                    <div className='relative aspect-square h-full w-full'>
                        <Image
                            fill
                            src={imageUrl}
                            alt='profile picture'
                            referrerPolicy='no-referrer'
                        />
                    </div>
                </AvatarImage>
                <AvatarFallback>
                    <User className='h-4 w-4 text-slate-600' />
                </AvatarFallback>
            </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-0.5 leading-none'>
            {name && (
              <p className='font-medium text-sm'>
                {name}
              </p>
            )}
            {email && (
              <p className='w-[200px] truncate text-xs text-muted-foreground'>
                {email}
              </p>
            )}
            <p className='text-xs text-muted-foreground'>
              {subscriptionPlan?.isSubscribed ? subscriptionPlan.name : 'Free'} Plan
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          {subscriptionPlan?.isSubscribed ? (
            <Link href='/dashboard/billing'>
              Manage Subscription
            </Link>
          ) : (
            <Link href='/pricing' className='flex items-center gap-2'>
              Upgrade
              <Gem className='h-4 w-4 text-blue-300' />
            </Link>
          )}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
            <LogoutLink href="/api/auth/logout">
                Sign Out
            </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccount