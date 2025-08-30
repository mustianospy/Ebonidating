"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Shield, Bell, Database } from "lucide-react"

export function SystemSettings() {
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [newUserRegistration, setNewUserRegistration] = useState(true)
  const [aiModeration, setAiModeration] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="database" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Database
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic platform settings and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Temporarily disable the platform for maintenance</p>
                </div>
                <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">New User Registration</Label>
                  <p className="text-sm text-muted-foreground">Allow new users to create accounts</p>
                </div>
                <Switch checked={newUserRegistration} onCheckedChange={setNewUserRegistration} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input id="platform-name" defaultValue="EboniDating" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" type="email" defaultValue="support@ebonidating.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maintenance-message">Maintenance Message</Label>
                <Textarea
                  id="maintenance-message"
                  placeholder="Message to display when maintenance mode is enabled"
                  defaultValue="We're currently performing scheduled maintenance. Please check back soon!"
                />
              </div>

              <Button>Save General Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security and moderation features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">AI Content Moderation</Label>
                  <p className="text-sm text-muted-foreground">Automatically moderate user content using AI</p>
                </div>
                <Switch checked={aiModeration} onCheckedChange={setAiModeration} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                <Input id="max-login-attempts" type="number" defaultValue="5" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="60" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-min-length">Minimum Password Length</Label>
                <Input id="password-min-length" type="number" defaultValue="8" />
              </div>

              <Button>Save Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send email notifications for important events</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" defaultValue="smtp.gmail.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-port">SMTP Port</Label>
                <Input id="smtp-port" type="number" defaultValue="587" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="from-email">From Email</Label>
                <Input id="from-email" type="email" defaultValue="noreply@ebonidating.com" />
              </div>

              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database">
          <Card>
            <CardHeader>
              <CardTitle>Database Management</CardTitle>
              <CardDescription>Monitor and manage database operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Total Users</h4>
                  <p className="text-2xl font-bold">12,547</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Total Messages</h4>
                  <p className="text-2xl font-bold">89,234</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Database Size</h4>
                  <p className="text-2xl font-bold">2.4 GB</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button variant="outline" className="w-full bg-transparent">
                  <Database className="h-4 w-4 mr-2" />
                  Run Database Backup
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Database className="h-4 w-4 mr-2" />
                  Optimize Database
                </Button>
                <Button variant="outline" className="w-full text-red-600 bg-transparent">
                  <Database className="h-4 w-4 mr-2" />
                  Clear Old Data (90+ days)
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Settings, Save, RefreshCw } from "lucide-react"

export function SystemSettings() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerificationRequired: true,
    maxPhotosPerUser: 6,
    maxAge: 99,
    minAge: 18,
    systemMessage: "",
    reportAutoReview: true
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Platform Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="maintenance">Maintenance Mode</Label>
                  <p className="text-sm text-gray-500">Disable user access for maintenance</p>
                </div>
                <Switch
                  id="maintenance"
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({ ...prev, maintenanceMode: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="registration">Registration Enabled</Label>
                  <p className="text-sm text-gray-500">Allow new user registrations</p>
                </div>
                <Switch
                  id="registration"
                  checked={settings.registrationEnabled}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({ ...prev, registrationEnabled: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-verification">Email Verification Required</Label>
                  <p className="text-sm text-gray-500">Require email verification for new accounts</p>
                </div>
                <Switch
                  id="email-verification"
                  checked={settings.emailVerificationRequired}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({ ...prev, emailVerificationRequired: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-review">Auto Review Reports</Label>
                  <p className="text-sm text-gray-500">Automatically review simple reports</p>
                </div>
                <Switch
                  id="auto-review"
                  checked={settings.reportAutoReview}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({ ...prev, reportAutoReview: checked }))
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="max-photos">Max Photos Per User</Label>
                <Input
                  id="max-photos"
                  type="number"
                  value={settings.maxPhotosPerUser}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, maxPhotosPerUser: parseInt(e.target.value) }))
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="min-age">Minimum Age</Label>
                <Input
                  id="min-age"
                  type="number"
                  value={settings.minAge}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, minAge: parseInt(e.target.value) }))
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="max-age">Maximum Age</Label>
                <Input
                  id="max-age"
                  type="number"
                  value={settings.maxAge}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, maxAge: parseInt(e.target.value) }))
                  }
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="system-message">System Message</Label>
            <Textarea
              id="system-message"
              placeholder="Enter a system-wide message to display to users..."
              value={settings.systemMessage}
              onChange={(e) => 
                setSettings(prev => ({ ...prev, systemMessage: e.target.value }))
              }
              className="mt-1"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
