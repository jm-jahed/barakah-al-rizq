'use client';

import React from 'react';
import { 
  Globe2, 
  FileCheck2, 
  Stamp, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  ShieldCheck,
  Scale
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface TranslationAttestationJourneyProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function TranslationAttestationJourney({
  lang,
  onOpenAppointment
}: TranslationAttestationJourneyProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const journeySteps = [
    {
      num: '01',
      titleEn: 'Document Intake & Review',
      titleAr: 'استلام وتدقيق المستند الأصلي',
      descEn: 'High-resolution scan audit for prior home country stamps & notarization.',
      descAr: 'فحص جودة المسح الضوئي والتأكد من أختام خارجية بلد المنشأ المسبقة.'
    },
    {
      num: '02',
      titleEn: 'Certified MOJ Legal Translation',
      titleAr: 'الترجمة القانونية المعتمدة (العدل)',
      descEn: 'Sworn Arabic/English translation bearing official Ministry of Justice seals.',
      descAr: 'ترجمة محلفة ومختومة ومعتمدة لدى كافة محاكم ووزارات الدولة.'
    },
    {
      num: '03',
      titleEn: 'UAE Embassy & MOFA Attestation',
      titleAr: 'تصديق السفارة ووزارة الخارجية',
      descEn: 'Electronic QR e-attestation and physical legalization with MOFA UAE.',
      descAr: 'التصديق الإلكتروني الرسمي ورمز QR مع وزارة الخارجية والتعاون الدولي.'
    },
    {
      num: '04',
      titleEn: 'Government Authority Submission',
      titleAr: 'التقديم للجهة الحكومية المعنية',
      descEn: 'Seamless acceptance by GDRFA, MOHRE, Courts, or Land Department.',
      descAr: 'قبول فوري ومباشر لدى الجوازات، وزارة العمل، المحاكم، أو أراضي دبي.'
    },
    {
      num: '05',
      titleEn: 'Secure Courier Delivery',
      titleAr: 'التسليم الآمن للمستند المصدق',
      descEn: 'Delivered digitally via email/WhatsApp and physical hard copies via courier.',
      descAr: 'استلام النسخة الرقمية فوراً مع إمكانية شحن الأصل الموثق إلى موقعك.'
    }
  ];

  return (
    <section className="py-20 bg-[#070A14] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Globe2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'الترجمة والتصديقات الدولية' : 'DOCUMENTS THAT CROSS BORDERS'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'ترجمة قانونية وتصديق مستندات معتمد' : 'Certified Legal Translation & MOFA Attestation'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr
              ? 'ترجمة قانونية محلفة معتمدة من وزارة العدل الإماراتية وتصديق الشهادات التعليمية وعقود الزواج والميلاد والوكالات والقرارات التجارية من وزارة الخارجية.'
              : 'Sworn Ministry of Justice legal translation and Ministry of Foreign Affairs (MOFA) attestation for degrees, marriage certificates, birth certificates, and commercial powers of attorney.'}
          </p>
        </div>

        {/* 5-Step Journey Horizontal Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-[#072617] border border-amber-500/20 hover:border-amber-400 transition-all flex flex-col justify-between space-y-3 group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-amber-400 font-mono group-hover:scale-110 transition-transform">
                  {step.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {isAr ? step.titleAr : step.titleEn}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {isAr ? step.descAr : step.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#072617] to-[#072617] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
            <h3 className="text-lg font-bold text-white">
              {isAr ? 'هل لديك شهادة أو وثيقة تحتاج لترجمة وتصديق عاجل؟' : 'Have a document requiring fast MOFA attestation?'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr ? 'أرسل مسحاً ضوئياً واضحاً لاستلام عرض السعر والمدة خلال 15 دقيقة.' : 'Send a clear scan for instant eligibility check & quote within 15 minutes.'}
            </p>
          </div>

          <button
            onClick={() => onOpenAppointment('mofa-attestation')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
          >
            <span>{isAr ? 'طلب ترجمة / تصديق' : 'Start Translation & Attestation'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
