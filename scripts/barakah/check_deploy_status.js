const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 10000,
};

async function check() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await new Promise((resolve, reject) => {
        const conn = new Client();
        conn.on('ready', () => {
          conn.exec('tail -n 20 /tmp/deploy-barakah.log 2>/dev/null || echo "Log not found yet"', (err, stream) => {
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
      process.exit(0);
    } catch (e) {
      if (attempt === 3) {
        console.error('Failed to connect:', e.message);
        process.exit(1);
      }
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

check();
