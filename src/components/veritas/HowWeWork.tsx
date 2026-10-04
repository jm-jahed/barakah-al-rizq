'use client';

import React from 'react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CONSULT',
      subtitle: 'Matter Intake',
      desc: 'Privileged discussion evaluating facts, commercial objectives, underlying contracts, and dispute risks.'
    },
    {
      num: '02',
      title: 'ASSESS',
      subtitle: 'Regulatory Audit',
      desc: 'In-depth review of governing law, DIFC/ADGM vs Onshore jurisdiction, legal precedents, and liability exposure.'
    },
    {
      num: '03',
      title: 'STRUCTURE',
      subtitle: 'Drafting & Strategy',
      desc: 'Formulate bespoke corporate agreements, foundation charters, transaction SPAs, or arbitration pleadings.'
    },
    {
      num: '04',
      title: 'EXECUTE',
      subtitle: 'Negotiation & Filing',
      desc: 'Lead high-level commercial negotiations, execute court filings, or complete multi-entity corporate transfers.'
    },
    {
      num: '05',
      title: 'PROTECT',
      subtitle: 'Ongoing Counsel',
      desc: 'Maintain active legal guardianship through annual governance audits, labor compliance, and tax updates.'
    }
  ];

  return (
    <section className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            PROVEN LEGAL ENGAGEMENT TIMELINE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF8F5] mt-4">
            How We Work.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            A methodical 5-stage legal framework built for absolute discretion, risk reduction, and commercial certainty.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative font-sans">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#0F1C3F] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between relative group hover:border-[#C5A059]/40 transition-all"
            >
              <div>
                <span className="text-3xl font-serif font-black text-[#C5A059] block mb-3">{s.num}</span>
                <h3 className="text-lg font-serif font-bold text-[#FAF8F5] mb-1">{s.title}</h3>
                <span className="text-[10px] font-mono text-[#C5A059] uppercase block mb-3">{s.subtitle}</span>
                <p className="text-xs text-stone-300 font-light leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 mt-4 flex items-center justify-between font-mono text-[10px] text-stone-500">
                <span>STAGE {s.num} / 05</span>
                <span className="text-[#C5A059]">✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
