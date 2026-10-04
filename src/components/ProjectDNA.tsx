'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { 
  Dna, 
  Cpu, 
  Layers, 
  Globe2, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Activity,
  Target,
  Palette,
  Film,
  FileText,
  Lock,
  Maximize2,
  Sliders,
  RefreshCw,
  Info
} from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { SELECTED_WORK, ProjectItem } from '@/data/siteData';

// 9 Core Architectural DNA Pillars
export type DNAPillarId = 
  | 'strategy'
  | 'ux-ui'
  | 'technology'
  | 'performance'
  | 'animation'
  | 'content'
  | 'conversion'
  | 'security'
  | 'scalability';

export interface DNAPillarSpec {
  id: DNAPillarId;
  label: string;
  category: string;
  icon: any;
  color: string;
  description: string;
  architectureDetails: string[];
  benchmarkLabel: string;
  scoreKey: keyof ProjectDNARecord['scores'];
}

export interface ProjectDNARecord {
  projectId: string;
  title: string;
  category: string;
  client: string;
  slug: string;
  architectureType: string;
  techStack: string[];
  scores: {
    strategy: number;
    'ux-ui': number;
    technology: number;
    performance: number;
    animation: number;
    content: number;
    conversion: number;
    security: number;
    scalability: number;
  };
  overallEfficiency: number;
  blueprintSummary: string;
  deploymentTimeline: string;
  targetScale: string;
}

export const DNA_PILLARS: DNAPillarSpec[] = [
  {
    id: 'strategy',
    label: 'Strategy',
    category: 'Commercial & Market Fit',
    icon: Target,
    color: '#F59E0B',
    description: 'UAE market positioning, competitive differentiation, unit economics modeling, and ROI-engineered customer journeys.',
    architectureDetails: [
      'Localized UAE pricing matrices in AED currency',
      'Targeted demographic segmentation across Dubai & Abu Dhabi',
      'Frictionless buyer conversion pathways'
    ],
    benchmarkLabel: 'Architecture Assessment (Strategy)',
    scoreKey: 'strategy'
  },
  {
    id: 'ux-ui',
    label: 'UX / UI',
    category: 'Visual & Ergonomic Design',
    icon: Palette,
    color: '#06B6D4',
    description: 'Bespoke design systems, micro-interactions, dark luxury ergonomics, glassmorphic depth, and responsive typography.',
    architectureDetails: [
      'Sub-pixel precision layouts with 8pt grid system',
      'Curated typography hierarchy with high-contrast readability',
      'Mobile-first touch target accessibility (WCAG AAA)'
    ],
    benchmarkLabel: 'Architecture Assessment (UX / UI)',
    scoreKey: 'ux-ui'
  },
  {
    id: 'technology',
    label: 'Technology',
    category: 'Full-Stack Architecture',
    icon: Cpu,
    color: '#8B5CF6',
    description: 'Next.js 16 Server Components, TypeScript type-safety, modular component trees, and zero-latency state synchronization.',
    architectureDetails: [
      'React 19 Server Actions & Streaming Hydration',
      'Strict TypeScript 5 type-safety with zero any declarations',
      'Headless API integrations with WhatsApp & CRMs'
    ],
    benchmarkLabel: 'Architecture Assessment (Technology)',
    scoreKey: 'technology'
  },
  {
    id: 'performance',
    label: 'Performance',
    category: 'Speed & Edge Execution',
    icon: Gauge,
    color: '#10B981',
    description: 'Sub-second Time to First Byte (TTFB), 98+ Lighthouse targets, GPU hardware transforms, and image compression pipelines.',
    architectureDetails: [
      'Sub-800ms global edge cache delivery via CDN',
      'Automated WebP/AVIF media optimization',
      'Zero layout shift (CLS < 0.01) on initial paint'
    ],
    benchmarkLabel: 'Architecture Assessment (Performance)',
    scoreKey: 'performance'
  },
  {
    id: 'animation',
    label: 'Animation',
    category: 'Choreography & Motion',
    icon: Film,
    color: '#EC4899',
    description: 'Cinematic physics-based spring interpolation, progressive disclosure choreography, and GPU-composited parallax effects.',
    architectureDetails: [
      '60 FPS hardware-accelerated CSS/Canvas transforms',
      'Respects user OS prefers-reduced-motion preferences',
      'Context-aware scroll and magnetic hover responses'
    ],
    benchmarkLabel: 'Architecture Assessment (Motion)',
    scoreKey: 'animation'
  },
  {
    id: 'content',
    label: 'Content',
    category: 'Editorial & Messaging',
    icon: FileText,
    color: '#F97316',
    description: 'Persuasive high-trust editorial storytelling, localized bilingual nuances, clear value propositions, and zero placeholder fluff.',
    architectureDetails: [
      'Authentic Dubai & GCC business scenario terminology',
      'Structured technical specifications and honest compliance',
      'Compelling typographic rhythms and scannable summaries'
    ],
    benchmarkLabel: 'Architecture Assessment (Content)',
    scoreKey: 'content'
  },
  {
    id: 'conversion',
    label: 'Conversion',
    category: 'Lead Capture & Sales Funnel',
    icon: Activity,
    color: '#EAB308',
    description: 'Zero dead-ends, direct 1-click WhatsApp dispatches, interactive cost calculators, and streamlined booking drawers.',
    architectureDetails: [
      'Contextual floating inquiry desks with pre-filled messaging',
      'Interactive multi-step quotation and configurator tools',
      'High-urgency friction-free checkout/booking pathways'
    ],
    benchmarkLabel: 'Architecture Assessment (Conversion)',
    scoreKey: 'conversion'
  },
  {
    id: 'security',
    label: 'Security',
    category: 'Data Privacy & Integrity',
    icon: Lock,
    color: '#3B82F6',
    description: 'Strict input sanitization, SSL/TLS 1.3 encryption, UAE Data Protection compliance (Federal Decree-Law No. 45), and zero public leaks.',
    architectureDetails: [
      'Zero sensitive data exposure on client-side state',
      'Content Security Policy (CSP) & CORS header lockdown',
      'Automated rate limiting & anti-abuse verification'
    ],
    benchmarkLabel: 'Architecture Assessment (Security)',
    scoreKey: 'security'
  },
  {
    id: 'scalability',
    label: 'Scalability',
    category: 'Cloud & Infrastructure',
    icon: Globe2,
    color: '#14B8A6',
    description: 'Stateless edge architecture, multi-tenant database readiness, automatic horizontal autoscaling, and 99.99% uptime resilience.',
    architectureDetails: [
      'Serverless edge runtime deployment on AWS / Vercel Enterprise',
      'Dynamic routing supporting 100k+ concurrent requests/min',
      'Future-proof API modularity for headless expansion'
    ],
    benchmarkLabel: 'Architecture Assessment (Scalability)',
    scoreKey: 'scalability'
  }
];

export const FLAGSHIP_DNA_PROJECTS: ProjectDNARecord[] = [
  {
    projectId: 'real-estate-lead-platform',
    title: 'AURA LIVING — Ultra-Luxury PropTech Lead Engine',
    category: 'Real Estate & PropTech',
    client: 'AURA REAL ESTATE DUBAI',
    slug: 'real-estate-lead-platform',
    architectureType: 'Edge SSR / Server Actions / Spatial Floorplan Configurator',
    techStack: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Interactive UAE Map', 'AED Mortgage Engine'],
    scores: {
      strategy: 98,
      'ux-ui': 99,
      technology: 97,
      performance: 98,
      animation: 96,
      content: 95,
      conversion: 97,
      security: 96,
      scalability: 98
    },
    overallEfficiency: 97.1,
    blueprintSummary: 'High-conversion real estate acquisition platform engineered for Dubai off-plan developments, villa communities, and penthouses with live mortgage calculators and CRM dispatch.',
    deploymentTimeline: '3 Weeks',
    targetScale: 'Enterprise (100k+ monthly leads)'
  },
  {
    projectId: 'security-guard-services',
    title: 'AEGIS SOVEREIGN — Security & Guard Services Platform',
    category: 'Security & Manned Guarding',
    client: 'AEGIS SOVEREIGN SECURITY',
    slug: 'security-guard-services',
    architectureType: 'Live SOC Command Telemetry & Interactive Risk Assessment',
    techStack: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Interactive Radar HUD', '7 Emirates Matrix'],
    scores: {
      strategy: 95,
      'ux-ui': 98,
      technology: 97,
      performance: 97,
      animation: 95,
      content: 96,
      conversion: 94,
      security: 99,
      scalability: 96
    },
    overallEfficiency: 96.3,
    blueprintSummary: 'Next-generation physical and executive security operations hub with interactive command radar, SIRA Grade-A compliance matrix, and automated UAE threat assessment calculator.',
    deploymentTimeline: '3.5 Weeks',
    targetScale: 'Government / Enterprise'
  },
  {
    projectId: 'typing-center-government-services',
    title: 'SANAD — UAE Government Services Digital Hub',
    category: 'Government Services & Typing Center',
    client: 'SANAD GOV HUB DUBAI',
    slug: 'typing-center-government-services',
    architectureType: 'Bilingual EN/AR RTL Engine & Statutory Fee Calculator',
    techStack: ['Next.js 16', 'Tailwind CSS', 'Bilingual RTL', 'Live Tracking Desk', 'PRO Corporate Portal'],
    scores: {
      strategy: 97,
      'ux-ui': 98,
      technology: 96,
      performance: 98,
      animation: 94,
      content: 98,
      conversion: 96,
      security: 98,
      scalability: 97
    },
    overallEfficiency: 96.9,
    blueprintSummary: 'Turnkey government services platform with full Arabic RTL support, live application tracking desk, transparent official statutory fee separation, and corporate PRO management.',
    deploymentTimeline: '3 Weeks',
    targetScale: 'Nationwide (All 7 Emirates)'
  },
  {
    projectId: 'fintech-payments',
    title: 'NEXORA PAY — Institutional Fintech & Cross-Border Escrow',
    category: 'Fintech & Digital Banking',
    client: 'NEXORA HOLDINGS DIFC',
    slug: 'fintech-payments',
    architectureType: 'Zero-Trust Financial Ledger & Multi-Currency Settlement',
    techStack: ['Next.js 16', 'Tailwind CSS', 'AED/USD Ledger', 'Escrow State Engine', 'Biometric Auth'],
    scores: {
      strategy: 99,
      'ux-ui': 97,
      technology: 99,
      performance: 99,
      animation: 93,
      content: 94,
      conversion: 93,
      security: 100,
      scalability: 99
    },
    overallEfficiency: 97.0,
    blueprintSummary: 'Institutional fintech payment gateway and enterprise treasury console with real-time foreign exchange telemetry and UAE Central Bank regulatory compliance.',
    deploymentTimeline: '4 Weeks',
    targetScale: 'Global Sovereign Scale'
  },
  {
    projectId: 'superyacht-charter',
    title: 'AURELIA MARINE — Superyacht Charter & Private Fleet',
    category: 'Maritime Luxury & Charters',
    client: 'AURELIA MARITIME GROUP',
    slug: 'superyacht-charter',
    architectureType: 'Spatial Fleet Telemetry & Nautical Itinerary Configurator',
    techStack: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Interactive Route Planner', 'VIP Booking Drawer'],
    scores: {
      strategy: 96,
      'ux-ui': 99,
      technology: 96,
      performance: 97,
      animation: 98,
      content: 97,
      conversion: 95,
      security: 95,
      scalability: 95
    },
    overallEfficiency: 96.4,
    blueprintSummary: 'Ultra-luxury maritime portfolio platform with animated yacht specs, cruise itinerary calculators, bespoke catering configurators, and Dubai Harbour concierge.',
    deploymentTimeline: '3 Weeks',
    targetScale: 'High Net Worth / VIP'
  },
  {
    projectId: 'consumer-electronics',
    title: 'AETHERA — Luxury Consumer Tech & Gadgets Atelier',
    category: 'Consumer Electronics & Gadgets',
    client: 'AETHERA CONSUMER ELECTRONICS',
    slug: 'consumer-electronics',
    architectureType: 'Living 3D Tech Showroom & 40-Category Matrix',
    techStack: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', '3D Showcase UI', 'Setup Builder Engine'],
    scores: {
      strategy: 96,
      'ux-ui': 98,
      technology: 98,
      performance: 97,
      animation: 97,
      content: 94,
      conversion: 96,
      security: 96,
      scalability: 98
    },
    overallEfficiency: 96.7,
    blueprintSummary: 'High-density tech commerce platform showcasing 210+ flagship hardware products, interactive 3D comparator studio, ecosystem builder, and same-day UAE dispatch.',
    deploymentTimeline: '3.5 Weeks',
    targetScale: 'Omnichannel Commerce'
  }
];

interface ProjectDNAProps {
  onOpenOrderModal?: (plan?: string) => void;
}

export const ProjectDNA: React.FC<ProjectDNAProps> = ({ onOpenOrderModal }) => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [selectedProjectId, setSelectedProjectId] = useState<string>(FLAGSHIP_DNA_PROJECTS[0].projectId);
  const [activePillarId, setActivePillarId] = useState<DNAPillarId>('technology');
  const [hoveredPillarId, setHoveredPillarId] = useState<DNAPillarId | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Active Project DNA record
  const activeRecord = useMemo(() => {
    return FLAGSHIP_DNA_PROJECTS.find((p) => p.projectId === selectedProjectId) || FLAGSHIP_DNA_PROJECTS[0];
  }, [selectedProjectId]);

  // Active selected pillar details
  const activePillar = useMemo(() => {
    return DNA_PILLARS.find((p) => p.id === activePillarId) || DNA_PILLARS[2];
  }, [activePillarId]);

  // Handle pointer tracking for subtle 3D parallax tilt
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x: nx, y: ny });
  };

  const handlePointerLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Intersection Observer for viewport visibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsIntersecting(entry.isIntersecting));
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3D Canvas Physics & Particle Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isIntersecting) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    // Node projected positions for raycasting hit testing
    const projectedNodes: { id: DNAPillarId; x: number; y: number; r: number }[] = [];

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2.0);

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const baseRadius = Math.min(width, height) * 0.36;

      // Smooth tilt interpolation
      currentTiltX += (mousePos.x * 0.35 - currentTiltX) * 0.08;
      currentTiltY += (mousePos.y * 0.35 - currentTiltY) * 0.08;

      if (!shouldReduceMotion) {
        time += 0.015;
      }

      // 1. Draw Background Orbital Rings in 3D perspective
      const rings = [0.45, 0.75, 1.05];
      rings.forEach((scaleFactor, rIdx) => {
        ctx.beginPath();
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(currentTiltX * 0.2 + (rIdx * 0.2));
        ctx.scale(1, 0.45 + currentTiltY * 0.15);
        ctx.arc(0, 0, baseRadius * scaleFactor, 0, Math.PI * 2);
        ctx.restore();
        ctx.strokeStyle = rIdx === 1 ? 'rgba(245, 158, 11, 0.18)' : 'rgba(6, 182, 212, 0.1)';
        ctx.lineWidth = 1;
        ctx.setLineDash(rIdx === 1 ? [4, 6] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Draw 3D Double Helix Quantum Core in center
      const coreR = baseRadius * 0.22;
      const strandCount = 14;
      for (let s = 0; s < strandCount; s++) {
        const strandT = (s / strandCount) * Math.PI * 2 + time * 1.2;
        const strandY = (s - strandCount / 2) * 5;
        const wave1X = Math.cos(strandT) * coreR;
        const wave1Z = Math.sin(strandT) * coreR;
        const wave2X = Math.cos(strandT + Math.PI) * coreR;
        const wave2Z = Math.sin(strandT + Math.PI) * coreR;

        // Project with 3D tilt
        const p1x = cx + wave1X * (1 + currentTiltX * 0.1);
        const p1y = cy + strandY + wave1Z * 0.3 + currentTiltY * 15;
        const p2x = cx + wave2X * (1 + currentTiltX * 0.1);
        const p2y = cy + strandY + wave2Z * 0.3 + currentTiltY * 15;

        // Base pair connection line
        ctx.beginPath();
        ctx.moveTo(p1x, p1y);
        ctx.lineTo(p2x, p2y);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node beads
        ctx.beginPath();
        ctx.arc(p1x, p1y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#F59E0B';
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(p2x, p2y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#06B6D4';
        ctx.shadowColor = '#06B6D4';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Central glowing orb
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 1.2);
      coreGrad.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
      coreGrad.addColorStop(0.6, 'rgba(6, 182, 212, 0.12)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // 3. Draw 9 Orbiting DNA Pillar Nodes in 3D space
      projectedNodes.length = 0;
      const totalNodes = DNA_PILLARS.length;

      DNA_PILLARS.forEach((pillar, idx) => {
        const baseAngle = (idx / totalNodes) * Math.PI * 2;
        const nodeAngle = baseAngle + time * 0.35;
        const orbitR = baseRadius * 0.88;

        // 3D coordinate calculation with perspective flattening
        const rawX = Math.cos(nodeAngle) * orbitR;
        const rawZ = Math.sin(nodeAngle) * orbitR;
        const elevationY = Math.sin(nodeAngle * 2 + time) * 16;

        // Projected 2D coordinates with mouse tilt parallax
        const px = cx + rawX + currentTiltX * 40;
        const py = cy + rawZ * 0.45 + elevationY + currentTiltY * 30;

        // Z-depth scale & opacity (nodes in front are larger and brighter)
        const zDepth = (rawZ + orbitR) / (orbitR * 2); // 0 (back) to 1 (front)
        const nodeRadius = 7 + zDepth * 8;
        const isHovered = hoveredPillarId === pillar.id;
        const isActive = activePillarId === pillar.id;

        // Store for canvas click / hover detection
        projectedNodes.push({ id: pillar.id, x: px, y: py, r: nodeRadius + 12 });

        // Connector Laser Line from Quantum Core to Node
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        if (isActive || isHovered) {
          ctx.strokeStyle = pillar.color;
          ctx.lineWidth = 2.5;
          ctx.shadowColor = pillar.color;
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Travelling energy pulse particle along connector
          const pulseT = ((time * 2 + idx) % 1);
          const pulseX = cx + (px - cx) * pulseT;
          const pulseY = cy + (py - cy) * pulseT;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        } else {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 + zDepth * 0.1})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw Outer Glow Halo for Active/Hovered Node
        if (isActive || isHovered) {
          ctx.beginPath();
          ctx.arc(px, py, nodeRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${pillar.color}22`;
          ctx.fill();
        }

        // Draw Outer Circular Border Ring
        ctx.beginPath();
        ctx.arc(px, py, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = isActive || isHovered ? pillar.color : '#0B101E';
        ctx.strokeStyle = isActive || isHovered ? '#FFFFFF' : `${pillar.color}88`;
        ctx.lineWidth = isActive ? 2.5 : 1.5;
        ctx.fill();
        ctx.stroke();

        // Node Inner Core Bead
        ctx.beginPath();
        ctx.arc(px, py, nodeRadius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = isActive || isHovered ? '#050811' : pillar.color;
        ctx.fill();

        // 3D Projected Text Label & Score Pill
        const scoreVal = activeRecord.scores[pillar.scoreKey] || 95;
        ctx.font = `${isActive ? 'bold 11px' : '10px'} "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // Tag Backdrop Box
        const tagText = `${pillar.label.toUpperCase()} ${scoreVal}`;
        const textWidth = ctx.measureText(tagText).width;
        const tagY = py + nodeRadius + 5;

        ctx.fillStyle = isActive ? 'rgba(15, 23, 42, 0.95)' : 'rgba(11, 16, 30, 0.85)';
        ctx.strokeStyle = isActive ? pillar.color : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;

        // Rounded rect for tag
        const padX = 6;
        const padY = 3;
        ctx.beginPath();
        ctx.roundRect(px - textWidth / 2 - padX, tagY - padY, textWidth + padX * 2, 16 + padY, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isActive ? '#FFFFFF' : 'rgba(226, 232, 240, 0.85)';
        ctx.fillText(tagText, px, tagY);
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Canvas click interaction to select node directly on 3D scene
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (const node of projectedNodes) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) <= node.r) {
          setActivePillarId(node.id);
          break;
        }
      }
    };

    // Canvas hover tracking for tooltips
    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      let matchedId: DNAPillarId | null = null;

      for (const node of projectedNodes) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) <= node.r) {
          matchedId = node.id;
          break;
        }
      }
      setHoveredPillarId(matchedId);
    };

    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('mousemove', handleCanvasMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
    };
  }, [isIntersecting, mousePos, activePillarId, hoveredPillarId, activeRecord, shouldReduceMotion]);

  return (
    <section 
      id="project-dna" 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="py-24 bg-[#050811] relative overflow-hidden border-t border-cyan-500/15"
    >
      {/* UAE Technical Grid & Ambient Holographic Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-600/[0.05] blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-amber-500/[0.04] blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header: High-Trust Corporate Engineering Standard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider backdrop-blur-md">
              <Dna className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>PROJECT DNA BREAKDOWN</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Every build has an architecture. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                This is what makes it perform.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the 9 connected genetic engineering vectors powering our high-performance UAE enterprise platforms — from market positioning and full-stack runtime to sub-second edge speeds and SOC-grade data security.
            </p>
          </div>

          {/* Efficiency Score Badge */}
          <div className="flex items-center gap-4 bg-[#0B101E]/90 border border-cyan-500/25 p-4 rounded-2xl shadow-xl backdrop-blur-md">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Architecture Score
              </span>
              <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                {activeRecord.overallEfficiency}%
              </span>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-right">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                Engineering Assessment
              </span>
              <span className="text-xs font-mono text-slate-400">
                9 / 9 Pillars Verified
              </span>
            </div>
          </div>
        </div>

        {/* Project Selector Rail: 6 Flagship UAE Architectures */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-1">
            <span>SELECT ARCHITECTURAL PROFILE:</span>
            <span className="text-cyan-400">Click to morph 3D DNA core</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {FLAGSHIP_DNA_PROJECTS.map((proj, idx) => {
              const isSelected = proj.projectId === selectedProjectId;
              return (
                <button
                  key={proj.projectId}
                  type="button"
                  onClick={() => setSelectedProjectId(proj.projectId)}
                  className={`p-3 rounded-2xl border text-left rtl:text-right transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[105px] group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-950/60 to-[#0B101E] border-cyan-400 shadow-xl shadow-cyan-950/50 scale-[1.02]'
                      : 'bg-[#0B101E]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#0B101E]'
                  }`}
                >
                  {/* Glowing Top Indicator */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-amber-400" />
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                        DNA #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.04] text-slate-400">
                        {proj.overallEfficiency}%
                      </span>
                    </div>

                    <h4 className={`text-xs font-bold leading-tight line-clamp-2 transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {proj.title.split('—')[0].trim()}
                    </h4>
                  </div>

                  <p className="text-[10px] text-slate-400 truncate font-mono mt-2">
                    {proj.category}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central 3D Interactive DNA Canvas & Blueprint Inspection Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center 3D Interactive Canvas Viewport */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#0A0E1A] to-[#060913] border border-cyan-500/25 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Viewport Top Telemetry HUD */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/80 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white font-bold tracking-wider">
                  3D QUANTUM DNA CORE • LIVE INTERACTIVE TELEMETRY
                </span>
              </div>
              <span className="text-[11px] text-cyan-400 hidden sm:inline">
                [DRAG / HOVER / CLICK NODES]
              </span>
            </div>

            {/* Interactive 3D Canvas Element */}
            <div className="relative w-full aspect-square max-h-[520px] mx-auto flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-crosshair touch-none"
              />

              {/* Floating Bottom Node Quick-Switcher Pill on Mobile/Desktop */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-1.5 flex-wrap pointer-events-auto bg-black/75 p-2 rounded-2xl border border-white/10 backdrop-blur-md overflow-x-auto max-w-full">
                {DNA_PILLARS.map((p) => {
                  const isActive = activePillarId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePillarId(p.id)}
                      className={`px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold transition-all shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                          : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Guidance Footer */}
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Selected Node: <strong className="text-cyan-300">{activePillar.label.toUpperCase()}</strong></span>
              <span className="text-amber-400 font-medium">{activePillar.benchmarkLabel} • {activeRecord.scores[activePillar.scoreKey]}/100</span>
            </div>
          </div>

          {/* Right Column: Deep Blueprint Technical Breakdown Panel */}
          <div className="lg:col-span-5 bg-[#0B101E] border border-cyan-500/25 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-cyan-950/40 relative backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(6,182,212,0.18)] hover:-translate-y-1 overflow-hidden group">
            {/* Top Specular Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 via-teal-300 to-amber-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
            
            {/* Active Node Category Header */}
            <div className="border-b border-slate-800 pb-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase">
                  {activePillar.category}
                </span>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Architecture Score</span>
                  <span className="text-2xl font-black font-mono text-white" style={{ color: activePillar.color }}>
                    {activeRecord.scores[activePillar.scoreKey]} / 100
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white flex items-center gap-2.5">
                <span>{activePillar.label} Engineering Pillar</span>
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activePillar.description}
              </p>
            </div>

            {/* Architectural Highlights in Active Project */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                Architectural Implementations:
              </h4>

              <div className="space-y-2">
                {activePillar.architectureDetails.map((detail, dIdx) => (
                  <div 
                    key={dIdx} 
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-slate-800/80 flex items-start gap-3 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 9-Node Telemetry Mini Matrix */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="uppercase font-bold text-slate-300">ARCHITECTURE SCORE MATRIX:</span>
                <span className="text-emerald-400">{activeRecord.overallEfficiency}% Avg</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                {DNA_PILLARS.map((p) => {
                  const score = activeRecord.scores[p.scoreKey];
                  const isCurrent = activePillarId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePillarId(p.id)}
                      className={`p-2 rounded-xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                          : 'bg-white/[0.02] border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="block truncate">{p.label}</span>
                      <span className="font-bold text-xs" style={{ color: p.color }}>{score}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-[10px] font-mono text-slate-400 pt-1">
                * Internal engineering assessment evaluating technical architecture resilience.
              </p>
            </div>

            {/* Project Blueprint Meta & CTAs */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-1 text-xs">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                  PROJECT SPECIFICATION:
                </span>
                <p className="text-slate-200 font-medium">
                  {activeRecord.blueprintSummary}
                </p>
                <p className="text-[11px] font-mono text-slate-400 pt-1">
                  Timeline: {activeRecord.deploymentTimeline} • Target: {activeRecord.targetScale}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <Link
                  href={`/work/${activeRecord.slug}`}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Inspect Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenOrderModal?.(`DNA Blueprint: ${activeRecord.title}`)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:from-amber-400 hover:to-yellow-400 transition-all cursor-pointer shadow-lg shadow-amber-500/25"
                >
                  <span>Order Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectDNA;
