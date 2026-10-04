'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Navigation, ShieldCheck, Truck, DollarSign, Award } from 'lucide-react';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const WhyRoadforge: React.FC = () => {
  const { language, t } = useRoadforgeLanguage();

  const pillars = [
    {
      titleEn: "24/7/365 Non-Stop Availability",
      titleAr: "جاهزية واستجابة على مدار الساعة ٣٦٥ يوماً",
      descEn: "Our dispatch center and emergency recovery flatbeds operate continuous 24-hour shifts, including weekends and public holidays.",
      descAr: "غرفة العمليات وأسطول السطحات الهيدروليكية يعملون بورديات متواصلة ليلاً ونهاراً بما في ذلك العطلات الرسمية.",
      icon: <Clock className="w-6 h-6 text-amber-400" />
    },
    {
      titleEn: "Sub-25 Minute Response Time",
      titleAr: "سرعة وصول قياسية أقل من ٢٥ دقيقة",
      descEn: "Patrol flatbeds positioned along E11, E311, and E611 highways guarantee rapid arrival when stranded in extreme heat.",
      descAr: "سطحات ودوريات متمركزة على كافة الطرق السريعة تضمن وصول النجدة لموقعك بسرعة وأمان في أصعب الظروف المناخية.",
      icon: <Navigation className="w-6 h-6 text-amber-400" />
    },
    {
      titleEn: "GPS-Tracked Automated Dispatch",
      titleAr: "توجيه إلكتروني ذكي وتتبع مباشر بالخريطة",
      descEn: "Real-time SMS and WhatsApp location links allow stranded drivers to monitor their assigned tow unit arriving live on the map.",
      descAr: "رابط تتبع مباشر يصلك عبر واتساب والرسائل النصية يتيح لك رؤية موقع السطحة القادمة إليك لحظة بلحظة.",
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
    },
    {
      titleEn: "Trained Winch & Tow Operators",
      titleAr: "فنيون معتمدون لسحب السيارات الفارهة",
      descEn: "Certified operators trained in zero-damage low-clearance supercar loading, winching, and highway safety protocols.",
      descAr: "طواقم محترفة مدربة على سحب وتحميل السيارات الرياضية الفاخرة بدون أي احتكاك ووفق أعلى معايير السلامة المرورية.",
      icon: <Truck className="w-6 h-6 text-amber-400" />
    },
    {
      titleEn: "Fleet & Insurance Partner Ready",
      titleAr: "معتمدون لدى كبرى شركات التأمين والأساطيل",
      descEn: "Contractual SLA frameworks, digital recovery logs, and itemized billing compatible with all major UAE insurance providers.",
      descAr: "سجلات رقمية وفواتير ضريبية مفصلة مقبولة لدى كافة شركات التأمين وإدارات أساطيل النقل التجاري بالإمارات.",
      icon: <Award className="w-6 h-6 text-amber-400" />
    },
    {
      titleEn: "100% Upfront Transparent Rates",
      titleAr: "أسعار ثابتة وشفافة بدون رسوم خفية",
      descEn: "Clear itemized emergency quotes provided before dispatch. Zero surprise extra mileage fees or hidden night surcharges.",
      descAr: "تسعيرة واضحة وثابتة يتم تأكيدها مسبقاً قبل تحرك السطحة بدون أي رسوم إضافية ليلية أو تكاليف غير معلنة.",
      icon: <DollarSign className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#162032] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('whyBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('whyTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {t('whySubtitle')}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#0B132B] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#162032] border border-white/10 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === 'ar' ? p.titleAr : p.titleEn}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {language === 'ar' ? p.descAr : p.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};