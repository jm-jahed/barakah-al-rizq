'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GUEST_REVIEWS } from '@/data/hotelData';

export const GuestReviews: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % GUEST_REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + GUEST_REVIEWS.length) % GUEST_REVIEWS.length);
  };

  const current = GUEST_REVIEWS[currentIdx];

  return (
    <section className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              GUEST REFLECTIONS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
              Stories from The House.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2">
              Unfiltered reflections from our international travelers.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#29221D] border border-stone-800 text-white hover:border-[#C5A059] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#29221D] border border-stone-800 text-white hover:border-[#C5A059] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#29221D] rounded-3xl border border-stone-800 p-8 sm:p-14 shadow-2xl relative">
          <Quote className="w-20 h-20 text-[#C5A059]/10 absolute top-8 right-8 pointer-events-none" />

          <div className="flex text-amber-400 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          <p className="text-xl sm:text-3xl font-serif text-[#F7F4EE] leading-relaxed mb-8 max-w-4xl font-light italic">
            "{current.quote}"
          </p>

          <div className="pt-6 border-t border-stone-800 flex items-center justify-between font-mono text-xs">
            <div>
              <h4 className="text-base font-serif font-bold text-white">{current.guestName}</h4>
              <p className="text-stone-400 text-[11px]">{current.location}</p>
            </div>

            <div className="text-right">
              <span className="text-[#C5A059] font-bold block">{current.stayType}</span>
              <span className="text-stone-500 text-[10px]">{current.date}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
