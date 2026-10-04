'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      name: 'Sheikha Al-Maktoum',
      role: 'Private Client',
      city: 'Downtown Dubai',
      rating: 5,
      text: 'The Nida fabric quality and gold thread embroidery on the Ramadan Couture Abaya are beyond stunning. Same-day delivery in Dubai arrived within 4 hours.'
    },
    {
      name: 'Dr. Reem Al-Nuaimi',
      role: 'Loyal Client',
      city: 'Abu Dhabi',
      rating: 5,
      text: 'NOURA is my go-to boutique for Eid kaftans and everyday minimal abayas. The custom length tailoring fits perfectly with high heels.'
    },
    {
      name: 'Fatima Al-Qassimi',
      role: 'Fashion Collector',
      city: 'Sharjah',
      rating: 5,
      text: 'The liquid satin drape is so weightless in the Dubai heat. Having the matching Sheila included makes the luxury experience complete.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30">
              UAE CLIENT REPUTATION & REVIEWS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              Loved in the UAE.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl bg-[#121212] border border-stone-700 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl bg-[#121212] border border-stone-700 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#121212] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans">
          <div className="flex text-[#C5A059] mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C5A059]" />
            ))}
          </div>

          <p className="text-xl sm:text-3xl font-serif font-bold text-white leading-relaxed mb-8 max-w-4xl">
            "{current.text}"
          </p>

          <div className="pt-6 border-t border-stone-800 flex items-center justify-between font-mono text-xs">
            <div>
              <h4 className="text-base font-bold text-white font-serif">{current.name}</h4>
              <p className="text-stone-400 text-[11px]">{current.role}</p>
            </div>

            <span className="text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#C5A059]/30 text-[11px]">
              {current.city}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
