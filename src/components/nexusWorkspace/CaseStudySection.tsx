'use client';

import React from 'react';
import { CASE_STUDIES_NEXUS } from '@/data/nexusWorkspaceData';

export default function CaseStudySection() {
  return (
    <section className="py-24 bg-[#0B1120] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>Corporate Deployment Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Institutional Client Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            How regional headquarters, quantitative hedge funds, and AI scale-ups achieved rapid UAE market entry with zero operational friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES_NEXUS.map((cs) => (
            <div
              key={cs.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-2xl flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400">Case Analysis</span>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full text-xs font-mono font-bold">
                    {cs.metric}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition">
                  {cs.company}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <strong className="text-rose-400 block mb-1 uppercase text-[10px] font-mono">The Challenge:</strong>
                    <p className="text-slate-300">{cs.challenge}</p>
                  </div>

                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <strong className="text-amber-400 block mb-1 uppercase text-[10px] font-mono">NEXUS Solution:</strong>
                    <p className="text-slate-300">{cs.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>Result: {cs.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
