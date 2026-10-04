'use client';

import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { ROADFORGE_CASE_STUDY } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

interface CaseStudyProps {
  onOpenRequestModal: (issue?: string) => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenRequestModal }) => {
  const { language, t, toArabicDigits } = useRoadforgeLanguage();

  return (
    <section id="casestudy" className="py-24 bg-[#0B132B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#162032] border border-amber-500/30 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>{t('caseStudyBadge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {language === 'ar' && ROADFORGE_CASE_STUDY.clientTitleAr ? ROADFORGE_CASE_STUDY.clientTitleAr : ROADFORGE_CASE_STUDY.clientTitle}
            </h2>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              {language === 'ar' && ROADFORGE_CASE_STUDY.challengeAr ? ROADFORGE_CASE_STUDY.challengeAr : ROADFORGE_CASE_STUDY.challenge}
            </p>

            <div className="p-5 rounded-2xl bg-[#0B132B] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                {language === 'ar' ? 'حلول التوجيه والإنقاذ من رودفورج' : 'ROADFORGE DISPATCH SOLUTION'}
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {language === 'ar' && ROADFORGE_CASE_STUDY.solutionAr ? ROADFORGE_CASE_STUDY.solutionAr : ROADFORGE_CASE_STUDY.solution}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <span className="text-2xl font-black text-amber-400 font-mono block">
                  {language === 'ar' ? ROADFORGE_CASE_STUDY.metrics.responseTimeReductionAr : ROADFORGE_CASE_STUDY.metrics.responseTimeReduction}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {language === 'ar' ? 'سرعة الاستجابة' : 'Response Delay Reduction'}
                </span>
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-400 font-mono block">
                  {language === 'ar' ? ROADFORGE_CASE_STUDY.metrics.slaComplianceAr : ROADFORGE_CASE_STUDY.metrics.slaCompliance}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {language === 'ar' ? 'الالتزام بمواعيد الوصول' : 'SLA Compliance'}
                </span>
              </div>
              <div>
                <span className="text-2xl font-black text-blue-400 font-mono block">
                  {language === 'ar' ? ROADFORGE_CASE_STUDY.metrics.emiratesCoveredAr : ROADFORGE_CASE_STUDY.metrics.emiratesCovered}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {language === 'ar' ? 'تغطية شاملة' : 'Non-Stop Coverage'}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenRequestModal('Insurance SLA Contract')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{language === 'ar' ? 'طلب عقد إنقاذ وسحب للأساطيل' : 'REQUEST FLEET RECOVERY CONTRACT'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={ROADFORGE_CASE_STUDY.image}
                alt="Regional Insurance Partner Case Study"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase block">
                  {language === 'ar' ? 'اتفاقيات التأمين والأساطيل المعتمدة' : 'COMMERCIAL FLEET SLA RECOVERY'}
                </span>
                <span className="text-sm font-bold text-white block mt-1 font-mono">
                  {language === 'ar' ? 'متوسط وصول ٢٢ دقيقة في كافة إمارات الدولة' : '22-Minute Average Response Time Across UAE'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};