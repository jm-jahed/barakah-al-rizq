'use client';

import React from 'react';

export function BeyondCode() {
  return (
    <section className="py-20 bg-[#0F172A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Beyond Code
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Engineering Discipline & Working Philosophy
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Behind every high-performance web platform is a commitment to continuous learning, architectural discipline, and business alignment. I believe in writing code that solves actual commercial problems rather than building unnecessary complexity.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-bold text-sm block">Continuous Learning</span>
                <p className="text-slate-400 mt-1">Constantly experimenting with Next.js App Router updates and AI agent tools.</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-bold text-sm block">Client Transparency</span>
                <p className="text-slate-400 mt-1">Clear deliverables, 100% build verification, and honest engineering advice.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
              Core Principles
            </h3>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex gap-3">
                <span className="text-amber-400 font-bold">01</span>
                <div>
                  <strong className="text-white block">Speed & Performance First</strong>
                  Zero layout shifts, sub-second page loads, and static prerendering by default.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 font-bold">02</span>
                <div>
                  <strong className="text-white block">Strict Brand Isolation</strong>
                  Every client project gets a bespoke visual identity, isolated fonts, and dedicated color tokens.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 font-bold">03</span>
                <div>
                  <strong className="text-white block">AI-Amplified Execution</strong>
                  Leveraging LLMs and automated scripts to deliver 10x faster without compromising code quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
