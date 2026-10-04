'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight, ShieldAlert, ShieldCheck } from 'lucide-react';
import { NEXORA_SETUP_TIERS, NexoraSetupOption } from '@/data/nexoraData';

interface BusinessSetupSectionProps {
  onSelectOption: (option: NexoraSetupOption) => void;
}

export const BusinessSetupSection: React.FC<BusinessSetupSectionProps> = ({ onSelectOption }) => {
  return (
    <section id="setup" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              UAE COMPANY INCORPORATION & JURISDICTION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              Starting a Business in the UAE?
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              NEXORA guides founders and corporations through business activity mapping, mainland vs free zone evaluation, licensing, banking setup, and PRO coordination.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#1A1D24] border border-stone-800 font-mono text-xs text-stone-400 max-w-xs">
            <span className="text-[#D4AF37] font-bold block mb-0.5">透明 100% TRANSPARENT PRICING</span>
            <span>Professional fees clearly itemized from variable government licensing fees.</span>
          </div>
        </div>

        {/* 3 Setup Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {NEXORA_SETUP_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl p-8 border flex flex-col justify-between relative transition-all group ${
                tier.isPopular
                  ? 'bg-[#1A1D24] border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10'
                  : 'bg-[#121417] border-stone-800 hover:border-stone-700'
              }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-[#D4AF37] text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                  MOST POPULAR JURISDICTION
                </span>
              )}

              <div>
                <span className="text-xs font-mono text-stone-400 block uppercase mb-1">{tier.bestFor}</span>
                <h3 className="text-2xl font-serif font-bold text-[#F7F6F2] mb-4">{tier.name}</h3>

                <div className="mb-6 font-mono">
                  <span className="text-[10px] text-stone-400 block uppercase">STARTING PROFESSIONAL ADVISORY FEE</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#D4AF37]">AED {tier.startingFeeAED.toLocaleString()}</span>
                    <span className="text-[10px] text-stone-400">*</span>
                  </div>
                  <span className="text-[10px] text-stone-500 block italic mt-0.5">Consultation required for license scope</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-stone-300 mb-8 border-t border-stone-800 pt-6">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectOption(tier)}
                  className={`w-full py-4 rounded-xl font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                    tier.isPopular
                      ? 'bg-[#D4AF37] hover:bg-[#c49f2b] text-black'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Disclaimer Banner */}
        <div className="p-4 rounded-2xl bg-[#1A1D24] border border-stone-800 flex items-center gap-3 font-mono text-xs text-stone-400">
          <ShieldAlert className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <span>
            <strong>Disclaimer:</strong> Displays starting professional advisory fees. Final costs depend on selected commercial business activity, visa quota count, physical office square footage, and applicable UAE government issuer charges.
          </span>
        </div>

      </div>
    </section>
  );
};
