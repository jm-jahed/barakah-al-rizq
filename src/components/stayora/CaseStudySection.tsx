'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Award } from 'lucide-react';
import { STAYORA_CASE_STUDY } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface CaseStudyProps {
  onOpenEstimateModal: () => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenEstimateModal }) => {
  const { t, isRtl, formatPrice, formatPercent, formatNumber } = useStayoraLanguage();

  return (
    <section id="casestudy" className="py-24 bg-[#F9F6F0] text-[#133C3E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-amber-900/10 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span>{t('caseStudyBadge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#133C3E] tracking-tight leading-tight">
              {isRtl ? STAYORA_CASE_STUDY.clientTitleAr : STAYORA_CASE_STUDY.clientTitle}
            </h2>

            <p className="text-gray-700 text-base leading-relaxed font-normal">
              {isRtl ? STAYORA_CASE_STUDY.challengeAr : STAYORA_CASE_STUDY.challenge}
            </p>

            {/* Financial Comparison Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F9F6F0] border border-amber-900/10 font-mono">
              <div className="p-4 rounded-xl bg-white border border-gray-200">
                <span className="text-[10px] text-gray-500 block uppercase">
                  {t('beforeAnnualRent')}
                </span>
                <span className="text-xl font-bold text-gray-700 block mt-1">
                  {formatPrice(STAYORA_CASE_STUDY.beforeLongTermAED)} {isRtl ? '/ سنوياً' : '/ yr'}
                </span>
                <span className="text-[11px] text-gray-500 block mt-1 font-sans">
                  {isRtl ? 'عقد إيجار مجمد دون زيادة' : 'Below market rent lock-in'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#133C3E] text-white border border-[#133C3E]">
                <span className="text-[10px] text-amber-300 block uppercase">
                  {t('afterStayoraRent')}
                </span>
                <span className="text-xl font-extrabold text-amber-300 block mt-1">
                  {formatPrice(STAYORA_CASE_STUDY.afterShortTermAED)} {isRtl ? '/ سنوياً' : '/ yr'}
                </span>
                <span className="text-[11px] text-emerald-400 block mt-1 font-bold font-sans">
                  +{formatPercent(STAYORA_CASE_STUDY.increasePercent)} {isRtl ? 'صافي زيادة للمالك' : 'Net Uplift (Net of Fees)'}
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 font-mono">
              <div>
                <span className="text-2xl font-black text-[#C85A32] block">
                  +{formatPercent(STAYORA_CASE_STUDY.increasePercent)}
                </span>
                <span className="text-xs text-gray-600 font-sans font-medium">
                  {isRtl ? 'زيادة الإيرادات الصافية' : 'Annual Income Uplift'}
                </span>
              </div>
              <div>
                <span className="text-2xl font-black text-[#133C3E] block">
                  {formatPercent(STAYORA_CASE_STUDY.occupancyPercent)}
                </span>
                <span className="text-xs text-gray-600 font-sans font-medium">
                  {isRtl ? 'متوسط الإشغال السنوي' : 'Yearly Occupancy'}
                </span>
              </div>
              <div>
                <span className="text-2xl font-black text-amber-600 block">
                  {formatNumber(STAYORA_CASE_STUDY.rating)} ★
                </span>
                <span className="text-xs text-gray-600 font-sans font-medium">
                  {isRtl ? 'متوسط تقييم النزلاء' : 'Avg Guest Rating'}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEstimateModal}
                className="px-8 py-4 rounded-2xl bg-[#C85A32] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:bg-[#b04b28] transition-colors flex items-center gap-2"
              >
                <span>{isRtl ? 'طلب دراسة مقارنة لعقارك' : 'GET A CASE STUDY ESTIMATE FOR YOUR PROPERTY'}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10">
              <img
                src={STAYORA_CASE_STUDY.image}
                alt="Dubai Marina Case Study"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-[#133C3E]">
                <span className="text-xs font-mono font-bold text-[#C85A32] uppercase block">
                  {isRtl ? 'دبي مارينا — تحويل عقد الإيجار' : 'DUBAI MARINA 2BR LEASE CONVERSION'}
                </span>
                <span className="text-sm font-bold text-gray-900 block mt-1 font-sans">
                  {isRtl ? 'مرخص ١٠٠٪ من دائرة السياحة • تحويلات مؤتمتة' : '100% DTCM Compliant • Automated Payouts'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};