'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Microscope,
  Eye,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Sliders,
  Clock,
  FlaskConical,
  ShieldCheck
} from 'lucide-react';
import { VIRELIS_DIAGNOSTIC_CASES, DiagnosticCase } from '@/data/virelisData';

export function VirelisCommandCenter() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-901');
  const selectedCase =
    VIRELIS_DIAGNOSTIC_CASES.find((c) => c.id === selectedCaseId) || VIRELIS_DIAGNOSTIC_CASES[0];

  return (
    <section id="command-center" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030509] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header & Mandatory Disclaimer Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse text-sky-400" />
              <span>DIAGNOSTIC OPERATIONS — SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Clinical Diagnostic Operations Center
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl font-light">
              Real-time simulated telemetry orchestrating multi-specialty clinical queues, automated instrumental processing, and specialist review sign-offs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ALL LABS & PACS ONLINE</span>
            </span>
          </div>
        </div>

        {/* Diagnostic Cases Queue & Live Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Case Worklist (5 cols) */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 px-1 mb-2 flex items-center justify-between">
              <span>Active Case Worklist</span>
              <span>4 Prioritized Cases</span>
            </div>

            {VIRELIS_DIAGNOSTIC_CASES.map((item) => {
              const isSelected = item.id === selectedCaseId;
              const isStat = item.priority === 'STAT Critical';

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-sky-400 ring-1 ring-sky-400/40 shadow-lg'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.caseNumber}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          isStat
                            ? 'bg-rose-950 text-rose-300 border border-rose-800/50'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>

                    <div className="text-slate-400 text-xs font-sans">
                      {item.clinicalDomain} • {item.patientReference}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sky-400 font-semibold">{item.status}</div>
                    <div className="text-[10px] text-slate-400">{item.sampleTurnaround}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Case Telemetry Detail (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 font-mono text-xs">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800/80 mb-6">
              <div>
                <div className="text-[10px] text-sky-400 uppercase tracking-wider mb-1">
                  Active Clinical Case Record
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedCase.caseNumber} ({selectedCase.clinicalDomain})
                </h3>
                <div className="text-slate-400 mt-0.5">
                  Anonymized Ref: {selectedCase.patientReference} • Specimen: {selectedCase.specimenType}
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                Turnaround: {selectedCase.sampleTurnaround}
              </div>
            </div>

            {/* AI Decision Support Flag */}
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-900/60 mb-6 font-sans">
              <div className="text-[11px] font-mono text-sky-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Clinician-Supervised AI Pattern Flag</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-light">
                {selectedCase.aiAssistFlag}
              </p>
            </div>

            {/* Imaging & Lab breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Synchronized Imaging Studies</span>
                </div>
                <div className="space-y-1 text-slate-200 text-xs font-sans">
                  {selectedCase.imagingStudies.map((img, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{img}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
                  <span>Active Laboratory Panels</span>
                </div>
                <div className="space-y-1 text-slate-200 text-xs font-sans">
                  {selectedCase.labPanels.map((lab, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span>{lab}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assigned Specialist */}
            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-slate-400 font-sans text-xs">
              <span>Assigned Reviewer:</span>
              <span className="text-sky-300 font-semibold">{selectedCase.assignedSpecialistRole}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-[11px] font-mono text-slate-500 uppercase tracking-wider">
          SIMULATED WORKSPACE • NO IDENTIFIABLE PATIENT DATA • CLINICIAN SUPERVISED DECISION SUPPORT
        </div>
      </div>
    </section>
  );
}
