'use client';
import React from 'react';

export const OralHealthTips: React.FC<any> = () => {
  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Oral Hygiene Best Practices</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 p-6 rounded-3xl border border-cyan-500/20"><h3 className="font-sans font-bold text-base text-white">Soft Circular Brushing</h3><p className="text-xs text-slate-300 mt-2">Use soft bristles angled at 45 degrees to protect gumline enamel.</p></div>
          <div className="bg-slate-950 p-6 rounded-3xl border border-cyan-500/20"><h3 className="font-sans font-bold text-base text-white">Daily Flossing</h3><p className="text-xs text-slate-300 mt-2">Clean interdental spaces where standard toothbrush bristles cannot reach.</p></div>
          <div className="bg-slate-950 p-6 rounded-3xl border border-cyan-500/20"><h3 className="font-sans font-bold text-base text-white">6-Month Checkups</h3><p className="text-xs text-slate-300 mt-2">Schedule regular ultrasonic scale and polish visits.</p></div>
        </div>
      </div>
    </section>
  );
};
