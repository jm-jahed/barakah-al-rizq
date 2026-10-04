'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowDown, Droplets, Filter, Database, Network, Activity, Cpu, Terminal, Home, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WATER_ARCHITECTURE_TIERS, WaterArchitectureTier } from '@/data/aquavantaData';

export function AquavantaArchitecture() {
  const [selectedTierId, setSelectedTierId] = useState<string>('sources');
  const selectedTier =
    WATER_ARCHITECTURE_TIERS.find((t) => t.tierId === selectedTierId) || WATER_ARCHITECTURE_TIERS[0];

  const getTierIcon = (id: string) => {
    switch (id) {
      case 'sources':
        return <Droplets className="w-4 h-4" />;
      case 'treatment':
        return <Filter className="w-4 h-4" />;
      case 'storage':
        return <Database className="w-4 h-4" />;
      case 'smart-distribution':
        return <Network className="w-4 h-4" />;
      case 'sensor-network':
        return <Activity className="w-4 h-4" />;
      case 'data-platform':
        return <Cpu className="w-4 h-4" />;
      case 'operations-center':
        return <Terminal className="w-4 h-4" />;
      case 'customer-endpoints':
        return <Home className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030713] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-STACK WATER ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Eight Integrated Hydraulic Tiers
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Connecting physical extraction assets, subterranean piping, IoT telemetry nodes, and cloud analytics into one unified intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 8-Tier Pipeline (5 cols) */}
          <div className="lg:col-span-5 space-y-1.5 font-mono text-xs">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 px-1 mb-2">
              Select Architecture Layer
            </div>

            {WATER_ARCHITECTURE_TIERS.map((tier, idx) => {
              const isSelected = tier.tierId === selectedTierId;
              return (
                <React.Fragment key={tier.tierId}>
                  <button
                    onClick={() => setSelectedTierId(tier.tierId)}
                    className={`w-full p-3 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        {getTierIcon(tier.tierId)}
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">
                          {tier.tierNumber}
                        </div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {tier.name}
                        </div>
                      </div>
                    </div>
                  </button>

                  {idx < WATER_ARCHITECTURE_TIERS.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-3 h-3 text-slate-700" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right Column: Selected Layer Deep Dive (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTier.tierId}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl relative"
              >
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 text-xs font-mono mb-3 border border-cyan-800/50">
                  <span>{selectedTier.tierNumber}</span>
                  <span>•</span>
                  <span>HYDRAULIC LAYER</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedTier.name}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mb-4 font-mono">
                  {selectedTier.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                  {selectedTier.summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6 font-mono text-xs">
                  <div className="text-[10px] text-cyan-400 uppercase mb-1">
                    Technical Specifications
                  </div>
                  <p className="text-slate-300 font-sans leading-relaxed">
                    {selectedTier.deepDive}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Equipment & Protocols
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {selectedTier.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 flex items-center gap-1.5 text-[11px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
