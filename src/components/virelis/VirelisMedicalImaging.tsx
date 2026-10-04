'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Activity, CheckCircle2, ShieldCheck, Sliders, Maximize2 } from 'lucide-react';
import { IMAGING_MODALITIES, ImagingModality } from '@/data/virelisData';

export function VirelisMedicalImaging() {
  const [selectedModId, setSelectedModId] = useState<string>('mri-workflow');
  const selectedMod =
    IMAGING_MODALITIES.find((m) => m.id === selectedModId) || IMAGING_MODALITIES[0];

  return (
    <section id="medical-imaging" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060A] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>DICOM WEB RECONSTRUCTION & STREAMING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Turn Images Into Information.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Zero-footprint web DICOM viewing, multi-planar reconstruction, temporal side-by-side comparison, and specialist reporting workflows without heavy desktop installations.
          </p>
        </div>

        {/* 4 Modality Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {IMAGING_MODALITIES.map((mod) => {
            const isSelected = mod.id === selectedModId;
            return (
              <button
                key={mod.id}
                onClick={() => setSelectedModId(mod.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-400 shadow-xl shadow-indigo-950/40 ring-1 ring-indigo-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-indigo-400 uppercase">{mod.code}</span>
                    <span className="text-slate-400">{mod.activeStudies} Studies</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {mod.modality}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-800/60 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Recon: {mod.avgReconTime}</span>
                  <span className="text-indigo-300 font-semibold">{mod.sliceResolution}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Modality Deep Workspace */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Abstract Reconstruction Frame (7 cols) */}
            <div className="lg:col-span-7 bg-[#020408] rounded-xl border border-indigo-950/80 p-6 relative overflow-hidden min-h-[300px] flex flex-col justify-between font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  <span>DICOM WADO-RS VOLUMETRIC STREAM</span>
                </span>
                <span>{selectedMod.sliceResolution}</span>
              </div>

              {/* Schematic imaging volumetric grid */}
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <div className="w-48 h-48 rounded-2xl border border-indigo-500/30 bg-indigo-950/20 flex flex-col items-center justify-center p-4 relative">
                  <div className="absolute inset-2 border border-dashed border-indigo-400/20 rounded-xl" />
                  <Eye className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-[11px] text-slate-300 font-bold">{selectedMod.code}</span>
                  <span className="text-[10px] text-slate-400 mt-1">Multi-Planar (MPR) Matrix</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 text-right">
                DIAGNOSTIC VISUALIZATION — CONCEPT • ZERO PATIENT IDENTIFIERS
              </div>
            </div>

            {/* Modality Capabilities Detail (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Radiological Routing & Focus
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedMod.modality}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {selectedMod.description}
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-200">
                <div className="text-xs font-mono text-slate-400 uppercase mb-1">
                  Primary Clinical Indications
                </div>
                {selectedMod.diagnosticFocus.map((focus, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
