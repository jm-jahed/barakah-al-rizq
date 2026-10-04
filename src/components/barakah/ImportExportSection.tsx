'use client';

import React from 'react';
import { Globe2, Anchor, Truck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BARAKAH_SERVICES } from '@/data/barakahData';

interface ImportExportSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ImportExportSection: React.FC<ImportExportSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="services" className="py-24 bg-[#F2F7F3] text-[#111827] relative font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#063D24] font-mono text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            GLOBAL FOOD PROCUREMENT &amp; SUPPLY CHAIN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063D24] tracking-tight">
            Import, Export, Wholesale &amp; Supply Solutions
          </h2>
          <p className="text-gray-600 text-base font-light">
            Connecting international agricultural growers with UAE commercial markets, hypermarket networks, hotel chains, and GCC regional distributors.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BARAKAH_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-md flex flex-col justify-between hover:border-emerald-400 transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#063D24] font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                  ★
                </div>

                <span className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-widest block mb-1">
                  CORE CAPACITY
                </span>

                <h3 className="text-xl font-bold text-[#063D24] mb-3 group-hover:text-amber-600 transition-colors font-sans">
                  {srv.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-light mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2 font-mono text-xs text-gray-700">
                {srv.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[11px]">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trade Routes Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-emerald-200 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl font-bold text-[#063D24]">
              Direct Produce Import Contracts Available
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              We manage Phytosanitary clearance, cold-chain maritime freight, Port Jebel Ali customs clearance, and Al Aweer warehouse storage for bulk wholesale buyers.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="px-8 py-4 rounded-2xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-2 shrink-0 border border-emerald-900"
          >
            <span className="text-amber-300">REQUEST CONTRACT TERMS</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
};