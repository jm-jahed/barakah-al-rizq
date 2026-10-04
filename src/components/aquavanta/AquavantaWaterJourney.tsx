'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Filter, Database, Network, Activity, Home, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { WATER_JOURNEY_STAGES, WaterJourneyStage } from '@/data/aquavantaData';

export function AquavantaWaterJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = WATER_JOURNEY_STAGES[activeStepIndex];

  const getStageIcon = (name: string) => {
    switch (name) {
      case 'SOURCE':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'TREATMENT':
        return <Filter className="w-5 h-5 text-teal-400" />;
      case 'STORAGE':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'DISTRIBUTION':
        return <Network className="w-5 h-5 text-indigo-400" />;
      case 'MONITORING':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'DELIVERY':
        return <Home className="w-5 h-5 text-cyan-300" />;
      default:
        return <Droplets className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE COMPLETE HYDRAULIC LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            From Source to City
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Follow the path of water as it is extracted, purified, strategically stored, dynamically pressurized, and safely delivered to hundreds of thousands of customer endpoints.
          </p>
        </div>

        {/* 6 Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-12">
          {WATER_JOURNEY_STAGES.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase mb-1">
                    STAGE {stage.step}
                  </div>
                  <div className="text-xs font-bold text-white leading-snug">
                    {stage.name}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800/60">
                  {stage.metric.value}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 text-xs font-mono mb-3 border border-cyan-800/50">
                  <span>STAGE {currentStage.step} OF 06</span>
                  <span>•</span>
                  <span>{currentStage.name}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentStage.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-3">
                  {currentStage.description}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                  {currentStage.subDescription}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    Hydraulic Engineering Mechanism
                  </div>
                  <div className="text-xs font-mono text-slate-200">
                    {currentStage.technicalMechanism}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 p-6 text-center font-mono flex flex-col items-center justify-center">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  {currentStage.metric.label}
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 my-2">
                  {currentStage.metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Continuous Closed-Loop SCADA Telemetry
                </div>

                <div className="mt-6">
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev < 5 ? prev + 1 : 0))
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-semibold text-xs transition-colors"
                  >
                    <span>{activeStepIndex < 5 ? 'Next Stage →' : 'Restart Lifecycle ↺'}</span>
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
