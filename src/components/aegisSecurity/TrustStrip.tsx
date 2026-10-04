'use client';

import React from 'react';
import { ShieldCheck, Award, Lock, CheckCircle2, Shield, FileCheck } from 'lucide-react';
import { AEGIS_BRAND } from '@/data/aegisSecurityData';

export default function TrustStrip() {
  const trustBadges = [
    { label: 'SIRA Dubai Certified', sub: 'Ref: SIRA-SEC-2026-8812', icon: ShieldCheck },
    { label: 'MOI UAE Licensed', sub: 'Ref: MOI-PSS-9041', icon: Award },
    { label: 'PSBD Abu Dhabi Approved', sub: 'Private Security Department', icon: Lock },
    { label: 'ISO 27001 Certified', sub: 'Physical & InfoSec Security', icon: FileCheck },
    { label: 'ASIS International CPP', sub: 'Certified Protection Standards', icon: Shield },
    { label: 'UAE Civil Defense', sub: 'Emergency Response Certified', icon: CheckCircle2 },
  ];

  return (
    <section className="py-6 bg-[#03060C] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          <div className="hidden lg:flex items-center gap-2 pr-6 border-r border-slate-800">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
              UAE REGULATORY TRUST &amp; COMPLIANCE MATRIX
            </span>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {trustBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition group"
                >
                  <IconComp className="w-5 h-5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                      {badge.label}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {badge.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
