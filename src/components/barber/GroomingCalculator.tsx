'use client';
import React, { useState } from 'react';

export const GroomingCalculator: React.FC<any> = () => {
  const [haircut, setHaircut] = useState(true);
  const [beard, setBeard] = useState(true);
  const [facial, setFacial] = useState(false);

  let total = (haircut ? 95 : 0) + (beard ? 75 : 0) + (facial ? 180 : 0);

  return (
    <section id="calculator" className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 rounded-3xl p-8 border border-amber-500/30 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-sans font-bold text-white">Grooming Session Calculator</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-mono cursor-pointer"><input type="checkbox" checked={haircut} onChange={e=>setHaircut(e.target.checked)} /> Haircut (AED 95)</label>
              <label className="flex items-center gap-2 text-xs font-mono cursor-pointer"><input type="checkbox" checked={beard} onChange={e=>setBeard(e.target.checked)} /> Beard Sculpt (AED 75)</label>
              <label className="flex items-center gap-2 text-xs font-mono cursor-pointer"><input type="checkbox" checked={facial} onChange={e=>setFacial(e.target.checked)} /> Charcoal Facial (AED 180)</label>
            </div>
          </div>
          <div className="lg:col-span-5 bg-neutral-950 p-6 rounded-2xl border border-amber-500/30 text-center">
            <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">DEMO ESTIMATE</span>
            <div className="text-4xl font-sans font-extrabold text-white">AED {total}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
