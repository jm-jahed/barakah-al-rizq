'use client';

import React from 'react';
import { Truck, Scale, Maximize2, ThermometerSnowflake, Globe2, Radio } from 'lucide-react';
import { REEFER_STATS } from '@/data/reeferLogisticsData';

export function ReeferTrustStrip() {
  const icons = [
    Truck,
    Scale,
    Maximize2,
    ThermometerSnowflake,
    Globe2,
    Radio
  ];

  return (
    <section className="bg-[#050811] border-y border-white/10 relative overflow-hidden z-20 py-6 sm:py-8">
      {/* Background glow strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {REEFER_STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.highlight}
                className={`pt-4 sm:pt-0 sm:px-4 flex flex-col justify-between items-start text-left group hover:bg-white/[0.02] p-2 rounded-lg transition-colors`}
              >
                <div className="flex items-center gap-2 mb-2 text-sky-400">
                  <Icon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    {stat.label}
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {stat.value}
                </div>

                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
