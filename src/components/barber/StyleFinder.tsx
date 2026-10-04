'use client';
import React, { useState } from 'react';

export const StyleFinder: React.FC<any> = () => {
  const [shape, setShape] = useState('Oval');

  return (
    <section id="styles" className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-neutral-900 p-8 rounded-3xl border border-amber-500/30 max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase">INTERACTIVE STYLE FINDER</span>
          <h3 className="text-3xl font-sans font-bold text-white">Find Your Best Style & Haircut</h3>
          <div className="flex justify-center gap-2">
            {['Oval', 'Round', 'Square', 'Heart'].map(s => (
              <button key={s} onClick={() => setShape(s)} className={`px-4 py-2 rounded-xl text-xs font-mono ${shape === s ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-neutral-950 text-neutral-300'}`}>{s} Face</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
