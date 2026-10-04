const fs = require('node:fs');
const path = require('node:path');

function backupJsonDb() {
  const dataDir = path.join(__dirname, '..', 'data');
  const sourceFile = path.join(dataDir, 'webstudioae.db.json');
  const backupDir = path.join(dataDir, 'backups');

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source JSON file not found: ${sourceFile}`);
  }

  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-');
  const backupFile = path.join(backupDir, `webstudioae.db.backup.${timestamp}.json`);

  fs.copyFileSync(sourceFile, backupFile);

  const stats = fs.statSync(backupFile);
  console.log('----------------------------------------------------');
  console.log('JSON DATABASE SNAPSHOT BACKUP CREATED');
  console.log('----------------------------------------------------');
  console.log(`Source File: ${sourceFile}`);
  console.log(`Backup File: ${backupFile}`);
  console.log(`Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`Created At: ${now.toISOString()}`);
  console.log('----------------------------------------------------');
  return backupFile;
}

if (require.main === module) {
  try {
    backupJsonDb();
  } catch (err) {
    console.error('Backup failed:', err.message);
    process.exit(1);
  }
}

module.exports = { backupJsonDb };
