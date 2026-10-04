'use client';

import React from 'react';
import { Award, Gift, Flame, Plus } from 'lucide-react';
import { REWARDS_REDEEM_TIERS } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

export const RewardsSection: React.FC = () => {
  const { t, isRtl } = useCrispoLanguage();
  const currentPoints = 720;
  const targetPoints = 1000;
  const percent = Math.round((currentPoints / targetPoints) * 100);

  const tiers = isRtl
    ? [
        { pointsNeeded: 100, reward: 'مشروب غازي أو عصير ليموناضة بالنعناع كبير مجاناً', icon: 'CupSoda' },
        { pointsNeeded: 250, reward: 'بطاطس مقلية محملة بالجبن والتندرز مجاناً', icon: 'Utensils' },
        { pointsNeeded: 500, reward: 'برجر دجاج كريسبو المميز مجاناً', icon: 'Sandwich' },
        { pointsNeeded: 1000, reward: 'بوكس كرانش العائلي (١٠ قطع) مجاناً', icon: 'Gift' }
      ]
    : REWARDS_REDEEM_TIERS;

  return (
    <section id="rewards" className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1A1715] rounded-3xl border border-stone-800 p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30">
                {isRtl ? 'نادي ولاء ومكافآت كرانش' : 'CRUNCH LOYALTY CLUB'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#FAF6EE] italic font-sans mt-3">
                {isRtl ? 'مكافآت كريسبو.' : 'CRISPO REWARDS.'}
              </h2>
              <p className="text-xs text-stone-400 font-mono mt-1">
                {t('rewardsSubtitle')}
              </p>
            </div>

            {/* Current Points Bar */}
            <div className="p-4 rounded-2xl bg-[#12100E] border border-stone-800 font-mono text-right rtl:text-left">
              <span className="text-[10px] text-stone-400 uppercase block">
                {t('rewardsBalance')}
              </span>
              <div className="flex items-baseline justify-end rtl:justify-start gap-2">
                <span className="text-3xl font-black text-[#FFC107]">{currentPoints}</span>
                <span className="text-xs text-stone-400">/ 1,000 {isRtl ? 'نقطة' : 'PTS'}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-10 font-mono text-xs">
            <div className="flex justify-between font-bold mb-2">
              <span className="text-stone-300">
                {isRtl ? 'التقدم نحو البوكس العائلي المجاني القادم' : 'PROGRESS TO NEXT FREE FAMILY BUCKET'}
              </span>
              <span className="text-[#FFC107]">{percent}%</span>
            </div>
            <div className="w-full h-3 bg-[#12100E] rounded-full overflow-hidden p-0.5 border border-stone-800">
              <div
                className="h-full bg-gradient-to-r from-[#FFC107] via-[#FF4757] to-[#E63946] rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {/* Redeem Tiers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {tiers.map((tier) => (
              <div
                key={tier.pointsNeeded}
                className={`p-4 rounded-2xl border flex flex-col justify-between ${
                  currentPoints >= tier.pointsNeeded
                    ? 'bg-[#E63946]/15 border-[#E63946] text-white shadow-md'
                    : 'bg-[#12100E] border-stone-800 text-stone-400'
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-[#FFC107] block mb-1">
                    {tier.pointsNeeded} {isRtl ? 'نقطة' : 'POINTS'}
                  </span>
                  <span className="text-xs font-bold text-white block">{tier.reward}</span>
                </div>
                <button
                  disabled={currentPoints < tier.pointsNeeded}
                  className={`mt-4 w-full py-2 rounded-xl text-[11px] font-bold uppercase transition-all ${
                    currentPoints >= tier.pointsNeeded
                      ? 'bg-[#E63946] text-white hover:bg-[#FF4757]'
                      : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                  }`}
                >
                  {currentPoints >= tier.pointsNeeded ? (isRtl ? 'استبدال المكافأة' : 'Redeem Reward') : (isRtl ? 'مغلق' : 'Locked')}
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
