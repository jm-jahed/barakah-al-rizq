'use client';

import React from 'react';
import { MapPin, ShieldCheck, Truck, Clock } from 'lucide-react';
import { FRESHAURA_DELIVERY_ZONES } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface UaeDeliveryProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export const UaeDelivery: React.FC<UaeDeliveryProps> = ({ selectedCity, setSelectedCity }) => {
  const { t, isRtl, formatPrice } = useFreshauraLanguage();

  const currentZone =
    FRESHAURA_DELIVERY_ZONES.find((z) => z.cityEn.toLowerCase() === selectedCity.toLowerCase()) ||
    FRESHAURA_DELIVERY_ZONES[0];

  return (
    <section id="delivery" className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
            {isRtl ? 'شبكة التوصيل ومواعيد الشحن في الإمارات' : 'UAE REFRIGERATED DELIVERY NETWORK & SLOTS'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
            {t('navDelivery')}
          </h2>
          <p className="text-sm sm:text-base text-stone-200 font-light mt-2">
            {isRtl
              ? 'اختر إمارتك للاطلاع على سرعات التوصيل، الحد الأدنى للطلب، ومواعيد الشحن المبرد بدرجة ٤ مئوية.'
              : 'Select your Emirate to view estimated delivery speeds, minimum order thresholds, and cold-chain delivery windows.'}
          </p>
        </div>

        {/* City Selector Buttons */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {FRESHAURA_DELIVERY_ZONES.map((loc) => {
            const cityName = isRtl ? loc.cityAr : loc.cityEn;
            const isSelected = selectedCity.toLowerCase() === loc.cityEn.toLowerCase();

            return (
              <button
                key={loc.cityEn}
                onClick={() => setSelectedCity(loc.cityEn)}
                className={`px-4 sm:px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-emerald-400 text-black border-emerald-400 shadow-lg scale-105'
                    : 'bg-[#064E3B] text-stone-200 border-emerald-700/40 hover:text-white hover:border-emerald-500'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{cityName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected City Details Card */}
        <div className="bg-[#064E3B] rounded-3xl border border-emerald-700/40 p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto font-mono text-xs text-stone-200 space-y-6">
          
          <div className="flex justify-between items-center border-b border-emerald-800 pb-4">
            <div>
              <span className="text-[10px] text-emerald-300 font-bold uppercase">
                {isRtl ? 'منطقة التوصيل المحددة' : 'SELECTED DELIVERY ZONE'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {isRtl ? currentZone.cityAr : currentZone.cityEn}
              </h3>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-[#042F2E] text-emerald-400 border border-emerald-500/40 font-bold">
              {isRtl ? `توصيل مجاني فوق ${formatPrice(currentZone.freeOverAED)}` : `Free Over ${formatPrice(currentZone.freeOverAED)}`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center pt-2">
            <div className="p-4 rounded-2xl bg-[#042F2E] border border-emerald-700/30">
              <span className="text-stone-400 text-[10px] uppercase block font-bold">
                {isRtl ? 'سرعة التوصيل' : 'ESTIMATED SPEED'}
              </span>
              <span className="text-base sm:text-lg font-serif font-bold text-emerald-300 block mt-1">
                {isRtl ? currentZone.timeAr : currentZone.timeEn}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#042F2E] border border-emerald-700/30">
              <span className="text-stone-400 text-[10px] uppercase block font-bold">
                {isRtl ? 'الحد الأدنى للطلب' : 'MINIMUM ORDER'}
              </span>
              <span className="text-base sm:text-lg font-serif font-bold text-white block mt-1">
                {formatPrice(currentZone.minOrderAED)}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#042F2E] border border-emerald-700/30">
              <span className="text-stone-400 text-[10px] uppercase block font-bold">
                {isRtl ? 'الفترات الزمنية المتاحة' : 'DELIVERY SLOTS'}
              </span>
              <span className="text-xs font-serif font-bold text-emerald-300 block mt-1">
                {isRtl ? currentZone.slotsAr : currentZone.slotsEn}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#042F2E] border border-emerald-600/40 flex items-center gap-3 text-[11px] text-stone-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>{isRtl ? 'ضمان النضارة التامة ١٠٠٪:' : '100% Bruise-Free Guarantee:'} </strong>
              {isRtl
                ? `طلبات ${currentZone.cityAr} تُنقل في شاحنات مبردة مخصصة بدرجة ٤ مئوية. في حال وجود أي منتج تالف، يتم استبداله فوراً بدون رسوم.`
                : `Orders in ${currentZone.cityEn} are transported in 4°C temperature-monitored refrigerated vans. Any unsatisfactory produce is replaced instantly.`}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
