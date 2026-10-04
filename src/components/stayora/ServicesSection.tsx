'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, TrendingUp, MessageSquare, ShieldCheck, Camera, Share2, PieChart, ArrowRight, Check, X } from 'lucide-react';
import { STAYORA_SERVICES, StayoraService } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface ServicesSectionProps {
  onOpenEstimateModal: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6 text-[#E07A5F]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#E07A5F]" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-[#E07A5F]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#E07A5F]" />,
  Camera: <Camera className="w-6 h-6 text-[#E07A5F]" />,
  Share2: <Share2 className="w-6 h-6 text-[#E07A5F]" />,
  PieChart: <PieChart className="w-6 h-6 text-[#E07A5F]" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimateModal }) => {
  const { t, isRtl, toArabicDigits } = useStayoraLanguage();
  const [selectedService, setSelectedService] = useState<StayoraService | null>(null);

  return (
    <section id="services" className="py-24 bg-[#F9F6F0] text-[#133C3E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('servicesBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#133C3E] tracking-tight">
            {isRtl ? (
              <>
                كل ما يلزم لإدارة عقارك. <br />
                <span className="text-[#C85A32]">بدون أي عناء منك.</span>
              </>
            ) : (
              <>
                Every Detail Handled. <br />
                <span className="text-[#C85A32]">Zero Effort Required.</span>
              </>
            )}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-normal">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAYORA_SERVICES.map((srv) => {
            const title = isRtl ? srv.titleAr : srv.title;
            const shortDesc = isRtl ? srv.shortDescriptionAr : srv.shortDescription;
            const outcomes = isRtl ? srv.outcomesAr : srv.outcomes;
            const tag = isRtl ? toArabicDigits(srv.tag) : srv.tag;

            return (
              <motion.div
                key={srv.id}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl bg-white border border-amber-900/10 shadow-lg shadow-amber-950/5 flex flex-col justify-between hover:border-[#C85A32]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F9F6F0] flex items-center justify-center border border-amber-900/10 group-hover:bg-[#C85A32]/10 transition-colors shrink-0">
                      {ICON_MAP[srv.iconName] || <ShieldCheck className="w-6 h-6 text-[#E07A5F]" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400">
                      {tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#133C3E] mb-3 group-hover:text-[#C85A32] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {shortDesc}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {outcomes.map((out, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedService(srv)}
                    className="w-full py-2.5 rounded-xl bg-[#133C3E]/5 hover:bg-[#C85A32] text-[#133C3E] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono"
                  >
                    <span>{isRtl ? 'تفاصيل الخدمة' : 'MODULE DETAILS'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Expandable Module Drawer Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-3xl bg-white p-8 text-[#133C3E] shadow-2xl relative border border-amber-900/10 font-sans"
            >
              <button
                onClick={() => setSelectedService(null)}
                className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200`}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C85A32]/10 flex items-center justify-center shrink-0">
                  {ICON_MAP[selectedService.iconName] || <ShieldCheck className="w-6 h-6 text-[#E07A5F]" />}
                </div>
                <span className="text-xs font-mono font-bold text-[#C85A32] uppercase tracking-wider">
                  {isRtl ? `وحدة الخدمة ${toArabicDigits(selectedService.tag)}` : `SERVICE MODULE ${selectedService.tag}`}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {isRtl ? selectedService.titleAr : selectedService.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                {isRtl ? selectedService.fullDescriptionAr : selectedService.fullDescription}
              </p>

              <div className="space-y-2 mb-8 bg-[#F9F6F0] p-4 rounded-2xl border border-amber-900/10">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest block mb-2">
                  {isRtl ? 'المخرجات والنتائج التشغيلية المتوقعة' : 'EXPECTED OPERATIONAL OUTCOMES'}
                </span>
                {(isRtl ? selectedService.outcomesAr : selectedService.outcomes).map((out, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#133C3E]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenEstimateModal();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-[#C85A32] text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#C85A32]/30 hover:bg-[#b04b28] transition-colors"
                >
                  {isRtl ? 'طلب دراسة الجدوى لهذه الخدمة' : 'REQUEST ESTIMATE FOR THIS MODULE'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};