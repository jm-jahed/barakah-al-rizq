'use client';

import React from 'react';
import { Crown, Award, Gift } from 'lucide-react';
import { OASIRA_REWARDS_TIERS } from '@/data/oasiraData';

export const RewardsSection: React.FC = () => {
  const currentPoints = 2340;
  const targetPoints = 3000;
  const percent = Math.round((currentPoints / targetPoints) * 100);

  return (
    <section id="rewards" className="py-20 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0F382C] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
                UAE LOYALTY CLUB
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAF6EE] mt-3">
                OASIRA REWARDS.
              </h2>
              <p className="text-xs text-stone-400 font-mono mt-1">
                Earn 1 OASIRA Point for every AED 1 spent on UAE resort staycations and experiences.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A2920] border border-stone-800 font-mono text-right">
              <span className="text-[10px] text-stone-400 uppercase block">YOUR CURRENT BALANCE</span>
              <div className="flex items-baseline justify-end gap-2">
                <span className="text-3xl font-black text-[#D4B382]">{currentPoints}</span>
                <span className="text-xs text-stone-400">/ 3,000 PTS</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-10 font-mono text-xs">
            <div className="flex justify-between font-bold mb-2">
              <span className="text-stone-300">PROGRESS TO AED 250 RESORT SPA & DINING VOUCHER</span>
              <span className="text-[#D4B382]">{percent}%</span>
            </div>
            <div className="w-full h-3 bg-[#0A2920] rounded-full overflow-hidden p-0.5 border border-stone-800">
              <div
                className="h-full bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#2A7F7A] rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {/* Rewards Tiers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {OASIRA_REWARDS_TIERS.map((tier) => (
              <div
                key={tier.pointsNeeded}
                className={`p-4 rounded-2xl border flex flex-col justify-between ${
                  currentPoints >= tier.pointsNeeded
                    ? 'bg-[#0A2920] border-[#D4B382] text-white shadow-md'
                    : 'bg-[#0A2920]/40 border-stone-800 text-stone-500'
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-[#D4B382] block mb-1">{tier.pointsNeeded} POINTS</span>
                  <span className="text-xs font-bold text-white block">{tier.reward}</span>
                </div>
                <button
                  disabled={currentPoints < tier.pointsNeeded}
                  className={`mt-4 w-full py-2 rounded-xl text-[11px] font-bold uppercase transition-all ${
                    currentPoints >= tier.pointsNeeded
                      ? 'bg-[#D4B382] text-black hover:bg-[#c2a170]'
                      : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                  }`}
                >
                  {currentPoints >= tier.pointsNeeded ? 'Redeem Reward' : 'Locked'}
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
