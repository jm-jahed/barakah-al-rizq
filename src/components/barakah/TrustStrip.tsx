'use client';

import React from 'react';
import { BARAKAH_BADGES } from '@/data/barakahData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-10 bg-white border-y border-emerald-100 text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-[#063D24] font-bold uppercase tracking-widest mb-6">
          TRUSTED WHOLESALE FOODSTUFF SUPPLY CHAIN PARTNER IN THE UAE &amp; GCC
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {BARAKAH_BADGES.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-100 flex flex-col items-center justify-center text-center hover:border-emerald-300 transition-all shadow-sm group"
            >
              <span className="text-xs font-bold text-[#063D24] group-hover:text-amber-700 transition-colors font-sans tracking-tight">
                {b.name}
              </span>
              <span className="text-[10px] text-gray-500 font-mono font-medium mt-1">
                {b.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};