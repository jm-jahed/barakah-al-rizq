const fs = require('fs');
const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const envContent = fs.readFileSync('.env.local', 'utf8');
let mongoUri = '';
let mongoDb = 'barakah_al_rizq';

envContent.split('\n').forEach(line => {
  const t = line.trim();
  if (t.startsWith('MONGODB_URI=')) {
    mongoUri = t.substring('MONGODB_URI='.length).trim();
    if ((mongoUri.startsWith('"') && mongoUri.endsWith('"')) || (mongoUri.startsWith("'") && mongoUri.endsWith("'"))) {
      mongoUri = mongoUri.slice(1, -1);
    }
  }
  if (t.startsWith('MONGODB_DB=')) {
    dbName = t.substring('MONGODB_DB='.length).trim();
    if ((dbName.startsWith('"') && dbName.endsWith('"')) || (dbName.startsWith("'") && dbName.endsWith("'"))) {
      mongoDb = dbName.slice(1, -1);
    }
  }
});

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 30000,
  keepaliveInterval: 5000,
  keepaliveCountMax: 5,
};

const vpsScript = `#!/bin/bash
set -e
export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"

APP_DIR="/var/www/barakah-al-rizq"
REPO_URL="https://github.com/jm-jahed/barakah-al-rizq.git"
PORT=3003
PM2_NAME="barakah-al-rizq"

echo "=========================================================="
echo "🚀 [START] BARAKAH AL RIZQ DEPLOYMENT - $(date)"
echo "=========================================================="

if [ ! -d "$APP_DIR" ]; then
  echo "📥 Step 1: Cloning repository..."
  mkdir -p /var/www
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
else
  echo "🔄 Step 1: Updating repository from origin main..."
  cd "$APP_DIR"
  git fetch origin main
  git reset --hard origin/main
fi

echo "⚙️ Step 2: Configuring environment..."
cat << 'ENVEOF' > "$APP_DIR/.env.local"
NODE_ENV=production
PORT=3003
MONGODB_DB=${mongoDb}
MONGODB_URI=${mongoUri}
NEXT_PUBLIC_SITE_URL=https://barakahalrizquae.com
ENVEOF
chmod 600 "$APP_DIR/.env.local"

echo "📦 Step 3: Installing dependencies..."
cd "$APP_DIR"
npm install --production=false

echo "🏗️ Step 4: Building Next.js production bundle..."
npm run build

echo "⚡ Step 5: Managing PM2 process '$PM2_NAME' on port $PORT..."
if pm2 list | grep -q "$PM2_NAME"; then
  pm2 reload "$PM2_NAME" --update-env
else
  PORT=3003 pm2 start npm --name "$PM2_NAME" -- start -- -p 3003
fi
pm2 save

echo "=========================================================="
echo "✅ [DONE] DEPLOYMENT COMPLETE ON PORT $PORT - $(date)"
echo "=========================================================="
`;

const b64 = Buffer.from(vpsScript).toString('base64');

async function trigger() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await new Promise((resolve, reject) => {
        const conn = new Client();
        conn.on('ready', () => {
          const writeCmd = `echo "${b64}" | base64 -d > /root/deploy-barakah.sh && chmod +x /root/deploy-barakah.sh && nohup /root/deploy-barakah.sh > /tmp/deploy-barakah.log 2>&1 & echo "LAUNCHED_PID: $!"`;
          conn.exec(writeCmd, (err, stream) => {
            if (err) { conn.end(); return reject(err); }
            stream.on('data', d => process.stdout.write(d));
            stream.stderr.on('data', d => process.stderr.write(d));
            stream.on('close', () => {
              conn.end();
              resolve();
            });
          });
        }).on('error', reject).connect(config);
      });
      console.log('Deployment launched in background on VPS successfully!');
      process.exit(0);
    } catch (e) {
      console.error(`Launch attempt ${attempt} error:`, e.message);
      if (attempt === 3) process.exit(1);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

trigger();
