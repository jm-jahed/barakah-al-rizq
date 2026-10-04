'use client';

import React from 'react';
import { ArrowRight, ArrowLeft, MessageCircle, Crown } from 'lucide-react';
import { NOURA_BRAND, NOURA_PRODUCTS } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface NouraFinalCTAProps {
  onShopCollection: () => void;
}

export const NouraFinalCTA: React.FC<NouraFinalCTAProps> = ({ onShopCollection }) => {
  const { t, isRtl } = useNouraLanguage();

  return (
    <section className="py-28 bg-[#0A0A0A] relative overflow-hidden text-center border-b border-stone-800">
      
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={NOURA_PRODUCTS[0]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/ND_JUNE18_260641-2.jpg?v=1789122483'}
          alt="Dubai Luxury Abaya Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#121212] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto shadow-xl">
          <Crown className="w-8 h-8" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-[#FAFAFA] leading-tight">
          {isRtl ? 'أصالة الحشمة العربية برؤية معاصرة.' : 'Arabian Elegance, Reimagined.'}
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed font-sans">
          {isRtl
            ? 'اكتشفي أكثر من 248+ تصميماً من العبايات الفاخرة والقفاطين المطرزة يدوياً مع خدمة التوصيل السريع لكافة إمارات الدولة.'
            : 'Explore 248+ handcrafted luxury abayas, open kaftans, and Ramadan silk ensembles with complimentary same-day delivery across Dubai and Abu Dhabi.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-serif">
          <button
            onClick={onShopCollection}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-105 transition-all"
          >
            <span>{isRtl ? 'تسوقي التشكيلة الآن' : 'Shop the Collection Now'}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>

          <a
            href={NOURA_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{isRtl ? 'استشارة الموضة عبر واتساب (+971 50)' : 'WhatsApp Styling Concierge (+971 50)'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
