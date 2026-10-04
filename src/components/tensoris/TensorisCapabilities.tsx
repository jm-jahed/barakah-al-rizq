'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Activity, Bot, TrendingUp, Network, Lock, ArrowRight, Code2, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { AI_CAPABILITIES, AiCapability } from '@/data/tensorisData';

interface TensorisCapabilitiesProps {
  onOpenModal: (capability?: string) => void;
}

export const TensorisCapabilities: React.FC<TensorisCapabilitiesProps> = ({ onOpenModal }) => {
  const [selectedCapId, setSelectedCapId] = useState<string>(AI_CAPABILITIES[0].id);
  const [activeTab, setActiveTab] = useState<'overview' | 'code'>('overview');

  const selectedCap = AI_CAPABILITIES.find(c => c.id === selectedCapId) || AI_CAPABILITIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Activity': return Activity;
      case 'Bot': return Bot;
      case 'TrendingUp': return TrendingUp;
      case 'Network': return Network;
      case 'Lock': return Lock;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="capabilities" className="relative py-24 bg-[#020617] text-slate-100 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SIX PILLARS OF SOVEREIGN AI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise AI Capabilities Engineered for Supremacy
            </h2>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              Moving beyond superficial prompts into high-throughput neural infrastructure, deterministic business automation, and sovereign compliance.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenModal('Comprehensive AI Capabilities Consultation')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 font-semibold text-sm border border-cyan-500/30 hover:border-cyan-500/60 shadow-lg shadow-cyan-950/40 transition-all duration-200"
            >
              <span>Request Capability Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Capabilities Interactive Grid & Inspection Modal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AI_CAPABILITIES.map((cap) => {
            const Icon = getIcon(cap.icon);
            const isSelected = selectedCapId === cap.id;

            return (
              <motion.div
                key={cap.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedCapId(cap.id)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 space-y-4 relative ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-cyan-500/60 shadow-xl shadow-cyan-950/50 ring-1 ring-cyan-500/30'
                    : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                      {cap.tag}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {cap.impactMetric}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                    {cap.subtitle}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {cap.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>Inspect Technical Architecture</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive Drawer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCap.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#020617] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60"
          >
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                  {React.createElement(getIcon(selectedCap.icon), { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold">
                    CAPABILITY SPECIFICATION — {selectedCap.tag}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCap.title}
                  </h3>
                </div>
              </div>

              {/* View Switcher: Overview vs Code */}
              <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview & Specs
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors ${
                    activeTab === 'code'
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>SDK Implementation</span>
                </button>
              </div>
            </div>

            {/* Content Based on Tab */}
            {activeTab === 'overview' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-base font-bold text-white">
                    {selectedCap.subtitle}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedCap.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Technical Deliverables:
                    </div>
                    {selectedCap.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Certified Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCap.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="text-xs font-mono text-slate-500">Documented Impact SLA:</div>
                    <div className="text-xl font-bold font-mono text-emerald-400">
                      {selectedCap.impactMetric}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenModal(`Capability: ${selectedCap.title}`)}
                    className="w-full mt-2 py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2"
                  >
                    <span>Deploy This Capability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto relative">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>tensoris-sdk / {selectedCap.id}.ts</span>
                    </span>
                    <span className="text-slate-500">TypeScript 5.4 · Strict Mode</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
                    <code>{selectedCap.codeSample}</code>
                  </pre>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
