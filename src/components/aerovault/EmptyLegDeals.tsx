'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ArrowRight, Clock, Percent, ShieldCheck } from 'lucide-react';
import { AEROVAULT_EMPTY_LEGS } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface EmptyLegDealsProps {
  onOpenQuoteModal: (jetId?: string) => void;
}

export const EmptyLegDeals: React.FC<EmptyLegDealsProps> = ({ onOpenQuoteModal }) => {
  const { lang, isRtl, formatPrice, toArabicDigits } = useAerovaultLanguage();

  return (
    <section id="emptylegs" className="py-24 bg-[#07090E] text-white relative border-t border-white/5 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5C378]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3A506B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2">
            <Percent className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'عروض الرحلات الفارغة المباشرة' : 'FEATURED EMPTY LEG FLIGHT DEALS'}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            {lang === 'ar' ? 'سافر بطائرة خاصة بخصم يصل إلى ٦٠٪' : 'Fly Private for Up to 60% Off'}
          </h2>

          <p className="text-slate-400 text-base font-light leading-relaxed">
            {lang === 'ar'
              ? 'رحلات إعادة التموضع المجدولة بتواريخ محددة بخصومات استثنائية مقارنة بأسعار الاستئجار الخاصة المعتادة.'
              : 'Repositioning flights available on fixed dates at heavy discounts compared to standard private charter rates.'}
          </p>
        </div>

        {/* 4 Empty Leg Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AEROVAULT_EMPTY_LEGS.map((deal) => (
            <motion.div
              key={deal.id}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-[#0D1118] border border-white/10 shadow-2xl flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C378]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E5C378]/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30">
                    {lang === 'ar' ? deal.savingsAr : deal.savings}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#E5C378]" />
                    <span>{lang === 'ar' ? `المغادرة: ${deal.dateAr}` : `Departure: ${deal.date}`}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-[#E5C378] transition-colors">
                  {lang === 'ar' ? deal.routeAr : deal.route}
                </h3>

                <p className="text-xs text-slate-400 font-mono mb-6">
                  {lang === 'ar' ? 'نوع الطائرة: ' : 'Aircraft: '}
                  <span className="text-slate-200 font-bold">{lang === 'ar' ? deal.aircraftAr : deal.aircraft}</span>
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 font-mono block line-through">
                    {lang === 'ar' ? 'السعر العادي: ' : 'Reg: '}
                    {formatPrice(deal.regularPriceAED)}
                  </span>
                  <span className="text-2xl font-black text-[#E5C378] font-mono tracking-tight">
                    {formatPrice(deal.dealPriceAED)}
                  </span>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(deal.id)}
                  className="px-5 py-3 rounded-xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:shadow-[#E5C378]/20"
                >
                  <span>{lang === 'ar' ? 'حجز الرحلة' : 'CLAIM DEAL'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};