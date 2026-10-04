'use client';

import React from 'react';
import { TESTIMONIALS_NEXUS } from '@/data/nexusWorkspaceData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>Executive Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trusted by Managing Directors & Founders
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Read how global enterprises, private family offices, and fintech pioneers leverage NEXUS serviced offices across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_NEXUS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs text-amber-400 mt-0.5">{t.title}</p>
                <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{t.location} • {t.tenure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
