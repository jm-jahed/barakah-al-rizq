'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Boxes, Activity, PlayCircle, Radio, Database, Terminal, Code2, CheckCircle2, Copy, Check } from 'lucide-react';
import { CLOUD_CAPABILITIES, CloudCapability } from '@/data/stratosynData';

export function StratosynCapabilities() {
  const [selectedCapId, setSelectedCapId] = useState<string>('elastic-compute');
  const [copied, setCopied] = useState(false);

  const selectedCap =
    CLOUD_CAPABILITIES.find((c) => c.id === selectedCapId) || CLOUD_CAPABILITIES[0];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCapIcon = (id: string) => {
    switch (id) {
      case 'elastic-compute':
        return <Cpu className="w-4 h-4" />;
      case 'container-infrastructure':
        return <Boxes className="w-4 h-4" />;
      case 'gpu-compute':
        return <Activity className="w-4 h-4" />;
      case 'serverless-execution':
        return <PlayCircle className="w-4 h-4" />;
      case 'edge-computing':
        return <Radio className="w-4 h-4" />;
      case 'distributed-storage':
        return <Database className="w-4 h-4" />;
      case 'observability':
        return <Activity className="w-4 h-4" />;
      case 'infrastructure-automation':
        return <Terminal className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#060810] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Eight Building Blocks of Modern Compute
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Modular, high-performance infrastructure components designed to support complex distributed systems, high-burst AI training, and low-latency client workloads.
          </p>
        </div>

        {/* 8-Tab Capability Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {CLOUD_CAPABILITIES.map((cap) => {
            const isSelected = cap.id === selectedCapId;
            return (
              <button
                key={cap.id}
                onClick={() => setSelectedCapId(cap.id)}
                className={`p-3 rounded-xl text-center transition-all duration-200 border flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/20'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <div className={isSelected ? 'text-slate-950' : 'text-sky-400'}>
                  {getCapIcon(cap.id)}
                </div>
                <span className="text-[11px] font-sans font-semibold leading-tight line-clamp-1">
                  {cap.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive Interactive Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCap.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Capability Overview & Highlights (6 cols) */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/80 text-sky-300 text-xs font-mono mb-3 border border-sky-800/50">
                  <span>{selectedCap.tag}</span>
                  <span>•</span>
                  <span>{selectedCap.architectureTier}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedCap.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium mb-3">
                  {selectedCap.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                  {selectedCap.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Architectural Specifications
                  </div>
                  {selectedCap.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Core Primitives
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {selectedCap.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Code Sample & Impact Metric (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                {/* Benchmark Impact Badge */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between font-mono">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Benchmark Metric</div>
                    <div className="text-xl font-bold text-emerald-400 mt-0.5">
                      {selectedCap.impactMetric}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 text-right">
                    Zero Pre-Provisioning Waste
                  </div>
                </div>

                {/* Code Sample Terminal Window */}
                <div className="rounded-xl bg-[#030508] border border-slate-800/90 overflow-hidden font-mono text-xs shadow-xl">
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-950 border-b border-slate-800/80 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-sky-400" />
                      <span className="text-[11px] text-slate-300">manifest.ts</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(selectedCap.codeSample)}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed text-slate-300 bg-black/40">
                    <code>{selectedCap.codeSample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
