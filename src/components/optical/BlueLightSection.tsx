'use client';
import React from 'react';

export const BlueLightSection: React.FC<any> = () => {
  return (
    <section id="blue-light" className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/30 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Blue-Light Shield Screen Protection</h2>
          <p className="text-xs text-slate-300">Blocks 45% of HEV 420nm blue rays from laptops, phones, and office lighting.</p>
        </div>
      </div>
    </section>
  );
};
