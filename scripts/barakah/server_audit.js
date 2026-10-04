const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');
const fs = require('fs');
const path = require('path');

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 30000,
};

async function runAudit() {
  console.log('Connecting to Contabo VPS (169.58.33.89)...');
  const conn = new Client();

  await new Promise((resolve, reject) => {
    conn.on('ready', resolve).on('error', reject).connect(config);
  });

  console.log('Connected successfully! Running non-destructive audit commands...');

  function exec(cmd) {
    return new Promise((resolve, reject) => {
      conn.exec(cmd, (err, stream) => {
        if (err) return reject(err);
        let stdout = '';
        let stderr = '';
        stream.on('close', (code) => {
          resolve({ code, stdout, stderr });
        });
        stream.on('data', (d) => { stdout += d.toString(); });
        stream.stderr.on('data', (d) => { stderr += d.toString(); });
      });
    });
  }

  const results = {};

  // 1. OS Info
  console.log('Auditing 1: OS Information...');
  results.os = (await exec('uname -a && cat /etc/os-release')).stdout;

  // 2. IP & Networking
  console.log('Auditing 2: Network & Public IP...');
  results.network = (await exec('ip -4 addr show && echo "PUBLIC_IP:" && (curl -s ifconfig.me || curl -s icanhazip.com)')).stdout;

  // 3 & 4. PM2 processes & Node environment
  console.log('Auditing 3 & 4: PM2 Processes & Node/NPM...');
  results.nodeEnv = (await exec('export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/bin:/usr/bin:$PATH" && which node && node -v && npm -v && pm2 -v')).stdout;
  results.pm2List = (await exec('export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/bin:/usr/bin:$PATH" && pm2 list')).stdout;
  results.pm2Json = (await exec('export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/bin:/usr/bin:$PATH" && pm2 jlist')).stdout;

  // 5. Ports & Listening Sockets
  console.log('Auditing 5: Listening Ports (TCP/UDP)...');
  results.ports = (await exec('ss -tulpn || netstat -tulpn')).stdout;

  // 6 & 8. Nginx Sites, Configurations, Domains
  console.log('Auditing 6 & 8: Nginx Sites & Virtual Hosts...');
  results.nginxSites = (await exec('ls -la /etc/nginx/sites-available/ /etc/nginx/sites-enabled/ 2>/dev/null')).stdout;
  results.nginxConfigs = (await exec('for f in /etc/nginx/sites-enabled/*; do echo "=== $f ==="; cat "$f"; done')).stdout;
  results.nginxMain = (await exec('cat /etc/nginx/nginx.conf | grep -E "worker_processes|worker_connections|include" || true')).stdout;

  // 7. SSL Certificates
  console.log('Auditing 7: SSL Certificates...');
  results.ssl = (await exec('certbot certificates 2>&1 || true; echo "--- /etc/letsencrypt/live/ ---"; ls -la /etc/letsencrypt/live/ 2>&1 || true')).stdout;

  // 9. Existing WebStudio AE configuration
  console.log('Auditing 9: WebStudio AE Directory & Configuration...');
  results.webstudioae = (await exec('ls -la /var/www/webstudioae 2>/dev/null; echo "--- package.json ---"; cat /var/www/webstudioae/package.json 2>/dev/null; echo "--- env files ---"; ls -la /var/www/webstudioae/.env* 2>/dev/null')).stdout;

  // 10. Existing GLOBAL POS configuration
  console.log('Auditing 10: GLOBAL POS Directory & Configuration...');
  results.globalpos = (await exec('ls -la /var/www/global-pos/ 2>/dev/null; echo "--- backend ---"; ls -la /var/www/global-pos/backend 2>/dev/null; echo "--- frontend ---"; ls -la /var/www/global-pos/frontend 2>/dev/null; echo "--- backend .env (masked) ---"; sed "s/=.*/=*******/" /var/www/global-pos/backend/.env 2>/dev/null')).stdout;

  // 14. Server Hardware & Resources (Disk, RAM, CPU, Load)
  console.log('Auditing 14: System Resources (Disk, RAM, CPU)...');
  results.resources = (await exec('free -h && echo "--- SWAP ---" && swapon --show && echo "--- DISK ---" && df -h && echo "--- UPTIME ---" && uptime && echo "--- CPU ---" && lscpu | grep -E "Model name|CPU\\(s\\):|Thread|Core|Socket"')).stdout;

  // Top Memory & CPU Consumers
  console.log('Auditing Top Processes...');
  results.topProcesses = (await exec('ps aux --sort=-%mem | head -n 25')).stdout;

  conn.end();

  const outPath = path.join(__dirname, 'server_audit_raw.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Audit completed! Raw results saved to ${outPath}`);
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
