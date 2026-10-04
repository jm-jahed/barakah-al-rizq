'use client';
import React from 'react';

export const FitnessTestimonials: React.FC = () => {
  const reviews = [
    { name: 'Hamdan Al-Nuaimi (Sample Review)', text: 'The private coaching atmosphere at APEX is unlike any commercial gym in Dubai. Alex Morgan transformed my deadlift form in 4 weeks.' },
    { name: 'Sarah Jenkins (Sample Review)', text: 'Sofia’s Reformer Pilates classes helped eliminate my chronic lower back tightness completely.' }
  ];
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">MEMBER FEEDBACK</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">What Our Members Say.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map(r => (
            <div key={r.name} className="bg-[#12100F] p-6 rounded-2xl border border-red-500/15">
              <p className="text-xs text-gray-300 italic mb-4">"{r.text}"</p>
              <span className="font-serif text-sm font-bold text-white block">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
