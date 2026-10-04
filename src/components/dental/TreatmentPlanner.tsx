'use client';
import React from 'react';

export const TreatmentPlanner: React.FC<any> = () => {
  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-950 p-8 rounded-3xl border border-cyan-500/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-sans font-bold text-white mb-2">Interactive Treatment Cart & Timeline Planner</h3>
          <p className="text-xs text-slate-300">Select multiple procedures to generate a sample treatment sequence preview.</p>
        </div>
      </div>
    </section>
  );
};
