'use client';

import React from 'react';
import { NEXUS_BRAND } from '@/data/nexusWorkspaceData';

export default function TrustStrip() {
  const trustBadges = [
    { label: 'Dubai DET Licensed', sub: 'Ref: DET-BC-2026-9081', icon: '🏛️' },
    { label: 'DED Ejari Certified', sub: 'Instant DLD Registration', icon: '📜' },
    { label: 'DIFC Registered Operator', sub: 'DFSA Category Ready', icon: '💎' },
    { label: 'ADGM Approved Hub', sub: 'Al Maryah Island', icon: '🏢' },
    { label: 'Tier III On-Prem Datacenter', sub: 'Dual Dark Fiber Feeds', icon: '⚡' },
    { label: 'Herman Miller Standard', sub: 'Ergonomic Luxury Fit-out', icon: '✨' },
  ];

  return (
    <section className="py-6 bg-slate-950 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          <div className="hidden lg:flex items-center gap-2 pr-6 border-r border-slate-800">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
              UAE REGULATORY TRUST MATRIX
            </span>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-amber-500/30 transition group"
              >
                <span className="text-lg">{badge.icon}</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white group-hover:text-amber-300 transition">
                    {badge.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {badge.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
