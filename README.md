
# EboniDating - Premium Dating Platform

A comprehensive dating application built with Next.js, featuring real-time messaging, video calls, subscription tiers, and advanced matching algorithms.

## Features

- 🔐 **Authentication**: NextAuth with Google OAuth and email/password
- 💬 **Real-time Chat**: Socket.io powered messaging with typing indicators
- 📹 **Video Calls**: WebRTC video calling between matched users
- 💰 **Subscription Tiers**: Multiple premium tiers with different benefits
- 🪙 **Virtual Currency**: Coin-based system for premium features
- 🎯 **Smart Matching**: Advanced filtering and discovery algorithms
- 🛡️ **Safety Features**: Reporting, blocking, and content moderation
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io
- **Payments**: Stripe
- **UI Components**: Radix UI
- **Deployment**: Replit Autoscale

## Quick Setup

1. **Environment Setup**:
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables (database, OAuth, Stripe, etc.)

2. **Database Setup**:
   ```bash
   chmod +x scripts/setup-db.sh
   ./scripts/setup-db.sh
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   cd server && npm install
   ```

4. **Start Development**:
   Click the **Run** button or use:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ebonidating"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe (for payments)
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Email (for verification)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── discover/          # Discovery/matching
│   ├── matches/           # User matches
│   ├── chat/              # Messaging interface
│   └── ...
├── components/            # React components
├── lib/                   # Utility libraries
├── prisma/               # Database schema and migrations
├── server/               # Socket.io server
└── types/                # TypeScript type definitions
```

## Key Features

### Subscription Tiers
- **FREE**: Basic features, limited likes
- **STANDARD**: More likes and features
- **PLUS**: Video calls, enhanced discovery
- **PRO**: Premium features, priority support
- **ULTRA**: Unlimited access to all features

### Monetization
- Subscription-based premium tiers
- Virtual coin system for individual features
- Stripe integration for secure payments

### Safety & Security
- User verification system
- Content moderation
- Reporting and blocking functionality
- Email verification required

## Development

The app runs on two servers:
- **Next.js App**: Port 3000 (main application)
- **Socket Server**: Port 3001 (real-time features)

Both servers start automatically when you click **Run**.

## Deployment

This app is configured for Replit Autoscale deployment. The deployment will:
1. Build the Next.js application
2. Start the production server
3. Automatically scale based on traffic

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.
