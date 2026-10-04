'use client';

import React from 'react';
import { ShieldCheck, Scale, Award, Lock, Users, Clock } from 'lucide-react';
import { VERITAS_STATS } from '@/data/veritasData';

export const WhyVeritas: React.FC = () => {
  const pillars = [
    { title: 'UAE & DIFC Expertise', desc: 'Dual capabilities in English Common Law (DIFC/ADGM) and UAE Civil Code onshore matters.' },
    { title: 'Senior Partner-Led Matters', desc: 'Direct partner advocacy on every matter. Zero reliance on junior associates for core drafting.' },
    { title: 'Transparent Fee Structures', desc: 'Itemized engagement agreements with clear fixed-fee and capped hourly parameters.' },
    { title: 'Multilingual Legal Team', desc: 'Native Arabic and English legal counsel for seamless UAE Court and DIAC representation.' },
    { title: 'Discreet & Confidential', desc: 'Strict legal professional privilege and high-grade data protection protocols.' },
    { title: 'Long-Term Counsel', desc: 'Ongoing commercial guardianship protecting your entity past immediate transactions.' }
  ];

  return (
    <section className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            DISTINCTIVE LEGAL ADVANTAGE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF8F5] mt-4">
            Why VERITAS LEGAL.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            6 core legal pillars defining our commitment to commercial precision, discretionary counsel, and client risk protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#0F1C3F] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#C5A059]/40 transition-all space-y-3 font-sans"
            >
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              <h3 className="text-xl font-serif font-bold text-[#FAF8F5]">{p.title}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
