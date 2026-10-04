'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      name: 'Fatima Al Suwaidi',
      role: 'Founder, Orbit Tech FZ',
      city: 'Dubai (DMCC)',
      rating: 5,
      text: 'LEDGERA took our books from chaos to clarity in under two months. We have never missed a filing since onboarding.'
    },
    {
      name: 'Marcus Vance',
      role: 'CFO, Meridian Logistics Group',
      city: 'Abu Dhabi',
      rating: 5,
      text: 'Their Corporate Tax impact analysis saved our group from severe misclassification penalties. Exceptionally responsive tax team.'
    },
    {
      name: 'Rashid Al-Maktoum',
      role: 'Managing Director, Horizon Developments',
      city: 'Dubai (Business Bay)',
      rating: 5,
      text: 'Flawless WPS payroll processing and quarterly VAT return filings. LEDGERA delivers tier-one Big 4 quality at sensible retainer pricing.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              CLIENT TESTIMONIALS & REPUTATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              Trusted by UAE Business Owners.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl bg-[#0E3B27] border border-stone-700 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl bg-[#0E3B27] border border-stone-700 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#0E3B27] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans">
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

            <span className="text-[#D4AF37] font-bold px-3 py-1 rounded-full bg-[#0A291C] border border-[#D4AF37]/30 text-[11px]">
              {current.city}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
