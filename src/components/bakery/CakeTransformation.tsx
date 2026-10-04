'use client';
import React, { useState } from 'react';

export const CakeTransformation: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  return (
    <section className="py-20 bg-[#FDFBF7] text-[#2C2114] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono text-amber-800 uppercase tracking-[0.3em] block mb-2">INTERACTIVE DESIGN PROCESS</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#1A120B] mb-8">Sketch to Finished Cake.</h2>
        <div className="max-w-3xl mx-auto relative rounded-3xl overflow-hidden border border-amber-900/20 shadow-2xl h-[400px]">
          <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1000&auto=format&fit=crop" alt="Finished Cake" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" alt="Sketch Cake" className="w-full h-full object-cover max-w-none" style={{ width: '768px' }} />
          </div>
          <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" />
          <div className="absolute top-0 bottom-0 w-1 bg-amber-400 z-10 pointer-events-none" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center shadow-lg">↔</div>
          </div>
        </div>
      </div>
    </section>
  );
};
