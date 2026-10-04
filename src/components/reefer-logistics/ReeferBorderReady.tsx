'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Globe2,
  FileText,
  UserCheck,
  Stamp,
  Truck,
  ArrowDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BORDER_TIMELINE } from '@/data/reeferLogisticsData';

interface ReeferBorderReadyProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferBorderReady({ onOpenQuote }: ReeferBorderReadyProps) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const readinessPillars = [
    { title: "Experienced Drivers", desc: "Professional long-haul captains with multi-year GCC highway and border crossing records." },
    { title: "Valid Saudi Transit Visas", desc: "Drivers carry active commercial multi-entry transit visas avoiding visa processing holds." },
    { title: "Cross-Border Transport Permits", desc: "Pre-approved bilateral road freight permits for Saudi Arabia, Qatar, Kuwait, Bahrain & Oman." },
    { title: "GCC Route Experience", desc: "Deep familiarity with all major border plazas (Al Ghuwaifat, Batha, Salwa, Khatmat Malaha)." },
    { title: "Border Documentation Awareness", desc: "Pre-cleared through FASAH, Bayan, Saber, SFDA, and OFOQ electronic customs single-windows." },
    { title: "Temperature-Controlled Equipment", desc: "Sub-zero continuous refrigeration units compliant with strict municipal health standards." }
  ];

  return (
    <section id="border" className="py-20 sm:py-28 bg-[#070b14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CUSTOMS COMPLIANCE & TRANSIT PERMITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            CROSS-BORDER READY.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Experienced drivers and established cross-border transport processes help keep GCC shipments moving efficiently.
          </p>
        </div>

        {/* 6 Key Operational Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-left">
          {readinessPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0c1220] border border-white/10 hover:border-emerald-500/40 transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-sm font-mono flex items-center gap-1.5">
                  <span>✅</span> {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Border Crossing Timeline */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#080d1a] border border-white/10 p-6 sm:p-10 shadow-2xl text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                OPERATIONAL TRANSIT PIPELINE
              </span>
              <h3 className="text-2xl font-bold text-white font-mono mt-0.5">
                5-STAGE GCC BORDER CROSSING WORKFLOW
              </h3>
            </div>

            <div className="text-xs font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
              Zero Cold-Chain Interruption at Border Gates
            </div>
          </div>

          {/* Timeline Stages Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {BORDER_TIMELINE.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={stage.stepNumber}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`cursor-pointer p-5 rounded-xl border transition-all flex flex-col justify-between ${
                      isActive
                        ? 'bg-sky-950/60 border-sky-400 shadow-xl ring-1 ring-sky-400'
                        : 'bg-black/40 border-white/10 hover:border-white/20 hover:bg-black/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                        <span className="text-sky-400 font-bold">{stage.stepNumber}</span>
                        <span>0{idx + 1}/05</span>
                      </div>

                      <div className="text-base font-bold font-mono text-white mb-1">
                        {stage.stage}
                      </div>

                      <div className="text-xs text-sky-300 font-mono mb-2">
                        📍 {stage.location}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                        {stage.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 shrink-0" />
                      <span className="truncate">{stage.verificationBadge}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300 font-mono">
              ⚡ Pre-manifest electronic submission via <span className="text-sky-400 font-bold">FASAH (KSA)</span> & <span className="text-sky-400 font-bold">BAYAN (Oman)</span> ensures rapid border release.
            </div>
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 shrink-0"
            >
              <span>INQUIRE ABOUT BORDER DISPATCH</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
