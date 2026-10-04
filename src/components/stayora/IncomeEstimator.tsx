'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, TrendingUp, Info } from 'lucide-react';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface IncomeEstimatorProps {
  onOpenEstimateModal: () => void;
}

export const IncomeEstimator: React.FC<IncomeEstimatorProps> = ({ onOpenEstimateModal }) => {
  const { t, isRtl, formatPrice, formatPercent, formatNumber, toArabicDigits } = useStayoraLanguage();
  const [propertyType, setPropertyType] = useState('apartment');
  const [community, setCommunity] = useState('dubai-marina');
  const [bedrooms, setBedrooms] = useState(2);
  const [currentlyRented, setCurrentlyRented] = useState('no');

  // Interactive Yield Calculation Model
  const calculateEstimates = () => {
    let baseNightlyAED = 450;
    
    if (community === 'dubai-marina') baseNightlyAED = 750;
    else if (community === 'downtown') baseNightlyAED = 1200;
    else if (community === 'palm-jumeirah') baseNightlyAED = 2100;
    else if (community === 'jbr') baseNightlyAED = 850;
    else if (community === 'dubai-hills') baseNightlyAED = 950;
    else if (community === 'al-reem') baseNightlyAED = 480;
    else if (community === 'saadiyat') baseNightlyAED = 1450;
    else if (community === 'al-marjan') baseNightlyAED = 620;

    const bedroomMultiplier = 1 + (bedrooms - 1) * 0.45;
    const propertyMultiplier = propertyType === 'villa' ? 1.8 : propertyType === 'penthouse' ? 2.2 : 1.0;

    const estimatedNightlyAED = Math.round(baseNightlyAED * bedroomMultiplier * propertyMultiplier);
    const estimatedOccupancy = 83; // 83% avg
    const monthlyGrossAED = Math.round(estimatedNightlyAED * 30 * (estimatedOccupancy / 100));
    
    // Net owner income (after 18% management fee)
    const monthlyNetAED = Math.round(monthlyGrossAED * 0.82);
    const annualNetAED = monthlyNetAED * 12;

    // Comparable Long Term Annual Rent
    const longTermAnnualAED = Math.round(annualNetAED * 0.62);

    return {
      nightlyRate: estimatedNightlyAED,
      occupancy: estimatedOccupancy,
      monthlyNet: monthlyNetAED,
      annualNet: annualNetAED,
      longTermAnnual: longTermAnnualAED,
      differencePercent: Math.round(((annualNetAED - longTermAnnualAED) / longTermAnnualAED) * 100)
    };
  };

  const results = calculateEstimates();

  const propertyTypes = [
    { id: 'apartment', en: 'Apartment', ar: 'شقة سكنية' },
    { id: 'villa', en: 'Luxury Villa', ar: 'فيلا فاخرة' },
    { id: 'penthouse', en: 'Penthouse', ar: 'بنتهاوس' },
  ];

  const communityOptions = [
    { id: 'dubai-marina', en: 'Dubai Marina (Dubai)', ar: 'دبي مارينا (دبي)' },
    { id: 'downtown', en: 'Downtown Dubai & Burj Area (Dubai)', ar: 'وسط مدينة دبي ومنطقة البرج' },
    { id: 'palm-jumeirah', en: 'Palm Jumeirah Waterfront (Dubai)', ar: 'نخلة جميرا الواجهة البحرية' },
    { id: 'jbr', en: 'Jumeirah Beach Residence (JBR)', ar: 'جميرا بيتش ريزيدنس (JBR)' },
    { id: 'dubai-hills', en: 'Dubai Hills Estate (Dubai)', ar: 'دبي هيلز استيت (دبي)' },
    { id: 'saadiyat', en: 'Saadiyat Island (Abu Dhabi)', ar: 'جزيرة السعديات (أبوظبي)' },
    { id: 'al-reem', en: 'Al Reem Island (Abu Dhabi)', ar: 'جزيرة الريم (أبوظبي)' },
    { id: 'al-marjan', en: 'Al Marjan Island (Ras Al Khaimah)', ar: 'جزيرة المرجان (رأس الخيمة)' },
  ];

  return (
    <section id="calculator" className="py-24 bg-[#133C3E] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 backdrop-blur-md">
            <Calculator className="w-4 h-4 text-[#E07A5F]" />
            <span className="text-xs font-mono font-bold text-amber-200 uppercase tracking-widest">
              {t('calcBadge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('calcTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            {t('calcSubtitle')}
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0E2E30] border border-amber-500/20 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-amber-200 font-mono uppercase tracking-wider border-b border-white/10 pb-3">
              {isRtl ? '١. بيانات ومواصفات العقار' : '1. PROPERTY DETAILS'}
            </h3>

            {/* Property Type */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                {isRtl ? 'نوع العقار' : 'Property Type'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setPropertyType(type.id)}
                    className={`py-3 rounded-xl font-bold text-xs capitalize transition-all font-mono ${
                      propertyType === type.id
                        ? 'bg-[#C85A32] text-white shadow-lg shadow-[#C85A32]/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {isRtl ? type.ar : type.en}
                  </button>
                ))}
              </div>
            </div>

            {/* Community / Area */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                {isRtl ? 'الإمارة والمنطقة / البرج' : 'Emirate & Community'}
              </label>
              <select
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 border border-white/15 text-white font-medium text-sm focus:outline-none focus:border-[#C85A32]"
              >
                {communityOptions.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#133C3E]">
                    {isRtl ? c.ar : c.en}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                {isRtl ? `عدد الغرف: ` : 'Bedrooms: '}
                <span className="text-[#E07A5F] font-bold">
                  {isRtl ? `${toArabicDigits(bedrooms)} غرف` : `${bedrooms} Bedrooms`}
                </span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBedrooms(num)}
                    className={`flex-1 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      bedrooms === num
                        ? 'bg-[#C85A32] text-white shadow-md'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {isRtl ? `${toArabicDigits(num)} غرف` : `${num} BHK`}
                  </button>
                ))}
              </div>
            </div>

            {/* Currently Rented? */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                {isRtl ? 'هل العقار مؤجر حالياً بعقد سنوي؟' : 'Currently Rented Long-Term?'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'yes', en: 'Yes (Long-Term Lease)', ar: 'نعم (عقد سنوي حالي)' },
                  { id: 'no', en: 'No (Vacant / Handover)', ar: 'لا (شاغر / جديد)' },
                ].map((val) => (
                  <button
                    key={val.id}
                    type="button"
                    onClick={() => setCurrentlyRented(val.id)}
                    className={`py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      currentlyRented === val.id
                        ? 'bg-[#C85A32] text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {isRtl ? val.ar : val.en}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#133C3E] to-[#1A4B4E] p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono text-amber-300 uppercase tracking-widest block mb-4">
                {isRtl ? 'صافي العوائد المتوقعة كبيت عطلات' : 'PROJECTED SHORT-TERM YIELD'}
              </span>

              <div className="mb-6">
                <span className="text-xs text-gray-300 font-mono block">
                  {isRtl ? 'صافي العائد الشهري المتوقع للمالك' : 'ESTIMATED NET MONTHLY EARNINGS'}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-1 flex items-baseline gap-2">
                  <span>{formatPrice(results.monthlyNet)}</span>
                  <span className="text-xs font-normal text-amber-300 font-mono">
                    {isRtl ? '/ شهرياً صافي' : '/ month net'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/30 border border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">
                    {isRtl ? 'العائد السنوي كبيت عطلات' : 'EST. ANNUAL NET'}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-amber-300 font-mono">
                    {formatPrice(results.annualNet)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">
                    {isRtl ? 'الإيجار السنوي التقليدي' : 'TYPICAL LONG-TERM'}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-gray-300 font-mono">
                    {formatPrice(results.longTermAnnual)}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-between mb-6 font-mono">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-emerald-300 font-sans">
                    {isRtl ? 'ميزة الزيادة في الدخل' : 'Net Income Advantage'}
                  </span>
                </div>
                <span className="text-sm font-extrabold text-emerald-400">
                  +{formatPercent(results.differencePercent)} {isRtl ? 'زيادة سنوية' : 'Annual Uplift'}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light mb-4 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  {isRtl
                    ? 'ملاحظة: التقدير مستند إلى بيانات مقارنة حقيقية لعام ٢٠٢٦ في دبي وأبوظبي ورأس الخيمة، ويمثل صافي المبلغ المحول بعد خصم رسوم الإدارة.'
                    : 'Disclaimer: Estimate based on comparable 2026 market data across Dubai, Abu Dhabi, and RAK. Net payout after STAYORA management fee.'}
                </span>
              </p>

              <button
                onClick={onOpenEstimateModal}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E07A5F] text-white font-extrabold text-xs tracking-wider uppercase font-mono shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>{t('calcGetCustomReport')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};