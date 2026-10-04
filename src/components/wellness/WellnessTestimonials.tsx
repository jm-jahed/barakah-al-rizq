'use client';
import React from 'react';

export const WellnessTestimonials: React.FC<any> = () => {
  const reviews = [
    { name: 'Sarah Al-Maktoum', pass: 'Unlimited Member', quote: 'AURA is an oasis of calm in Downtown Dubai.' },
    { name: 'Marcus Vance', pass: 'Executive Retainer', quote: 'The 35-minute lunchtime de-stress sessions keep my spine feeling 10 years younger.' }
  ];

  return (
    <section className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">Member Reviews</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{reviews.map((r, idx) => (<div key={idx} className="bg-[#181512] p-8 rounded-3xl border border-amber-500/20"><p className="text-xs text-gray-300 italic">"{r.quote}"</p><span className="font-serif font-bold text-sm text-white block mt-4">{r.name}</span></div>))}</div>
      </div>
    </section>
  );
};
