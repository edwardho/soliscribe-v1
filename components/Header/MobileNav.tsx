'use client'

import { ArrowRight, LogOut, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  useEffect(() => {
  }, [pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen()
    }
  }

  return (
    <div className='sm:hidden'>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleOpen}
        className='relative z-50'
      >
        <Menu className='h-5 w-5 text-foreground' />
      </Button>

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute bg-background border-b shadow-lg grid w-full gap-3 px-6 pt-20 pb-8'>
            {!isAuth ? (
              <>
                <li>
                  <Button
                    asChild
                    variant="default"
                    className='w-full justify-start'
                    onClick={() => closeOnCurrent('/sign-up')}
                  >
                    <Link href='/sign-up'>
                      Get started
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </li>
                <Separator className="my-2" />
                <li>
                  <Button
                    asChild
                    variant="ghost"
                    className='w-full justify-start'
                    onClick={() => closeOnCurrent('/sign-in')}
                  >
                    <Link href='/sign-in'>
                      Sign in
                    </Link>
                  </Button>
                </li>
                <Separator className="my-2" />
                <li>
                  <Button
                    asChild
                    variant="ghost"
                    className='w-full justify-start'
                    onClick={() => closeOnCurrent('/pricing')}
                  >
                    <Link href='/pricing'>
                      Pricing
                    </Link>
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button
                    asChild
                    variant="ghost"
                    className='w-full justify-start'
                    onClick={() => closeOnCurrent('/dashboard')}
                  >
                    <Link href='/dashboard'>
                      Dashboard
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    asChild
                    variant="ghost"
                    className='w-full justify-start'
                    onClick={toggleOpen}
                  >
                    <Link href='/dashboard/billing'>
                      Manage Subscription
                    </Link>
                  </Button>
                </li>
                <Separator className="my-2" />
                <li>
                  <Button
                    asChild
                    variant="ghost"
                    className='w-full justify-start flex items-center gap-2'
                  >
                    <Link href='/sign-out'>
                      Sign out
                      <LogOut className="h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav
