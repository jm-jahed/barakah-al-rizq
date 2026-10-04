'use client';

import React from 'react';
import {
  MapPin,
  Building2,
  Anchor,
  CheckCircle2,
  ArrowRight,
  Truck,
  Sparkles
} from 'lucide-react';
import { UAE_OPERATIONS_HUBS } from '@/data/reeferLogisticsData';

interface ReeferUAEOperationsProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferUAEOperations({ onOpenQuote }: ReeferUAEOperationsProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#090d16] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <span className="text-base">🇦🇪</span>
            <span>STRATEGIC DUBAI ORIGIN HUBS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            STARTING FROM DUBAI. CONNECTING THE GCC.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Strategically positioned for shipments originating from Dubai's major commercial and logistics zones.
          </p>
        </div>

        {/* 2 Hubs Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {UAE_OPERATIONS_HUBS.map((hub, idx) => {
            const isAlAweer = hub.title.includes('AL AWEER');
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#0c1220] border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                        {isAlAweer ? <Building2 className="w-6 h-6" /> : <Anchor className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-sky-400 tracking-wider">
                          DUBAI LOGISTICS CLUSTER 0{idx + 1}
                        </div>
                        <h3 className="text-2xl font-bold font-mono text-white mt-0.5">
                          {hub.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-2xl">🇦🇪</span>
                  </div>

                  <div className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{hub.location}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {hub.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-8">
                    {hub.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote({ origin: `${hub.title}, ${hub.location}` })}
                  className="w-full py-3.5 rounded-xl bg-white/[0.05] hover:bg-sky-500 hover:text-white border border-white/10 hover:border-transparent text-white font-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>REQUEST LOADING AT {hub.title.replace(' HUB', '')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
