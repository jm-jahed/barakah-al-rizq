const fs = require('fs');
const path = require('path');

const themeNum = process.argv[2] || '2';

const THEMES = {
  // Theme 1: Presidential Royal Midnight Navy & 24K UAE Gold
  '1': {
    name: 'Presidential Royal Midnight Navy & Pure Gold',
    baseBg: '#030914',
    altBg: '#061224',
    groundBg: '#02050B',
    cardBg: '#08162B',
    cardInner: 'bg-blue-950/30',
    shadowTint: 'shadow-blue-950/50',
  },
  // Theme 2: Sovereign Falcon Emerald & Pure 24K UAE Gold
  '2': {
    name: 'Sovereign Falcon Emerald & UAE Pure Gold',
    baseBg: '#02130B',
    altBg: '#051F12',
    groundBg: '#010A05',
    cardBg: '#072617',
    cardInner: 'bg-emerald-950/30',
    shadowTint: 'shadow-emerald-950/50',
  },
  // Theme 3: Executive Obsidian Onyx & 24K UAE Gold
  '3': {
    name: 'Executive Obsidian Onyx & Pure 24K UAE Gold',
    baseBg: '#07090E',
    altBg: '#0C101B',
    groundBg: '#04060A',
    cardBg: '#0F1523',
    cardInner: 'bg-amber-950/20',
    shadowTint: 'shadow-black/60',
  },
  // Theme 4: Dubai Crown Desert Bronze & Midnight Onyx
  '4': {
    name: 'Dubai Crown Desert Bronze & Midnight Onyx',
    baseBg: '#0D0805',
    altBg: '#170F0A',
    groundBg: '#080402',
    cardBg: '#1E130D',
    cardInner: 'bg-orange-950/25',
    shadowTint: 'shadow-black/70',
  },
  // Theme 5: Modern Cyber Titanium & High-Gov Teal
  '5': {
    name: 'Modern Cyber Titanium & High-Gov Teal',
    baseBg: '#070A0F',
    altBg: '#0D1420',
    groundBg: '#030508',
    cardBg: '#111B2B',
    cardInner: 'bg-cyan-950/30',
    shadowTint: 'shadow-cyan-950/50',
  }
};

const theme = THEMES[themeNum] || THEMES['2'];
console.log(`Applying Theme ${themeNum}: ${theme.name}`);

const dir = path.join(__dirname, '..', 'src', 'components', 'typingCenter');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let total = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Background replacements
  const oldBases = ['#050811', '#07090E', '#030914', '#02130B', '#02120A', '#0D0805', '#070A0F'];
  for (const b of oldBases) {
    content = content.replaceAll(b, theme.baseBg);
    content = content.replaceAll(b.toLowerCase(), theme.baseBg);
  }

  const oldAlts = ['#080E1E', '#0C101B', '#061021', '#061224', '#051F12', '#051C10', '#170F0A', '#0D1420'];
  for (const a of oldAlts) {
    content = content.replaceAll(a, theme.altBg);
    content = content.replaceAll(a.toLowerCase(), theme.altBg);
  }

  const oldGrounds = ['#030509', '#04060A', '#02050B', '#010A05', '#080402', '#030508'];
  for (const g of oldGrounds) {
    content = content.replaceAll(g, theme.groundBg);
    content = content.replaceAll(g.toLowerCase(), theme.groundBg);
  }

  const oldCards = ['#0D1424', '#0A101D', '#0F1523', '#081426', '#08162B', '#072617', '#072415', '#1E130D', '#111B2B', '#0B101E', '#0D121F', '#0F172A', '#0A0E1A'];
  for (const c of oldCards) {
    content = content.replaceAll(c, theme.cardBg);
    content = content.replaceAll(c.toLowerCase(), theme.cardBg);
  }

  // Shadow and inner card tints
  content = content.replace(/shadow-cyan-950\/(40|50|60|80)/g, theme.shadowTint);
  content = content.replace(/shadow-blue-950\/(40|50|60|80)/g, theme.shadowTint);
  content = content.replace(/shadow-emerald-950\/(40|50|60|80)/g, theme.shadowTint);
  
  content = content.replace(/bg-cyan-950\/(20|30|40|50|60|80)/g, theme.cardInner);
  content = content.replace(/bg-blue-950\/(20|30|40|50|60|80)/g, theme.cardInner);
  content = content.replace(/bg-emerald-950\/(20|30|40|50|60|80)/g, theme.cardInner);
  content = content.replace(/to-cyan-950\/(40|50|60|80)/g, `to-[${theme.cardBg}]/90`);

  // Fix button gradients
  content = content.replace(/from-amber-500\s+via-blue-600\s+to-indigo-600/g, 'from-amber-500 via-amber-600 to-amber-700');
  content = content.replace(/from-amber-500\s+to-blue-600/g, 'from-amber-500 to-amber-600');

  // Fix opacities
  content = content.replace(/shadow-amber-500\/(?![0-9])/g, 'shadow-amber-500/20');
  content = content.replace(/border-amber-500\/(?![0-9])/g, 'border-amber-500/20');
  content = content.replace(/bg-amber-500\/(?![0-9])/g, 'bg-amber-500/10');
  content = content.replace(/ring-amber-500\/(?![0-9])/g, 'ring-amber-500/25');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    total++;
  }
}

console.log(`Successfully updated ${total} files for ${theme.name}`);
