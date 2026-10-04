/**
 * WebStudio AE — Premium Agency Proposal Generator
 * Generates a 12-page A4 PDF using Playwright + Chromium
 * Run: node generate-proposal.mjs
 */

import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Embed logo as base64 for reliable rendering inside Chromium
const logoPath = resolve(__dirname, 'public', 'webstudio-logo.png');
const logoBase64 = readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

const iconMarkPath = resolve(__dirname, 'public', 'ws-icon-mark.png');
const iconMarkBase64 = readFileSync(iconMarkPath).toString('base64');
const iconMarkSrc = `data:image/png;base64,${iconMarkBase64}`;

const OUTPUT_PATH = resolve(__dirname, 'WebStudio-AE-Proposal-2025.pdf');

// ─── HTML Template ────────────────────────────────────────────────────────────
const html = /* html */`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>WebStudio AE — Agency Proposal 2025</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
<style>
/* ── Reset & Base ─────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
  color-adjust: exact !important;
}

/* ── Design Tokens ─────────────────────────────────────── */
:root {
  --bg:          #05080f;
  --bg2:         #080c16;
  --bg3:         #0b1020;
  --gold:        #D4A843;
  --gold-light:  #F0C860;
  --gold-dim:    #8B6E22;
  --cyan:        #00C8DB;
  --cyan-dim:    #007A8A;
  --white:       #FFFFFF;
  --grey:        #9AAABB;
  --grey-dim:    #4A5A6A;
  --card:        rgba(255,255,255,0.035);
  --card-border: rgba(255,255,255,0.07);
  --grid-line:   rgba(255,255,255,0.028);
  --page-w:      210mm;
  --page-h:      297mm;
  --font-head:   'Outfit', 'Inter', sans-serif;
  --font-body:   'Inter', sans-serif;
}

/* ── Typography ─────────────────────────────────────────── */
body { font-family: var(--font-body); background: var(--bg); color: var(--white); }
h1, h2, h3, h4, h5 { font-family: var(--font-head); }

/* ── Page System ────────────────────────────────────────── */
.page {
  position: relative;
  width: var(--page-w);
  height: var(--page-h);
  overflow: hidden;
  background: var(--bg);
  page-break-after: always;
  break-after: page;
}
.page:last-child { page-break-after: avoid; break-after: avoid; }

/* ── Global grid pattern ────────────────────────────────── */
.grid-bg {
  position: absolute; inset: 0; z-index: 0;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* ── Shared accent glow blobs ───────────────────────────── */
.glow-gold {
  position: absolute; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,168,67,0.18) 0%, transparent 70%);
  filter: blur(40px); pointer-events: none;
}
.glow-cyan {
  position: absolute; border-radius: 50%;
  background: radial-gradient(circle, rgba(0,200,219,0.14) 0%, transparent 70%);
  filter: blur(40px); pointer-events: none;
}

/* ── Running header / footer ────────────────────────────── */
.pheader {
  position: absolute; top: 0; left: 0; right: 0; z-index: 10;
  height: 11mm;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 11mm;
  border-bottom: 1px solid rgba(212,168,67,0.14);
}
.pheader-label {
  font-family: var(--font-head); font-size: 7pt; font-weight: 600;
  letter-spacing: 0.18em; color: var(--gold-dim);
  text-transform: uppercase;
}
.pheader-logo {
  height: 7mm; object-fit: contain; opacity: 0.85;
}

.pfooter {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 10;
  height: 10mm;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 11mm;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.pfooter-left {
  font-size: 6.5pt; color: var(--grey-dim); letter-spacing: 0.06em;
  font-family: var(--font-body);
}
.pfooter-right {
  font-size: 6.5pt; color: var(--grey-dim); letter-spacing: 0.1em;
  font-family: var(--font-head); font-weight: 600;
}

/* ── Page content area ──────────────────────────────────── */
.pcontent {
  position: absolute;
  top: 11mm; bottom: 10mm; left: 0; right: 0;
  z-index: 1;
  overflow: hidden;
}

/* ── Section title block ────────────────────────────────── */
.section-eyebrow {
  font-size: 6.5pt; font-weight: 700; letter-spacing: 0.22em;
  color: var(--gold); text-transform: uppercase; font-family: var(--font-head);
  margin-bottom: 4mm;
}
.section-title {
  font-family: var(--font-head); font-weight: 800;
  color: var(--white); line-height: 1.15;
}
.section-title span.gold { color: var(--gold); }
.section-title span.cyan { color: var(--cyan); }

/* ── Divider ─────────────────────────────────────────────── */
.gold-line {
  height: 1px; width: 100%;
  background: linear-gradient(90deg, var(--gold) 0%, rgba(212,168,67,0.0) 100%);
}
.gold-line-center {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%);
}

/* ── Cards ───────────────────────────────────────────────── */
.card {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 3mm;
  padding: 4mm 4.5mm;
  position: relative; overflow: hidden;
}
.card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--cyan), transparent);
  opacity: 0.5;
}

/* ── Badge ───────────────────────────────────────────────── */
.badge {
  display: inline-flex; align-items: center; gap: 2mm;
  padding: 1.5mm 4mm;
  border: 1px solid rgba(212,168,67,0.35);
  border-radius: 10mm;
  font-size: 7pt; font-weight: 600; letter-spacing: 0.1em;
  color: var(--gold); font-family: var(--font-head);
  background: rgba(212,168,67,0.07);
}
.badge.cyan {
  border-color: rgba(0,200,219,0.35); color: var(--cyan);
  background: rgba(0,200,219,0.06);
}

/* ── Stat block ──────────────────────────────────────────── */
.stat-num {
  font-family: var(--font-head); font-weight: 800;
  color: var(--gold); line-height: 1;
}
.stat-label {
  font-size: 7pt; color: var(--grey); letter-spacing: 0.06em;
  font-weight: 500; margin-top: 1mm;
}

/* ── Tag chip ────────────────────────────────────────────── */
.chip {
  display: inline-block;
  padding: 0.8mm 2.5mm;
  border-radius: 2mm; font-size: 5.5pt; font-weight: 600;
  letter-spacing: 0.08em; text-transform: uppercase;
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--grey); background: rgba(255,255,255,0.04);
}
.chip.gold { color: var(--gold); border-color: rgba(212,168,67,0.25); background: rgba(212,168,67,0.06); }
.chip.cyan { color: var(--cyan); border-color: rgba(0,200,219,0.25); background: rgba(0,200,219,0.05); }

/* ── Comparison table ────────────────────────────────────── */
.comp-table { width: 100%; border-collapse: collapse; }
.comp-table th, .comp-table td {
  padding: 3mm 4mm; font-size: 8pt;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-family: var(--font-body);
}
.comp-table th {
  font-family: var(--font-head); font-size: 7pt; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase; padding-bottom: 3mm;
}
.comp-table .col-trad { color: var(--grey-dim); }
.comp-table .col-ws { color: var(--white); font-weight: 500; }
.comp-table .col-ws-head { color: var(--gold); }

/* ── Dot indicator ───────────────────────────────────────── */
.dot-gold { display: inline-block; width: 4px; height: 4px; border-radius: 50%; background: var(--gold); margin-right: 2mm; vertical-align: middle; }
.dot-cyan  { display: inline-block; width: 4px; height: 4px; border-radius: 50%; background: var(--cyan);  margin-right: 2mm; vertical-align: middle; }

@media print {
  html, body { background: var(--bg) !important; }
  .page { break-after: page; }
}
</style>
</head>
<body>

<!-- ══════════════════════════════════════════════════════════════
     PAGE 01 — PREMIUM COVER
══════════════════════════════════════════════════════════════ -->
<div class="page" style="background: linear-gradient(160deg, #040710 0%, #080e1e 50%, #040b16 100%);">
  <div class="grid-bg"></div>
  <!-- Accent glows -->
  <div class="glow-gold" style="width:140mm; height:140mm; top:-30mm; right:-30mm; opacity:0.7;"></div>
  <div class="glow-cyan"  style="width:100mm; height:100mm; bottom:-20mm; left:-20mm; opacity:0.5;"></div>

  <!-- Diagonal decorative line -->
  <div style="position:absolute; top:0; left:0; right:0; bottom:0; z-index:1; overflow:hidden; pointer-events:none;">
    <div style="position:absolute; top:-10mm; right:40mm; width:1px; height:320mm; background:linear-gradient(180deg,transparent,rgba(212,168,67,0.15),transparent); transform:rotate(18deg);"></div>
    <div style="position:absolute; top:-10mm; right:55mm; width:1px; height:320mm; background:linear-gradient(180deg,transparent,rgba(0,200,219,0.08),transparent); transform:rotate(18deg);"></div>
  </div>

  <!-- Corner tech marks -->
  <div style="position:absolute; top:8mm; left:8mm; width:8mm; height:8mm; border-top:1.5px solid rgba(212,168,67,0.45); border-left:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>
  <div style="position:absolute; top:8mm; right:8mm; width:8mm; height:8mm; border-top:1.5px solid rgba(212,168,67,0.45); border-right:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>
  <div style="position:absolute; bottom:8mm; left:8mm; width:8mm; height:8mm; border-bottom:1.5px solid rgba(212,168,67,0.45); border-left:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>
  <div style="position:absolute; bottom:8mm; right:8mm; width:8mm; height:8mm; border-bottom:1.5px solid rgba(212,168,67,0.45); border-right:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>

  <!-- Running metadata top -->
  <div style="position:absolute; top:5.5mm; left:0; right:0; z-index:10; display:flex; align-items:center; justify-content:space-between; padding:0 14mm;">
    <span style="font-size:5.5pt; letter-spacing:0.2em; text-transform:uppercase; color:rgba(212,168,67,0.5); font-family:'Outfit',sans-serif; font-weight:600;">WEBSTUDIO AE · AGENCY PROPOSAL</span>
    <span style="font-size:5.5pt; letter-spacing:0.12em; color:rgba(255,255,255,0.25); font-family:'Inter',sans-serif;">DOC-2025 · CONFIDENTIAL</span>
  </div>

  <!-- Main content — centered vertically -->
  <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-52%); z-index:5; text-align:center; width:170mm;">
    <!-- Logo -->
    <div style="margin-bottom:8mm;">
      <img src="${logoSrc}" alt="WebStudio AE" style="height:18mm; object-fit:contain; filter:brightness(1.05);" />
    </div>

    <!-- Eyebrow -->
    <div style="font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.28em; text-transform:uppercase; color:rgba(212,168,67,0.85); margin-bottom:7mm;">
      AI &amp; Digital Engineering Studio &nbsp;·&nbsp; UAE &amp; Global
    </div>

    <!-- Thin gold divider -->
    <div style="width:30mm; height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:0 auto 9mm;"></div>

    <!-- Hero tagline -->
    <div style="font-family:'Outfit',sans-serif; font-size:28pt; font-weight:800; line-height:1.12; color:#FFFFFF; letter-spacing:-0.02em; margin-bottom:4mm;">
      We Build Digital Products<br/>
      <span style="background:linear-gradient(90deg,#D4A843,#F0C860,#D4A843); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">End to End.</span>
    </div>

    <!-- Sub tagline -->
    <div style="font-family:'Inter',sans-serif; font-size:9.5pt; font-weight:400; color:rgba(155,175,195,0.9); line-height:1.65; margin-bottom:10mm; letter-spacing:0.01em;">
      UAE-based AI &amp; Digital Engineering Studio delivering premium,<br/>
      high-performance digital products for businesses in the UAE + worldwide.
    </div>

    <!-- Badges row -->
    <div style="display:flex; gap:4mm; justify-content:center; flex-wrap:wrap;">
      <div style="display:flex; align-items:center; gap:2mm; padding:2.5mm 6mm; border:1px solid rgba(212,168,67,0.4); border-radius:10mm; background:rgba(212,168,67,0.08);">
        <div style="width:5px; height:5px; border-radius:50%; background:#D4A843;"></div>
        <span style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:700; color:#D4A843; letter-spacing:0.08em;">84+ Running Projects</span>
      </div>
      <div style="display:flex; align-items:center; gap:2mm; padding:2.5mm 6mm; border:1px solid rgba(0,200,219,0.3); border-radius:10mm; background:rgba(0,200,219,0.06);">
        <div style="width:5px; height:5px; border-radius:50%; background:#00C8DB;"></div>
        <span style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:700; color:#00C8DB; letter-spacing:0.08em;">UAE-Based · Global Delivery</span>
      </div>
      <div style="display:flex; align-items:center; gap:2mm; padding:2.5mm 6mm; border:1px solid rgba(255,255,255,0.12); border-radius:10mm; background:rgba(255,255,255,0.04);">
        <div style="width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,0.5);"></div>
        <span style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:600; color:rgba(255,255,255,0.7); letter-spacing:0.06em;">Full-Stack + AI Engineering</span>
      </div>
    </div>
  </div>

  <!-- Bottom contact strip -->
  <div style="position:absolute; bottom:15mm; left:0; right:0; z-index:5; display:flex; justify-content:center; align-items:center; gap:8mm;">
    <span style="font-size:7pt; color:rgba(255,255,255,0.35); font-family:'Inter',sans-serif; letter-spacing:0.06em;">webstudioae.com</span>
    <div style="width:1px; height:4mm; background:rgba(255,255,255,0.15);"></div>
    <span style="font-size:7pt; color:rgba(255,255,255,0.35); font-family:'Inter',sans-serif; letter-spacing:0.06em;">info@webstudioae.com</span>
    <div style="width:1px; height:4mm; background:rgba(255,255,255,0.15);"></div>
    <span style="font-size:7pt; color:rgba(255,255,255,0.35); font-family:'Inter',sans-serif; letter-spacing:0.06em;">+971 56 618 4509</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 02 — WHO WE ARE
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-gold" style="width:120mm; height:120mm; top:-20mm; right:-20mm; opacity:0.5;"></div>
  <div class="glow-cyan"  style="width:80mm;  height:80mm;  bottom:20mm; left:10mm; opacity:0.35;"></div>

  <!-- Header -->
  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding: 10mm 11mm 0;">

    <div style="margin-bottom:6mm;">
      <div class="section-eyebrow">Who We Are</div>
      <div class="section-title" style="font-size:20pt; max-width:150mm;">
        Engineering Digital Products for<br/>
        <span class="gold">UAE + Global</span> Businesses
      </div>
    </div>

    <div class="gold-line" style="margin-bottom:6mm; width:50mm;"></div>

    <!-- Description -->
    <div style="font-size:9.5pt; line-height:1.75; color:rgba(200,215,230,0.9); max-width:165mm; margin-bottom:8mm; font-weight:400;">
      WebStudio AE is a UAE-based AI &amp; Digital Engineering Studio delivering premium, high-performance 
      digital products for businesses across Dubai, Abu Dhabi, the wider UAE, and markets worldwide. 
      We operate as a dedicated engineering partner — not a typical agency — capable of handling the 
      complete digital product lifecycle from strategy and design through to backend engineering, 
      AI integration, and long-term ongoing development.
      <br/><br/>
      Rather than hiring a single developer, businesses work with WebStudio AE as a full-capability 
      engineering team, scaling with their requirements and delivering enterprise-grade digital products 
      that drive real business outcomes.
    </div>

    <!-- 4 stat cards -->
    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:4mm; margin-bottom:7mm;">
      <div class="card" style="text-align:center; padding:5mm 3mm;">
        <div class="stat-num" style="font-size:22pt;">84+</div>
        <div class="stat-label" style="margin-top:2mm;">Running Projects</div>
      </div>
      <div class="card" style="text-align:center; padding:5mm 3mm;">
        <div style="font-size:13pt; font-weight:800; color:#00C8DB; font-family:'Outfit',sans-serif;">UAE</div>
        <div class="stat-label" style="margin-top:2mm;">Primary Base<br/>Dubai &amp; Abu Dhabi</div>
      </div>
      <div class="card" style="text-align:center; padding:5mm 3mm;">
        <div style="font-size:13pt; font-weight:800; color:#fff; font-family:'Outfit',sans-serif;">GLOBAL</div>
        <div class="stat-label" style="margin-top:2mm;">Delivery Capability<br/>Worldwide</div>
      </div>
      <div class="card" style="text-align:center; padding:5mm 3mm;">
        <div style="font-size:9pt; font-weight:800; color:#D4A843; font-family:'Outfit',sans-serif; line-height:1.3;">Full-Stack<br/>+ AI</div>
        <div class="stat-label" style="margin-top:2mm;">Engineering<br/>Capability</div>
      </div>
    </div>

    <!-- Key principles row -->
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:4mm;">
      <div style="padding:4mm; border:1px solid rgba(212,168,67,0.15); border-radius:2.5mm; border-left:2px solid var(--gold);">
        <div style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:700; color:var(--gold); margin-bottom:1.5mm; letter-spacing:0.05em;">END-TO-END DELIVERY</div>
        <div style="font-size:7.5pt; color:var(--grey); line-height:1.6;">From initial strategy and UI/UX design through to backend systems, AI integration, and deployment — we manage the full lifecycle.</div>
      </div>
      <div style="padding:4mm; border:1px solid rgba(0,200,219,0.15); border-radius:2.5mm; border-left:2px solid var(--cyan);">
        <div style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:700; color:var(--cyan); margin-bottom:1.5mm; letter-spacing:0.05em;">UAE-ROOTED EXPERTISE</div>
        <div style="font-size:7.5pt; color:var(--grey); line-height:1.6;">Deep understanding of UAE business culture, regulatory landscape, and market expectations across all major sectors and emirates.</div>
      </div>
      <div style="padding:4mm; border:1px solid rgba(255,255,255,0.08); border-radius:2.5mm; border-left:2px solid rgba(255,255,255,0.25);">
        <div style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:700; color:var(--white); margin-bottom:1.5mm; letter-spacing:0.05em;">LONG-TERM PARTNERSHIP</div>
        <div style="font-size:7.5pt; color:var(--grey); line-height:1.6;">We build lasting partnerships with our clients — not one-off projects. Our relationships grow as your business grows.</div>
      </div>
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">02 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 03 — WHY WEBSTUDIO AE
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-gold" style="width:100mm; height:100mm; top:30mm; right:-10mm; opacity:0.45;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">Our Capabilities</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:5mm;">Why <span class="gold">WebStudio AE</span></div>
    <div class="gold-line" style="width:40mm; margin-bottom:7mm;"></div>

    <!-- 10 capability cards — 2 columns -->
    <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:3.5mm;">

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(212,168,67,0.25),rgba(212,168,67,0.08)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--gold);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">Full-Stack Engineering</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">React · Next.js · Node.js · TypeScript · PostgreSQL — complete frontend to backend capability.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(0,200,219,0.2),rgba(0,200,219,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--cyan);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">AI &amp; LLM Integration</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">OpenAI, RAG pipelines, intelligent agents, knowledge bases, and AI-powered product features.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(212,168,67,0.2),rgba(212,168,67,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--gold);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">High-Performance Web Platforms</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Edge-optimized, sub-second load times, Core Web Vitals tuned, built for scale from day one.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(0,200,219,0.2),rgba(0,200,219,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--cyan);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">Scalable Architecture</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Systems designed to scale — from early-stage to enterprise-grade infrastructure without rebuilding.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(212,168,67,0.2),rgba(212,168,67,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--gold);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">Premium UI/UX Design</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Luxury-grade interfaces with cinematic motion design, built to convert and impress at first glance.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(0,200,219,0.2),rgba(0,200,219,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--cyan);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">E-Commerce Systems</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Full e-commerce platforms with cart, checkout, inventory, AED currency, and payment gateway integrations.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(212,168,67,0.2),rgba(212,168,67,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--gold);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">Business Dashboards</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Real-time analytics dashboards, KPI platforms, admin portals, and operational command centers.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(0,200,219,0.2),rgba(0,200,219,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--cyan);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">API &amp; Backend Engineering</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">RESTful and GraphQL APIs, third-party integrations, secure data layers, and microservice architectures.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(212,168,67,0.2),rgba(212,168,67,0.06)); display:flex; align-items:center; justify-content:center;">
          <div style="width:4px; height:4px; border-radius:50%; background:var(--gold);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">Cloud Deployment</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Vercel, AWS, and cloud-native deployment pipelines with CI/CD, performance monitoring, and security hardening.</div>
        </div>
      </div>

      <div class="card" style="display:flex; gap:3.5mm; align-items:flex-start; padding:4.5mm; border-color:rgba(212,168,67,0.2);">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:linear-gradient(135deg,rgba(212,168,67,0.3),rgba(212,168,67,0.1)); display:flex; align-items:center; justify-content:center;">
          <div style="width:5px; height:5px; border-radius:50%; background:var(--gold);"></div>
        </div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--gold); margin-bottom:1mm;">Long-Term Engineering Partnership</div>
          <div style="font-size:7pt; color:var(--grey); line-height:1.6;">We grow with your business — ongoing development, iteration, feature expansion, and technology evolution.</div>
        </div>
      </div>

    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">03 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 04 — WHAT WE BUILD
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-cyan" style="width:120mm; height:120mm; top:-20mm; left:-20mm; opacity:0.4;"></div>
  <div class="glow-gold" style="width:90mm; height:90mm; bottom:10mm; right:-10mm; opacity:0.4;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">Product Categories</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:5mm;">What We <span class="gold">Build</span></div>
    <div class="gold-line" style="width:40mm; margin-bottom:7mm;"></div>

    <!-- 12 category cards in 3 columns -->
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:3mm;">
      ${[
        ['Corporate Websites', 'Premium corporate presence, about pages, service portals, and lead generation platforms.'],
        ['Real Estate Platforms', 'Off-plan portals, property listings, agent tools, lead capture funnels, and masterplan viewers.'],
        ['FinTech Platforms', 'Payment gateways, B2B finance dashboards, digital wallets, and remittance platforms.'],
        ['AI Platforms', 'LLM-powered products, intelligent agents, RAG knowledge bases, and cognitive workflows.'],
        ['E-Commerce', 'Full-featured storefronts, product catalogs, cart systems, and AED checkout flows.'],
        ['SaaS Applications', 'Multi-tenant web apps, subscription billing, user management, and feature gating.'],
        ['Dashboards', 'Real-time analytics, KPI platforms, admin portals, and operational control centers.'],
        ['Booking Platforms', 'Appointment scheduling, calendar integration, service catalogs, and capacity management.'],
        ['Service Platforms', 'On-demand service portals, dispatch systems, contractor management, and CRM integrations.'],
        ['Luxury &amp; Premium Brands', 'Cinematic brand experiences, haute couture platforms, VIP booking flows, and prestige digital identity.'],
        ['Business Portals', 'B2B client portals, partner dashboards, document management, and workflow automation.'],
        ['Custom Digital Products', 'Bespoke platforms, proprietary systems, IoT dashboards, and specialized industry tools.'],
      ].map(([title, desc], i) => `
      <div class="card" style="padding:4mm;">
        <div style="display:flex; align-items:center; gap:2mm; margin-bottom:2mm;">
          <div style="width:4px; height:4px; border-radius:50%; background:${i%3===0?'var(--gold)':i%3===1?'var(--cyan)':'rgba(255,255,255,0.4)'};"></div>
          <div style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:700; color:var(--white);">${title}</div>
        </div>
        <div style="font-size:6.5pt; color:var(--grey); line-height:1.6;">${desc}</div>
      </div>`).join('')}
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">04 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 05 — ENGINEERING STACK
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-gold" style="width:100mm; height:100mm; top:50mm; right:-10mm; opacity:0.4;"></div>
  <div class="glow-cyan"  style="width:80mm;  height:80mm;  bottom:20mm; left:20mm;  opacity:0.3;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">Technology Architecture</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:3mm;">Our <span class="gold">Engineering</span> Stack</div>
    <div style="font-size:8.5pt; color:var(--grey); margin-bottom:6mm;">A sophisticated, proven technology architecture engineered for performance, scalability, and long-term maintainability.</div>
    <div class="gold-line" style="width:40mm; margin-bottom:7mm;"></div>

    <!-- Architecture diagram -->
    <div style="position:relative;">

      <!-- Layer 1: Frontend -->
      <div style="margin-bottom:4mm;">
        <div style="display:flex; align-items:center; gap:3mm; margin-bottom:2.5mm;">
          <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; color:var(--gold); font-family:'Outfit',sans-serif; text-transform:uppercase; white-space:nowrap; min-width:22mm;">FRONTEND</div>
          <div style="flex:1; height:1px; background:linear-gradient(90deg,rgba(212,168,67,0.4),transparent);"></div>
        </div>
        <div style="display:flex; gap:3mm; margin-left:25mm;">
          ${['React', 'Next.js', 'TypeScript', 'Framer Motion', 'CSS Architecture'].map(t => `
          <div style="padding:2.5mm 4mm; background:rgba(212,168,67,0.08); border:1px solid rgba(212,168,67,0.2); border-radius:2mm; font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; color:var(--gold);">${t}</div>`).join('')}
        </div>
      </div>

      <!-- Vertical connector -->
      <div style="width:1px; height:4mm; background:rgba(255,255,255,0.1); margin-left:25mm; margin-bottom:4mm;"></div>

      <!-- Layer 2: Backend -->
      <div style="margin-bottom:4mm;">
        <div style="display:flex; align-items:center; gap:3mm; margin-bottom:2.5mm;">
          <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; color:var(--cyan); font-family:'Outfit',sans-serif; text-transform:uppercase; white-space:nowrap; min-width:22mm;">BACKEND</div>
          <div style="flex:1; height:1px; background:linear-gradient(90deg,rgba(0,200,219,0.4),transparent);"></div>
        </div>
        <div style="display:flex; gap:3mm; margin-left:25mm;">
          ${['Node.js', 'REST APIs', 'GraphQL', 'Authentication', 'Microservices'].map(t => `
          <div style="padding:2.5mm 4mm; background:rgba(0,200,219,0.07); border:1px solid rgba(0,200,219,0.2); border-radius:2mm; font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; color:var(--cyan);">${t}</div>`).join('')}
        </div>
      </div>

      <div style="width:1px; height:4mm; background:rgba(255,255,255,0.1); margin-left:25mm; margin-bottom:4mm;"></div>

      <!-- Layer 3: Database -->
      <div style="margin-bottom:4mm;">
        <div style="display:flex; align-items:center; gap:3mm; margin-bottom:2.5mm;">
          <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; color:rgba(255,255,255,0.6); font-family:'Outfit',sans-serif; text-transform:uppercase; white-space:nowrap; min-width:22mm;">DATABASE</div>
          <div style="flex:1; height:1px; background:linear-gradient(90deg,rgba(255,255,255,0.15),transparent);"></div>
        </div>
        <div style="display:flex; gap:3mm; margin-left:25mm;">
          ${['PostgreSQL', 'Data Modeling', 'Query Optimization', 'Migrations', 'Backups'].map(t => `
          <div style="padding:2.5mm 4mm; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:2mm; font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; color:rgba(200,215,230,0.85);">${t}</div>`).join('')}
        </div>
      </div>

      <div style="width:1px; height:4mm; background:rgba(255,255,255,0.1); margin-left:25mm; margin-bottom:4mm;"></div>

      <!-- Layer 4: AI -->
      <div style="margin-bottom:4mm;">
        <div style="display:flex; align-items:center; gap:3mm; margin-bottom:2.5mm;">
          <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; color:var(--gold); font-family:'Outfit',sans-serif; text-transform:uppercase; white-space:nowrap; min-width:22mm;">AI / ML</div>
          <div style="flex:1; height:1px; background:linear-gradient(90deg,rgba(212,168,67,0.4),transparent);"></div>
        </div>
        <div style="display:flex; gap:3mm; margin-left:25mm;">
          ${['LLM Integration', 'RAG Pipelines', 'Vector Databases', 'AI Agents', 'Python / OpenAI'].map(t => `
          <div style="padding:2.5mm 4mm; background:rgba(212,168,67,0.08); border:1px solid rgba(212,168,67,0.2); border-radius:2mm; font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; color:var(--gold);">${t}</div>`).join('')}
        </div>
      </div>

      <div style="width:1px; height:4mm; background:rgba(255,255,255,0.1); margin-left:25mm; margin-bottom:4mm;"></div>

      <!-- Layer 5: Content -->
      <div style="margin-bottom:4mm;">
        <div style="display:flex; align-items:center; gap:3mm; margin-bottom:2.5mm;">
          <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; color:var(--cyan); font-family:'Outfit',sans-serif; text-transform:uppercase; white-space:nowrap; min-width:22mm;">CONTENT</div>
          <div style="flex:1; height:1px; background:linear-gradient(90deg,rgba(0,200,219,0.4),transparent);"></div>
        </div>
        <div style="display:flex; gap:3mm; margin-left:25mm;">
          ${['Headless CMS', 'Sanity', 'Contentful', 'Content Modeling', 'Structured Data'].map(t => `
          <div style="padding:2.5mm 4mm; background:rgba(0,200,219,0.07); border:1px solid rgba(0,200,219,0.2); border-radius:2mm; font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; color:var(--cyan);">${t}</div>`).join('')}
        </div>
      </div>

      <div style="width:1px; height:4mm; background:rgba(255,255,255,0.1); margin-left:25mm; margin-bottom:4mm;"></div>

      <!-- Layer 6: Infrastructure -->
      <div>
        <div style="display:flex; align-items:center; gap:3mm; margin-bottom:2.5mm;">
          <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; color:rgba(255,255,255,0.6); font-family:'Outfit',sans-serif; text-transform:uppercase; white-space:nowrap; min-width:22mm;">INFRASTRUCTURE</div>
          <div style="flex:1; height:1px; background:linear-gradient(90deg,rgba(255,255,255,0.15),transparent);"></div>
        </div>
        <div style="display:flex; gap:3mm; margin-left:25mm;">
          ${['Cloud Deployment', 'Vercel / AWS', 'CI/CD Pipeline', 'Security', 'Performance'].map(t => `
          <div style="padding:2.5mm 4mm; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:2mm; font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; color:rgba(200,215,230,0.85);">${t}</div>`).join('')}
        </div>
      </div>

    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">05 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 06 — DEVELOPMENT PROCESS
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-gold" style="width:90mm; height:90mm; top:40mm; right:0; opacity:0.38;"></div>
  <div class="glow-cyan"  style="width:80mm; height:80mm; bottom:30mm; left:0; opacity:0.28;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">Methodology</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:3mm;">Development <span class="gold">Process</span></div>
    <div style="font-size:8pt; color:var(--grey); margin-bottom:6mm;">A structured, transparent engineering lifecycle — from first conversation to live deployment and beyond.</div>
    <div class="gold-line" style="width:40mm; margin-bottom:7mm;"></div>

    <!-- 10 process steps — 2 columns of 5 -->
    <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:4mm;">
      ${[
        ['01', 'Discovery', 'Business goals, target audience, technical requirements, and competitive landscape analysis.'],
        ['02', 'Strategy', 'Digital product strategy, feature prioritization, technology selection, and project roadmap.'],
        ['03', 'UI/UX Design', 'Wireframes, user flows, high-fidelity design systems, and interactive prototypes.'],
        ['04', 'Frontend Engineering', 'Component development, responsive layouts, animations, and performance optimization.'],
        ['05', 'Backend Engineering', 'Server-side logic, business rules, authentication systems, and application architecture.'],
        ['06', 'Database &amp; APIs', 'Schema design, data modeling, API endpoints, integrations, and third-party connections.'],
        ['07', 'AI Integration', 'LLM setup, RAG pipeline configuration, intelligent features, and model fine-tuning.'],
        ['08', 'Testing &amp; QA', 'Cross-browser testing, performance audits, security review, and bug resolution.'],
        ['09', 'Deployment', 'Cloud infrastructure setup, DNS configuration, SSL, monitoring, and go-live support.'],
        ['10', 'Ongoing Development', 'Feature iterations, performance improvements, content updates, and technology evolution.'],
      ].map(([num, title, desc], i) => `
      <div style="display:flex; gap:3.5mm; align-items:flex-start;">
        <div style="min-width:8mm; height:8mm; border-radius:2mm; background:${i<5?'rgba(212,168,67,0.1)':'rgba(0,200,219,0.08)'}; border:1px solid ${i<5?'rgba(212,168,67,0.25)':'rgba(0,200,219,0.2)'}; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <span style="font-family:'Outfit',sans-serif; font-size:6.5pt; font-weight:800; color:${i<5?'var(--gold)':'var(--cyan)'};">${num}</span>
        </div>
        <div style="padding-top:0.5mm;">
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">${title}</div>
          <div style="font-size:6.5pt; color:var(--grey); line-height:1.65;">${desc}</div>
        </div>
      </div>`).join('')}
    </div>

    <!-- Lifecycle banner -->
    <div style="margin-top:6mm; padding:3.5mm 5mm; background:rgba(212,168,67,0.06); border:1px solid rgba(212,168,67,0.2); border-radius:2.5mm; display:flex; align-items:center; justify-content:space-between;">
      <div style="font-family:'Outfit',sans-serif; font-size:7pt; font-weight:700; color:rgba(212,168,67,0.7); letter-spacing:0.12em; text-transform:uppercase;">Full Lifecycle Coverage</div>
      <div style="display:flex; gap:1.5mm; align-items:center; flex-wrap:wrap;">
        ${['UI/UX', 'Frontend', 'Backend', 'Database', 'AI', 'Testing', 'Deployment', 'Growth'].map((s,i,arr) => `
        <span style="font-size:6.5pt; color:rgba(200,215,230,0.7); font-family:'Outfit',sans-serif; font-weight:500;">${s}</span>
        ${i<arr.length-1?'<span style="color:rgba(212,168,67,0.4); font-size:7pt;">→</span>':''}`).join('')}
      </div>
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">06 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 07 — PORTFOLIO / PROOF
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-gold" style="width:110mm; height:110mm; top:-20mm; right:-20mm; opacity:0.45;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:8mm 11mm 0;">
    <div style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:4mm;">
      <div>
        <div class="section-eyebrow">Selected Work</div>
        <div class="section-title" style="font-size:18pt;"><span class="gold">84+</span> Running Projects</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:7pt; color:var(--grey); font-family:'Inter',sans-serif; line-height:1.7;">Real clients · Real results<br/>UAE &amp; International markets</div>
      </div>
    </div>
    <div class="gold-line" style="width:50mm; margin-bottom:6mm;"></div>

    <!-- 12 project cards in 3 columns -->
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:3mm;">
      ${[
        { n:'01', title:'LUXESTATE UAE', cat:'Real Estate & PropTech',     tag:'AED 45M+ Leads Generated', tech:'Next.js · Lead Funnel · AI' },
        { n:'02', title:'NEXORA PAY',   cat:'FinTech & Payment Infrastructure', tag:'$48.7B+ Processed · 190 Markets', tech:'Next.js · APIs · Security' },
        { n:'03', title:'VALOR LEGAL',  cat:'Corporate Law & Arbitration', tag:'AED 500M+ Cases Handled', tech:'Next.js · CMS · Portal' },
        { n:'04', title:'TENSORIS',     cat:'Enterprise AI Platform',      tag:'850M+ Tensor Inferences', tech:'Next.js · AI · LLM · RAG' },
        { n:'05', title:'EXOTIC RENTALS DUBAI', cat:'Luxury Car Rental',  tag:'98.4% Fleet Utilization', tech:'Next.js · Booking · AED' },
        { n:'06', title:'AL SULTAN CUISINE', cat:'Haute Gastronomy',      tag:'160+ Master Dishes · 3 Salons', tech:'Next.js · VIP Reservation' },
        { n:'07', title:'NERO MARINE',  cat:'Superyacht Charter',         tag:'24 Mega-Yachts Fleet · 185ft', tech:'Next.js · Charter Engine' },
        { n:'08', title:'OUD ROYALE PARIS', cat:'Haute Parfumerie',       tag:'160+ Sovereign Flacons', tech:'Next.js · E-Commerce · CMS' },
        { n:'09', title:'VANGUARD HOLDINGS', cat:'Enterprise Advisory',   tag:'AED 18.5B+ Under Advisory', tech:'Next.js · Portal · Mandate' },
        { n:'10', title:'STRATOSYN',    cat:'Cloud Infrastructure',       tag:'142.8 Tbps Global Mesh', tech:'Next.js · Cloud · DevOps' },
        { n:'11', title:'CYBERFORTRESS', cat:'Sovereign AI SOC',          tag:'1.4B+ Attacks Blocked', tech:'Next.js · AI · Security' },
        { n:'12', title:'VITA CELL',    cat:'Longevity & Bio-Tech',       tag:'AED 38M+ Bio-Tech Therapies', tech:'Next.js · Health · AI' },
      ].map(p => `
      <div class="card" style="padding:3.5mm;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2mm;">
          <span style="font-size:5.5pt; color:var(--gold-dim); font-family:'Outfit',sans-serif; font-weight:700; letter-spacing:0.1em;">#${p.n}</span>
          <span style="font-size:5.5pt; color:var(--grey-dim); font-family:'Inter',sans-serif;">${p.cat}</span>
        </div>
        <div style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:800; color:var(--white); margin-bottom:1.5mm; letter-spacing:0.02em;">${p.title}</div>
        <div style="font-size:6.5pt; color:var(--gold); font-weight:600; margin-bottom:2mm; line-height:1.4;">${p.tag}</div>
        <div style="font-size:6pt; color:var(--grey-dim); font-family:'Inter',sans-serif;">${p.tech}</div>
      </div>`).join('')}
    </div>

    <div style="margin-top:4mm; text-align:center; font-size:7pt; color:var(--grey-dim); font-family:'Inter',sans-serif; letter-spacing:0.06em;">
      + 72 additional projects across UAE, GCC, Europe, and international markets &nbsp;·&nbsp; webstudioae.com
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">07 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 08 — UAE + GLOBAL DELIVERY
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-cyan"  style="width:120mm; height:120mm; top:20mm; left:20mm;  opacity:0.4;"></div>
  <div class="glow-gold" style="width:100mm; height:100mm; bottom:20mm; right:20mm; opacity:0.4;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">Geographic Reach</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:3mm;">UAE-Based · <span class="cyan">Global</span> Delivery</div>
    <div class="gold-line" style="width:40mm; margin-bottom:6mm;"></div>

    <!-- Hero statement -->
    <div style="padding:6mm 7mm; background:rgba(212,168,67,0.06); border:1px solid rgba(212,168,67,0.18); border-radius:3mm; margin-bottom:7mm; text-align:center;">
      <div style="font-family:'Outfit',sans-serif; font-size:16pt; font-weight:800; color:var(--white); margin-bottom:2mm;">"Built in the UAE. Engineered for global scale."</div>
      <div style="font-size:8.5pt; color:var(--grey); line-height:1.6;">WebStudio AE operates from Dubai &amp; Abu Dhabi as its primary engineering base — with full capability to deliver digital products for clients worldwide. Our positioning is UAE-rooted, globally capable.</div>
    </div>

    <!-- UAE Primary + Global markers -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:5mm; margin-bottom:6mm;">
      <!-- UAE block -->
      <div style="padding:5mm; background:rgba(212,168,67,0.07); border:1px solid rgba(212,168,67,0.2); border-radius:2.5mm;">
        <div style="font-family:'Outfit',sans-serif; font-size:10pt; font-weight:800; color:var(--gold); margin-bottom:3mm; display:flex; align-items:center; gap:2mm;">
          <div style="width:6px; height:6px; border-radius:50%; background:var(--gold);"></div>
          UAE — Primary Base
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2mm;">
          ${['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah'].map(city => `
          <div style="font-size:7.5pt; color:rgba(200,215,230,0.8); display:flex; align-items:center; gap:1.5mm;">
            <div style="width:3px; height:3px; border-radius:50%; background:rgba(212,168,67,0.6);"></div> ${city}
          </div>`).join('')}
        </div>
      </div>
      <!-- Global block -->
      <div style="padding:5mm; background:rgba(0,200,219,0.06); border:1px solid rgba(0,200,219,0.18); border-radius:2.5mm;">
        <div style="font-family:'Outfit',sans-serif; font-size:10pt; font-weight:800; color:var(--cyan); margin-bottom:3mm; display:flex; align-items:center; gap:2mm;">
          <div style="width:6px; height:6px; border-radius:50%; background:var(--cyan);"></div>
          Global — Remote Delivery
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2mm;">
          ${['GCC Markets', 'Saudi Arabia', 'UK / Europe', 'USA', 'Southeast Asia', 'Africa'].map(region => `
          <div style="font-size:7.5pt; color:rgba(200,215,230,0.8); display:flex; align-items:center; gap:1.5mm;">
            <div style="width:3px; height:3px; border-radius:50%; background:rgba(0,200,219,0.6);"></div> ${region}
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Key positioning points -->
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:3.5mm;">
      <div class="card" style="padding:4mm; text-align:center;">
        <div style="font-family:'Outfit',sans-serif; font-size:9pt; font-weight:800; color:var(--gold); margin-bottom:1.5mm;">UAE-Rooted</div>
        <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Deep understanding of UAE regulations, business culture, market dynamics, and client expectations.</div>
      </div>
      <div class="card" style="padding:4mm; text-align:center;">
        <div style="font-family:'Outfit',sans-serif; font-size:9pt; font-weight:800; color:var(--cyan); margin-bottom:1.5mm;">Globally Capable</div>
        <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Remote-first engineering workflow enabling seamless delivery across time zones and international markets.</div>
      </div>
      <div class="card" style="padding:4mm; text-align:center;">
        <div style="font-family:'Outfit',sans-serif; font-size:9pt; font-weight:800; color:var(--white); margin-bottom:1.5mm;">Agency Grade</div>
        <div style="font-size:7pt; color:var(--grey); line-height:1.6;">Enterprise-grade engineering standards matching the quality expectations of Dubai's most demanding clients.</div>
      </div>
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">08 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 09 — ENGAGEMENT MODEL
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-gold" style="width:100mm; height:100mm; top:30mm; right:-10mm; opacity:0.4;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">How We Work Together</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:3mm;">Engagement <span class="gold">Model</span></div>
    <div style="font-size:8.5pt; color:var(--grey); margin-bottom:6mm;">Flexible partnership structures designed to align with your business needs — from single projects to long-term development partnerships.</div>
    <div class="gold-line" style="width:40mm; margin-bottom:7mm;"></div>

    <!-- 4 engagement types -->
    <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:5mm; margin-bottom:7mm;">

      <div style="padding:6mm; background:rgba(212,168,67,0.06); border:1px solid rgba(212,168,67,0.25); border-radius:3mm; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--gold),transparent);"></div>
        <div style="font-family:'Outfit',sans-serif; font-size:11pt; font-weight:800; color:var(--gold); margin-bottom:2mm;">Complete Digital Product Partner</div>
        <div style="font-size:8pt; color:rgba(200,215,230,0.85); line-height:1.7; margin-bottom:3mm;">We own the entire product — strategy, design, engineering, AI integration, and deployment. You focus on your business. We build your digital presence end to end.</div>
        <div style="display:flex; flex-wrap:wrap; gap:1.5mm;">
          ${['Full ownership', 'Strategy included', 'All engineering', 'Deployment included'].map(f => `<span style="font-size:6pt; color:var(--gold); border:1px solid rgba(212,168,67,0.25); border-radius:1.5mm; padding:0.8mm 2mm; background:rgba(212,168,67,0.06); font-family:'Outfit',sans-serif; font-weight:600;">${f}</span>`).join('')}
        </div>
      </div>

      <div style="padding:6mm; background:rgba(0,200,219,0.05); border:1px solid rgba(0,200,219,0.2); border-radius:3mm; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--cyan),transparent);"></div>
        <div style="font-family:'Outfit',sans-serif; font-size:11pt; font-weight:800; color:var(--cyan); margin-bottom:2mm;">Dedicated Development Partner</div>
        <div style="font-size:8pt; color:rgba(200,215,230,0.85); line-height:1.7; margin-bottom:3mm;">WebStudio AE acts as your dedicated engineering team — embedded in your processes, responding to your priorities, and building alongside your internal stakeholders.</div>
        <div style="display:flex; flex-wrap:wrap; gap:1.5mm;">
          ${['Embedded team', 'Your priorities', 'Sprint-based', 'Flexible capacity'].map(f => `<span style="font-size:6pt; color:var(--cyan); border:1px solid rgba(0,200,219,0.2); border-radius:1.5mm; padding:0.8mm 2mm; background:rgba(0,200,219,0.06); font-family:'Outfit',sans-serif; font-weight:600;">${f}</span>`).join('')}
        </div>
      </div>

      <div style="padding:6mm; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:3mm; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,rgba(255,255,255,0.25),transparent);"></div>
        <div style="font-family:'Outfit',sans-serif; font-size:11pt; font-weight:800; color:var(--white); margin-bottom:2mm;">Project-Based Engineering Team</div>
        <div style="font-size:8pt; color:rgba(200,215,230,0.85); line-height:1.7; margin-bottom:3mm;">Engage WebStudio AE for a specific project with defined scope, timeline, and deliverables. Ideal for new launches, platform rebuilds, and feature releases.</div>
        <div style="display:flex; flex-wrap:wrap; gap:1.5mm;">
          ${['Fixed scope', 'Defined timeline', 'Clear deliverables', 'Clean handoff'].map(f => `<span style="font-size:6pt; color:rgba(200,215,230,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:1.5mm; padding:0.8mm 2mm; background:rgba(255,255,255,0.04); font-family:'Outfit',sans-serif; font-weight:600;">${f}</span>`).join('')}
        </div>
      </div>

      <div style="padding:6mm; background:rgba(212,168,67,0.04); border:1px solid rgba(212,168,67,0.18); border-radius:3mm; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,rgba(212,168,67,0.5),var(--cyan),transparent);"></div>
        <div style="font-family:'Outfit',sans-serif; font-size:11pt; font-weight:800; color:var(--white); margin-bottom:2mm;">Long-Term Technology Partner</div>
        <div style="font-size:8pt; color:rgba(200,215,230,0.85); line-height:1.7; margin-bottom:3mm;">The most powerful engagement — WebStudio AE becomes your permanent technology partner, evolving your digital infrastructure as your business scales and markets change.</div>
        <div style="display:flex; flex-wrap:wrap; gap:1.5mm;">
          ${['Ongoing retainer', 'Technology roadmap', 'Scale with growth', 'Priority access'].map(f => `<span style="font-size:6pt; color:var(--gold); border:1px solid rgba(212,168,67,0.25); border-radius:1.5mm; padding:0.8mm 2mm; background:rgba(212,168,67,0.06); font-family:'Outfit',sans-serif; font-weight:600;">${f}</span>`).join('')}
        </div>
      </div>

    </div>

    <div style="text-align:center; padding:3.5mm 5mm; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:2mm;">
      <span style="font-size:8pt; color:rgba(155,175,195,0.8); font-family:'Inter',sans-serif;">All engagement models include full transparency, regular communication, and WebStudio AE's quality standard across every deliverable.</span>
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">09 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 10 — WHAT CLIENTS GET
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-cyan"  style="width:90mm; height:90mm; top:10mm; right:-10mm; opacity:0.35;"></div>
  <div class="glow-gold" style="width:90mm; height:90mm; bottom:10mm; left:-10mm; opacity:0.35;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">Client Deliverables</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:3mm;">What <span class="gold">Clients</span> Get</div>
    <div style="font-size:8.5pt; color:var(--grey); margin-bottom:6mm;">Every WebStudio AE engagement delivers a consistent set of premium engineering standards and business outcomes.</div>
    <div class="gold-line" style="width:40mm; margin-bottom:7mm;"></div>

    <!-- 10 deliverable cards -->
    <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:3.5mm;">
      ${[
        { title:'Premium UI/UX', color:'gold', desc:'Luxury-grade user interfaces with meticulous attention to detail, motion design, and visual hierarchy that communicates brand authority.' },
        { title:'Clean Architecture', color:'cyan', desc:'Well-structured, documented, maintainable codebase following engineering best practices — built to last and easy to extend.' },
        { title:'Responsive Experience', color:'white', desc:'Pixel-perfect across all devices — desktop, tablet, and mobile — with native-quality interaction on every screen size.' },
        { title:'High Performance', color:'gold', desc:'Sub-second page loads, Core Web Vitals optimized, CDN delivery, and image optimization for maximum user retention.' },
        { title:'Scalable Backend', color:'cyan', desc:'Server-side systems architected to handle growth — from 100 users to 100,000 without architectural changes.' },
        { title:'AI Integration', color:'gold', desc:'Intelligent features powered by LLMs, RAG systems, and custom AI workflows embedded naturally into your product.' },
        { title:'Secure Data Flow', color:'cyan', desc:'HTTPS everywhere, proper authentication, data encryption, input validation, and security best practices throughout.' },
        { title:'Deployment Support', color:'white', desc:'Full go-live support including hosting setup, domain configuration, SSL, monitoring, and post-launch stabilization.' },
        { title:'Ongoing Development', color:'gold', desc:'Continuous iteration, new feature development, technology upgrades, and product evolution as your business grows.' },
        { title:'Business-Focused Engineering', color:'cyan', desc:'Every engineering decision is made with your business outcome in mind — conversion, retention, efficiency, and growth.' },
      ].map(d => `
      <div class="card" style="display:flex; gap:3mm; align-items:flex-start; padding:4mm;">
        <div style="width:5px; min-width:5px; height:5px; margin-top:1.5mm; border-radius:50%; background:${d.color==='gold'?'var(--gold)':d.color==='cyan'?'var(--cyan)':'rgba(255,255,255,0.5)'}; box-shadow:0 0 6px ${d.color==='gold'?'rgba(212,168,67,0.5)':d.color==='cyan'?'rgba(0,200,219,0.4)':'transparent'};"></div>
        <div>
          <div style="font-family:'Outfit',sans-serif; font-size:8.5pt; font-weight:700; color:var(--white); margin-bottom:1mm;">${d.title}</div>
          <div style="font-size:6.8pt; color:var(--grey); line-height:1.65;">${d.desc}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">10 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 11 — PARTNERSHIP DIFFERENCE
══════════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="grid-bg"></div>
  <div class="glow-gold" style="width:100mm; height:100mm; top:30mm; right:0; opacity:0.38;"></div>
  <div class="glow-cyan"  style="width:80mm; height:80mm; bottom:20mm; left:0; opacity:0.28;"></div>

  <div class="pheader">
    <span class="pheader-label">WEBSTUDIO AE · UAE + GLOBAL</span>
    <img src="${logoSrc}" class="pheader-logo" alt="WebStudio AE" />
  </div>

  <div class="pcontent" style="padding:9mm 11mm 0;">
    <div class="section-eyebrow">The Difference</div>
    <div class="section-title" style="font-size:18pt; margin-bottom:3mm;">The <span class="gold">Partnership</span> Difference</div>
    <div style="font-size:8.5pt; color:var(--grey); margin-bottom:6mm; max-width:150mm;">Choosing WebStudio AE as your engineering partner provides capabilities that go beyond what a single developer can offer — without the overhead of building an internal team.</div>
    <div class="gold-line" style="width:40mm; margin-bottom:7mm;"></div>

    <!-- Comparison table -->
    <table class="comp-table">
      <thead>
        <tr>
          <th style="width:45%; text-align:left; color:var(--grey-dim);" class="col-trad">Traditional Developer</th>
          <th style="width:10%; text-align:center; color:rgba(255,255,255,0.25);">vs</th>
          <th style="width:45%; text-align:left;" class="col-ws-head">WebStudio AE Engineering Partner</th>
        </tr>
      </thead>
      <tbody>
        ${[
          ['Single developer skill set', 'Full engineering team capability across frontend, backend, design, AI, and DevOps.'],
          ['Limited capacity — one person', 'Scalable team capacity that grows with your project scope and requirements.'],
          ['Basic implementation delivery', 'Product-focused engineering that considers business outcomes, UX, and long-term scalability.'],
          ['One-off project delivery', 'Long-term partnership with ongoing iteration, improvements, and technology evolution.'],
          ['Generic or template solutions', 'Custom architecture purpose-built for your specific business context and goals.'],
          ['Single point of failure risk', 'Dedicated studio with multiple specialists ensuring continuity and reliability.'],
          ['Limited to known technologies', 'Continuously evolving technology stack including AI, modern frameworks, and cloud infrastructure.'],
          ['Difficult to scale engagement', 'Flexible engagement models — from a single sprint to a permanent technology partnership.'],
        ].map(([trad, ws]) => `
        <tr>
          <td class="col-trad" style="color:var(--grey-dim); font-size:8pt;">${trad}</td>
          <td style="text-align:center;"><div style="width:6px; height:6px; border-radius:50%; background:var(--gold); margin:0 auto; opacity:0.7;"></div></td>
          <td class="col-ws" style="font-size:8pt;">${ws}</td>
        </tr>`).join('')}
      </tbody>
    </table>

    <!-- Bottom note -->
    <div style="margin-top:7mm; padding:4mm 5mm; background:rgba(212,168,67,0.05); border:1px solid rgba(212,168,67,0.15); border-radius:2.5mm; border-left:3px solid var(--gold);">
      <div style="font-size:8pt; color:rgba(200,215,230,0.9); line-height:1.7; font-style:italic; font-family:'Inter',sans-serif;">
        "WebStudio AE is not positioned as an alternative to talent — but as a strategic upgrade for businesses that need reliable, scalable digital engineering without the complexity of building and managing an internal team."
      </div>
    </div>
  </div>

  <div class="pfooter">
    <span class="pfooter-left">WEBSTUDIO AE · AI &amp; Digital Engineering Studio · webstudioae.com</span>
    <span class="pfooter-right">11 / 12</span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════
     PAGE 12 — FINAL CTA
══════════════════════════════════════════════════════════════ -->
<div class="page" style="background: linear-gradient(150deg, #040710 0%, #08111f 55%, #050c18 100%);">
  <div class="grid-bg"></div>
  <!-- Accent glows -->
  <div class="glow-gold" style="width:160mm; height:160mm; top:-30mm; right:-30mm; opacity:0.55;"></div>
  <div class="glow-cyan"  style="width:120mm; height:120mm; bottom:-20mm; left:-20mm; opacity:0.45;"></div>

  <!-- Corner marks -->
  <div style="position:absolute; top:8mm; left:8mm; width:8mm; height:8mm; border-top:1.5px solid rgba(212,168,67,0.45); border-left:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>
  <div style="position:absolute; top:8mm; right:8mm; width:8mm; height:8mm; border-top:1.5px solid rgba(212,168,67,0.45); border-right:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>
  <div style="position:absolute; bottom:8mm; left:8mm; width:8mm; height:8mm; border-bottom:1.5px solid rgba(212,168,67,0.45); border-left:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>
  <div style="position:absolute; bottom:8mm; right:8mm; width:8mm; height:8mm; border-bottom:1.5px solid rgba(212,168,67,0.45); border-right:1.5px solid rgba(212,168,67,0.45); z-index:5;"></div>

  <!-- Running metadata top -->
  <div style="position:absolute; top:5.5mm; left:0; right:0; z-index:10; display:flex; align-items:center; justify-content:space-between; padding:0 14mm;">
    <span style="font-size:5.5pt; letter-spacing:0.2em; text-transform:uppercase; color:rgba(212,168,67,0.5); font-family:'Outfit',sans-serif; font-weight:600;">WEBSTUDIO AE · AGENCY PROPOSAL</span>
    <span style="font-size:5.5pt; letter-spacing:0.12em; color:rgba(255,255,255,0.25); font-family:'Inter',sans-serif;">12 / 12</span>
  </div>

  <!-- Main content -->
  <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); z-index:5; text-align:center; width:175mm;">
    <!-- Small logo -->
    <div style="margin-bottom:7mm;">
      <img src="${logoSrc}" alt="WebStudio AE" style="height:12mm; object-fit:contain; opacity:0.9;" />
    </div>

    <!-- Eyebrow -->
    <div style="font-family:'Outfit',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.25em; text-transform:uppercase; color:rgba(212,168,67,0.75); margin-bottom:7mm;">
      AI &amp; Digital Engineering Studio &nbsp;·&nbsp; UAE &amp; Global
    </div>

    <div style="width:25mm; height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:0 auto 8mm;"></div>

    <!-- CTA headline -->
    <div style="font-family:'Outfit',sans-serif; font-size:26pt; font-weight:800; line-height:1.15; color:#FFFFFF; letter-spacing:-0.02em; margin-bottom:4mm;">
      Let's Build Your Next<br/>
      <span style="background:linear-gradient(90deg,#D4A843,#F0C860,#D4A843); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">Digital Product.</span>
    </div>

    <div style="font-size:9pt; color:rgba(155,175,195,0.85); line-height:1.65; margin-bottom:9mm;">
      84+ Running Projects · UAE-Based · Global Delivery<br/>
      Ready to discuss your project — reach us through any channel below.
    </div>

    <!-- Contact cards -->
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:4mm; margin-bottom:9mm;">
      <div style="padding:5mm 4mm; background:rgba(212,168,67,0.07); border:1px solid rgba(212,168,67,0.25); border-radius:2.5mm;">
        <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:rgba(212,168,67,0.6); margin-bottom:2mm; font-family:'Outfit',sans-serif;">WHATSAPP</div>
        <div style="font-size:9pt; font-weight:700; color:var(--white); font-family:'Outfit',sans-serif;">+971 56 618 4509</div>
      </div>
      <div style="padding:5mm 4mm; background:rgba(0,200,219,0.06); border:1px solid rgba(0,200,219,0.2); border-radius:2.5mm;">
        <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:rgba(0,200,219,0.6); margin-bottom:2mm; font-family:'Outfit',sans-serif;">EMAIL</div>
        <div style="font-size:9pt; font-weight:700; color:var(--white); font-family:'Outfit',sans-serif;">info@webstudioae.com</div>
      </div>
      <div style="padding:5mm 4mm; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:2.5mm;">
        <div style="font-size:6pt; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-bottom:2mm; font-family:'Outfit',sans-serif;">WEBSITE</div>
        <div style="font-size:9pt; font-weight:700; color:var(--white); font-family:'Outfit',sans-serif;">webstudioae.com</div>
      </div>
    </div>

    <!-- Start a Project button -->
    <div style="display:inline-flex; align-items:center; gap:3mm; padding:4mm 9mm; background:linear-gradient(135deg,#D4A843,#B88F2A); border-radius:10mm; margin-bottom:7mm;">
      <span style="font-family:'Outfit',sans-serif; font-size:10pt; font-weight:800; color:#FFFFFF; letter-spacing:0.05em;">Start a Project</span>
      <div style="width:5mm; height:1px; background:rgba(255,255,255,0.6);"></div>
      <span style="font-family:'Outfit',sans-serif; font-size:8pt; font-weight:600; color:rgba(255,255,255,0.75);">webstudioae.com</span>
    </div>

    <div style="font-size:7pt; color:rgba(255,255,255,0.2); letter-spacing:0.15em; text-transform:uppercase; font-family:'Outfit',sans-serif; font-weight:600;">
      WEBSTUDIO AE · DUBAI &amp; ABU DHABI · UAE
    </div>
  </div>
</div>

</body>
</html>`;

// ─── PDF Generation ────────────────────────────────────────────────────────────
async function generatePDF() {
  console.log('🚀 Launching Chromium...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  try {
    const page = await browser.newPage();

    // Set A4 viewport
    await page.setViewportSize({ width: 794, height: 1123 });

    console.log('📄 Loading HTML template...');
    await page.setContent(html, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait for fonts to load
    await page.waitForTimeout(2000);

    console.log('🖨️  Generating PDF...');
    await page.pdf({
      path: OUTPUT_PATH,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
      displayHeaderFooter: false,
    });

    console.log(`✅ PDF saved: ${OUTPUT_PATH}`);
  } finally {
    await browser.close();
  }
}

generatePDF().catch(err => {
  console.error('❌ PDF generation failed:', err);
  process.exit(1);
});
