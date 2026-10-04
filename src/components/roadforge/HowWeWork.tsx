'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const HowWeWork: React.FC = () => {
  const { language, t, toArabicDigits } = useRoadforgeLanguage();

  const steps = [
    {
      num: '01',
      titleEn: 'CALL / REQUEST',
      titleAr: 'الاتصال أو الطلب الفوري',
      subtitleEn: 'Toll-Free Phone or WhatsApp',
      subtitleAr: 'خط مجاني أو رسالة واتساب',
      descEn: 'Reach our 24/7 dispatch desk via call, WhatsApp, or instant web tool with zero waiting on hold.',
      descAr: 'تواصل مع غرفة العمليات فوراً عبر الهاتف أو واتساب أو الموقع بدون أي وقت انتظار.'
    },
    {
      num: '02',
      titleEn: 'LOCATE',
      titleAr: 'تحديد الموقع بدقة',
      subtitleEn: 'GPS Location Pinpoint',
      subtitleAr: 'تحديد الإحداثيات بالأقمار الصناعية',
      descEn: 'We capture your live GPS location on Sheikh Zayed Road, E311, E611, or city streets for exact routing.',
      descAr: 'نحدد موقعك المباشر على الطرق السريعة أو داخل المدينة لتوجيه المسار الأقصر والأسرع.'
    },
    {
      num: '03',
      titleEn: 'DISPATCH',
      titleAr: 'توجيه أقرب دورية',
      subtitleEn: 'Nearest Unit Assigned',
      subtitleAr: 'انطلاق أقرب سطحة لموقعك',
      descEn: 'The closest flatbed tow truck or battery service van is immediately dispatched to your location.',
      descAr: 'يتم توجيه أقرب سطحة هيدروليكية أو سيارة خدمة بطاريات متمركزة بالقرب منك فوراً.'
    },
    {
      num: '04',
      titleEn: 'ASSIST',
      titleAr: 'تنفيذ الإنقاذ بأمان',
      subtitleEn: 'On-Site Fix or Flatbed Tow',
      subtitleAr: 'إصلاح فوري أو سحب آمن',
      descEn: 'Our certified operator handles your battery jumpstart, tyre change, fuel delivery, or safe zero-damage towing.',
      descAr: 'يتولى الفني المعتمد اشتراك البطارية أو تبديل الإطار أو تحميل السيارة بأمان تام دون أي احتكاك.'
    },
    {
      num: '05',
      titleEn: 'SECURE',
      titleAr: 'تأمين وفاتورة معتمدة',
      subtitleEn: 'Safely On Your Way',
      subtitleAr: 'وصول آمن وإيصال للتأمين',
      descEn: 'We verify you have reached your destination safely and send an official digital receipt for insurance reimbursement.',
      descAr: 'نتأكد من إيصال سيارتك للوجهة المطلوبة ونزودك بفاتورة إلكترونية معتمدة للمطالبات التأمينية.'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#162032] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('processBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('processTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            {language === 'ar'
              ? 'بروتوكول طوارئ سريع من ٥ خطوات مصمم للتعامل مع الأعطال والحوادث في أقل من ٢٥ دقيقة.'
              : 'A rapid 5-step emergency protocol designed to resolve roadside breakdowns in under 25 minutes.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-[#0B132B] border border-white/10 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-black text-amber-500/30 font-mono block mb-4 group-hover:text-amber-400 transition-colors">
                  {toArabicDigits(step.num)}
                </span>

                <h3 className="text-lg font-bold text-white mb-1 font-mono uppercase tracking-wider">
                  {language === 'ar' ? step.titleAr : step.titleEn}
                </h3>
                
                <h4 className="text-xs font-semibold text-amber-400 mb-3">
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