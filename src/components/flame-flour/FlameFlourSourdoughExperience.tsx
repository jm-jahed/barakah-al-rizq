'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Flame, Wheat, Droplets, Info } from 'lucide-react';

const SOURDOUGH_JOURNEY = [
  { stage: 'Starter Cultivation', time: 'Day 0 to Year 7', note: 'Fed daily with equal parts stoneground organic rye and spring water.' },
  { stage: 'Daily Feeding & Peak Rise', time: '4–6 Hours', note: 'Reaches triple volume with domed surface and honeycomb gas pockets.' },
  { stage: 'Levain Inoculation', time: 'Hour 0', note: 'Active starter mixed into autolysed flour dough at 20% baker’s percentage.' },
  { stage: 'Bulk Fermentation', time: '4 Hours @ 26°C', note: 'Lactic and acetic acid bacteria multiply, producing organic aromas.' },
  { stage: 'Cold Retardation', time: '24–36 Hours @ 5°C', note: 'Slow chilling allows enzymatic flavor breakdown without over-acidification.' },
  { stage: 'Oven Spring & Caramelization', time: '35 Mins @ 245°C', note: 'Instant steam converts starches into gelatinized sugars for deep crust blisters.' }
];

export const FlameFlourSourdoughExperience: React.FC = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);
  const [activeStage, setActiveStage] = useState<number>(1);

  useEffect(() => {
    // Generate gentle fermentation bubbles
    const b = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: 10 + (i * 17) % 80,
      y: 20 + (i * 23) % 60,
      size: 4 + (i % 8),
      duration: 3 + (i % 4)
    }));
    setBubbles(b);
  }, []);

  return (
    <section className="py-24 bg-[#0c0908] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Droplets className="w-3.5 h-3.5" />
            <span>WILD FERMENTATION ATELIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            The Living Culture
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Our 7-year sourdough mother contains millions of wild yeasts and friendly lactic flora, creating unmatched aroma and open structure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sourdough Fermentation Visualizer (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-[#120f0d] p-8 rounded-3xl border border-stone-800/80 shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[380px]">
            {/* Background fermentation jar glow */}
            <div className="absolute w-48 h-48 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Bubble Canvas Simulation */}
            <div className="relative w-44 h-44 rounded-full border-2 border-dashed border-amber-700/60 bg-gradient-to-b from-stone-900 to-amber-950/40 flex items-center justify-center p-4 shadow-inner mb-6">
              {bubbles.map((b) => (
                <motion.div
                  key={b.id}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.25, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: b.duration,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    position: 'absolute',
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    width: `${b.size}px`,
                    height: `${b.size}px`
                  }}
                  className="rounded-full bg-amber-400/60 shadow-sm shadow-amber-300/50"
                />
              ))}

              <div className="text-center z-10">
                <div className="text-3xl mb-1">🫧</div>
                <div className="text-xs font-mono font-bold text-amber-300 uppercase">Mother Levain</div>
                <div className="text-[10px] text-stone-400">7 Yrs · 100% Hydration</div>
              </div>
            </div>

            <div className="w-full bg-stone-900/80 p-3.5 rounded-xl border border-stone-800 text-xs font-mono flex items-center justify-between">
              <span className="text-stone-400">Biological Activity:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Flora Peak
              </span>
            </div>
          </div>

          {/* Sourdough Journey Steps (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            {SOURDOUGH_JOURNEY.map((item, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div
                  key={item.stage}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500/80 ring-1 ring-amber-500/40 shadow-lg'
                      : 'bg-stone-900/50 border-stone-800/70 hover:bg-stone-850/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-serif font-medium text-stone-100">
                      {idx + 1}. {item.stage}
                    </span>
                    <span className="text-[11px] font-mono text-amber-400 bg-black/40 px-2 py-0.5 rounded border border-stone-800">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {item.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
