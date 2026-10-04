'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Layers, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface StoryStep {
  step: string;
  headline: string;
  detail: string;
  signalContext: string;
}

const STORY_STEPS: StoryStep[] = [
  {
    step: '01',
    headline: 'An Isolated Signal Begins',
    detail: 'A micro-variation in spectrophotometric absorption or a single atypical voxel is detected. Alone, it is merely raw noise.',
    signalContext: 'SIGNAL INGESTION: 0.14 OD Shift'
  },
  {
    step: '02',
    headline: 'Laboratory Data Joins',
    detail: 'Photometric biomarkers, leukocyte counts, and electrolyte kinetic curves add biochemical depth to the raw signal.',
    signalContext: 'BIOCHEMICAL DEPTH: 14 Panels Aligned'
  },
  {
    step: '03',
    headline: 'High-Resolution Imaging Connects',
    detail: '3T MRI volumetric slices and dual-source CT reconstructions co-register anatomical location with molecular activity.',
    signalContext: 'ANATOMICAL CO-REGISTRATION: 0.4mm Isotropic 3D'
  },
  {
    step: '04',
    headline: 'Longitudinal Baselines Align',
    detail: '5-year historical health records distinguish acute disease shifts from the patient’s established chronic physiological baseline.',
    signalContext: 'TEMPORAL PLOTTING: 5-Year Baseline Delta-Check'
  },
  {
    step: '05',
    headline: 'Quality & Specialist Review Verifies',
    detail: 'Automated multirules confirm analytical precision; certified consulting specialists review the harmonized evidence package.',
    signalContext: 'CLINICIAN SIGN-OFF: PKI SHA-256 Authorized'
  }
];

export const VirelisSignatureStory: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = STORY_STEPS[activeStepIndex];

  return (
    <section className="relative py-32 bg-[#020408] border-b border-cyan-950/40 text-slate-100 overflow-hidden">
      {/* Dynamic backdrop animation glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Signature Diagnostic Story
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            “A RESULT IS MORE THAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              A NUMBER.”
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            From an isolated biological signal to a multidimensional evidence package. Better information creates better decisions.
          </p>
        </div>

        {/* Interactive Story Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Step Timeline Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {STORY_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/50 to-slate-900/80 border-cyan-500/60 shadow-[0_0_25px_rgba(0,240,255,0.15)] ring-1 ring-cyan-400/30'
                      : 'bg-[#060b13]/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30 text-slate-400'
                  }`}
                >
                  <span className={`text-sm font-mono font-bold px-2.5 py-1 rounded-lg border ${
                    isSelected ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300' : 'bg-slate-800/60 border-slate-700 text-slate-500'
                  }`}>
                    {step.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {step.headline}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-1">{step.detail}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cinematic Visualization Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#081220] via-[#040912] to-[#02050a] border border-cyan-500/40 shadow-2xl relative overflow-hidden">
              {/* Subtle animated signal line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Signal Evolution Phase {currentStep.step} / 05
                </span>
                <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                  {currentStep.signalContext}
                </span>
              </div>

              <div className="my-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {currentStep.headline}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  {currentStep.detail}
                </p>

                {/* Conceptual Waveform & Signal Display */}
                <div className="p-6 rounded-2xl bg-black/60 border border-cyan-500/20 font-mono">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span>DIAGNOSTIC VISUALIZATION — CONCEPT</span>
                    <span className="text-cyan-400">Harmonized Stream</span>
                  </div>
                  
                  {/* Stylized signal progress bars */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>Signal Confidence Index</span>
                      <span className="text-cyan-400 font-bold">99.8%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 transition-all duration-700" 
                        style={{ width: `${(activeStepIndex + 1) * 20}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Clinician-supervised diagnostic decision support
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % STORY_STEPS.length)}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold font-mono transition-colors flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
                >
                  Next Phase <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
