# 🇦🇪 Web Studio AE — Official Website & 50+ Premium UAE Web Projects

![Web Studio AE Banner](https://img.shields.io/badge/Web_Studio_AE-Official_Platform-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Next.js 16](https://img.shields.io/badge/Next.js_16.3-Webpack-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5.0-Clean-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Production Build](https://img.shields.io/badge/Static_Routes-58%2F58_Prerendered-2EA44F?style=for-the-badge&logo=github-actions&logoColor=white)
![Repo Security](https://img.shields.io/badge/Repo_Visibility-PRIVATE_🔒-D97706?style=for-the-badge&logo=git&logoColor=white)

**Official Repository**: [`jm-jahed/webstudioae.com`](https://github.com/jm-jahed/webstudioae.com)  
**Official Brand Page**: [LinkedIn Company Page](https://www.linkedin.com/company/webstudioae)  

---

## 📌 Project Overview

**Web Studio AE** is an enterprise-grade agency web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. It serves as the primary digital agency platform showcasing **50+ bespoke, production-ready UAE industry websites** covering real estate, corporate law, private aviation, luxury retail, tech bootcamps, executive healthcare, and hospitality.

Every project inside this suite is built to high agency standards ($15,000–$60,000 production value), featuring interactive financial calculators, program matching engines, filterable search tools, responsive drawers, and multi-step lead conversion forms.

---

## 🛠️ Technology Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.3 (App Router) | Static site generation (SSG), dynamic route handling, server rendering |
| **Language** | TypeScript 5 | Strict static typing, custom typed data schemas |
| **Styling** | Tailwind CSS 4 | Utility-first responsive design, dark mode, custom color tokens |
| **Animation** | Framer Motion & CSS Transitions | Smooth scroll reveals, micro-interactions, modal drawers |
| **Iconography** | Lucide React | Clean, scalable vector icons |
| **Data Layer** | Modular TypeScript Files (`src/data/*.ts`) | Type-safe structured datasets without hardcoded component text |
| **Build Engine** | Webpack 5 | Optimized static route compilation (58 static pages prerendered in <5s) |

---

## 📂 Project Architecture

```
webstudioae.com/
├── src/
│   ├── app/                          # Next.js App Router Routes
│   │   ├── page.tsx                  # Agency Homepage & Case Studies
│   │   ├── work/                     # Portfolio Index & 50 Dynamic Routes
│   │   │   ├── [slug]/page.tsx       # Dynamic Work Portfolio Route
│   │   │   ├── business-center-serviced-offices/
│   │   │   ├── training-education-institute/
│   │   │   ├── coding-tech-academy/
│   │   │   ├── premium-nursery-preschool/
│   │   │   ├── private-school/
│   │   │   └── photography-creative-studio/
│   ├── components/                   # Modular Component Suites per Project
│   │   ├── nexusWorkspace/           # Project #45 Components (17 components)
│   │   ├── eduvanta/                 # Project #46 Components (17 components)
│   │   ├── codeforge/                # Project #47 Components (17 components)
│   │   ├── littleHorizon/            # Project #48 Components (17 components)
│   │   ├── altairAcademy/            # Project #49 Components (18 components)
│   │   └── framehaus/                # Project #50 Components (19 components)
│   └── data/                         # Type-Safe Data Datasets
│       ├── nexusWorkspaceData.ts
│       ├── eduvantaData.ts
│       ├── codeforgeData.ts
│       ├── littleHorizonData.ts
│       ├── altairAcademyData.ts
│       └── framehausData.ts
├── public/                           # Static Media, Favicons, Brand Logos
├── package.json                      # Dependency Manifest
└── next.config.ts                    # Next.js Build Configuration
```

---

## 🏆 Featured Project Suite (Projects #45 — #51)

| Project ID | Brand Name | Industry / Positioning | Route Path | Component Count |
| :--- | :--- | :--- | :--- | :--- |
| **#45** | **NEXUS WORKSPACE** | UAE Serviced Offices & Business Centers | `/work/business-center-serviced-offices` | 17 Components |
| **#46** | **EDUVANTA** | UAE Training & Professional Education | `/work/training-education-institute` | 17 Components |
| **#47** | **CODEFORGE UAE** | Coding & Tech Bootcamp Academy | `/work/coding-tech-academy` | 17 Components |
| **#48** | **LITTLE HORIZON** | Premium UAE Nursery & Preschool | `/work/premium-nursery-preschool` | 17 Components |
| **#49 / #50** | **ALTAIR ACADEMY** | Premium UAE Private K–12 School | `/work/private-school` | 18 Components |
| **#51** | **FRAMEHAUS** | UAE Photography & Creative Studio | `/work/photography-creative-studio` | 19 Components |

---

## ⚡ Local Development Setup

### 1. Prerequisites
Ensure Node.js 18+ and npm are installed on your machine.

### 2. Clone Repository
```bash
git clone https://github.com/jm-jahed/webstudioae.com.git
cd webstudioae.com
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Configuration
Copy `.env.example` to `.env.local` if custom environment variables are required:
```bash
cp .env.example .env.local
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Verify Production Build
To test Webpack compilation and static route prerendering:
```bash
npx next build --webpack
```

---

## 🔒 Security & Privacy Notice

* Repository visibility: **PRIVATE** (`jm-jahed/webstudioae.com`).
* All API keys, environment credentials, and private tokens are excluded via `.gitignore`.
* All statistics, testimonials, client names, and pricing ranges used inside portfolio demonstration pages are fictional/illustrative content.

---

## 📄 License & Ownership

© 2026 **Web Studio AE** & **Jahangir Jahed** (`@jm-jahed`). All rights reserved.
