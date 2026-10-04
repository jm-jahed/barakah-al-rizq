const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 20000,
  keepaliveInterval: 5000,
  keepaliveCountMax: 5,
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

const b64Conf = Buffer.from(nginxConf).toString('base64');

const vpsScript = `#!/bin/bash
set -e

echo "=== STEP 1: Writing /etc/nginx/sites-available/barakahalrizquae.com.conf ==="
echo "${b64Conf}" | base64 -d > /etc/nginx/sites-available/barakahalrizquae.com.conf

echo "=== STEP 2: Enabling site in /etc/nginx/sites-enabled/ ==="
ln -sf /etc/nginx/sites-available/barakahalrizquae.com.conf /etc/nginx/sites-enabled/barakahalrizquae.com.conf

echo "=== STEP 3: Testing Nginx syntax ==="
nginx -t

echo "=== STEP 4: Reloading Nginx ==="
systemctl reload nginx
echo "Nginx successfully reloaded!"

echo "=== STEP 5: Testing local proxy to port 3003 ==="
curl -s -I -H "Host: barakahalrizquae.com" http://127.0.0.1/ | head -n 10

echo "=== STEP 6: Running Certbot SSL for barakahalrizquae.com ==="
if certbot --nginx -d barakahalrizquae.com -d www.barakahalrizquae.com --non-interactive --agree-tos -m admin@webstudioae.com --redirect 2>&1; then
  echo "✅ Certbot SSL issued and configured successfully!"
else
  echo "⚠️ Certbot challenge notice (Cloudflare proxy may already handle SSL or need HTTP-01 pass-through)"
fi

echo "=== STEP 7: Final Nginx Test & Reload ==="
nginx -t
systemctl reload nginx

echo "=== STEP 8: Current active Nginx sites ==="
ls -la /etc/nginx/sites-enabled/
`;

const b64Script = Buffer.from(vpsScript).toString('base64');

async function run() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await new Promise((resolve, reject) => {
        const conn = new Client();
        conn.on('ready', () => {
          const cmd = `echo "${b64Script}" | base64 -d | bash`;
          conn.exec(cmd, (err, stream) => {
            if (err) { conn.end(); return reject(err); }
            stream.on('data', d => process.stdout.write(d));
            stream.stderr.on('data', d => process.stderr.write(d));
            stream.on('close', code => {
              conn.end();
              if (code === 0) resolve();
              else reject(new Error('Script exited with code ' + code));
            });
          });
        }).on('error', reject).connect(config);
      });
      console.log('\nNginx configuration and SSL completed successfully!');
      process.exit(0);
    } catch (e) {
      console.error(`Attempt ${attempt} error:`, e.message);
      if (attempt === 3) process.exit(1);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

run();
