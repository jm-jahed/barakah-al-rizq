'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Building2, MapPin } from 'lucide-react';
import { AZURE_CASE_STUDY } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface CaseStudyProps {
  onOpenBookingModal: (yachtId?: string) => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenBookingModal }) => {
  const { language, t } = useAzureLanguage();

  return (
    <section id="casestudy" className="py-24 bg-[#071324] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#0B1A2F] border border-amber-500/30 shadow-2xl p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('caseBadge')}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight font-sans">
              {language === 'ar' ? AZURE_CASE_STUDY.clientTitleAr : AZURE_CASE_STUDY.clientTitle}
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'ar' ? AZURE_CASE_STUDY.locationAr : AZURE_CASE_STUDY.location}</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#06101E] border border-white/10">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  {t('caseChallenge')}
                </span>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {language === 'ar' ? AZURE_CASE_STUDY.challengeAr : AZURE_CASE_STUDY.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06101E] border border-white/10">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  {t('caseSolution')}
                </span>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {language === 'ar' ? AZURE_CASE_STUDY.solutionAr : AZURE_CASE_STUDY.solution}
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#06101E] border border-white/10">
                <span className="text-2xl font-black text-amber-400 font-mono block">
                  {language === 'ar' ? AZURE_CASE_STUDY.metrics.guestsHostedAr : AZURE_CASE_STUDY.metrics.guestsHosted}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">{t('caseMetricsGuests')}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#06101E] border border-white/10">
                <span className="text-2xl font-black text-amber-200 font-mono block">
                  {language === 'ar' ? AZURE_CASE_STUDY.metrics.yachtsCoordinatedAr : AZURE_CASE_STUDY.metrics.yachtsCoordinated}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">{t('caseMetricsYachts')}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#06101E] border border-white/10">
                <span className="text-2xl font-black text-emerald-400 font-mono block">
                  {language === 'ar' ? AZURE_CASE_STUDY.metrics.satisfactionScoreAr : AZURE_CASE_STUDY.metrics.satisfactionScore}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">{t('caseMetricsRating')}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal('azure-105')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl transition-all flex items-center gap-2"
              >
                <span>{language === 'ar' ? 'طلب تنظيم فعالية شركات على اليخت' : 'PLAN A CORPORATE YACHT EVENT'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <img
                src={AZURE_CASE_STUDY.image}
                alt="Corporate Product Launch Yacht Charter"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#06101E]/90 backdrop-blur-md border border-white/20">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase block">
                  {language === 'ar' ? 'تنظيم سوبر يخت للشركات' : 'CORPORATE SUPERYACHT CHARTER'}
                </span>
                <span className="text-sm font-bold text-white block mt-1 font-serif">
                  {language === 'ar' ? 'تشكيل بحري متزامن ليختين فاخرين' : 'Synchronized Dual-Yacht Formation'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};