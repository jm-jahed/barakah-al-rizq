'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Plane,
  Coins
} from 'lucide-react';

interface TravelMembershipProps {
  onOpenInquiry: (membershipTier?: string) => void;
}

const MEMBERSHIP_TIERS = [
  {
    name: 'Sapphire VIP',
    annualRetainerAED: 'AED 35,000 / year',
    badge: 'Executive Tier',
    tagline: 'Priority global hotel upgrades, dedicated luxury travel advisor, and VIP airport fast-track.',
    perks: [
      'Guaranteed room upgrades at 2,500+ luxury partner hotels worldwide',
      'Dedicated personal travel director via direct WhatsApp desk',
      'Complimentary airport meet & assist at DXB & AUH (x4 per year)',
      'Complimentary breakfast & $100 hotel credits on every booking',
      'Full flexible rebooking and cancellation waiver'
    ]
  },
  {
    name: 'Emerald Sovereign',
    annualRetainerAED: 'AED 75,000 / year',
    badge: 'Most Popular',
    tagline: 'Private jet positioning priority, private yacht charter privileges, and Michelin dining table access.',
    perks: [
      'All Sapphire tier benefits included',
      'Guaranteed private jet positioning within 3 hours from Dubai DWC',
      'Unlimited DXB/AUH Ahlan First Class Lounge meet & assist passes',
      'Private concierge table buyouts at 3-star Michelin global restaurants',
      'Complimentary luxury airport chauffeur transfers (Rolls-Royce / Maybach)',
      '24/7 dedicated travel concierge team with sub-5-minute response'
    ],
    featured: true
  },
  {
    name: 'Black Diamond Sovereign',
    annualRetainerAED: 'AED 150,000 / year',
    badge: 'Invitation Only',
    tagline: 'Bespoke private island buyouts, superyacht concierge, and global crisis travel extraction.',
    perks: [
      'All Emerald Sovereign privileges included',
      'Dedicated Managing Partner assigned as permanent private advisor',
      'Exclusive access to private island and estate buyouts before public release',
      'Global diplomatic passport and expedited visa concierge handling',
      '24/7 private jet standby guarantee with zero cancellation fees',
      'Private security detail and VIP medical evacuation coverage globally'
    ]
  }
];

export const TravelMembership: React.FC<TravelMembershipProps> = ({ onOpenInquiry }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="membership" className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>ANNUAL PRIVATE CONCIERGE RETAINERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              AURELIA Sovereign <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Membership Tiers</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Designed for high-frequency Gulf travelers, royal family offices, and C-suite executives requiring 24/7 dedicated luxury travel coordination.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-amber-400 font-bold block">Annual Retainers in AED</span>
            <span className="text-[11px] text-slate-500">Fully Deductible Against Bookings</span>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {MEMBERSHIP_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden backdrop-blur-md ${
                tier.featured
                  ? 'bg-[#121722] border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.18)] -translate-y-1'
                  : 'bg-[#0D111A] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Top Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-xl uppercase ${
                    tier.featured
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-white/5 text-amber-300 border border-white/10'
                  }`}>
                    {tier.badge}
                  </span>
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {tier.name}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-amber-300 mt-2">
                    {tier.annualRetainerAED}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {tier.tagline}
                </p>

                {/* Perks list */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">
                    Tier Entitlements:
                  </span>
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenInquiry(`Membership Application: ${tier.name} (${tier.annualRetainerAED})`)}
                className={`w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                  tier.featured
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black hover:scale-105'
                    : 'bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 text-white'
                }`}
              >
                <span>Apply for {tier.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
