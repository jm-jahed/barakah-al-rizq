'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  TrendingUp, 
  CheckCircle2, 
  Award, 
  Sparkles,
  Plane
} from 'lucide-react';
import { TRAVEL_METRICS } from '@/data/travelData';

export const TravelMetrics: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-[#090C12] border-b border-white/10 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>VERIFIED PERFORMANCE & CLIENT FIDELITY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Gold Standard in Bespoke Gulf Travel.
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400 max-w-sm">
            Audited luxury travel volume and VIP client retention across Dubai, Abu Dhabi, and international private concierge operations.
          </div>
        </div>

        {/* 4 Proof Statistic HUD Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAVEL_METRICS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
              className="p-6 rounded-3xl bg-[#0F141E] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl group relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase">
                  {stat.badge}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:text-amber-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed font-mono">
                  {stat.subtext}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>UAE Luxury Travel Accredited</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
