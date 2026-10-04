'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Cpu, Truck, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

const STORY_STAGES = [
  {
    step: '01',
    headline: 'A prescription becomes an order.',
    desc: 'A doctor’s clinical intent is converted into an active digital requisition with encrypted molecular mapping.',
    tag: 'DIGITAL INTENT'
  },
  {
    step: '02',
    headline: 'An order becomes a fulfillment task.',
    desc: 'Robotic micro-carousels pick verified batches while Phase Change coolants calibrate the thermal barrier.',
    tag: 'PRECISION FULFILLMENT'
  },
  {
    step: '03',
    headline: 'A fulfillment task becomes a delivery.',
    desc: 'Electric climate-controlled couriers navigate metropolitan corridors with continuous telemetry surveillance.',
    tag: 'LIVE DISPATCH'
  },
  {
    step: '04',
    headline: 'A delivery becomes care at the doorstep.',
    desc: 'Relief arrives directly into the patient’s hands with dual-factor security and compassionate clarity.',
    tag: 'HUMAN REASSURANCE'
  }
];

export const MedivantaSignatureStory: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const currentStory = STORY_STAGES[activeStoryIdx];

  return (
    <section className="relative py-32 bg-[#020408] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            SIGNATURE STORY
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            “A MEDICINE DELIVERY IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              MORE THAN A PACKAGE.”
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            From clinical intent to doorstep relief. Healthcare logistics engineered around human empathy and relentless precision.
          </p>
        </div>

        {/* Story Progression Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Navigation Timeline */}
          <div className="lg:col-span-5 space-y-4">
            {STORY_STAGES.map((item, idx) => {
              const isSelected = idx === activeStoryIdx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-950/50 to-slate-900/80 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/30'
                      : 'bg-[#060b13]/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30 text-slate-400'
                  }`}
                >
                  <span className={`text-sm font-mono font-bold px-2.5 py-1 rounded-lg border ${
                    isSelected ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300' : 'bg-slate-800/60 border-slate-700 text-slate-500'
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

          {/* Cinematic Story Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#081320] via-[#040912] to-[#02050a] border border-emerald-500/40 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  Story Evolution Phase {currentStory.step} / 04
                </span>
                <span className="text-xs font-mono text-emerald-300 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30">
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

                {/* Conceptual Narrative Banner */}
                <div className="p-6 rounded-2xl bg-black/60 border border-emerald-500/20 font-mono text-xs text-slate-400 flex items-center justify-between">
                  <span>HEALTHCARE LOGISTICS — SIMULATION</span>
                  <span className="text-emerald-400 font-bold">100% Verified Delivery Journey</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Prescription • Verification • Fulfillment • Doorstep
                </span>
                <button
                  onClick={() => setActiveStoryIdx((prev) => (prev + 1) % STORY_STAGES.length)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold font-mono transition-colors flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
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
