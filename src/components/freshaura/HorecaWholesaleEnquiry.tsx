'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MessageCircle, Phone, FileText, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { FRESHAURA_BRAND } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

export const HorecaWholesaleEnquiry: React.FC = () => {
  const { t, isRtl } = useFreshauraLanguage();

  const b2bBenefits = [
    {
      titleEn: '4:00 AM Kitchen Delivery',
      titleAr: 'توصيل للمطابخ ٤:٠٠ فجراً',
      descEn: 'Priority early morning cold drops before kitchen preparation begins.',
      descAr: 'توصيل مبرد مبكر قبل بدء ساعات التحضير الصباحية للمطاعم والفنادق.',
    },
    {
      titleEn: 'Custom Bulk Specs & Peeling',
      titleAr: 'مواصفات توريد وتجهيز مخصصة',
      descEn: 'Calibrated fruit grading, trimmed greens, and customized kitchen crates.',
      descAr: 'فرز دقيق حسب الأحجام المطلوبة، تنظيف وتجهيز الورقيات وصناديق مطابقة للمواصفات.',
    },
    {
      titleEn: 'FTA Tax Invoicing & TRN',
      titleAr: 'فواتير ضريبية معتمدة ورقم ضريبي',
      descEn: 'Full UAE VAT compliance with flexible weekly or monthly credit facilities.',
      descAr: 'فواتير رسمية متوافقة مع الهيئة الاتحادية للضرائب مع تسهيلات دفع أسبوعية وشهرية.',
    },
    {
      titleEn: 'Dedicated Produce Sommelier',
      titleAr: 'مدير حسابات زراعي مخصص',
      descEn: 'Direct WhatsApp line with our procurement specialists for seasonal availability.',
      descAr: 'خط تواصل مباشر ومستمر لتلبية الاحتياجات اليومية وتوفير المحاصيل النادرة.',
    },
  ];

  return (
    <section id="wholesale" className="py-24 bg-[#03201F] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30 inline-flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('navWholesale')}</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FBF9F5] leading-tight">
              {t('wholesaleTitle')}
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              {t('wholesaleSubtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {b2bBenefits.map((b, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#064E3B]/70 border border-emerald-700/40 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold font-serif text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{isRtl ? b.titleAr : b.titleEn}</span>
                  </div>
                  <p className="text-xs text-stone-300 font-light font-sans ps-6">
                    {isRtl ? b.descAr : b.descEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
              <a
                href={FRESHAURA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-serif font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>{t('wholesaleCtaWhatsapp')}</span>
              </a>

              <a
                href={`tel:${FRESHAURA_BRAND.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl bg-[#064E3B] hover:bg-emerald-900 border border-emerald-600/40 text-stone-200 font-bold flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{isRtl ? 'اتصل بفريق التوريد' : 'Call B2B Team (+971 4)'}</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-700/40 shadow-2xl bg-[#064E3B] p-8 text-stone-200 font-sans space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-300 uppercase font-bold block">
                    {isRtl ? 'عقد التوريد المعتمد' : 'CERTIFIED UAE SUPPLY CONTRACT'}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
                    {isRtl ? 'حساب تجاري للشركات' : 'Corporate Account'}
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-[#042F2E] border border-emerald-500/30">
                  <Truck className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400">{isRtl ? 'المركز اللوجستي الرئيسي:' : 'Central Sorting Hub:'}</span>
                  <span className="text-white font-bold">{isRtl ? 'القوز ٣، دبي' : 'Al Quoz 3, Dubai'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{isRtl ? 'الأسطول المبرد:' : 'Refrigerated Fleet:'}</span>
                  <span className="text-emerald-300 font-bold">{isRtl ? 'درجة حرارة ثابتة ٤ مئوية' : 'Active 4°C Telemetry'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{isRtl ? 'توقيت الطلب المسبق:' : 'Daily Cutoff Time:'}</span>
                  <span className="text-white font-bold">{isRtl ? '١١:٠٠ مساءً لتوصيل الفجر' : '11:00 PM for 4 AM Drop'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#042F2E] border border-emerald-700/30 text-xs space-y-2">
                <span className="text-emerald-300 font-mono text-[10px] uppercase font-bold block">
                  {isRtl ? 'عملاؤنا الحاليون:' : 'TRUSTED BY LEADING BRANDS:'}
                </span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  {isRtl
                    ? 'فنادق ٥ نجوم في دبي مارينا ونخلة جميرا، ومطاعم فاخرة في مركز دبي المالي العالمي (DIFC) وأبوظبي.'
                    : '5-star resorts in Palm Jumeirah & Dubai Marina, fine dining in DIFC, and boutique cafes in Abu Dhabi & Al Ain.'}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
