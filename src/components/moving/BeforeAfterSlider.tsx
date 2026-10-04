'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Sliders } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-24 bg-[#143A2A] relative border-b border-emerald-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-200 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30">
            WHITE-GLOVE MOVING TRANSFORMATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mt-4 font-serif">
            From moving day chaos to move-in ready.
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 mt-2">
            Drag the interactive slider below to see how NestMove transforms unorganized moving boxes into a clean, perfectly assembled, move-in ready home.
          </p>
        </div>

        {/* Before / After Interactive Visual Container */}
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl bg-[#1C1917] h-[400px] sm:h-[480px]">
          
          {/* AFTER Image (Bottom Full Layer) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
              alt="After NestMove Unpacking - Clean Living Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-[#143A2A]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-400 text-xs font-bold text-emerald-200 flex items-center gap-2 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>AFTER: MOVE-IN READY HOME</span>
            </div>
          </div>

          {/* BEFORE Image (Top Scaled Layer using Clip Path) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
              alt="Before NestMove Unpacking - Moving Day Boxes"
              className="w-full h-full object-cover max-w-none"
              style={{ width: '100%' }}
            />
            <div className="absolute top-6 left-6 bg-[#1C1917]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-600 text-xs font-bold text-stone-200 flex items-center gap-2 shadow-lg">
              <Sliders className="w-4 h-4 text-[#D96B27]" />
              <span>BEFORE: MOVING DAY CHAOS</span>
            </div>
          </div>

          {/* Divider Line & Drag Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-emerald-950 shadow-2xl flex items-center justify-center font-bold text-xs">
              ↔
            </div>
          </div>

          {/* Transparent Input Range Overlay for Mouse / Touch Dragging */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            aria-label="Drag Before After Moving Slider"
          />

        </div>

        {/* Feature Comparison Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
          <div className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 text-xs text-emerald-100 font-sans">
            <span className="font-bold text-white block mb-1">✓ Complete Unpacking Service</span>
            <span>Boxes unpacked, clothing hung in wardrobes, and kitchenware set up cleanly.</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 text-xs text-emerald-100 font-sans">
            <span className="font-bold text-white block mb-1">✓ Furniture Carpentry & Positioning</span>
            <span>Beds assembled, dining tables aligned, and wall units securely placed.</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 text-xs text-emerald-100 font-sans">
            <span className="font-bold text-white block mb-1">✓ Zero Debris Left Behind</span>
            <span>All used cardboard boxes, bubble wrap, and packing tape collected and recycled.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
