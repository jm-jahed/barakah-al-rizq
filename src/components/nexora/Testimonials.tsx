'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      name: 'Omar Rahman',
      role: 'CEO & Founder, VANTA Retail Group',
      city: 'Dubai',
      rating: 5,
      text: 'NEXORA gave us clarity from day one. They helped us structure the UAE operation properly into a lean holding model instead of simply selling us a setup package.'
    },
    {
      name: 'Dr. Mariam Al-Hassan',
      role: 'Managing Director, Apex Health Group',
      city: 'Abu Dhabi',
      rating: 5,
      text: 'Securing DHA medical facility licenses and corporate banking approval used to take 6+ months. NEXORA executed our 3 healthcare centers in under 45 days.'
    },
    {
      name: 'Marcus Vance',
      role: 'Managing Partner, Vance Capital European Fund',
      city: 'DIFC, Dubai',
      rating: 5,
      text: 'Partner-level advisory at its finest. Their ADGM foundation structuring and UAE Corporate Tax classification work was bulletproof.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              EXECUTIVE TESTIMONIALS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              What UAE Leaders Say.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl bg-[#1A1D24] border border-stone-700 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl bg-[#1A1D24] border border-stone-700 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#1A1D24] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans">
          <div className="flex text-[#D4AF37] mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
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

            <span className="text-[#D4AF37] font-bold px-3 py-1 rounded-full bg-[#121417] border border-[#D4AF37]/30 text-[11px]">
              {current.city}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
