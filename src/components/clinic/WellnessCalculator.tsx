'use client';
import React from 'react';

export const WellnessCalculator: React.FC<any> = () => {
  return (
    <section className="py-20 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-sans font-bold text-white mb-2">Daily Vitality Calculator</h3>
          <p className="text-xs text-slate-300">Non-diagnostic hydration and desk posture habit tracker.</p>
        </div>
      </div>
    </section>
  );
};
