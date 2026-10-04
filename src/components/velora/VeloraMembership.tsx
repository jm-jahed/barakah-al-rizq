'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Check, ArrowRight, Star } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '@/data/veloraData';

interface VeloraMembershipProps {
  onSelectTier: (tierId: string) => void;
}

export const VeloraMembership: React.FC<VeloraMembershipProps> = ({
  onSelectTier,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            SANCTUARY PATRONAGE
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Make Wellness a Ritual.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg mb-8">
            Privileged access tiers designed for individuals who make deliberate stillness, recovery, and restorative therapy a recurring cornerstone of their lifestyle.
          </p>

          {/* Billing Cycle Switch */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#121815] border border-[#232e27]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#c5a059] text-[#0a0c0b] font-medium'
                  : 'text-[#8c867a] hover:text-[#ded9ce]'
              }`}
            >
              Monthly Dues
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#c5a059] text-[#0a0c0b] font-medium'
                  : 'text-[#8c867a] hover:text-[#ded9ce]'
              }`}
            >
              Annual Patronage (Save 15%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_TIERS.map((tier, idx) => {
            const isSignature = tier.badge === 'Most Popular';
            const price = billingCycle === 'monthly' ? tier.monthlyAED : Math.round(tier.annualAED / 12);

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isSignature
                    ? 'bg-gradient-to-b from-[#18231c] via-[#121815] to-[#0c0f0d] border-2 border-[#c5a059] shadow-[0_10px_40px_rgba(197,160,89,0.15)]'
                    : 'bg-[#111613] border border-[#202b24] hover:border-[#334239]'
                }`}
              >
                {isSignature && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c5a059] text-[#0a0c0b] text-[10px] uppercase font-bold tracking-widest">
                    Signature Recommendation
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
                      {tier.name}
                    </span>
                    <Shield className="w-4 h-4 text-[#736e62]" />
                  </div>

                  <p className="text-xs text-[#827d70] italic mb-6">
                    {tier.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#1f2a23]">
                    <div className="text-3xl font-serif text-[#fdfbf7]">
                      AED {price.toLocaleString()}
                      <span className="text-xs text-[#716c62] font-sans font-light"> / month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-[10px] text-[#c5a059] mt-1 font-light">
                        Billed annually (AED {tier.annualAED.toLocaleString()}/yr)
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] text-[#716c62] uppercase tracking-widest font-medium">
                      Patron Privileges
                    </div>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#bcb7ab] font-light">
                        <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-[#787368] mb-4 bg-[#0a0d0b] p-3 rounded-xl border border-[#1b231e]">
                    <strong className="text-[#9e988c] block uppercase tracking-wider text-[10px] mb-0.5">Designed For:</strong>
                    {tier.idealFor}
                  </div>

                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isSignature
                        ? 'bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] shadow-lg'
                        : 'bg-[#18201b] hover:bg-[#232d27] text-[#ded9ce] border border-[#28352e]'
                    }`}
                  >
                    <span>Inquire Membership</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
