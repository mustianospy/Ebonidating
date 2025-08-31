
import nodemailer from "nodemailer"

interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null
  private isConfigured = false

  constructor() {
    this.initializeTransporter()
  }

  private initializeTransporter() {
    try {
      const emailConfig = this.getEmailConfig()
      if (!emailConfig) {
        console.warn("Email service not configured - emails will not be sent")
        return
      }

      this.transporter = nodemailer.createTransporter(emailConfig)
      this.isConfigured = true

      // Verify connection
      this.transporter.verify((error) => {
        if (error) {
          console.error("Email service verification failed:", error)
          this.isConfigured = false
        } else {
          console.log("Email service ready")
        }
      })
    } catch (error) {
      console.error("Failed to initialize email service:", error)
      this.isConfigured = false
    }
  }

  private getEmailConfig(): EmailConfig | null {
    // Try different email provider configurations
    
    // Gmail configuration
    if (process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD) {
      return {
        host: process.env.EMAIL_SERVER_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      }
    }

    // Generic SMTP configuration
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      return {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }
    }

    return null
  }

  private async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.isConfigured || !this.transporter) {
      console.warn("Email service not configured - skipping email send")
      return false
    }

    try {
      const emailOptions = {
        from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER || process.env.SMTP_USER,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text || options.html.replace(/<[^>]*>/g, ""),
      }

      const result = await this.transporter.sendMail(emailOptions)
      console.log("Email sent successfully:", result.messageId)
      return true
    } catch (error) {
      console.error("Failed to send email:", error)
      return false
    }
  }

  async sendVerificationEmail(email: string, token: string): Promise<boolean> {
    const verificationUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/auth/verify-email?token=${token}&email=${encodeURIComponent(email)}`

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Verify Your EboniDating Account</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to EboniDating!</h1>
            </div>
            <div class="content">
              <h2>Verify Your Email Address</h2>
              <p>Thank you for signing up with EboniDating. To complete your registration and start connecting with amazing people, please verify your email address by clicking the button below:</p>
              
              <div style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verify Email Address</a>
              </div>
              
              <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
              <p style="word-break: break-all; background: #eee; padding: 10px; border-radius: 5px;">${verificationUrl}</p>
              
              <p><strong>This verification link will expire in 24 hours.</strong></p>
              
              <p>If you didn't create an account with EboniDating, you can safely ignore this email.</p>
              
              <div class="footer">
                <p>Best regards,<br>The EboniDating Team</p>
                <p><small>This is an automated email. Please do not reply to this message.</small></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    return this.sendEmail({
      to: email,
      subject: "Verify Your EboniDating Account",
      html,
    })
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<boolean> {
    const resetUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/auth/reset-password?token=${token}&email=${encodeURIComponent(email)}`

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Reset Your EboniDating Password</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .warning { background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 15px; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Password Reset Request</h1>
            </div>
            <div class="content">
              <h2>Reset Your Password</h2>
              <p>We received a request to reset your password for your EboniDating account. Click the button below to create a new password:</p>
              
              <div style="text-align: center;">
                <a href="${resetUrl}" class="button">Reset Password</a>
              </div>
              
              <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
              <p style="word-break: break-all; background: #eee; padding: 10px; border-radius: 5px;">${resetUrl}</p>
              
              <div class="warning">
                <strong>Important:</strong> This password reset link will expire in 1 hour for security reasons.
              </div>
              
              <p>If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.</p>
              
              <div class="footer">
                <p>Best regards,<br>The EboniDating Team</p>
                <p><small>This is an automated email. Please do not reply to this message.</small></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    return this.sendEmail({
      to: email,
      subject: "Reset Your EboniDating Password",
      html,
    })
  }

  async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to EboniDating!</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .feature { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to EboniDating, ${name}!</h1>
            </div>
            <div class="content">
              <h2>Your Journey Begins Now</h2>
              <p>Congratulations! Your email has been verified and your EboniDating account is now active. You're ready to start connecting with amazing people in your area.</p>
              
              <div style="text-align: center;">
                <a href="${process.env.NEXTAUTH_URL || "http://localhost:3000"}/onboarding" class="button">Complete Your Profile</a>
              </div>
              
              <h3>What's Next?</h3>
              
              <div class="feature">
                <h4>📸 Add Your Photos</h4>
                <p>Upload your best photos to make a great first impression</p>
              </div>
              
              <div class="feature">
                <h4>✍️ Write Your Bio</h4>
                <p>Tell your story and what makes you unique</p>
              </div>
              
              <div class="feature">
                <h4>❤️ Start Matching</h4>
                <p>Discover compatible people and start meaningful conversations</p>
              </div>
              
              <div class="footer">
                <p>Happy dating!<br>The EboniDating Team</p>
                <p><small>Need help? Contact our support team anytime.</small></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    return this.sendEmail({
      to: email,
      subject: "Welcome to EboniDating - Let's Get Started!",
      html,
    })
  }
}

// Singleton instance
const emailService = new EmailService()

// Export functions
export const sendVerificationEmail = (email: string, token: string) => 
  emailService.sendVerificationEmail(email, token)

export const sendPasswordResetEmail = (email: string, token: string) => 
  emailService.sendPasswordResetEmail(email, token)

export const sendWelcomeEmail = (email: string, name: string) => 
  emailService.sendWelcomeEmail(email, name)

export default emailService
