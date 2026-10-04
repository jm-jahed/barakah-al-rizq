'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Clock, Tag, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface OfferBannerProps {
  onOpenCheckout: () => void;
}

export const OfferBanner: React.FC<OfferBannerProps> = ({ onOpenCheckout }) => {
  const { t, isRtl } = useCrispoLanguage();
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 38 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <section className="py-16 bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] relative overflow-hidden text-white shadow-2xl">
      
      {/* Background Motion Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FFC107]/20 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Left */}
          <div className="space-y-3 text-center lg:text-left rtl:lg:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-[#FFC107] font-mono text-xs font-bold uppercase backdrop-blur-md">
              <Flame className="w-4 h-4 animate-bounce" />
              <span>{isRtl ? 'عرض نهاية الأسبوع لفترة محدودة' : 'LIMITED TIME WEEKEND OFFER'}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black italic tracking-tight font-sans">
              {isRtl ? 'قرمشة عطلة نهاية الأسبوع صارت أضخم.' : 'WEEKEND CRAVINGS JUST GOT BIGGER.'}
            </h2>

            <p className="text-sm sm:text-base font-medium opacity-90 max-w-xl">
              {isRtl ? (
                <>
                  احصل على <strong className="text-[#FFC107] text-lg">خصم 20%</strong> على جميع البوكسات العائلية عند الطلب أونلاين اليوم بكود:
                </>
              ) : (
                <>
                  Get <strong className="text-[#FFC107] text-lg">20% OFF</strong> all Family Buckets when ordering online today. Use promo code:
                </>
              )}
            </p>

            <div className="inline-flex items-center gap-3 bg-black/40 px-4 py-2 rounded-xl font-mono border border-white/20 text-sm">
              <span>{isRtl ? 'كود الخصم:' : 'PROMO CODE:'}</span>
              <span className="font-black text-[#FFC107] tracking-widest text-base" dir="ltr">CRUNCH20</span>
            </div>
          </div>

          {/* Countdown Right */}
          <div className="flex flex-col items-center lg:items-end rtl:lg:items-start gap-4">
            <div className="flex items-center gap-3 font-mono" dir="ltr">
              <div className="bg-black/60 p-4 rounded-2xl border border-white/20 text-center min-w-[70px]">
                <span className="text-3xl font-black text-[#FFC107] block">{formatNumber(timeLeft.hours)}</span>
                <span className="text-[9px] uppercase tracking-wider text-stone-300 block">{t('hours')}</span>
              </div>
              <span className="text-2xl font-black text-[#FFC107]">:</span>
              <div className="bg-black/60 p-4 rounded-2xl border border-white/20 text-center min-w-[70px]">
                <span className="text-3xl font-black text-[#FFC107] block">{formatNumber(timeLeft.minutes)}</span>
                <span className="text-[9px] uppercase tracking-wider text-stone-300 block">{t('minutes')}</span>
              </div>
              <span className="text-2xl font-black text-[#FFC107]">:</span>
              <div className="bg-black/60 p-4 rounded-2xl border border-white/20 text-center min-w-[70px]">
                <span className="text-3xl font-black text-[#FFC107] block">{formatNumber(timeLeft.seconds)}</span>
                <span className="text-[9px] uppercase tracking-wider text-stone-300 block">{t('seconds')}</span>
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="px-8 py-4 rounded-2xl bg-[#FFC107] hover:bg-[#e0a800] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t('claimOfferNow')}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
