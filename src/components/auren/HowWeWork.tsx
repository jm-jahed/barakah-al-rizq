'use client';

import React from 'react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Deep Discovery',
      desc: 'Privileged discovery mapping your multi-asset portfolio, corporate liabilities, liquidity demands, and family objectives.'
    },
    {
      num: '02',
      title: 'STRUCTURE',
      subtitle: 'Strategy Architecture',
      desc: 'Designing a bespoke wealth model, DIFC / ADGM entity structures, liquidity buffers, and downside risk frameworks.'
    },
    {
      num: '03',
      title: 'IMPLEMENT',
      subtitle: 'Coordinated Execution',
      desc: 'Liaising with trusted legal counsel, custodians, and family stakeholders to implement the approved advisory mandate.'
    },
    {
      num: '04',
      title: 'MONITOR',
      subtitle: 'Institutional Oversight',
      desc: 'Conducting quarterly consolidated reviews, stress-testing asset allocations, and auditing third-party manager performance.'
    },
    {
      num: '05',
      title: 'EVOLVE',
      subtitle: 'Generational Alignment',
      desc: 'Continuously refining the financial roadmap as market conditions, business exits, or family dynamics evolve over time.'
    }
  ];

  return (
    <section className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            PROVEN 5-STAGE ADVISORY TIMELINE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F8F6F0] mt-4">
            How We Work.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            A quiet, highly disciplined advisory process built for long-term governance, clarity, and capital resilience.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative font-sans">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#1A1D1B] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between relative group hover:border-[#D4AF37]/40 transition-all"
            >
              <div>
                <span className="text-3xl font-serif font-black text-[#D4AF37] block mb-3">{s.num}</span>
                <h3 className="text-lg font-serif font-bold text-[#F8F6F0] mb-1">{s.title}</h3>
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
