'use client';

import React from 'react';
import { ShieldCheck, HeartHandshake, Clock, CheckCircle2 } from 'lucide-react';

export const WhyNestMove: React.FC = () => {
  const points = [
    { code: '01', title: 'Careful Handling', desc: 'Every mirror, glassware set, and velvet sofa is wrapped like a museum piece.' },
    { code: '02', title: 'Transparent Quotes', desc: 'Upfront binding estimates with zero weekend surcharges or hidden fuel fees.' },
    { code: '03', title: 'Professional Crews', desc: 'Uniformed, background-verified movers and carpenters on company payroll.' },
    { code: '04', title: 'On-Time Arrival', desc: 'Guaranteed 30-minute arrival window with live driver ETA notifications.' },
    { code: '05', title: 'Fully Insured', desc: 'Comprehensive transit protection included on every move up to AED 1,000,000.' },
    { code: '06', title: 'Dedicated Support', desc: 'Personal Move Manager assigned to your relocation from booking to unboxing.' },
  ];

  return (
    <section className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-[#E87A36] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D96B27]/15 border border-[#D96B27]/30">
              EDITORIAL EXCELLENCE
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight font-serif leading-tight">
              The difference is in the details.
            </h2>

            <p className="text-base text-stone-300 leading-relaxed">
              We built NestMove to eliminate the chaos, broken items, and unpunctual movers that plague typical moving services.
            </p>

            <div className="p-6 rounded-3xl bg-[#143A2A] border border-emerald-500/40 text-[#FDFBF7] font-serif space-y-3">
              <p className="text-sm italic leading-relaxed">
                "Moving is stressful. NestMove makes it feel completely effortless."
              </p>
              <span className="text-xs font-sans text-emerald-200 block font-bold">— NestMove Operational Motto</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div
                key={p.code}
                className="p-6 rounded-2xl bg-[#292524] border border-stone-700 hover:border-[#D96B27]/40 transition-all shadow-lg"
              >
                <span className="text-xs font-mono font-bold text-[#D96B27] block mb-2">{p.code}</span>
                <h3 className="text-lg font-bold text-white mb-1 font-serif">{p.title}</h3>
                <p className="text-xs text-stone-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
