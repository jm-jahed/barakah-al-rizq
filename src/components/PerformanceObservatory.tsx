'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Activity, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Smartphone, 
  Monitor, 
  ExternalLink,
  Layers,
  BarChart3,
  Search,
  Check
} from 'lucide-react';
import Link from 'next/link';
import { PerformanceCore3D } from './PerformanceCore3D';

interface PerformanceObservatoryProps {
  onOpenOrderModal: (platformContext?: string) => void;
}

interface BenchmarkPlatform {
  id: string;
  projectNumber: number;
  title: string;
  category: string;
  slug: string;
  pillars: {
    title: string;
    description: string;
    focus: string;
  }[];
  infra: {
    edgeNodes: string;
    runtime: string;
    hydration: string;
  };
  highlight: string;
}

const AUDITED_PLATFORMS: BenchmarkPlatform[] = [
  {
    id: 'real-estate-lead-platform',
    projectNumber: 1,
    title: 'Luxestate Dubai Prime Real Estate Platform',
    category: 'Real Estate & PropTech',
    slug: 'real-estate-lead-platform',
    pillars: [
      { title: 'Core Web Vitals Optimization', description: 'Zero cumulative layout shifts with pre-computed aspect ratios on high-res Dubai property media.', focus: 'CLS & LCP Targets' },
      { title: 'Lighthouse-Ready Architecture', description: 'Clean semantic DOM structure, aria labeling, and optimized contrast ratios matching AA standards.', focus: 'Accessibility & SEO' },
      { title: 'Fast-Loading Experience', description: 'Edge-rendered Next.js server components with instant mobile 5G drawer interactions.', focus: 'Edge Rendering' },
      { title: 'Best Practices & Code Hygiene', description: 'Strict TypeScript compilation, HTTPS strict transport security, and modern resource loading.', focus: 'Enterprise Standards' }
    ],
    infra: {
      edgeNodes: 'UAE Dubai / Abu Dhabi Anycast Routing',
      runtime: 'Next.js 16 App Router Edge',
      hydration: 'Partial Streaming SSR',
    },
    highlight: 'Engineered with responsive WebP image delivery, instant lead-capture routing, and localized UAE Dirham calculations.',
  },
  {
    id: 'car-rental',
    projectNumber: 3,
    title: 'Exotic & Luxury Fleet Rental Booking Engine',
    category: 'Automotive & Luxury Fleet',
    slug: 'car-rental',
    pillars: [
      { title: 'Performance Engineering', description: 'Minimal client runtime payload with server-side inventory availability computations.', focus: 'Low TTFB & High Throughput' },
      { title: 'Interactive Stability', description: 'Smooth interactive vehicle specs, dynamic price calculation in AED without UI jitter.', focus: 'Zero Layout Shift' },
      { title: 'Mobile-First Accessibility', description: 'Touch-optimized tap targets, screen-reader compliant fleet specs, and high-contrast night mode.', focus: 'Universal Access' },
      { title: 'Production Best Practices', description: 'Zero third-party render-blocking scripts and automated asset caching.', focus: 'Modern Web Hygiene' }
    ],
    infra: {
      edgeNodes: 'Middle East Regional PoP Nodes',
      runtime: 'Next.js 16 + Redis Caching Layer',
      hydration: 'Dynamic Server Islands',
    },
    highlight: 'Real-time vehicle availability calculations in AED with instant mobile reservations and zero layout shift.',
  },
  {
    id: 'digital-marketing-agency',
    projectNumber: 5,
    title: 'Nexora Media Digital Growth & ROI Platform',
    category: 'Marketing & Advertising',
    slug: 'digital-marketing-agency',
    pillars: [
      { title: 'High-Performance Engineering', description: 'Lightweight CSS architecture built with Tailwind CSS, eliminating unused styles.', focus: 'Sub-second Load Times' },
      { title: 'Technical SEO Optimization', description: 'Dynamic JSON-LD schema markup, OpenGraph social cards, and automated sitemaps.', focus: 'Search Indexability' },
      { title: 'Accessibility Compliance', description: 'Keyboard navigational hierarchy, skip links, and semantic landmark elements.', focus: 'WCAG Guidelines' },
      { title: 'Asset Delivery Efficiency', description: 'Next.js automated font subsetting and zero layout-shifting font swaps.', focus: 'Web Font Optimization' }
    ],
    infra: {
      edgeNodes: 'Global Anycast Edge Network',
      runtime: 'Next.js 16 + Tailwind CSS',
      hydration: 'Ultra-Lightweight Static Edge',
    },
    highlight: 'Bespoke design tokens, interactive client ROI assessment tools, and clean server-rendered presentation.',
  },
  {
    id: 'accounting-tax-consultancy',
    projectNumber: 8,
    title: 'Al-Bayan Corporate Tax & Audit Portal',
    category: 'Financial Advisory & Corporate Tax',
    slug: 'accounting-tax-consultancy',
    pillars: [
      { title: 'Sovereign Compliance Architecture', description: 'FTA compliance readiness, secure client inquiry channels, and strict cryptographic transport.', focus: 'Security & Integrity' },
      { title: 'Fast-Loading Experience', description: 'Zero bloated client libraries; lightweight interactive tax calculation engine.', focus: 'Instant Client Interaction' },
      { title: 'Accessibility & Contrast', description: 'Enterprise typography scale with high readability standards for complex financial schemas.', focus: 'Readability Standards' },
      { title: 'Scalable Next.js Architecture', description: 'Modular component architecture with type-safe state modeling and zero unnecessary re-renders.', focus: 'Code Maintainability' }
    ],
    infra: {
      edgeNodes: 'UAE Sovereign Regional Edge',
      runtime: 'Next.js 16 + Strict TypeScript',
      hydration: 'Hermetic Zero-JS Content Tree',
    },
    highlight: 'Full UAE Corporate Tax calculator with instant field validation and secure corporate consultation routing.',
  },
  {
    id: 'restaurant-cafe',
    projectNumber: 11,
    title: 'Al-Sultan Haute Emirati Dining Experience',
    category: 'Hospitality & Luxury Gastronomy',
    slug: 'restaurant-cafe',
    pillars: [
      { title: 'Media Pipeline Optimization', description: 'High-density photography processed through Next.js image optimizer with AVIF / WebP delivery.', focus: 'Visual Fidelity & Speed' },
      { title: 'Core Web Vitals Engineering', description: 'Zero content jumps during image resolution switches across tablet and mobile viewports.', focus: 'Stable Viewport Rendering' },
      { title: 'Localized SEO & Schema', description: 'Rich local business restaurant schemas, bilingual menu metadata, and direct geo-targeting.', focus: 'Local Business Discovery' },
      { title: 'Accessibility Standards', description: 'Clear focus rings, descriptive alt text for culinary imagery, and touch-friendly booking.', focus: 'Inclusive Experience' }
    ],
    infra: {
      edgeNodes: 'Dubai Internet City Edge Cache',
      runtime: 'Next.js 16 + Image Optimization',
      hydration: 'Progressive Dish Carousel',
    },
    highlight: 'Luxury culinary photography lazy-loaded with responsive next-gen formatting and zero visual layout shifts.',
  }
];

// Interactive Pillar Card with Delivery Engine Spotlight & Hover Lift
const AnimatedPillarCard: React.FC<{
  pillar: BenchmarkPlatform['pillars'][0];
  idx: number;
  shouldReduceMotion: boolean | null;
}> = ({ pillar, idx, shouldReduceMotion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 120, y: 80 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.015 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-emerald-400/60 hover:shadow-[0_16px_36px_rgba(16,185,129,0.18)] transition-all duration-300 flex flex-col justify-between space-y-3 relative overflow-hidden group shadow-lg cursor-default"
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0.1,
            background: isHovered
              ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.14), transparent 70%)`
              : `radial-gradient(150px circle at 50% 0%, rgba(16, 185, 129, 0.03), transparent 75%)`,
          }}
        />
      )}

      {/* Top Circuit Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
          isHovered
            ? 'bg-gradient-to-r from-emerald-500 via-teal-300 to-amber-300 opacity-100 shadow-[0_0_10px_rgba(16,185,129,0.7)]'
            : 'opacity-0'
        }`}
      />

      <div className="space-y-1.5 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
            {pillar.focus}
          </span>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        </div>
        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
          {pillar.title}
        </h4>
        <p className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
};

export const PerformanceObservatory: React.FC<PerformanceObservatoryProps> = ({ onOpenOrderModal }) => {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('real-estate-lead-platform');
  const [viewportMode, setViewportMode] = useState<'mobile' | 'desktop'>('desktop');
  const shouldReduceMotion = useReducedMotion();

  // Card Spotlight for Infrastructure & Commitment Card
  const [infraHover, setInfraHover] = useState(false);
  const [infraMouse, setInfraMouse] = useState({ x: 150, y: 100 });
  const [slaHover, setSlaHover] = useState(false);
  const [slaMouse, setSlaMouse] = useState({ x: 150, y: 100 });

  const activePlatform = useMemo(() => {
    return AUDITED_PLATFORMS.find((p) => p.id === selectedPlatformId) || AUDITED_PLATFORMS[0];
  }, [selectedPlatformId]);

  return (
    <section id="observatory" className="py-24 sm:py-32 bg-[#07090E] relative overflow-hidden font-sans border-t border-white/5">
      {/* Ambient background teal/emerald & gold glow with gentle breathing animation */}
      <motion.div 
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.06, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-emerald-500 blur-[170px] pointer-events-none rounded-full" 
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.08, 1],
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-amber-500 blur-[170px] pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono text-xs uppercase tracking-wider backdrop-blur-md shadow-lg shadow-emerald-500/5"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Performance Observatory & Standards</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Performance Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300">& Lighthouse-Ready</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">Architecture</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Every WebStudio AE platform is engineered for Core Web Vitals optimization, fast-loading user experiences, strict accessibility, and production-grade Next.js architecture deployed across UAE and global delivery infrastructure.
            </p>
          </div>

          {/* Performance Standards Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-black/60 border border-emerald-500/30 text-right shadow-lg">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">ENGINEERING DISCIPLINE</span>
              <span className="text-xs font-bold font-mono text-emerald-400 flex items-center gap-1.5 justify-end mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Lighthouse-Ready
              </span>
            </div>
          </div>
        </div>

        {/* Platform Selector Tabs Carousel with Delivery Engine Hover / Tap Animations */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {AUDITED_PLATFORMS.map((plat) => {
            const isSelected = plat.id === selectedPlatformId;
            return (
              <motion.button
                key={plat.id}
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => setSelectedPlatformId(plat.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl border text-xs font-mono transition-all duration-300 flex items-center gap-2.5 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                  isSelected
                    ? 'bg-emerald-500/15 border-emerald-400 text-emerald-300 font-bold shadow-[0_0_24px_rgba(16,185,129,0.22)] -translate-y-0.5'
                    : 'bg-[#0B0E14] border-white/5 text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-white/[0.04]'
                }`}
              >
                {/* Top Glowing Shimmer Line on Active/Hover */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#10B981]" />
                )}

                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all ${
                  isSelected ? 'bg-black text-amber-400 border-amber-400/40' : 'bg-black/50 text-amber-400/90 border-white/10'
                }`}>
                  #{plat.projectNumber}
                </span>
                <span className="truncate max-w-[170px] sm:max-w-none">{plat.title.split(' ')[0]} {plat.title.split(' ')[1]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold transition-all ${
                  isSelected ? 'bg-emerald-500/25 text-emerald-300 shadow-sm' : 'bg-emerald-500/10 text-emerald-400/80'
                }`}>
                  Audited
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* 3D Visual Centerpiece: Performance Core & Orbital Data Observatory */}
        <PerformanceCore3D activeSector={activePlatform.category} />

        {/* 2-Column Telemetry Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4-Pillar Performance Optimization Cluster (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B0E17] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-md">
            
            {/* Top Subtle Light Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block mb-1">
                    ARCHITECTURE BLUEPRINT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {activePlatform.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Sector: <span className="text-emerald-300 font-semibold">{activePlatform.category}</span>
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Viewport Dimension Switcher */}
              <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono shrink-0">
                <button
                  type="button"
                  onClick={() => setViewportMode('desktop')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewportMode === 'desktop' ? 'bg-emerald-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewportMode('mobile')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewportMode === 'mobile' ? 'bg-emerald-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile 5G</span>
                </button>
              </div>
            </div>

            {/* 4 Performance Engineering Pillars with Interactive Delivery Engine Spotlight Cards */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePlatform.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {activePlatform.pillars.map((pillar, idx) => (
                  <AnimatedPillarCard
                    key={pillar.title}
                    pillar={pillar}
                    idx={idx}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Core Web Vitals Disciplines */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Core Web Vitals Engineering Targets
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <motion.div 
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all space-y-1 group"
                >
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">TTFB Target</span>
                  <div className="text-sm font-bold font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">Fast Server Response</div>
                  <span className="text-[10px] text-slate-500 font-mono">Edge-prerendered HTML</span>
                </motion.div>

                <motion.div 
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all space-y-1 group"
                >
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">FCP Target</span>
                  <div className="text-sm font-bold font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">Instant Paint</div>
                  <span className="text-[10px] text-slate-500 font-mono">Zero render-blocking CSS</span>
                </motion.div>

                <motion.div 
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all space-y-1 group"
                >
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">LCP Target</span>
                  <div className="text-sm font-bold font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">Optimized Hero</div>
                  <span className="text-[10px] text-slate-500 font-mono">Pre-loaded AVIF/WebP</span>
                </motion.div>

                <motion.div 
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all space-y-1 group"
                >
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">CLS Target</span>
                  <div className="text-sm font-bold font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">0.00 Layout Shift</div>
                  <span className="text-[10px] text-slate-500 font-mono">Pre-computed media boxes</span>
                </motion.div>
              </div>
            </div>

            {/* Engineering Summary */}
            <div className="p-4 rounded-2xl bg-emerald-500/[0.05] border border-emerald-500/20 text-xs text-slate-300 leading-relaxed font-mono relative overflow-hidden">
              <span className="text-emerald-400 font-bold block mb-1">PLATFORM HIGHLIGHT:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activePlatform.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {activePlatform.highlight}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Infrastructure Architecture & SLA Standards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Edge Infrastructure Card with Cursor Spotlight */}
            <motion.div 
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
              onMouseEnter={() => setInfraHover(true)}
              onMouseLeave={() => setInfraHover(false)}
              onMouseMove={(e) => {
                if (shouldReduceMotion) return;
                const rect = e.currentTarget.getBoundingClientRect();
                setInfraMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              className="p-6 rounded-3xl bg-[#0B0E17] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 space-y-5 shadow-2xl relative overflow-hidden backdrop-blur-md"
            >
              {/* Dynamic Cursor Spotlight Radial Glow */}
              {!shouldReduceMotion && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
                  style={{
                    opacity: infraHover ? 1 : 0.1,
                    background: infraHover
                      ? `radial-gradient(320px circle at ${infraMouse.x}px ${infraMouse.y}px, rgba(16, 185, 129, 0.12), transparent 70%)`
                      : `radial-gradient(160px circle at 50% 0%, rgba(16, 185, 129, 0.03), transparent 75%)`,
                  }}
                />
              )}

              {/* Top Circuit Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1.5px] transition-all duration-300 ${
                  infraHover
                    ? 'bg-gradient-to-r from-emerald-500 via-teal-300 to-amber-300 opacity-100 shadow-[0_0_10px_rgba(16,185,129,0.7)]'
                    : 'opacity-0'
                }`}
              />

              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Delivery Infrastructure</h4>
                  <span className="text-xs text-slate-400 font-mono">UAE + Global Delivery Mesh</span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono border-t border-white/10 pt-4 relative z-10">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Edge Point of Presence:</span>
                  <span className="text-emerald-300 font-bold text-right truncate max-w-[200px]">{activePlatform.infra.edgeNodes}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Server Execution Runtime:</span>
                  <span className="text-white text-right">{activePlatform.infra.runtime}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Client Hydration Mode:</span>
                  <span className="text-amber-300 font-bold text-right">{activePlatform.infra.hydration}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Asset Compression:</span>
                  <span className="text-white text-right">Brotli + WebP/AVIF Automated Next.js Cache</span>
                </div>
              </div>

              {/* Direct Link to Case Study */}
              <Link
                href={`/work/${activePlatform.slug}`}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-400/40 text-slate-200 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer relative z-10 font-bold group"
              >
                <span>Inspect Platform #{activePlatform.projectNumber} Case Study</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Performance Engineering Commitment Card */}
            <motion.div 
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
              onMouseEnter={() => setSlaHover(true)}
              onMouseLeave={() => setSlaHover(false)}
              onMouseMove={(e) => {
                if (shouldReduceMotion) return;
                const rect = e.currentTarget.getBoundingClientRect();
                setSlaMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#0D1515] to-[#0A0E13] border border-emerald-500/30 space-y-4 shadow-xl relative overflow-hidden backdrop-blur-md"
            >
              {/* Dynamic Cursor Spotlight */}
              {!shouldReduceMotion && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
                  style={{
                    opacity: slaHover ? 1 : 0.1,
                    background: slaHover
                      ? `radial-gradient(320px circle at ${slaMouse.x}px ${slaMouse.y}px, rgba(16, 185, 129, 0.15), transparent 70%)`
                      : `radial-gradient(160px circle at 50% 0%, rgba(16, 185, 129, 0.04), transparent 75%)`,
                  }}
                />
              )}

              {/* Top Circuit Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1.5px] transition-all duration-300 ${
                  slaHover
                    ? 'bg-gradient-to-r from-emerald-500 via-teal-300 to-amber-300 opacity-100 shadow-[0_0_10px_rgba(16,185,129,0.7)]'
                    : 'opacity-0'
                }`}
              />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center shrink-0 shadow-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Performance-First Engineering</h4>
                  <p className="text-xs text-slate-400">Core Web Vitals & accessibility built into every sprint.</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed relative z-10">
                We test every bespoke platform against strict Lighthouse performance, accessibility, SEO, and best-practices criteria prior to deployment, tuning server-side rendering and asset delivery for optimal real-world load times.
              </p>

              <button
                type="button"
                onClick={() => onOpenOrderModal(`Performance Consultation: ${activePlatform.title}`)}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer font-mono relative z-10 group"
              >
                <span>Build a High-Performance Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
