'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Microscope, Dna, ShieldCheck, CheckCircle2, Clock, Activity } from 'lucide-react';
import { LAB_CATEGORIES, LabWorkflowCategory } from '@/data/virelisData';

export function VirelisLabIntelligence() {
  const [selectedCatId, setSelectedCatId] = useState<string>('hematology');
  const selectedCat =
    LAB_CATEGORIES.find((c) => c.id === selectedCatId) || LAB_CATEGORIES[0];

  return (
    <section id="lab-intelligence" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030509] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>LABORATORY AUTOMATION & AUTO-VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            High-Throughput Laboratory Intelligence
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Automating analytical workflows across hematology, clinical chemistry, microbiology mass spectrometry, and next-generation molecular sequencing.
          </p>
        </div>

        {/* 5 Lab Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {LAB_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-teal-400 shadow-lg ring-1 ring-teal-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                    <span>{cat.sampleCount} Samples</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  </div>
                  <div className="text-xs font-bold text-white leading-snug">
                    {cat.category}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-teal-400 mt-3 pt-2 border-t border-slate-800/60">
                  Avg: {cat.avgTurnaroundMinutes}m TAT
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-teal-950/80 text-teal-300 text-xs font-mono mb-3 border border-teal-800/50">
                <span>ANALYTICAL WORKSPACE</span>
                <span>•</span>
                <span>{selectedCat.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedCat.category} Intelligence
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                {selectedCat.description}
              </p>

              {/* Primary Instruments */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Connected Laboratory Instrumentation
                </div>
                <div className="space-y-2">
                  {selectedCat.primaryInstruments.map((inst, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{inst}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Telemetry Metric Block (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Active Batches</div>
                <div className="text-2xl font-bold text-teal-400 mt-1">
                  {selectedCat.activeBatches}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">QC Compliance</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">
                  {selectedCat.qualityControlScore}%
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Avg Turnaround</div>
                <div className="text-2xl font-bold text-white mt-1">
                  {selectedCat.avgTurnaroundMinutes} min
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Current Status</div>
                <div className="text-sm font-bold text-sky-300 mt-2">
                  {selectedCat.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
