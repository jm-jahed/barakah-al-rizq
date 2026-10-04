'use client';

import React from 'react';
import { Building2, ShieldCheck, Layers, Award, Users, CheckCircle2 } from 'lucide-react';
import { VANTAGE_STATS } from '@/data/vantageData';

export const WhyVantage: React.FC = () => {
  const pillars = [
    { title: 'Proven Delivery Track Record', desc: '100% on-time handover history across completed residential towers and mixed-use developments.' },
    { title: 'Prime UAE Masterplan Locations', desc: 'Strategic acquisitions in Dubai Marina, Business Bay, Dubai Hills, and Al Reem Island Abu Dhabi.' },
    { title: 'Flexible Payment Plan Structures', desc: 'Buyer-centric 60/40 and post-handover payment structures with low down-payment entry thresholds.' },
    { title: 'Transparent Construction Updates', desc: 'Quarterly drone video audits, engineering milestone reports, and DLD Escrow financial protection.' },
    { title: 'Tier-One Contractor Network', desc: 'Partnering exclusively with top-tier UAE contractors and European luxury interior material suppliers.' },
    { title: 'Strong Investor Capital Appreciation', desc: 'Historic 15% – 25% value gains captured from off-plan launch pricing to final project handover.' }
  ];

  return (
    <section id="why-vantage" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            THE VANTAGE DEVELOPER DIFFERENCE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            Why Vantage.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            6 core practice pillars defining our commitment to architectural excellence, financial integrity, and on-time handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#0A192F] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#C5A059]/40 transition-all space-y-3 font-sans"
            >
              <Building2 className="w-6 h-6 text-[#C5A059]" />
              <h3 className="text-xl font-serif font-bold text-[#FAFAFA]">{p.title}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
