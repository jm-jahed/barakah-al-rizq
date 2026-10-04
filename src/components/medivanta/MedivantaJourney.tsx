'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MEDIVANTA_JOURNEY_STAGES, JourneyStage } from '@/data/medivantaData';
import { FileText, ShieldCheck, Cpu, Truck, MapPin, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />
};

export const MedivantaJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStage = MEDIVANTA_JOURNEY_STAGES[activeStepIndex];

  return (
    <section className="relative py-28 bg-[#02050a] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            THE MEDICINE JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Every Delivery Has a Journey. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              From Prescription to Doorstep.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Medicine delivery is not simple ecommerce. It is a carefully coordinated healthcare supply chain with unbroken verification, cold-chain assurance, and licensed pharmacist oversight at every single phase.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Carousel/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {MEDIVANTA_JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={stage.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-950/40 to-slate-900/60 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/30'
                      : 'bg-[#060b13]/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                  }`}
                >
                  <div className={`p-3 rounded-xl border ${
                    isSelected
                      ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-500'
                  }`}>
                    {iconMap[stage.icon] || <CheckCircle2 className="w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">{stage.stepNumber}</span>
                        <span className="text-slate-600">•</span>
                        <h3 className={`font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {stage.name}
                        </h3>
                      </div>
                      {isSelected && <ArrowRight className="w-4 h-4 text-emerald-400 ml-2 shrink-0 animate-pulse" />}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{stage.title}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep Dive Detail Box */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#08121d] via-[#050b14] to-[#02050a] border border-emerald-500/40 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    {iconMap[activeStage.icon]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      Stage {activeStage.stepNumber} of 07
                    </span>
                    <h3 className="text-2xl font-bold text-white">{activeStage.name}</h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{activeStage.metricLabel}</span>
                  <span className="text-sm font-bold font-mono text-emerald-300 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                    {activeStage.metricValue}
                  </span>
                </div>
              </div>

              <div className="my-8">
                <h4 className="text-xl font-bold text-white mb-3">{activeStage.title}</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activeStage.summary}
                </p>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-emerald-950/80">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1.5">
                    Operational Technical Protocol:
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
                    {activeStage.operationalDetail}
                  </p>
                </div>
              </div>

              {/* Progress Flow Step Bar */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {MEDIVANTA_JOURNEY_STAGES.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStepIndex
                          ? 'w-8 bg-emerald-400'
                          : i < activeStepIndex
                          ? 'w-4 bg-emerald-700'
                          : 'w-4 bg-slate-800'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % MEDIVANTA_JOURNEY_STAGES.length)}
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
