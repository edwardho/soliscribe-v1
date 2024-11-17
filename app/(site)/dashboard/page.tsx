import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'
import Dashboard from '@/components/Dashboard'
import { auth } from '@/lib/auth'
import { getUserSubscriptionPlan } from '@/lib/stripe'

const Page = async () => {
    const user = await auth()
    const subscriptionPlan = await getUserSubscriptionPlan()

    if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

    const dbUser = await db.user.findUnique({
        where: {
            id: user.id
        }
    })

    if (!dbUser) redirect('/auth-callback?origin=dashboard')

        return <Dashboard subscriptionPlan={subscriptionPlan} />

}
export default Page

