'use client';

import React from 'react';
import { ShieldCheck, Award, Clock, Truck, Layers, Coins } from 'lucide-react';
import { BARAKAH_WHY_US } from '@/data/barakahData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="whyus" className="py-24 bg-[#F8FAF8] text-[#111827] relative font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#063D24] font-mono text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            THE BARAKAH AL RIZQ ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063D24] tracking-tight">
            Why Leading UAE Buyers Trust Us
          </h2>
          <p className="text-gray-600 text-base font-light">
            Uncompromising quality standards, competitive wholesale rates, and guaranteed daily delivery SLAs across all Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BARAKAH_WHY_US.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-md space-y-4 hover:border-emerald-400 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#063D24] font-bold text-xl group-hover:scale-110 transition-transform">
                ✓
              </div>

              <h3 className="text-xl font-bold text-[#063D24] group-hover:text-amber-600 transition-colors font-sans">
                {item.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};