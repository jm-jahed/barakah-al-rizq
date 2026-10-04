#!/bin/bash
# ==============================================================================
# Web Studio AE — One-Click Contabo VPS Deployment & Update Script
# Host: https://webstudioae.com/
# Subdomain: https://global-pos.webstudioae.com/
# ==============================================================================

set -e

APP_DIR="/var/www/webstudioae"
APP_NAME="webstudioae"
PORT=3000

echo "🚀 Starting deployment for Web Studio AE on Contabo VPS..."

if [ ! -d "$APP_DIR" ]; then
  echo "📥 Cloning repository for the first time..."
  mkdir -p /var/www
  git clone https://github.com/jm-jahed/webstudioae.com.git "$APP_DIR"
  cd "$APP_DIR"
else
  echo "🔄 Pulling latest updates from GitHub..."
  cd "$APP_DIR"
  git reset --hard HEAD
  git pull origin main
fi

echo "📦 Installing npm dependencies..."
npm install --production=false

echo "🏗️ Building Next.js production application..."
npm run build

echo "⚡ Restarting PM2 process..."
if pm2 list | grep -q "$APP_NAME"; then
  pm2 reload "$APP_NAME"
else
  pm2 start npm --name "$APP_NAME" -- start -- -p $PORT
fi

pm2 save

echo "✅ Deployment completed successfully!"
echo "🌐 Main Website: https://webstudioae.com/"
echo "🛒 Global POS:   https://global-pos.webstudioae.com/"
