'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Check, ShieldCheck, Crown, HeartHandshake } from 'lucide-react';

const TIERS = [
  {
    id: 'daily',
    name: 'Daily Fresh-Bake',
    tagline: 'For daily bread lovers and morning coffee rituals',
    priceAED: 290,
    period: '/ month',
    features: [
      '2 Fresh Stone Hearth Loaves per week',
      'Priority 08:00 AM Counter Hold',
      'Complimentary unbleached linen bread bag',
      '10% off custom celebration cakes'
    ]
  },
  {
    id: 'weekend',
    name: 'Weekend Club',
    tagline: 'Curated Saturday & Sunday viennoiserie assortments',
    priceAED: 460,
    period: '/ month',
    popular: true,
    features: [
      'Weekly Curated 6-piece Pastry Box',
      '1 Weekly Signature Sourdough Boule',
      'Complimentary Saturday Morning Courier Dispatch',
      'Exclusive access to secret test-kitchen bakes',
      '15% off all corporate & gifting hampers'
    ]
  },
  {
    id: 'signature',
    name: 'Signature Atelier Circle',
    tagline: 'Pinnacle access to seasonal releases and masterclasses',
    priceAED: 850,
    period: '/ month',
    features: [
      'Weekly 10-piece Grand Baker Hamper',
      'Guaranteed holiday panettone & babka allocations',
      'Personalized wooden bread proofing bowl gift',
      'Quarterly private sourdough masterclass invitation',
      'Direct concierge line with head baker'
    ]
  }
];

export const FlameFlourMembership: React.FC = () => {
  const [subscribedId, setSubscribedId] = useState<string | null>(null);

  const handleSubscribe = (id: string) => {
    setSubscribedId(id);
    setTimeout(() => setSubscribedId(null), 2500);
  };

  return (
    <section className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Crown className="w-3.5 h-3.5" />
            <span>FLAME & FLOUR SUBSCRIPTION CIRCLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Bakery Membership
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Never miss a morning bake. Fresh wood-fired sourdough and flaky viennoiserie delivered on your weekly schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => {
            const isSubbed = subscribedId === tier.id;
            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between relative shadow-xl ${
                  tier.popular
                    ? 'bg-[#15100c] border-amber-500 ring-1 ring-amber-500/50 shadow-amber-950/40'
                    : 'bg-[#110e0c] border-stone-800/80 hover:border-stone-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-stone-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-serif text-stone-100">{tier.name}</h3>
                  <p className="text-xs text-stone-400 mt-1 font-light min-h-[32px]">{tier.tagline}</p>

                  <div className="mt-6 mb-6 pb-6 border-b border-stone-850 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
                      AED {tier.priceAED}
                    </span>
                    <span className="text-xs font-mono text-stone-400">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 text-xs text-stone-300">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => handleSubscribe(tier.id)}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                      isSubbed
                        ? 'bg-emerald-500 text-stone-950'
                        : tier.popular
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-950/50'
                        : 'bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800'
                    }`}
                  >
                    {isSubbed ? 'Membership Activated · Demo' : `Join ${tier.name}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
