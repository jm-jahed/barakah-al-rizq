'use client';
import React from 'react';

export const OpticalLocation: React.FC<any> = () => {
  return (
    <section id="location" className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-950 p-8 rounded-3xl border border-sky-500/30">
          <h2 className="text-3xl font-sans font-bold text-white">City Walk Jumeirah Studio</h2>
          <p className="text-xs font-mono text-slate-300 mt-2">Level 1, City Walk Boulevard, Jumeirah, Dubai • Free VIP Valet Parking</p>
        </div>
      </div>
    </section>
  );
};
