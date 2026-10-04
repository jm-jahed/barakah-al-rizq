'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/movingData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
              REAL CLIENT REVIEWS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mt-4 font-serif">
              Loved by families and businesses.
            </h2>
            <p className="text-base text-stone-300 mt-2">
              Read real relocation stories from families, expats, and enterprise leaders.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#292524] border border-stone-700 text-white hover:border-[#D96B27] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#292524] border border-stone-700 text-white hover:border-[#D96B27] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#292524] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative">
          <Quote className="w-16 h-16 text-[#D96B27]/20 absolute top-8 right-8 pointer-events-none" />

          <div className="flex items-center gap-1 text-amber-400 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          <p className="text-lg sm:text-2xl font-medium text-white leading-relaxed mb-8 max-w-4xl font-serif">
            "{current.quote}"
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-stone-700">
            <img
              src={current.avatar}
              alt={current.author}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#D96B27]"
            />
            <div>
              <h4 className="text-base font-extrabold text-white">{current.author}</h4>
              <p className="text-xs text-[#E87A36] font-mono">{current.moveType}</p>
              <span className="text-[10px] text-stone-400 font-mono">📍 {current.route}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
