'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Eye, Brain, Cpu, ShieldCheck, ArrowRight, CheckCircle, ArrowDown, Terminal, Activity } from 'lucide-react';
import { WORKFLOW_STAGES, WorkflowStage } from '@/data/tensorisData';

export const TensorisWorkflowStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStageIcon = (icon: string) => {
    switch (icon) {
      case 'Layers': return Layers;
      case 'Eye': return Eye;
      case 'Brain': return Brain;
      case 'Cpu': return Cpu;
      case 'ShieldCheck': return ShieldCheck;
      default: return Activity;
    }
  };

  return (
    <section id="workflow" className="relative py-24 bg-[#020617] text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>COGNITIVE LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How TENSORIS Converts Data Complexity Into Action
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A deterministic, closed-loop neural pipeline that ingests messy enterprise data, reasons through counterfactuals, executes transactions, and continually reinforces accuracy.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const Icon = getStageIcon(stage.icon);
            const isActive = activeStep === idx;
            const isPast = activeStep > idx;

            return (
              <motion.div
                key={stage.step}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-4 relative ${
                  isActive
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-cyan-500/60 shadow-xl shadow-cyan-950/50 ring-1 ring-cyan-500/30'
                    : isPast
                    ? 'bg-slate-950/80 border-emerald-500/30 text-slate-300'
                    : 'bg-slate-950/50 border-slate-800 text-slate-400 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold border ${
                    isActive 
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400' 
                      : isPast 
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {stage.step}
                  </span>

                  <div className={`p-2 rounded-lg border ${
                    isActive ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {stage.name}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {stage.description}
                </p>

                <div className="pt-2 border-t border-slate-850 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 shrink-0" />
                  <span className="truncate">{stage.outputArtifact}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Stage Deep Explanation Card */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-[#020617] border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
              {React.createElement(getStageIcon(WORKFLOW_STAGES[activeStep].icon), { className: 'w-6 h-6' })}
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                STAGE {WORKFLOW_STAGES[activeStep].step} · {WORKFLOW_STAGES[activeStep].name}
              </div>
              <h4 className="text-base font-bold text-white mt-0.5">
                {WORKFLOW_STAGES[activeStep].title}
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Mechanism: {WORKFLOW_STAGES[activeStep].technicalMechanism}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : 4))}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(prev => (prev < 4 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
