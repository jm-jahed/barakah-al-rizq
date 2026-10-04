'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  Globe2, 
  Lock, 
  FileCheck2, 
  ChevronRight,
  Landmark,
  Scale
} from 'lucide-react';

interface CorporateHeroProps {
  onOpenMandateModal: (divisionContext?: string) => void;
}

export const CorporateHero: React.FC<CorporateHeroProps> = ({ onOpenMandateModal }) => {
  const shouldReduceMotion = useReducedMotion();

  const LIVE_TICKER = [
    { label: 'AUM & ADVISORY', value: 'AED 18.5B+' },
    { label: 'JURISDICTION', value: 'DIFC & ADGM' },
    { label: 'COMPLIANCE', value: '100% REGULATORY' },
    { label: 'SOVEREIGN RATING', value: 'AA+ TIER-1' },
    { label: 'AVERAGE IRR', value: '22.4% RETURN' },
    { label: 'UAE NET-ZERO 2050', value: 'COMMITTED' }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 bg-[#07090E] flex flex-col justify-between overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Architectural Gradient Mesh & Subtle Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-amber-500/[0.04] blur-[180px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[450px] bg-emerald-500/[0.03] blur-[170px] rounded-full" />
        
        {/* Subtle Architectural Wire Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto py-10">
        
        {/* Top Sovereign Accreditation Pill */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-amber-500/25 backdrop-blur-md mb-8 shadow-xl"
        >
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-amber-300 tracking-wider uppercase">
            SOVEREIGN-GRADE ENTERPRISE HOLDING & ADVISORY
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-xs font-mono text-slate-400">
            DIFC Gate Tower 4 & ADGM Square
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Sovereign Capital</span> & Multi-Sector Enterprise Growth.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            Vanguard Holdings is an institutional enterprise holding and advisory group operating under DIFC and ADGM governance. We deploy strategic capital, architect cross-border M&A mandates, build resilient sovereign AI infrastructure, and accelerate sustainable energy transition assets across the GCC and global corridors.
          </p>
        </motion.div>

        {/* Primary Action Buttons & Trust Indicators */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl"
        >
          <button
            type="button"
            onClick={() => onOpenMandateModal()}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-sm font-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Initiate Enterprise Mandate</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#mandate-calculator"
            className="px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-mono text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Mandate Estimator</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </a>
        </motion.div>

        {/* 3 Executive Trust Pillars */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/10"
        >
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Sovereign Governance</h3>
              <p className="text-xs text-slate-400 mt-0.5">DIFC DFSA & ADGM FSRA institutional common law compliance.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Fiduciary Confidentiality</h3>
              <p className="text-xs text-slate-400 mt-0.5">Hermetic institutional Chinese walls and NDA-protected execution.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-300 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">AED 18.5B+ Track Record</h3>
              <p className="text-xs text-slate-400 mt-0.5">Audited cross-border mandates across GCC, UK & Asia.</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Live Financial Telemetry Ticker Strip */}
      <div className="w-full bg-[#040609] border-t border-b border-white/10 py-3 overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {LIVE_TICKER.concat(LIVE_TICKER).map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-mono shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-slate-400 uppercase">{item.label}:</span>
              <span className="text-white font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
