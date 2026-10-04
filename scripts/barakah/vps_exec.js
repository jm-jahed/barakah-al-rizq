const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const config = {
  host: '169.58.33.89',
  port: 22,
  username: 'root',
  password: 'asdASD123@',
  readyTimeout: 30000,
  keepaliveInterval: 5000,
  keepaliveCountMax: 5,
};

const cmd = process.argv.slice(2).join(' ') || 'uptime';

async function runWithRetry(attempts = 3) {
  for (let i = 1; i <= attempts; i++) {
    try {
      const exitCode = await new Promise((resolve, reject) => {
        const conn = new Client();
        conn.on('ready', () => {
          const wrappedCmd = `export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH" && ${cmd}`;
          conn.exec(wrappedCmd, (err, stream) => {
            if (err) {
              conn.end();
              return reject(err);
            }
            stream.on('data', d => process.stdout.write(d));
            stream.stderr.on('data', d => process.stderr.write(d));
            stream.on('close', code => {
              conn.end();
              resolve(code || 0);
            });
          });
        }).on('error', err => {
          reject(err);
        }).connect(config);
      });
      process.exit(exitCode);
    } catch (err) {
      if (i === attempts) {
        console.error(`SSH command failed after ${attempts} attempts:`, err.message);
        process.exit(1);
      }
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

runWithRetry();
