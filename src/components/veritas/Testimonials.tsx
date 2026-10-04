'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      name: 'Khalid Mansoor',
      role: 'CFO, Meridian Capital Holdings',
      city: 'Dubai (DIFC)',
      rating: 5,
      text: 'VERITAS LEGAL restructured our entire holding setup with a level of precision we had not experienced with previous counsel. Their understanding of DIFC Common Law saved our board significant capital.'
    },
    {
      name: 'Dr. Tariq Al-Sayed',
      role: 'Chairman, Al-Sayed Infrastructure Group',
      city: 'Abu Dhabi',
      rating: 5,
      text: 'When our joint venture encountered a AED 45M dispute, Julian Thorne and the dispute team defended our position with absolute authority. Highly recommended corporate counsel.'
    },
    {
      name: 'Elena Rostova',
      role: 'Managing Director, Vantage Tech GCC',
      city: 'ADGM, Abu Dhabi',
      rating: 5,
      text: 'Bespoke contract drafting and IP protection for our fintech sandbox licensing. VERITAS delivers tier-one legal counsel with exceptional responsiveness.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              CLIENT TESTIMONIALS & REPUTATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF8F5] mt-4">
              Trusted by C-Suite Leaders.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl bg-[#0F1C3F] border border-stone-700 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl bg-[#0F1C3F] border border-stone-700 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#0F1C3F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans">
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

            <span className="text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#0B132B] border border-[#C5A059]/30 text-[11px]">
              {current.city}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
