'use client';

import React from 'react';
import { Award, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { AEROVAULT_CASE_STUDY } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface CaseStudyProps {
  onOpenQuoteModal: (jetId?: string) => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenQuoteModal }) => {
  const { lang, isRtl } = useAerovaultLanguage();

  return (
    <section id="casestudy" className="py-24 bg-[#0D1118] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#11161F] border border-white/10 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'دراسة حالة واقعية للإقلاع الطارئ' : 'FEATURED EMERGENCY DISPATCH CASE STUDY'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight font-sans">
              {lang === 'ar' ? AEROVAULT_CASE_STUDY.clientTitleAr : AEROVAULT_CASE_STUDY.clientTitle}
            </h2>

            <p className="text-xs font-mono text-[#E5C378]">
              📍 {lang === 'ar' ? AEROVAULT_CASE_STUDY.locationAr : AEROVAULT_CASE_STUDY.location}
            </p>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              {lang === 'ar' ? AEROVAULT_CASE_STUDY.challengeAr : AEROVAULT_CASE_STUDY.challenge}
            </p>

            <div className="p-5 rounded-2xl bg-[#07090E] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-wider block">
                {lang === 'ar' ? 'حل إدارة العمليات وصالات كبار الشخصيات من إيروفولت' : 'AEROVAULT DISPATCH & FBO SOLUTION'}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {lang === 'ar' ? AEROVAULT_CASE_STUDY.solutionAr : AEROVAULT_CASE_STUDY.solution}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0D1118] border border-white/5">
                <span className="text-2xl font-black text-[#E5C378] font-mono block">
                  {lang === 'ar' ? AEROVAULT_CASE_STUDY.metrics.dispatchTimeAr : AEROVAULT_CASE_STUDY.metrics.dispatchTime}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {lang === 'ar' ? 'سرعة الإقلاع الفعلي' : 'Fast Dispatch SLA'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0D1118] border border-white/5">
                <span className="text-2xl font-black text-cyan-200 font-mono block">
                  {lang === 'ar' ? AEROVAULT_CASE_STUDY.metrics.passengersAr : AEROVAULT_CASE_STUDY.metrics.passengers}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {lang === 'ar' ? 'أعضاء الوفد المستضاف' : 'Delegates Hosted'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0D1118] border border-white/5">
                <span className="text-2xl font-black text-emerald-400 font-mono block">
                  {lang === 'ar' ? AEROVAULT_CASE_STUDY.metrics.privacyRatingAr : AEROVAULT_CASE_STUDY.metrics.privacyRating}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {lang === 'ar' ? 'مستوى الخصوصية والسرية' : 'Privacy Rating'}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal('global-7500')}
                className="px-8 py-4 rounded-2xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl transition-colors flex items-center gap-2"
              >
                <span>{lang === 'ar' ? 'طلب جاهزية إقلاع طارئ' : 'REQUEST URGENT FLIGHT DISPATCH'}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={AEROVAULT_CASE_STUDY.image}
                alt="Diplomatic Emergency Charter Flight"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15">
                <span className="text-xs font-mono font-bold text-[#E5C378] uppercase block">
                  {lang === 'ar' ? 'صالة إكسيكوجيت — مطار آل مكتوم DWC' : 'DWC EXECUJET FBO TERMINAL'}
                </span>
                <span className="text-sm font-bold text-white block mt-1 font-sans">
                  {lang === 'ar' ? 'رحلة مباشرة عابرة للقارات دون توقف' : 'Transcontinental Non-Stop Dispatch'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};