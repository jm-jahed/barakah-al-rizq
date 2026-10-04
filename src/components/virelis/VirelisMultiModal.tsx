'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MULTI_MODAL_STREAMS } from '@/data/virelisData';
import { FlaskConical, Eye, Dna, Microscope, TrendingUp, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Dna: <Dna className="w-5 h-5" />,
  Microscope: <Microscope className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />
};

export const VirelisMultiModal: React.FC = () => {
  const [activeStreamId, setActiveStreamId] = useState<string>(MULTI_MODAL_STREAMS[0].id);

  const activeStream = MULTI_MODAL_STREAMS.find(s => s.id === activeStreamId) || MULTI_MODAL_STREAMS[0];

  return (
    <section className="relative py-28 bg-[#04070c] border-b border-cyan-950/40 text-slate-100 overflow-hidden">
      {/* Background subtle grid and cyan glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              Multi-Modal Diagnostics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Every Diagnostic Modality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Synchronized into One Workspace.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Clinical diagnosis rarely lives in one test alone. VIRELIS harmonizes quantitative blood chemistry, volumetric 3D scans, genomic variants, and whole-slide histopathology without claiming autonomous diagnoses.
          </p>
        </div>

        {/* Multi-modal grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stream selector tabs */}
          <div className="lg:col-span-5 space-y-3">
            {MULTI_MODAL_STREAMS.map((stream) => {
              const isSelected = stream.id === activeStreamId;
              return (
                <button
                  key={stream.id}
                  onClick={() => setActiveStreamId(stream.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/40 to-slate-900/60 border-cyan-500/50 shadow-[0_0_25px_rgba(0,240,255,0.15)] ring-1 ring-cyan-400/20'
                      : 'bg-[#080d15]/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                  }`}
                >
                  <div className={`p-3 rounded-lg border ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-400'
                  }`}>
                    {iconMap[stream.icon] || <Layers className="w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold text-sm sm:text-base truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {stream.domain}
                      </h3>
                      {isSelected && <ArrowRight className="w-4 h-4 text-cyan-400 ml-2 shrink-0 animate-pulse" />}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{stream.dataType}</p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-cyan-400/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      Source: {stream.inputSource}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stream Deep Dive Detail Box */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#09111e] to-[#060b13] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                {iconMap[activeStream.icon] || <Layers className="w-32 h-32 text-cyan-400" />}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                      {iconMap[activeStream.icon]}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">Active Data Modality</span>
                      <h3 className="text-xl font-bold text-white">{activeStream.domain}</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Live Pipeline
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Payload Format</span>
                    <p className="text-sm font-semibold text-cyan-200">{activeStream.dataType}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Hardware / Ingestion Source</span>
                    <p className="text-sm font-semibold text-slate-200">{activeStream.inputSource}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">Algorithmic Processing Pipeline</h4>
                    <p className="text-sm text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 leading-relaxed font-mono text-xs">
                      {activeStream.processingPipeline}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1.5">Structured Clinician Interface</h4>
                    <p className="text-sm text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 leading-relaxed">
                      {activeStream.clinicalOutput}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Cross-Correlated with Longitudinal EHR</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Validated Schema
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
