'use client';

import React, { useState } from 'react';
import { Building2, Shield, ArrowRight, CheckCircle2, AlertTriangle, Briefcase } from 'lucide-react';
import { AEGIS_INDUSTRIES, IndustrySector } from '@/data/aegisSecurityData';

export default function IndustriesProtected() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(AEGIS_INDUSTRIES[0].id);

  const activeIndustry = AEGIS_INDUSTRIES.find((i) => i.id === selectedIndustryId) || AEGIS_INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>SECTOR-SPECIFIC THREAT RESILIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Industries We Protect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every sector faces unique threat vectors. We customize physical guarding, access control protocols, and response parameters for your distinct industry profile.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {AEGIS_INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustryId(ind.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-mono font-bold transition-all whitespace-nowrap ${
                selectedIndustryId === ind.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="bg-[#080D18] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Side (5 Cols) */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[500px]">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-6 left-6">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold shadow-lg">
                {activeIndustry.badge}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Representative UAE Benchmark</span>
              <span className="text-xs font-bold text-white font-mono">{activeIndustry.caseRef}</span>
            </div>
          </div>

          {/* Content Side (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                {activeIndustry.name} Protection Protocol
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeIndustry.headline}
              </h3>

              {/* Threat Matrix Warning Box */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-rose-500/30 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Primary Sector Threat Vectors
                </span>
                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  {activeIndustry.threatMatrix}
                </p>
              </div>

              {/* Solutions List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Tailored AEGIS Countermeasures
                </span>
                <div className="space-y-2">
                  {activeIndustry.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Need an audit for your sector?
              </span>
              <a
                href="#assessment"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs font-mono uppercase tracking-wider rounded-xl transition"
              >
                Request Sector Audit
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
