'use client';

import React, { useState } from 'react';
import { ArrowRight, Compass, Users, Clock, Anchor, Sparkles } from 'lucide-react';
import { AZURE_BRAND } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface CharterPlannerProps {
  onOpenBookingModal: (yachtId?: string) => void;
}

export const CharterPlanner: React.FC<CharterPlannerProps> = ({ onOpenBookingModal }) => {
  const [occasion, setOccasion] = useState('sunset'); // sunset, birthday, corporate, fishing, multiday
  const [guestCount, setGuestCount] = useState(15);
  const [durationHours, setDurationHours] = useState(3);
  const { language, t, toArabicDigits, formatPrice } = useAzureLanguage();

  const occasionsList = [
    { id: 'sunset', labelEn: '🌅 Sunset Skyline Cruise', labelAr: '🌅 جولة الغروب وأفق دبي' },
    { id: 'birthday', labelEn: '🎂 Birthday / Party Cruise', labelAr: '🎂 أعياد الميلاد والحفلات الخاصة' },
    { id: 'corporate', labelEn: '👔 Corporate Event / VIP', labelAr: '👔 الفعاليات والاجتماعات للشركات' },
    { id: 'fishing', labelEn: '🎣 Deep Sea Fishing Trip', labelAr: '🎣 رحلات صيد الأسماك في الأعماق' },
    { id: 'multiday', labelEn: '🏝️ Multi-Day Island Charter', labelAr: '🏝️ رحلات الجزر لعدة أيام' }
  ];

  // Estimate yacht recommendation
  const calculatePlan = () => {
    let recommendedYachtEn = "AZURE Royal 52 (52ft)";
    let recommendedYachtAr = "أزور رويال ٥٢ (٥٢ قدماً)";
    let minAED = durationHours * 1200;
    let maxAED = durationHours * 1500;
    let addOnsEn = "Licensed Captain, Professional Crew, Soft Drinks & Fresh Ice Included";
    let addOnsAr = "شامل القبطان المرخص، الطاقم المحترف، المشروبات المنعشة، والثلج مجاناً";
    let targetYachtId = "azure-52";

    if (guestCount <= 12) {
      recommendedYachtEn = "AZURE Royal 52 (52ft)";
      recommendedYachtAr = "أزور رويال ٥٢ (٥٢ قدماً)";
      minAED = durationHours * 1200;
      maxAED = durationHours * 1500;
      targetYachtId = "azure-52";
    } else if (guestCount <= 22) {
      recommendedYachtEn = "AZURE Sovereign 68 (68ft)";
      recommendedYachtAr = "أزور سوفرين ٦٨ (٦٨ قدماً)";
      minAED = durationHours * 2200;
      maxAED = durationHours * 2600;
      targetYachtId = "azure-68";
    } else if (guestCount <= 35) {
      recommendedYachtEn = "AZURE Majesty 84 Superyacht (84ft)";
      recommendedYachtAr = "أزور ماجستي ٨٤ سوبر يخت (٨٤ قدماً)";
      minAED = durationHours * 3800;
      maxAED = durationHours * 4400;
      targetYachtId = "azure-84";
    } else {
      recommendedYachtEn = "AZURE Emperor 105 / Mega 120 (105ft+)";
      recommendedYachtAr = "أزور إمبيرور ١٠٥ / ميجا ١٢٠ (١٠٥+ قدماً)";
      minAED = durationHours * 6500;
      maxAED = durationHours * 8000;
      targetYachtId = "azure-105";
    }

    if (occasion === 'corporate') {
      addOnsEn = "Executive Canapés, AV Sound System, Fast Wi-Fi & Branded Sundeck Setup";
      addOnsAr = "مقبلات كانابيه تنفيذية، نظام صوتي عالي النقاء، واي فاي سريع، وتجهيز الهوية البصرية";
    } else if (occasion === 'birthday') {
      addOnsEn = "Live Onboard BBQ Grill Station, Custom Balloons & Bluetooth DJ Surround";
      addOnsAr = "محطة مشاوي حية على المتن، ديكور بالونات خاص، ونظام صوتي محيطي للحفلات";
    } else if (occasion === 'fishing') {
      recommendedYachtEn = "AZURE Gulf Sport 44 (44ft)";
      recommendedYachtAr = "أزور جلف سبورت ٤٤ (٤٤ قدماً)";
      minAED = durationHours * 950;
      maxAED = durationHours * 1200;
      addOnsEn = "Sonar Fish Finder, Heavy Rods, Live Bait Tank & Fresh Catch Cleaning";
      addOnsAr = "سونار كشف الأسماك بالأعماق، صنانير ومعدات ثقيلة، طعم حي، وتنظيف الصيد للشواء";
      targetYachtId = "azure-44";
    } else if (occasion === 'multiday') {
      addOnsEn = "Full Master Suites, Gourmet Private Chef, Fuel for Island Passages & Water Toys";
      addOnsAr = "أجنحة نوم ملكية كاملة، طاهٍ خاص طوال اليوم، وقود الإبحار للجزر، وألعاب مائية نفاثة";
    }

    return {
      recommendedYacht: language === 'ar' ? recommendedYachtAr : recommendedYachtEn,
      minAED,
      maxAED,
      addOns: language === 'ar' ? addOnsAr : addOnsEn,
      targetYachtId
    };
  };

  const plan = calculatePlan();

  return (
    <section id="planner" className="py-24 bg-[#081528] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('plannerBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            {t('plannerTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            {t('plannerSubtitle')}
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1A2F] border border-amber-500/30 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-white/10 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t('plannerParamsTitle')}</span>
            </h3>

            {/* Occasion */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                {t('plannerOccasionLabel')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {occasionsList.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setOccasion(item.id)}
                    className={`p-3 rounded-xl font-bold text-xs text-left transition-all font-mono leading-tight ${
                      occasion === item.id
                        ? 'bg-amber-500 text-black shadow-lg shadow-amber-950/50'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {language === 'ar' ? item.labelAr : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div className="bg-[#06101E] p-4 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-gray-300 uppercase">{t('plannerGuestLabel')}</span>
                <span className="text-amber-400 font-extrabold text-sm">
                  {language === 'ar' ? `${toArabicDigits(guestCount)} ${t('plannerGuestsCount')}` : `${guestCount} Guests`}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="75"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Duration Slider */}
            <div className="bg-[#06101E] p-4 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-gray-300 uppercase">{t('plannerDurationLabel')}</span>
                <span className="text-amber-400 font-extrabold text-sm">
                  {language === 'ar' ? `${toArabicDigits(durationHours)} ${t('plannerHours')}` : `${durationHours} Hours`}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                value={durationHours}
                onChange={(e) => setDurationHours(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#06101E] p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-4">
                {t('plannerProjectionTitle')}
              </span>

              <div className="mb-4">
                <span className="text-xs text-gray-400 font-mono block uppercase">{t('plannerRecommendedYacht')}</span>
                <div className="text-lg sm:text-xl font-black text-white font-sans mt-1 leading-snug">
                  {plan.recommendedYacht}
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs text-gray-400 font-mono block uppercase">{t('plannerEstimatedPriceRange')}</span>
                <div className="text-2xl font-black text-amber-400 font-mono mt-0.5" dir="ltr">
                  {formatPrice(plan.minAED)} – {formatPrice(plan.maxAED)}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1A2F] border border-white/10 mb-6 space-y-2">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">{t('plannerIncludedAddons')}</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {plan.addOns}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingModal(plan.targetYachtId)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs tracking-wider uppercase font-mono shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <span>{t('plannerCtaQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};