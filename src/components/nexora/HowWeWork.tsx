'use client';

import React from 'react';
import { Compass, Layers, CheckCircle2, Globe, TrendingUp } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Business Understanding',
      desc: 'We map your target activities, shareholder structures, commercial expansion goals, and regulatory requirements.'
    },
    {
      num: '02',
      title: 'STRUCTURE',
      subtitle: 'Jurisdiction Strategy',
      desc: 'Evaluate Mainland vs Free Zone setups, tax optimization under 9% Corporate Tax, and banking compliance dossiers.'
    },
    {
      num: '03',
      title: 'EXECUTE',
      subtitle: 'Government Coordination',
      desc: 'Coordinate DED / Free Zone approvals, trade license issuance, corporate PRO services, and office lease verifications.'
    },
    {
      num: '04',
      title: 'LAUNCH',
      subtitle: 'Operational Readiness',
      desc: 'Onboard corporate banking accounts, process Investor & Employee Residence Visas, and finalize accounting systems.'
    },
    {
      num: '05',
      title: 'GROW',
      subtitle: 'Ongoing Partnership',
      desc: 'Provide C-suite growth strategy, annual audit compliance, ESR filings, and strategic M&A advisory.'
    }
  ];

  return (
    <section className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            PROVEN CONSULTING TIMELINE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            How We Work.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            A structured, 5-stage advisory methodology designed for corporate certainty and zero operational delays.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="bg-[#1A1D24] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between relative group hover:border-[#D4AF37]/40 transition-all"
            >
              <div>
                <span className="text-3xl font-serif font-black text-[#D4AF37] block mb-3">{s.num}</span>
                <h3 className="text-lg font-serif font-bold text-[#F7F6F2] mb-1">{s.title}</h3>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-3">{s.subtitle}</span>
                <p className="text-xs text-stone-300 font-light leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 mt-4 flex items-center justify-between font-mono text-[10px] text-stone-500">
                <span>STAGE {s.num} / 05</span>
                <span className="text-[#D4AF37]">✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
