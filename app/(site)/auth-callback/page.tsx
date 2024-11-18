"use client"

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { trpc } from '@/app/_trpc/client'
import { Loader2 } from 'lucide-react'
import React from 'react'
export const dynamic = 'force-dynamic'

const AuthCallbackWrapper = () => {
  return (
    <Suspense>
      <AuthCallback />
    </Suspense>
  )
}

const AuthCallbackWrapper = () => {
    return (
      <Suspense>
        <AuthCallback />
      </Suspense>
    )
  }
  
  const AuthCallback = () => {
      const router = useRouter()
      const searchParams = useSearchParams()
      const origin = searchParams.get('origin')
      const { data, isSuccess, error } = trpc.authCallback.useQuery(undefined, {
          retry: true,
          retryDelay: 500,
      })
  
      React.useEffect(() => {
          if (isSuccess) {
              // user is synced to db
              router.push(origin ? `/${origin}` : '/dashboard')
          }
          if (error?.data?.code === 'UNAUTHORIZED') {
              router.push('/sign-in')
          }
      }, [data, error, origin, router, isSuccess])
      
      return (
          <div className='w-full mt-24 flex justify-center'>
              <div className='flex flex-col items-center gap-2'>
                  <Loader2 className='h-8 w-8 animate-spin text-slate-800' />
                  <h3 className='font-semibold text-xl'>
                      Setting up your account...
                  </h3>
                  <p>You will be redirected automatically.</p>
            </div>
          </div>
      )
  }
  
  export default AuthCallbackWrapper  