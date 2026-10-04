'use client';

import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { AUTOVANTA_CASE_STUDY } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface CaseStudyProps {
  onOpenBookingModal: () => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenBookingModal }) => {
  const { language, t, toArabicDigits } = useAutovantaLanguage();

  return (
    <section id="casestudy" className="py-24 bg-[#0F1012] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#181A1D] border border-orange-500/30 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>{t('caseStudyBadge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {language === 'ar' && AUTOVANTA_CASE_STUDY.clientTitleAr ? AUTOVANTA_CASE_STUDY.clientTitleAr : AUTOVANTA_CASE_STUDY.clientTitle}
            </h2>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              {language === 'ar' && AUTOVANTA_CASE_STUDY.challengeAr ? AUTOVANTA_CASE_STUDY.challengeAr : AUTOVANTA_CASE_STUDY.challenge}
            </p>

            {/* Comparison Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#121315] border border-white/10">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">
                  {language === 'ar' ? 'سابقاً: إصلاحات عشوائية متفرقة' : 'BEFORE: AD-HOC REPAIRS'}
                </span>
                <span className="text-xl font-bold text-red-400 font-mono">
                  {language === 'ar' && AUTOVANTA_CASE_STUDY.beforeDowntimeAr ? AUTOVANTA_CASE_STUDY.beforeDowntimeAr : AUTOVANTA_CASE_STUDY.beforeDowntime}
                </span>
                <span className="text-[11px] text-gray-400 block mt-1">
                  {language === 'ar' ? 'تأخير في التوصيل وغرامات تعاقدية' : 'Missed delivery SLAs & penalties'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#FF5722]/15 text-white border border-[#FF5722]/40">
                <span className="text-[10px] font-mono text-amber-300 block uppercase">
                  {language === 'ar' ? 'حالياً: عقد صيانة أوتوفانتا المجدول' : 'AFTER: AUTOVANTA CONTRACT'}
                </span>
                <span className="text-xl font-extrabold text-emerald-400 font-mono">
                  {language === 'ar' && AUTOVANTA_CASE_STUDY.afterDowntimeAr ? AUTOVANTA_CASE_STUDY.afterDowntimeAr : AUTOVANTA_CASE_STUDY.afterDowntime}
                </span>
                <span className="text-[11px] text-emerald-300 block mt-1 font-bold">
                  {language === 'ar'
                    ? `انخفاض الأعطال بنسبة -%${toArabicDigits(AUTOVANTA_CASE_STUDY.reductionPercent)}`
                    : `-${AUTOVANTA_CASE_STUDY.reductionPercent}% Breakdown Reduction`}
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <span className="text-2xl font-black text-[#FF5722] font-mono block">
                  {language === 'ar' ? `%${toArabicDigits(AUTOVANTA_CASE_STUDY.reductionPercent)}-` : `-${AUTOVANTA_CASE_STUDY.reductionPercent}%`}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('downtimeReduction')}</span>
              </div>
              <div>
                <span className="text-2xl font-black text-amber-300 font-mono block">
                  {toArabicDigits(AUTOVANTA_CASE_STUDY.vehiclesUnderContract)} {language === 'ar' ? 'مركبة' : 'Vans'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('vehiclesContract')}</span>
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-400 font-mono block">
                  {toArabicDigits('100%')}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {language === 'ar' ? 'التزام بالصيانة الوقائية' : 'Scheduled Compliance'}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBookingModal}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{language === 'ar' ? 'طلب فحص وتدقيق أسطول مجاني' : 'REQUEST A FLEET DIAGNOSTIC AUDIT'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={AUTOVANTA_CASE_STUDY.image}
                alt="Delivery Fleet Case Study"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20">
                <span className="text-xs font-mono font-bold text-[#FF5722] uppercase block">
                  {language === 'ar' ? 'دراسة تحول الأساطيل التجارية' : 'COMMERCIAL FLEET CASE STUDY'}
                </span>
                <span className="text-sm font-bold text-white block mt-1 font-mono">
                  {language === 'ar' ? 'التزام تام ١٠٠٪ بالصيانة الوقائية' : '100% Preventative Service Compliance'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};