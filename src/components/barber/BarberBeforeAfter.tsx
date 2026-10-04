'use client';
import React, { useState } from 'react';
import { TRANSFORMATIONS_DATA } from '@/data/barberData';

export const BarberBeforeAfter: React.FC<any> = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const currentCase = TRANSFORMATIONS_DATA[0];

  return (
    <section className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Grooming Transformations</h2></div>
        <div className="relative max-w-4xl mx-auto h-[400px] rounded-3xl overflow-hidden border border-amber-500/30">
          <img src={currentCase.afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img src={currentCase.beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100%' }} />
          </div>
          <input type="range" min="0" max="100" value={sliderPos} onChange={e=>setSliderPos(parseInt(e.target.value))} className="absolute inset-0 w-full opacity-0 cursor-ew-resize" />
        </div>
      </div>
    </section>
  );
};
