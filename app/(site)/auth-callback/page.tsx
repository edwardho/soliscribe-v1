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

const AuthCallback = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    
    console.log('AuthCallback - Initial render, origin:', origin)
    
    const { data, isSuccess, error, isError } = trpc.authCallback.useQuery(undefined, {
        retry: 3,
        retryDelay: 500,
    })

    // Handle error state
    React.useEffect(() => {
        if (isError) {
            console.error('AuthCallback - TRPC Error:', error)
        }
    }, [isError, error])

    // Handle success state
    React.useEffect(() => {
        if (isSuccess) {
            console.log('AuthCallback - TRPC Success:', data)
        }
    }, [isSuccess, data])

    // Handle redirects
    React.useEffect(() => {
        console.log('AuthCallback - Effect triggered', {
            isSuccess,
            isError,
            hasData: !!data,
            errorCode: error?.data?.code
        })

        if (error?.data?.code === 'UNAUTHORIZED') {
            console.log('AuthCallback - Unauthorized, redirecting to sign-in')
            router.push('/sign-in')
            return
        }

        if (isSuccess && data) {
            const redirectPath = origin ? `/${origin}` : '/dashboard'
            console.log('AuthCallback - Success, redirecting to:', redirectPath)
            router.push(redirectPath)
            return
        }

        const timeout = setTimeout(() => {
            if (!isSuccess && !isError) {
                console.log('AuthCallback - Timeout reached, redirecting to sign-in')
                router.push('/sign-in')
            }
        }, 10000)

        return () => {
            console.log('AuthCallback - Cleaning up timeout')
            clearTimeout(timeout)
        }
    }, [data, error, origin, router, isSuccess, isError])
    
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
