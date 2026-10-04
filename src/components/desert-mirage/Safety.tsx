'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Radio, 
  Car, 
  Compass, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { SAFETY_STANDARDS } from '@/data/desertMirageData';

export const Safety: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#090706] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UNCOMPROMISED SAFETY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Engineered for the Desert
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Luxury means peace of mind. Our expedition fleet, master navigators, and remote communications operate under the highest international off-road and medical safety protocols.
          </p>
        </div>

        {/* 4 Technical Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFETY_STANDARDS.map((std, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#140F0C] to-[#0A0806] border border-[#C9A265]/20 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#090706] border border-[#C9A265]/30 text-[#C9A265]">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono text-[#C9A265] uppercase">
                  {std.subtitle}
                </span>
              </div>

              <h3 className="text-base font-serif text-white">{std.title}</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
