'use client'

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '../ui/button'
import UserAccount from './UserAccount'

export default function AuthSection() {
  const { user } = useKindeBrowserClient()

  return (
    <div className='hidden items-center space-x-4 sm:flex ml-4'>
      {!user ? (
        <>
          <LoginLink
            className={buttonVariants({
              variant: 'ghost',
              size: 'sm',
            })}>
            Sign in
          </LoginLink>
          <RegisterLink
            className={buttonVariants({
              size: 'sm',
            })}>
            Get started{' '}
            <ArrowRight className='ml-1.5 h-5 w-5' />
          </RegisterLink>
        </>
      ) : (
        <UserAccount
          name={
            !user.given_name || !user.family_name
              ? 'Your Account'
              : `${user.given_name} ${user.family_name}`
          }
          email={user.email ?? ''}
          imageUrl={user.picture ?? ''}
        />
      )}
    </div>
  )
} 