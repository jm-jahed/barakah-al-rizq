'use client';

import React from 'react';
import { Truck, ArrowRight, Check } from 'lucide-react';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface FleetServicesProps {
  onOpenBookingModal: () => void;
}

export const FleetServices: React.FC<FleetServicesProps> = ({ onOpenBookingModal }) => {
  const { language, t } = useAutovantaLanguage();

  const fleetFeatures = [
    {
      titleEn: "Scheduled Maintenance Contracts",
      titleAr: "عقود صيانة وقائية مجدولة",
      descEn: "Preventive maintenance schedules tailored to your vehicle mileage, delivery routes, and operating hours.",
      descAr: "جداول صيانة دورية مصممة خصيصاً لمسافات تشغيل مركباتك وساعات عمل التوصيل بالدولة."
    },
    {
      titleEn: "Priority Workshop Bay Access",
      titleAr: "مسارات صيانة مخصصة ذات أولوية",
      descEn: "Dedicated commercial lifts and priority technician allocation to get your delivery vans back on the road fast.",
      descAr: "رافعات مخصصة للشاحنات وفريق فني سريع لإعادة مركبات التوصيل للخدمة في أسرع وقت."
    },
    {
      titleEn: "Fleet Management Dashboard",
      titleAr: "لوحة تحكم إلكترونية للأساطيل",
      descEn: "Digital portal tracking vehicle service history, upcoming maintenance alerts, and cost-per-kilometer analytics.",
      descAr: "بوابة رقمية لمتابعة سجل الصيانة الشامل وتنبيهات مواعيد الفحص وتحليلات التكلفة لكل كيلومتر."
    },
    {
      titleEn: "Volume Pricing & Consolidated Billing",
      titleAr: "أسعار تفضيلية وفاتورة شهرية موحدة",
      descEn: "Discounted labor rates, bulk lubricant pricing, and single monthly consolidated invoicing for easy accounting.",
      descAr: "خصومات خاصة على أجور اليد والزيوت بالجملة مع فاتورة ضريبية شهرية موحدة تسهل الإدارة المالية."
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-[#181A1D] text-white relative border-y border-orange-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest">
              <Truck className="w-3.5 h-3.5" />
              <span>{t('fleetBadge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {t('fleetTitle')}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              {t('fleetSubtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {fleetFeatures.map((feat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#121315] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
                    <Check className="w-4 h-4 text-[#FF5722] shrink-0" />
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
                onClick={onOpenBookingModal}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{t('fleetCta')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#121315] p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop"
                  alt="AUTOVANTA Fleet Maintenance Bay"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-orange-500/30">
                  <span className="text-xs font-mono font-bold text-[#FF5722] uppercase block">
                    {language === 'ar' ? 'ضمان التزام الأساطيل SLA' : 'FLEET SLA GUARANTEE'}
                  </span>
                  <span className="text-sm font-bold text-white block mt-1 font-mono">
                    {language === 'ar'
                      ? 'أولوية صيانة عطلات نهاية الأسبوع • مساعدة على الطريق ٢٤/٧'
                      : 'Priority Weekend Bays • 24/7 Roadside Assistance'}
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