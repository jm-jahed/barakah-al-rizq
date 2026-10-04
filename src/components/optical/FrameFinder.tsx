'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/opticalData';

export const FrameFinder: React.FC<any> = ({ onSelectProduct }) => {
  const [faceShape, setFaceShape] = useState('Round');

  const recommended = PRODUCTS_DATA.filter(p => {
    if (faceShape === 'Round') return p.shape === 'Square' || p.shape === 'Rectangle';
    if (faceShape === 'Square') return p.shape === 'Round' || p.shape === 'Oval';
    return p.shape === 'Cat-Eye' || p.shape === 'Aviator';
  });

  return (
    <section id="frame-finder" className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-950 p-8 rounded-3xl border border-sky-500/30 max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase">INTERACTIVE FRAME FINDER</span>
          <h3 className="text-3xl font-sans font-bold text-white">Find Frames Suited for Your Face Geometry</h3>

          <div className="flex justify-center flex-wrap gap-2">
            {['Round', 'Square', 'Oval', 'Heart'].map(f => (
              <button key={f} onClick={() => setFaceShape(f)} className={`px-4 py-2 rounded-xl text-xs font-mono ${faceShape === f ? 'bg-sky-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'}`}>
                {f} Face
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
            {recommended.slice(0, 2).map(item => (
              <div key={item.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">{item.name}</h4>
                  <span className="text-xs font-mono text-sky-300">AED {item.price}</span>
                </div>
                <button onClick={() => onSelectProduct(item)} className="px-3 py-1.5 bg-sky-400 text-slate-950 font-mono text-xs rounded-xl font-bold">View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
