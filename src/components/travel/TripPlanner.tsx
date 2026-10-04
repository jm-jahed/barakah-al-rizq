'use client';
import React, { useState } from 'react';

export const TripPlanner: React.FC<any> = () => {
  const [nights, setNights] = useState(5);

  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 p-8 rounded-3xl border border-amber-500/30 max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-serif font-bold text-white text-center">Interactive Journey Estimator</h2>
          <div className="flex justify-between text-xs font-mono"><span>Trip Duration: {nights} Nights</span><span className="text-amber-300 font-bold">Estimated: AED {nights * 1800 + 2500}</span></div>
          <input type="range" min="3" max="14" value={nights} onChange={e=>setNights(parseInt(e.target.value))} className="w-full accent-amber-400" />
        </div>
      </div>
    </section>
  );
};
