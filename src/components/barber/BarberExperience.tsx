'use client';
import React from 'react';

export const BarberExperience: React.FC<any> = () => {
  const steps = [
    { num: '01', title: 'Arrival & Refreshment', desc: 'Espresso or beverage lounge.' },
    { num: '02', title: 'Style Consultation', desc: 'Face structure analysis.' },
    { num: '03', title: 'Precision Cut & Shave', desc: 'Scissor cut & hot towel razor.' },
    { num: '04', title: 'Finishing & Styling', desc: 'Matte clay styling finish.' },
    { num: '05', title: 'Aftercare Routine', desc: 'Home beard & scalp advice.' }
  ];

  return (
    <section className="py-24 bg-neutral-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">The Gentleman's Ritual</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">{steps.map((s, idx) => (<div key={idx} className="bg-neutral-950 p-6 rounded-3xl border border-amber-500/20"><span className="text-2xl font-mono font-bold text-amber-400 block">{s.num}</span><h3 className="font-sans text-base font-bold text-white mt-2">{s.title}</h3><p className="text-xs text-neutral-400 mt-1">{s.desc}</p></div>))}</div>
      </div>
    </section>
  );
};
