'use client';
import React from 'react';

export const TravelStories: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0A1017] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-amber-500/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">Sample Traveler Stories</h2>
          <p className="text-xs text-slate-300 italic">"Our 7-night Swiss Glacier Express journey was executed flawlessly." - Tariq A.</p>
        </div>
      </div>
    </section>
  );
};
