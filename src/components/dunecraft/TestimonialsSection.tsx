'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { DUNECRAFT_TESTIMONIALS } from '@/data/dunecraftData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#2A1405] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            VERIFIED SAFARI REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            What Our Guests Say
          </h2>
          <p className="text-gray-300 text-base font-light">
            Real feedback from tourists, corporate teams, and UAE residents who experienced DUNECRAFT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUNECRAFT_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#1C0D02] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-500/20 mb-3" />
                <p className="text-sm text-gray-200 leading-relaxed font-light italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-bold text-white block font-sans">{t.clientName}</span>
                <span className="text-xs text-amber-300 font-mono block">{t.vehicle} • {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};