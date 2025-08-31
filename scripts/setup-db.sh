
#!/bin/bash

echo "🚀 Setting up EboniDating database..."

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Push database schema
echo "🗄️ Pushing database schema..."
npx prisma db push

# Seed the database
echo "🌱 Seeding database with sample data..."
npx prisma db seed

echo "✅ Database setup complete!"
echo "You can now run the application with 'npm run dev'"
