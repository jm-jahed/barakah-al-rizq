'use client';

import React from 'react';
import {
  Layers,
  Calendar,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';
import { CONTRACT_OPTIONS } from '@/data/reeferLogisticsData';

interface ReeferContractOptionsProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferContractOptions({ onOpenQuote }: ReeferContractOptionsProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#090d16] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>COMMERCIAL ENGAGEMENT STRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            FLEXIBLE CAPACITY. BUILT AROUND YOUR BUSINESS.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Whether you need on-demand single-trip reefer dispatch or a multi-trailer dedicated annual fleet allocation, we tailor capacity to your supply chain cadence.
          </p>
        </div>

        {/* 2 Contract Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {CONTRACT_OPTIONS.map((contract) => (
            <div
              key={contract.id}
              className={`rounded-2xl p-8 sm:p-10 border transition-all flex flex-col justify-between relative overflow-hidden shadow-2xl ${
                contract.highlight
                  ? 'bg-gradient-to-b from-[#111c33] to-[#0a1224] border-sky-400/60 ring-1 ring-sky-400/40'
                  : 'bg-[#0c1220] border-white/10 hover:border-white/20'
              }`}
            >
              {contract.highlight && (
                <div className="absolute top-0 right-0 bg-sky-500 text-white font-mono text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  ENTERPRISE PREFERRED
                </div>
              )}

              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
                  <span>{contract.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  {contract.title}
                </h3>

                <div className="text-sm text-slate-300 font-mono mt-1 mb-4">
                  {contract.subtitle}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-8">
                  {contract.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    SERVICE CAPABILITIES INCLUDED:
                  </div>
                  {contract.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Button */}
              <button
                onClick={() => onOpenQuote({ serviceType: contract.title })}
                className={`w-full py-4 rounded-xl font-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                  contract.highlight
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-sky-500/30'
                    : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15'
                }`}
              >
                <span>{contract.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
