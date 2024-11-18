import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'
import Dashboard from '@/components/Dashboard'
import { auth } from '@/lib/auth'
import { getUserSubscriptionPlan } from '@/lib/stripe'

const Page = async () => {
    const user = await auth()

    if (!user || !user.id) {
        redirect('/sign-in')
        return
    }

    const subscriptionPlan = await getUserSubscriptionPlan()
    const dbUser = await db.user.findUnique({
        where: {
            id: user.id
        }
    })

    if (!dbUser) {
        redirect('/auth-callback?origin=dashboard')
        return
    }

    return <Dashboard subscriptionPlan={subscriptionPlan} />
}
export default Page

