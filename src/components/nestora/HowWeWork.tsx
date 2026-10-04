'use client';

import React from 'react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'VALUATION & AUDIT',
      subtitle: 'Property Assessment',
      desc: 'Physical property inspection, rental pricing audit against RERA index, and maintenance snag review.'
    },
    {
      num: '02',
      title: 'TENANT MATCHING',
      subtitle: 'Screening & Placement',
      desc: 'HD portal marketing, corporate expat viewings, AECB credit checks, and employment verification.'
    },
    {
      num: '03',
      title: 'CONTRACT & EJARI',
      subtitle: 'Legal Execution',
      desc: 'Tenancy agreement drafting, security deposit collection, PDC cheque escrow, and 24h Ejari registration.'
    },
    {
      num: '04',
      title: 'HANDSOFF CARE',
      subtitle: 'Maintenance & Payouts',
      desc: '24/7 emergency repair dispatch, bi-annual HVAC inspections, and prompt direct-wire rent disbursements.'
    },
    {
      num: '05',
      title: 'RENEWAL OPTIMIZATION',
      subtitle: 'Annual RERA Review',
      desc: 'Executing official RERA Rent Calculator increases 90 days prior to contract renewal or tenant turnover.'
    }
  ];

  return (
    <section className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            PROVEN 5-STAGE LANDLORD WORKFLOW
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
            How We Work.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            A structured property management methodology designed for complete landlord peace of mind, high occupancy, and hands-off income.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative font-sans">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#0C2D31] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between relative group hover:border-[#C5A059]/40 transition-all"
            >
              <div>
                <span className="text-3xl font-serif font-black text-[#C5A059] block mb-3">{s.num}</span>
                <h3 className="text-lg font-serif font-bold text-[#F4EFE6] mb-1">{s.title}</h3>
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
