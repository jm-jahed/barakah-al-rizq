'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Eye, User, Clock, FileText, Cpu, Layers, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function VirelisDiagnosticSignals() {
  const streams = [
    { title: 'Laboratory Data', desc: 'Quantitative biochemical & hematology panels', icon: <FlaskConical className="w-4 h-4 text-teal-400" /> },
    { title: 'Imaging Data', desc: 'High-resolution DICOM volumetric slices', icon: <Eye className="w-4 h-4 text-indigo-400" /> },
    { title: 'Patient Context', desc: 'Comorbidities, medications & vitals', icon: <User className="w-4 h-4 text-sky-400" /> },
    { title: 'Historical Results', desc: '5-year longitudinal baseline curves', icon: <Clock className="w-4 h-4 text-cyan-400" /> },
    { title: 'Clinical Notes', desc: 'Attending physician signs & symptoms', icon: <FileText className="w-4 h-4 text-slate-300" /> }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030509] border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONTEXTUAL MULTI-STREAM SYNTHESIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Every Signal Has Context.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            An isolated biomarker or an isolated scan rarely tells the whole story. VIRELIS fuses discrete diagnostic streams into a single coherent clinical picture.
          </p>
        </div>

        {/* Animated Multi-Stream Convergence Frame */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden font-mono text-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: 5 Ingress Streams (4 cols) */}
            <div className="md:col-span-4 space-y-2.5">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-3">
                Incoming Diagnostic Streams
              </div>
              {streams.map((stream, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                    {stream.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-sans">{stream.title}</div>
                    <div className="text-[10px] text-slate-400">{stream.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Column: Central Intelligence Synthesis Layer (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-sky-500/30 text-center shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center mb-4 text-sky-400">
                <Cpu className="w-7 h-7 animate-pulse" />
              </div>
              <div className="text-sm font-bold text-white font-sans mb-1">
                Diagnostic Intelligence Layer
              </div>
              <p className="text-[11px] text-slate-400 font-sans font-light leading-relaxed mb-4">
                Automated multi-modal correlation, delta checking against historical baselines, and clinical guideline alignment.
              </p>
              <div className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 text-[10px] border border-sky-500/20">
                ● High-Dimension Synthesis
              </div>
            </div>

            {/* Right Column: Structured Clinical Insight Output (4 cols) */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="text-[11px] uppercase tracking-wider text-teal-400">
                Clinician-Readable Output
              </div>
              <h4 className="text-base font-bold text-white font-sans">
                Structured Diagnostic Insight
              </h4>
              <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                Replaces disjointed PDFs with an interactive, chronological timeline highlighting actionable findings and physiological trends.
              </p>

              <div className="pt-3 border-t border-slate-800/80 space-y-2 text-slate-300 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Integrated multi-specialty workspace</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>-65% Time to synthesis for specialists</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
