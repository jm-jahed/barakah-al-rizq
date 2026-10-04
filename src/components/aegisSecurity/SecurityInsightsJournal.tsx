'use client';

import React from 'react';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { AEGIS_JOURNAL } from '@/data/aegisSecurityData';

export default function SecurityInsightsJournal() {
  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>STRATEGIC THREAT INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Security Insights &amp; Advisory Journal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Expert analysis on UAE physical security regulations, SIRA compliance standards, executive protection tactics, and AI surveillance evolution.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AEGIS_JOURNAL.map((art) => (
            <article
              key={art.id}
              className="rounded-3xl bg-[#080D18] border border-slate-800/90 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-cyan-500/40 transition group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 mb-3">
                    <span>{art.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                    {art.summary}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {art.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-bold mt-0.5">&bull;</span>
                        <span className="line-clamp-1">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#assessment"
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 text-xs font-mono font-bold transition flex items-center justify-center gap-1.5"
                >
                  <span>Read Intelligence Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
