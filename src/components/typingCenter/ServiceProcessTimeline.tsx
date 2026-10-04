'use client';

import React from 'react';
import { 
  FileText, 
  SearchCheck, 
  Keyboard, 
  Send, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface ServiceProcessTimelineProps {
  lang: Language;
}

export default function ServiceProcessTimeline({ lang }: ServiceProcessTimelineProps) {
  const isAr = lang === 'ar';

  const steps = [
    {
      step: '01',
      icon: FileText,
      titleEn: 'Tell Us What You Need',
      titleAr: 'أخبرنا بنوع المعاملة المطلوبة',
      descEn: 'Select your service online, upload preliminary files, or message our WhatsApp concierge.',
      descAr: 'اختر المعاملة عبر الموقع أو أرسل استفسارك عبر الواتساب لتحديد المسار الأنسب.'
    },
    {
      step: '02',
      icon: SearchCheck,
      titleEn: 'Comprehensive Document Audit',
      titleAr: 'تدقيق المستندات وتجنب الأخطاء',
      descEn: 'Our expert typing officers verify passport validity, salary certificates, and required attestations.',
      descAr: 'فحص دقيق لصلاحية الجوازات، شهادات الراتب، وتصديقات الخارجية لتفادي الرفض.'
    },
    {
      step: '03',
      icon: Keyboard,
      titleEn: 'Electronic Application Preparation',
      titleAr: 'الطباعة والصياغة الإلكترونية',
      descEn: 'Drafting your official electronic submission strictly conforming to ICP, GDRFA, or MOHRE formats.',
      descAr: 'إدخال البيانات وصياغة الطلب الإلكتروني الرسمي وفق اشتراطات الهيئة والجوازات.'
    },
    {
      step: '04',
      icon: Send,
      titleEn: 'Government Portal Submission',
      titleAr: 'التقديم وسداد الرسوم الرسمية',
      descEn: 'Direct filing to the respective UAE ministry portal with transparent itemized receipts.',
      descAr: 'رفع المعاملة مباشرة للبوابة الحكومية وسداد الرسوم بفواتير وإيصالات رسمية.'
    },
    {
      step: '05',
      icon: Clock,
      titleEn: 'Live Tracking & Biometrics',
      titleAr: 'المتابعة المباشرة ومواعيد البصمة',
      descEn: 'Booking your nearest biometric happiness center appointment and tracking live status.',
      descAr: 'حجز موعد البصمة بأقرب مركز ومتابعة حالة المعاملة لحظة بلحظة حتى الموافقة.'
    },
    {
      step: '06',
      icon: CheckCircle2,
      titleEn: 'Completion & Delivery',
      titleAr: 'استلام المعاملة والتسليم الآمن',
      descEn: 'Digital E-Visa/E-ID delivered instantly + physical cards couriered to your doorstep.',
      descAr: 'تفعيل التأشيرة والهوية الرقمية فوراً مع توصيل البطاقات الأصلية حتى باب منزلك.'
    }
  ];

  return (
    <section className="py-20 bg-[#070A14] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>{isAr ? 'منهجية العمل وسير المعاملات' : '6-STAGE SERVICE LIFECYCLE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'كيف تُنجز معاملتك مع سند؟' : 'Our Streamlined 6-Step Process'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr
              ? 'رحلة واضحة وموثوقة تضمن دقة البيانات وسرعة الإنجاز والامتثال التام للأنظمة الحكومية.'
              : 'A transparent, structured workflow engineered for accuracy, speed, and zero government rejection.'}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#072617] border border-amber-500/20 hover:border-amber-400 transition-all shadow-xl space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-amber-400 font-mono group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
