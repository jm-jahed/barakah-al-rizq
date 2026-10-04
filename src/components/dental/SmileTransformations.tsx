'use client';
import React from 'react';
import { TRANSFORMATIONS_DATA } from '@/data/dentalData';

export const SmileTransformations: React.FC<any> = () => {
  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Smile Case Transformations</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{TRANSFORMATIONS_DATA.map(item => (
          <div key={item.id} className="bg-slate-950 p-6 rounded-3xl border border-cyan-500/20"><h3 className="font-sans font-bold text-lg text-white mb-2">{item.title}</h3><p className="text-xs text-slate-300">Timeline: {item.timeline}</p></div>
        ))}</div>
      </div>
    </section>
  );
};
