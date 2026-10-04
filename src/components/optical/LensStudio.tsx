'use client';
import React, { useState } from 'react';
import { LENS_OPTIONS_DATA } from '@/data/opticalData';

export const LensStudio: React.FC<any> = () => {
  const [selectedLens, setSelectedLens] = useState(LENS_OPTIONS_DATA[1]);

  return (
    <section id="lenses" className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Interactive Lens Studio</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LENS_OPTIONS_DATA.slice(0, 3).map(lens => (
            <div key={lens.id} onClick={() => setSelectedLens(lens)} className={`p-6 rounded-3xl border cursor-pointer ${selectedLens.id === lens.id ? 'border-sky-400 bg-sky-500/10' : 'border-slate-800 bg-slate-900'}`}>
              <span className="text-[10px] font-mono text-sky-400 uppercase">{lens.category}</span>
              <h3 className="font-sans font-bold text-lg text-white mt-1">{lens.name}</h3>
              <span className="text-sm font-mono font-bold text-sky-300 block mt-2">AED {lens.price}</span>
              <p className="text-xs text-slate-300 mt-2">{lens.suitableFor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
