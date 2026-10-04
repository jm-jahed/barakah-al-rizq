const fs = require('fs');
const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

// Read local .env.local safely
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
    mongoDb = t.substring('MONGODB_DB='.length).trim();
    if ((mongoDb.startsWith('"') && mongoDb.endsWith('"')) || (mongoDb.startsWith("'") && mongoDb.endsWith("'"))) {
      mongoDb = mongoDb.slice(1, -1);
    }
  }
});

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 30000,
  keepaliveInterval: 10000,
  keepaliveCountMax: 10,
};

const APP_DIR = '/var/www/barakah-al-rizq';
const REPO_URL = 'https://github.com/jm-jahed/barakah-al-rizq.git';
const PORT = 3003;
const PM2_NAME = 'barakah-al-rizq';

const vpsScript = `#!/bin/bash
set -e

export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"

echo "=========================================================="
echo "🚀 DEPLOYING BARAKAH AL RIZQ TO CONTABO VPS"
echo "=========================================================="

# 1. Directory & Git checkout
if [ ! -d "${APP_DIR}" ]; then
  echo "📥 Cloning repository for the first time..."
  mkdir -p /var/www
  git clone "${REPO_URL}" "${APP_DIR}"
  cd "${APP_DIR}"
else
  echo "🔄 Updating existing repository..."
  cd "${APP_DIR}"
  git fetch origin main
  git reset --hard origin/main
fi

# 2. Write environment variables
echo "⚙️  Configuring environment variables..."
cat << 'ENVEOF' > "${APP_DIR}/.env.local"
NODE_ENV=production
PORT=${PORT}
MONGODB_DB=${mongoDb}
MONGODB_URI=${mongoUri}
NEXT_PUBLIC_SITE_URL=https://barakahalrizquae.com
ENVEOF

chmod 600 "${APP_DIR}/.env.local"

# 3. Install dependencies
echo "📦 Installing npm dependencies..."
cd "${APP_DIR}"
npm install --production=false

# 4. Build Next.js application
echo "🏗️  Building Next.js production bundle..."
npm run build

# 5. Manage dedicated PM2 process
echo "⚡ Starting/Reloading PM2 process '${PM2_NAME}' on Port ${PORT}..."
if pm2 list | grep -q "${PM2_NAME}"; then
  pm2 reload "${PM2_NAME}" --update-env
else
  PORT=${PORT} pm2 start npm --name "${PM2_NAME}" -- start -- -p ${PORT}
fi

pm2 save

echo "=========================================================="
echo "✅ BARAKAH AL RIZQ APPLICATION RUNNING ON PORT ${PORT}!"
echo "=========================================================="
`;

const b64Script = Buffer.from(vpsScript).toString('base64');

async function runDeploy() {
  console.log('Connecting to VPS for deployment...');
  const conn = new Client();
  conn.on('ready', () => {
    console.log('SSH connection established. Executing deployment script on VPS...');
    const remoteCmd = `echo "${b64Script}" | base64 -d | bash`;
    conn.exec(remoteCmd, (err, stream) => {
      if (err) {
        console.error('Remote exec error:', err.message);
        conn.end();
        process.exit(1);
      }
      stream.on('data', d => process.stdout.write(d));
      stream.stderr.on('data', d => process.stderr.write(d));
      stream.on('close', code => {
        conn.end();
        if (code === 0) {
          console.log('\nApplication deployment finished with exit code 0!');
        } else {
          console.error('\nDeployment script exited with error code:', code);
        }
        process.exit(code || 0);
      });
    });
  }).on('error', err => {
    console.error('SSH Error:', err.message);
    process.exit(1);
  }).connect(config);
}

runDeploy();
