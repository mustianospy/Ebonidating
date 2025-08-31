
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth"
import { prisma } from "./prisma"
import { NextRequest, NextResponse } from "next/server"

export async function requireAdmin(request: NextRequest) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.email) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { role: true }
  })

  if (!user || user.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return null
}
