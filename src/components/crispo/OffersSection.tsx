'use client';

import React from 'react';
import { Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { CRISPO_OFFERS } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface OffersSectionProps {
  onOpenCheckout: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onOpenCheckout }) => {
  const { t, isRtl, translateOffer } = useCrispoLanguage();

  return (
    <section id="offers" className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30">
              {isRtl ? 'العروض الترويجية الأسبوعية' : 'WEEKLY PROMOTIONAL DEALS'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans mt-4">
              {isRtl ? 'عروض وخصومات مميزة.' : 'HOT DEALS & PROMOS.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              {isRtl
                ? 'استفد من أقوى أكواد الخصم لوجبات الغداء والبوكسات العائلية وسهرات العشاء المتأخرة.'
                : 'Check out our active discount codes for weekday lunches, weekend family deals, and late-night cravings.'}
            </p>
          </div>
        </div>

        {/* 3 Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CRISPO_OFFERS.map((rawOffer) => {
            const offer = translateOffer(rawOffer);

            return (
              <div
                key={rawOffer.id}
                className="bg-[#1A1715] rounded-3xl border border-stone-800 p-6 shadow-xl flex flex-col justify-between group hover:border-[#E63946]/40 transition-all"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#12100E]">
                    <img
                      src={rawOffer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 rtl:left-auto rtl:right-3 text-[10px] font-mono font-black px-3 py-1 rounded-full bg-[#E63946] text-white shadow-md">
                      {offer.discount}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#FFC107] font-bold uppercase">{offer.validity}</span>
                  <h3 className="text-xl font-black text-white font-sans mt-1 mb-2">{offer.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-6">{offer.tagline}</p>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono">
                  <div className="bg-[#12100E] px-3 py-1.5 rounded-xl border border-stone-800 text-xs">
                    <span className="text-stone-500 text-[10px] block">{isRtl ? 'الكود:' : 'CODE:'}</span>
                    <span className="text-[#FFC107] font-bold" dir="ltr">{rawOffer.code}</span>
                  </div>

                  <button
                    onClick={onOpenCheckout}
                    className="px-4 py-2.5 rounded-xl bg-[#E63946] hover:bg-[#FF4757] text-white text-xs font-sans font-black uppercase flex items-center gap-1"
                  >
                    <span>{isRtl ? 'تطبيق العرض' : 'Apply Offer'}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
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
