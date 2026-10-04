'use client';

import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { NESTMOVE_BRAND } from '@/data/movingData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-10 bg-[#292524] border-y border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center">
          
          <div className="p-3">
            <div className="flex justify-center text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-white block">4.9 / 5.0 Rating</span>
            <span className="text-[10px] text-stone-400 font-mono">Over 3,400+ Reviews</span>
          </div>

          <div className="p-3 border-l border-stone-800">
            <span className="text-xl font-black text-emerald-400 font-mono block">12,000+</span>
            <span className="text-xs font-bold text-white block">Successful Moves</span>
            <span className="text-[10px] text-stone-400 font-mono">Dubai & Abu Dhabi</span>
          </div>

          <div className="p-3 border-l border-stone-800">
            <span className="text-xl font-black text-[#E87A36] font-mono block">100%</span>
            <span className="text-xs font-bold text-white block">Care Guarantee</span>
            <span className="text-[10px] text-stone-400 font-mono">Zero Damage SLA</span>
          </div>

          <div className="p-3 border-l border-stone-800">
            <span className="text-xl font-black text-white font-mono block">15+ Years</span>
            <span className="text-xs font-bold text-white block">UAE Experience</span>
            <span className="text-[10px] text-stone-400 font-mono">Since 2011</span>
          </div>

          <div className="p-3 border-l border-stone-800 col-span-2 md:col-span-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Fully Insured Fleet</span>
            </div>
            <span className="text-[10px] text-stone-400 block mt-1 font-mono">Transit Cover Included</span>
          </div>

        </div>
      </div>
    </section>
  );
};
