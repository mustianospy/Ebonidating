"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Star, Check, ArrowRight, Sparkles, MessageCircle, Zap, CheckCircle, Crown } from "lucide-react"
import Image from "next/image"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden">
      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img src="/logo.png" alt="EboniDating" className="h-12 w-auto" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EboniDating
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-purple-700 hover:text-purple-900 hover:bg-purple-50">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Find Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {" "}Perfect Match
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Connect with like-minded individuals in a safe, inclusive space designed for meaningful relationships. 
                Your journey to love starts here.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Start Your Journey
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="overflow-hidden shadow-lg">
                  <Image
                    src="/hero-female.png"
                    alt="Happy couple"
                    width={200}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden shadow-lg">
                  <Image
                    src="/outdoor-hiker.png"
                    alt="Individual portrait"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="overflow-hidden shadow-lg">
                  <Image
                    src="/hero-male.png"
                    alt="Professional portrait"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden shadow-lg">
                  <Image
                    src="/diverse-group.png"
                    alt="Group of friends"
                    width={200}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-medium">4.8★ App Store</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium">1M+ Connections</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose EboniDating?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience dating reimagined with our cutting-edge features designed for meaningful connections
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Safe & Secure</CardTitle>
              <CardDescription className="text-base">
                Advanced safety features, profile verification, and comprehensive reporting tools keep you protected
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Smart Matching</CardTitle>
              <CardDescription className="text-base">
                AI-powered algorithms analyze compatibility to suggest your most promising connections
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Real-time Chat</CardTitle>
              <CardDescription className="text-base">
                Instant messaging, video calls, and voice notes to build genuine connections
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Love Stories That Inspire</h2>
            <p className="text-xl opacity-90">Real couples who found their perfect match on EboniDating</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-pink-300" />
              </div>
              <blockquote className="text-lg italic mb-4">
                "I found my soulmate within the first week. The matching algorithm is incredible!"
              </blockquote>
              <cite className="font-semibold">— Sarah & Marcus</cite>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Sparkles className="h-12 w-12 text-yellow-300" />
              </div>
              <blockquote className="text-lg italic mb-4">
                "Safe, inclusive, and genuinely focused on meaningful relationships."
              </blockquote>
              <cite className="font-semibold">— Jordan & Alex</cite>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-indigo-300" />
              </div>
              <blockquote className="text-lg italic mb-4">
                "The video call feature helped us connect before our first date. Perfect!"
              </blockquote>
              <cite className="font-semibold">— Taylor & Jamie</cite>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in just 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="relative mx-auto w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">1</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-yellow-800" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Create Your Profile</h3>
            <p className="text-gray-600">
              Add photos, write your bio, and tell us what you're looking for. Our verification system ensures authentic profiles.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mx-auto w-20 h-20 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">2</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <Zap className="h-3 w-3 text-green-800" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Matching</h3>
            <p className="text-gray-600">
              Our AI analyzes compatibility factors to suggest quality matches. Swipe, like, or use advanced filters to find your type.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mx-auto w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">3</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                <Heart className="h-3 w-3 text-pink-800" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Connect & Date</h3>
            <p className="text-gray-600">
              Chat, share voice notes, or hop on a video call. Plan dates with confidence using our safety features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock premium features and find your perfect match faster
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="relative">
            <CardHeader className="text-center pb-4">
              <Heart className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="text-3xl font-bold">$0</div>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">10 daily swipes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Basic messaging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Profile creation</span>
                </li>
              </ul>
              <Link href="/auth/signup">
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-purple-500 ring-2 ring-purple-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>
            <CardHeader className="text-center pb-4">
              <Star className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-2xl">Premium</CardTitle>
              <div className="text-3xl font-bold">$14.99</div>
              <CardDescription>For serious daters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Unlimited swipes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">10 super likes per day</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Advanced filters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Travel mode</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">3 boosts per month</span>
                </li>
              </ul>
              <Link href="/auth/signup">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Choose Premium
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Gold Plan */}
          <Card className="relative">
            <CardHeader className="text-center pb-4">
              <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <CardTitle className="text-2xl">Gold</CardTitle>
              <div className="text-3xl font-bold">$24.99</div>
              <CardDescription>Ultimate dating experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Everything in Premium</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Unlimited super likes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Unlimited boosts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Video calls</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">VIP profile badge</span>
                </li>
              </ul>
              <Link href="/auth/signup">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Go Gold
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Love?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of singles who found their perfect match on EboniDating
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="mr-2 h-5 w-5" />
                Start Your Love Story
              </Button>
            </Link>
            <Link href="/discover">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                Explore Profiles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/logo.png" alt="EboniDating" className="h-10 w-auto filter brightness-0 invert" />
                <span className="text-xl font-bold">EboniDating</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Building meaningful connections in a safe, inclusive community. Where authentic relationships begin.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Features</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/discover" className="hover:text-white transition-colors">Discover</Link></li>
                <li><Link href="/matches" className="hover:text-white transition-colors">Matches</Link></li>
                <li><Link href="/chat" className="hover:text-white transition-colors">Chat</Link></li>
                <li><Link href="/subscription" className="hover:text-white transition-colors">Premium</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/safety" className="hover:text-white transition-colors">Safety</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/guidelines" className="hover:text-white transition-colors">Community Guidelines</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 EboniDating. All rights reserved.</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400">Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">for meaningful connections</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}