'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Coins,
  ShoppingBag,
  Film,
  Building2,
  Activity,
  Briefcase,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { STRATOSYN_USE_CASES, IndustryUseCase } from '@/data/stratosynData';

export function StratosynUseCases() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('ai-ml');
  const selectedCase =
    STRATOSYN_USE_CASES.find((c) => c.id === selectedCaseId) || STRATOSYN_USE_CASES[0];

  const getUseCaseIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <Cpu className="w-5 h-5" />;
      case 'financial-systems':
        return <Coins className="w-5 h-5" />;
      case 'global-ecommerce':
        return <ShoppingBag className="w-5 h-5" />;
      case 'media-streaming':
        return <Film className="w-5 h-5" />;
      case 'enterprise-apps':
        return <Building2 className="w-5 h-5" />;
      case 'real-time-platforms':
        return <Activity className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#06080F] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ENTERPRISE USE CASES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Engineered for Demanding Enterprise Workloads
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Whether training sovereign foundational models in Dubai or routing high-frequency transactions in London, STRATOSYN provides tailored computational fabrics.
          </p>
        </div>

        {/* 6 Use Case Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {STRATOSYN_USE_CASES.map((uc) => {
            const isSelected = uc.id === selectedCaseId;
            return (
              <button
                key={uc.id}
                onClick={() => setSelectedCaseId(uc.id)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/20'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <div className={isSelected ? 'text-slate-950' : 'text-sky-400'}>
                  {getUseCaseIcon(uc.id)}
                </div>
                <div className="text-xs font-sans font-semibold mt-3 leading-snug">
                  {uc.industry}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Solution & Benefits (7 cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/80 text-sky-300 text-xs font-mono mb-3 border border-sky-800/50">
                  <span>ENTERPRISE SPECIFICATION</span>
                  <span>•</span>
                  <span>{selectedCase.industry}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedCase.tagline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                  {selectedCase.description}
                </p>

                {/* UAE Context Box */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
                  <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider mb-1">
                    UAE & GCC Sovereign Compliance
                  </div>
                  <div className="text-xs text-slate-300 font-sans leading-relaxed">
                    {selectedCase.uaeContext}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Infrastructure Benefits
                  </div>
                  {selectedCase.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Solution Details & Metrics (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Deployed Infrastructure Solution
                  </div>
                  <div className="text-sm font-bold text-white font-mono mb-4 p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-sky-300">
                    {selectedCase.infrastructureSolution}
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Workload Characteristic
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    {selectedCase.workloadPattern}
                  </p>
                </div>

                {/* 2 Key Metrics */}
                <div className="grid grid-cols-2 gap-3 font-mono pt-4 border-t border-slate-800/80">
                  {selectedCase.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                      <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                      <div className="text-lg font-bold text-emerald-400 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
