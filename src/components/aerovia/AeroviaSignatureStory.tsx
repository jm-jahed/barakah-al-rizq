'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Plane, Building2, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

const STORY_STEPS = [
  {
    step: '01',
    headline: 'A destination becomes a possibility.',
    desc: 'An evocative photograph or cultural curiosity sparks the desire to venture beyond familiar horizons.',
    tag: 'EXPLORATION INTENT'
  },
  {
    step: '02',
    headline: 'A flight becomes a plan.',
    desc: 'Optimal departures, non-stop flight paths, and private lie-flat suites transform inspiration into an exact flight schedule.',
    tag: 'FLIGHT COMPOSITION'
  },
  {
    step: '03',
    headline: 'A hotel becomes a place to arrive.',
    desc: 'Palace heritage suites, overwater atolls, and skyline onsen sanctuaries provide an extraordinary sanctuary.',
    tag: 'HOSPITALITY ARRIVAL'
  },
  {
    step: '04',
    headline: 'A booking becomes a journey.',
    desc: 'Connecting flights, private transfers, Michelin dining reservations, and curated guides synchronize into one living timeline.',
    tag: 'SYNCHRONIZED TIMELINE'
  },
  {
    step: '05',
    headline: 'And the journey becomes a memory.',
    desc: 'Effortless travel execution leaves room for genuine wonder, discovery, and unforgettable human moments.',
    tag: 'TIMELESS MEMORY'
  }
];

export const AeroviaSignatureStory: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const currentStory = STORY_STEPS[activeStoryIdx];

  return (
    <section className="relative py-32 bg-[#020408] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            SIGNATURE STORY
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            “A JOURNEY STARTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              BEFORE TAKEOFF.”
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Travel should feel effortless before the wheels leave the tarmac. A continuous luxury narrative from first thought to final memory.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Navigation Timeline */}
          <div className="lg:col-span-5 space-y-4">
            {STORY_STEPS.map((item, idx) => {
              const isSelected = idx === activeStoryIdx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-950/50 to-slate-900/80 border-amber-500/60 shadow-[0_0_25px_rgba(212,175,55,0.15)] ring-1 ring-amber-400/30'
                      : 'bg-[#060b13]/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30 text-slate-400'
                  }`}
                >
                  <span className={`text-sm font-mono font-bold px-2.5 py-1 rounded-lg border ${
                    isSelected ? 'bg-amber-500/20 border-amber-400/40 text-amber-300' : 'bg-slate-800/60 border-slate-700 text-slate-500'
                  }`}>
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {item.headline}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-1">{item.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cinematic Story Box */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#081322] via-[#040912] to-[#02050a] border border-amber-500/40 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Journey Narrative Phase {currentStory.step} / 05
                </span>
                <span className="text-xs font-mono text-amber-300 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30">
                  {currentStory.tag}
                </span>
              </div>

              <div className="my-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {currentStory.headline}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  {currentStory.desc}
                </p>

                {/* Conceptual Banner */}
                <div className="p-6 rounded-2xl bg-black/60 border border-amber-500/20 font-mono text-xs text-slate-400 flex items-center justify-between">
                  <span>GLOBAL TRAVEL COMMERCE — SIMULATION</span>
                  <span className="text-amber-300 font-bold">100% Seamless Experience</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Discover • Compare • Compose • Book • Travel
                </span>
                <button
                  onClick={() => setActiveStoryIdx((prev) => (prev + 1) % STORY_STEPS.length)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black text-xs font-bold font-mono transition-colors flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                >
                  Next Phase <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
