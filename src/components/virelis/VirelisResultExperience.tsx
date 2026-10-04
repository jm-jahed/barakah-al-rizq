'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Clock,
  User,
  ShieldCheck,
  TrendingUp,
  Download
} from 'lucide-react';

export function VirelisResultExperience() {
  return (
    <section id="result-experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030509] border-b border-slate-800/60 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CLINICAL REPORTING WORKSPACE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Modern Diagnostic Result Experience
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Replacing static paper summaries with dynamic, structured digital reports featuring historical trajectories, reference range indicators, and specialist commentary.
          </p>
        </div>

        {/* Fictional Diagnostic Report Card */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl font-mono text-xs text-slate-200">
          {/* Report Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
            <div>
              <div className="text-[10px] text-sky-400 uppercase tracking-widest mb-1">
                VIRELIS INTEGRATED DIAGNOSTIC REPORT
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                Comprehensive Cardiac Biomarker & Dual-Source CT Panel
              </h3>
              <div className="text-slate-400 text-xs font-sans mt-1">
                Accession: #VIR-2026-90412 • Date: 05-SEP-2026 • Patient ID: ANON-6338
              </div>
            </div>

            <div className="text-right">
              <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800/40 text-xs font-bold inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CLINICALLY VERIFIED</span>
              </span>
            </div>
          </div>

          {/* Key Observations Summary */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 mb-6 font-sans">
            <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider mb-1">
              Synthesized Clinical Observations
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-light">
              High-sensitivity Troponin I (hs-cTnI) kinetics demonstrate a statistically significant elevation above baseline (48.2 ng/L vs reference &lt; 14.0 ng/L). Dual-source coronary CT correlates with a non-calcified plaque in the proximal left anterior descending (LAD) artery with an estimated 65% luminal stenosis.
            </p>
          </div>

          {/* Quantitative Lab Metrics Table */}
          <div className="mb-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase">
                  <th className="py-2 px-3">Analyte / Assay</th>
                  <th className="py-2 px-3">Measured Result</th>
                  <th className="py-2 px-3">Reference Interval</th>
                  <th className="py-2 px-3">Historical (6 Mo)</th>
                  <th className="py-2 px-3">Delta Flag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-xs">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold text-white">hs-cTnI (Troponin I)</td>
                  <td className="py-2.5 px-3 font-bold text-amber-400">48.2 ng/L</td>
                  <td className="py-2.5 px-3 text-slate-400">&lt; 14.0 ng/L</td>
                  <td className="py-2.5 px-3 text-slate-300">8.4 ng/L</td>
                  <td className="py-2.5 px-3 text-amber-400 font-bold">+473% Shift</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold text-white">NT-proBNP</td>
                  <td className="py-2.5 px-3 font-bold text-slate-200">185 pg/mL</td>
                  <td className="py-2.5 px-3 text-slate-400">&lt; 125 pg/mL</td>
                  <td className="py-2.5 px-3 text-slate-300">110 pg/mL</td>
                  <td className="py-2.5 px-3 text-sky-400">Moderate Variance</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold text-white">High-Sensitivity CRP</td>
                  <td className="py-2.5 px-3 font-bold text-slate-200">2.8 mg/L</td>
                  <td className="py-2.5 px-3 text-slate-400">&lt; 3.0 mg/L</td>
                  <td className="py-2.5 px-3 text-slate-300">1.9 mg/L</td>
                  <td className="py-2.5 px-3 text-emerald-400">Within Range</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Specialist Sign-off Block */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400 font-sans">
            <div>
              <span className="block text-[10px] font-mono uppercase text-slate-400">Reviewing Consultant:</span>
              <span className="text-white font-bold">Dr. Tariq Al-Hashimi (MD, FACC, Consultant Cardiologist)</span>
            </div>
            <div className="font-mono text-[11px] text-teal-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>PKI Cryptographically Signed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
