'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Plane, 
  Clock, 
  Users, 
  ShieldCheck, 
  Crown, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Compass
} from 'lucide-react';
import { PRIVATE_JET_FLEET, PrivateJetOption } from '@/data/travelData';

interface TravelBudgetCalculatorProps {
  onOpenInquiry: (aviationContext?: string) => void;
}

const POPULAR_ROUTES = [
  { from: 'Dubai (DWC)', to: 'Male, Maldives (MLE)', hours: 4.2, distance: '3,050 km' },
  { from: 'Dubai (DWC)', to: 'Zurich, Switzerland (ZRH)', hours: 6.8, distance: '4,800 km' },
  { from: 'Dubai (DWC)', to: 'Nice / Monaco (NCE)', hours: 7.1, distance: '5,000 km' },
  { from: 'Dubai (DWC)', to: 'Tokyo Haneda (HND)', hours: 9.5, distance: '7,900 km' },
  { from: 'Abu Dhabi (AZI)', to: 'London Luton (LTN)', hours: 7.5, distance: '5,500 km' }
];

export const TravelBudgetCalculator: React.FC<TravelBudgetCalculatorProps> = ({ onOpenInquiry }) => {
  const [selectedFleetIdx, setSelectedFleetIdx] = useState<number>(1);
  const [selectedRouteIdx, setSelectedRouteIdx] = useState<number>(0);
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(true);
  const shouldReduceMotion = useReducedMotion();

  const currentAircraft = PRIVATE_JET_FLEET[selectedFleetIdx] || PRIVATE_JET_FLEET[0];
  const currentRoute = POPULAR_ROUTES[selectedRouteIdx] || POPULAR_ROUTES[0];

  const flightHours = isRoundTrip ? currentRoute.hours * 2 : currentRoute.hours;
  const estimatedCharterCostAED = Math.round(flightHours * currentAircraft.hourlyRateAED);

  return (
    <section id="aviation" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-sky-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 font-mono text-xs uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-sky-400" />
              <span>PRIVATE AVIATION DESK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Private Jet <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-200 to-yellow-400">Charter Estimator</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Calculate instant charter estimates departing directly from Al Maktoum Executive Terminal (DWC) and Al Bateen (AUH).
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">Direct Tarmac Boarding</span>
            <span className="text-[11px] text-slate-500">Zero Security Delays • Dedicated Crew</span>
          </div>
        </div>

        {/* 3 Aircraft Fleet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRIVATE_JET_FLEET.map((jet, idx) => {
            const isSelected = idx === selectedFleetIdx;
            return (
              <motion.div
                key={jet.model}
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                onClick={() => setSelectedFleetIdx(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer relative overflow-hidden backdrop-blur-md shadow-xl ${
                  isSelected
                    ? 'bg-[#121722] border-sky-400 shadow-[0_12px_30px_rgba(56,189,248,0.15)] -translate-y-0.5'
                    : 'bg-[#0F141E] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Shimmer */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                  isSelected ? 'bg-gradient-to-r from-sky-400 via-amber-300 to-sky-400' : 'opacity-0'
                }`} />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 uppercase">
                      {jet.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      AED {jet.hourlyRateAED.toLocaleString()} / hr
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {jet.model}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-slate-500" /> {jet.pax}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-mono">
                    <span className="text-slate-500">Range:</span> {jet.range}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-slate-300">
                    {jet.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono">
                        <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-center text-xs font-mono font-bold text-sky-300">
                  {isSelected ? '✓ Selected Aircraft' : 'Select Aircraft'}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Route Selector & Quote Panel */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0F141E] border border-white/10 space-y-6 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                Select Popular Direct Corridors:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {POPULAR_ROUTES.map((route, i) => {
                  const isSelected = i === selectedRouteIdx;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedRouteIdx(i)}
                      className={`p-3 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500/15 border-sky-400 text-white font-bold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-white font-bold">{route.from} → {route.to}</div>
                      <div className="text-[10px] text-sky-300 mt-0.5">{route.hours}h Flight Time • {route.distance}</div>
                    </button>
                  );
                })}
              </div>

              {/* Trip Type Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsRoundTrip(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    !isRoundTrip ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  One-Way Flight
                </button>
                <button
                  type="button"
                  onClick={() => setIsRoundTrip(true)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    isRoundTrip ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  Round-Trip Charter
                </button>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-sky-500/30 space-y-4 text-center sm:text-left">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Estimated Charter Investment:
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-amber-300">
                AED {estimatedCharterCostAED.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                Includes private aircraft positioning, VIP lounge at DWC/AUH, bespoke gourmet catering, flight crew, and fuel surcharge.
              </p>

              <button
                type="button"
                onClick={() => onOpenInquiry(`Private Jet Charter: ${currentAircraft.model} on ${currentRoute.from} to ${currentRoute.to} (${isRoundTrip ? 'Round-Trip' : 'One-Way'}, Estimated AED ${estimatedCharterCostAED.toLocaleString()})`)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-amber-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <span>Request Private Flight Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
