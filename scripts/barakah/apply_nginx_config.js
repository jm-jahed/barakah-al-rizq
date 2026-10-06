const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 15000,
};

const nginxConf = `server {
    server_name barakahalrizquae.com www.barakahalrizquae.com inbox.barakahalrizquae.com;

    # Gzip Compression for Fast Loading
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;

    # Direct Next.js Static Asset Serving (Zero Node.js Proxy Overhead)
    location /_next/static/ {
        alias /var/www/barakah-al-rizq/.next/static/;
        expires 365d;
        access_log off;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Public Directory Static Cache
    location /public/ {
        alias /var/www/barakah-al-rizq/public/;
        expires 30d;
        access_log off;
        add_header Cache-Control "public, max-age=2592000";
    }

    # Favicon and Apple Icons Cache
    location ~* \\.(ico|png|jpg|jpeg|gif|svg|webp)$ {
        root /var/www/barakah-al-rizq/public;
        expires 30d;
        access_log off;
        add_header Cache-Control "public, max-age=2592000";
        try_files $uri @proxy;
    }

    location / {
        try_files $uri @proxy;
    }

    location @proxy {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_buffer_size 128k;
        proxy_buffers 4 256k;
        proxy_busy_buffers_size 256k;
    }

    listen [::]:443 ssl;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/barakahalrizquae.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/barakahalrizquae.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.barakahalrizquae.com) {
        return 301 https://$host$request_uri;
    }
    if ($host = barakahalrizquae.com) {
        return 301 https://$host$request_uri;
    }
    if ($host = inbox.barakahalrizquae.com) {
        return 301 https://$host$request_uri;
    }

    server_name barakahalrizquae.com www.barakahalrizquae.com inbox.barakahalrizquae.com;

    listen 80;
    listen [::]:80;
    return 404;
}
`;

const b64 = Buffer.from(nginxConf).toString('base64');
const cmd = `echo "${b64}" | base64 -d > /etc/nginx/sites-available/barakahalrizquae.com.conf && ln -sf /etc/nginx/sites-available/barakahalrizquae.com.conf /etc/nginx/sites-enabled/barakahalrizquae.com.conf && nginx -t && systemctl reload nginx && echo "SUCCESSFULLY_RELOADED"`;

async function apply() {
  for (let attempt = 1; attempt <= 5; attempt++) {
    console.log(`Connection attempt ${attempt}...`);
    try {
      await new Promise((resolve, reject) => {
        const conn = new Client();
        conn.on('ready', () => {
          conn.exec(cmd, (err, stream) => {
            if (err) { conn.end(); return reject(err); }
            stream.on('data', d => process.stdout.write(d));
            stream.stderr.on('data', d => process.stderr.write(d));
            stream.on('close', code => {
              conn.end();
              if (code === 0) resolve();
              else reject(new Error('Exit code ' + code));
            });
          });
        }).on('error', reject).connect(config);
      });
      console.log('Nginx updated and reloaded successfully!');
      process.exit(0);
    } catch (e) {
      console.error(`Attempt ${attempt} error: ${e.message}`);
      if (attempt === 5) process.exit(1);
      await new Promise(r => setTimeout(r, 4000));
    }
  }
}

apply();
