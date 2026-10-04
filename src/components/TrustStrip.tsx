'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Server, 
  Flame, 
  Gauge,
  Radio,
  Layers
} from 'lucide-react';
import { getAllProjects } from '@/data/siteData';

// ─── Animated number counter hook ─────────────────────────────────────────────
function useCountUp(target: number, duration = 1.0, start = false, minStart?: number) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startVal = minStart !== undefined ? minStart : Math.max(0, target - 6);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startVal + (target - startVal) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration, minStart]);

  return count;
}

export const TrustStrip: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<number | null>(null);
  const [mousePositions, setMousePositions] = useState<{ [key: number]: { x: number; y: number } }>({});

  const totalLiveProjects = getAllProjects().length || 84;
  const countBuilds = useCountUp(totalLiveProjects, 0.8, inView, Math.max(80, totalLiveProjects - 4));
  const countScore = useCountUp(99, 0.8, inView, 95);

  const proofMetrics = [
    {
      id: 0,
      icon: Flame,
      value: `${countBuilds}+`,
      title: 'LIVE PRODUCTION BUILDS',
      detail: `${totalLiveProjects}+ bespoke enterprise platforms architected, verified & deployed in production across the UAE.`,
      tag: 'Zero Mockups',
      accent: 'amber',
    },
    {
      id: 1,
      icon: Gauge,
      value: `${countScore}/100`,
      title: 'CORE WEB VITALS',
      detail: 'Ultra-optimized sub-second First Contentful Paint (FCP) & 0.00 Cumulative Layout Shift.',
      tag: 'Google Verified',
      accent: 'emerald',
    },
    {
      id: 2,
      icon: Server,
      value: '< 24ms',
      title: 'UAE EDGE LATENCY',
      detail: 'Distributed CDN edge nodes routed directly through Dubai & Abu Dhabi enterprise clusters.',
      tag: 'UAE Multi-AZ',
      accent: 'amber',
    },
    {
      id: 3,
      icon: ShieldCheck,
      value: '99.9%',
      title: 'UPTIME RELIABILITY',
      detail: 'Automated CI/CD validation pipelines, hermetic token scoping & zero agency footprint isolation.',
      tag: 'Production SLA',
      accent: 'emerald',
    },
  ];

  const keyTech = [
    'Next.js 16',
    'React 19',
    'TypeScript 5',
    'Tailwind CSS',
    'Framer Motion',
    'OpenAI RAG',
    'PostgreSQL / Supabase',
    'Vercel Edge',
    'AWS Cloud',
    'Redis Cache',
    'Prisma ORM',
    'REST / GraphQL',
  ];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions((prev) => ({
      ...prev,
      [idx]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <section
      ref={ref}
      className="relative py-10 bg-[#090807] border-y border-amber-500/20 overflow-hidden select-none"
    >
      {/* Dynamic Scanline Ambience */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Horizontal Telemetry Beam Sweep */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60 pointer-events-none"
        />
      )}

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 40, filter: 'blur(8px)' }}
        animate={inView ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 40, filter: 'blur(8px)' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Top Header Bar: Telemetry Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08] mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-gray-300 uppercase">
                STUDIO TELEMETRY &amp; ENGINEERING STANDARDS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25 shadow-sm">
              <Activity className="w-3 h-3 animate-pulse" />
              <span>ALL {totalLiveProjects} SYSTEMS OPERATIONAL</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-gray-400">
              <Radio className="w-3.5 h-3.5 text-amber-400/80" />
              <span>LOCATION:</span>
              <span className="text-amber-400 font-bold">DUBAI · ABU DHABI</span>
            </div>
          </div>
        </div>

        {/* 4-Column Proof Metrics Grid with Cursor Spotlight Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {proofMetrics.map((m, idx) => {
            const Icon = m.icon;
            const isHovered = activeTelemetryTab === idx;
            const pos = mousePositions[idx] || { x: 150, y: 100 };

            return (
              <motion.div
                key={m.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={(e) => handleCardMouseMove(e, idx)}
                onMouseEnter={() => setActiveTelemetryTab(idx)}
                onMouseLeave={() => setActiveTelemetryTab(null)}
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.01 }}
                className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md ${
                  isHovered
                    ? 'bg-[#15120E]/90 border-amber-500/50 shadow-xl shadow-amber-500/10'
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Dynamic Cursor Spotlight Radial Glow (Subtle before mouse, focused after mouse) */}
                {!shouldReduceMotion && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0.45,
                      background: isHovered
                        ? `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, ${
                            m.accent === 'emerald' ? 'rgba(16,185,129,0.18)' : 'rgba(245,158,11,0.20)'
                          }, transparent 70%)`
                        : `radial-gradient(220px circle at 50% 0%, ${
                            m.accent === 'emerald' ? 'rgba(16,185,129,0.10)' : 'rgba(245,158,11,0.10)'
                          }, transparent 75%)`,
                    }}
                  />
                )}

                {/* Accent Top Indicator Line (Soft before mouse, brilliant after mouse) */}
                <div 
                  className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-300 ${
                    isHovered 
                      ? m.accent === 'emerald' 
                        ? 'opacity-100 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]' 
                        : 'opacity-100 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                      : m.accent === 'emerald'
                        ? 'opacity-35 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent'
                        : 'opacity-35 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent'
                  }`} 
                />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className={`p-2 rounded-xl border transition-transform duration-300 ${
                    isHovered ? 'scale-110' : ''
                  } ${
                    m.accent === 'amber' 
                      ? 'bg-amber-500/10 border-amber-500/25 text-amber-400' 
                      : 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300">
                    {m.tag}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight mb-1 flex items-baseline gap-1 relative z-10">
                  <span>{m.value}</span>
                </div>

                {/* Accent Underline Bar (Design #07) */}
                <div 
                  className={`h-[2px] w-8 rounded-full mb-2 transition-all duration-500 relative z-10 ${
                    isHovered ? 'w-16 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'opacity-70'
                  } ${
                    m.accent === 'emerald'
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-300'
                      : 'bg-gradient-to-r from-amber-400 to-yellow-300'
                  }`} 
                />

                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 relative z-10">
                  {m.title}
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed font-normal relative z-10">
                  {m.detail}
                </p>

                {/* Subtle telemetry wave grid line */}
                <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-gray-400 relative z-10">
                  <span className="flex items-center gap-1 text-emerald-400/80">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    LIVE TELEMETRY
                  </span>
                  <span className="text-gray-400">NODE 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Smooth Marquee Technology Strip with Deep Bilateral Gradient Fade (Design #09) */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.015] border border-white/[0.06] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 overflow-hidden relative shadow-lg">
          <div className="flex items-center gap-2.5 text-xs font-sans font-semibold text-slate-400 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-slate-200 font-bold uppercase tracking-wider text-[11px] font-mono">
              PRODUCTION STACK:
            </span>
          </div>

          <div className="overflow-hidden relative flex-1 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] group/ticker">
            <motion.div
              animate={shouldReduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { repeat: Infinity, ease: 'linear', duration: 45 }
              }
              className="flex items-center gap-2.5 whitespace-nowrap w-max group-hover/ticker:[animation-play-state:paused]"
            >
              {[0, 1].map((copyIndex) => (
                <div 
                  key={copyIndex} 
                  aria-hidden={copyIndex > 0 ? true : undefined}
                  className="flex items-center gap-2.5 shrink-0"
                >
                  {keyTech.map((tech) => (
                    <span
                      key={`${copyIndex}-${tech}`}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-200 bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/60 hover:text-amber-200 hover:bg-amber-500/15 hover:scale-[1.04] transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_16px_rgba(245,158,11,0.25)] backdrop-blur-md"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
