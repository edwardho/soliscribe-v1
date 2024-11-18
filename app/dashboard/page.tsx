import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'
import Dashboard from '@/components/Dashboard'
import { auth } from '@/lib/auth'
import { getUserSubscriptionPlan } from '@/lib/stripe'

const Page = async () => {
    const session = await auth()

    if (!session?.id) {
        redirect('/auth-callback?origin=dashboard')
    }

    const [dbUser, subscriptionPlan] = await Promise.all([
        db.user.findUnique({
            where: {
                id: session.id
            }
        }),
        getUserSubscriptionPlan()
    ])

    if (!dbUser) {
        redirect('/sign-in')
    }

    return <Dashboard subscriptionPlan={subscriptionPlan} />
}

export default Page
