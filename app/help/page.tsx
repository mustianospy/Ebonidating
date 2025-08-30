
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, Shield, Heart, Users, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Help Center - EboniDating",
  description: "Get help and support for your EboniDating experience",
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions and get support
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for help..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Learn the basics of using EboniDating</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Creating your profile</li>
                <li>• Adding photos</li>
                <li>• Setting preferences</li>
                <li>• Finding matches</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Messaging & Matches</CardTitle>
              <CardDescription>Everything about connecting with others</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• How matching works</li>
                <li>• Starting conversations</li>
                <li>• Video calls</li>
                <li>• Managing conversations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Safety & Privacy</CardTitle>
              <CardDescription>Stay safe while dating online</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Safety guidelines</li>
                <li>• Reporting users</li>
                <li>• Blocking features</li>
                <li>• Privacy settings</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Subscription & Billing</CardTitle>
              <CardDescription>Manage your premium features</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Subscription plans</li>
                <li>• Payment methods</li>
                <li>• Cancellation policy</li>
                <li>• Refunds</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Settings className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Profile settings</li>
                <li>• Notification preferences</li>
                <li>• Account deletion</li>
                <li>• Data export</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Still need help? Get in touch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full" variant="outline">
                  Send Message
                </Button>
                <p className="text-sm text-gray-600">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-left">How do I delete my account?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-left text-gray-600">
                  You can delete your account by going to Settings {'>'} Account {'>'} Delete Account. 
                  This action is permanent and cannot be undone.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-left">How does the matching algorithm work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-left text-gray-600">
                  Our algorithm considers your preferences, interests, location, and activity 
                  to suggest compatible matches.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-left">Can I change my subscription plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-left text-gray-600">
                  Yes, you can upgrade or downgrade your plan anytime from the Subscription page. 
                  Changes take effect at your next billing cycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
