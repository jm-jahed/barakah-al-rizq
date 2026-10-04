'use client';

import React, { useState } from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const TuitionEstimator: React.FC = () => {
  const { lang, isRtl, formatPrice, toArabicDigits } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].calculator;

  const [stageId, setStageId] = useState('primary');
  const [campus, setCampus] = useState('barsha');
  const [transportRoute, setTransportRoute] = useState('full-route');
  const [siblingType, setSiblingType] = useState('none');
  const [paymentPlan, setPaymentPlan] = useState('termly');

  // Base tuition by stage
  const selectedStage = ALTAIR_ACADEMY_DATA.stages.find(s => s.id === stageId) || ALTAIR_ACADEMY_DATA.stages[1];
  const baseTuition = selectedStage.baseAnnualPrice;

  // Transport fee
  let transportFee = 0;
  if (transportRoute === 'full-route') transportFee = 9500;
  if (transportRoute === 'one-way') transportFee = 5500;

  // Sibling discount
  let discountRate = 0;
  if (siblingType === 'second') discountRate = 0.10;
  if (siblingType === 'third') discountRate = 0.15;

  const discountAmount = Math.round(baseTuition * discountRate);
  let netTuition = baseTuition - discountAmount + transportFee;

  // Payment plan discount
  if (paymentPlan === 'annual') {
    netTuition = Math.round(netTuition * 0.97); // 3% early annual discount
  }

  const termlyAmount = Math.round(netTuition / 3);

  return (
    <section id="tuition" className="py-24 bg-[#070D1E] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            📊 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        <div className="bg-[#0D1B3E] p-6 sm:p-10 md:p-12 rounded-3xl border border-amber-500/30 max-w-4xl mx-auto shadow-2xl">
          {/* Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 1. Academic Stage */}
            <div>
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5">
                {tr.stageLabel}
              </label>
              <select
                value={stageId}
                onChange={(e) => setStageId(e.target.value)}
                className="w-full bg-[#070D1E] border border-amber-500/30 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                {ALTAIR_ACADEMY_DATA.stages.map((stg) => (
                  <option key={stg.id} value={stg.id}>
                    {isRtl ? stg.titleAr : stg.title} ({isRtl ? stg.yearRangeAr : stg.yearRange})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Campus */}
            <div>
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5">
                {tr.campusLabel}
              </label>
              <select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="w-full bg-[#070D1E] border border-amber-500/30 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="barsha">{isRtl ? 'دبي — فرع البرشاء الرئيسي' : 'Dubai — Al Barsha Flagship'}</option>
                <option value="khalifa">{isRtl ? 'أبوظبي — فرع مدينة خليفة' : 'Abu Dhabi — Khalifa City Capital'}</option>
              </select>
            </div>

            {/* 3. Transport Route */}
            <div>
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5">
                {tr.transportLabel}
              </label>
              <select
                value={transportRoute}
                onChange={(e) => setTransportRoute(e.target.value)}
                className="w-full bg-[#070D1E] border border-amber-500/30 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="full-route">{isRtl ? 'حافلة مدرسية (ذهاب وعودة - ٩,٥٠٠ د.إ)' : 'Two-Way Bus Service (+AED 9,500)'}</option>
                <option value="one-way">{isRtl ? 'حافلة مدرسية (اتجاه واحد - ٥,٥٠٠ د.إ)' : 'One-Way Bus Service (+AED 5,500)'}</option>
                <option value="none">{isRtl ? 'مواصلات خاصة (بدون حافلة)' : 'Own Transportation (AED 0)'}</option>
              </select>
            </div>
          </div>

          {/* Sibling & Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5">
                {tr.siblingLabel}
              </label>
              <select
                value={siblingType}
                onChange={(e) => setSiblingType(e.target.value)}
                className="w-full bg-[#070D1E] border border-amber-500/30 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="none">{isRtl ? 'طالب واحد مسجل (بدون خصم)' : 'Single Enrolled Scholar (No Discount)'}</option>
                <option value="second">{isRtl ? 'تسجيل طفل ثانٍ (خصم ١٠٪)' : 'Second Enrolled Sibling (10% Discount)'}</option>
                <option value="third">{isRtl ? 'تسجيل طفل ثالث (خصم ١٥٪)' : 'Third Enrolled Sibling (15% Discount)'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5">
                {tr.paymentLabel}
              </label>
              <select
                value={paymentPlan}
                onChange={(e) => setPaymentPlan(e.target.value)}
                className="w-full bg-[#070D1E] border border-amber-500/30 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="termly">{isRtl ? 'أقساط فصلية (٣ دفعات متساوية)' : 'Termly Plan (3 Installments)'}</option>
                <option value="annual">{isRtl ? 'سداد سنوي كامل مقدماً (وفر ٣٪ إضافية)' : 'Annual Upfront Single Pay (3% Savings)'}</option>
              </select>
            </div>
          </div>

          {/* Output Display Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#050A17] border border-amber-500/40 shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 pb-6 border-b border-slate-800 text-center">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  {tr.baseTuition}
                </span>
                <span className="text-base sm:text-lg font-bold text-white mt-1 block">
                  {formatPrice(baseTuition, 'year')}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  {tr.transportFee}
                </span>
                <span className="text-base sm:text-lg font-bold text-white mt-1 block">
                  {transportFee > 0 ? formatPrice(transportFee, 'year') : (isRtl ? 'غير محدد' : 'AED 0')}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  {tr.discountApplied}
                </span>
                <span className="text-base sm:text-lg font-bold text-emerald-400 mt-1 block">
                  {discountAmount > 0 ? `- ${formatPrice(discountAmount, 'year')}` : (isRtl ? 'لا يوجد' : 'None')}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  {tr.termBreakdown}
                </span>
                <span className="text-base sm:text-lg font-bold text-amber-300 mt-1 block">
                  {formatPrice(termlyAmount, 'term')}
                </span>
              </div>
            </div>

            <div className="text-center">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                {tr.netTuition}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-amber-300 mt-1 font-serif">
                {formatPrice(netTuition, 'year')}
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                {isRtl
                  ? 'يشمل جميع الكتب الدراسية والمختبرات والأنشطة الرياضية. تُسدد الرسوم وفق لوائح هيئة المعرفة وتوجيهات الوزارة.'
                  : 'Includes all textbooks, laboratory supplies, digital licenses, and core athletic coaching.'}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <a
                href="#tour"
                className="inline-block text-xs font-extrabold text-[#070D1E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
              >
                {tr.bookTourForCalc} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
