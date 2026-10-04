'use client';

import React, { useState } from 'react';
import { FAQ_NEXUS, NEXUS_BRAND } from '@/data/nexusWorkspaceData';

export default function NexusFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0B1120] border-t border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>Regulatory & Leasing Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Essential information regarding DED mainland Ejari contracts, utility inclusiveness in AED, visa allocations, and lease tenures.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_NEXUS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/50 transition"
              >
                <span className="text-base font-bold text-white">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 font-mono text-sm transition-transform ${openIdx === idx ? 'rotate-180 bg-amber-500 text-slate-950 font-bold' : ''}`}>
                  ▼
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-slate-950/60 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-400">
            Have custom corporate structuring or multi-floor requirements? Contact our Senior Regulatory Counsel directly at{' '}
            <a href={`tel:${NEXUS_BRAND.phone.replace(/\s+/g, '')}`} className="text-amber-400 font-bold hover:underline">
              {NEXUS_BRAND.phone}
            </a>{' '}
            or via{' '}
            <a href="https://wa.me/971508821122" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
              WhatsApp Concierge
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
