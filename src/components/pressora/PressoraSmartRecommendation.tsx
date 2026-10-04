'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { PRESSORA_PRODUCTS } from '@/data/pressoraData';

export const PressoraSmartRecommendation: React.FC<{ onSelectProduct?: (product: any) => void }> = ({ onSelectProduct }) => {
  const [goal, setGoal] = useState<'Launch' | 'Event' | 'Rebrand' | 'Operations'>('Launch');
  const [budgetTier, setBudgetTier] = useState<'Essential' | 'Executive' | 'Prestige'>('Executive');

  const getRecommendations = () => {
    if (goal === 'Launch') {
      return PRESSORA_PRODUCTS.filter(p => ['prod-business-cards', 'prod-presentation-folders', 'prod-flyers'].includes(p.id));
    }
    if (goal === 'Event') {
      return PRESSORA_PRODUCTS.filter(p => ['prod-rollup-banners', 'prod-lanyards-badges', 'prod-promotional-totes'].includes(p.id));
    }
    if (goal === 'Operations') {
      return PRESSORA_PRODUCTS.filter(p => ['prod-invoice-books', 'prod-shipping-boxes', 'prod-stickers-labels'].includes(p.id));
    }
    return PRESSORA_PRODUCTS.filter(p => ['prod-business-cards', 'prod-letterheads', 'prod-luxury-packaging'].includes(p.id));
  };

  const recs = getRecommendations();

  return (
    <section className="py-20 bg-neutral-900/40 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>INTELLIGENT SPECIFICATION WIZARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Find the Perfect <span className="font-serif italic text-amber-400">Print Match</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Select your primary business milestone and budget tier to generate recommended production specifications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="flex items-center bg-neutral-950 border border-neutral-800 p-1.5 rounded-2xl text-xs">
            <span className="text-neutral-500 px-3 font-mono">Milestone:</span>
            {(['Launch', 'Event', 'Rebrand', 'Operations'] as const).map((g) => (
              <button
                key={g}
                onClick={() => setGoal(g)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  goal === g
                    ? 'bg-amber-500 text-neutral-950 font-medium'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-neutral-950 border border-neutral-800 p-1.5 rounded-2xl text-xs">
            <span className="text-neutral-500 px-3 font-mono">Tier:</span>
            {(['Essential', 'Executive', 'Prestige'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setBudgetTier(t)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  budgetTier === t
                    ? 'bg-neutral-800 text-amber-400 font-medium border border-neutral-700'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recs.map((prod) => (
            <motion.div
              key={prod.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    MATCH FOR {goal.toUpperCase()}
                  </span>
                  <span className="text-neutral-500 font-mono text-xs">{prod.leadTimeDays}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{prod.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">{prod.description}</p>
                <div className="text-xs text-neutral-300 font-mono mb-4">
                  From <span className="text-emerald-400 font-medium text-base">AED {prod.startingPriceAED}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectProduct && onSelectProduct(prod)}
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors border border-neutral-800"
              >
                <span>Configure This Asset</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
