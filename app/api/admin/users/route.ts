
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

    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 20,
      include: {
        subscription: {
          where: {
            status: "ACTIVE"
          }
        }
      }
    })

    const formattedUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      tier: user.subscription?.[0]?.tier?.toLowerCase() || "free",
      joinedAt: user.createdAt.toISOString(),
      lastActive: user.lastActive?.toISOString() || user.createdAt.toISOString()
    }))

    return NextResponse.json({
      users: formattedUsers
    })

  } catch (error) {
    console.error("Admin users error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
