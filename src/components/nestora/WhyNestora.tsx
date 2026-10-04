'use client';

import React from 'react';
import { ShieldCheck, Building2, KeyRound, Clock, Wrench, Wallet } from 'lucide-react';
import { NESTORA_STATS } from '@/data/nestoraData';

export const WhyNestora: React.FC = () => {
  const pillars = [
    { title: '100% Ejari & RERA Compliance', desc: 'Strict alignment with Dubai Land Department regulations, RERA Rent Calculator tiers, and tenancy contract legal execution.' },
    { title: 'Transparent 8% Fixed Fee', desc: 'Single transparent management fee with zero contractor markups on maintenance or annual tenant renewal fees.' },
    { title: 'Overseas Landlord Peace of Mind', desc: 'Direct-wire international rent disbursements, 24/7 owner portal access, and digital bi-annual property photo audits.' },
    { title: '12-Day Average Placement', desc: 'Premium placement on Property Finder and Bayut with AECB credit background verification for high-quality corporate tenants.' },
    { title: 'In-House 24/7 Facility Care', desc: 'Dedicated MEP engineers and AC technicians providing rapid emergency repairs and preventive property maintenance.' },
    { title: 'Short-Term DTCM Yield Boosting', desc: 'Licensed holiday home conversion option yielding up to 35% higher net annual income for prime tourist locations.' }
  ];

  return (
    <section id="why-nestora" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            THE NESTORA LANDLORD ADVANTAGE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
            Why NESTORA.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            6 core practice pillars defining our commitment to maximum landlord yields, high-credit tenants, and hands-off reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#0C2D31] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#C5A059]/40 transition-all space-y-3 font-sans"
            >
              <Building2 className="w-6 h-6 text-[#C5A059]" />
              <h3 className="text-xl font-serif font-bold text-[#F4EFE6]">{p.title}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
