const fs = require('fs');
const { Client } = require('C:/Users/jahed/.gemini/antigravity-ide/brain/36f52db1-4eb0-440b-817d-22546ecd8fbc/scratch/runner/node_modules/ssh2');

const envContent = fs.readFileSync('.env.local', 'utf8');
let uri = '';
let dbName = 'barakah_al_rizq';
envContent.split('\n').forEach(line => {
  const t = line.trim();
  if (t.startsWith('MONGODB_URI=')) {
    uri = t.substring('MONGODB_URI='.length).trim();
    if ((uri.startsWith('"') && uri.endsWith('"')) || (uri.startsWith("'") && uri.endsWith("'"))) {
      uri = uri.slice(1, -1);
    }
  }
  if (t.startsWith('MONGODB_DB=')) {
    dbName = t.substring('MONGODB_DB='.length).trim();
    if ((dbName.startsWith('"') && dbName.endsWith('"')) || (dbName.startsWith("'") && dbName.endsWith("'"))) {
      dbName = dbName.slice(1, -1);
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

const vpsNodeScript = `
const { MongoClient } = require('/var/www/global-pos/backend/node_modules/mongodb');
const uri = process.env.TEST_URI;
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
async function run() {
  try {
    await client.connect();
    const db = client.db('${dbName}');
    const cols = await db.listCollections().toArray();
    console.log('MongoDB Atlas connection SUCCESS on VPS!');
    console.log('Database:', '${dbName}');
    console.log('Collections count:', cols.length);
    for (const c of cols) {
      const count = await db.collection(c.name).countDocuments();
      console.log('  - ' + c.name + ': ' + count + ' documents');
    }
    await client.close();
  } catch (e) {
    console.error('VPS MongoDB Atlas Error:', e.message);
    process.exit(1);
  }
}
run();
`;

const b64Script = Buffer.from(vpsNodeScript).toString('base64');
const b64Uri = Buffer.from(uri).toString('base64');

async function executeWithRetry(attempts = 5) {
  for (let i = 1; i <= attempts; i++) {
    try {
      const exitCode = await new Promise((resolve, reject) => {
        const conn = new Client();
        conn.on('ready', () => {
          const wrappedCmd = `export PATH="/root/.nvm/versions/node/v24.12.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH" && TEST_URI=$(echo "${b64Uri}" | base64 -d) node -e "$(echo "${b64Script}" | base64 -d)"`;
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
        console.error('Failed after ' + attempts + ' attempts: ' + err.message);
        process.exit(1);
      }
      await new Promise(r => setTimeout(r, 3000));
    }
  }
}

executeWithRetry();
