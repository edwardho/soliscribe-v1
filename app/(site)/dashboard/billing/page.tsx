import { auth } from "@/lib/auth"
import BillingForm from "@/components/BillingForm/BillingForm"
import { getUserSubscriptionPlan } from "@/lib/stripe"
import { redirect } from "next/navigation"

const Page = async () => {
    const user = await auth()
    
    if (!user) {
        redirect('/auth/login')
    }

    try {
        const subscriptionPlan = await getUserSubscriptionPlan()
        return <BillingForm subscriptionPlan={subscriptionPlan} />
    } catch (error) {
        console.error('Error fetching subscription plan:', error)
        redirect('/auth/login')
    }
}

export default Page