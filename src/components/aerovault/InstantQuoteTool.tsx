'use client';

import React, { useState } from 'react';
import { ArrowRight, Plane, ShieldCheck, MapPin, Clock, Sparkles } from 'lucide-react';
import { AEROVAULT_BRAND } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface InstantQuoteToolProps {
  onOpenQuoteModal: (jetId?: string) => void;
}

export const InstantQuoteTool: React.FC<InstantQuoteToolProps> = ({ onOpenQuoteModal }) => {
  const [origin, setOrigin] = useState('dxb-dwc');
  const [destination, setDestination] = useState('london');
  const [passengers, setPassengers] = useState(8);
  const [jetCategory, setJetCategory] = useState<'light' | 'super-midsize' | 'ultralong'>('super-midsize');
  const { language, t, toArabicDigits, formatPrice } = useAerovaultLanguage();

  const origins = [
    { id: 'dxb-dwc', labelEn: 'Dubai (DWC ExecuJet / DXB FBO)', labelAr: 'دبي (صالات إكسيكوجيت DWC / صالة DXB)' },
    { id: 'auh', labelEn: 'Abu Dhabi (AUH Al Bateen FBO)', labelAr: 'أبوظبي (صالة البطين للطيران الخاص AUH)' }
  ];

  const destinations = [
    { id: 'london', labelEn: 'London Stansted / Farnborough (STN / FAB)', labelAr: 'لندن ستانستد / فارنبورو (STN / FAB)', baseHours: 7.5 },
    { id: 'riyadh', labelEn: 'Riyadh Private Terminal (RUH)', labelAr: 'الرياض صالة الطيران الخاص (RUH)', baseHours: 1.8 },
    { id: 'geneva', labelEn: 'Geneva Cointrin VIP (GVA)', labelAr: 'جنيف صالة كبار الشخصيات (GVA)', baseHours: 6.8 },
    { id: 'paris', labelEn: 'Paris Le Bourget Executive (LBG)', labelAr: 'باريس لو بورجيه للطيران التنفيذي (LBG)', baseHours: 7.0 },
    { id: 'maldives', labelEn: 'Male Velana International (MLE)', labelAr: 'المالديف مطار فيلانا الدولي (MLE)', baseHours: 4.2 },
    { id: 'newyork', labelEn: 'New York Teterboro (TEB)', labelAr: 'نيويورك تتربورو للطيران الخاص (TEB)', baseHours: 14.0 },
  ];

  // Estimate flight hours & price logic in AED
  const calculateEstimate = () => {
    const destObj = destinations.find(d => d.id === destination) || destinations[0];
    let flightHours = destObj.baseHours;
    let rateAED = 24000;
    let recommendedJetEn = "Bombardier Challenger 650";
    let recommendedJetAr = "بومباردييه تشالنجر ٦٥٠";
    let targetJetId = "challenger-650";

    if (jetCategory === 'light') {
      rateAED = 14000;
      recommendedJetEn = "Embraer Phenom 300E";
      recommendedJetAr = "إمبراير فينوم ٣٠٠ إي";
      targetJetId = "phenom-300e";
      if (flightHours > 4.5) {
        flightHours = flightHours + 0.8; // Tech fuel stop for light jet on long routes
      }
    } else if (jetCategory === 'ultralong') {
      rateAED = 42000;
      recommendedJetEn = "Bombardier Global 7500";
      recommendedJetAr = "بومباردييه جلوبال ٧٥٠٠";
      targetJetId = "global-7500";
    } else {
      rateAED = 24000;
      recommendedJetEn = "Bombardier Challenger 650";
      recommendedJetAr = "بومباردييه تشالنجر ٦٥٠";
      targetJetId = "challenger-650";
    }

    const estimatedAED = Math.round(flightHours * rateAED);
    return {
      flightHours,
      estimatedAED,
      recommendedJet: language === 'ar' ? recommendedJetAr : recommendedJetEn,
      targetJetId
    };
  };

  const est = calculateEstimate();

  return (
    <section id="quote-tool" className="py-24 bg-[#0A0E17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('calcBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            {t('calcTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
            {t('calcSubtitle')}
          </p>
        </div>

        {/* Quote Calculator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#11161F] border border-[#E5C378]/30 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-[#E5C378] font-mono uppercase tracking-wider border-b border-white/10 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E5C378]" />
              <span>{t('calcParamsTitle')}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                  {t('calcOriginLabel')}
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full py-3 px-3.5 rounded-xl bg-[#07090E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                >
                  {origins.map(o => (
                    <option key={o.id} value={o.id} className="bg-[#11161F]">
                      {language === 'ar' ? o.labelAr : o.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                  {t('calcDestLabel')}
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full py-3 px-3.5 rounded-xl bg-[#07090E] border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#E5C378]"
                >
                  {destinations.map(d => (
                    <option key={d.id} value={d.id} className="bg-[#11161F]">
                      {language === 'ar' ? d.labelAr : d.labelEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Passenger Count Slider */}
            <div className="bg-[#07090E] p-4 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-gray-300 uppercase">{t('calcPassengersLabel')}</span>
                <span className="text-[#E5C378] font-extrabold text-sm">
                  {language === 'ar' ? `${toArabicDigits(passengers)} ركاب` : `${passengers} Passengers`}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value))}
                className="w-full accent-[#E5C378] cursor-pointer"
              />
            </div>

            {/* Jet Category Selector */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                {t('calcJetCategoryLabel')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'light', label: t('catLightJet') },
                  { id: 'super-midsize', label: t('catSuperMidsize') },
                  { id: 'ultralong', label: t('catUltraLong') }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setJetCategory(cat.id as any)}
                    className={`p-3 rounded-xl font-bold text-xs text-center transition-all font-mono leading-tight ${
                      jetCategory === cat.id
                        ? 'bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] text-black shadow-lg shadow-amber-950/50'
                        : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#07090E] p-6 sm:p-8 rounded-2xl border border-[#E5C378]/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono text-[#E5C378] uppercase tracking-widest block mb-4">
                {t('calcProjectionTitle')}
              </span>

              <div className="mb-4">
                <span className="text-xs text-gray-400 font-mono block uppercase">{t('calcRecommendedJet')}</span>
                <div className="text-lg sm:text-xl font-black text-white font-sans mt-1">
                  {est.recommendedJet}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#11161F] p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] text-gray-400 font-mono block uppercase">{t('calcFlightTime')}</span>
                  <span className="text-base font-bold text-amber-200 font-mono" dir="ltr">
                    ~ {language === 'ar' ? `${toArabicDigits(est.flightHours)} س` : `${est.flightHours} Hrs`}
                  </span>
                </div>
                <div className="bg-[#11161F] p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] text-gray-400 font-mono block uppercase">{t('calcEstimatedCost')}</span>
                  <span className="text-base font-black text-[#E5C378] font-mono" dir="ltr">
                    {formatPrice(est.estimatedAED)}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#11161F] border border-white/10 mb-6 space-y-2 text-xs text-gray-300 font-light">
                <span className="text-[10px] font-mono text-[#E5C378] block uppercase tracking-wider font-bold">
                  {t('calcInclusionsTitle')}
                </span>
                <p className="flex items-center gap-2">✓ <span>{t('calcInc1')}</span></p>
                <p className="flex items-center gap-2">✓ <span>{t('calcInc2')}</span></p>
                <p className="flex items-center gap-2">✓ <span>{t('calcInc3')}</span></p>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal(est.targetJetId)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] hover:from-[#D4AF37] hover:to-[#B89222] text-black font-extrabold text-xs tracking-wider uppercase font-mono shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <span>{t('calcCtaQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};