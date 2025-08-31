import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}&email=${email}`

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'noreply@ebonidating.com',
    to: email,
    subject: 'Verify your EboniDating account',
    html: `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <h1 style="color: #8B5CF6;">Welcome to EboniDating!</h1>
        <p>Thank you for signing up. Please click the button below to verify your email address:</p>
        <a href="${verificationUrl}" style="display: inline-block; background-color: #8B5CF6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0;">
          Verify Email Address
        </a>
        <p>If you didn't create an account, you can safely ignore this email.</p>
        <p>This link will expire in 24 hours.</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Verification email sent successfully')
  } catch (error) {
    console.error('Error sending verification email:', error)
    throw error
  }
}