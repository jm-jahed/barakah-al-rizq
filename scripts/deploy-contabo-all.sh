#!/bin/bash
# ==============================================================================
# Contabo VPS Master Deployment Script — Strict Domain Isolation
#
# Default / Main Site : https://webstudioae.com/             -> PM2 webstudioae (Port 3000)
# POS Subdomains       : https://global-pos.webstudioae.com/   -> PM2 global-pos-frontend (Port 3001)
#                      : https://seller.webstudioae.com/       -> PM2 global-pos-backend  (Port 5000)
# ==============================================================================

set -eo pipefail

echo "=============================================================================="
echo "🚀 STARTING CONTABO PRODUCTION DEPLOYMENT & DOMAIN FIX"
echo "=============================================================================="

# ------------------------------------------------------------------------------
# 1. Web Studio AE Agency Deployment (webstudioae.com -> Port 3000)
# ------------------------------------------------------------------------------
echo "🖥️  [1/4] Building & Deploying Web Studio AE Agency (Port 3000)..."
MAIN_DIR="/var/www/webstudioae"

if [ ! -d "$MAIN_DIR" ]; then
  echo "📥 Cloning webstudioae.com repository..."
  mkdir -p /var/www
  git clone https://github.com/jm-jahed/webstudioae.com.git "$MAIN_DIR"
  cd "$MAIN_DIR"
else
  echo "🔄 Updating webstudioae.com repository..."
  cd "$MAIN_DIR"
  git reset --hard HEAD
  git pull origin main
fi

echo "📦 Installing Web Studio AE dependencies..."
npm install --production=false

echo "🏗️  Building Web Studio AE production assets..."
npm run build

echo "⚡ Managing PM2 process: webstudioae..."
if pm2 list | grep -q "webstudioae"; then
  pm2 reload webstudioae
else
  pm2 start npm --name "webstudioae" -- start -- -p 3000
fi

# ------------------------------------------------------------------------------
# 2. Global POS Standalone Deployment (global-pos.webstudioae.com -> Ports 3001 & 5000)
# ------------------------------------------------------------------------------
echo "🛒 [2/4] Building & Deploying Global POS (Port 3001 & Backend Port 5000)..."
POS_DIR="/var/www/global-pos"

if [ ! -d "$POS_DIR" ]; then
  echo "📥 Cloning Universal-Retail-POS repository..."
  git clone https://github.com/jm-jahed/Universal-Retail-POS.git "$POS_DIR"
  cd "$POS_DIR"
else
  echo "🔄 Updating Universal-Retail-POS repository..."
  cd "$POS_DIR"
  git reset --hard HEAD
  git pull origin main
fi

# A. Global POS Backend (Port 5000)
if [ -d "$POS_DIR/backend" ]; then
  echo "📦 Setting up Global POS Backend..."
  cd "$POS_DIR/backend"
  npm install --production=false
  
  if pm2 list | grep -q "global-pos-backend"; then
    pm2 reload global-pos-backend
  else
    PORT=5000 HOST=127.0.0.1 pm2 start src/server.js --name "global-pos-backend"
  fi
fi

# B. Global POS Frontend (Port 3001)
if [ -d "$POS_DIR/frontend" ]; then
  echo "📦 Setting up Global POS Frontend..."
  cd "$POS_DIR/frontend"
  npm install --production=false
  npm run build
  
  if pm2 list | grep -q "global-pos-frontend"; then
    pm2 reload global-pos-frontend
  else
    PORT=3001 HOST=127.0.0.1 pm2 start npm --name "global-pos-frontend" -- start -- -p 3001
  fi
fi

# ------------------------------------------------------------------------------
# 3. Configure Nginx Domain Isolation & Default Fallback to Port 3000
# ------------------------------------------------------------------------------
echo "🔀 [3/4] Configuring Nginx Domain Routing & Fallbacks..."

NGINX_CONF="/etc/nginx/sites-available/webstudioae"

if [ -w "/etc/nginx/sites-available" ]; then
  cat << 'EOF' > "$NGINX_CONF"
# ==============================================================================
# 1. Main Website & Default Fallback (webstudioae.com -> Port 3000)
# Any domain or hostname not matching POS subdomains will serve Web Studio AE!
# ==============================================================================
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name webstudioae.com www.webstudioae.com _;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# ==============================================================================
# 2. Dedicated Global POS Backend Domain (api-global-pos.webstudioae.com)
# ==============================================================================
server {
    listen 80;
    server_name api-global-pos.webstudioae.com api.global-pos.webstudioae.com gpos-backend.webstudioae.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# ==============================================================================
# 3. Global POS Frontend Subdomains (global-pos.webstudioae.com, seller.webstudioae.com)
# ==============================================================================
server {
    listen 80;
    server_name global-pos.webstudioae.com globalpos.webstudioae.com seller.webstudioae.com pos.webstudioae.com;

    # Backend API Proxy -> 127.0.0.1:5000
    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Frontend POS -> 127.0.0.1:3001
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

  # Remove default Nginx site if present to prevent conflict with default_server
  rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true
  ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/webstudioae
  nginx -t && systemctl restart nginx || echo "⚠️ Nginx restart warning"
fi

# ------------------------------------------------------------------------------
# 4. Save PM2 & Verify Local Endpoints
# ------------------------------------------------------------------------------
echo "🔒 [4/4] Saving PM2 state & performing local health checks..."
pm2 save

echo "------------------------------------------------------------------------------"
echo "🔍 VERIFYING LOCAL HTTP ENDPOINTS:"
echo "------------------------------------------------------------------------------"

echo -n "1. Web Studio AE Agency (http://127.0.0.1:3000) : "
if curl -s -f -I http://127.0.0.1:3000 > /dev/null; then
  echo "✅ ONLINE (Port 3000 -> Web Studio AE Agency)"
else
  echo "⚠️ WARN: Check PM2 logs for webstudioae"
fi

echo -n "2. Global POS Frontend  (http://127.0.0.1:3001) : "
if curl -s -f -I http://127.0.0.1:3001 > /dev/null; then
  echo "✅ ONLINE (Port 3001 -> Global POS Frontend)"
else
  echo "⚠️ WARN: Check PM2 logs for global-pos-frontend"
fi

echo -n "3. Global POS Backend   (http://127.0.0.1:5000/health) : "
if curl -s -f -I http://127.0.0.1:5000/health > /dev/null; then
  echo "✅ ONLINE (Port 5000 -> Global POS API)"
else
  echo "⚠️ WARN: Check PM2 logs for global-pos-backend"
fi

echo "=============================================================================="
echo "🎉 CONTABO DEPLOYMENT & DOMAIN ISOLATION COMPLETE!"
echo "=============================================================================="
pm2 status
