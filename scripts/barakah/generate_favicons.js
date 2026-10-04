const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateIcons() {
  const rootDir = path.resolve(__dirname, '../..');
  const logoPath = path.join(rootDir, 'public', 'images', 'barakah-logo.png');

  if (!fs.existsSync(logoPath)) {
    throw new Error('Logo not found at ' + logoPath);
  }

  console.log('Generating Barakah Al Rizq icons from:', logoPath);

  // 1. High-Res 512x512 Icon
  const icon512 = await sharp(logoPath)
    .trim()
    .resize(480, 480, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 16, bottom: 16, left: 16, right: 16, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(path.join(rootDir, 'public', 'icon.png'), icon512);
  fs.writeFileSync(path.join(rootDir, 'public', 'android-chrome-512x512.png'), icon512);
  fs.writeFileSync(path.join(rootDir, 'src', 'app', 'icon.png'), icon512);
  console.log('Created 512x512 icons (public/icon.png, android-chrome-512, src/app/icon.png)');

  // 2. Android Chrome 192x192
  const icon192 = await sharp(logoPath)
    .trim()
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 6, bottom: 6, left: 6, right: 6, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'android-chrome-192x192.png'), icon192);
  console.log('Created 192x192 icon (public/android-chrome-192x192.png)');

  // 3. Apple Touch Icon 180x180
  const icon180 = await sharp(logoPath)
    .trim()
    .resize(170, 170, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 5, bottom: 5, left: 5, right: 5, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-touch-icon.png'), icon180);
  fs.writeFileSync(path.join(rootDir, 'src', 'app', 'apple-icon.png'), icon180);
  console.log('Created Apple touch icons (public/apple-touch-icon.png, src/app/apple-icon.png)');

  // 4. Favicon 32x32
  const icon32 = await sharp(logoPath)
    .trim()
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-32x32.png'), icon32);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), icon32);
  fs.writeFileSync(path.join(rootDir, 'src', 'app', 'favicon.ico'), icon32);
  console.log('Created 32x32 favicons (public/favicon-32x32.png, public/favicon.ico, src/app/favicon.ico)');

  // 5. Favicon 16x16
  const icon16 = await sharp(logoPath)
    .trim()
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-16x16.png'), icon16);
  console.log('Created 16x16 favicon (public/favicon-16x16.png)');

  // 6. Favicon SVG (vector wrapper embedding the high-res PNG)
  const base64Icon = icon512.toString('base64');
  const svgContent = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <title>Barakah Al Rizq Foodstuff Trading L.L.C</title>
  <image width="512" height="512" href="data:image/png;base64,${base64Icon}"/>
</svg>
`;
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.svg'), svgContent, 'utf-8');
  console.log('Created public/favicon.svg with embedded high-res Barakah logo');

  // 7. BIMI Logo SVG
  const bimiContent = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 512 512" width="512" height="512">
  <title>Barakah Al Rizq Foodstuff Trading L.L.C Official BIMI Logo</title>
  <rect width="512" height="512" fill="#063D24" rx="64"/>
  <image x="26" y="26" width="460" height="460" href="data:image/png;base64,${base64Icon}"/>
</svg>
`;
  fs.writeFileSync(path.join(rootDir, 'public', 'bimi-logo.svg'), bimiContent, 'utf-8');
  console.log('Created public/bimi-logo.svg');

  // 8. site.webmanifest
  const manifest = {
    name: "Barakah Al Rizq Foodstuff Trading L.L.C",
    short_name: "Barakah Al Rizq",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#063D24",
    background_color: "#063D24",
    display: "standalone",
    start_url: "/"
  };
  fs.writeFileSync(path.join(rootDir, 'public', 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('Updated public/site.webmanifest');
}

generateIcons().then(() => console.log('All icons generated successfully!')).catch(console.error);
