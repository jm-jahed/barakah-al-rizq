'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CorporateHealthcare: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/30 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Executive Health & Corporate Care</h2>
          <p className="text-xs text-slate-300">Executive physicals & corporate wellness screening packages for UAE enterprises.</p>
          <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="px-6 py-3 bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><span>Request Proposal</span><ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    </section>
  );
};
