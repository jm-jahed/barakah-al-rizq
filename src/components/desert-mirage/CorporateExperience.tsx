'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Crown, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CorporateExperienceProps {
  onOpenModal: (intent?: string) => void;
}

export const CorporateExperience: React.FC<CorporateExperienceProps> = ({ onOpenModal }) => {
  const corporatePillars = [
    {
      title: 'Executive Board Retreats',
      desc: 'Exclusive full-camp privatization with silent Starlink connectivity, private dining pavilions, and bespoke team desert navigation challenges.'
    },
    {
      title: 'VIP Brand Activations & Product Launches',
      desc: 'Dramatic dune amphitheater staging, luxury automotive reveals on isolated ridge lines, and custom atmospheric lighting.'
    },
    {
      title: 'Diplomatic & High-Net-Worth Delegation Protocol',
      desc: 'Strict non-disclosure protocol, armored transport coordination, and dedicated protocol security liaisons.'
    }
  ];

  return (
    <section id="corporate" className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/35 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090706] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
              <Building2 className="w-3.5 h-3.5" />
              <span>CORPORATE & VIP PRIVATIZATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Desert Experiences for People Who Expect More.
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Full sanctuary buyouts for global enterprises, luxury automotive brands, sovereign delegations, and intimate milestone celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {corporatePillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090706]/90 border border-stone-800 space-y-2 hover:border-[#C9A265]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#18130F] flex items-center justify-center text-[#C9A265] text-xs font-mono font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif text-white pt-1">{p.title}</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
            <div className="text-xs font-mono text-stone-400">
              Capacity: <strong>12 to 120 Guests</strong> · Customized Itineraries & Logistics
            </div>
            <button
              onClick={() => onOpenModal('Corporate & VIP Desert Buyout')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#C9A265] hover:bg-[#D8B478] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Inquire for Corporate Buyout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
