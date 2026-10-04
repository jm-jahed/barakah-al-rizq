'use client';

import React, { useState } from 'react';
import { LICENSE_TIERS } from '@/data/nexusWorkspaceData';

export default function BusinessSetup() {
  const [activeTierId, setActiveTierId] = useState<string>(LICENSE_TIERS[0].id);

  const activeTier = LICENSE_TIERS.find((t) => t.id === activeTierId) || LICENSE_TIERS[0];

  return (
    <section id="licenses" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>DED & Free Zone Jurisdiction Readiness</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Seamless UAE Trade Licensing & Instant Ejari
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Eliminate weeks of regulatory bureaucracy. Every NEXUS facility is pre-approved for Dubai Department of Economy & Tourism (DET), DIFC, ADGM, and DMCC company formations.
          </p>
        </div>

        {/* 4 Jurisdiction Grid Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {LICENSE_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTierId(tier.id)}
              className={`p-5 rounded-2xl border text-left transition relative ${
                activeTierId === tier.id
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500 shadow-xl shadow-amber-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                {tier.complianceBody}
              </span>
              <h3 className="text-sm font-bold text-white mb-2">{tier.jurisdiction}</h3>
              <span className="text-xs text-slate-400 line-clamp-2">{tier.type}</span>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-400">{tier.ejariProcessingHours}</span>
                <span className="text-slate-500">{activeTierId === tier.id ? 'Active Matrix' : 'Select'}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Deep Dive Breakdown Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                Jurisdiction Compliance Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {activeTier.jurisdiction}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Governing Body: {activeTier.complianceBody} • License Scope: {activeTier.type}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono">
                <span className="text-slate-500 block text-[9px] uppercase">Ejari Issuance Speed</span>
                <span className="text-emerald-400 font-bold">{activeTier.ejariProcessingHours}</span>
              </div>
              <div className="px-4 py-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono">
                <span className="text-slate-500 block text-[9px] uppercase">Visa Entitlement</span>
                <span className="text-amber-400 font-bold">{activeTier.visaAllocationPerDesk}</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {activeTier.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {feat}
                </div>
              </div>
            ))}
          </div>

          {/* 3-Step Expedited Setup Flow */}
          <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              NEXUS Expedited 3-Step Trade License & Ejari Process
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="space-y-1">
                <span className="text-amber-400 font-mono font-bold">STEP 01 — 30 MINS</span>
                <p className="font-bold text-white">Suite Selection & KYC</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Choose your suite, submit trade name reservation and passport copies for swift electronic lease compilation.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 font-mono font-bold">STEP 02 — 2 HOURS</span>
                <p className="font-bold text-white">Digital Ejari Generation</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Lease registered directly onto Dubai Land Department (DLD) portal and authenticated with official Ejari certificate.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-emerald-400 font-mono font-bold">STEP 03 — SAME DAY</span>
                <p className="font-bold text-white">License Issuance & Move-in</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Present Ejari to DET/Free Zone authority for license issuance and receive biometric keys to your fully fitted suite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
