
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Star, Check, ArrowRight } from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="EboniDating" className="h-10 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-purple-600">Eboni Dating</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Connect with like-minded individuals in our inclusive, safe, and premium dating platform designed for meaningful relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Start Dating Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/discover">
                  <Button size="lg" variant="outline">
                    Browse Profiles
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/hero-male.png"
                    alt="Happy male user"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl mt-8">
                  <img
                    src="/hero-female.png"
                    alt="Happy female user"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose EboniDating?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Safe & Secure</CardTitle>
              <CardDescription>
                Advanced safety features, profile verification, and comprehensive reporting tools
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Inclusive Community</CardTitle>
              <CardDescription>
                Welcoming space for all genders, orientations, and relationship styles
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Star className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Premium Experience</CardTitle>
              <CardDescription>
                Advanced matching algorithms, unlimited likes, and exclusive features
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Get started with basic features</CardDescription>
              <div className="text-3xl font-bold">$0<span className="text-lg text-gray-500">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />5 likes per day</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Basic matching</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Limited messaging</li>
              </ul>
              <Link href="/auth/signup" className="block mt-6">
                <Button className="w-full" variant="outline">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-purple-500 border-2">
            <CardHeader>
              <CardTitle>Plus</CardTitle>
              <CardDescription>Enhanced dating experience</CardDescription>
              <div className="text-3xl font-bold">$9.99<span className="text-lg text-gray-500">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Unlimited likes</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Advanced filters</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Read receipts</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Priority support</li>
              </ul>
              <Link href="/subscription" className="block mt-6">
                <Button className="w-full">Upgrade to Plus</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Premium features for serious daters</CardDescription>
              <div className="text-3xl font-bold">$19.99<span className="text-lg text-gray-500">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Everything in Plus</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Super likes</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Video calls</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Travel mode</li>
              </ul>
              <Link href="/subscription" className="block mt-6">
                <Button className="w-full">Upgrade to Pro</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="EboniDating" className="h-8 w-auto filter brightness-0 invert" />
              </div>
              <p className="text-gray-400">
                Building meaningful connections in a safe, inclusive community.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/discover" className="hover:text-white">Discover</Link></li>
                <li><Link href="/matches" className="hover:text-white">Matches</Link></li>
                <li><Link href="/chat" className="hover:text-white">Chat</Link></li>
                <li><Link href="/subscription" className="hover:text-white">Premium</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/feedback" className="hover:text-white">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
                <li><Link href="/guidelines" className="hover:text-white">Community Guidelines</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EboniDating. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
