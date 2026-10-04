'use client';
import React from 'react';

export const EyeHealthTopics: React.FC<any> = () => {
  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Eye Health Educational Topics</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 p-6 rounded-3xl border border-sky-500/20"><h3 className="font-sans font-bold text-lg text-white">Digital Eye Strain</h3><p className="text-xs text-slate-300 mt-2">20-20-20 rule: Every 20 minutes look at something 20 feet away for 20 seconds.</p></div>
          <div className="bg-slate-950 p-6 rounded-3xl border border-sky-500/20"><h3 className="font-sans font-bold text-lg text-white">Dry Eye Management</h3><p className="text-xs text-slate-300 mt-2">Maintain proper blinking frequency during intense computer screen work.</p></div>
          <div className="bg-slate-950 p-6 rounded-3xl border border-sky-500/20"><h3 className="font-sans font-bold text-lg text-white">UV Sun Protection</h3><p className="text-xs text-slate-300 mt-2">Protect eyes against UV400 rays to avoid long-term corneal damage.</p></div>
        </div>
      </div>
    </section>
  );
};
