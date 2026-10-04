'use client';

import React from 'react';
import {
  Truck,
  Globe2,
  ThermometerSnowflake,
  Radio,
  ShieldCheck,
  Layers,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US_PILLARS } from '@/data/reeferLogisticsData';

interface ReeferWhyChooseUsProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferWhyChooseUs({ onOpenQuote }: ReeferWhyChooseUsProps) {
  const icons = [
    Truck,
    Globe2,
    ThermometerSnowflake,
    Radio,
    ShieldCheck,
    Layers
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#070b14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OPERATIONAL TRUST & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            WHY BUSINESSES CHOOSE US
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Engineered from the ground up for food importers, FMCG conglomerates, and cold-chain distributors requiring zero compromises.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-sky-500/40 hover:bg-[#0f182c] transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-2xl font-extrabold text-white block">
                        {pillar.stat}
                      </span>
                      <span className="text-[10px] text-sky-400 uppercase font-bold">
                        {pillar.unit}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified B2B Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
