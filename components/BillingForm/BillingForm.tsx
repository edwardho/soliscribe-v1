'use client'

import { trpc } from '@/app/_trpc/client'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import { PLANS } from '@/config/stripe'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, useRef, useEffect, CSSProperties, useCallback } from 'react'
import { format } from 'date-fns'
import { useToast } from '@/hooks/use-toast'
import UpgradeButton from '../UpgradeButton'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { Button } from '../ui/button'

interface BillingFormProps {
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>
}

const BillingForm = ({ subscriptionPlan }: BillingFormProps) => {
  const { toast } = useToast()
  const [isYearly, setIsYearly] = useState<boolean>(false)
  
  const proBoxRef = useRef<HTMLDivElement>(null);
  const eliteBoxRef = useRef<HTMLDivElement>(null);
  const currentPlanRef = useRef<HTMLDivElement>(null);

  console.log('Current subscription plan:', subscriptionPlan)

  const { mutate: createStripeSession, isPending} = trpc.createStripeSession.useMutation({
    onSuccess: ({ url }) => {
      if (!url) {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again later.',
          variant: 'destructive'
        })
        return
      }
      window.location.href = url
    }
  })

  const updateAnimation = useCallback((element: HTMLDivElement) => {
    const angle = (parseFloat(element.style.getPropertyValue("--angle")) + 0.5) % 360;
    element.style.setProperty("--angle", `${angle}deg`);
    requestAnimationFrame(() => updateAnimation(element));
  }, []);

  useEffect(() => {
    [proBoxRef, eliteBoxRef, currentPlanRef].forEach(ref => {
      if (ref.current) {
        requestAnimationFrame(() => updateAnimation(ref.current!));
      }
    });
  }, [updateAnimation]);

  const currentPlanIndex = PLANS.findIndex(plan => {
    const currentSlug = subscriptionPlan?.slug || 'free'
    return plan.slug === currentSlug || 
           (plan.slug.replace('-yearly', '') === currentSlug.replace('-yearly', ''))
  })

  const filteredPlans = PLANS.filter((plan) => {
    if (plan.slug === 'free') return !subscriptionPlan?.isSubscribed
    const matchesBillingPeriod = isYearly ? plan.slug.includes('yearly') : !plan.slug.includes('yearly')
    const meetsMinimumTier = PLANS.indexOf(plan) >= currentPlanIndex
    return matchesBillingPeriod && meetsMinimumTier
  })

  return (
    <div className='max-w-5xl mx-auto'>
      <form
        className='mt-12'
        onSubmit={(e) => {
          e.preventDefault()
          createStripeSession({ planId: subscriptionPlan?.slug || 'free' })
        }}>
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-foreground">Subscription Plan</CardTitle>
            <CardDescription className="text-muted-foreground">
              You are currently on the{' '}
              <strong className="text-foreground">{!subscriptionPlan || !subscriptionPlan.isSubscribed ? 'Free' : subscriptionPlan.name}</strong> plan.
            </CardDescription>
          </CardHeader>

          <CardFooter className='flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0'>
            <Button 
              variant="default"
              type='submit'
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isPending ? (
                <Loader2 className='mr-4 h-4 w-4 animate-spin' />
              ) : null}
              {subscriptionPlan?.isSubscribed
                ? 'Manage Subscription'
                : 'Upgrade'}
            </Button>
            {subscriptionPlan?.isSubscribed ? (
              <p className='rounded-full text-xs font-medium text-muted-foreground'>
                {subscriptionPlan.isCanceled
                  ? 'Your plan will be canceled on '
                  : 'Your plan renews on '}
                {format(
                  subscriptionPlan.stripeCurrentPeriodEnd!,
                  'dd/MM/yyyy'
                )}
                .
              </p>
            ) : null}
          </CardFooter>
        </Card>
      </form>
      <div className='flex items-center justify-center gap-4 mb-8 mt-8'>
        <span className={cn('text-sm text-foreground', !isYearly && 'font-semibold')}>Monthly</span>
        <div
          className={cn(
            'h-6 w-12 rounded-full cursor-pointer transition-colors',
            isYearly ? 'bg-green-600' : 'bg-slate-200'
          )}
          onClick={() => setIsYearly(prev => !prev)}
        >
          <div
            className={cn(
              'h-5 w-5 rounded-full bg-background transform transition-transform duration-200 translate-y-[2px]',
              isYearly ? 'translate-x-6' : 'translate-x-1'
            )}
          />
        </div>
        <span className={cn('text-sm text-foreground', isYearly && 'font-semibold')}>Yearly</span>
        <span className='bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded'>Save 25%</span>
      </div>

      <form className='mt-12'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {filteredPlans.map((plan) => {
            const price = plan.price.amount
            const yearlyPrice = plan.slug.includes('yearly')
            const isCurrentPlan = (subscriptionPlan?.slug || 'free') === plan.slug || 
                                (plan.slug.replace('-yearly', '') === (subscriptionPlan?.slug || 'free').replace('-yearly', ''))
            const isPro = plan.name === 'Pro' || plan.name === 'Pro Yearly'
            const isElite = plan.name === 'Elite' || plan.name === 'Elite Yearly'

            const boxRef = isCurrentPlan ? currentPlanRef : 
                          isPro ? proBoxRef : 
                          isElite ? eliteBoxRef : null;

            return (
              <div
                ref={boxRef}
                key={plan.slug}
                style={isCurrentPlan ? {
                  "--border-color": "#000000",
                  "--bg-color": "linear-gradient(#ffffff, #ffffff)",
                  "padding": "4px",
                } as CSSProperties : isPro ? {
                  "--angle": "0deg",
                  "--border-color": "linear-gradient(var(--angle), #ff0000, #ff4000, #ff8000, #ffb000, #ffe000, #ff0000)",
                  "--bg-color": "linear-gradient(#ffffff, #ffffff)",
                  "padding": "2px",
                } as CSSProperties : isElite ? {
                  "--angle": "0deg", 
                  "--border-color": "linear-gradient(var(--angle), #FF00FF, #9F2B68, #BF40BF, #DA70D6, #8B008B, #FF00FF)",
                  "--bg-color": "linear-gradient(#ffffff, #ffffff)",
                  "padding": "2px",
                } as CSSProperties : undefined}
                className={cn(
                  'rounded-lg relative',
                  isCurrentPlan && '[background:padding-box_var(--bg-color),border-box_var(--border-color)] border-2 border-[#0000] after:content-["Your_Current_Plan"] after:absolute after:top-0 after:-translate-y-full after:text-primary after:text-sm after:font-medium',
                  isPro && !isCurrentPlan && '[background:padding-box_var(--bg-color),border-box_var(--border-color)] border-2 border-[#0000]',
                  isElite && !isCurrentPlan && '[background:padding-box_var(--bg-color),border-box_var(--border-color)] border-2 border-[#0000]'
                )}
              >
                <Card className={cn(
                  'h-full bg-card text-card-foreground',
                  (isPro || isElite) && !isCurrentPlan && 'rounded-lg'
                )}>
                  <CardHeader>
                    <div className='relative w-full'>
                      {yearlyPrice && !isCurrentPlan && (
                        <span className='absolute right-0 top-0 bg-green-100 text-green-700 text-sm font-bold px-2 py-1 rounded-lg shadow-sm transform -translate-y-2 hover:scale-105 transition-transform'>
                          Save ${plan.name.includes('Pro') ? 4 : 7}/mo
                        </span>
                      )}
                      <CardTitle className="text-foreground">{plan.name}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {!isCurrentPlan && (
                        yearlyPrice ? (
                          <div className='flex flex-col'>
                            <span className='text-muted-foreground line-through text-md'>
                              ${plan.name.includes('Pro') ? '15' : '25'}/month
                            </span>
                            <span className='text-lg font-bold text-foreground'>
                              ${plan.name.includes('Pro') ? '11' : '18'}/month
                            </span>
                            <span className='text-sm text-muted-foreground'>billed annually</span>
                          </div>
                        ) : (
                          <>${price} / month</>
                        )
                      )}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className='flex flex-col items-start gap-4'>
                    <div>
                      <p className='font-medium text-foreground'>Features include:</p>
                      <ul className='mt-2 space-y-2 text-sm text-muted-foreground'>
                        <li>
                          {plan.quota.toLocaleString()} files
                        </li>
                        <li>{plan.maxFileSize}MB file size limit</li>
                        <li>{plan.audioModel} audio model</li>
                      </ul>
                    </div>

                    {!isCurrentPlan && (
                      <UpgradeButton
                        slug={isElite ? (isYearly ? 'elite-yearly' : 'elite') : plan.slug}
                        isPro={isPro}
                        isElite={isElite}
                        priceAmount={price}
                      />
                    )}
                  </CardFooter>
                </Card>
              </div>
            )
          })}
        </div>
      </form>
      
    </div>
  )
}

export default BillingForm
