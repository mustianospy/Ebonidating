
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Cookie, Settings, Eye, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy - EboniDating",
  description: "How we use cookies to improve your experience",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">
            Learn how we use cookies to enhance your EboniDating experience.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Cookie className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Essential</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Settings className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Functional</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <BarChart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Analytics</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Marketing</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="essential" className="text-base font-medium">Essential Cookies</Label>
                    <p className="text-sm text-gray-600">Required for the website to function properly</p>
                  </div>
                  <Switch id="essential" checked disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="functional" className="text-base font-medium">Functional Cookies</Label>
                    <p className="text-sm text-gray-600">Remember your preferences and settings</p>
                  </div>
                  <Switch id="functional" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="analytics" className="text-base font-medium">Analytics Cookies</Label>
                    <p className="text-sm text-gray-600">Help us understand how you use our site</p>
                  </div>
                  <Switch id="analytics" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketing" className="text-base font-medium">Marketing Cookies</Label>
                    <p className="text-sm text-gray-600">Used to show you relevant advertisements</p>
                  </div>
                  <Switch id="marketing" />
                </div>
                <Button className="w-full">Save Preferences</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and providing personalized content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Cookie className="h-5 w-5 text-purple-600 mr-2" />
                    Essential Cookies
                  </h4>
                  <p className="text-gray-600 mb-2">
                    These cookies are necessary for our website to function properly and cannot be disabled.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Authentication and security</li>
                    <li>• Session management</li>
                    <li>• Load balancing</li>
                    <li>• CSRF protection</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Settings className="h-5 w-5 text-purple-600 mr-2" />
                    Functional Cookies
                  </h4>
                  <p className="text-gray-600 mb-2">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• Location preferences</li>
                    <li>• Search filters</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <BarChart className="h-5 w-5 text-purple-600 mr-2" />
                    Analytics Cookies
                  </h4>
                  <p className="text-gray-600 mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Page views and traffic sources</li>
                    <li>• User behavior patterns</li>
                    <li>• Performance metrics</li>
                    <li>• Error tracking</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Eye className="h-5 w-5 text-purple-600 mr-2" />
                    Marketing Cookies
                  </h4>
                  <p className="text-gray-600 mb-2">
                    These cookies are used to deliver relevant advertisements and track campaign performance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Targeted advertising</li>
                    <li>• Retargeting campaigns</li>
                    <li>• Social media integration</li>
                    <li>• Conversion tracking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We also use third-party services that may place cookies on your device:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Google Analytics:</strong> Website analytics and user behavior tracking</li>
                  <li>• <strong>Stripe:</strong> Payment processing and fraud prevention</li>
                  <li>• <strong>Social Media Platforms:</strong> Social login and sharing features</li>
                  <li>• <strong>Customer Support:</strong> Live chat and help desk functionality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Browser Settings</h4>
                  <p className="text-gray-600">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• View which cookies are stored</li>
                    <li>• Delete existing cookies</li>
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies</li>
                    <li>• Set cookie expiration preferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Our Cookie Settings</h4>
                  <p className="text-gray-600">
                    Use the cookie preferences panel above to control which types of cookies we can use. 
                    Your choices will be remembered for future visits.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Different cookies have different retention periods:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li>• <strong>Persistent Cookies:</strong> Remain for a set period (typically 1-2 years)</li>
                  <li>• <strong>Authentication Cookies:</strong> Usually expire after 30 days of inactivity</li>
                  <li>• <strong>Analytics Cookies:</strong> Typically retained for 2 years</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any 
                  significant changes by posting the updated policy on our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>Email: privacy@ebonidating.com</p>
                  <p>Address: 123 Dating Street, San Francisco, CA 94105</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
