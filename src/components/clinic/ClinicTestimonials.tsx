'use client';
import React from 'react';

export const ClinicTestimonials: React.FC<any> = () => {
  const reviews = [
    { name: 'Sarah Al-Maktoum', pass: 'Executive Health Check', quote: 'The attention to detail and unhurried consultation with Dr. Maya made me feel completely cared for.' },
    { name: 'Marcus Vance', pass: 'Dermatology Care', quote: 'Painless acne treatment protocol. The clinic environment feels like a luxury sanctuary.' }
  ];

  return (
    <section className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Sample Patient Feedback</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{reviews.map((r, idx) => (<div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-sky-500/20"><p className="text-xs text-slate-300 italic">"{r.quote}"</p><span className="font-sans font-bold text-sm text-white block mt-4">{r.name}</span></div>))}</div>
      </div>
    </section>
  );
};
