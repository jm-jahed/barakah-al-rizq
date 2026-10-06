const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 30000,
};

const conn = new Client();
conn.on('ready', () => {
  console.log('✅ Connected to VPS. Running Admin E2E test on localhost:3003...');
  conn.exec(
    'export PATH="/root/.nvm/versions/node/v24.12.0/bin:$PATH" && cd /var/www/barakah-al-rizq && BASE_URL=http://localhost:3003 node scripts/test-admin-e2e-suite.mjs',
    (err, stream) => {
      if (err) throw err;
      stream.on('close', (code, signal) => {
        conn.end();
        process.exit(code);
      }).on('data', (data) => {
        process.stdout.write(data);
      }).stderr.on('data', (data) => {
        process.stderr.write(data);
      });
    }
  );
}).connect(config);
