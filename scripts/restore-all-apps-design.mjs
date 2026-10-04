import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const APPS_DIR = path.join(ROOT, 'apps');
const PUBLIC_DIR = path.join(ROOT, 'public');

if (!fs.existsSync(APPS_DIR)) {
  console.error('apps directory not found!');
  process.exit(1);
}

const apps = fs.readdirSync(APPS_DIR).filter(f => {
  const p = path.join(APPS_DIR, f);
  return fs.statSync(p).isDirectory();
});

console.log(`Found ${apps.length} apps in apps/ to update and verify.`);

// 1. The complete 240-line original globals.css with @source "../../../src"
const fullGlobalsCss = `@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Scheherazade+New:wght@400;700;900&display=swap');
@import "tailwindcss";
@source "../../../../src";
@source "../../../src";
@source "../";
@source "./";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --sat: env(safe-area-inset-top, 0px);
  --sar: env(safe-area-inset-right, 0px);
  --sab: env(safe-area-inset-bottom, 0px);
  --sal: env(safe-area-inset-left, 0px);
}

@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
    overflow-x: clip;
    max-width: 100vw;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: #f8fafc;
    color: #0f172a;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: clip;
    max-width: 100vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html.dark body {
    background-color: #0B0907;
    color: #F3F4F6;
  }

  /* Accessible focus indicators for keyboard navigation */
  :focus-visible {
    outline: 2px solid #F59E0B;
    outline-offset: 3px;
  }

  button:focus:not(:focus-visible),
  a:focus:not(:focus-visible) {
    outline: none;
  }
}

/* GPU-accelerated compositing for ultra-smooth 60/120fps scrolling */
.gpu-layer {
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

/* Safe area utilities */
.safe-bottom {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}

/* Global mobile utilities */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
html.dark ::-webkit-scrollbar-track {
  background: #0B0907;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
html.dark ::-webkit-scrollbar-thumb {
  background: #262018;
}
::-webkit-scrollbar-thumb:hover {
  background: #D97706;
}

/* Custom Scrollbar for POS & Catalogues */
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.4);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(212, 175, 55, 0.25);
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(212, 175, 55, 0.5);
}

/* Liquid Gold Button Sheen Micro-Interaction */
@keyframes goldSheen {
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
  }
}

.btn-gold-sheen {
  position: relative;
  overflow: hidden;
}

.btn-gold-sheen::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  transform: translateX(-100%) skewX(-15deg);
  pointer-events: none;
}

.btn-gold-sheen:hover::after {
  animation: goldSheen 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ========================================================================= */
/* UNIVERSAL HIGH-DEFINITION PRINT STYLES                                   */
/* ========================================================================= */
@media print {
  @page {
    size: A4 portrait;
    margin: 10mm;
  }

  html, body {
    background: #ffffff !important;
    color: #000000 !important;
    font-size: 11pt !important;
  }

  /* Reset fixed modal overlays for clean A4 printing */
  .fixed.inset-0 {
    position: static !important;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
    display: block !important;
    overflow: visible !important;
  }

  /* Expand modal card container to 100% width on paper */
  .max-w-4xl, .max-w-5xl, .max-w-2xl, .max-w-xl, .max-h-\\[94vh\\], .max-h-\\[92vh\\] {
    max-width: 100% !important;
    max-height: none !important;
    box-shadow: none !important;
    border: none !important;
    padding: 0 !important;
    background: #ffffff !important;
    color: #000000 !important;
    overflow: visible !important;
  }

  /* Hide interactive UI buttons and close icons */
  button, nav, header, .no-print, [data-no-print] {
    display: none !important;
  }

  /* Ensure text is dark and visible */
  p, span, h1, h2, h3, h4, h5, h6, td, th, div {
    color: #0f172a !important;
    text-shadow: none !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Table styling on paper */
  table {
    width: 100% !important;
    border-collapse: collapse !important;
  }

  th {
    background-color: #f8fafc !important;
    color: #0f172a !important;
    border-bottom: 2px solid #cbd5e1 !important;
    font-weight: 700 !important;
  }

  td {
    border-bottom: 1px solid #e2e8f0 !important;
    color: #0f172a !important;
  }

  /* Specific highlights for debits/credits */
  .text-emerald-600, .text-emerald-700, .text-emerald-400 {
    color: #047857 !important;
    font-weight: 700 !important;
  }

  .text-amber-600, .text-amber-700, .text-amber-400 {
    color: #b45309 !important;
    font-weight: 700 !important;
  }

  .text-rose-600, .text-rose-500, .text-rose-400 {
    color: #be123c !important;
    font-weight: 700 !important;
  }

  /* Thermal Receipt Print Clean Mode */
  #thermal-receipt-print {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: none !important;
    box-shadow: none !important;
    max-width: 80mm !important;
    margin: 0 auto !important;
  }

  #thermal-receipt-print * {
    color: #000000 !important;
    background-color: transparent !important;
  }
}
`;

// 2. NextConfig with turbopack and remotePatterns
const nextConfigContent = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.unsplash.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
      { protocol: "https", hostname: "images.pexels.com" }
    ],
  },
};

export default nextConfig;
`;

// 3. PostcssConfig
const postcssConfigContent = `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
`;

// Essential public assets to copy
const publicAssets = [
  'favicon.ico',
  'favicon.svg',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'icon.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'site.webmanifest'
].filter(f => fs.existsSync(path.join(PUBLIC_DIR, f)));

let updatedCount = 0;

for (const app of apps) {
  const appDir = path.join(APPS_DIR, app);
  const appSrcApp = path.join(appDir, 'src', 'app');
  const appPub = path.join(appDir, 'public');

  if (!fs.existsSync(appSrcApp)) {
    fs.mkdirSync(appSrcApp, { recursive: true });
  }

  // Update globals.css
  fs.writeFileSync(path.join(appSrcApp, 'globals.css'), fullGlobalsCss);

  // Update layout.tsx body classes and fonts while preserving metadata
  const layoutPath = path.join(appSrcApp, 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let layout = fs.readFileSync(layoutPath, 'utf8');
    // Replace body tag
    layout = layout.replace(
      /<body[^>]*>/,
      '<body className="antialiased bg-[#0B0907] text-gray-100 min-h-screen" suppressHydrationWarning>'
    );
    // Replace html tag
    layout = layout.replace(
      /<html[^>]*>/,
      '<html lang="en" className="dark scroll-smooth" suppressHydrationWarning>'
    );
    fs.writeFileSync(layoutPath, layout);
  }

  // Update next.config.ts
  fs.writeFileSync(path.join(appDir, 'next.config.ts'), nextConfigContent);

  // Update postcss.config.mjs
  fs.writeFileSync(path.join(appDir, 'postcss.config.mjs'), postcssConfigContent);

  // Ensure public assets exist
  if (!fs.existsSync(appPub)) {
    fs.mkdirSync(appPub, { recursive: true });
  }
  publicAssets.forEach(asset => {
    const srcFile = path.join(PUBLIC_DIR, asset);
    const destFile = path.join(appPub, asset);
    if (!fs.existsSync(destFile)) {
      try {
        fs.copyFileSync(srcFile, destFile);
      } catch {}
    }
  });

  updatedCount++;
}

console.log(`Successfully updated styling, fonts, and assets across ALL ${updatedCount} apps in apps/!`);
