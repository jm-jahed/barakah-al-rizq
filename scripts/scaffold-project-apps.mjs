import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const WORK_DIR = path.join(ROOT_DIR, 'src', 'app', 'work');
const APPS_DIR = path.join(ROOT_DIR, 'apps');

if (!fs.existsSync(APPS_DIR)) {
  fs.mkdirSync(APPS_DIR, { recursive: true });
}

// 1. Identify all project directories in src/app/work
const entries = fs.readdirSync(WORK_DIR, { withFileTypes: true });
const projectSlugs = entries
  .filter(d => d.isDirectory() && d.name !== '[slug]')
  .map(d => d.name)
  .sort();

console.log(`Found ${projectSlugs.length} projects to scaffold into apps/`);

// Read root package.json to get consistent dependency versions
const rootPkg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf8'));

// Shared dependencies for all standalone apps
const baseDependencies = {
  "@types/canvas-confetti": rootPkg.dependencies["@types/canvas-confetti"] || "^1.9.0",
  "canvas-confetti": rootPkg.dependencies["canvas-confetti"] || "^1.9.4",
  "framer-motion": rootPkg.dependencies["framer-motion"] || "^13.1.1",
  "html2canvas": rootPkg.dependencies["html2canvas"] || "^1.4.1",
  "jspdf": rootPkg.dependencies["jspdf"] || "^4.2.1",
  "lucide-react": rootPkg.dependencies["lucide-react"] || "^1.37.0",
  "next": rootPkg.dependencies["next"] || "16.3.3",
  "react": rootPkg.dependencies["react"] || "19.2.8",
  "react-dom": rootPkg.dependencies["react-dom"] || "19.2.8",
  "xlsx": rootPkg.dependencies["xlsx"] || "^0.18.5"
};

const baseDevDependencies = {
  "@tailwindcss/postcss": rootPkg.devDependencies["@tailwindcss/postcss"] || "^4",
  "@types/node": rootPkg.devDependencies["@types/node"] || "^20",
  "@types/react": rootPkg.devDependencies["@types/react"] || "^19",
  "@types/react-dom": rootPkg.devDependencies["@types/react-dom"] || "^19",
  "tailwindcss": rootPkg.devDependencies["tailwindcss"] || "^4",
  "typescript": rootPkg.devDependencies["typescript"] || "^5"
};

// Global CSS template
const globalsCssContent = `@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Scheherazade+New:wght@400;700;900&display=swap');
@import "tailwindcss";

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
    background-color: #0f172a;
    color: #f8fafc;
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
}
`;

// PostCSS config
const postcssConfigContent = `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
`;

// Next.js config
const nextConfigContent = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      }
    ],
  },
};

export default nextConfig;
`;

// TSConfig template
const tsConfigContent = `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "../../src/*",
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
`;

let scaffoldedCount = 0;

for (const slug of projectSlugs) {
  const originalPagePath = path.join(WORK_DIR, slug, 'page.tsx');
  if (!fs.existsSync(originalPagePath)) {
    console.warn(`Skipping ${slug}: page.tsx not found`);
    continue;
  }

  const originalContent = fs.readFileSync(originalPagePath, 'utf8');

  // Normalize app folder name (lowercase for package & folder standard)
  const appSlug = slug.toLowerCase();
  const appDir = path.join(APPS_DIR, appSlug);

  // 1. Create app directory structure
  fs.mkdirSync(path.join(appDir, 'src', 'app'), { recursive: true });

  // 2. Write package.json
  const pkgJson = {
    name: `@webstudio/${appSlug}`,
    version: "1.0.0",
    private: true,
    scripts: {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "eslint"
    },
    dependencies: baseDependencies,
    devDependencies: baseDevDependencies
  };
  fs.writeFileSync(path.join(appDir, 'package.json'), JSON.stringify(pkgJson, null, 2) + '\n');

  // 3. Write next.config.ts
  fs.writeFileSync(path.join(appDir, 'next.config.ts'), nextConfigContent);

  // 4. Write tsconfig.json
  fs.writeFileSync(path.join(appDir, 'tsconfig.json'), tsConfigContent);

  // 5. Write postcss.config.mjs
  fs.writeFileSync(path.join(appDir, 'postcss.config.mjs'), postcssConfigContent);

  // 6. Write src/app/globals.css
  fs.writeFileSync(path.join(appDir, 'src', 'app', 'globals.css'), globalsCssContent);

  // 7. Extract title/meta for layout.tsx
  const titleMatch = originalContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const descMatch = originalContent.match(/description:\s*['"`]([^'"`]+)['"`]/);

  const appTitle = titleMatch ? titleMatch[1] : `${appSlug.toUpperCase()} — WebStudio UAE`;
  const appDesc = descMatch ? descMatch[1] : `Exclusive UAE enterprise web application for ${appSlug}. Built with AED pricing, FTA VAT compliance, and luxury design.`;

  const layoutContent = `import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: ${JSON.stringify(appTitle)},
  description: ${JSON.stringify(appDesc)},
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Scheherazade+New:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-slate-950 text-slate-50 min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
`;
  fs.writeFileSync(path.join(appDir, 'src', 'app', 'layout.tsx'), layoutContent);

  // 8. Write src/app/page.tsx
  // Normalize any relative imports like ../../../components to @/components
  let pageContent = originalContent
    .replace(/\.\.\/\.\.\/\.\.\/components\//g, '@/components/')
    .replace(/\.\.\/\.\.\/components\//g, '@/components/')
    .replace(/\.\.\/components\//g, '@/components/');

  // If page exports metadata, that's already in layout or can stay in page.tsx
  fs.writeFileSync(path.join(appDir, 'src', 'app', 'page.tsx'), pageContent);

  // 9. Write README.md
  const readmeContent = `# ${appSlug.toUpperCase()} — Independent Next.js App

Standalone Next.js 16 application for **${appSlug}** built for the UAE market.

## Quick Start

\`\`\`bash
# From workspace root:
npm --workspace=@webstudio/${appSlug} run dev

# Or directly from this directory:
cd apps/${appSlug}
npm run dev
\`\`\`

## Build & Production

\`\`\`bash
cd apps/${appSlug}
npm run build
npm run start
\`\`\`

## Deployment
Set **Root Directory** in Vercel or Cloudflare Pages to \`apps/${appSlug}\`.
`;
  fs.writeFileSync(path.join(appDir, 'README.md'), readmeContent);

  scaffoldedCount++;
}

console.log(`Successfully scaffolded ${scaffoldedCount} independent Next.js applications in apps/!`);
