'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, ShieldCheck, ArrowLeftRight, Check } from 'lucide-react';
import { LUXSHIELD_BEFORE_AFTER_CASES, LuxshieldBeforeAfterCase } from '@/data/luxshieldData';

export const BeforeAfterGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100%
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Ceramic Coating', 'PPF', 'Paint Correction'];

  const filteredCases = activeCategory === 'All'
    ? LUXSHIELD_BEFORE_AFTER_CASES
    : LUXSHIELD_BEFORE_AFTER_CASES.filter(c => c.category === activeCategory);

  const currentCase = filteredCases[activeCaseIndex] || LUXSHIELD_BEFORE_AFTER_CASES[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="beforeafter" className="py-24 bg-[#14161A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block mb-3">
              INTERACTIVE PAINT TRANSFORMATION SLIDER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Before &amp; After Showcase
            </h2>
            <p className="text-gray-300 text-base font-light mt-2">
              Drag the interactive slider handle horizontally to reveal paint correction, PPF clarity, and ceramic reflection.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveCaseIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Drag-to-Reveal Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Canvas (8 Cols) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30 select-none cursor-ew-resize group bg-black"
            >
              {/* BEFORE IMAGE (Underneath / Left side reveal) */}
              <img
                src={currentCase.beforeImage}
                alt="Before Detailing"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* AFTER IMAGE (Clipped on right) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
              >
                <img
                  src={currentCase.afterImage}
                  alt="After Detailing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Floating Labels */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-gray-300 font-mono font-bold text-xs shadow-lg">
                  BEFORE (SWIRLS &amp; DEBRIS)
                </span>
              </div>

              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white font-mono font-bold text-xs shadow-lg">
                  AFTER (LUXSHIELD FINISH)
                </span>
              </div>

              {/* Drag Handle Divider */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-white to-blue-400 shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-2xl flex items-center justify-center text-white">
                  <ArrowLeftRight className="w-5 h-5 animate-pulse" />
                </div>
              </div>

              {/* Bottom Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-gray-300 pointer-events-none flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-400" />
                <span>Drag Slider Left &amp; Right</span>
              </div>
            </div>
          </div>

          {/* Case Detail Specs (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 bg-[#0B0C0E] p-8 rounded-3xl border border-white/10 shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                {currentCase.category} • {currentCase.vehicleType}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                {currentCase.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">
                {currentCase.description}
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">APPLIED STUDIO TREATMENT</span>
                <span className="text-sm font-bold text-amber-300 font-mono">
                  {currentCase.service}
                </span>
              </div>
            </div>

            {/* Case Picker List */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-gray-400 uppercase block mb-2">SELECT CASE STUDY</span>
              {filteredCases.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`w-full p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between ${
                    activeCaseIndex === idx
                      ? 'bg-blue-600 text-white font-bold shadow-md'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span className="truncate">{c.title}</span>
                  {activeCaseIndex === idx && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};