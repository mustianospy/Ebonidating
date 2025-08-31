
import type { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "./prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Please enter your email and password")
          }

          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(credentials.email)) {
            throw new Error("Please enter a valid email address")
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email.toLowerCase(),
            }
          })

          if (!user) {
            throw new Error("No account found with this email address")
          }

          if (!user.emailVerified) {
            throw new Error("Please verify your email before signing in")
          }

          // Check if account is suspended
          if (user.role === "SUSPENDED") {
            throw new Error("Your account has been suspended. Please contact support.")
          }

          // Check password if it exists
          if (user.password) {
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
            if (!isPasswordValid) {
              throw new Error("Invalid password")
            }
          } else {
            throw new Error("Please sign in with the provider you used to create your account")
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role,
            profileComplete: !!user.profile
          }
        } catch (error) {
          console.error("Authorization error:", error)
          throw error
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account?.provider === "google") {
          // Handle Google sign-in
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email! }
          })

          if (existingUser && existingUser.role === "SUSPENDED") {
            return false
          }

          // Auto-verify email for Google users
          if (!existingUser?.emailVerified) {
            await prisma.user.update({
              where: { email: user.email! },
              data: { emailVerified: new Date() }
            })
          }
        }
        return true
      } catch (error) {
        console.error("Sign in callback error:", error)
        return false
      }
    },
    async jwt({ token, user, account }) {
      try {
        if (user) {
          token.id = user.id
          token.role = user.role
          token.profileComplete = user.profileComplete
        }
        
        // Refresh user data on each token refresh
        if (token.id) {
          const dbUser = await prisma.user.findUnique({
            where: { id: token.id as string }
          })
          
          if (dbUser) {
            token.role = dbUser.role
            token.profileComplete = !!(dbUser.bio && dbUser.age && dbUser.location)
          }
        }
        
        return token
      } catch (error) {
        console.error("JWT callback error:", error)
        return token
      }
    },
    async session({ session, token }) {
      try {
        if (token && session.user) {
          session.user.id = token.id as string
          session.user.role = token.role as string
          session.user.profileComplete = token.profileComplete as boolean
        }
        return session
      } catch (error) {
        console.error("Session callback error:", error)
        return session
      }
    },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      try {
        if (isNewUser) {
          console.log(`New user signed up: ${user.email}`)
          // You can add welcome email or other onboarding logic here
        }
      } catch (error) {
        console.error("Sign in event error:", error)
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
}
