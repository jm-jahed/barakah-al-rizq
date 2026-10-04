'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, FileCheck, DollarSign, Building2, Users, Plane, 
  ArrowRight, Check, X, Sparkles, Layers 
} from 'lucide-react';
import { SKYVAULT_SERVICES, SkyvaultService } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface ServicesSectionProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#E5C378]" />,
  FileCheck: <FileCheck className="w-6 h-6 text-[#E5C378]" />,
  DollarSign: <DollarSign className="w-6 h-6 text-[#E5C378]" />,
  Building2: <Building2 className="w-6 h-6 text-[#E5C378]" />,
  Users: <Users className="w-6 h-6 text-[#E5C378]" />,
  Plane: <Plane className="w-6 h-6 text-[#E5C378]" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const { lang, isRtl, t } = useSkyvaultLanguage();
  const [selectedService, setSelectedService] = useState<SkyvaultService | null>(null);

  return (
    <section id="services" className="py-24 bg-[#07090E] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('services.tag')}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            {t('services.subtitle')}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKYVAULT_SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#0D1118] border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C378]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E5C378]/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#11161F] flex items-center justify-center border border-white/10 group-hover:border-[#E5C378]/40 transition-colors">
                    {ICON_MAP[srv.iconName]}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    MODULE {srv.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E5C378] transition-colors font-sans">
                  {lang === 'ar' ? srv.titleAr : srv.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                  {lang === 'ar' ? srv.shortDescriptionAr : srv.shortDescription}
                </p>
              </div>

              <div>
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  {(lang === 'ar' ? srv.deliverablesAr : srv.deliverables).map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#E5C378] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(srv)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#E5C378] text-slate-300 hover:text-black font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono uppercase tracking-wider"
                >
                  <span>{t('services.details')}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Module Drawer Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-3xl bg-[#0D1118] p-8 text-white shadow-2xl relative border border-[#E5C378]/30 font-sans"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E5C378]/20 flex items-center justify-center border border-[#E5C378]/40">
                  {ICON_MAP[selectedService.iconName]}
                </div>
                <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-wider">
                  {lang === 'ar' ? `برنامج الإدارة رقم ${selectedService.tag}` : `MANAGEMENT MODULE ${selectedService.tag}`}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 font-sans text-white">
                {lang === 'ar' ? selectedService.titleAr : selectedService.title}
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {lang === 'ar' ? selectedService.fullDescriptionAr : selectedService.fullDescription}
              </p>

              <div className="space-y-2 mb-8 bg-[#11161F] p-5 rounded-2xl border border-white/10">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  {t('services.deliverables')}
                </span>
                {(lang === 'ar' ? selectedService.deliverablesAr : selectedService.deliverables).map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const title = lang === 'ar' ? selectedService.titleAr : selectedService.title;
                    setSelectedService(null);
                    onOpenContactModal(title);
                  }}
                  className="w-full py-4 rounded-xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t('services.inquire')}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};