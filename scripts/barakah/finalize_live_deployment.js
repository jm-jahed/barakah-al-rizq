const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 60000,
  keepaliveInterval: 10000,
  keepaliveCountMax: 10,
};

const nginxConf = `server {
    server_name barakahalrizquae.com www.barakahalrizquae.com;

    location / {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    listen 80;
    listen [::]:80;
}
`;

const b64 = Buffer.from(nginxConf).toString('base64');

const vpsScript = `#!/bin/bash
set -e
export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"

echo "=========================================================="
echo "🚀 [STEP 1] Writing Nginx Configuration"
echo "=========================================================="
echo "${b64}" | base64 -d > /etc/nginx/sites-available/barakahalrizquae.com.conf
ln -sf /etc/nginx/sites-available/barakahalrizquae.com.conf /etc/nginx/sites-enabled/barakahalrizquae.com.conf

echo "=========================================================="
echo "🚀 [STEP 2] Validating and Reloading Nginx"
echo "=========================================================="
nginx -t
systemctl reload nginx
echo "✅ Nginx syntax valid and reloaded!"

echo "=========================================================="
echo "🚀 [STEP 3] Verifying Local Port 3003 Proxy Response"
echo "=========================================================="
curl -s -I -H "Host: barakahalrizquae.com" http://127.0.0.1/ | head -n 12

echo "=========================================================="
echo "🚀 [STEP 4] Configuring SSL with Certbot"
echo "=========================================================="
certbot --nginx -d barakahalrizquae.com -d www.barakahalrizquae.com --non-interactive --agree-tos -m admin@webstudioae.com --redirect || echo "Certbot completed or deferred"

nginx -t
systemctl reload nginx

echo "=========================================================="
echo "🚀 [STEP 5] Final PM2 and System Status"
echo "=========================================================="
pm2 list
`;

const b64Script = Buffer.from(vpsScript).toString('base64');

async function execute() {
  console.log('Connecting to Contabo VPS (169.58.33.89)...');
  const conn = new Client();
  conn.on('ready', () => {
    console.log('SSH connection ready! Executing Nginx and SSL setup...');
    const cmd = `echo "${b64Script}" | base64 -d | bash`;
    conn.exec(cmd, (err, stream) => {
      if (err) {
        console.error('Remote exec error:', err.message);
        conn.end();
        process.exit(1);
      }
      stream.on('data', d => process.stdout.write(d));
      stream.stderr.on('data', d => process.stderr.write(d));
      stream.on('close', code => {
        conn.end();
        console.log(`\nVPS finalization exited with code ${code}`);
        process.exit(code || 0);
      });
    });
  }).on('error', err => {
    console.error('SSH Error:', err.message);
    process.exit(1);
  }).connect(config);
}

execute();
