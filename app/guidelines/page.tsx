
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Shield, Star, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Community Guidelines - EboniDating",
  description: "Guidelines for creating a safe and welcoming community",
}

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Guidelines</h1>
          <p className="text-xl text-gray-600">
            Creating a safe, inclusive, and respectful community for everyone.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>Be Authentic</CardTitle>
                <p className="text-sm text-gray-600">Present your true self</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>Be Respectful</CardTitle>
                <p className="text-sm text-gray-600">Treat others with kindness</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>Stay Safe</CardTitle>
                <p className="text-sm text-gray-600">Protect yourself and others</p>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  What We Encourage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Authentic Profiles</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use recent, genuine photos</li>
                      <li>• Write honest bio descriptions</li>
                      <li>• Share your real interests</li>
                      <li>• Be clear about your intentions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Respectful Communication</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Start with friendly greetings</li>
                      <li>• Ask thoughtful questions</li>
                      <li>• Respect boundaries and preferences</li>
                      <li>• Accept rejection gracefully</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Inclusive Behavior</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Welcome all identities and orientations</li>
                      <li>• Use preferred pronouns</li>
                      <li>• Avoid assumptions about others</li>
                      <li>• Celebrate diversity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Safe Practices</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Meet in public places initially</li>
                      <li>• Tell friends about your plans</li>
                      <li>• Trust your instincts</li>
                      <li>• Report suspicious behavior</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  What We Don't Allow
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Fake Profiles & Catfishing</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Using someone else's photos</li>
                    <li>• Creating fictional personas</li>
                    <li>• Misrepresenting your age, location, or identity</li>
                    <li>• Multiple accounts for the same person</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Harassment & Abuse</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sending unwanted explicit content</li>
                    <li>• Persistent messaging after being blocked</li>
                    <li>• Threats, intimidation, or stalking</li>
                    <li>• Discriminatory language or hate speech</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Inappropriate Content</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Nudity or sexually explicit photos</li>
                    <li>• Violent or disturbing images</li>
                    <li>• Illegal or harmful content</li>
                    <li>• Spam or promotional material</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Scams & Exploitation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Asking for money or financial information</li>
                    <li>• Promoting external services or websites</li>
                    <li>• Romance scams or catfishing for money</li>
                    <li>• Any form of blackmail or extortion</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Photos</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-1">✓ Do:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Use clear, recent photos of yourself</li>
                        <li>• Include both close-up and full-body shots</li>
                        <li>• Show your face clearly in your main photo</li>
                        <li>• Upload high-quality images</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-700 mb-1">✗ Don't:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Use photos of celebrities or other people</li>
                        <li>• Include children in your photos</li>
                        <li>• Upload blurry or heavily filtered images</li>
                        <li>• Share inappropriate or explicit content</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Bio and Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-1">✓ Do:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Be honest about your interests and goals</li>
                        <li>• Use positive, welcoming language</li>
                        <li>• Share what makes you unique</li>
                        <li>• Proofread for spelling and grammar</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-700 mb-1">✗ Don't:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Include contact information or social media</li>
                        <li>• Write negative or hostile content</li>
                        <li>• Make discriminatory statements</li>
                        <li>• Promote other services or businesses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Messaging Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Great First Messages</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-700">"Hi! I noticed you love hiking too. What's your favorite trail in the area?"</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-700">"Your profile made me smile! I'm also a coffee enthusiast. Any café recommendations?"</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Messages to Avoid</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-gray-700">"Hey" (too generic)</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-gray-700">"You're hot" (too forward)</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-gray-700">Copying and pasting the same message</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reporting and Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">When to Report</h4>
                  <p className="text-gray-600 mb-2">Report users if they:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Send inappropriate or offensive messages</li>
                    <li>• Use fake photos or information</li>
                    <li>• Ask for money or personal information</li>
                    <li>• Make you feel unsafe or uncomfortable</li>
                    <li>• Violate any of our community guidelines</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">How to Report</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use the report button on user profiles</li>
                    <li>• Report specific messages in conversations</li>
                    <li>• Contact our support team directly</li>
                    <li>• Block users who make you uncomfortable</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Our Response</h4>
                  <p className="text-gray-600">
                    We take all reports seriously and review them within 24 hours. Depending on the 
                    severity, we may warn, suspend, or permanently ban users who violate our guidelines.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consequences for Violations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Warning</h4>
                    <p className="text-sm text-gray-600">First-time minor violations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Suspension</h4>
                    <p className="text-sm text-gray-600">Temporary account restriction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Permanent Ban</h4>
                    <p className="text-sm text-gray-600">Serious or repeated violations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Have questions about our community guidelines or need to report something? 
                  We're here to help.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>Email: community@ebonidating.com</p>
                  <p>Safety Team: safety@ebonidating.com</p>
                  <p>General Support: support@ebonidating.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
