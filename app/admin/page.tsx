
"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  DollarSign, 
  Heart, 
  AlertTriangle,
  TrendingUp,
  UserX,
  Crown,
  Star,
  MessageSquare,
  Calendar
} from "lucide-react"

interface AdminStats {
  totalUsers: number
  activeUsers: number
  totalRevenue: number
  monthlyRevenue: number
  totalMatches: number
  totalReports: number
  premiumUsers: number
  goldUsers: number
}

interface RecentUser {
  id: string
  name: string
  email: string
  tier: string
  joinedAt: string
  lastActive: string
}

interface Report {
  id: string
  type: string
  reason: string
  reportedUser: string
  reporterUser: string
  status: string
  createdAt: string
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [recentUsers, setRecentUsers] = useState<RecentUser[]>([])
  const [recentReports, setRecentReports] = useState<Report[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return
    
    if (!session) {
      router.push("/auth/signin")
      return
    }

    // Check if user is admin
    if (session.user.email !== "admin@ebonidating.com") {
      router.push("/")
      return
    }

    fetchAdminData()
  }, [session, status])

  const fetchAdminData = async () => {
    try {
      const [statsRes, usersRes, reportsRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch("/api/admin/users"),
        fetch("/api/admin/reports")
      ])

      if (statsRes.ok) {
        const statsData = await statsRes.json()
        setStats(statsData)
      }

      if (usersRes.ok) {
        const usersData = await usersRes.json()
        setRecentUsers(usersData.users || [])
      }

      if (reportsRes.ok) {
        const reportsData = await reportsRes.json()
        setRecentReports(reportsData.reports || [])
      }
    } catch (error) {
      console.error("Failed to fetch admin data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!session || session.user.email !== "admin@ebonidating.com") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-96">
          <CardContent className="pt-6 text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-gray-600">You don't have permission to access this area.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your dating platform</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">{stats?.totalUsers || 0}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stats?.activeUsers || 0} active this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold">${stats?.monthlyRevenue || 0}</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                ${stats?.totalRevenue || 0} total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Matches</p>
                  <p className="text-2xl font-bold">{stats?.totalMatches || 0}</p>
                </div>
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Success rate: 85%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Reports</p>
                  <p className="text-2xl font-bold">{stats?.totalReports || 0}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Requires attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Premium Users Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Premium Users</p>
                  <p className="text-2xl font-bold">{stats?.premiumUsers || 0}</p>
                </div>
                <Star className="w-8 h-8 text-purple-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {((stats?.premiumUsers || 0) / (stats?.totalUsers || 1) * 100).toFixed(1)}% conversion rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Gold Users</p>
                  <p className="text-2xl font-bold">{stats?.goldUsers || 0}</p>
                </div>
                <Crown className="w-8 h-8 text-yellow-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {((stats?.goldUsers || 0) / (stats?.totalUsers || 1) * 100).toFixed(1)}% conversion rate
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          user.tier === "gold" ? "default" : 
                          user.tier === "premium" ? "secondary" : 
                          "outline"
                        }>
                          {user.tier}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{report.type}</p>
                        <p className="text-sm text-gray-500">{report.reason}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(report.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          report.status === "pending" ? "secondary" :
                          report.status === "resolved" ? "default" :
                          "destructive"
                        }>
                          {report.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">${stats?.monthlyRevenue || 0}</p>
                      <p className="text-xs text-green-600">+12.5% from last month</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-gray-600">Premium Revenue</p>
                      <p className="text-2xl font-bold">${((stats?.premiumUsers || 0) * 29.99).toFixed(2)}</p>
                      <p className="text-xs text-gray-600">Monthly recurring</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-gray-600">Gold Revenue</p>
                      <p className="text-2xl font-bold">${((stats?.goldUsers || 0) * 49.99).toFixed(2)}</p>
                      <p className="text-xs text-gray-600">Monthly recurring</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Platform Settings</h3>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Maintenance Mode
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Update Pricing
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Feature Flags
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Content Moderation</h3>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Review Queue
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Auto-Moderation Rules
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Banned Words
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
