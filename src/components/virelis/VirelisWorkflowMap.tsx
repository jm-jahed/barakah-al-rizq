'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Calendar, Barcode, Cpu, Microscope, ShieldCheck, FileCheck, CheckCircle2, ArrowDown } from 'lucide-react';
import { DIAGNOSTIC_WORKFLOW_MAP, DiagnosticWorkflowStep } from '@/data/virelisData';

export function VirelisWorkflowMap() {
  const [selectedStepId, setSelectedStepId] = useState<string>('req');
  const selectedStep =
    DIAGNOSTIC_WORKFLOW_MAP.find((s) => s.stepId === selectedStepId) || DIAGNOSTIC_WORKFLOW_MAP[0];

  const getStepIcon = (id: string) => {
    switch (id) {
      case 'req':
        return <FileText className="w-4 h-4" />;
      case 'sched':
        return <Calendar className="w-4 h-4" />;
      case 'coll':
        return <Barcode className="w-4 h-4" />;
      case 'proc':
        return <Cpu className="w-4 h-4" />;
      case 'ana':
        return <Microscope className="w-4 h-4" />;
      case 'val':
        return <ShieldCheck className="w-4 h-4" />;
      case 'rep':
        return <FileCheck className="w-4 h-4" />;
      case 'clin':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section id="workflow-map" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030509] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FULL-STACK DIAGNOSTIC PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Eight Stages of Clinical Rigor
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            An end-to-end digital map tracking patient orders from computerized physician entry through analytical auto-validation to final care decisions.
          </p>
        </div>

        {/* 8-Stage Interactive Horizontal / Vertical Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 8-Step Pipeline (5 cols) */}
          <div className="lg:col-span-5 space-y-1.5 font-mono text-xs">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 px-1 mb-2">
              Select Diagnostic Stage
            </div>

            {DIAGNOSTIC_WORKFLOW_MAP.map((step, idx) => {
              const isSelected = step.stepId === selectedStepId;
              return (
                <React.Fragment key={step.stepId}>
                  <button
                    onClick={() => setSelectedStepId(step.stepId)}
                    className={`w-full p-3 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-sky-950/80 border-sky-400 shadow-lg shadow-sky-950/40 ring-1 ring-sky-400/40'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-sky-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        {getStepIcon(step.stepId)}
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">
                          {step.stepNumber}
                        </div>
                        <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                          {step.name}
                        </div>
                      </div>
                    </div>
                  </button>

                  {idx < DIAGNOSTIC_WORKFLOW_MAP.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-3 h-3 text-slate-700" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right Column: Selected Step Detail (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStep.stepId}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl relative"
              >
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/80 text-sky-300 text-xs font-mono mb-3 border border-sky-800/50">
                  <span>{selectedStep.stepNumber}</span>
                  <span>•</span>
                  <span>DIAGNOSTIC PROTOCOL</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedStep.name}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mb-4 font-mono">
                  {selectedStep.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                  {selectedStep.summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6 font-mono text-xs">
                  <div className="text-[10px] text-sky-400 uppercase mb-1">
                    Underlying Engineering Mechanism
                  </div>
                  <p className="text-slate-300 font-sans leading-relaxed">
                    {selectedStep.deepDive}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Clinical Standards & Protocols
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {selectedStep.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-300 flex items-center gap-1.5 text-[11px]"
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
