'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Cross, Building2, Palmtree, Factory, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CRITICAL_INFRA_SECTORS } from '@/data/aquavantaData';

export function AquavantaCriticalInfra() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'healthcare':
        return <Cross className="w-5 h-5 text-cyan-400" />;
      case 'commercial':
        return <Building2 className="w-5 h-5 text-sky-400" />;
      case 'hospitality':
        return <Palmtree className="w-5 h-5 text-teal-400" />;
      case 'industrial':
        return <Factory className="w-5 h-5 text-indigo-400" />;
      default:
        return <Building2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#02050E] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>CRITICAL INFRASTRUCTURE PROTECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            When Water Stops, Everything Stops.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Modern cities cannot survive water interruption. Dual-redundant ring mains, automated isolation valves, and emergency reservoir feeds safeguard critical societal assets.
          </p>
        </div>

        {/* 4 Critical Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRITICAL_INFRA_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-4">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                    {sector.priorityLevel}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(sector.id)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {sector.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mb-2">
                  {sector.tagline}
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {sector.description}
                </p>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-300">
                  <span className="text-slate-400 block text-[10px] uppercase mb-0.5">Failover Protocol:</span>
                  {sector.failoverMechanism}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-teal-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{sector.resilienceStandard}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
