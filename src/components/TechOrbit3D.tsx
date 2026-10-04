'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useCanvasObserver } from '@/lib/useCanvasObserver';
import { 
  Code2, 
  Cpu, 
  Server, 
  Database, 
  Cloud, 
  Zap, 
  Globe2, 
  ShieldCheck, 
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

export interface OrbitTechNode {
  id: string;
  name: string;
  shortName: string;
  category: string;
  color: string;
  ring: number; // 0: Core Frontend, 1: AI & Logic, 2: Data & APIs, 3: Cloud & Infra
  speed: number;
  baseAngle: number;
  specs: string;
  role: string;
  iconType?: string;
}

export const ORBIT_TECH_NODES: OrbitTechNode[] = [
  // Ring 0: Core Architecture & Frontend (6 nodes)
  { id: 'nextjs', name: 'Next.js 16', shortName: 'NEXT', category: 'Frontend Core', color: '#ffffff', ring: 0, speed: 0.006, baseAngle: 0, specs: 'App Router • Turbopack Engine • Sub-50ms SSR', role: 'Enterprise Frontend Architecture' },
  { id: 'react', name: 'React 19', shortName: 'RCT', category: 'UI Runtime', color: '#38bdf8', ring: 0, speed: 0.006, baseAngle: 1.05, specs: 'Server Actions • Zero Hydration Bloat', role: 'Reactive Component Core' },
  { id: 'typescript', name: 'TypeScript 5', shortName: 'TS', category: 'Language Core', color: '#60a5fa', ring: 0, speed: 0.006, baseAngle: 2.1, specs: 'Strict Type Rigor • 0 Any Violations', role: 'End-to-End Type Safety' },
  { id: 'tailwind', name: 'Tailwind CSS', shortName: 'TW', category: 'Design System', color: '#38bdf8', ring: 0, speed: 0.006, baseAngle: 3.14, specs: 'JIT Compiler • Custom UAE Design Tokens', role: 'High-Performance Styling' },
  { id: 'framer', name: 'Framer Motion', shortName: 'FM', category: 'Interaction', color: '#ec4899', ring: 0, speed: 0.006, baseAngle: 4.2, specs: '60fps GPU Spring Easing • Micro-interactions', role: 'Cinematic Motion Engine' },
  { id: 'turbopack', name: 'Turbopack', shortName: 'TRB', category: 'Build Engine', color: '#f59e0b', ring: 0, speed: 0.006, baseAngle: 5.25, specs: 'Rust-Powered Incremental Compilation', role: 'Instant HMR & Build System' },

  // Ring 1: AI, Cognition & Languages (6 nodes)
  { id: 'openai', name: 'OpenAI GPT-4o', shortName: 'AI', category: 'Cognitive AI', color: '#10b981', ring: 1, speed: -0.0045, baseAngle: 0.5, specs: 'Tool Calling • Semantic Context Stream', role: 'Autonomous Agent Workflows' },
  { id: 'python', name: 'FastAPI / Python', shortName: 'PY', category: 'AI Microservices', color: '#fbbf24', ring: 1, speed: -0.0045, baseAngle: 1.55, specs: 'Asynchronous Vector Processing', role: 'ML & Data Transformation' },
  { id: 'rag', name: 'RAG Vector Pipeline', shortName: 'RAG', category: 'Semantic Search', color: '#34d399', ring: 1, speed: -0.0045, baseAngle: 2.6, specs: 'Sub-95ms Similarity Embeddings', role: 'Enterprise Knowledge Retrieval' },
  { id: 'langchain', name: 'LangChain', shortName: 'LC', category: 'Agent Orchestration', color: '#f97316', ring: 1, speed: -0.0045, baseAngle: 3.65, specs: 'Multi-Agent Intent Routing', role: 'Autonomous Execution Chains' },
  { id: 'nodejs', name: 'Node.js Core', shortName: 'JS', category: 'Backend Runtime', color: '#22c55e', ring: 1, speed: -0.0045, baseAngle: 4.7, specs: 'Event Loop • High-Throughput IO', role: 'Server-Side Business Logic' },
  { id: 'websockets', name: 'WebSockets', shortName: 'WS', category: 'Real-Time Sync', color: '#a855f7', ring: 1, speed: -0.0045, baseAngle: 5.75, specs: 'Bi-directional Live Telemetry Stream', role: 'Instant State Broadcast' },

  // Ring 2: Data, Caching & Commerce APIs (6 nodes)
  { id: 'postgresql', name: 'PostgreSQL', shortName: 'PG', category: 'Relational DB', color: '#60a5fa', ring: 2, speed: 0.0035, baseAngle: 0.25, specs: 'ACID Transactions • Row-Level Security', role: 'Primary Enterprise Ledger' },
  { id: 'supabase', name: 'Supabase', shortName: 'SB', category: 'BaaS & Auth', color: '#34d399', ring: 2, speed: 0.0035, baseAngle: 1.3, specs: 'JWT Session Auth • Realtime Webhooks', role: 'Database & Auth Layer' },
  { id: 'redis', name: 'Redis Cache', shortName: 'RD', category: 'In-Memory State', color: '#ef4444', ring: 2, speed: 0.0035, baseAngle: 2.35, specs: 'Sub-1ms Session & Rate Limiting', role: 'Distributed Edge Cache' },
  { id: 'prisma', name: 'Prisma ORM', shortName: 'PR', category: 'Schema Layer', color: '#38bdf8', ring: 2, speed: 0.0035, baseAngle: 3.4, specs: 'Type-Safe Queries • Automated Migrations', role: 'Data Access Rigor' },
  { id: 'graphql', name: 'GraphQL', shortName: 'GQL', category: 'API Protocol', color: '#e11d48', ring: 2, speed: 0.0035, baseAngle: 4.45, specs: 'Strict Query Typing • Single Trip Fetch', role: 'Declarative API Storefront' },
  { id: 'stripe', name: 'Stripe AED Rails', shortName: 'AED', category: 'Payments', color: '#6366f1', ring: 2, speed: 0.0035, baseAngle: 5.5, specs: 'Native UAE Dirham • Apple Pay • 3DS2', role: 'High-Conversion Checkout' },

  // Ring 3: Cloud, Edge & Sovereign Infrastructure (6 nodes)
  { id: 'vercel', name: 'Vercel Global Edge', shortName: 'VCL', category: 'Edge Cloud', color: '#ffffff', ring: 3, speed: -0.0025, baseAngle: 0.75, specs: 'Sub-24ms UAE DXB/AUH Edge Routing', role: 'Global Serverless Delivery' },
  { id: 'aws', name: 'AWS Cloud', shortName: 'AWS', category: 'Infrastructure', color: '#f59e0b', ring: 3, speed: -0.0025, baseAngle: 1.8, specs: 'me-central-1 UAE Cluster • Multi-AZ', role: 'Enterprise Cloud Resilience' },
  { id: 'cloudflare', name: 'Cloudflare Shield', shortName: 'CF', category: 'Security & CDN', color: '#f97316', ring: 3, speed: -0.0025, baseAngle: 2.85, specs: 'DDoS Protection • Edge SSL Encryption', role: 'Perimeter Armor' },
  { id: 'docker', name: 'Docker Containers', shortName: 'DOC', category: 'Containerization', color: '#0ea5e9', ring: 3, speed: -0.0025, baseAngle: 3.9, specs: 'Hermetic Build Containers • Portability', role: 'Deterministic Environments' },
  { id: 'github', name: 'GitHub CI/CD', shortName: 'GIT', category: 'Automation', color: '#a855f7', ring: 3, speed: -0.0025, baseAngle: 4.95, specs: 'Automated Test Pipelines • 0 Error Gate', role: 'Continuous Deployment' },
  { id: 'kubernetes', name: 'Kubernetes (K8s)', shortName: 'K8S', category: 'Orchestration', color: '#3b82f6', ring: 3, speed: -0.0025, baseAngle: 6.0, specs: 'Auto-Scaling Pods • Zero-Downtime', role: 'Cluster Scalability' },
];

const RING_CONFIGS = [
  { ringIndex: 0, label: 'L1: CORE FRONTEND', radiusRatio: 0.28, color: 'rgba(245, 158, 11, 0.25)', dash: [2, 4] },
  { ringIndex: 1, label: 'L2: AI & COGNITION', radiusRatio: 0.48, color: 'rgba(56, 189, 248, 0.22)', dash: [3, 5] },
  { ringIndex: 2, label: 'L3: DATA & COMMERCE', radiusRatio: 0.68, color: 'rgba(52, 211, 153, 0.20)', dash: [4, 6] },
  { ringIndex: 3, label: 'L4: CLOUD & SOVEREIGNTY', radiusRatio: 0.88, color: 'rgba(168, 85, 247, 0.18)', dash: [5, 7] },
];

interface TechOrbit3DProps {
  onSelectTech?: (techName: string) => void;
  activeTech?: string | null;
}

// Helper to draw crisp vector brand logos on Canvas for each technology
function drawTechLogo(
  ctx: CanvasRenderingContext2D,
  nodeId: string,
  px: number,
  py: number,
  radius: number,
  color: string,
  isActive: boolean,
  isHovered: boolean
) {
  const iconColor = isActive ? '#000000' : isHovered ? '#FFFFFF' : color;
  const s = radius * 0.62; // Scale factor for logo inside circle

  ctx.save();
  ctx.translate(px, py);

  switch (nodeId) {
    case 'nextjs': {
      // Next.js 'N' with diagonal cut
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      // Left vertical bar
      ctx.rect(-s * 0.65, -s * 0.7, s * 0.3, s * 1.4);
      // Right vertical bar
      ctx.rect(s * 0.35, -s * 0.7, s * 0.3, s * 1.4);
      ctx.fill();
      // Diagonal bar
      ctx.beginPath();
      ctx.moveTo(-s * 0.65, -s * 0.7);
      ctx.lineTo(-s * 0.35, -s * 0.7);
      ctx.lineTo(s * 0.65, s * 0.7);
      ctx.lineTo(s * 0.35, s * 0.7);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'react': {
      // React 3 rotated atom orbits + nucleus
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.3;
      // 3 Elliptical orbits
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.9, s * 0.34, (i * Math.PI) / 3, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Central nucleus dot
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = iconColor;
      ctx.fill();
      break;
    }

    case 'typescript': {
      // TS logo
      ctx.font = `900 ${Math.round(s * 1.15)}px "JetBrains Mono", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = iconColor;
      ctx.fillText('TS', 0, 1);
      break;
    }

    case 'tailwind': {
      // Tailwind twin wind waves
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      // Left wave
      ctx.arc(-s * 0.35, -s * 0.1, s * 0.45, Math.PI * 0.75, Math.PI * 1.75, false);
      ctx.arc(-s * 0.1, s * 0.2, s * 0.35, Math.PI * 1.75, Math.PI * 0.75, false);
      ctx.closePath();
      ctx.fill();
      // Right wave
      ctx.beginPath();
      ctx.arc(s * 0.35, s * 0.05, s * 0.45, Math.PI * 0.75, Math.PI * 1.75, false);
      ctx.arc(s * 0.6, s * 0.35, s * 0.35, Math.PI * 1.75, Math.PI * 0.75, false);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'framer': {
      // Framer geometric shapes
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      ctx.moveTo(-s * 0.6, -s * 0.8);
      ctx.lineTo(s * 0.6, -s * 0.8);
      ctx.lineTo(0, -s * 0.2);
      ctx.lineTo(-s * 0.6, -s * 0.2);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, -s * 0.2);
      ctx.lineTo(s * 0.6, -s * 0.2);
      ctx.lineTo(s * 0.6, s * 0.4);
      ctx.lineTo(-s * 0.6, s * 0.4);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-s * 0.6, s * 0.4);
      ctx.lineTo(0, s * 0.4);
      ctx.lineTo(-s * 0.6, s * 1.0);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'turbopack': {
      // Supersonic angular arrow / crystal
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      ctx.moveTo(-s * 0.6, -s * 0.7);
      ctx.lineTo(s * 0.7, -s * 0.1);
      ctx.lineTo(0, s * 0.1);
      ctx.lineTo(s * 0.5, s * 0.8);
      ctx.lineTo(-s * 0.7, 0);
      ctx.lineTo(-0.1, -s * 0.1);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'openai': {
      // OpenAI spiral bloom / flower
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.4;
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(s * 0.75, -s * 0.1);
        ctx.arc(s * 0.75, 0, s * 0.2, -Math.PI / 2, Math.PI / 2);
        ctx.lineTo(0, s * 0.1);
        ctx.stroke();
        ctx.restore();
      }
      break;
    }

    case 'python': {
      // Interlocking dual snake glyph
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(-s * 0.15, -s * 0.25, s * 0.4, 0, Math.PI * 2);
      ctx.rect(-s * 0.45, -s * 0.25, s * 0.4, s * 0.55);
      ctx.fill();
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(s * 0.15, s * 0.25, s * 0.4, 0, Math.PI * 2);
      ctx.rect(s * 0.05, -s * 0.3, s * 0.4, s * 0.55);
      ctx.fill();
      break;
    }

    case 'rag': {
      // 3 Vector connected neural points
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-s * 0.6, s * 0.4);
      ctx.lineTo(0, -s * 0.6);
      ctx.lineTo(s * 0.6, s * 0.4);
      ctx.closePath();
      ctx.stroke();
      // Vertex nodes
      ctx.fillStyle = iconColor;
      [[-s * 0.6, s * 0.4], [0, -s * 0.6], [s * 0.6, s * 0.4], [0, 0]].forEach(([nx, ny]) => {
        ctx.beginPath();
        ctx.arc(nx, ny, s * 0.2, 0, Math.PI * 2);
        ctx.fill();
      });
      break;
    }

    case 'langchain': {
      // Dual chain links
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-s * 0.7, -s * 0.5, s * 0.8, s * 0.5, 4);
      ctx.stroke();
      ctx.beginPath();
      ctx.roundRect(-s * 0.1, 0, s * 0.8, s * 0.5, 4);
      ctx.stroke();
      break;
    }

    case 'nodejs': {
      // Node.js Hexagon
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        const hx = Math.cos(a) * s * 0.85;
        const hy = Math.sin(a) * s * 0.85;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.font = `bold ${Math.round(s * 0.75)}px "JetBrains Mono", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = iconColor;
      ctx.fillText('JS', 0, 0);
      break;
    }

    case 'websockets': {
      // Real-time bi-directional pulse lightning
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      ctx.moveTo(s * 0.15, -s * 0.85);
      ctx.lineTo(-s * 0.6, 0.05);
      ctx.lineTo(-s * 0.05, 0.05);
      ctx.lineTo(-s * 0.15, s * 0.85);
      ctx.lineTo(s * 0.6, -0.05);
      ctx.lineTo(s * 0.05, -0.05);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'postgresql': {
      // 3-tiered database cylinders
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.3;
      for (let i = -1; i <= 1; i++) {
        const cy = i * s * 0.5;
        ctx.beginPath();
        ctx.ellipse(0, cy, s * 0.75, s * 0.22, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(-s * 0.75, -s * 0.5);
      ctx.lineTo(-s * 0.75, s * 0.5);
      ctx.moveTo(s * 0.75, -s * 0.5);
      ctx.lineTo(s * 0.75, s * 0.5);
      ctx.stroke();
      break;
    }

    case 'supabase': {
      // Supabase Emerald angled lightning bolt
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      ctx.moveTo(-s * 0.5, s * 0.7);
      ctx.lineTo(s * 0.3, -s * 0.8);
      ctx.lineTo(-s * 0.05, -s * 0.15);
      ctx.lineTo(s * 0.6, -s * 0.15);
      ctx.lineTo(-s * 0.2, s * 0.8);
      ctx.lineTo(0.05, s * 0.2);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'redis': {
      // Isometric 3D Memory Cube
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.75);
      ctx.lineTo(s * 0.7, -s * 0.35);
      ctx.lineTo(s * 0.7, s * 0.4);
      ctx.lineTo(0, s * 0.8);
      ctx.lineTo(-s * 0.7, s * 0.4);
      ctx.lineTo(-s * 0.7, -s * 0.35);
      ctx.closePath();
      ctx.stroke();
      // Inner lines
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.75);
      ctx.lineTo(0, s * 0.05);
      ctx.lineTo(s * 0.7, -s * 0.35);
      ctx.moveTo(0, s * 0.05);
      ctx.lineTo(-s * 0.7, -s * 0.35);
      ctx.moveTo(0, s * 0.05);
      ctx.lineTo(0, s * 0.8);
      ctx.stroke();
      break;
    }

    case 'prisma': {
      // Prisma Triangular Prism
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.85);
      ctx.lineTo(s * 0.75, s * 0.7);
      ctx.lineTo(-s * 0.75, s * 0.7);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.85);
      ctx.lineTo(s * 0.15, s * 0.7);
      ctx.stroke();
      break;
    }

    case 'graphql': {
      // GraphQL Hexagon + Central Triangle
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        const gx = Math.cos(a) * s * 0.8;
        const gy = Math.sin(a) * s * 0.8;
        if (i === 0) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.closePath();
      ctx.stroke();
      // Central triangle
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.8);
      ctx.lineTo(Math.cos((2 * Math.PI) / 3) * s * 0.8, Math.sin((2 * Math.PI) / 3) * s * 0.8);
      ctx.lineTo(Math.cos((4 * Math.PI) / 3) * s * 0.8, Math.sin((4 * Math.PI) / 3) * s * 0.8);
      ctx.closePath();
      ctx.stroke();
      break;
    }

    case 'stripe': {
      // Stripe payment rail 'S'
      ctx.font = `900 ${Math.round(s * 1.3)}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = iconColor;
      ctx.fillText('S', 0, 0);
      break;
    }

    case 'vercel': {
      // Vercel pure triangle
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.75);
      ctx.lineTo(s * 0.75, s * 0.65);
      ctx.lineTo(-s * 0.75, s * 0.65);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'aws': {
      // AWS smile & text
      ctx.font = `900 ${Math.round(s * 0.75)}px "JetBrains Mono", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = iconColor;
      ctx.fillText('AWS', 0, -s * 0.15);
      // Smile curve
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.65, Math.PI * 0.2, Math.PI * 0.8);
      ctx.stroke();
      break;
    }

    case 'cloudflare': {
      // Cloudflare cloud contour
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      ctx.arc(-s * 0.25, 0, s * 0.45, 0, Math.PI * 2);
      ctx.arc(s * 0.25, -s * 0.1, s * 0.5, 0, Math.PI * 2);
      ctx.arc(s * 0.45, s * 0.15, s * 0.35, 0, Math.PI * 2);
      ctx.rect(-s * 0.55, s * 0.1, s * 1.1, s * 0.4);
      ctx.fill();
      break;
    }

    case 'docker': {
      // Docker cargo containers
      ctx.fillStyle = iconColor;
      // 3 top containers
      ctx.fillRect(-s * 0.45, -s * 0.6, s * 0.25, s * 0.25);
      ctx.fillRect(-s * 0.12, -s * 0.6, s * 0.25, s * 0.25);
      ctx.fillRect(s * 0.2, -s * 0.6, s * 0.25, s * 0.25);
      // Base ship
      ctx.beginPath();
      ctx.arc(0, s * 0.2, s * 0.65, 0, Math.PI);
      ctx.fill();
      break;
    }

    case 'github': {
      // GitHub branching tree
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(-s * 0.35, -s * 0.55);
      ctx.lineTo(-s * 0.35, s * 0.55);
      ctx.moveTo(-s * 0.35, s * 0.1);
      ctx.lineTo(s * 0.35, -s * 0.3);
      ctx.lineTo(s * 0.35, -s * 0.55);
      ctx.stroke();
      ctx.fillStyle = iconColor;
      [[-s * 0.35, -s * 0.55], [-s * 0.35, s * 0.55], [s * 0.35, -s * 0.55]].forEach(([gx, gy]) => {
        ctx.beginPath();
        ctx.arc(gx, gy, s * 0.2, 0, Math.PI * 2);
        ctx.fill();
      });
      break;
    }

    case 'kubernetes': {
      // Kubernetes 7-spoke Helm Wheel
      ctx.strokeStyle = iconColor;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.65, 0, Math.PI * 2);
      ctx.stroke();
      for (let i = 0; i < 7; i++) {
        const a = (i * Math.PI * 2) / 7;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(a) * s * 0.9, Math.sin(a) * s * 0.9);
        ctx.stroke();
      }
      ctx.fillStyle = iconColor;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.2, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    default: {
      ctx.font = `bold ${Math.round(s * 0.8)}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = iconColor;
      ctx.fillText(nodeId.slice(0, 3).toUpperCase(), 0, 0);
    }
  }

  ctx.restore();
}

export const TechOrbit3D: React.FC<TechOrbit3DProps> = ({ onSelectTech, activeTech }) => {
  const { containerRef, canvasRef, isVisible, dpr } = useCanvasObserver({
    maxMobileDpr: 1.5,
    maxDesktopDpr: 2.0,
  });
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<OrbitTechNode | null>(null);
  const [activeRingFilter, setActiveRingFilter] = useState<number | null>(null);

  const hoveredNodeRef = useRef<OrbitTechNode | null>(null);
  hoveredNodeRef.current = hoveredNode;

  const activeTechRef = useRef(activeTech);
  activeTechRef.current = activeTech;

  const onSelectTechRef = useRef(onSelectTech);
  onSelectTechRef.current = onSelectTech;

  const activeRingFilterRef = useRef(activeRingFilter);
  activeRingFilterRef.current = activeRingFilter;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angleOffsets = ORBIT_TECH_NODES.map(() => 0);
    const projectedPoints: { node: OrbitTechNode; px: number; py: number; radius: number }[] = [];

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Dynamic full box utilization with elliptical radii for wide displays
      const rxMax = width * 0.47;
      const ryMax = height * 0.45;

      // ─── 01. Radial Spider-Web Background Filaments ───────────────────────
      const rayCount = 24;
      for (let r = 0; r < rayCount; r++) {
        const rayAngle = (r / rayCount) * Math.PI * 2;
        const rx = cx + Math.cos(rayAngle) * rxMax * 0.98;
        const ry = cy + Math.sin(rayAngle) * ryMax * 0.98;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(rx, ry);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      // ─── 02. Concentric Orbit Rings (Elliptical Full Box) ─────────────────
      RING_CONFIGS.forEach((rc) => {
        const ringRx = rxMax * rc.radiusRatio;
        const ringRy = ryMax * rc.radiusRatio;
        const isRingActive = activeRingFilterRef.current === rc.ringIndex;

        ctx.beginPath();
        ctx.ellipse(cx, cy, ringRx, ringRy, 0, 0, Math.PI * 2);
        ctx.strokeStyle = isRingActive ? '#F59E0B' : rc.color;
        ctx.lineWidth = isRingActive ? 2 : 1;
        ctx.setLineDash(rc.dash);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // ─── 03. Calculate Project Node Coordinates ───────────────────────────
      projectedPoints.length = 0;
      const currentHovered = hoveredNodeRef.current;
      const currentActive = activeTechRef.current;

      const nodeCoords = ORBIT_TECH_NODES.map((node, idx) => {
        if (!shouldReduceMotion) {
          angleOffsets[idx] += node.speed;
        }
        const currentAngle = node.baseAngle + angleOffsets[idx];
        const ringCfg = RING_CONFIGS[node.ring];
        const orbitRx = rxMax * ringCfg.radiusRatio;
        const orbitRy = ryMax * ringCfg.radiusRatio;

        const px = cx + Math.cos(currentAngle) * orbitRx;
        const py = cy + Math.sin(currentAngle) * orbitRy;
        const radius = node.ring === 0 ? 21 : node.ring === 1 ? 20 : node.ring === 2 ? 19 : 18;

        return { node, px, py, radius, angle: currentAngle };
      });

      // ─── 04. Draw Synaptic Connection Beams to Center Core ───────────────
      nodeCoords.forEach(({ node, px, py }) => {
        const isHovered = currentHovered?.id === node.id;
        const isActive = currentActive === node.name;

        if (isHovered || isActive) {
          const beamGrad = ctx.createLinearGradient(cx, cy, px, py);
          beamGrad.addColorStop(0, 'rgba(245, 158, 11, 0.95)');
          beamGrad.addColorStop(1, `${node.color}`);

          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = beamGrad;
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#F59E0B';
          ctx.shadowBlur = 14;
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.05)';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      // ─── 05. Draw Central Core Hub (WebStudio AE Core) ────────────────────
      const coreR = Math.max(34, Math.min(width, height) * 0.085);

      // Core Ambient Radial Glow
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 2.5);
      coreGlow.addColorStop(0, 'rgba(245, 158, 11, 0.5)');
      coreGlow.addColorStop(0.5, 'rgba(245, 158, 11, 0.18)');
      coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Central Orb Body
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fillStyle = '#0E0C09';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 2.8;
      ctx.shadowColor = '#F59E0B';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Central Monogram Typography
      ctx.font = '900 13px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#F59E0B';
      ctx.fillText('WS.AE', cx, cy - 5);

      ctx.font = 'bold 8px "JetBrains Mono", monospace';
      ctx.fillStyle = '#E2E8F0';
      ctx.fillText('CORE ENGINE', cx, cy + 8);

      // ─── 06. Draw Orbiting Technology Nodes with Brand Logos ─────────────
      nodeCoords.forEach(({ node, px, py, radius }) => {
        const isHovered = currentHovered?.id === node.id;
        const isActive = currentActive === node.name;
        projectedPoints.push({ node, px, py, radius: radius + 8 });

        // Outer Aura Radial Glow on Hover / Active
        if (isHovered || isActive) {
          const nodeGlow = ctx.createRadialGradient(px, py, 0, px, py, radius * 2.6);
          nodeGlow.addColorStop(0, `${node.color}AA`);
          nodeGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.beginPath();
          ctx.arc(px, py, radius * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = nodeGlow;
          ctx.fill();
        }

        // Circular Node Outer Pad
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#F59E0B' : isHovered ? '#1E1A14' : '#0B0907';
        ctx.strokeStyle = isActive ? '#FFFFFF' : isHovered ? '#F59E0B' : `${node.color}99`;
        ctx.lineWidth = isActive ? 2.8 : isHovered ? 2.2 : 1.4;
        ctx.fill();
        ctx.stroke();

        // Render Crisp Brand / Technology Vector Logo
        drawTechLogo(ctx, node.id, px, py, radius, node.color, isActive, isHovered);

        // Node Name Label Tag below pad on hover/active
        if (isHovered || isActive) {
          const label = node.name;
          ctx.font = 'bold 11px "JetBrains Mono", monospace';
          const textW = ctx.measureText(label).width;
          const tagY = py + radius + 8;

          ctx.fillStyle = 'rgba(11, 9, 7, 0.96)';
          ctx.strokeStyle = '#F59E0B';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.roundRect(px - textW / 2 - 8, tagY - 2, textW + 16, 18, 5);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.fillText(label, px, tagY + 7);
        }
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (const pt of projectedPoints) {
        const dx = mx - pt.px;
        const dy = my - pt.py;
        if (Math.sqrt(dx * dx + dy * dy) <= pt.radius) {
          onSelectTechRef.current?.(pt.node.name);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      let matched: OrbitTechNode | null = null;
      for (const pt of projectedPoints) {
        const dx = mx - pt.px;
        const dy = my - pt.py;
        if (Math.sqrt(dx * dx + dy * dy) <= pt.radius) {
          matched = pt.node;
          break;
        }
      }
      setHoveredNode(matched);
    };

    const handleMouseLeave = () => setHoveredNode(null);

    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, dpr, shouldReduceMotion]);

  return (
    <div ref={containerRef} className="relative w-full rounded-3xl bg-gradient-to-b from-[#110E0A] via-[#0A0806] to-[#07090E] border border-amber-500/25 p-5 sm:p-7 shadow-2xl overflow-hidden">
      
      {/* Top HUD Header with Real-Time Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
          </span>
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            CONCENTRIC ORBITAL TECHNOLOGY RADAR
          </span>
        </div>

        {/* Ring Filter Pill Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {RING_CONFIGS.map((r) => (
            <button
              key={r.ringIndex}
              type="button"
              onClick={() => setActiveRingFilter(activeRingFilter === r.ringIndex ? null : r.ringIndex)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                activeRingFilter === r.ringIndex
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/30'
                  : 'bg-white/[0.03] text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              {r.label.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Full-Box 3D Concentric Orbit Canvas Container */}
      <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] mx-auto flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-pointer touch-none select-none"
          aria-label="Interactive Concentric Orbital Technology Ecosystem Radar"
        />

        {/* Live Hovered Node Telemetry Card HUD */}
        <AnimatePresence>
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 right-4 p-4 rounded-2xl bg-[#0E0C09]/95 border border-amber-500/40 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.2)] text-left z-20 pointer-events-none max-w-[260px]"
            >
              <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10">
                <span className="text-[9px] font-mono uppercase text-amber-400 font-bold block">
                  {hoveredNode.category}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {RING_CONFIGS[hoveredNode.ring]?.label.split(':')[0]}
                </span>
              </div>
              <h4 className="text-sm font-black text-white font-mono">{hoveredNode.name}</h4>
              <p className="text-[11px] text-gray-300 font-mono mt-1.5 leading-tight">{hoveredNode.specs}</p>
              <div className="mt-2 pt-2 border-t border-white/5 flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{hoveredNode.role}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Technology Quick-Filter Pills */}
      <div className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
          <Activity className="w-3.5 h-3.5 text-amber-400" />
          <span>24 Production Technologies • 4 Concentric Orbital Rings</span>
        </div>
        <span className="text-amber-400/90 text-[10px] uppercase font-bold tracking-wider hidden sm:inline">
          Click any node to filter live UAE platforms
        </span>
      </div>
    </div>
  );
};

export default TechOrbit3D;
