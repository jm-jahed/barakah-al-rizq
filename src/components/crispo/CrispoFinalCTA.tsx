'use client';

import React from 'react';
import { ShoppingBag, MapPin, Flame } from 'lucide-react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface CrispoFinalCTAProps {
  onOpenCheckout: () => void;
}

export const CrispoFinalCTA: React.FC<CrispoFinalCTAProps> = ({ onOpenCheckout }) => {
  const { t, isRtl } = useCrispoLanguage();

  return (
    <section className="py-24 bg-[#12100E] relative overflow-hidden text-center border-b border-stone-800">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1600&auto=format&fit=crop"
          alt="Crispo Fried Chicken"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/80 to-[#12100E]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#E63946] flex items-center justify-center text-white mx-auto shadow-xl">
          <Flame className="w-8 h-8 text-[#FFC107] animate-bounce" />
        </div>

        <h2 className="text-5xl sm:text-7xl font-black italic tracking-tight font-sans text-[#FAF6EE]">
          {isRtl ? 'تشتهي القرمشة الآن؟' : 'HUNGRY YET?'}
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
          {t('finalCtaDesc')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenCheckout}
            className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#E63946]/30 hover:scale-105 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t('navOrderNow')}</span>
          </button>

          <a
            href="#locations"
            className="px-8 py-4 rounded-2xl bg-[#1A1715] hover:bg-stone-800 border border-stone-800 text-stone-200 font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <MapPin className="w-4 h-4 text-[#FFC107]" />
            <span>{isRtl ? 'ابحث عن أقرب فرع' : 'Find a Restaurant'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
