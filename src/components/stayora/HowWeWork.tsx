'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const HowWeWork: React.FC = () => {
  const { t, isRtl, toArabicDigits } = useStayoraLanguage();

  const steps = [
    {
      num: '01',
      titleEn: '1. ONBOARD',
      titleAr: '١. التقييم والترخيص',
      subtitleEn: 'Property Audit & DTCM Permitting',
      subtitleAr: 'فحص العقار وإصدار تصاريح السياحة',
      descEn: 'We conduct an in-person visual audit, recommend interior staging tweaks, and acquire your official DTCM or DCT holiday home permit.',
      descAr: 'نقوم بمعاينة ميدانية للعقار، تقديم توصيات الديكور، وإصدار ترخيص بيت العطلات الرسمي من دائرة السياحة.',
    },
    {
      num: '02',
      titleEn: '2. LIST & STYLE',
      titleAr: '٢. التصوير والتسويق',
      subtitleEn: 'Editorial HDR Photos & Multi-Portal Distribution',
      subtitleAr: 'تصوير معماري ونشر في ١٥+ منصة',
      descEn: 'Our media team shoots high-res HDR photography and creates synchronized listings on Airbnb, Booking.com, Vrbo, and STAYORA Direct.',
      descAr: 'جلسة تصوير احترافي بتقنية HDR ونشر القوائم بالتزامن على Airbnb، بوكينج، وفيربو ومنصتنا المباشرة.',
    },
    {
      num: '03',
      titleEn: '3. HOST & CARE',
      titleAr: '٣. الاستقبال والضيافة',
      subtitleEn: '24/7 Concierge & Hotel-Grade Clean',
      subtitleAr: 'خدمة نزلاء ٢٤/٧ ونظافة فندقية ٥ نجوم',
      descEn: 'Multilingual guest screening, 3-minute response times, digital keypads, and hotel-grade turnover cleanings between every booking.',
      descAr: 'فحص أمني للنزلاء، استجابة في أقل من ٣ دقائق، أقفال ذكية للدخول الذاتي، وتنظيف فندقي شامل.',
    },
    {
      num: '04',
      titleEn: '4. REPORT & PAY',
      titleAr: '٤. التحويل البنكي',
      subtitleEn: 'Direct Bank Payouts on the 10th',
      subtitleAr: 'إيداع الأرباح بحسابك في يوم ١٠',
      descEn: 'Access your owner dashboard anytime. Receive net earnings directly into your UAE bank account on the 10th of every month.',
      descAr: 'متابعة مباشرة للإيرادات عبر لوحة التحكم، مع تحويل صافي أرباحك لحسابك البنكي بانتظام كل شهر.',
    },
    {
      num: '05',
      titleEn: '5. OPTIMIZE',
      titleAr: '٥. تحسين العوائد',
      subtitleEn: 'AI Yield & Event Price Surges',
      subtitleAr: 'تسعير ذكي وتكيّف مع مواسم الذروة',
      descEn: 'Our revenue team monitors market demand daily, updating rates during Dubai Expo, F1, and holiday surges to maximize total yield.',
      descAr: 'تحديث آلي لأسعار الليلة بالتزامن مع فعاليات دبي وأبوظبي الكبرى لمضاعفة إجمالي الأرباح السنوية.',
    }
  ];

  return (
    <section id="howitworks" className="py-24 bg-[#F9F6F0] text-[#133C3E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('processBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#133C3E] tracking-tight">
            {t('processTitle')}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-light">
            {isRtl
              ? 'خمس خطوات عملية ومؤتمتة تحول عقارك إلى استثمار يدر عوائد قياسية في أقل من ٧ أيام وبدون أي مجهود منك.'
              : 'A frictionless 5-stage framework designed to transform your property into a high-yielding short-term asset in under 7 days.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border border-amber-900/10 shadow-lg shadow-amber-950/5 flex flex-col justify-between relative overflow-hidden group font-sans"
            >
              <div>
                <span className="text-3xl font-black text-[#C85A32]/30 font-mono block mb-4 group-hover:text-[#C85A32] transition-colors">
                  {isRtl ? toArabicDigits(step.num) : step.num}
                </span>

                <h3 className="text-base font-bold text-[#133C3E] mb-1 font-mono uppercase tracking-wider">
                  {isRtl ? step.titleAr : step.titleEn}
                </h3>
                
                <h4 className="text-xs font-semibold text-[#C85A32] mb-3">
                  {isRtl ? step.subtitleAr : step.subtitleEn}
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {isRtl ? step.descAr : step.descEn}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between font-mono">
                <span className="text-[10px] text-gray-400 font-semibold">
                  {isRtl ? `المرحلة ${toArabicDigits(step.num)} من ٠٥` : `STAGE ${step.num} OF 05`}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};