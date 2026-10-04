'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Network, Database, Terminal, Layers, ArrowRight, ShieldCheck, CheckCircle2, Activity } from 'lucide-react';
import { STRATOSYN_SYSTEM_LAYERS, SystemLayer } from '@/data/stratosynData';

export function StratosynSystemLayers() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('compute-layer');

  const selectedLayer =
    STRATOSYN_SYSTEM_LAYERS.find((l) => l.id === selectedLayerId) || STRATOSYN_SYSTEM_LAYERS[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'compute-layer':
        return <Cpu className="w-5 h-5" />;
      case 'network-layer':
        return <Network className="w-5 h-5" />;
      case 'data-layer':
        return <Database className="w-5 h-5" />;
      case 'control-layer':
        return <Terminal className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="system-architecture" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Engineered Across Four Integrated Layers
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            From bare-metal virtualization to declarative GitOps control planes, every tier of STRATOSYN is built from the ground up for low latency, security, and global resilience.
          </p>
        </div>

        {/* Layer Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {STRATOSYN_SYSTEM_LAYERS.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-sky-500/60 shadow-lg shadow-sky-950/40 ring-1 ring-sky-500/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                      {layer.tag}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg transition-colors ${
                        isSelected ? 'bg-sky-500/20 text-sky-400' : 'text-slate-500'
                      }`}
                    >
                      {getLayerIcon(layer.id)}
                    </div>
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    {layer.title}
                  </div>
                </div>
                <div className="text-xs text-sky-400/90 font-mono mt-2">
                  {layer.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLayer.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 md:p-10 backdrop-blur-md"
          >
            {/* Top Layer Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-mono mb-2">
                  <span>{selectedLayer.tag}</span>
                  <span>•</span>
                  <span>{selectedLayer.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedLayer.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium mt-1">
                  {selectedLayer.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-light mt-2 leading-relaxed">
                  {selectedLayer.description}
                </p>
              </div>

              {/* Technical Spec Box */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 w-full lg:w-auto lg:min-w-[280px]">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  System Specifications
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  {selectedLayer.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="text-slate-200 font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4 Core Capabilities in this Layer */}
            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Sub-Systems & Operational Capabilities
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedLayer.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">{cap.name}</span>
                        <Activity className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-3">
                        {cap.description}
                      </p>
                    </div>
                    <div className="pt-2.5 border-t border-slate-800/60 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-slate-400">Benchmark:</span>
                      <span className="text-sky-400 font-semibold">{cap.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
