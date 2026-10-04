'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Radio, CheckCircle2, AlertCircle, RefreshCw, Cpu, Layers, ArrowRight } from 'lucide-react';
import { OBSERVABILITY_STATES, ObservabilityState } from '@/data/stratosynData';

export function StratosynObservability() {
  const [selectedStateName, setSelectedStateName] = useState<string>('Healthy');
  const selectedState =
    OBSERVABILITY_STATES.find((s) => s.state === selectedStateName) || OBSERVABILITY_STATES[0];

  return (
    <section id="observability" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060C] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>CONTINUOUS OBSERVABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Mission Control for Distributed Computing
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Five continuous operational states monitored at the kernel level. Every metric, trace, and log is aggregated into real-time health evaluations.
          </p>
        </div>

        {/* 5 State Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {OBSERVABILITY_STATES.map((obs) => {
            const isSelected = obs.state === selectedStateName;
            return (
              <button
                key={obs.state}
                onClick={() => setSelectedStateName(obs.state)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-sky-400 shadow-lg shadow-sky-950/40 ring-1 ring-sky-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {obs.code.split('_')[1]}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        obs.state === 'Healthy'
                          ? 'bg-emerald-400'
                          : obs.state === 'Scaling'
                          ? 'bg-sky-400'
                          : obs.state === 'Processing'
                          ? 'bg-indigo-400'
                          : obs.state === 'Routing'
                          ? 'bg-cyan-400'
                          : 'bg-amber-400'
                      }`}
                    />
                  </div>
                  <div className="text-base font-bold text-white">
                    {obs.state}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-sky-400 mt-3 pt-2 border-t border-slate-800/60">
                  P99: {obs.clusterP99}
                </div>
              </button>
            );
          })}
        </div>

        {/* State Telemetry Dashboard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedState.state}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 text-sky-300 text-xs font-mono mb-2 border border-slate-800">
                  <span>SYSTEM STATE CODE: {selectedState.code}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  State: {selectedState.state}
                </h3>
                <p className="text-sm text-slate-300 font-light mt-1">
                  {selectedState.description}
                </p>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs bg-slate-900/90 p-4 rounded-xl border border-slate-800 shrink-0">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">Active Pods</div>
                  <div className="text-lg font-bold text-white">{selectedState.activeProcesses.toLocaleString()}</div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">Error Rate</div>
                  <div className="text-lg font-bold text-emerald-400">{selectedState.errorRate}</div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">Latency P99</div>
                  <div className="text-lg font-bold text-sky-400">{selectedState.clusterP99}</div>
                </div>
              </div>
            </div>

            {/* Diagnostic Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-slate-400 uppercase text-[10px] mb-1">eBPF Syscall Monitor</div>
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>0 Unauthorized Memory Probes</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-slate-400 uppercase text-[10px] mb-1">Consensus Heartbeat</div>
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>7/7 Quorum Nodes Verified</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-slate-400 uppercase text-[10px] mb-1">Drift Detection Engine</div>
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Declarative Alignment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
