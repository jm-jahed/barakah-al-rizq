'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  ShieldCheck,
  Globe,
  Activity,
  ArrowRight,
  Radar,
  Calculator,
  Search,
  CheckCircle2,
  Zap,
  Clock,
  Sparkles,
  Plane,
  Ship,
  Layers
} from 'lucide-react';
import { LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface LogisticsHeroProps {
  onOpenQuoteModal: () => void;
  onOpenTrackingModal: () => void;
  onExploreCatalog: () => void;
}

export const LogisticsHero: React.FC<LogisticsHeroProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal,
  onExploreCatalog,
}) => {
  return (
    <section className="relative min-h-[95vh] pt-36 pb-20 bg-[#070B14] overflow-hidden flex items-center">
      {/* Dynamic Cyber Radar Background Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:36px_36px] opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-blue-600/15 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Cyber Circuit Animated Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -100 250 Q 300 120 700 380 T 1600 220"
            fill="none"
            stroke="url(#hero-gradient-line)"
            strokeWidth="2.5"
            strokeDasharray="10 10"
          />
          <path
            d="M 100 600 Q 500 450 900 650 T 1700 500"
            fill="none"
            stroke="url(#hero-gradient-line-2)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <defs>
            <linearGradient id="hero-gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="hero-gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-Trust Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-bold font-mono text-cyan-300 uppercase tracking-widest">
                UAE & GCC NEXT-GEN LOGISTICS ENGINE • 200+ SOLUTIONS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06]"
            >
              Moving What Matters.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                With Sub-Second
              </span>{' '}
              Precision.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              From <strong className="text-white font-semibold">60-minute intra-Dubai express couriers</strong> and <strong className="text-white font-semibold">GDP-certified bio-pharma cold chains</strong> to <strong className="text-white font-semibold">40ft cross-border overland FTL to Riyadh</strong> and <strong className="text-white font-semibold">Boeing 777F SkyCargo charters</strong> from DWC.
            </motion.p>

            {/* Dual CTAs & Secondary Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm flex items-center gap-3 transition-all shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Freight Rate (AED)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTrackingModal}
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-cyan-500/40 text-cyan-300 font-bold text-sm flex items-center gap-2.5 transition-all shadow-lg hover:border-cyan-400"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                <span>Track Live Consignment</span>
              </button>

              <button
                onClick={onExploreCatalog}
                className="px-5 py-4 rounded-xl text-slate-400 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
              >
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Browse 200+ Unique Products</span>
              </button>
            </motion.div>

            {/* Verified Operational Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80"
            >
              <div>
                <div className="text-2xl font-black text-white font-mono">{LOGISTICS_BRAND_INFO.stats.deliveriesCompleted}</div>
                <div className="text-[11px] text-slate-400 font-medium">Consignments Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400 font-mono">{LOGISTICS_BRAND_INFO.stats.onTimeRate}</div>
                <div className="text-[11px] text-slate-400 font-medium">Verified On-Time SLA</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400 font-mono">{LOGISTICS_BRAND_INFO.stats.fleetSize}</div>
                <div className="text-[11px] text-slate-400 font-medium">Connected Road & Air Fleet</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400 font-mono">100% AED</div>
                <div className="text-[11px] text-slate-400 font-medium">Transparent UAE Rates</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Live Command HUD */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070B14] border border-cyan-500/30 p-6 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl"
            >
              {/* Top HUD Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    UAE LIVE DISPATCH RADAR
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-cyan-300">
                  AUTO-SYNC: 1.2s
                </span>
              </div>

              {/* Active Route Telemetry Widget */}
              <div className="my-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">ACTIVE PRIORITY FLIGHT:</span>
                  <span className="text-cyan-400 font-bold">EK-CARGO #9042</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="text-xs text-slate-400">ORIGIN</div>
                    <div className="font-bold text-white">DXB Cargo Mega Terminal</div>
                  </div>
                  <div className="flex flex-col items-center px-4">
                    <span className="text-[10px] font-mono text-emerald-400">IN FLIGHT • 4.2h</span>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 my-1 relative">
                      <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 right-4 shadow-sm shadow-cyan-400" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">DESTINATION</div>
                    <div className="font-bold text-white">LHR London Gateway</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
                  <div className="bg-slate-900/60 p-2 rounded">
                    <span className="text-slate-500 block">CARGO:</span>
                    <span className="text-slate-200 font-semibold">18.4 Tons BioPharma</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded">
                    <span className="text-slate-500 block">TEMP LOG:</span>
                    <span className="text-emerald-400 font-semibold">+3.8°C (±0.2)</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded">
                    <span className="text-slate-500 block">SPEED:</span>
                    <span className="text-cyan-300 font-semibold">890 km/h</span>
                  </div>
                </div>
              </div>

              {/* 3 Quick UAE Corridor Tickers */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="font-semibold text-white">Dubai South ➔ Riyadh FTL</div>
                      <div className="text-[10px] text-slate-400">Batha Border Pre-Cleared • 40ft Articulated</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">AED 5,400</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-semibold text-white">DIFC ➔ Abu Dhabi ADGM Express</div>
                      <div className="text-[10px] text-slate-400">Sub-2.5 Hour Security Escort • Legal Notary</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 font-bold">AED 380</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-semibold text-white">Ajman Pharma ➔ Mediclinic City</div>
                      <div className="text-[10px] text-slate-400">Deep Frozen -20°C Bio-Reefer • GPS Tamper Seal</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-blue-300 font-bold">AED 290</span>
                </div>
              </div>

              {/* Quick Actions Footer inside card */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 9001 & GDP Certified</span>
                </span>
                <button
                  onClick={onOpenTrackingModal}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                >
                  <span>Open Tracking Drawer</span>
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
