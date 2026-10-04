'use client';

import React from 'react';
import { ShieldCheck, Award, Key, CheckCircle2, Lock, Landmark, FileText, ArrowRight } from 'lucide-react';

interface RealEstateGoldenVisaHubProps {
  onOpenViewing: () => void;
}

export const RealEstateGoldenVisaHub: React.FC<RealEstateGoldenVisaHubProps> = ({
  onOpenViewing
}) => {
  return (
    <section id="golden-visa-hub" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UAE Regulatory & Sovereign Security</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            UAE 10-Year Golden Visa & Escrow
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light">
            Comprehensive legal, tax, and residency framework for global ultra-high-net-worth investors acquiring prime real estate in the UAE.
          </p>
        </div>

        {/* 4 Pillars of UAE Real Estate Authority */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pillar 1 */}
          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                10-Year UAE Golden Visa
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Property acquisitions of AED 2,000,000+ qualify investors and their immediate family (spouse, children, and domestic staff) for renewable 10-year residency without local sponsor requirements.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-400 pt-3 border-t border-zinc-800">
              Threshold: AED 2,000,000 (US$ 545,000)
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                0% Property & Income Tax
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                The UAE levies zero personal income tax, zero capital gains tax on property sales, and zero inheritance tax. Maximum net yield retention for international family offices.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-zinc-800">
              100% Tax-Free Rental Cash Flows
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                DLD Escrow Account Law
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Under UAE Law No. 8 of 2007, every dirham paid into off-plan purchases is deposited directly into a central bank-monitored DLD Escrow account, released only as verified construction milestones are achieved.
              </p>
            </div>
            <div className="text-[11px] font-mono text-blue-400 pt-3 border-t border-zinc-800">
              Zero Developer Default Exposure
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                DIFC & ADGM SPV Structuring
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Seamless incorporation of Special Purpose Vehicles (SPVs) under DIFC or Abu Dhabi Global Market common law jurisdictions for cross-border asset protection and estate inheritance planning.
              </p>
            </div>
            <div className="text-[11px] font-mono text-purple-400 pt-3 border-t border-zinc-800">
              English Common Law Courts
            </div>
          </div>
        </div>

        {/* Corporate Trust Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Concierge Residency & Legal Advisory
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              End-to-End VIP Golden Visa Concierge Service
            </h3>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              Our in-house legal and government relations desk coordinates biometric medicals, VIP Emirates ID issuance, and DLD Title Deed notarization within 72 business hours of property acquisition.
            </p>
          </div>

          <button
            onClick={onOpenViewing}
            className="shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-xl shadow-amber-500/20"
          >
            <span>Consult Legal & Residency Desk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
