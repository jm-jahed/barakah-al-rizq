'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Lock, RotateCcw, CreditCard, CheckCircle2, PhoneCall } from 'lucide-react';

const SUPPORT_SERVICES = [
  {
    title: 'Proactive Flight Re-Routing',
    desc: 'When weather or air traffic triggers diversions, our systems instantly hold alternative lie-flat suites before you even land.',
    icon: <RotateCcw className="w-5 h-5 text-amber-400" />
  },
  {
    title: '24/7 VIP Concierge & WhatsApp',
    desc: 'Direct dedicated access to personal travel alchemists for last-minute Michelin table reservations or private yacht charters.',
    icon: <PhoneCall className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'Zero-Surcharge Transparent Pricing',
    desc: 'All quotes in AED are final and include all airport passenger taxes, resort destination fees, and service charges.',
    icon: <CreditCard className="w-5 h-5 text-cyan-400" />
  },
  {
    title: 'Sovereign Traveler Data Encryption',
    desc: 'Passport numbers, visa documents, and credit card credentials secured with hardware-isolated HSM cryptography.',
    icon: <Lock className="w-5 h-5 text-amber-300" />
  }
];

export const AeroviaTrustSupport: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020509] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            TRUST & CONCIERGE ASSURANCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Travel With Confidence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              We’re With You at Every Step.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Luxury travel demands flawless execution. When schedules shift or connections tighten, our concierge command center handles every detail effortlessly.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SUPPORT_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-300 w-fit mb-4">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Positioning & Gulf Architecture Banner */}
        <div className="p-8 rounded-3xl bg-[#060c14] border border-amber-500/25 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-mono text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">Designed From the Gulf. Built for Global Travel:</strong> Conceptual platform architecture engineered for UAE & international luxury travelers.
            </span>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-300 font-bold shrink-0">
            24/7 VIP Assistance
          </span>
        </div>
      </div>
    </section>
  );
};
