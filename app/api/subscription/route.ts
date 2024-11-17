import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextResponse } from 'next/server'
import { db } from '@/db'

export async function GET() {
  try {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user || !user.id) {
      return NextResponse.json(
        { isSubscribed: false },
        { status: 401 }
      )
    }

    const dbUser = await db.user.findFirst({
      where: {
        id: user.id
      },
      select: {
        stripeSubscriptionId: true,
        stripeCurrentPeriodEnd: true,
        stripeCustomerId: true,
        stripePriceId: true
      }
    })

    if (!dbUser) {
      return NextResponse.json(
        { isSubscribed: false },
        { status: 200 }
      )
    }

    const isSubscribed = Boolean(
      dbUser.stripeSubscriptionId &&
      dbUser.stripeCurrentPeriodEnd &&
      dbUser.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now()
    )

    return NextResponse.json({
      isSubscribed,
      isCanceled: false,
      stripeCurrentPeriodEnd: dbUser.stripeCurrentPeriodEnd,
      name: isSubscribed ? 'Pro' : 'Free'
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 