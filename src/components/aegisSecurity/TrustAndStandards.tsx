'use client';

import React from 'react';
import { ShieldCheck, Award, Lock, FileCheck, CheckCircle2 } from 'lucide-react';
import { AEGIS_BRAND } from '@/data/aegisSecurityData';

export default function TrustAndStandards() {
  const standards = [
    {
      title: 'SIRA Dubai Grade-A Certified',
      ref: 'SIRA-SEC-2026-8812',
      desc: 'Full regulatory compliance with the Security Industry Regulatory Agency across manned guarding, electronic surveillance, and executive protection.',
      icon: ShieldCheck
    },
    {
      title: 'UAE Ministry of Interior Licensed',
      ref: 'MOI-PSS-9041',
      desc: 'Federal private security operator licensing authorizing deployments across all 7 Emirates with verified police database security clearances.',
      icon: Award
    },
    {
      title: 'PSBD Abu Dhabi Security Approved',
      ref: 'PSBD-AD-7740',
      desc: 'Authorized Private Security Business Department operator for critical government, diplomatic, and commercial facilities in Abu Dhabi and Al Ain.',
      icon: Lock
    },
    {
      title: 'ISO 27001 & ISO 9001 Certified',
      ref: 'BSI Global Quality Standards',
      desc: 'International quality management and information security frameworks guaranteeing strict data protection for all CCTV feeds and client records.',
      icon: FileCheck
    }
  ];

  return (
    <section id="standards" className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>GOVERNMENTAL &amp; INTERNATIONAL ACCREDITATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trust &amp; Regulatory Standards
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            AEGIS operates exclusively under verified UAE government security licensing and global ISO operational benchmarks.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std, idx) => {
            const IconComp = std.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#080D18] border border-slate-800/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {std.title}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 block mb-3 font-semibold">
                    {std.ref}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {std.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified UAE Registry</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
