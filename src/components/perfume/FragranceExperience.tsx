'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Droplets } from 'lucide-react';

export const FragranceExperience: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases = [
    {
      time: "0 Mins",
      title: "First Impression (Top Notes)",
      desc: "Instant burst of sparkling Italian bergamot, Iranian saffron, and pink pepper.",
      dominant: "Zesty & Spicy Saffron",
      intensity: "100% High Volatility"
    },
    {
      time: "30 Mins",
      title: "Heart Evolution (Middle Accord)",
      desc: "Top notes soften to reveal dark velvety Damask rose petals and smoked frankincense.",
      dominant: "Damask Rose & Incense",
      intensity: "85% Radiance"
    },
    {
      time: "2 Hours",
      title: "Dry Down Phase (Base Notes)",
      desc: "Full emergence of 30-year aged Cambodian agarwood, rich amber resin, and leather.",
      dominant: "Cambodian Oud & Resins",
      intensity: "70% Deep Aura"
    },
    {
      time: "6 Hours",
      title: "Sillage Trace (Skin Scent)",
      desc: "Sensual warm skin scent lingering with sweet tonka bean, Madagascar vanilla, and musk.",
      dominant: "Golden Amber & Musk",
      intensity: "40% Intimate Trace"
    }
  ];

  const current = phases[selectedPhase];

  return (
    <section className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            OLFACTORY CHRONOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            First Impression → Dry Down.
          </h2>
          <p className="text-base text-gray-400">
            Track how high-concentration Extraits evolve on skin across hours of wear.
          </p>
        </div>

        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          {/* Phase Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {phases.map((p, idx) => (
              <button
                key={p.time}
                onClick={() => setSelectedPhase(idx)}
                className={`p-3 rounded-2xl border text-center transition-all font-mono ${
                  selectedPhase === idx
                    ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-lg'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                }`}
              >
                <div className="text-xs">{p.time}</div>
                <div className="text-[10px] text-gray-400 font-sans truncate">{p.title.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          {/* Phase Detail Display */}
          <div className="p-6 rounded-2xl bg-[#161D27] border border-white/10 space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                TIMELINE STAGE: {current.time}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                {current.intensity}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-serif">{current.title}</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">{current.desc}</p>

            <div className="pt-2 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Dominant Olfactory Facet:</span>
              <span className="text-amber-300 font-bold">{current.dominant}</span>
            </div>
          </div>

          <div className="text-center text-[10px] font-mono text-gray-400">
            Concept Fragrance Journey — Evaporation Telemetry #11
          </div>
        </div>
      </div>
    </section>
  );
};
