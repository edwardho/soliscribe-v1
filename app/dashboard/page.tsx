import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'
import Dashboard from '@/components/Dashboard'
import { auth } from '@/lib/auth'
import { getUserSubscriptionPlan } from '@/lib/stripe'

const Page = async () => {
    const user = await auth()

    if (!user) {
        redirect('/sign-in')
    }

    const dbUser = await db.user.findUnique({
        where: {
            email: user.email!
        }
    })

    if (!dbUser) {
        redirect('/auth-callback?origin=dashboard')
    }

    const subscriptionPlan = await getUserSubscriptionPlan()
    return <Dashboard subscriptionPlan={subscriptionPlan} />
}

export default Page
