'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  ShieldCheck,
  Star,
  ArrowRight,
  Calculator,
  Compass,
  CheckCircle2,
  Sparkles,
  Phone,
  Home,
  Building,
  Globe
} from 'lucide-react';
import { NESTMOVE_BRAND } from '@/data/movingData';

interface MovingHeroProps {
  onOpenQuoteModal: () => void;
  onScrollToCalculator: () => void;
  onScrollToPropertyTypes: () => void;
}

export const MovingHero: React.FC<MovingHeroProps> = ({
  onOpenQuoteModal,
  onScrollToCalculator,
  onScrollToPropertyTypes
}) => {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 bg-[#090807] overflow-hidden flex items-center">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#2A2016_1px,transparent_1px)] [background-size:36px_36px] opacity-35" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/15 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-950/60 border border-amber-500/30 backdrop-blur-md"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-bold font-mono text-amber-300 uppercase tracking-widest">
                UAE’S #1 LUXURY RELOCATION & WHITE-GLOVE MOVING ENGINE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06]"
            >
              Move Your Life.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Without A Single
              </span>{' '}
              Scratch.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              From <strong className="text-white font-semibold">Palm Jumeirah luxury penthouses</strong> and <strong className="text-white font-semibold">Emirates Hills mansions</strong> to <strong className="text-white font-semibold">DIFC financial offices</strong> and <strong className="text-white font-semibold">overseas container shipping</strong>. Handled with master carpentry, bespoke art crating, and complete peace of mind.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-black font-black text-sm flex items-center gap-3 transition-all shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Instant Move Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-amber-500/40 text-amber-300 font-bold text-sm flex items-center gap-2.5 transition-all shadow-lg hover:border-amber-400"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Volume & Rate Calculator</span>
              </button>

              <button
                onClick={onScrollToPropertyTypes}
                className="px-4 py-4 rounded-xl text-slate-400 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
              >
                <span>Browse Property Types</span>
              </button>
            </motion.div>

            {/* Verified UAE Moving Proof Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80"
            >
              <div>
                <div className="text-2xl font-black text-white font-mono">{NESTMOVE_BRAND.metrics.movesCompleted}</div>
                <div className="text-[11px] text-slate-400 font-medium">Relocations Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400 font-mono">{NESTMOVE_BRAND.metrics.damageFreeRate}</div>
                <div className="text-[11px] text-slate-400 font-medium">Damage-Free Record</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400 font-mono">{NESTMOVE_BRAND.metrics.rating} ★</div>
                <div className="text-[11px] text-slate-400 font-medium">Verified Client CSAT</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400 font-mono">100% AED</div>
                <div className="text-[11px] text-slate-400 font-medium">Binding Transparent Rates</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Moving Day Live VIP Dashboard Preview */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl bg-gradient-to-b from-[#14100C]/90 to-[#0A0806] border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-950/60 backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    VIP RELOCATION TELEMETRY
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                  MOVE #NM-84920
                </span>
              </div>

              {/* Active Route Box */}
              <div className="my-5 p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">ACTIVE CLIENT:</span>
                  <span className="text-amber-400 font-bold">H.E. Tariq Al-Mansoori</span>
                </div>

                <div className="flex items-center justify-between text-sm pt-1">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">ORIGIN</div>
                    <div className="font-bold text-white text-xs sm:text-sm">Downtown Boulevard Point</div>
                  </div>
                  <div className="flex flex-col items-center px-2">
                    <span className="text-[9px] font-mono text-emerald-400">IN PROGRESS • 85%</span>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-amber-500 via-emerald-400 to-amber-500 my-1 relative">
                      <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 right-3 shadow-sm shadow-amber-400" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">DESTINATION</div>
                    <div className="font-bold text-cyan-300 text-xs sm:text-sm">Saadiyat Beach Villa, AUH</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
                  <div className="bg-slate-900/60 p-2 rounded">
                    <span className="text-slate-500 block text-[9px]">TRUCKS:</span>
                    <span className="text-slate-200 font-semibold">2x 24ft Vans</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded">
                    <span className="text-slate-500 block text-[9px]">CREW SIZE:</span>
                    <span className="text-emerald-400 font-semibold">8 Movers + 2 Carp</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded">
                    <span className="text-slate-500 block text-[9px]">ART CRATES:</span>
                    <span className="text-amber-300 font-semibold">6 Custom Crates</span>
                  </div>
                </div>
              </div>

              {/* Real-time Checklist milestones */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Emaar Sakani & Aldar Gate Permit Cleared</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">100% Pass</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Italian Wardrobe Disassembly & Re-Erection</span>
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 font-bold">In Progress</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>85" TV Wall Mounting & Laser Leveling</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300 font-bold">Completed</span>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AED 1,000,000 Transit Insurance</span>
                </span>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                >
                  <span>Book Similar Move</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
