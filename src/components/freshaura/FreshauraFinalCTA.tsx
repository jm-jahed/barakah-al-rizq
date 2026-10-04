'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Leaf } from 'lucide-react';
import { FRESHAURA_BRAND } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface FreshauraFinalCTAProps {
  onShopProduce: () => void;
}

export const FreshauraFinalCTA: React.FC<FreshauraFinalCTAProps> = ({ onShopProduce }) => {
  const { t, isRtl } = useFreshauraLanguage();

  return (
    <section className="py-28 bg-[#042F2E] relative overflow-hidden text-center border-b border-emerald-900/80">
      
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop"
          alt="Fresh Produce UAE"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#042F2E] via-[#042F2E]/80 to-[#042F2E]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#064E3B] border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-xl">
          <Leaf className="w-8 h-8" />
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-[#FBF9F5] leading-tight">
          {isRtl ? 'طزاجة المزارع الحقيقية على بُعد طلب واحد.' : 'Freshness Is Just One Order Away.'}
        </h2>

        <p className="text-base sm:text-lg text-stone-200 font-light max-w-xl mx-auto leading-relaxed font-sans">
          {isRtl
            ? 'تسوق أكثر من ٢٠٠ صنف من أجود الفواكه، الخضار وصناديق التوفير العائلية مع توصيل مبرد في نفس اليوم لكافة إمارات الدولة.'
            : 'Shop 200+ farm-fresh fruits, vegetables, and pre-built family boxes with same-day refrigerated delivery across Dubai, Abu Dhabi, Sharjah, Ajman, and Al Ain.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-serif">
          <button
            onClick={onShopProduce}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all"
          >
            <span>{isRtl ? 'تسوق المنتجات الطازجة الآن' : 'Shop Fresh Produce Now'}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>

          <a
            href={FRESHAURA_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{isRtl ? 'طلب سريع عبر واتساب (+٩٧١ ٥٠)' : 'Order via WhatsApp (+971 50)'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
