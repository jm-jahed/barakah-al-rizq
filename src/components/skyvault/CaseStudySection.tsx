'use client';

import React from 'react';
import { Award, ArrowRight, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { SKYVAULT_CASE_STUDY } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface CaseStudyProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenContactModal }) => {
  const { lang, isRtl, t } = useSkyvaultLanguage();

  return (
    <section id="casestudy" className="py-24 bg-[#07090E] text-white relative border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#0D1118] border border-[#E5C378]/30 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>{t('case.tag')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight font-sans">
              {lang === 'ar' ? SKYVAULT_CASE_STUDY.clientTitleAr : SKYVAULT_CASE_STUDY.clientTitle}
            </h2>

            <p className="text-xs font-mono text-[#E5C378]">
              📍 {lang === 'ar' ? SKYVAULT_CASE_STUDY.locationAr : SKYVAULT_CASE_STUDY.location}
            </p>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              {lang === 'ar' ? SKYVAULT_CASE_STUDY.challengeAr : SKYVAULT_CASE_STUDY.challenge}
            </p>

            <div className="p-5 rounded-2xl bg-[#07090E] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-wider block">
                {t('case.solutionTag')}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {lang === 'ar' ? SKYVAULT_CASE_STUDY.solutionAr : SKYVAULT_CASE_STUDY.solution}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#11161F] border border-white/5">
                <span className="text-2xl font-black text-[#E5C378] font-mono block">
                  {lang === 'ar' ? SKYVAULT_CASE_STUDY.metrics.operatingCostReductionAr : SKYVAULT_CASE_STUDY.metrics.operatingCostReduction}
                </span>
                <span className="text-xs text-slate-400 font-medium">{t('case.costRed')}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#11161F] border border-white/5">
                <span className="text-2xl font-black text-slate-200 font-mono block">
                  {lang === 'ar' ? SKYVAULT_CASE_STUDY.metrics.fleetUptimeAr : SKYVAULT_CASE_STUDY.metrics.fleetUptime}
                </span>
                <span className="text-xs text-slate-400 font-medium">{t('case.uptime')}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#11161F] border border-white/5">
                <span className="text-2xl font-black text-emerald-400 font-mono block">
                  {lang === 'ar' ? SKYVAULT_CASE_STUDY.metrics.regulatoryAuditScoreAr : SKYVAULT_CASE_STUDY.metrics.regulatoryAuditScore}
                </span>
                <span className="text-xs text-slate-400 font-medium">{t('case.audit')}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenContactModal('Management Strategy Review')}
                className="px-8 py-4 rounded-2xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl transition-colors flex items-center gap-2"
              >
                <span>{t('case.cta')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={SKYVAULT_CASE_STUDY.image}
                alt="Gulfstream G650ER Aircraft Management Case Study"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15">
                <span className="text-xs font-mono font-bold text-[#E5C378] uppercase block">
                  {lang === 'ar' ? 'طائرة G650ER مسجلة بسجل A6- الإماراتي' : 'A6- REGISTERED G650ER'}
                </span>
                <span className="text-sm font-bold text-white block mt-1 font-sans">
                  {lang === 'ar' ? 'إدارة صلاحية GCAA CAMO وعوائد تأجير AOC' : 'GCAA CAMO & AOC Charter Offset'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};