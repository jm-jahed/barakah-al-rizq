'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

export const HowWeWork: React.FC = () => {
  const { language, t, toArabicDigits } = useAutovantaLanguage();

  const steps = [
    {
      num: '01',
      titleEn: 'BOOK',
      titleAr: 'حجز الموعد',
      subtitleEn: 'Online or WhatsApp Scheduling',
      subtitleAr: 'حجز فوري عبر الموقع أو واتساب',
      descEn: 'Reserve your service slot online, by phone, or via quick WhatsApp message. Free pickup available across Dubai and Sharjah.',
      descAr: 'احجز موعدك في دقائق عبر الموقع أو الهاتف أو واتساب. تتوفر خدمة استلام ونقل مجانية للسيارة في دبي والشارقة.'
    },
    {
      num: '02',
      titleEn: 'DIAGNOSE',
      titleAr: 'الفحص والتشخيص',
      subtitleEn: '50-Point Technical Inspection',
      subtitleAr: 'فحص فني شامل من ٥٠ نقطة',
      descEn: 'Our certified technicians put your car on the lift, run computer diagnostics, and inspect all mechanical and electrical loops.',
      descAr: 'يقوم مهندسونا برفع السيارة وفحصها بالكمبيوتر بدقة وكشف كافة الأنظمة الميكانيكية والكهربائية والتكييف.'
    },
    {
      num: '03',
      titleEn: 'APPROVE',
      titleAr: 'الموافقة المسبقة',
      subtitleEn: 'Transparent Upfront Quote',
      subtitleAr: 'تسعيرة شفافة ومفصلة',
      descEn: 'You receive a clear itemized quote on WhatsApp with video notes before any wrench touches your vehicle. Zero hidden costs.',
      descAr: 'تستلم تقريراً مصوراً وتسعيرة مفصلة عبر واتساب قبل بدء أي عمل. لا توجد أي رسوم أو تكاليف خفية على الإطلاق.'
    },
    {
      num: '04',
      titleEn: 'SERVICE',
      titleAr: 'تنفيذ الصيانة',
      subtitleEn: 'Certified Master Repair',
      subtitleAr: 'صيانة احترافية بقطع أصلية',
      descEn: 'Work is completed using genuine OEM parts, Liqui Moly synthetic oils, and precision torque settings per factory manuals.',
      descAr: 'تنفيذ الصيانة والإصلاح باستخدام قطع غيار أصلية وزيوت تخليقية معتمدة وفق أدلة المصنع المعتمدة.'
    },
    {
      num: '05',
      titleEn: 'COLLECT',
      titleAr: 'استلام وضمان',
      subtitleEn: 'Clean Pickup & Warranty Report',
      subtitleAr: 'تسليم نظيف وضمان ١٢ شهراً',
      descEn: 'Pick up your freshly washed vehicle with a detailed service history report and a 12-month / 20,000km warranty guarantee.',
      descAr: 'استلم سيارتك مغسولة بالكامل مع تقرير صيانة رقمي مفصل وشهادة ضمان معتمدة لمدة ١٢ شهراً أو ٢٠,٠٠٠ كم.'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#0F1012] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('processBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('processTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            {language === 'ar'
              ? 'منهجية عمل دقيقة وواضحة تضمن لك جودة الوكالة المعتمدة مع راحة بال تامة في كل خطوة.'
              : 'A transparent 5-stage framework designed to deliver dealer-quality service with total peace of mind.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-[#181A1D] border border-white/10 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-black text-[#FF5722]/30 font-mono block mb-4 group-hover:text-[#FF5722] transition-colors">
                  {toArabicDigits(step.num)}
                </span>

                <h3 className="text-lg font-bold text-white mb-1 font-mono uppercase tracking-wider">
                  {language === 'ar' ? step.titleAr : step.titleEn}
                </h3>
                
                <h4 className="text-xs font-semibold text-[#FF5722] mb-3">
                  {language === 'ar' ? step.subtitleAr : step.subtitleEn}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {language === 'ar' ? step.descAr : step.descEn}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500 font-semibold">
                  {language === 'ar' ? `المرحلة ${toArabicDigits(step.num)} من ٠٥` : `STAGE ${step.num} OF 05`}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};