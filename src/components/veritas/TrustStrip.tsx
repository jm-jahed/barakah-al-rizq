'use client';

import React from 'react';
import { VERITAS_LOGOS } from '@/data/veritasData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-8 bg-[#0F1C3F] border-y border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[11px] font-mono font-bold text-[#C5A059] uppercase tracking-widest whitespace-nowrap">
            TRUSTED CORPORATE LEGAL ADVISORS TO:
          </span>

          <div className="flex items-center gap-8 sm:gap-12 flex-wrap justify-center font-mono text-sm font-black text-stone-400">
            {VERITAS_LOGOS.map((logo) => (
              <span
                key={logo}
                className="hover:text-white transition-colors cursor-default tracking-widest opacity-80 hover:opacity-100"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
