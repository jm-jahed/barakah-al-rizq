'use client';

import React from 'react';
import { Box, Shield, Layers, Smile, Package, CheckCircle2, Award } from 'lucide-react';
import { PACKING_MATERIALS } from '@/data/movingData';

export const PackingSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
              PROTECTIVE PACKING STANDARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mt-4 font-serif">
              We pack like it matters.
            </h2>
            <p className="text-base text-stone-300 mt-2 max-w-xl">
              Every box is packed using commercial-grade protective materials designed to withstand transit bumps and thermal changes.
            </p>
          </div>

          {/* Metric Badge */}
          <div className="p-4 rounded-2xl bg-[#143A2A] border border-emerald-500/40 text-center font-mono self-start md:self-auto">
            <span className="text-2xl font-black text-emerald-300 block">99.8%</span>
            <span className="text-[10px] text-emerald-100 uppercase tracking-wider block">DAMAGE-FREE HANDLING SLA</span>
          </div>
        </div>

        {/* 6 Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKING_MATERIALS.map((mat) => (
            <div
              key={mat.name}
              className="p-6 rounded-3xl bg-[#292524] border border-stone-700 hover:border-[#D96B27]/40 transition-all shadow-xl flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-[#1C1917] border border-stone-700 text-[#E87A36] flex-shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 font-serif">{mat.name}</h3>
                <p className="text-xs text-stone-300 leading-relaxed">{mat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
