'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Activity, Ship, Building2, ShoppingBag, Crown, ArrowRight, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { INDUSTRY_SOLUTIONS, IndustrySolution } from '@/data/tensorisData';

interface TensorisIndustriesProps {
  onOpenModal: (industry?: string) => void;
}

export const TensorisIndustries: React.FC<TensorisIndustriesProps> = ({ onOpenModal }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRY_SOLUTIONS[0].id);

  const activeIndustry = INDUSTRY_SOLUTIONS.find(i => i.id === selectedIndustryId) || INDUSTRY_SOLUTIONS[0];

  const getIndustryIcon = (icon: string) => {
    switch (icon) {
      case 'Landmark': return Landmark;
      case 'Activity': return Activity;
      case 'Ship': return Ship;
      case 'Building2': return Building2;
      case 'ShoppingBag': return ShoppingBag;
      case 'Crown': return Crown;
      default: return Building;
    }
  };

  return (
    <section id="industries" className="relative py-24 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-900">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>ENTERPRISE INDUSTRY VERTICALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Cognitive Infrastructure for Key UAE Sectors
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Pre-integrated with UAE national registries, regulatory reporting frameworks (DIFC, ADGM, Central Bank, DHA, DLD), and regional enterprise ERP systems.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {INDUSTRY_SOLUTIONS.map((ind) => {
            const Icon = getIndustryIcon(ind.icon);
            const isSelected = selectedIndustryId === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-900 to-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-950/40 text-white ring-1 ring-cyan-500/30'
                    : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit border ${
                  isSelected ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold truncate">{ind.industry.split('&')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-[#030712] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                    {React.createElement(getIndustryIcon(activeIndustry.icon), { className: 'w-7 h-7' })}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                      INDUSTRY VERTICAL SOLUTION
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {activeIndustry.industry}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {activeIndustry.description}
                </p>

                {/* UAE Context Banner */}
                <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>UAE Alignment:</strong> {activeIndustry.uaeContext}</span>
                </div>

                {/* Key Use Cases */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Priority Deployment Use Cases:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeIndustry.keyUseCases.map((useCase, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Metrics & Architecture Highlight */}
              <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-slate-950/90 border border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Documented Performance Impact:
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {activeIndustry.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
                      <div className="text-lg font-bold font-mono text-cyan-300">{m.value}</div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">Architecture Highlight:</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{activeIndustry.architectureHighlight}</p>
                </div>

                <button
                  onClick={() => onOpenModal(`Industry Architecture Proposal: ${activeIndustry.industry}`)}
                  className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                >
                  <span>Request {activeIndustry.industry.split(' ')[0]} Architecture Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
