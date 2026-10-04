'use client';

import React from 'react';
import { Shield, Star, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "AEGIS transformed our DIFC corporate tower's front-of-house experience. The officers maintain impeccable executive etiquette while strictly controlling access to trading and board levels.",
      author: "Rashid Al-Nuaimi",
      title: "Head of Corporate Real Estate & Security",
      organization: "Tier-1 Sovereign Asset Management, DIFC",
      rating: 5,
      scope: "45-Storey Tower Guarding & Central Control"
    },
    {
      quote: "The close protection detail provided for our visiting foreign ministerial delegation was world-class. Discreet, punctual, and highly coordinated with UAE traffic protocol.",
      author: "Ambassador Marcus Vance",
      title: "Chief of Protocol & Diplomatic Security",
      organization: "International Trade & Energy Summit Delegation",
      rating: 5,
      scope: "VIP Close Protection & Armored Convoys"
    },
    {
      quote: "Complete peace of mind for our private family estate on Palm Jumeirah. The thermal perimeter monitoring and polite, highly disciplined gate officers are unmatched in the UAE.",
      author: "Dr. Fatima Al-Mansoor",
      title: "Private Family Office Trustee",
      organization: "Palm Jumeirah Signature Residential Compound",
      rating: 5,
      scope: "24/7 Residential Sanctuary Security"
    }
  ];

  return (
    <section className="py-24 bg-[#03060C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trusted by Enterprise Leaders &amp; Principals
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Discover why UAE financial institutions, diplomatic delegations, and private estates trust AEGIS Sovereign.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#080D18] border border-slate-800/90 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-cyan-400 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic font-light">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white font-sans">{t.author}</h4>
                <p className="text-xs text-cyan-400 mt-0.5 font-mono">{t.title}</p>
                <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{t.organization}</p>
                <span className="inline-block mt-3 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {t.scope}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
