#!/bin/bash

# Deployment script for Plesk hosting
echo "🚀 Starting deployment..."

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# 2. Build assets
echo "🔨 Building assets..."
npm run build

# 3. Clear Laravel caches
echo "🧹 Clearing caches..."
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear

# 4. Optimize for production
echo "⚡ Optimizing for production..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 5. Run migrations (if needed)
echo "🗄️ Running migrations..."
php artisan migrate --force

# 6. Set proper permissions
echo "🔐 Setting permissions..."
chmod -R 755 storage
chmod -R 755 bootstrap/cache

echo "✅ Deployment completed!"
echo "🌐 Your application should now be live!"
