
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")

    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin?error=invalid-token", request.url))
    }

    // Find user with matching token
    const user = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token,
        emailVerificationExpires: {
          gt: new Date(),
        },
      },
    })

    if (!user) {
      return NextResponse.redirect(new URL("/auth/signin?error=invalid-or-expired-token", request.url))
    }

    // Update user as verified
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpires: null,
      },
    })

    return NextResponse.redirect(new URL("/auth/signin?verified=true", request.url))
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.redirect(new URL("/auth/signin?error=verification-failed", request.url))
  }
}
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { handleAPIError, APIError, createSuccessResponse } from "@/lib/api-error-handler"
import { sendWelcomeEmail } from "@/lib/email"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")
    const email = searchParams.get("email")

    if (!token || !email) {
      throw new APIError("Missing verification token or email", 400, "MISSING_PARAMETERS")
    }

    // Find and validate the verification token
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token,
        identifier: email.toLowerCase(),
        expires: {
          gt: new Date()
        }
      }
    })

    if (!verificationToken) {
      throw new APIError(
        "Invalid or expired verification token. Please request a new verification email.",
        400,
        "INVALID_TOKEN"
      )
    }

    // Update user's email verification status
    const user = await prisma.$transaction(async (tx) => {
      // Update user
      const updatedUser = await tx.user.update({
        where: { email: email.toLowerCase() },
        data: { 
          emailVerified: new Date(),
          updatedAt: new Date()
        },
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true
        }
      })

      // Delete the used verification token
      await tx.verificationToken.delete({
        where: {
          token_identifier: {
            token,
            identifier: email.toLowerCase()
          }
        }
      })

      // Delete any other verification tokens for this email
      await tx.verificationToken.deleteMany({
        where: {
          identifier: email.toLowerCase()
        }
      })

      return updatedUser
    })

    // Send welcome email
    try {
      await sendWelcomeEmail(user.email, user.name || "")
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError)
      // Don't fail the verification if welcome email fails
    }

    // Redirect to success page
    const redirectUrl = new URL("/auth/verification-success", request.url)
    return NextResponse.redirect(redirectUrl)

  } catch (error) {
    console.error("Email verification error:", error)
    
    // Redirect to error page with error message
    const redirectUrl = new URL("/auth/verification-error", request.url)
    if (error instanceof APIError) {
      redirectUrl.searchParams.set("error", error.message)
    } else {
      redirectUrl.searchParams.set("error", "An unexpected error occurred during verification")
    }
    
    return NextResponse.redirect(redirectUrl)
  }
}
