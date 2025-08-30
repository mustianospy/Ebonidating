
import type { Metadata" from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Star, Heart, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Feedback - EboniDating",
  description: "Share your feedback to help us improve",
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">We Value Your Feedback</h1>
          <p className="text-xl text-gray-600">
            Help us improve EboniDating by sharing your thoughts and suggestions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6 text-purple-600" />
                <span>Share Your Experience</span>
              </CardTitle>
              <CardDescription>
                Your feedback helps us create a better dating experience for everyone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-3">
                  <Label>Overall Experience Rating</Label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Star
                        key={rating}
                        className="h-8 w-8 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>What type of feedback is this?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feature-request">Feature Request</SelectItem>
                      <SelectItem value="bug-report">Bug Report</SelectItem>
                      <SelectItem value="general-feedback">General Feedback</SelectItem>
                      <SelectItem value="app-improvement">App Improvement</SelectItem>
                      <SelectItem value="user-experience">User Experience</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>How often do you use EboniDating?</Label>
                  <RadioGroup>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Several times a week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">A few times a month</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rarely" id="rarely" />
                      <Label htmlFor="rarely">Rarely</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your feedback"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Please share your detailed feedback, suggestions, or report any issues you've encountered..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                  <p className="text-sm text-gray-600">
                    Leave your email if you'd like us to follow up on your feedback.
                  </p>
                </div>

                <Button className="w-full">
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Feature Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Have an idea for a new feature? We'd love to hear it! Your suggestions 
                  help shape the future of EboniDating.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Bug Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Found something that's not working correctly? Let us know and we'll 
                  fix it as soon as possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
