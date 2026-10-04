'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

interface FleetPartnersProps {
  onOpenRequestModal: (issue?: string) => void;
}

export const FleetInsurancePartners: React.FC<FleetPartnersProps> = ({ onOpenRequestModal }) => {
  const { language, t } = useRoadforgeLanguage();

  const partnerFeatures = [
    {
      titleEn: "Strict 25-Minute Response SLA",
      titleAr: "استجابة تعاقدية مضمونة خلال ٢٥ دقيقة",
      descEn: "Contractual response time guarantees for commercial fleets, delivery vans, and insured policyholders.",
      descAr: "ضمانات زمنية ملزمة لسيارات التوصيل والأساطيل التجارية وحاملي وثائق التأمين المعتمدة."
    },
    {
      titleEn: "Live GPS Fleet Dashboard",
      titleAr: "لوحة تحكم وتتبع مباشر للأساطيل",
      descEn: "Digital portal tracking vehicle recovery status, driver location links, and real-time dispatch logs.",
      descAr: "بوابة إلكترونية لمتابعة حالة بلاغات الإنقاذ ومسار السطحة ورابط موقع السائق في الوقت الفعلي."
    },
    {
      titleEn: "Consolidated Monthly Invoicing",
      titleAr: "فواتير شهرية موحدة ومجمعة",
      descEn: "Single itemized monthly billing with transparent pre-negotiated rates and zero surprise hidden fees.",
      descAr: "نظام فوترة موحد بأسعار تفضيلية متفق عليها مسبقاً وتفصيل دقيق لكافة البلاغات دون أي رسوم خفية."
    },
    {
      titleEn: "Inter-Emirate Priority Towing",
      titleAr: "أولوية سحب ونقل بين الإمارات",
      descEn: "Dedicated flatbed allocation for long-distance transport between Dubai, Abu Dhabi, and Sharjah.",
      descAr: "تخصيص سطحات لنقل الشاحنات والمركبات المتعطلة بين مختلف إمارات الدولة بأولوية قصوى."
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-[#0B132B] text-white relative border-y border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('fleetInsuranceBadge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {t('fleetInsuranceTitle')}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              {t('fleetInsuranceSubtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {partnerFeatures.map((feat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#162032] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{language === 'ar' ? feat.titleAr : feat.titleEn}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                    {language === 'ar' ? feat.descAr : feat.descEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenRequestModal('Fleet Partnership Query')}
                className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-2"
              >
                <span>{t('fleetInsuranceCta')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#162032] p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
                  alt="ROADFORGE Fleet Management Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-500/30">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase block">
                    {language === 'ar' ? 'ضمان اتفاقية الخدمة للأساطيل' : 'FLEET SLA GUARANTEE'}
                  </span>
                  <span className="text-sm font-bold text-white block mt-1 font-mono">
                    {language === 'ar'
                      ? 'سطحات مخصصة على الطرق السريعة • توجيه مباشر ٢٤/٧'
                      : 'Dedicated Highway Flatbeds • 24/7 Priority Dispatch'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};