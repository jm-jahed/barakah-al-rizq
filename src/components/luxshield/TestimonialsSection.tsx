'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { LUXSHIELD_TESTIMONIALS } from '@/data/luxshieldData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#14161A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            VERIFIED CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            What Luxury Car Owners Say
          </h2>
          <p className="text-gray-300 text-base font-light">
            Real feedback from supercar owners and luxury car enthusiasts in Dubai and Abu Dhabi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LUXSHIELD_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0B0C0E] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-500/30 mb-3" />
                <p className="text-sm text-gray-200 leading-relaxed font-light italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-bold text-white block">{t.clientName}</span>
                <span className="text-xs text-blue-400 font-mono block">{t.vehicle} • {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};