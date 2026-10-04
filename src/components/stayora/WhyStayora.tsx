'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Clock, LayoutDashboard, Unlock, Sparkles } from 'lucide-react';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const WhyStayora: React.FC = () => {
  const { t, isRtl } = useStayoraLanguage();

  const pillars = [
    {
      titleEn: "Revenue-Maximizing Pricing Tech",
      titleAr: "خوارزميات تسعير ذكية لمضاعفة الإيرادات",
      descEn: "Our dynamic algorithms adjust nightly rates automatically for Expo events, F1 weekends, and seasonal demand spikes to optimize net yield.",
      descAr: "تقنيات تسعير متطورة تحدث أسعار الليلة آلياً وفقاً لمواسم السياحة والفعاليات الكبرى مثل سباقات الفورمولا والمؤتمرات العالمية.",
      icon: <TrendingUp className="w-6 h-6 text-[#C85A32]" />
    },
    {
      titleEn: "Full DTCM Compliance Support",
      titleAr: "امتثال كامل لتراخيص السياحة (DTCM)",
      descEn: "We manage all government licensing, tourism dirham filings, guest passport registrations, and annual DTCM/DCT permit renewals.",
      descAr: "نتولى كافة الإجراءات الرسمية لدى دوائر السياحة، وتحميل بيانات جوازات السفر الأمنية، وسداد رسوم درهم السياحة بانتظام.",
      icon: <ShieldCheck className="w-6 h-6 text-[#C85A32]" />
    },
    {
      titleEn: "24/7 Multilingual Guest Concierge",
      titleAr: "خدمة كونسيرج للنزلاء على مدار الساعة",
      descEn: "Sub-3 minute response times to guest inquiries, digital keypad self check-ins, and emergency in-stay support for 5-star host reviews.",
      descAr: "استجابة فورية في أقل من ٣ دقائق، تسجيل دخول ذكي ذاتي بالأقفال الرقمية، ودعم فندقي شامل يضمن تقييمات ٥ نجوم.",
      icon: <Clock className="w-6 h-6 text-[#C85A32]" />
    },
    {
      titleEn: "Trusted Hospitality Housekeeping",
      titleAr: "نظافة فندقية ٥ نجوم وبياضات فاخرة",
      descEn: "Hotel-grade turn over cleans between every stay, 300-thread Egyptian cotton linens, and luxury organic bathroom amenities.",
      descAr: "تنظيف وتعقيم فندقي دقيق بعد كل إقامة، مع بياضات ومناشف قطنية معقمة ومستلزمات عناية شخصية راقية.",
      icon: <Sparkles className="w-6 h-6 text-[#C85A32]" />
    },
    {
      titleEn: "Transparent Owner Portal",
      titleAr: "بوابة إلكترونية شفافة للملاك",
      descEn: "Track real-time booking calendars, monthly revenue statements, maintenance receipts, and automated payouts wired direct on the 10th.",
      descAr: "متابعة لحظية لتقويم الحجوزات، وكشوف الحسابات الشهرية، وسجلات الصيانة، مع تحويلات بنكية منتظمة في يوم ١٠ من كل شهر.",
      icon: <LayoutDashboard className="w-6 h-6 text-[#C85A32]" />
    },
    {
      titleEn: "No Long-Term Lock-In",
      titleAr: "مرونة كاملة وبدون عقود احتكارية",
      descEn: "Zero restrictive annual lock-in contracts. Reserve your own property anytime for personal family staycations with zero penalties.",
      descAr: "حرية تامة لإغلاق وحجز عقارك لإقامتك الشخصية وعائلتك في أي وقت دون أي غرامات أو قيود معقدة.",
      icon: <Unlock className="w-6 h-6 text-[#C85A32]" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#133C3E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-amber-200 font-mono text-xs font-bold uppercase tracking-widest inline-block">
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
              className="p-8 rounded-3xl bg-[#0E2E30] border border-amber-500/20 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#133C3E] border border-amber-500/20 flex items-center justify-center mb-6 shrink-0">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRtl ? p.titleAr : p.titleEn}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {isRtl ? p.descAr : p.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};