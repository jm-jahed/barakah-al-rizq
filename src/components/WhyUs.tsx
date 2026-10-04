'use client';

import React, { useState, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Crown, 
  Globe, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Check, 
  X, 
  Gauge
} from 'lucide-react';

interface AdvantageItem {
  number: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ADVANTAGES: AdvantageItem[] = [
  {
    number: '01',
    title: 'UAE & Global Experience',
    description: 'Deep specialization in UAE commercial frameworks (DED, DTCM, DIFC, ADGM) paired with international high-growth standards.',
    badge: 'UAE Multi-AZ',
    icon: Globe,
  },
  {
    number: '02',
    title: 'Bespoke UI/UX Architecture',
    description: 'Every interface is bespoke-crafted in Figma and coded in Next.js 16. Zero templates, bespoke typography, and luxury brand aesthetics.',
    badge: '100% Custom',
    icon: Crown,
  },
  {
    number: '03',
    title: 'Strategic AI Engineering',
    description: 'Autonomous AI agents, intelligent workflow automation, and custom OpenAI RAG search pipelines built directly into client operations.',
    badge: 'RAG Pipeline',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Sub-50ms Performance',
    description: 'Edge prerendering, Next.js 16 SSR, and asset optimization delivering sub-50ms TTFB and consistent 98+ Google Lighthouse scores.',
    badge: '< 50ms Edge',
    icon: Gauge,
  },
  {
    number: '05',
    title: 'Rapid Sprint Execution',
    description: 'Rapid sprint methodology delivering production-ready platforms in weeks, not months, without ever sacrificing architectural integrity.',
    badge: 'Fast Delivery',
    icon: Workflow,
  },
  {
    number: '06',
    title: 'Hermetic Reliability & SLA',
    description: 'Strict TypeScript type safety, enterprise database schemas, rigorous automated testing, and comprehensive 24/7 SLA warranties.',
    badge: 'Type-Safe',
    icon: ShieldCheck,
  },
  {
    number: '07',
    title: 'Modern Cloud Ecosystem',
    description: 'Full-stack mastery of React, Next.js, Node.js, Tailwind CSS, PostgreSQL, AWS, and modern Cloud edge computing infrastructure.',
    badge: 'Next.js 16',
    icon: Layers,
  },
  {
    number: '08',
    title: 'Commercial Conversion Intent',
    description: 'User journeys engineered to convert high-value visitors into inquiries, sales, and qualified leads across all device viewports.',
    badge: 'High ROI',
    icon: TrendingUp,
  },
];

const COMPARISON_ROWS = [
  {
    dimension: 'Architecture & Foundation',
    traditional: 'Generic WordPress / Shopify theme with bloated plugins',
    webstudio: 'Custom Next.js 16 + React 19 + TypeScript zero-template codebase',
  },
  {
    dimension: 'Delivery Velocity',
    traditional: '3 to 6 months of sluggish agency bureaucracy',
    webstudio: 'Rapid sprint delivery: Functional MVP in 48 hours to 3 weeks',
  },
  {
    dimension: 'AI & Autonomous Features',
    traditional: 'Basic contact forms or generic iframe chat widgets',
    webstudio: 'Custom OpenAI RAG neural agents & automated pipeline engines',
  },
  {
    dimension: 'Speed & Core Web Vitals',
    traditional: 'Scores of 40–60 with sluggish 3-5s page load times',
    webstudio: 'Google Lighthouse 98–100 with sub-50ms edge rendering',
  },
  {
    dimension: 'UAE Market Localization',
    traditional: 'Generic machine translation without regulatory compliance',
    webstudio: 'Native Arabic RTL typography & DED / DTCM / DIFC compliance',
  },
  {
    dimension: 'Code Ownership & Freedom',
    traditional: 'Vendor lock-in on proprietary agency builders',
    webstudio: '100% client code ownership, hermetic token isolation',
  },
];

// 11 — 3D Delivery Engine Styled Capability Card Component
const AdvantageDeliveryCard: React.FC<{
  item: AdvantageItem;
  idx: number;
  shouldReduceMotion: boolean | null;
}> = ({ item, idx, shouldReduceMotion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 150, y: 100 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 220 });

  const IconComponent = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative p-6 sm:p-7 rounded-3xl bg-[#14110E] border border-white/10 hover:border-amber-400/60 hover:shadow-[0_20px_45px_rgba(245,158,11,0.2),0_0_25px_rgba(245,158,11,0.1)] transition-all duration-300 shadow-xl group flex flex-col justify-between overflow-hidden cursor-default backdrop-blur-md min-h-[280px] sm:min-h-[300px] perspective-1000"
    >
      {/* Moving Technical Grid Layer on Hover */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none" />

      {/* Real-time Cursor Spotlight Glow */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0.12,
            background: isHovered
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.16), transparent 70%)`
              : `radial-gradient(180px circle at 50% 0%, rgba(245, 158, 11, 0.03), transparent 75%)`,
          }}
        />
      )}

      {/* Top Circuit Specular Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
          isHovered
            ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-100 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
            : 'opacity-0'
        }`}
      />

      {/* Card Content Top with 3D Elevation */}
      <div className="relative z-10" style={{ transform: isHovered && !shouldReduceMotion ? 'translateZ(15px)' : 'translateZ(0px)', transition: 'transform 0.3s ease' }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
          {item.description}
        </p>
      </div>

      {/* Card Bottom: Badge & Verified Tag */}
      <div className="relative z-10 pt-4 mt-auto border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-2 text-amber-400 font-semibold group-hover:text-amber-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>{item.badge}</span>
        </span>
        <span className="text-gray-400 text-[11px] font-mono tracking-wider uppercase">
          Verified
        </span>
      </div>
    </motion.div>
  );
};

interface WhyUsProps {
  onOpenOrderModal?: (context?: string) => void;
}

export const WhyUs: React.FC<WhyUsProps> = () => {
  const [activeView, setActiveView] = useState<'capabilities' | 'comparison'>('capabilities');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why" className="py-24 sm:py-32 bg-[#0B0907] relative overflow-hidden font-sans border-t border-white/5">
      {/* Anchor for About / Agency navigation */}
      <div id="about" className="absolute -top-24 pointer-events-none" />
      
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header with Kinetic Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {}
            }}
            className="space-y-3"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5"
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>THE AGENCY ADVANTAGE</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2 
                variants={{
                  hidden: { y: '80%', opacity: 0, filter: 'blur(4px)' },
                  visible: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                Why Work <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">With Us?</span>
              </motion.h2>
            </div>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-base text-gray-400 max-w-2xl leading-relaxed"
            >
              Eight decisive capabilities setting WebStudioAE apart as a premier UAE and global digital engineering studio.
            </motion.p>
          </motion.div>

          {/* Dual Mode Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md relative shadow-xl self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveView('capabilities')}
              className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer z-10 ${
                activeView === 'capabilities' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeView === 'capabilities' && (
                <motion.div
                  layoutId="whyUsTabPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-amber-500/25 -z-10"
                />
              )}
              <span>8 Core Capabilities</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('comparison')}
              className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer z-10 ${
                activeView === 'comparison' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeView === 'comparison' && (
                <motion.div
                  layoutId="whyUsTabPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-amber-500/25 -z-10"
                />
              )}
              <span>Studio vs Traditional</span>
            </button>
          </div>
        </div>

        {/* Segmented Value Proposition Icon Pills (Design #11) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {[
            { icon: Globe, label: 'UAE MULTI-AZ', detail: 'DED & DIFC Standard' },
            { icon: Gauge, label: '< 50MS EDGE TTFB', detail: 'Sub-Second Speed' },
            { icon: Crown, label: '100% BESPOKE FIGMA', detail: 'Zero Templates' },
            { icon: Cpu, label: 'CUSTOM OPENAI RAG', detail: 'Enterprise AI' },
            { icon: ShieldCheck, label: '100% CODE OWNERSHIP', detail: 'Zero Lock-in' },
          ].map((pill, pIdx) => {
            const PillIcon = pill.icon;
            return (
              <div
                key={pill.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300 shrink-0 cursor-default group"
              >
                <div className="p-1 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <PillIcon className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold text-white group-hover:text-amber-300 transition-colors tracking-wider">
                    {pill.label}
                  </span>
                  <span className="text-[9px] font-mono text-gray-400">
                    {pill.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View 1: 8-Card Grid with The Delivery Engine Styling */}
        {activeView === 'capabilities' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {ADVANTAGES.map((item, idx) => (
              <AdvantageDeliveryCard
                key={item.number}
                item={item}
                idx={idx}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        )}

        {/* View 2: Studio vs Traditional Comparison Table */}
        {activeView === 'comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#14110E] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden relative"
          >
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs font-mono font-bold tracking-wider uppercase mb-4">
              <div className="col-span-12 sm:col-span-4 text-gray-400">DIMENSION</div>
              <div className="hidden sm:block sm:col-span-4 text-rose-400/90">TRADITIONAL AGENCIES</div>
              <div className="hidden sm:block sm:col-span-4 text-amber-400">WEBSTUDIO AE STANDARDS</div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {COMPARISON_ROWS.map((row) => (
                <div 
                  key={row.dimension}
                  className="grid grid-cols-12 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all items-center shadow-sm cursor-default"
                >
                  <div className="col-span-12 sm:col-span-4 text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{row.dimension}</span>
                  </div>

                  <div className="col-span-12 sm:col-span-4 text-xs text-gray-400 flex items-start gap-2 bg-rose-500/5 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border sm:border-0 border-rose-500/10">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>

                  <div className="col-span-12 sm:col-span-4 text-xs font-semibold text-amber-300 flex items-start gap-2 bg-amber-500/10 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border sm:border-0 border-amber-500/20">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.webstudio}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default WhyUs;
