'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Palette, 
  Code2, 
  Globe, 
  GitMerge, 
  Clock, 
  Layers, 
  ShieldCheck,
  Terminal,
  Cpu,
  Workflow
} from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

const STEP_ICONS = [
  <Search className="w-5 h-5" key="0" />,
  <Palette className="w-5 h-5" key="1" />,
  <Code2 className="w-5 h-5" key="2" />,
  <Globe className="w-5 h-5" key="3" />,
];

const PROCESS_STAGES = [
  {
    number: '01',
    tag: 'DISCOVER',
    title: 'Discover & Blueprint',
    subtitle: 'Strategy, Scope & Roadmap',
    duration: 'Days 1 – 3',
    description: 'We audit business objectives, competitive UAE landscape, technical requirements, and conversion funnels to draft a precise engineering roadmap.',
    artifacts: [
      'Comprehensive Scope of Work (SOW)',
      'Information Architecture & Data Schema',
      'UAE Market & Regulatory Compliance Audit',
      'Sprint Milestones & Timeline Agreement'
    ],
    telemetry: 'Scope Locked • 100% Verified'
  },
  {
    number: '02',
    tag: 'DESIGN',
    title: 'Design & Interaction',
    subtitle: 'Bespoke Figma UI/UX System',
    duration: 'Days 4 – 8',
    description: 'Our design team crafts bespoke design tokens, interactive motion prototypes, and conversion layouts tailored specifically for your brand.',
    artifacts: [
      '100% Bespoke Figma Component Library',
      'Interactive Framer Motion Prototypes',
      'Mobile-First Responsive Layout Specs',
      'GCC & Multi-Language Arabic Typography'
    ],
    telemetry: 'Figma Tokens • Zero Templates'
  },
  {
    number: '03',
    tag: 'BUILD',
    title: 'Full-Stack Engineering',
    subtitle: 'Next.js 16 & AI Integration',
    duration: 'Days 9 – 16',
    description: 'We write clean, modular, typed code backed by serverless cloud infrastructure, edge caching, and automated CI/CD deployment pipelines.',
    artifacts: [
      'Next.js 16 App Router & Edge SSR Codebase',
      'Custom OpenAI RAG Neural Search Agent',
      'PostgreSQL / Supabase Isolated Tenant Schema',
      'Automated GitHub Actions CI/CD Pipeline'
    ],
    telemetry: 'Sub-50ms TTFB • Strict Type-Safe'
  },
  {
    number: '04',
    tag: 'LAUNCH',
    title: 'QA, Launch & SLA Support',
    subtitle: 'Security, Speed & Support',
    duration: 'Days 17 – 21',
    description: 'Rigorous cross-device testing, 98+ Lighthouse optimization, production domain/SSL launch, and ongoing 30-day engineering warranty.',
    artifacts: [
      '98+ Google Lighthouse Performance Audit',
      'End-to-End Cross-Browser & Mobile QA',
      'SSL, DNS & Multi-AZ CDN Edge Deployment',
      '30-Day Dedicated SLA Support & Handover'
    ],
    telemetry: 'Production Ready • 99.9% SLA'
  },
];

// Phase Step Card with Real-time Cursor Spotlight
const PhaseCard: React.FC<{
  step: typeof PROCESS_STAGES[0];
  idx: number;
  isCurrent: boolean;
  onSelect: () => void;
  shouldReduceMotion: boolean | null;
}> = ({ step, idx, isCurrent, onSelect, shouldReduceMotion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 150, y: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={onSelect}
      onMouseEnter={() => {
        setIsHovered(true);
        onSelect();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.015 }}
      className={`relative p-7 rounded-3xl bg-[#14110E] border transition-all duration-300 shadow-xl group flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-md ${
        isCurrent
          ? 'border-amber-400/80 shadow-[0_20px_50px_rgba(245,158,11,0.22),0_0_25px_rgba(245,158,11,0.12)] -translate-y-1.5'
          : 'border-white/10 hover:border-amber-400/60 hover:shadow-[0_16px_40px_rgba(245,158,11,0.16)]'
      }`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered || isCurrent ? 1 : 0.15,
            background: isHovered || isCurrent
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.16), transparent 70%)`
              : `radial-gradient(180px circle at 50% 0%, rgba(245, 158, 11, 0.04), transparent 75%)`,
          }}
        />
      )}

      {/* Top Circuit Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
          isCurrent
            ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-emerald-400 opacity-100 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
            : isHovered
            ? 'bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-100 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
            : 'opacity-0'
        }`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)]">
              {STEP_ICONS[idx]}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                {step.tag}
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                {step.title}
              </h3>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 uppercase tracking-wider font-bold shrink-0">
            {step.duration}
          </span>
        </div>

        <span className="text-xs text-amber-400/90 font-mono font-medium block mb-3">
          {step.subtitle}
        </span>

        <p className="text-xs text-gray-400 leading-relaxed mb-5 font-normal group-hover:text-gray-200 transition-colors">
          {step.description}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{step.telemetry}</span>
        </span>
      </div>
    </motion.div>
  );
};

export const DeliverySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const currentStage = PROCESS_STAGES[activeStep];

  return (
    <section id="process" className="py-28 bg-[#0E0C0A] border-t border-amber-500/15 relative z-10 overflow-hidden font-sans">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion #27 Testing Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5">
                <GitMerge className="w-3.5 h-3.5 text-amber-400" />
                <span>The Delivery Engine</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
              How We Execute.
            </h2>
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              A rigorous, 4-phase agile engineering methodology optimizing speed-to-market without compromising architecture.
            </p>
          </div>
        </div>

        {/* 12 — 3D Pipeline Timeline Rail with Dynamic Depth Track */}
        <div className="mb-14 max-w-4xl mx-auto hidden lg:block relative perspective-1000">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-white/[0.06] -translate-y-1/2 rounded-full shadow-inner" />
          
          <motion.div
            animate={{ width: `${(activeStep / (PROCESS_STAGES.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 -translate-y-1/2 rounded-full shadow-[0_0_24px_rgba(245,158,11,0.8)]"
          />

          <div className="relative z-10 flex items-center justify-between">
            {PROCESS_STAGES.map((stg, idx) => {
              const isActive = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <button
                  key={stg.tag}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-2.5 group transition-all cursor-pointer"
                  style={{
                    transform: isCurrent && !shouldReduceMotion ? 'translateZ(24px) scale(1.12)' : 'translateZ(0px) scale(0.98)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-black border-amber-300 shadow-2xl shadow-amber-500/50'
                        : isActive
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-md'
                        : 'bg-[#14110E] text-gray-500 border-white/10 hover:border-amber-500/40 hover:text-white'
                    }`}
                  >
                    {STEP_ICONS[idx]}
                  </div>
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isCurrent ? 'text-amber-400' : isActive ? 'text-amber-200' : 'text-gray-500'
                      }`}
                    >
                      {stg.tag}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {stg.duration}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Pipeline Step Cards Grid with 3D Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-10 perspective-1000">
          {PROCESS_STAGES.map((step, idx) => (
            <PhaseCard
              key={step.number}
              step={step}
              idx={idx}
              isCurrent={activeStep === idx}
              onSelect={() => setActiveStep(idx)}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* 13 — 3D Phase Artifact Inspector (Layered Engineering Blueprint) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.number}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#14110E] to-emerald-500/5 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Motion Laser Energy Beam Sweep */}
            {!shouldReduceMotion && (
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-85 pointer-events-none"
              />
            )}

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    BLUEPRINT INSPECTOR: {currentStage.title}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Tangible Deliverables Produced in {currentStage.duration}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Every sprint delivers verified, production-ready codebases, design tokens, and infrastructure blueprints with zero agency handoff debt.
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Telemetry: {currentStage.telemetry}</span>
                </div>
              </div>

              {/* Layered Artifacts Grid */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06 }
                  }
                }}
                initial={shouldReduceMotion ? 'show' : 'hidden'}
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto"
              >
                {currentStage.artifacts.map((art, aIdx) => (
                  <motion.div 
                    key={art} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.95, y: 8 },
                      show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 25 } }
                    }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03, borderColor: 'rgba(245, 158, 11, 0.5)' }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.09] hover:bg-white/[0.08] text-xs text-gray-200 transition-all cursor-default shadow-md group/art"
                  >
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="font-medium leading-snug">{art}</span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default DeliverySection;

