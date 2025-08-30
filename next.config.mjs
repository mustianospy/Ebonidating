
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"]
  },
  images: {
    domains: ['localhost', 'replit.dev', 'replit.com'],
  },
}

export default nextConfig
