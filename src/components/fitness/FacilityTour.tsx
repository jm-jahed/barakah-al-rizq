'use client';
import React from 'react';

export const FacilityTour: React.FC = () => {
  const areas = ['Strength Floor', 'Reformer Studio', 'Boxing Ring', 'Recovery Lounge'];
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">EXPLORE THE CLUB</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white mb-10">Facility Tour.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map(a => (
            <div key={a} className="p-6 bg-[#12100F] rounded-2xl border border-red-500/15 font-serif text-lg font-bold text-white">
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
