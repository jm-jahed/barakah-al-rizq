'use client';
import React from 'react';
import { PRODUCTS_DATA } from '@/data/opticalData';

export const FrameComparison: React.FC<any> = () => {
  const compared = PRODUCTS_DATA.slice(0, 3);

  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Frame Comparison Matrix</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {compared.map(item => (
            <div key={item.id} className="bg-slate-950 p-6 rounded-3xl border border-sky-500/20 space-y-3">
              <h3 className="font-sans font-bold text-lg text-white">{item.name}</h3>
              <span className="text-sm font-mono font-bold text-sky-300 block">AED {item.price}</span>
              <div className="text-xs font-mono text-slate-300 space-y-1 pt-2 border-t border-slate-800">
                <div>Material: {item.material}</div>
                <div>Shape: {item.shape}</div>
                <div>Size: {item.size}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
