'use client';

import React from 'react';
import {
  MapPin,
  Building2,
  Anchor,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ThermometerSnowflake,
  Truck
} from 'lucide-react';
import { UAE_OPERATIONS_HUBS } from '@/data/reeferLogisticsData';

interface ReeferUaeOperationsProps {
  onOpenQuote: (prefill?: Record<string, string>) => void;
}

export default function ReeferUaeOperations({ onOpenQuote }: ReeferUaeOperationsProps) {
  return (
    <section id="uae-operations" className="py-20 sm:py-28 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <span className="text-base">🇦🇪</span>
            <span>STRATEGIC DUBAI ORIGIN HUBS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            STARTING FROM DUBAI. CONNECTING THE GCC.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Dedicated 25-Ton reefer operations strategically anchored in Dubai's premier agricultural market and maritime free zone.
          </p>
        </div>

        {/* 2 Hubs Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {UAE_OPERATIONS_HUBS.map((hub, idx) => {
            const isAlAweer = hub.title.includes('AL AWEER');
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        {isAlAweer ? <Building2 className="w-6 h-6" /> : <Anchor className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                          DUBAI LOGISTICS CLUSTER 0{idx + 1}
                        </div>
                        <h3 className="text-2xl font-bold font-mono text-white mt-0.5">
                          {hub.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-2xl">🇦🇪</span>
                  </div>

                  <div className="text-xs font-mono text-slate-300 mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{hub.location}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {hub.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-700 mb-8">
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
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>REQUEST LOADING AT {hub.title.replace(' HUB', '')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Operating Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ThermometerSnowflake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase font-mono">Pre-Cooling Protocol Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5">Every 25-Ton reefer trailer is pre-chilled to target temperature before docking at Al Aweer or JAFZA.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>NIST Calibrated</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>20 Dedicated Units</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}