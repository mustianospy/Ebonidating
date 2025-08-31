
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { validateRequired, APIError, handleAPIError, createSuccessResponse } from "@/lib/api-error-handler"
import { z } from "zod"

// Validation schema
const signupSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be less than 128 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  confirmPassword: z.string()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validationResult = signupSchema.safeParse(body)
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]
      throw new APIError(firstError.message, 400, "VALIDATION_ERROR")
    }

    const { name, email, password, confirmPassword } = validationResult.data

    // Check password confirmation
    if (password !== confirmPassword) {
      throw new APIError("Passwords do not match", 400, "PASSWORD_MISMATCH")
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim()

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    })

    if (existingUser) {
      throw new APIError("An account with this email already exists", 400, "USER_EXISTS")
    }

    // Check for rate limiting (optional - implement if needed)
    const recentSignups = await prisma.user.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 60 * 60 * 1000) // Last hour
        }
      }
    })

    if (recentSignups > 100) { // Adjust limit as needed
      throw new APIError("Too many signups. Please try again later.", 429, "RATE_LIMIT")
    }

    // Hash password
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Generate verification token
    const verificationToken = crypto.randomUUID() + "-" + Date.now()

    // Create user in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          name: name.trim(),
          email: normalizedEmail,
          password: hashedPassword,
          emailVerified: null,
          role: "USER",
        },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true
        }
      })

      // Create verification token
      await tx.verificationToken.create({
        data: {
          identifier: normalizedEmail,
          token: verificationToken,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        },
      })

      return user
    })

    // Send verification email
    try {
      const { sendVerificationEmail } = await import("@/lib/email")
      await sendVerificationEmail(normalizedEmail, verificationToken)
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError)
      // Don't fail the signup if email fails, but log it
    }

    return createSuccessResponse(
      {
        userId: result.id,
        email: result.email,
        requiresVerification: true
      },
      "Account created successfully! Please check your email to verify your account."
    )

  } catch (error) {
    console.error("Signup error:", error)
    return handleAPIError(error)
  }
}
