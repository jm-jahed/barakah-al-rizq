'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { AEGIS_CASE_STUDIES } from '@/data/aegisSecurityData';

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>PROVEN OPERATIONAL DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Institutional Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world security transformations executed across landmark UAE commercial towers and high-stakes ministerial diplomatic summits.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AEGIS_CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#080D18] border border-slate-800/90 shadow-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                    {cs.sector} &bull; {cs.location}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition">
                  {cs.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                  <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
                    <strong className="text-rose-400 block mb-1 uppercase text-[10px] font-mono">The Threat Challenge:</strong>
                    <p className="text-slate-300 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
                    <strong className="text-cyan-400 block mb-1 uppercase text-[10px] font-mono">AEGIS Sovereign Strategy:</strong>
                    <p className="text-slate-300 leading-relaxed">{cs.approach}</p>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
                    <strong className="text-amber-400 block mb-1 uppercase text-[10px] font-mono">Tactical Implementation:</strong>
                    <p className="text-slate-300 leading-relaxed">{cs.implementation}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-cyan-500/30 text-center font-mono">
                      <span className="text-[9px] text-slate-400 uppercase block">{m.label}</span>
                      <strong className="text-sm font-bold text-cyan-400 block mt-0.5">{m.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span>✓</span>
                <span>Outcome: {cs.qualitativeOutcome}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
