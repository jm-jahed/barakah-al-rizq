'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  TrendingUp, 
  Cpu, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { CORPORATE_DIVISIONS, CorporateDivision } from '@/data/corporateEnterpriseData';

interface CorporateDivisionsProps {
  onOpenMandateModal: (divisionName?: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp,
  Cpu,
  Zap,
  Globe
};

export const CorporateDivisions: React.FC<CorporateDivisionsProps> = ({ onOpenMandateModal }) => {
  const [activeDivisionId, setActiveDivisionId] = useState<string>('capital-advisory');
  const shouldReduceMotion = useReducedMotion();

  const activeDivision = CORPORATE_DIVISIONS.find((d) => d.id === activeDivisionId) || CORPORATE_DIVISIONS[0];
  const ActiveIcon = ICON_MAP[activeDivision.iconName] || TrendingUp;

  return (
    <section id="divisions" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>MULTI-SECTOR ENTERPRISE VERTICALS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Institutional Divisions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Core Capabilities</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Operating across four autonomous institutional pillars designed to capture high-alpha macroeconomic tailwinds across the GCC and global trade networks.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenMandateModal(activeDivision.name)}
            className="shrink-0 px-5 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Request Division Prospectus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Division Selector Tabs Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CORPORATE_DIVISIONS.map((div) => {
            const isSelected = div.id === activeDivisionId;
            const Icon = ICON_MAP[div.iconName] || TrendingUp;

            return (
              <motion.button
                key={div.id}
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.01 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => setActiveDivisionId(div.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer relative overflow-hidden backdrop-blur-md shadow-lg ${
                  isSelected
                    ? 'bg-[#121722] border-amber-400/80 shadow-[0_12px_30px_rgba(245,158,11,0.15)] -translate-y-0.5'
                    : 'bg-[#0B0E15] border-white/10 hover:border-white/20 hover:bg-[#0D121B]'
                }`}
              >
                {/* Active Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-400 opacity-100'
                    : 'opacity-0'
                }`} />

                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                    isSelected ? 'bg-amber-500 text-slate-950 font-black' : 'bg-white/5 text-slate-400 border border-white/5'
                  }`}>
                    {div.number}
                  </span>
                  <div className={`p-2 rounded-xl transition-colors ${
                    isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-white/[0.02] text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-white leading-snug">
                    {div.name}
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400/90 block mt-1">
                    {div.aum}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Status:</span>
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                    {isSelected ? 'Active Focus' : 'Explore'}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Division Interactive Workspace Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDivision.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#0C1018] border border-white/10 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-md"
          >
            {/* Top Accent Mesh */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Overview Column (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                      DIVISION {activeDivision.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {activeDivision.aum}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {activeDivision.name}
                  </h3>
                  <p className="text-base text-amber-400/90 font-medium">
                    {activeDivision.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal pt-2">
                    {activeDivision.overview}
                  </p>
                </div>

                {/* Core Focus Areas */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    Core Strategic Disciplines:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeDivision.focusAreas.map((focus, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Highlight Callout */}
                <div className="p-4 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 space-y-1 font-mono text-xs text-slate-300">
                  <span className="text-amber-400 font-bold uppercase tracking-wider block text-[10px]">
                    FLAGSHIP MANDATE HIGHLIGHT:
                  </span>
                  <p className="leading-relaxed text-slate-200">
                    {activeDivision.caseHighlight}
                  </p>
                </div>
              </div>

              {/* Right Telemetry Column (5 Cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="p-6 rounded-2xl bg-[#111724] border border-white/10 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                      DIVISION TELEMETRY
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-bold">
                      IFRS Audited
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeDivision.metrics.map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-slate-400">{m.label}:</span>
                        <span className="text-amber-300 font-bold text-sm">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenMandateModal(activeDivision.name)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer mt-4"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Engage {activeDivision.name}</span>
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
