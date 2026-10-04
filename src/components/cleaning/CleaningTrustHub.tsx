'use client';

import React from 'react';
import { TRUST_POINTS } from '@/data/cleaningData';
import { ShieldCheck, Award, Lock, Car, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';

interface CleaningTrustHubProps {
  onOpenDispatch: () => void;
}

export const CleaningTrustHub: React.FC<CleaningTrustHubProps> = ({
  onOpenDispatch
}) => {
  return (
    <section id="trust-certifications" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UAE Sovereign Standards & Security</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Institutional Trust & BICSc Standards
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light">
            Every cleaning operative is biometric-cleared, insured for AED 5,000,000, and certified by the British Institute of Cleaning Science.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-zinc-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Compliance</span>
              </div>
            </div>
          ))}
        </div>

        {/* High-Trust Guarantee Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-emerald-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Zero-Risk Sovereign Guarantee
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The 48-Hour Free Re-Clean Promise
            </h3>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              If any single room, window sill, tile grout, or appliance does not meet your exacting standards, our lead quality auditor will dispatch a supervisor crew within 24 hours to re-detail at zero additional cost.
            </p>
          </div>

          <button
            onClick={onOpenDispatch}
            className="shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-xl shadow-emerald-500/20"
          >
            <span>Book Guaranteed Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
