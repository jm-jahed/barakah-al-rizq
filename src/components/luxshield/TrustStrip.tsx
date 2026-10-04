'use client';

import React from 'react';
import { LUXSHIELD_BADGES } from '@/data/luxshieldData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-10 bg-[#14161A] border-y border-blue-500/15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
          STUDIO-GRADE AUTOMOTIVE PROTECTION TECHNOLOGIES
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {LUXSHIELD_BADGES.map((b, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-all group"
            >
              <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors font-sans tracking-tight">
                {b.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono font-medium mt-0.5">
                {b.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};