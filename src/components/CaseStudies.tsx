'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DETAILED_CASE_STUDIES } from '@/data/siteData';
import { Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenOrderModal: (serviceId?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenOrderModal }) => {
  const [activeTabId, setActiveTabId] = useState<string>(DETAILED_CASE_STUDIES[0]?.id || 'cs-1');
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'challenge' | 'strategy' | 'solution'>('all');

  const currentStudy = DETAILED_CASE_STUDIES.find(cs => cs.id === activeTabId) || DETAILED_CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-28 bg-[#0B0907] relative z-10 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4 backdrop-blur-md"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold font-mono text-amber-400 uppercase tracking-widest">
              Interactive Product Breakdown
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Case Studies & Architecture Deep Dives.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed"
          >
            Engineering strategy, technical choices, and benchmark results from recent production builds.
          </motion.p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {DETAILED_CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => {
                setActiveTabId(study.id);
                setActiveSubTab('all');
              }}
              data-cursor-text="VIEW"
              className={`px-6 py-3 rounded-2xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTabId === study.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25 scale-[1.03]'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-amber-500/40'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{study.client}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Presentation Box */}
        <AnimatePresence mode="wait">
          {currentStudy && (
            <motion.div
              key={currentStudy.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-8 sm:p-12 rounded-3xl bg-[#14100C] border border-amber-500/30 shadow-2xl shadow-black/90 relative overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl pointer-events-none" />

              {/* Case Study Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                      CLIENT CASE: {currentStudy.client}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {currentStudy.title}
                  </h3>
                </div>

                {/* Key Outcome Metrics */}
                <div className="flex flex-wrap gap-4 shrink-0">
                  {currentStudy.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex flex-col items-center justify-center min-w-[110px]"
                    >
                      <span className="text-xl font-extrabold font-mono text-amber-400">{m.value}</span>
                      <span className="text-[10px] text-gray-400 font-medium tracking-wide mt-0.5">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-tab view toggle */}
              <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 border-b border-white/5">
                {[
                  { id: 'all', label: 'FULL BREAKDOWN' },
                  { id: 'challenge', label: '01. THE CHALLENGE' },
                  { id: 'strategy', label: '02. THE STRATEGY' },
                  { id: 'solution', label: '03. THE SOLUTION' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setActiveSubTab(st.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-colors shrink-0 ${
                      activeSubTab === st.id
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Step Content Breakdown with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 relative z-10"
                >
                  {(activeSubTab === 'all' || activeSubTab === 'challenge') && (
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-colors">
                      <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        01 // The Challenge
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{currentStudy.challenge}</p>
                    </div>
                  )}

                  {(activeSubTab === 'all' || activeSubTab === 'strategy') && (
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-colors">
                      <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        02 // Engineering Strategy
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{currentStudy.strategy}</p>
                    </div>
                  )}

                  {(activeSubTab === 'all' || activeSubTab === 'solution') && (
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-colors">
                      <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        03 // Deployed Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{currentStudy.solution}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Case Study Footer Tech Stack & Request */}
              <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono mr-2">Tech Stack:</span>
                  {currentStudy.technologies.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenOrderModal(currentStudy.id)}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <span>Request Architecture Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
