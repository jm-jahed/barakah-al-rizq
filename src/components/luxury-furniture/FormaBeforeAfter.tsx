'use client';

import React, { useState, useRef } from 'react';
import { Sliders, Eye, ShoppingBag, ArrowLeftRight, Check, Crown } from 'lucide-react';
import { FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaBeforeAfterProps {
  allProducts?: FurnitureProduct[];
  onSelectProduct?: (product: FurnitureProduct) => void;
  onAddToCart?: (product: FurnitureProduct) => void;
}

export const FormaBeforeAfter: React.FC<FormaBeforeAfterProps> = ({
  allProducts = ALL_FURNITURE_PRODUCTS,
  onSelectProduct,
  onAddToCart
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const featuredSofa = allProducts.find(p => p.id === 'fur-sofa-01');
  const featuredTable = allProducts.find(p => p.id === 'fur-tbl-01');

  return (
    <section id="transformation" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12110F] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2926] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase mb-3">
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Interactive Space Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
              The <span className="italic text-[#E6AF73]">Transformation</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A096] mt-2 max-w-xl">
              Drag the architectural divider to observe how proportion, material, and tactile furniture elevate an empty space into an enduring sanctuary.
            </p>
          </div>

          <div className="text-xs font-mono text-[#E6AF73] flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            <span>Drag slider left / right to reveal</span>
          </div>
        </div>

        {/* Interactive Before / After Split Screen */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-black border border-[#38332E] shadow-2xl cursor-ew-resize select-none"
        >
          {/* Layer 1: AFTER (Fully Furnished Luxury Living Room) */}
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80"
            alt="Furnished Living Space"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Layer 2: BEFORE (Minimal Unfurnished Space with Clip-Path) */}
          <div
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="Unfurnished Architectural Shell"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
            />
            {/* Label Before */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white/90 font-semibold tracking-widest uppercase">
              Before • Architectural Shell
            </div>
          </div>

          {/* Label After */}
          <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-[#E6AF73] text-black text-[11px] font-mono font-bold tracking-widest uppercase shadow-lg pointer-events-none">
            After • Furnished with Forma
          </div>

          {/* Draggable Divider Line & Knob */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute inset-y-0 w-1 bg-[#E6AF73] shadow-[0_0_20px_rgba(230,175,115,0.8)] pointer-events-none z-30"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#E6AF73] text-black flex items-center justify-center shadow-2xl border-2 border-[#12110F]">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Highlighted Transformation Details Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[#1A1815] border border-[#2C2926] space-y-2">
            <span className="text-[10px] font-mono text-[#E6AF73] uppercase font-semibold">01 • Spatial Proportion</span>
            <h4 className="text-base font-bold text-[#F5F2EB] font-serif">Low-Slung Horizons</h4>
            <p className="text-xs text-[#A8A096] leading-relaxed">
              Sofas and consoles designed below 75cm height maximize natural daylight infiltration and uninterrupted Dubai skyline views.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1A1815] border border-[#2C2926] space-y-2">
            <span className="text-[10px] font-mono text-[#E6AF73] uppercase font-semibold">02 • Acoustic Softening</span>
            <h4 className="text-base font-bold text-[#F5F2EB] font-serif">Wool Bouclé & Down</h4>
            <p className="text-xs text-[#A8A096] leading-relaxed">
              Italian wool bouclé and high-density foam cores absorb echo, transforming cavernous reception salons into intimate conversational chambers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1A1815] border border-[#2C2926] space-y-2">
            <span className="text-[10px] font-mono text-[#E6AF73] uppercase font-semibold">03 • Geological Anchorage</span>
            <h4 className="text-base font-bold text-[#F5F2EB] font-serif">Roman Navona Travertine</h4>
            <p className="text-xs text-[#A8A096] leading-relaxed">
              Solid porous travertine coffee tables introduce ancient natural limestone mass that grounds the contemporary interior.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
