'use client';

import React from 'react';

export const BuyerJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Exploration & Sales Gallery',
      desc: 'Explore architectural masterplan models, view 3D VR walkthroughs, and select preferred unit floor plans at our Business Bay Sales Gallery.'
    },
    {
      num: '02',
      title: 'RESERVE',
      subtitle: 'Unit Booking Deposit',
      desc: 'Reserve your allocated residence with a 10%–20% booking deposit, securing launch pricing and preferred view orientation.'
    },
    {
      num: '03',
      title: 'STRUCTURE',
      subtitle: 'SPA & DLD Escrow',
      desc: 'Execute Sale & Purchase Agreement (SPA) and process official Oqood / DLD registration with project escrow protection.'
    },
    {
      num: '04',
      title: 'CONSTRUCT',
      subtitle: 'Milestone Progress Audits',
      desc: 'Receive quarterly drone video updates, structural completion reports, and construction-linked installment notifications.'
    },
    {
      num: '05',
      title: 'HANDOVER',
      subtitle: 'Inspection & Key Delivery',
      desc: 'Conduct final architectural snagging, settle handover balance, and collect title deed & key set for immediate occupancy or leasing.'
    }
  ];

  return (
    <section id="buyer-journey" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            TRANSPARENT 5-STEP OFF-PLAN EXPERIENCE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            The Buyer Journey.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            A seamless, developer-backed off-plan acquisition timeline built on transparency, DLD escrow safety, and on-time handover.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative font-sans">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#0A192F] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between relative group hover:border-[#C5A059]/40 transition-all"
            >
              <div>
                <span className="text-3xl font-serif font-black text-[#C5A059] block mb-3">{s.num}</span>
                <h3 className="text-lg font-serif font-bold text-[#FAFAFA] mb-1">{s.title}</h3>
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
