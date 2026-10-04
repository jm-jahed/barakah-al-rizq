'use client';
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/opticalData';

export const VirtualFrameTryOn: React.FC<any> = () => {
  const [selectedFrame, setSelectedFrame] = useState(PRODUCTS_DATA[0]);

  return (
    <section id="try-on" className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.3em] block mb-2 font-bold">VIRTUAL PREVIEW</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">Interactive Virtual Frame Try-On</h2>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 border border-sky-500/30 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative h-80 rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" alt="Model Face" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={selectedFrame.image} alt={selectedFrame.name} className="w-48 h-28 object-contain mix-blend-screen drop-shadow-2xl scale-125" />
            </div>
            <span className="absolute bottom-4 left-4 text-[10px] font-mono bg-slate-900/90 px-3 py-1 rounded-full text-sky-300">Live Frame Overlay Preview</span>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-sans font-bold text-white">Select Frame to Preview</h3>
            <div className="space-y-2">
              {PRODUCTS_DATA.slice(0, 4).map(f => (
                <div key={f.id} onClick={() => setSelectedFrame(f)} className={`p-3 rounded-xl border cursor-pointer flex justify-between items-center ${selectedFrame.id === f.id ? 'border-sky-400 bg-sky-500/10' : 'border-slate-800 bg-slate-950'}`}>
                  <span className="font-sans font-bold text-xs">{f.name}</span>
                  <span className="text-xs font-mono text-sky-300">AED {f.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
