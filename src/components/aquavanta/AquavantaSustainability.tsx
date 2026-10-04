'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, CheckCircle2, Droplets, Activity, Layers, Recycle } from 'lucide-react';

export function AquavantaSustainability() {
  const pillars = [
    {
      icon: <Droplets className="w-5 h-5 text-cyan-400" />,
      title: 'Non-Revenue Water (NRW) Reduction',
      desc: 'Microscopic leak detection and automated PRV pressure management dramatically decrease physical water losses in subterranean piping.'
    },
    {
      icon: <Activity className="w-5 h-5 text-teal-400" />,
      title: 'Energy-Optimized Pumping Cycles',
      desc: 'Variable Frequency Drive (VFD) booster pumps synchronize with off-peak solar tariffs to minimize the kWh energy footprint per cubic meter.'
    },
    {
      icon: <Recycle className="w-5 h-5 text-sky-400" />,
      title: 'Circular Greywater & Recycled Grids',
      desc: 'Dual-grid infrastructure delivering treated effluent for district cooling towers and municipal landscaping, conserving potable water.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Long-Term Aquifer & Source Resilience',
      desc: 'Balancing extraction rates with artificial aquifer recharge to preserve sovereign water reserves for future generations.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#02050E] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-3">
            <Leaf className="w-3.5 h-3.5" />
            <span>RESOURCE STEWARDSHIP & CLIMATE RESILIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Protecting More Than Supply.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            In hyper-arid climates, precision distribution is an ecological necessity. AQUAVANTA eliminates physical network losses and optimizes pumping energy through intelligent automation.
          </p>
        </div>

        {/* 4 Sustainability Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-teal-500/40 transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-teal-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sustainable by Design</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
