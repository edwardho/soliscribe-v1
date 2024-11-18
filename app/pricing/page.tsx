'use client'

import { FC, useState, useRef, useEffect, CSSProperties } from 'react'
import { PLANS } from '@/config/stripe'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import UpgradeButton from '@/components/UpgradeButton'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Page: FC = () => {
  const [isYearlyBilling, setIsYearlyBilling] = useState<boolean>(false)
  const proBoxRef = useRef<HTMLDivElement>(null);
  const eliteBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateAnimation = (element: HTMLDivElement) => {
      const angle = (parseFloat(element.style.getPropertyValue("--angle")) + 0.5) % 360;
      element.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(() => updateAnimation(element));
    };

    if (proBoxRef.current) {
      requestAnimationFrame(() => updateAnimation(proBoxRef.current!));
    }

    if (eliteBoxRef.current) {
      requestAnimationFrame(() => updateAnimation(eliteBoxRef.current!));
    }
  }, []);

  const filteredPlans = PLANS.filter(plan => {
    if (plan.slug === 'free') return true
    if (isYearlyBilling) return plan.slug === 'pro-yearly' || plan.slug === 'elite-yearly'
    return plan.slug === 'pro' || plan.slug === 'elite'
  })

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-10 relative'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          viewport={{ once: true }}
          style={{ position: 'absolute', left: '5%', top: '10%' }}
        >
          <Image
            src="/images/shape/shape-01.svg"
            alt="shape"
            width={38}
            height={38}
            className="hidden lg:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ position: 'absolute', right: '10%', top: '15%' }}
        >
          <Image
            src="/images/shape/shape-02.svg"
            alt="shape"
            width={35}
            height={35}
            className="hidden lg:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          viewport={{ once: true }}
          style={{ position: 'absolute', left: '15%', bottom: '20%' }}
        >
          <Image
            src="/images/shape/shape-03.svg"
            alt="shape"
            width={28}
            height={28}
            className="hidden lg:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 0.7 }}
          viewport={{ once: true }}
          style={{ position: 'absolute', right: '8%', bottom: '30%' }}
        >
          <Image
            src="/images/shape/shape-08.svg"
            alt="shape"
            width={40}
            height={40}
            className="hidden lg:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ position: 'absolute', left: '25%', top: '25%' }}
        >
          <Image
            src="/images/shape/shape-04.svg"
            alt="shape"
            width={32}
            height={32}
            className="hidden lg:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.3, repeat: Infinity, delay: 0.9 }}
          viewport={{ once: true }}
          style={{ position: 'absolute', right: '20%', top: '40%' }}
        >
          <Image
            src="/images/shape/shape-05.svg"
            alt="shape"
            width={45}
            height={45}
            className="hidden lg:block"
          />
        </motion.div>

        <div className='mx-auto mb-10 sm:max-w-lg'>
          <h2 className='text-6xl font-bold sm:text-7xl text-center'><span className='text-muted-foreground line-through'>Our Pricing</span> Your <span className='bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'>Productivity Solution</span></h2>
          <p className='mt-5 text-muted-foreground text-center sm:text-lg'>
            A small investment to transform your productivity and workflow.
          </p>
        </div>

        <div className='flex items-center gap-4 mb-8 border rounded-full px-4 py-2'>
          <span className={cn('text-sm', !isYearlyBilling && 'font-semibold')}>Monthly</span>
          <div
            className={cn(
              'h-6 w-12 rounded-full cursor-pointer transition-colors duration-200 border',
              isYearlyBilling ? 'bg-green-500' : 'bg-muted'
            )}
            onClick={() => setIsYearlyBilling(prev => !prev)}
          >
            <div
              className={cn(
                'h-5 w-5 rounded-full bg-background transform transition-transform duration-200 translate-y-[2px]',
                isYearlyBilling ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </div>
          <div className='flex items-center gap-2'>
            <span className={cn('text-sm', isYearlyBilling && 'font-semibold')}>Yearly</span>
            <span className='bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded'>
              Save 25%
            </span>
          </div>
        </div>

        <div className='pt-12 grid grid-cols-1 gap-10 lg:grid-cols-3'>
          {filteredPlans.map(({ name, slug, quota, pagesPerPdf, maxFileSize, audioModel, price }) => {
            const priceString = slug === 'pro-yearly' ? 
              <span className='flex flex-col items-center'>
                <span className='text-muted-foreground line-through text-2xl'>$15</span>
                <span>$11/mo</span>
              </span> : 
              slug === 'elite-yearly' ?
              <span className='flex flex-col items-center'>
                <span className='text-muted-foreground line-through text-2xl'>$25</span>
                <span>$18/mo</span>
              </span> :
              `$${price.amount}`
            const isYearly = slug.endsWith('-yearly')
            const boxRef = slug.includes('pro') ? proBoxRef : slug.includes('elite') ? eliteBoxRef : null;

            return (
              <div
                ref={boxRef}
                key={slug}
                style={(slug === 'pro' || slug === 'pro-yearly') ? {
                  "--angle": "0deg",
                  "--border-color": "linear-gradient(var(--angle), #ff0000, #ff4000, #ff8000, #ffb000, #ffe000, #ff0000)",
                  "--bg-color": "linear-gradient(hsl(var(--background)), hsl(var(--background)))",
                  "padding": "2px",
                } as CSSProperties : (slug === 'elite' || slug === 'elite-yearly') ? {
                  "--angle": "0deg", 
                  "--border-color": "linear-gradient(var(--angle), #FF00FF, #9F2B68, #BF40BF, #DA70D6, #8B008B, #FF00FF)",
                  "--bg-color": "linear-gradient(hsl(var(--background)), hsl(var(--background)))",
                  "padding": "2px",
                } as CSSProperties : undefined}
                className={cn('relative rounded-2xl bg-background shadow-lg', {
                  '[background:padding-box_var(--bg-color),border-box_var(--border-color)] border-2 border-[#0000]': slug === 'pro' || slug === 'pro-yearly' || slug === 'elite' || slug === 'elite-yearly',
                  'border border-border': slug === 'free'
                })}>
                {(slug === 'pro' || slug === 'pro-yearly') && (
                  <div 
                    style={{
                      background: 'linear-gradient(to right, #dc2626, #eab308)',
                    }}
                    className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full px-3 py-2 text-sm font-medium text-white text-center'
                  >
                    Most Popular
                  </div>
                )}
                {(slug === 'elite' || slug === 'elite-yearly') && (
                  <div 
                    style={{
                      background: 'linear-gradient(to right, #9333ea, #4f46e5)'
                    }}
                    className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full px-3 py-2 text-sm font-medium text-white text-center'
                  >
                    Best Deal
                  </div>
                )}

                <div className='p-5'>
                  <h3 className='my-3 text-center font-display text-3xl font-bold text-foreground'>
                    {name}
                  </h3>
                  {slug !== 'free' && (
                    <p className='text-muted-foreground text-center'>
                      {isYearly ? 'Yearly billing' : 'Monthly billing'}
                    </p>
                  )}
                  <p className='mt-4 text-center font-display text-5xl font-extrabold text-foreground'>
                    {priceString}
                  </p>
                  <p className='mt-2 text-center text-muted-foreground'>
                    {price.amount === 0 ? 'Free forever' : isYearly ? 'billed annually' : '/month'}
                  </p>

                  <div className={cn('mt-8 space-y-4', slug === 'free' && 'mb-16')}>
                    <div className='flex items-center gap-3'>
                      <Check className='h-6 w-6 text-red-600' />
                      <p className='text-foreground'>
                        {quota === Infinity ? 'Unlimited' : quota.toLocaleString()} PDFs supported
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Check className='h-6 w-6 text-red-600' />
                      <p className='text-foreground'>
                        {pagesPerPdf === Infinity ? 'Unlimited' : pagesPerPdf} pages per PDF
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Check className='h-6 w-6 text-red-600' />
                      <p className='text-foreground'>
                        {maxFileSize}MB file size limit
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Check className='h-6 w-6 text-red-600' />
                      <p className='text-foreground'>
                        {audioModel}
                      </p>
                    </div>
                  </div>

                  <UpgradeButton 
                    slug={slug}
                    isPro={slug.includes('pro')}
                    isElite={slug.includes('elite')}
                    priceAmount={price.amount}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Page
