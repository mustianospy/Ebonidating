
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

    const reports = await prisma.report.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 20,
      include: {
        reporter: {
          select: {
            name: true
          }
        },
        reportedUser: {
          select: {
            name: true
          }
        }
      }
    })

    const formattedReports = reports.map(report => ({
      id: report.id,
      type: report.type,
      reason: report.reason,
      reportedUser: report.reportedUser.name,
      reporterUser: report.reporter.name,
      status: report.status.toLowerCase(),
      createdAt: report.createdAt.toISOString()
    }))

    return NextResponse.json({
      reports: formattedReports
    })

  } catch (error) {
    console.error("Admin reports error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
