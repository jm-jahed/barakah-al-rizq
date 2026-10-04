'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      name: 'Arthur Pendelton',
      role: 'Penthouse Buyer (UK)',
      project: 'VANTAGE BAY RESIDENCES',
      rating: 5,
      text: 'VANTAGE delivered our Business Bay penthouse 2 weeks ahead of scheduled handover. The architectural finishing, marble work, and canal views exceeded all developer promises.'
    },
    {
      name: 'Dr. Tariq Al-Mansoori',
      role: 'Golf Villa Owner (Dubai)',
      project: 'VANTAGE CREST VILLAS',
      rating: 5,
      text: 'The structural quality and German kitchen fitting in Crest Villas set a new benchmark for Dubai Hills Estate. Very impressive developer communication throughout construction.'
    },
    {
      name: 'Maximilian Vance',
      role: 'Off-Plan Investor (Singapore)',
      project: 'VANTAGE HORIZON',
      rating: 5,
      text: 'Transparent quarterly drone updates and DLD escrow safety made buying off-plan from Singapore completely stress-free. Already seeing strong paper appreciation.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              BUYER & INVESTOR REPUTATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              Trusted by Buyers.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl bg-[#0A192F] border border-stone-700 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl bg-[#0A192F] border border-stone-700 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#0A192F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans">
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

            <span className="text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#06101E] border border-[#C5A059]/30 text-[11px]">
              {current.project}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
