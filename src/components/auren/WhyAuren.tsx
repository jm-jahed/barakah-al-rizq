'use client';

import React from 'react';
import { ShieldCheck, Compass, PieChart, Lock, Globe, Building } from 'lucide-react';
import { AUREN_STATS } from '@/data/aurenData';

export const WhyAuren: React.FC = () => {
  const pillars = [
    { title: 'Absolute Client Discretion', desc: 'Private banking level confidentiality protocols protecting all family holdings, records, and strategic conversations.' },
    { title: 'Senior Advisor-Led Relationships', desc: 'Direct access to veteran Managing Partners and CFA charters — never junior relationship managers.' },
    { title: 'Independent, Conflict-Free Advice', desc: 'Objective strategic advisory without product commission biases or proprietary fund quotas.' },
    { title: 'Multi-Jurisdictional Expertise', desc: 'Deep fluency in DIFC, ADGM, GCC, European, and offshore wealth governance frameworks.' },
    { title: 'Family-Generational Perspective', desc: 'Long-term planning designed to align patriarch/matriarch vision with next-gen inheritance needs.' },
    { title: 'Institutional Governance Standards', desc: 'Consolidated reporting, tail-risk stress testing, and rigorous third-party manager due diligence.' }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            THE AUREN ADVISORY PHILOSOPHY
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F8F6F0] mt-4">
            Why AUREN CAPITAL.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            6 institutional pillars guiding our private wealth mandates with quiet luxury, judgment, and independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#1A1D1B] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#D4AF37]/40 transition-all space-y-3 font-sans"
            >
              <Compass className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-serif font-bold text-[#F8F6F0]">{p.title}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
