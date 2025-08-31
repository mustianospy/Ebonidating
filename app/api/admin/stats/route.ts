
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.email !== "admin@ebonidating.com") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const now = new Date()
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    const [
      totalUsers,
      activeUsers,
      totalMatches,
      totalReports,
      premiumUsers,
      goldUsers,
      totalRevenue
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          lastActive: {
            gte: firstDayOfMonth
          }
        }
      }),
      prisma.match.count(),
      prisma.report.count({
        where: {
          status: "PENDING"
        }
      }),
      prisma.subscription.count({
        where: {
          tier: "PREMIUM",
          status: "ACTIVE"
        }
      }),
      prisma.subscription.count({
        where: {
          tier: "GOLD", 
          status: "ACTIVE"
        }
      }),
      prisma.subscription.aggregate({
        _sum: {
          amount: true
        },
        where: {
          status: "ACTIVE",
          createdAt: {
            gte: firstDayOfMonth
          }
        }
      })
    ])

    const monthlyRevenue = totalRevenue._sum.amount || 0

    return NextResponse.json({
      totalUsers,
      activeUsers,
      totalMatches,
      totalReports,
      premiumUsers,
      goldUsers,
      monthlyRevenue,
      totalRevenue: (premiumUsers * 29.99) + (goldUsers * 49.99)
    })

  } catch (error) {
    console.error("Admin stats error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
