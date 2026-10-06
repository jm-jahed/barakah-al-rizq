const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

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
const bundleFile = path.join(__dirname, 'bundle.tar.gz');

// 1. Read local .env.local
const localEnv = fs.readFileSync('.env.local', 'utf8');

// Ensure production PORT=3003 and NODE_ENV=production in vpsEnv
let vpsEnvLines = localEnv.split('\n').filter(l => !l.startsWith('PORT=') && !l.startsWith('NODE_ENV='));
vpsEnvLines.unshift('NODE_ENV=production', 'PORT=3003');
const vpsEnv = vpsEnvLines.join('\n');
const vpsEnvB64 = Buffer.from(vpsEnv).toString('base64');

console.log('📦 1. Creating local source bundle...');
if (fs.existsSync(bundleFile)) fs.unlinkSync(bundleFile);

// Create tarball of src, package.json, package-lock.json, data/barakah/mailboxes.json
execSync('tar -czf scripts/barakah/bundle.tar.gz src package.json package-lock.json data/barakah/mailboxes.json', {
  stdio: 'inherit',
});

const bundleBuffer = fs.readFileSync(bundleFile);
console.log(`📦 Bundle created: ${(bundleBuffer.length / 1024 / 1024).toFixed(2)} MB`);

async function deploy() {
  console.log('🚀 2. Connecting to VPS via SSH...');
  const conn = new Client();

  conn.on('ready', () => {
    console.log('✅ SSH Connected. Opening SFTP to upload bundle...');

    conn.sftp((err, sftp) => {
      if (err) {
        console.error('SFTP Error:', err);
        conn.end();
        process.exit(1);
      }

      const remoteBundle = `${APP_DIR}/bundle.tar.gz`;
      const writeStream = sftp.createWriteStream(remoteBundle);

      writeStream.on('close', () => {
        console.log('✅ Bundle uploaded successfully to VPS.');

        const remoteCommands = `
export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"
cd ${APP_DIR}

echo "📂 Extracting bundle..."
tar -xzf bundle.tar.gz
rm -f bundle.tar.gz

echo "⚙️ Writing production .env.local..."
echo "${vpsEnvB64}" | base64 -d > .env.local

echo "📦 Installing any missing dependencies..."
npm install --no-audit

echo "🏗️ Building Next.js production app..."
npm run build

echo "🔄 Restarting PM2 process barakah-al-rizq..."
pm2 restart barakah-al-rizq || pm2 start npm --name "barakah-al-rizq" -- start -- -p 3003

echo "🔍 Verifying local response on port 3003..."
sleep 2
curl -s -I http://127.0.0.1:3003/mail | head -n 5
        `;

        conn.exec(remoteCommands, (execErr, stream) => {
          if (execErr) {
            console.error('Exec error:', execErr);
            conn.end();
            process.exit(1);
          }

          stream.on('data', d => process.stdout.write(d));
          stream.stderr.on('data', d => process.stderr.write(d));
          stream.on('close', code => {
            conn.end();
            if (fs.existsSync(bundleFile)) fs.unlinkSync(bundleFile);
            if (code === 0) {
              console.log('\n🎉 DEPLOYMENT TO VPS COMPLETED SUCCESSFULLY!');
              process.exit(0);
            } else {
              console.error(`\n❌ Deployment failed with exit code ${code}`);
              process.exit(1);
            }
          });
        });
      });

      writeStream.on('error', (e) => {
        console.error('Write stream error:', e);
        conn.end();
        process.exit(1);
      });

      fs.createReadStream(bundleFile).pipe(writeStream);
    });
  }).on('error', (e) => {
    console.error('SSH Connection error:', e);
    process.exit(1);
  }).connect(config);
}

deploy();
