'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Activity, ArrowRight, CheckCircle2, Gauge, Sliders } from 'lucide-react';
import { SMART_DISTRIBUTION_FLOW, SmartDistributionStep } from '@/data/aquavantaData';

export function AquavantaSmartDistribution() {
  const [activeStepNum, setActiveStepNum] = useState(1);
  const activeStep =
    SMART_DISTRIBUTION_FLOW.find((s) => s.stepNumber === activeStepNum) || SMART_DISTRIBUTION_FLOW[0];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#02050E] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Gauge className="w-3.5 h-3.5" />
            <span>AUTONOMOUS HYDRAULIC BALANCING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            A Network That Understands Demand.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            When morning consumption spikes or hotel cooling towers demand supplementary flow, variable-speed pumps and actuated PRVs modulate dynamically to prevent pressure drops.
          </p>
        </div>

        {/* 6 Stage Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-12">
          {SMART_DISTRIBUTION_FLOW.map((s) => {
            const isActive = s.stepNumber === activeStepNum;
            return (
              <button
                key={s.stepNumber}
                onClick={() => setActiveStepNum(s.stepNumber)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase mb-1">
                    {s.label}
                  </div>
                  <div className="text-xs font-bold text-white leading-snug">
                    {s.title}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-teal-400 mt-3 pt-2 border-t border-slate-800/60">
                  {s.timeDelta}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.stepNumber}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 text-xs font-mono mb-3 border border-cyan-800/50">
                  <span>STAGE 0{activeStep.stepNumber} OF 06</span>
                  <span>•</span>
                  <span>{activeStep.label}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {activeStep.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                  {activeStep.action}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    Automated Closed-Loop Response
                  </div>
                  <div className="text-xs font-mono text-slate-200">
                    {activeStep.automatedResponse}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 p-6 text-center font-mono flex flex-col items-center justify-center">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  Response Velocity
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 my-2">
                  {activeStep.timeDelta}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Zero Water Hammer Pressure Transients
                </div>

                <div className="mt-6">
                  <button
                    onClick={() =>
                      setActiveStepNum((prev) => (prev < 6 ? prev + 1 : 1))
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-semibold text-xs transition-colors"
                  >
                    <span>{activeStepNum < 6 ? 'Next Step →' : 'Restart Cycle ↺'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
