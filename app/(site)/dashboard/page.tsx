import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'
import Dashboard from '@/components/Dashboard'
import { auth } from '@/lib/auth'
import { getUserSubscriptionPlan } from '@/lib/stripe'

const Page = async () => {
    const user = await auth()
    console.log('Dashboard - User auth state:', !!user, user?.id)

    if (!user || !user.id) {
        console.log('Dashboard - No user, redirecting to sign-in')
        redirect('/sign-in')
        return
    }

    const subscriptionPlan = await getUserSubscriptionPlan()
    const dbUser = await db.user.findUnique({
        where: {
            id: user.id
        }
    })
    console.log('Dashboard - DB User found:', !!dbUser)

    if (!dbUser) {
        console.log('Dashboard - No DB user, redirecting to auth-callback')
        redirect('/auth-callback?origin=dashboard')
        return
    }

    return <Dashboard subscriptionPlan={subscriptionPlan} />
}
export default Page

