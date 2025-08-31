
"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, Crown, Star, Heart, Zap, Shield, Eye, MessageCircle } from "lucide-react"

interface SubscriptionTier {
  id: string
  name: string
  price: number
  interval: string
  features: string[]
  popular?: boolean
  color: string
  icon: React.ReactNode
}

const subscriptionTiers: SubscriptionTier[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    interval: "forever",
    color: "gray",
    icon: <Heart className="w-6 h-6" />,
    features: [
      "Basic profile",
      "5 likes per day",
      "See who liked you (limited)",
      "Basic matching algorithm",
      "Standard support"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 29.99,
    interval: "month",
    popular: true,
    color: "purple",
    icon: <Star className="w-6 h-6" />,
    features: [
      "Unlimited likes",
      "See who liked you",
      "5 super likes per day",
      "Boost your profile monthly",
      "Advanced filters",
      "Read receipts",
      "Priority customer support",
      "Hide ads",
      "Rewind last swipe"
    ]
  },
  {
    id: "gold",
    name: "Gold",
    price: 49.99,
    interval: "month",
    color: "yellow",
    icon: <Crown className="w-6 h-6" />,
    features: [
      "Everything in Premium",
      "Unlimited super likes",
      "Weekly profile boost",
      "See who read your messages",
      "Top picks feature",
      "Travel mode",
      "Video chat access",
      "Priority in discovery",
      "Exclusive gold badge",
      "Advanced analytics",
      "VIP customer support"
    ]
  }
]

export default function SubscriptionPage() {
  const { data: session } = useSession()
  const [currentTier, setCurrentTier] = useState<string>("free")
  const [loading, setLoading] = useState<string | null>(null)

  useEffect(() => {
    fetchCurrentSubscription()
  }, [])

  const fetchCurrentSubscription = async () => {
    try {
      const response = await fetch("/api/user/subscription")
      if (response.ok) {
        const data = await response.json()
        setCurrentTier(data.currentTier || "free")
      }
    } catch (error) {
      console.error("Failed to fetch subscription:", error)
    }
  }

  const handleSubscribe = async (tierId: string) => {
    if (!session) return

    setLoading(tierId)
    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          priceId: tierId,
          tier: tierId 
        }),
      })

      if (response.ok) {
        const { url } = await response.json()
        window.location.href = url
      } else {
        throw new Error("Failed to create checkout session")
      }
    } catch (error) {
      console.error("Subscription error:", error)
    } finally {
      setLoading(null)
    }
  }

  const getCardBorderClass = (tier: SubscriptionTier) => {
    if (tier.popular) return "border-purple-500 shadow-lg"
    if (tier.id === currentTier) return "border-green-500"
    return "border-gray-200"
  }

  const getButtonVariant = (tier: SubscriptionTier) => {
    if (tier.id === currentTier) return "outline"
    if (tier.popular) return "default"
    return "outline"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Dating Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock premium features and find your perfect match faster with our subscription plans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionTiers.map((tier) => (
            <Card 
              key={tier.id} 
              className={`relative ${getCardBorderClass(tier)} transition-all hover:shadow-lg`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {tier.id === currentTier && (
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-green-600 text-white px-3 py-1">
                    Current Plan
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  tier.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  tier.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {tier.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">
                    ${tier.price}
                  </span>
                  <span className="text-gray-600">/{tier.interval}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => tier.id !== "free" && handleSubscribe(tier.id)}
                  disabled={tier.id === currentTier || loading === tier.id}
                  variant={getButtonVariant(tier)}
                  className="w-full"
                >
                  {loading === tier.id ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Processing...
                    </div>
                  ) : tier.id === currentTier ? (
                    "Current Plan"
                  ) : tier.id === "free" ? (
                    "Get Started"
                  ) : (
                    `Upgrade to ${tier.name}`
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="font-semibold">Feature</div>
                <div className="font-semibold text-center">Free</div>
                <div className="font-semibold text-center">Premium</div>
                <div className="font-semibold text-center">Gold</div>

                <Separator className="col-span-4 my-2" />

                <div>Daily Likes</div>
                <div className="text-center">5</div>
                <div className="text-center">Unlimited</div>
                <div className="text-center">Unlimited</div>

                <div>Super Likes</div>
                <div className="text-center">1/day</div>
                <div className="text-center">5/day</div>
                <div className="text-center">Unlimited</div>

                <div>Profile Boosts</div>
                <div className="text-center">-</div>
                <div className="text-center">1/month</div>
                <div className="text-center">1/week</div>

                <div>See Who Liked You</div>
                <div className="text-center">Limited</div>
                <div className="text-center">✓</div>
                <div className="text-center">✓</div>

                <div>Video Chat</div>
                <div className="text-center">-</div>
                <div className="text-center">-</div>
                <div className="text-center">✓</div>

                <div>Travel Mode</div>
                <div className="text-center">-</div>
                <div className="text-center">-</div>
                <div className="text-center">✓</div>

                <div>Priority Support</div>
                <div className="text-center">-</div>
                <div className="text-center">✓</div>
                <div className="text-center">VIP</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Satisfaction Guarantee */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">30-Day Money Back Guarantee</h3>
              <p className="text-gray-600">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
