'use client';

import React from 'react';
import { ShieldCheck, FileCheck, DollarSign, Clock, Building, Users } from 'lucide-react';
import { LEDGERA_STATS } from '@/data/ledgeraData';

export const WhyLedgera: React.FC = () => {
  const pillars = [
    { title: 'FTA-Aligned Expertise', desc: 'Strict alignment with UAE Federal Tax Authority Corporate Tax (9%) and VAT Decree-Law requirements.' },
    { title: 'Registered Tax Agent Support', desc: 'Certified tax consultants and chartered accountants leading your monthly ledger reviews.' },
    { title: 'Transparent Monthly Pricing', desc: 'Fixed monthly accounting retainers with zero hidden fees or surprise billings.' },
    { title: 'Real-Time Financial Visibility', desc: '24/7 cloud accounting access (Xero/QuickBooks) with monthly management decks by the 5th.' },
    { title: 'Multi-Industry Experience', desc: 'Deep financial practice across UAE retail, real estate, tech, construction, and free zone entities.' },
    { title: 'Long-Term Financial Partnership', desc: 'Proactive fiscal guidance protecting your profit margins and compliance as your business scales.' }
  ];

  return (
    <section className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            DISTINCTIVE LEDGERA ADVANTAGE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Why LEDGERA.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            6 core practice pillars defining our commitment to financial precision, tax accuracy, and client partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#0E3B27] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#D4AF37]/40 transition-all space-y-3 font-sans"
            >
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-serif font-bold text-[#F7F6F2]">{p.title}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
