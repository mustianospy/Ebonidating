
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - EboniDating",
  description: "Our commitment to protecting your privacy",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is our priority. Learn how we protect your data.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Data Protection</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Lock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">User Control</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-gray-600">
                    We collect information you provide when creating your profile, including your name, 
                    age, location, photos, and preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Usage Data</h4>
                  <p className="text-gray-600">
                    We collect information about how you use our app, including your interactions, 
                    matches, and communication patterns.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Device Information</h4>
                  <p className="text-gray-600">
                    We may collect device-specific information such as your device model, 
                    operating system, and unique device identifiers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide and maintain our dating service</li>
                  <li>• Match you with compatible users based on your preferences</li>
                  <li>• Facilitate communication between matched users</li>
                  <li>• Improve our app and develop new features</li>
                  <li>• Ensure safety and security of our platform</li>
                  <li>• Send you important updates and notifications</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell your personal information. We may share your information in the following situations:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• With other users as part of the matching and communication features</li>
                  <li>• With service providers who help us operate our platform</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• In case of a business transfer or merger</li>
                  <li>• With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Access controls and authentication</li>
                  <li>• Secure data centers and infrastructure</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Access and review your personal data</li>
                  <li>• Correct inaccurate or incomplete information</li>
                  <li>• Delete your account and associated data</li>
                  <li>• Export your data in a portable format</li>
                  <li>• Opt out of certain communications</li>
                  <li>• Control your privacy settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We retain your information for as long as your account is active or as needed to provide 
                  our services. When you delete your account, we will delete your personal information 
                  within 30 days, except where we need to retain it for legal, safety, or security reasons.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data during such transfers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our service is not intended for users under 18 years of age. We do not knowingly 
                  collect personal information from children under 18.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any 
                  significant changes by posting the new policy on our app and updating the 
                  "last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
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
