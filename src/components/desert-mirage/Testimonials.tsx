'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/desertMirageData';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Quote className="w-3.5 h-3.5" />
            <span>GUEST REFLECTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Voices From the Horizon
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Illustrative reflections from international guests and corporate leaders who experienced the quiet luxury of Desert Mirage.
          </p>
        </div>

        {/* 3 Large Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#140F0C] to-[#0A0806] border border-[#C9A265]/20 flex flex-col justify-between gap-6 hover:border-[#C9A265]/40 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#C9A265]/40" />
                <p className="text-sm text-stone-200 font-serif italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 space-y-1">
                <div className="text-sm font-serif text-white font-bold">{t.author}</div>
                <div className="text-xs font-mono text-[#C9A265]">{t.origin}</div>
                <div className="text-[10px] font-mono text-stone-500">{t.experience} · {t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
