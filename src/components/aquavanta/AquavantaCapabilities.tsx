'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Network,
  Radio,
  ShieldCheck,
  TrendingUp,
  Wrench,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Droplets
} from 'lucide-react';
import { AQUAVANTA_CAPABILITIES, WaterCapability } from '@/data/aquavantaData';

export function AquavantaCapabilities() {
  const [selectedCapId, setSelectedCapId] = useState<string>('network-intelligence');
  const selectedCap =
    AQUAVANTA_CAPABILITIES.find((c) => c.id === selectedCapId) || AQUAVANTA_CAPABILITIES[0];

  const getCapIcon = (id: string) => {
    switch (id) {
      case 'network-intelligence':
        return <Activity className="w-4 h-4" />;
      case 'flow-management':
        return <Network className="w-4 h-4" />;
      case 'leak-detection':
        return <Radio className="w-4 h-4" />;
      case 'water-quality':
        return <ShieldCheck className="w-4 h-4" />;
      case 'demand-forecasting':
        return <TrendingUp className="w-4 h-4" />;
      case 'asset-monitoring':
        return <Wrench className="w-4 h-4" />;
      case 'emergency-response':
        return <AlertTriangle className="w-4 h-4" />;
      case 'analytics':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <Droplets className="w-4 h-4" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030713] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Droplets className="w-3.5 h-3.5" />
            <span>INFRASTRUCTURE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Eight Modules of Smart Water Engineering
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Modular, cloud-connected operational systems engineered for modern municipal utilities, sovereign water authorities, and large-scale master developments.
          </p>
        </div>

        {/* 8-Tab Capability Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {AQUAVANTA_CAPABILITIES.map((cap) => {
            const isSelected = cap.id === selectedCapId;
            return (
              <button
                key={cap.id}
                onClick={() => setSelectedCapId(cap.id)}
                className={`p-3 rounded-xl text-center transition-all duration-200 border flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className={isSelected ? 'text-slate-950' : 'text-cyan-400'}>
                  {getCapIcon(cap.id)}
                </div>
                <span className="text-[11px] font-sans font-semibold leading-tight line-clamp-1">
                  {cap.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCap.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 text-xs font-mono mb-3 border border-cyan-800/50">
                  <span>{selectedCap.tag}</span>
                  <span>•</span>
                  <span>{selectedCap.title}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedCap.subtitle}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {selectedCap.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Engineering Features
                  </div>
                  {selectedCap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Core Primitives
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {selectedCap.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metric Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 p-6 text-center font-mono flex flex-col items-center justify-center">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  Impact Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 my-2">
                  {selectedCap.impactMetric}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Validated against standard hydraulic SCADA performance
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
