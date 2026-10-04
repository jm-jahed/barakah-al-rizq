'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ChevronDown, ArrowDown, Cpu, Database, Network, Activity, Terminal, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ARCHITECTURE_STORY_NODES, ArchitectureTierNode } from '@/data/stratosynData';

export function StratosynArchitectureStory() {
  const [selectedTierId, setSelectedTierId] = useState<string>('application');
  const selectedNode =
    ARCHITECTURE_STORY_NODES.find((n) => n.tierId === selectedTierId) || ARCHITECTURE_STORY_NODES[0];

  const getTierIcon = (id: string) => {
    switch (id) {
      case 'application':
        return <Layers className="w-4 h-4" />;
      case 'orchestration':
        return <Terminal className="w-4 h-4" />;
      case 'compute':
        return <Cpu className="w-4 h-4" />;
      case 'network':
        return <Network className="w-4 h-4" />;
      case 'data':
        return <Database className="w-4 h-4" />;
      case 'observability':
        return <Activity className="w-4 h-4" />;
      case 'global-infrastructure':
        return <Globe className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="architecture-story" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060C] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INTERACTIVE FULL-STACK REVEAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Seven Tiers of Precision Engineering
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Follow the path of a client interaction as it cascades from user-facing applications down to physical sovereign carrier facilities.
          </p>
        </div>

        {/* Vertical Flow Pipeline Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 7-Tier Vertical Pipeline (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1 mb-2">
              Select Architecture Tier
            </div>
            {ARCHITECTURE_STORY_NODES.map((tier, idx) => {
              const isSelected = tier.tierId === selectedTierId;
              return (
                <React.Fragment key={tier.tierId}>
                  <button
                    onClick={() => setSelectedTierId(tier.tierId)}
                    className={`w-full p-3.5 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-sky-950/80 border-sky-400 shadow-lg shadow-sky-950/40 ring-1 ring-sky-400/40'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-sky-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        {getTierIcon(tier.tierId)}
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">
                          {tier.tierNumber}
                        </div>
                        <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                          {tier.name}
                        </div>
                      </div>
                    </div>

                    <div className="text-right font-mono text-[11px] text-sky-400">
                      {tier.latencyFootprint}
                    </div>
                  </button>

                  {idx < ARCHITECTURE_STORY_NODES.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-3.5 h-3.5 text-slate-700" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right Column: Selected Tier Deep Dive (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.tierId}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl relative"
              >
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/80 text-sky-300 text-xs font-mono mb-3 border border-sky-800/50">
                  <span>{selectedNode.tierNumber}</span>
                  <span>•</span>
                  <span>{selectedNode.latencyFootprint}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedNode.name}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mb-4">
                  {selectedNode.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                  {selectedNode.summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Deep-Dive Technical Operation
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {selectedNode.deepDive}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Implementation Technologies
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {selectedNode.keyTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-300 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
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
