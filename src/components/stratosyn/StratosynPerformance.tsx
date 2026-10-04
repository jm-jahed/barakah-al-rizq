'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Eye, ShieldCheck, CheckCircle, Activity, TrendingUp, Cpu } from 'lucide-react';
import { PERFORMANCE_PILLARS } from '@/data/stratosynData';

export function StratosynPerformance() {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Elastic Capacity':
        return <Layers className="w-6 h-6 text-sky-400" />;
      case 'Global Distribution':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Real-Time Visibility':
        return <Eye className="w-6 h-6 text-indigo-400" />;
      case 'Automated Recovery':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Activity className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060D] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PERFORMANCE & RELIABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built for the Workload Ahead.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Modern distributed platforms cannot afford single points of failure. STRATOSYN combines elastic capacity, continental geographic distribution, continuous visibility, and autonomous healing.
          </p>
        </div>

        {/* 4 Performance Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERFORMANCE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(pillar.title)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Engineered for Scale</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
