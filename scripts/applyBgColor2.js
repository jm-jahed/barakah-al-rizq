const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components', 'typingCenter');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let count = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace Color 1 (Midnight Navy) or old obsidian with Color 2 (Sovereign Falcon Emerald Noir)
  // Base background
  content = content.replace(/#030914/gi, '#02120A');
  content = content.replace(/#07090E/gi, '#02120A');

  // Alternating section background
  content = content.replace(/#061021/gi, '#051C10');
  content = content.replace(/#0B0F19/gi, '#051C10');

  // Deep base / footer background
  content = content.replace(/#02050B/gi, '#010A05');
  content = content.replace(/#04060A/gi, '#010A05');

  // Card backgrounds
  content = content.replace(/#081426/gi, '#072415');
  content = content.replace(/#0C101B/gi, '#072415');
  content = content.replace(/#040B17/gi, '#03160C');
  content = content.replace(/#0B1B33/gi, '#092E1C');

  // Hero Banner Visual container gradient
  content = content.replace(/from-\[#0D1829\]\/95 via-\[#081220\]\/95 to-\[#040913\]\/98/g, 'from-[#0B2316]/95 via-[#061B10]/95 to-[#020D07]/98');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated to Emerald: ${file}`);
    count++;
  }
}

console.log(`Total files updated to Color 2 (Sovereign Falcon Emerald Noir): ${count}`);
