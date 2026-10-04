'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitMerge, Cpu, ArrowRight, ShieldCheck, CheckCircle2, Activity, Sliders, Play } from 'lucide-react';
import { ORCHESTRATION_WORKFLOW, OrchestrationStep } from '@/data/stratosynData';

export function StratosynOrchestration() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep =
    ORCHESTRATION_WORKFLOW.find((s) => s.stepNumber === activeStep) || ORCHESTRATION_WORKFLOW[0];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070E] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <GitMerge className="w-3.5 h-3.5" />
            <span>INTELLIGENT ORCHESTRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Infrastructure That Adapts.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            When spikes hit or hardware fluctuates, the STRATOSYN control plane evaluates, routes, scales, and rebalances workloads autonomously in sub-milliseconds.
          </p>
        </div>

        {/* 6-Stage Interactive Workflow Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-12">
          {ORCHESTRATION_WORKFLOW.map((step) => {
            const isActive = step.stepNumber === activeStep;
            const isCompleted = step.stepNumber < activeStep;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-sky-950/80 border-sky-400 shadow-lg shadow-sky-950/40 ring-1 ring-sky-400/30'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className={isActive ? 'text-sky-300 font-bold' : 'text-slate-400'}>
                      {step.label}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    )}
                  </div>
                  <div className="text-xs font-bold text-white leading-snug">
                    {step.title}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-cyan-400 mt-3 pt-2 border-t border-slate-800/60">
                  {step.resolvedInMs}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Execution View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.stepNumber}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Details (7 cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/80 text-sky-300 text-xs font-mono mb-3 border border-sky-800/50">
                  <span>STAGE 0{currentStep.stepNumber} OF 06</span>
                  <span>•</span>
                  <span>{currentStep.label}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {currentStep.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                  {currentStep.action}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-slate-400 uppercase text-[10px] mb-0.5">Automated Policy</div>
                    <div className="text-slate-200 font-semibold">{currentStep.automatedPolicy}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-slate-400 uppercase text-[10px] mb-0.5">Telemetry Trigger</div>
                    <div className="text-sky-300 font-semibold">{currentStep.telemetryTrigger}</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Metric Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 p-6 text-center font-mono flex flex-col items-center justify-center">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  Resolution Velocity
                </div>
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 my-2">
                  {currentStep.resolvedInMs}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Autonomous deterministic execution without manual operator triage
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveStep((prev) => (prev < 6 ? prev + 1 : 1))
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-sans font-semibold text-xs transition-colors"
                  >
                    <span>{activeStep < 6 ? 'Next Stage →' : 'Restart Cycle ↺'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
