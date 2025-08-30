
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Users, Shield, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - EboniDating",
  description: "Terms and conditions for using EboniDating",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using EboniDating.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Scale className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Fair Terms</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">User Rights</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Safe Community</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <AlertTriangle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Clear Rules</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  By accessing or using EboniDating, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">To use EboniDating, you must:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Be at least 18 years old</li>
                  <li>• Have the legal capacity to enter into this agreement</li>
                  <li>• Not be prohibited from using our service under applicable law</li>
                  <li>• Provide accurate and truthful information</li>
                  <li>• Maintain the security of your account</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Account Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">You are responsible for:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Maintaining the confidentiality of your account credentials</li>
                  <li>• All activities that occur under your account</li>
                  <li>• Providing accurate profile information</li>
                  <li>• Using recent photos that represent your current appearance</li>
                  <li>• Notifying us immediately of any unauthorized use</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Prohibited Conduct</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">You agree not to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Create fake profiles or impersonate others</li>
                  <li>• Harass, abuse, or threaten other users</li>
                  <li>• Share inappropriate, offensive, or illegal content</li>
                  <li>• Solicit money or financial information from other users</li>
                  <li>• Use the service for commercial purposes without permission</li>
                  <li>• Attempt to hack or disrupt the service</li>
                  <li>• Share personal contact information in initial messages</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Subscription and Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Subscription Plans</h4>
                  <p className="text-gray-600">
                    We offer various subscription plans with different features and pricing. 
                    All prices are subject to change with notice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Billing</h4>
                  <p className="text-gray-600">
                    Subscriptions are billed in advance and automatically renew unless cancelled. 
                    You can cancel your subscription at any time through your account settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Refunds</h4>
                  <p className="text-gray-600">
                    Refunds are generally not provided for unused subscription time, except 
                    as required by law or at our discretion.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Content and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Your Content</h4>
                  <p className="text-gray-600">
                    You retain ownership of content you upload but grant us a license to use, 
                    display, and distribute it on our platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Our Content</h4>
                  <p className="text-gray-600">
                    All content on our platform, including design, text, graphics, and software, 
                    is owned by us and protected by intellectual property laws.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your information. By using our service, you 
                  consent to our data practices as described in the Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Disclaimers and Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Availability</h4>
                  <p className="text-gray-600">
                    We strive to provide reliable service but cannot guarantee uninterrupted access. 
                    We may modify or discontinue features at any time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">User Interactions</h4>
                  <p className="text-gray-600">
                    We are not responsible for the conduct of users or the outcome of any meetings 
                    or relationships formed through our service.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                  <p className="text-gray-600">
                    Our liability is limited to the greatest extent permitted by law. We are not 
                    liable for indirect, incidental, or consequential damages.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may suspend or terminate your account at any time for violation of these terms 
                  or for any other reason. You may also delete your account at any time through 
                  your account settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update these terms from time to time. We will notify you of significant 
                  changes by posting the updated terms on our app. Your continued use of the service 
                  after changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These terms are governed by the laws of the State of California, United States. 
                  Any disputes will be resolved in the courts of San Francisco County, California.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have questions about these terms, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>Email: legal@ebonidating.com</p>
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
