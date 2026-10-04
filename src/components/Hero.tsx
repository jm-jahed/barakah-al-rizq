'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  Crown, 
  Code, 
  Bot, 
  Cpu, 
  Activity, 
  ShieldCheck,
  Layers,
  ExternalLink,
  Star,
  Award,
  CheckCircle2
} from 'lucide-react';
import { AGENCY_BUSINESS, SELECTED_WORK, getDynamicHeroShowcases } from '@/data/siteData';
import { HeroNeuralCanvas } from './HeroNeuralCanvas';
import { HeroRadar3D } from './HeroRadar3D';
import { MagneticButton } from './ui/MagneticButton';
import { KineticTextSlider } from './ui/KineticTextSlider';
import { HeroTelemetryPill } from './ui/HeroTelemetryPill';
import Link from 'next/link';

interface HeroProps {
  onOpenOrderModal: (serviceId?: string) => void;
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const projectCount = SELECTED_WORK.length || 87;
  const featuredShowcases = React.useMemo(() => getDynamicHeroShowcases(4), []);
  const [activeConsoleTab, setActiveConsoleTab] = useState<'signals' | 'radar' | 'showcase'>('signals');
  const [selectedShowcaseIndex, setSelectedShowcaseIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt for desktop 3D perspective
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 25, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 25, stiffness: 220 });
  
  // 3D Headline parallax offsets
  const textParallaxX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const textParallaxY = useTransform(mouseY, [-0.5, 0.5], [-4, 4]);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(
        window.innerWidth >= 1024 &&
        window.matchMedia('(hover: hover) and (pointer: fine)').matches
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentProject = featuredShowcases[selectedShowcaseIndex] || featuredShowcases[0];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] pt-32 pb-24 flex items-center overflow-hidden bg-[#0B0907]"
    >
      {/* Background Neural Canvas */}
      <HeroNeuralCanvas />

      {/* Ambient Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/12 via-amber-600/5 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN: Primary Narrative & Strategic Value ────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* 01 · Dynamic UAE Enterprise Telemetry & Live Multi-Node HUD Pill */}
            <HeroTelemetryPill />

            {/* 02 · Primary Headline (01 — 3D Hero Typography & Parallax Depth + Cinematic Kinetic Slider) */}
            <motion.h1 
              style={{
                x: isDesktop && !shouldReduceMotion ? textParallaxX : 0,
                y: isDesktop && !shouldReduceMotion ? textParallaxY : 0,
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 perspective-1000"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT_EXPO }}
                  className="block drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                >
                  We Build
                </motion.span>
              </span>
              
              {/* Cinematic Kinetic Text Slider / Multi-Directional Masked Transition */}
              <div className="block pb-1">
                <KineticTextSlider 
                  phrases={[
                    'Digital Experiences',
                    'AI Web Platforms',
                    'Enterprise Commerce',
                    'Next.js 16 Systems',
                  ]}
                  intervalMs={3800}
                />
              </div>

              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT_EXPO }}
                  className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_10px_24px_rgba(245,158,11,0.2)]"
                >
                  That Grow Businesses.
                </motion.span>
              </span>
            </motion.h1>

            {/* 03 · Sub-copy (Staged Blur-to-Clear Reveal) */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.75, delay: 0.52, ease: EASE_OUT_EXPO }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mb-8"
            >
              {AGENCY_BUSINESS.subheading}
            </motion.p>

            {/* 04 · Two-Level CTA Row with Central "OR" Capsule Divider (Design #03) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.64, ease: EASE_OUT_EXPO }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 p-2 sm:p-2.5 rounded-2xl sm:rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-md shadow-2xl"
            >
              {/* Primary Magnetic CTA */}
              <MagneticButton magneticStrength={0.4} glowStrength={1.2}>
                <button
                  type="button"
                  data-cursor-text="START"
                  onClick={() => onOpenOrderModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl sm:rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer font-mono group"
                >
                  <span>START A PROJECT</span>
                  <Crown className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-200" />
                </button>
              </MagneticButton>

              {/* Central Glowing "OR" Badge Divider (Matebiz Signature Pattern) */}
              <div className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-[#1A140E] border border-amber-500/30 text-[10px] font-mono font-bold text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)] shrink-0 select-none">
                OR
              </div>

              {/* Secondary Magnetic CTA */}
              <MagneticButton magneticStrength={0.25} glowStrength={0.6}>
                <Link
                  href="/projects"
                  data-cursor-text="EXPLORE"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl sm:rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-500/40 text-white font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-md group font-mono"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* 05 · Hero Verified Trust & Performance Matrix */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.76, ease: EASE_OUT_EXPO }}
              className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300 w-full"
            >
              {/* Metric 01: 80+ Live Agency Builds */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.025 }}
                className="group relative px-4 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-amber-400/60 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.18)]"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  <span className="text-xl font-extrabold text-white font-mono tracking-tight group-hover:text-amber-300 transition-colors">
                    {projectCount}+
                  </span>
                </div>
                {/* Accent Underline Bar (Design #07) */}
                <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 mt-1 mb-1 opacity-75 group-hover:w-full group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <span className="text-[11px] text-gray-400 font-medium block tracking-wide">
                  Live Agency Builds
                </span>
              </motion.div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              {/* Metric 02: 48 Hours Rapid MVP */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.025 }}
                className="group relative px-4 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-emerald-400/60 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_8px_25px_rgba(16,185,129,0.18)]"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
                    48 Hours
                  </span>
                </div>
                {/* Accent Underline Bar (Design #07) */}
                <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 mt-1 mb-1 opacity-75 group-hover:w-full group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-[11px] text-gray-400 font-medium block tracking-wide">
                  Rapid MVP Delivery
                </span>
              </motion.div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              {/* Metric 03: 98+ Lighthouse Score */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.025 }}
                className="group relative px-4 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-amber-400/60 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.18)]"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  <span className="text-xl font-extrabold text-amber-400 font-mono tracking-tight group-hover:text-amber-300 transition-colors">
                    98+
                  </span>
                </div>
                {/* Accent Underline Bar (Design #07) */}
                <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 mt-1 mb-1 opacity-75 group-hover:w-full group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <span className="text-[11px] text-gray-400 font-medium block tracking-wide">
                  Lighthouse Score
                </span>
              </motion.div>
            </motion.div>

            {/* 06 · Matebiz-Inspired Floating Trust & Accreditation Strip (Design #02) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.88, ease: EASE_OUT_EXPO }}
              className="mt-6 pt-5 border-t border-white/[0.06] w-full"
            >
              <div className="flex flex-wrap items-center gap-3">
                {/* 5-Star Rating Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-amber-500/30 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-white">4.9/5</span>
                  <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">· Top Rated UAE Studio</span>
                </div>

                {/* 100% On-Time Delivery SLA Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-amber-500/30 transition-all duration-300 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-mono font-semibold text-gray-200">100% On-Time Delivery SLA</span>
                </div>

                {/* Enterprise SSL & Edge Cloud Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold text-gray-200">Enterprise SSL &amp; UAE Cloud</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: ENGINEERING INTELLIGENCE CARD (MOTION #21 APPLIED) ── */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              style={{
                rotateX: isDesktop && !shouldReduceMotion ? rotateX : 0,
                rotateY: isDesktop && !shouldReduceMotion ? rotateY : 0,
                transformStyle: 'preserve-3d',
              }}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: EASE_OUT_EXPO }}
              className="relative rounded-3xl bg-[#120F0C]/95 border border-amber-500/25 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl shadow-black/90 group overflow-hidden"
            >
              {/* Motion #21 Laser Border Energy Trace */}
              {!shouldReduceMotion && (
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: 'linear',
                  }}
                  className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 pointer-events-none z-20"
                />
              )}

              {/* Outer Glow Border */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-amber-500/25 via-emerald-500/15 to-amber-600/25 blur-md opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none" />

              {/* Status Bar with EXACT "ENGINEERING INTELLIGENCE" Title & MOTION #21 TESTING BADGE */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <h3 className="text-xs font-mono text-gray-200 font-bold tracking-wider uppercase">
                    ENGINEERING INTELLIGENCE
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE • UAE CLOUD</span>
                </div>
              </div>

              {/* Interactive View Toggle: Live System Signals vs 3D Radar vs Project Showcase (Sliding Spring Pill) */}
              <div className="relative z-10 grid grid-cols-3 gap-1 p-1 bg-white/[0.03] rounded-xl border border-white/[0.06] mb-4">
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('signals')}
                  className={`relative py-1.5 px-2 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer z-10 ${
                    activeConsoleTab === 'signals' ? 'text-amber-300' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeConsoleTab === 'signals' && (
                    <motion.div
                      layoutId="heroConsoleActiveTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-amber-500/20 border border-amber-500/40 shadow-md"
                    />
                  )}
                  <span className="relative z-10">SIGNALS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('radar')}
                  className={`relative py-1.5 px-2 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer z-10 ${
                    activeConsoleTab === 'radar' ? 'text-amber-300' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeConsoleTab === 'radar' && (
                    <motion.div
                      layoutId="heroConsoleActiveTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-amber-500/20 border border-amber-500/40 shadow-md"
                    />
                  )}
                  <span className="relative z-10">3D RADAR</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('showcase')}
                  className={`relative py-1.5 px-2 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer z-10 ${
                    activeConsoleTab === 'showcase' ? 'text-amber-300' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeConsoleTab === 'showcase' && (
                    <motion.div
                      layoutId="heroConsoleActiveTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-amber-500/20 border border-amber-500/40 shadow-md"
                    />
                  )}
                  <span className="relative z-10">SHOWCASE</span>
                </button>
              </div>

              {/* View 1: Exact Engineering Signals */}
              {activeConsoleTab === 'signals' && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 space-y-3.5"
                >
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between group/row">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover/row:bg-amber-500/20 transition-colors">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-tight">Full-Stack Next.js 16</h4>
                        <p className="text-[11px] text-gray-400">Sub-second SSR &amp; Static Prerendering</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      &lt; 50ms Edge
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between group/row">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover/row:bg-amber-500/20 transition-colors">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-tight">Custom OpenAI RAG Agents</h4>
                        <p className="text-[11px] text-gray-400">Autonomous Enterprise Retrieval</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      Active Pipeline
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between group/row">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover/row:bg-amber-500/20 transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-tight">Brand &amp; Token Isolation</h4>
                        <p className="text-[11px] text-gray-400">Zero Agency Contamination • AED Engine</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-white px-2 py-0.5 rounded bg-white/10">
                      Production
                    </span>
                  </div>
                </motion.div>
              )}

              {/* View 2: 03 — Layered 3D Telemetry Radar */}
              {activeConsoleTab === 'radar' && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 space-y-3"
                >
                  <HeroRadar3D />
                  <p className="text-[11px] text-gray-400 font-mono text-center">
                    ✦ Real-time node telemetry across Dubai, Abu Dhabi &amp; Global edge fabric.
                  </p>
                </motion.div>
              )}

              {/* View 2: Interactive Showcase Radar (Spring Selection Pill + Smooth Crossfade) */}
              {activeConsoleTab === 'showcase' && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 space-y-3"
                >
                  {/* Selector Pills with Spring Physics */}
                  <div className="grid grid-cols-4 gap-1 p-1 bg-white/[0.02] rounded-lg border border-white/[0.06]">
                    {featuredShowcases.map((sc, idx) => (
                      <button
                        key={sc.num}
                        type="button"
                        onClick={() => setSelectedShowcaseIndex(idx)}
                        className={`relative py-1 text-center rounded text-[10px] font-mono font-bold transition-colors cursor-pointer ${
                          selectedShowcaseIndex === idx ? 'text-amber-300' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {selectedShowcaseIndex === idx && (
                          <motion.div
                            layoutId="heroShowcaseProjectPill"
                            transition={{ type: 'spring', stiffness: 480, damping: 30 }}
                            className="absolute inset-0 rounded bg-amber-500/25 border border-amber-500/50 shadow-sm"
                          />
                        )}
                        <span className="relative z-10">{sc.num}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Preview Frame with AnimatePresence */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProject.slug}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      className="relative h-36 w-full rounded-xl overflow-hidden border border-white/10 bg-black/40"
                    >
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C] via-[#120F0C]/40 to-transparent" />
                      
                      {/* Floating Glass Highlight Quotation Badge (Design #06) */}
                      <div className="absolute top-2 left-2 z-10">
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/30 text-[9px] font-mono text-amber-300 font-bold shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          <span>LIVE SHOWCASE</span>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-amber-400 font-bold">PROJECT {currentProject.num}</span>
                          <h4 className="text-xs font-extrabold text-white truncate max-w-[180px]">{currentProject.title}</h4>
                        </div>
                        <Link
                          href={`/work/${currentProject.slug}`}
                          className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold border border-amber-500/30 hover:bg-amber-500/30 transition-all flex items-center gap-1"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <p className="text-[11px] text-gray-400 line-clamp-1 font-mono">
                    ✦ {currentProject.metrics}
                  </p>
                </motion.div>
              )}

              {/* Card Footer */}
              <div className="relative z-10 mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Dubai &amp; Abu Dhabi High-Speed CDN</span>
                </span>
                <button
                  type="button"
                  onClick={() => onOpenOrderModal()}
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
