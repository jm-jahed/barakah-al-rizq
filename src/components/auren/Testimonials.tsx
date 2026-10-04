'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Lock } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      name: 'Private Client',
      role: 'Managing Trustee, Family Office',
      city: 'Dubai (DIFC)',
      rating: 5,
      text: 'AUREN brought a level of structure and quiet institutional discipline to our family’s wealth that we had not found elsewhere — thoughtful, discreet, and genuinely long-term.'
    },
    {
      name: 'Private Client',
      role: 'Founder & Tech Entrepreneur',
      city: 'Abu Dhabi (ADGM)',
      rating: 5,
      text: 'Following our business exit, Julian and Devon structured our multi-asset portfolio with zero corporate pressure. They think in generations, not quarters.'
    },
    {
      name: 'Private Client',
      role: 'Commercial Real Estate Landlord',
      city: 'Dubai',
      rating: 5,
      text: 'Extremely sophisticated succession and DIFC foundation guidance. Their discretion and independent judgment are unmatched in the region.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              DISCREET CLIENT REPUTATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F8F6F0] mt-4">
              Private Client Perspectives.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl bg-[#1A1D1B] border border-stone-700 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl bg-[#1A1D1B] border border-stone-700 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#1A1D1B] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans">
          <div className="flex items-center justify-between mb-6">
            <div className="flex text-[#D4AF37]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
              ))}
            </div>

            <span className="text-[10px] font-mono text-stone-400 uppercase flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#D4AF37]" />
              Name Withheld by Client Request
            </span>
          </div>

          <p className="text-xl sm:text-3xl font-serif font-bold text-white leading-relaxed mb-8 max-w-4xl">
            "{current.text}"
          </p>

          <div className="pt-6 border-t border-stone-800 flex items-center justify-between font-mono text-xs">
            <div>
              <h4 className="text-base font-bold text-white font-serif">{current.name}</h4>
              <p className="text-stone-400 text-[11px]">{current.role}</p>
            </div>

            <span className="text-[#D4AF37] font-bold px-3 py-1 rounded-full bg-[#080A09] border border-[#D4AF37]/30 text-[11px]">
              {current.city}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
