'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Network, Database, Activity, Terminal, ArrowRight, ShieldCheck, Layers, Check } from 'lucide-react';
import { CLOUD_SYSTEM_STORY, CloudSystemStoryStage } from '@/data/stratosynData';

export function StratosynCloudSystemStory() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStage = CLOUD_SYSTEM_STORY[activeStepIndex];

  const getStageIcon = (name: string) => {
    switch (name) {
      case 'COMPUTE':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'NETWORK':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'DATA':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'OBSERVABILITY':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'AUTOMATION':
        return <Terminal className="w-5 h-5 text-sky-300" />;
      default:
        return <Layers className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#06080F] border-b border-slate-800/60 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Editorial Cinematic Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-sky-400 text-xs font-mono mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EDITORIAL ESSAY & SYSTEM LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            The cloud is no longer a location.<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
              It is a system.
            </span>
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Traditional hosting viewed the cloud as renting space in another datacenter. Distributed computing operates as an autonomous, unified organism moving seamlessly between five interconnected states.
          </p>
        </div>

        {/* Step-by-Step Flow Navigator */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CLOUD_SYSTEM_STORY.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <React.Fragment key={stage.step}>
                <button
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 border ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/20'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  <span>{stage.step}</span>
                  <span className="font-sans font-semibold">{stage.name}</span>
                </button>
                {idx < CLOUD_SYSTEM_STORY.length - 1 && (
                  <span className="text-slate-700 font-mono text-xs hidden sm:inline">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Interactive Selected Stage Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.step}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Explanation (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getStageIcon(activeStage.name)}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-sky-400 tracking-wider">
                      STAGE {activeStage.step} • {activeStage.name}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {activeStage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-4">
                  {activeStage.description}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                  {activeStage.subDescription}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Underlying Engineering Mechanism
                  </div>
                  <div className="text-xs font-mono text-sky-300">
                    {activeStage.technicalMechanism}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage Telemetry Metric Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/90 to-slate-950 rounded-xl border border-slate-800/80 p-6 font-mono text-center flex flex-col items-center justify-center">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">
                  {activeStage.metrics.label}
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300 mb-4">
                  {activeStage.metrics.value}
                </div>
                <div className="w-full bg-slate-800/60 h-1.5 rounded-full overflow-hidden mb-4">
                  <div className="bg-sky-400 h-full rounded-full w-4/5 animate-pulse" />
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real-Time Equilibrium Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
