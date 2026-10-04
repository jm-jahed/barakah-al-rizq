'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Cpu, Shield, Wind, Activity, Disc, FileCheck, Truck, ArrowRight, Check, X, Clock } from 'lucide-react';
import { AUTOVANTA_SERVICES, AutovantaService } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface ServicesSectionProps {
  onOpenBookingModal: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6 text-[#FF5722]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#FF5722]" />,
  Shield: <Shield className="w-6 h-6 text-[#FF5722]" />,
  Wind: <Wind className="w-6 h-6 text-[#FF5722]" />,
  Activity: <Activity className="w-6 h-6 text-[#FF5722]" />,
  Disc: <Disc className="w-6 h-6 text-[#FF5722]" />,
  FileCheck: <FileCheck className="w-6 h-6 text-[#FF5722]" />,
  Truck: <Truck className="w-6 h-6 text-[#FF5722]" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedService, setSelectedService] = useState<AutovantaService | null>(null);
  const { language, t, toArabicDigits, formatPrice } = useAutovantaLanguage();

  return (
    <section id="services" className="py-24 bg-[#0F1012] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('servicesBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUTOVANTA_SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-[#181A1D] border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#FF5722]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#121315] flex items-center justify-center border border-white/10 group-hover:border-[#FF5722]/40 transition-colors">
                    {ICON_MAP[srv.iconName]}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    {toArabicDigits(srv.tag)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF5722] transition-colors leading-snug">
                  {language === 'ar' && srv.titleAr ? srv.titleAr : srv.title}
                </h3>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>
                    {t('turnaround')}: {language === 'ar' && srv.turnaroundTimeAr ? srv.turnaroundTimeAr : srv.turnaroundTime}
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
                  {language === 'ar' && srv.shortDescriptionAr ? srv.shortDescriptionAr : srv.shortDescription}
                </p>
              </div>

              <div>
                <div className="space-y-1.5 mb-6 pt-4 border-t border-white/10">
                  {(language === 'ar' && srv.outcomesAr ? srv.outcomesAr : srv.outcomes).map((out, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
                      <span className="line-clamp-1">{out}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between mb-4 font-mono text-xs">
                  <span className="text-gray-400">{language === 'ar' ? 'تبدأ من:' : 'Starts from:'}</span>
                  <span className="text-amber-300 font-bold">{formatPrice(srv.startingPriceAED)}</span>
                </div>

                <button
                  onClick={() => setSelectedService(srv)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#FF5722] text-gray-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono uppercase"
                >
                  <span>{t('viewServiceDetails')}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expandable Module Drawer Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-3xl bg-[#181A1D] p-8 text-white shadow-2xl relative border border-orange-500/30"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF5722]/20 flex items-center justify-center border border-[#FF5722]/40">
                  {ICON_MAP[selectedService.iconName]}
                </div>
                <span className="text-xs font-mono font-bold text-[#FF5722] uppercase tracking-wider">
                  {language === 'ar' ? `وحدة الصيانة ${toArabicDigits(selectedService.tag)}` : `SERVICE MODULE ${selectedService.tag}`}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {language === 'ar' && selectedService.titleAr ? selectedService.titleAr : selectedService.title}
              </h3>
              <p className="text-xs font-mono text-amber-400 mb-4">
                {t('turnaround')}: {language === 'ar' && selectedService.turnaroundTimeAr ? selectedService.turnaroundTimeAr : selectedService.turnaroundTime}
              </p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                {language === 'ar' && selectedService.fullDescriptionAr ? selectedService.fullDescriptionAr : selectedService.fullDescription}
              </p>

              <div className="space-y-2 mb-8 bg-[#121315] p-4 rounded-2xl border border-white/10">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                  {language === 'ar' ? 'المعايير المشمولة في الخدمة' : 'INCLUDED SERVICE DELIVERABLES'}
                </span>
                {(language === 'ar' && selectedService.outcomesAr ? selectedService.outcomesAr : selectedService.outcomes).map((out, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenBookingModal();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-orange-950/50 hover:scale-[1.02] transition-transform"
                >
                  {t('navBookService')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};