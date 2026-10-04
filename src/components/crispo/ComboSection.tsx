'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Tag } from 'lucide-react';
import { CRISPO_COMBOS, CrispoCombo } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface ComboSectionProps {
  onAddComboToCart: (combo: CrispoCombo) => void;
}

export const ComboSection: React.FC<ComboSectionProps> = ({ onAddComboToCart }) => {
  const { t, isRtl, formatPrice, translateCombo } = useCrispoLanguage();

  return (
    <section id="combos" className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30">
              {t('combosTitle')}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] tracking-tight italic font-sans mt-4">
              {isRtl ? 'قرمشة أكثر. توفير أكبر.' : 'MORE CRUNCH. MORE VALUE.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              {t('combosSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#E63946]">
            <Tag className="w-4 h-4" />
            <span>{isRtl ? 'وفر حتى 20% مع وجبات الكومبو' : 'SAVE UP TO 20% ON COMBOS'}</span>
          </div>
        </div>

        {/* 3 Combo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CRISPO_COMBOS.map((rawCombo) => {
            const combo = translateCombo(rawCombo);

            return (
              <motion.div
                key={rawCombo.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1A1715] rounded-3xl border border-stone-800 p-6 shadow-xl hover:border-[#FFC107]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 rounded-2xl overflow-hidden mb-6 bg-[#12100E]">
                    <img
                      src={rawCombo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 rtl:left-auto rtl:right-3 text-[10px] font-mono font-black px-3 py-1 rounded-full bg-[#FFC107] text-black shadow-md uppercase">
                      {combo.badge}
                    </span>

                    <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 text-[10px] font-mono text-white bg-[#E63946] px-2.5 py-1 rounded-md font-bold shadow-md">
                      {t('saveBadge', { amount: formatPrice(rawCombo.savingsAED) })}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#FAF6EE] mb-3 font-sans italic">
                    {combo.name}
                  </h3>

                  <div className="space-y-1.5 font-mono text-xs text-stone-300 mb-6">
                    {combo.includes.map((inc) => (
                      <div key={inc} className="flex items-center gap-2">
                        <span className="text-[#FFC107]">✓</span>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Add */}
                <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono">
                  <div>
                    <span className="text-[10px] text-stone-500 line-through block">
                      {formatPrice(rawCombo.originalPriceAED)}
                    </span>
                    <span className="text-2xl font-black text-[#FFC107]">
                      {formatPrice(rawCombo.comboPriceAED)}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddComboToCart(rawCombo)}
                    className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#E63946] to-[#FF4757] text-white font-sans text-xs font-black uppercase flex items-center gap-1.5 shadow-md active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{t('addComboBtn')}</span>
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
