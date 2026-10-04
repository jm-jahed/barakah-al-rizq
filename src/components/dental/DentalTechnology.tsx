'use client';
import React from 'react';
import { Activity } from 'lucide-react';

export const DentalTechnology: React.FC<any> = () => {
  const tech = [
    { title: '3D Digital Intraoral Scanning', desc: 'Painless digital impressions replacing messy physical putty.' },
    { title: 'CAD/CAM Milled Crowns', desc: 'Same-day high precision ceramic & zirconia crown fabrication.' },
    { title: 'Digital Smile Design', desc: '3D facial proportion preview before commencing cosmetic work.' }
  ];

  return (
    <section id="technology" className="py-24 bg-[#06101E] text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Advanced Digital Technology</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{tech.map((t, idx) => (
          <div key={idx} className="bg-slate-900 p-6 rounded-3xl border border-cyan-500/20 space-y-2"><Activity className="w-6 h-6 text-cyan-400" /><h3 className="font-sans font-bold text-xl text-white">{t.title}</h3><p className="text-xs text-slate-300">{t.desc}</p></div>
        ))}</div>
      </div>
    </section>
  );
};
