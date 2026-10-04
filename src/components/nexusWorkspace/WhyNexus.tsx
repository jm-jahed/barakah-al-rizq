'use client';

import React from 'react';

export default function WhyNexus() {
  const comparisonItems = [
    {
      feature: 'Ejari & DED Registration',
      traditional: '2 to 6 weeks wait, lengthy Landlord NOCs',
      nexus: 'Instant 2-hour digital Ejari on DLD portal',
    },
    {
      feature: 'Upfront Capital Expenditure (CapEx)',
      traditional: 'AED 250K - 800K on fit-out, MEP & furniture',
      nexus: 'AED 0 CapEx. Fully fitted turnkey workspace',
    },
    {
      feature: 'Utility & Chiller Bills (DEWA)',
      traditional: 'Separate monthly accounts & security deposits',
      nexus: '100% all-inclusive in single monthly AED invoice',
    },
    {
      feature: 'Lease Commitment Flexibility',
      traditional: 'Rigid 3 to 5-year lock-ins with heavy break penalties',
      nexus: 'Agile 1 to 24-month terms with seamless expansion',
    },
    {
      feature: 'IT & Fiber Network Setup',
      traditional: '4-8 weeks ISP installation delays & hardware costs',
      nexus: 'Instant plug-and-play 1Gbps fiber & private VLANs',
    },
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>The Financial & Operational Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Traditional Commercial Lease vs. NEXUS Turnkey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Discover why Fortune 500 regional teams and fast-growing UAE enterprises choose NEXUS over conventional commercial leases.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-slate-950 p-4 sm:p-6 border-b border-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
            <div className="col-span-12 sm:col-span-4 text-slate-400">Operational Factor</div>
            <div className="col-span-6 sm:col-span-4 text-slate-400 hidden sm:block">Traditional Shell & Core Lease</div>
            <div className="col-span-12 sm:col-span-4 text-amber-400 font-bold">NEXUS Turnkey Serviced Office</div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 items-center gap-4 hover:bg-slate-900/40 transition"
              >
                <div className="col-span-12 sm:col-span-4 font-bold text-white text-xs sm:text-sm">
                  {item.feature}
                </div>
                <div className="col-span-12 sm:col-span-4 text-xs text-rose-300/80 flex items-center gap-2">
                  <span className="text-rose-400">✕</span>
                  <span>{item.traditional}</span>
                </div>
                <div className="col-span-12 sm:col-span-4 text-xs text-emerald-300 font-semibold flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{item.nexus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
