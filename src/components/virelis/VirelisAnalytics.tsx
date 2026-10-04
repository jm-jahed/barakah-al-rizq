'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Cpu, BarChart3, CheckCircle, AlertTriangle, Layers } from 'lucide-react';

export const VirelisAnalytics: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#02050a] border-b border-cyan-950/40 text-slate-100 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -right-60 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              Diagnostic Operations & Analytics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Operational Precision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Visible Across Every Stream.
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
              OPERATIONS SIMULATION
            </span>
            <p className="text-xs text-slate-400 mt-2 font-mono">Illustrative operational metrics across simulated UAE lab networks</p>
          </div>
        </div>

        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#09101c] to-[#040810] border border-cyan-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Avg Turnaround Time (STAT)</span>
              <Clock className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono mb-2">14.2 min</div>
            <p className="text-xs text-emerald-400 font-mono flex items-center gap-1">
              <span>↓ 38% faster than baseline</span>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#09101c] to-[#040810] border border-cyan-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Daily Analytical Volume</span>
              <Activity className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono mb-2">48,290</div>
            <p className="text-xs text-cyan-400 font-mono">Tests processed / 24h</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#09101c] to-[#040810] border border-cyan-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Auto-Verification Rate</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono mb-2">94.8%</div>
            <p className="text-xs text-slate-400 font-mono">Zero biological discordances</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#09101c] to-[#040810] border border-cyan-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase">Instrument Availability</span>
              <Cpu className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono mb-2">99.98%</div>
            <p className="text-xs text-slate-400 font-mono">Continuous operational uptime</p>
          </div>
        </div>

        {/* Operational Flow Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#070d18] border border-slate-800 lg:col-span-2">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <h3 className="font-semibold text-white text-sm sm:text-base">Diagnostic Workload by Domain</h3>
              <span className="text-xs font-mono text-cyan-400">Live Active Queues</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-300">Biochemistry & Metabolic Panels</span>
                  <span className="text-cyan-400 font-semibold">1,250 samples • 42%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[42%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-300">Hematology & Coagulation</span>
                  <span className="text-indigo-400 font-semibold">840 samples • 28%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[28%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-300">Multi-Slice CT & 3T MRI Scans</span>
                  <span className="text-teal-400 font-semibold">410 studies • 18%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full w-[18%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-300">Genomics & NGS Sequencing Panels</span>
                  <span className="text-amber-400 font-semibold">180 assays • 12%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-[12%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#070d18] border border-slate-800">
            <h3 className="font-semibold text-white text-sm sm:text-base mb-4">Quality & Calibration Events</h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">NIST 4410 Control Run Validated</div>
                  <span className="text-[11px] font-mono text-slate-400">All 14 analyzers within ±0.3 SD</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">DICOM Reconstruction Stream Synced</div>
                  <span className="text-[11px] font-mono text-slate-400">Zero frame loss across PACS link</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Delta-Check Model Re-Baselined</div>
                  <span className="text-[11px] font-mono text-slate-400">Adaptive threshold updated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
