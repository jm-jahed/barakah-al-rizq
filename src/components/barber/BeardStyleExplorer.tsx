'use client';
import React from 'react';

export const BeardStyleExplorer: React.FC<any> = () => {
  const beards = ['Full Beard', 'Short Boxed Beard', 'Corporate Beard', 'Stubble', 'Goatee', 'Beard Fade'];

  return (
    <section className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Beard Style Explorer</h2></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{beards.map((b, i) => (<div key={i} className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 font-sans font-bold text-sm text-white">{b}</div>))}</div>
      </div>
    </section>
  );
};
