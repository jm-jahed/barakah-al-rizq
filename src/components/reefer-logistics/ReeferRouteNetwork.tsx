'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Navigation,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Truck,
  Compass,
  Zap,
  Globe2,
  FileCheck
} from 'lucide-react';
import { GCC_ROUTES, GCCRoute } from '@/data/reeferLogisticsData';

interface ReeferRouteNetworkProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferRouteNetwork({ onOpenQuote }: ReeferRouteNetworkProps) {
  const [selectedRoute, setSelectedRoute] = useState<GCCRoute>(GCC_ROUTES[0]);

  return (
    <section id="routes" className="py-20 sm:py-28 bg-[#070b14] relative border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Globe2 className="w-3.5 h-3.5" />
            <span>CROSS-BORDER REEFER INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            DUBAI → GCC ROUTE NETWORK
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Centrally originating from <strong className="text-white">Al Aweer Wholesale Terminal</strong> & <strong className="text-white">JAFZA Cold Corridor</strong>, connecting all 6 GCC & regional trading hubs under continuous temperature control.
          </p>
        </div>

        {/* Origin Hub Announcement Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-[#0c1220] border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-sky-950/20">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-300 shrink-0 font-mono text-xl">
              🇦🇪
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-sky-400 tracking-wider uppercase">
                  CENTRAL ORIGIN DOCKS
                </span>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded font-mono">
                  PRE-COOLING VERIFIED
                </span>
              </div>
              <div className="text-lg font-bold text-white">
                DUBAI, UNITED ARAB EMIRATES
              </div>
              <div className="text-xs text-slate-400 font-mono flex flex-wrap gap-x-4 gap-y-1 mt-0.5">
                <span>📍 Hub 01: Al Aweer Central Fruit & Veg Terminal</span>
                <span>📍 Hub 02: JAFZA South Cold Logistics Docks</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenQuote({ origin: 'Al Aweer Central Terminal, Dubai' })}
              className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] text-xs font-mono text-white font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Loading At Al Aweer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onOpenQuote({ origin: 'JAFZA Cold Logistics Corridor, Dubai' })}
              className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-sky-600/20 border border-sky-500/40 hover:bg-sky-600/30 text-xs font-mono text-sky-300 font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Loading At JAFZA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Layout: Destination Cards on Left + Interactive Map HUD on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Destination Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 text-left">
              SELECT GCC DESTINATION CORRIDOR:
            </div>

            {GCC_ROUTES.map((route) => {
              const isSelected = selectedRoute.id === route.id;
              return (
                <div
                  key={route.id}
                  onClick={() => setSelectedRoute(route)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all text-left group ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-950/80 to-[#101a2e] border-sky-400 shadow-lg shadow-sky-950/40'
                      : 'bg-[#0c1220]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#0e1628]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{route.flag}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white text-base tracking-tight font-mono">
                            DUBAI → {route.country.toUpperCase()}
                          </h3>
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          Cross-Border 25-Ton Reefer
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        route.status === 'Daily Departures'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : route.status === 'High Frequency'
                          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {route.status}
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="text-slate-400">
                      ⚡ {route.availability}
                    </span>
                    <span className="text-sky-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                      View Route Specs <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Route Details Panel & Animated Vector HUD */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoute.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-gradient-to-b from-[#111927] to-[#0a0f1d] border border-sky-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left"
              >
                {/* Header with Country and Route Title */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedRoute.flag}</span>
                    <div>
                      <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                        CORRIDOR SPECIFICATION
                      </div>
                      <h3 className="text-2xl font-extrabold text-white font-mono">
                        DUBAI ⇄ {selectedRoute.country.toUpperCase()}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenQuote({ route: selectedRoute.id, destination: selectedRoute.country })}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-mono font-bold tracking-wide shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2"
                  >
                    <span>BOOK THIS ROUTE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Animated Route Flow Diagram */}
                <div className="my-6 p-4 rounded-xl bg-[#060a14] border border-white/10 relative">
                  <div className="text-[11px] font-mono text-slate-400 uppercase mb-3 flex items-center justify-between">
                    <span>ROUTE TOPOLOGY & BORDER CHECKPOINT</span>
                    <span className="text-sky-400 font-bold">~{selectedRoute.standardDistanceKm} KM</span>
                  </div>

                  {/* Flow line */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
                    {/* Origin */}
                    <div className="p-3 rounded-lg bg-black/40 border border-sky-500/30 text-left">
                      <div className="text-[10px] text-sky-400 font-mono font-bold">ORIGIN</div>
                      <div className="text-sm font-bold text-white mt-0.5">Dubai (Al Aweer / JAFZA)</div>
                      <div className="text-[11px] text-slate-400">Pre-Cooled Docks</div>
                    </div>

                    {/* Border */}
                    <div className="p-3 rounded-lg bg-black/40 border border-amber-500/30 text-left">
                      <div className="text-[10px] text-amber-400 font-mono font-bold">BORDER CHECKPOINT</div>
                      <div className="text-xs font-bold text-white mt-0.5 truncate" title={selectedRoute.borderCrossing}>
                        {selectedRoute.borderCrossing}
                      </div>
                      <div className="text-[11px] text-slate-400">Customs Clearance</div>
                    </div>

                    {/* Destination */}
                    <div className="p-3 rounded-lg bg-black/40 border border-emerald-500/30 text-left">
                      <div className="text-[10px] text-emerald-400 font-mono font-bold">FINAL DESTINATION</div>
                      <div className="text-sm font-bold text-white mt-0.5">{selectedRoute.country} Hubs</div>
                      <div className="text-[11px] text-slate-400">Unbroken Cold-Chain</div>
                    </div>
                  </div>
                </div>

                {/* Route Parameters Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                    <div className="text-[11px] text-slate-400 font-mono">PRIMARY DESTINATION HUBS</div>
                    <ul className="text-xs text-white space-y-1 mt-1 font-sans">
                      {selectedRoute.destinationHubs.map((hub, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                          <span>{hub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
                    <div className="text-[11px] text-slate-400 font-mono">TRANSIT DURATION & TELEMETRICS</div>
                    <div className="flex items-center gap-2 text-white font-mono text-sm font-bold">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>{selectedRoute.transitHoursRange}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 pt-1 border-t border-white/10">
                      <span className="text-sky-300 font-mono">Reefer Specs:</span> {selectedRoute.reeferSpecs}
                    </div>
                  </div>
                </div>

                {/* Customs & Commodities */}
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/20 text-slate-300">
                    <span className="font-mono text-sky-300 font-bold block mb-1">
                      CUSTOMS & BORDER PROTOCOL:
                    </span>
                    <p className="text-slate-300 leading-relaxed font-sans">
                      {selectedRoute.customsCorridor}. Pre-filing through FASAH / Bayan systems with zero engine shutdown at borders.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-mono text-slate-400 font-bold block mb-1.5 uppercase">
                      COMMON CARGO COMMODITIES ON THIS ROUTE:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRoute.keyCommodities.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-slate-300 text-[11px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
