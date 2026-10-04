'use client';
import React, { useState } from 'react';

export const DentalCalculator: React.FC<any> = () => {
  const [veneersCount, setVeneersCount] = useState(4);

  return (
    <section id="planner" className="py-20 bg-[#06101E] text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 border border-cyan-500/20 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-sans font-bold text-white">Veneer Unit Cost Estimator</h3>
            <div className="flex justify-between text-xs font-mono"><span>Veneer Units: {veneersCount} Teeth</span><span className="text-teal-300 font-bold">AED {veneersCount * 1800}</span></div>
            <input type="range" min="2" max="10" value={veneersCount} onChange={e=>setVeneersCount(parseInt(e.target.value))} className="w-full accent-cyan-400" />
          </div>
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 text-center">
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">DEMO ESTIMATE</span>
            <div className="text-4xl font-sans font-extrabold text-white">AED {veneersCount * 1800}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
