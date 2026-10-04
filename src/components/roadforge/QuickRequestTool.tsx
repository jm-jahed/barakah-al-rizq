'use client';

import React, { useState } from 'react';
import { Phone, MapPin, ShieldAlert, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { ROADFORGE_BRAND } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

interface QuickRequestToolProps {
  onOpenRequestModal: (issue?: string) => void;
}

export const QuickRequestTool: React.FC<QuickRequestToolProps> = ({ onOpenRequestModal }) => {
  const { language, t, toArabicDigits, formatPrice } = useRoadforgeLanguage();
  const [issueType, setIssueType] = useState('towing'); // towing, battery, tyre, fuel, lockout, accident
  const [highwayCorridor, setHighwayCorridor] = useState('E11 Sheikh Zayed Road (Dubai)');

  // Estimate response time & price logic
  const getResponseEstimate = () => {
    if (issueType === 'towing') {
      return {
        minsEn: '18 - 22 Mins',
        minsAr: '١٨ - ٢٢ دقيقة',
        unitEn: 'Flatbed Unit #04 (Al Quoz Base)',
        unitAr: 'سطحة رقم ٠٤ (مركز القوز)',
        price: 250
      };
    }
    if (issueType === 'battery') {
      return {
        minsEn: '15 - 18 Mins',
        minsAr: '١٥ - ١٨ دقيقة',
        unitEn: 'Mobile Battery Unit #09 (Downtown Patrol)',
        unitAr: 'دورية البطاريات رقم ٠٩ (داون تاون)',
        price: 150
      };
    }
    if (issueType === 'tyre') {
      return {
        minsEn: '15 - 20 Mins',
        minsAr: '١٥ - ٢٠ دقيقة',
        unitEn: 'Rapid Tyre Unit #02 (E11 Patrol)',
        unitAr: 'دورية الإطارات السريعة رقم ٠٢ (E11)',
        price: 150
      };
    }
    if (issueType === 'fuel') {
      return {
        minsEn: '15 - 20 Mins',
        minsAr: '١٥ - ٢٠ دقيقة',
        unitEn: 'Fuel Express Unit #07 (E311 Patrol)',
        unitAr: 'دورية الوقود الطارئ رقم ٠٧ (E311)',
        price: 140
      };
    }
    if (issueType === 'lockout') {
      return {
        minsEn: '20 - 25 Mins',
        minsAr: '٢٠ - ٢٥ دقيقة',
        unitEn: 'Locksmith Patrol Unit #11',
        unitAr: 'دورية الأقفال والأبواب رقم ١١',
        price: 180
      };
    }
    if (issueType === 'accident') {
      return {
        minsEn: '15 - 20 Mins',
        minsAr: '١٥ - ٢٠ دقيقة',
        unitEn: 'Heavy Winch Boom #01 (Emergency Dispatch)',
        unitAr: 'ونش هيدروليكي ثقيل رقم ٠١ (طوارئ)',
        price: 350
      };
    }
    return {
      minsEn: '20 Mins',
      minsAr: '٢٠ دقيقة',
      unitEn: 'Nearest Patrol Unit',
      unitAr: 'أقرب دورية متمركزة',
      price: 200
    };
  };

  const est = getResponseEstimate();

  const issues = [
    { id: 'towing', labelEn: '🚗 Vehicle Towing / Flatbed', labelAr: '🚗 سحب السيارة / سطحة هيدروليكية' },
    { id: 'battery', labelEn: '⚡ Battery Jumpstart / Replace', labelAr: '⚡ اشتراك بطارية / تبديل فوري' },
    { id: 'tyre', labelEn: '🛞 Flat Tyre Change / Plug', labelAr: '🛞 تبديل إطار مثقوب / رقع' },
    { id: 'fuel', labelEn: '⛽ Emergency Fuel Delivery', labelAr: '⛽ توصيل بنزين / ديزل طارئ' },
    { id: 'lockout', labelEn: '🔑 Key Lockout Unlocking', labelAr: '🔑 فتح أبواب مقفلة بدون خدوش' },
    { id: 'accident', labelEn: '🚨 Accident Winch & Recovery', labelAr: '🚨 ونش حوادث وسحب رمال' }
  ];

  return (
    <section id="quick-tool" className="py-24 bg-[#0B132B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 backdrop-blur-md">
            <ShieldAlert className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
              {t('quickToolBadge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('quickToolTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            {t('quickToolSubtitle')}
          </p>
        </div>

        {/* Tool Card Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#162032] border border-amber-500/30 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Zap className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider">
                {language === 'ar' ? '١. حدد نوع المساعدة والموقع' : '1. SELECT EMERGENCY ISSUE & CORRIDOR'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {issues.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIssueType(item.id)}
                  className={`p-3.5 rounded-2xl font-bold text-xs text-left rtl:text-right transition-all font-mono leading-relaxed border ${
                    issueType === item.id
                      ? 'bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-950/50 scale-[1.02]'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10'
                  }`}
                >
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase font-bold">
                {t('quickLocationLabel')}
              </label>
              <div className="relative">
                <select
                  value={highwayCorridor}
                  onChange={(e) => setHighwayCorridor(e.target.value)}
                  className="w-full py-3.5 px-4 pr-10 rtl:pr-4 rtl:pl-10 rounded-xl bg-[#0B132B] border border-white/15 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="E11 Sheikh Zayed Road (Dubai)">
                    {language === 'ar' ? 'شارع الشيخ زايد E11 (دبي مارينا / داون تاون / البرشاء)' : 'E11 Sheikh Zayed Road (Dubai Marina / Downtown / Al Barsha)'}
                  </option>
                  <option value="E311 Sheikh Mohammed Bin Zayed Road">
                    {language === 'ar' ? 'شارع الشيخ محمد بن زايد E311 (دبي / الشارقة / عجمان)' : 'E311 Sheikh Mohammed Bin Zayed Road (Dubai / Sharjah / Ajman)'}
                  </option>
                  <option value="E611 Emirates Road Corridor">
                    {language === 'ar' ? 'شارع الإمارات E611 (الشاحنات والمناطق الصناعية)' : 'E611 Emirates Road (Industrial & Truck Corridor)'}
                  </option>
                  <option value="E44 Al Khail Road (Dubai)">
                    {language === 'ar' ? 'شارع الخيل E44 (الخليج التجاري / الميدان)' : 'E44 Al Khail Road (Business Bay / Meydan)'}
                  </option>
                  <option value="Abu Dhabi City & Mussafah">
                    {language === 'ar' ? 'أبوظبي (المصفح / جزيرة ياس / كورنيش أبوظبي)' : 'Abu Dhabi City (Mussafah / Yas Island / Corniche)'}
                  </option>
                  <option value="Sharjah & Northern Emirates">
                    {language === 'ar' ? 'الشارقة والمناطق الصناعية ورأس الخيمة' : 'Sharjah Industrial Areas / RAK Highway'}
                  </option>
                </select>
                <MapPin className="w-4 h-4 text-amber-400 absolute right-3.5 rtl:right-auto rtl:left-3.5 top-4 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#0B132B] p-6 sm:p-8 rounded-3xl border border-red-500/30 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-widest block mb-4">
                {language === 'ar' ? 'بيانات التوجيه الميداني' : 'DISPATCH PREVIEW'}
              </span>

              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 font-mono block mb-1">
                  {t('quickEtaResult')}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                  {language === 'ar' ? est.minsAr : est.minsEn}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{language === 'ar' ? 'الدورية المخصصة:' : 'ASSIGNED UNIT:'}</span>
                  <span className="text-emerald-400 font-bold">{language === 'ar' ? est.unitAr : est.unitEn}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{t('quickPriceResult')}:</span>
                  <span className="text-amber-300 font-bold">{formatPrice(est.price)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{language === 'ar' ? 'حالة الاستعداد:' : 'STATUS:'}</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'جاهزة للانطلاق الفوري' : 'READY TO DISPATCH'}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${ROADFORGE_BRAND.phone.replace(/\s+/g, '')}`}
                className="w-full py-4 rounded-2xl bg-[#DC2626] hover:bg-[#b91c1c] text-white font-extrabold text-xs tracking-wider uppercase font-mono shadow-xl flex items-center justify-center gap-2 animate-pulse"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-yellow-300" />
                <span>800-ROADS ({ROADFORGE_BRAND.phone})</span>
              </a>

              <button
                onClick={() => onOpenRequestModal(issueType)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>{t('quickDispatchBtn')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};