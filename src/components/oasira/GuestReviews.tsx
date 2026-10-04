'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const GuestReviews: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Dubai Marina',
      rating: 5,
      stayType: 'RAK Desert Staycation',
      text: 'We wanted a weekend escape without leaving the UAE. OASIRA found us Dune Mirage Retreat in RAK within minutes. The private pool villa and stargazing were unforgettable!'
    },
    {
      name: 'Rashid & Family',
      location: 'Abu Dhabi',
      rating: 5,
      stayType: 'Fujairah Family Ocean Break',
      text: 'Booking through OASIRA was completely seamless. The AED pricing was transparent with no surprise resort fees. Kids loved the Snoopy Island snorkeling.'
    },
    {
      name: 'Amelia & David',
      location: 'Downtown Dubai',
      rating: 5,
      stayType: 'Palm Jumeirah Anniversary',
      text: 'The WhatsApp concierge booked our sunset yacht charter and Azure Palm residence within 10 minutes. 10/10 staycation experience.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section className="py-20 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              VERIFIED UAE STAYCATION REVIEWS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] mt-3">
              Loved by UAE Travelers.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl bg-[#0F382C] border border-stone-700 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl bg-[#0F382C] border border-stone-700 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#0F382C] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative">
          <div className="flex text-[#D4B382] mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4B382]" />
            ))}
          </div>

          <p className="text-xl sm:text-3xl font-serif font-bold text-white leading-relaxed mb-8 max-w-4xl">
            "{current.text}"
          </p>

          <div className="pt-6 border-t border-stone-800 flex items-center justify-between font-mono text-xs">
            <div>
              <h4 className="text-base font-bold text-white font-serif">{current.name}</h4>
              <p className="text-stone-400 text-[11px]">{current.location}</p>
            </div>

            <span className="text-[#D4B382] font-bold px-3 py-1 rounded-full bg-[#0A2920] border border-[#D4B382]/30 text-[11px]">
              {current.stayType}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
