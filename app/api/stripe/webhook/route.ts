import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
})

export async function POST(req: NextRequest) {
  try {
    const sig = req.headers.get("stripe-signature")
    if (!sig) {
      return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 })
    }

    const body = await req.text()
    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET as string)
    } catch (err: any) {
      console.error("⚠️ Webhook signature verification failed.", err.message)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId
        const subscriptionTier = session.metadata?.tier

        if (!userId || !subscriptionTier) break

        await prisma.subscription.create({
          data: {
            userId,
            tier: subscriptionTier,
            stripeId: session.subscription as string,
            description: `${subscriptionTier} subscription`,
          },
        })
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        await prisma.subscription.deleteMany({
          where: { stripeId: subscription.id },
        })
        break
      }

      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error handling Stripe webhook:", error)
    return NextResponse.json({ error: "Webhook error" }, { status: 500 })
  }
}
