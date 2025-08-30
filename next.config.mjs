
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"]
  },
  images: {
    domains: ['localhost', 'replit.dev', 'replit.com'],
  },
  output: 'standalone',
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

export default nextConfig
