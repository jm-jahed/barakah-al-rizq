'use client';

import React from 'react';
import { ShieldCheck, Award, Users, TrendingUp, Compass, Heart } from 'lucide-react';
import { NEXORA_TRUST_STATS } from '@/data/nexoraData';

export const WhyNexora: React.FC = () => {
  const pillars = [
    { title: 'UAE Market Expertise', desc: 'Deep regulatory experience across Dubai DED, DIFC, Abu Dhabi ADDED, ADGM, and northern free zones.' },
    { title: 'Founder-Level Advisory', desc: 'Direct partner access on every project. No junior hand-offs or generic account managers.' },
    { title: 'Transparent Pricing', desc: 'Itemized professional fee structures completely separated from official government tariffs.' },
    { title: 'End-to-End Coordination', desc: 'From initial activity mapping to corporate banking approval and VIP Golden Visas.' },
    { title: 'Data-Driven Strategy', desc: 'Financial modeling, valuation audits, and tax optimization backed by concrete GCC benchmarks.' },
    { title: 'Long-Term Partnership', desc: 'We support your business far past launch through tax compliance, ESR, and scaling advisory.' }
  ];

  return (
    <section className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            THE NEXORA ADVANTAGE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Why NEXORA BUSINESS.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            6 core pillars that separate NEXORA from routine setup agents and generic management consultancies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#1A1D24] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#D4AF37]/40 transition-all space-y-3"
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
