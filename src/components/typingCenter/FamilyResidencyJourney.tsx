'use client';

import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  Home, 
  FileCheck2, 
  Activity, 
  CreditCard, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface FamilyResidencyJourneyProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function FamilyResidencyJourney({
  lang,
  onOpenAppointment
}: FamilyResidencyJourneyProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const familySteps = [
    {
      step: '01',
      icon: Users,
      titleEn: 'Sponsor File & Salary Audit',
      titleAr: 'تدقيق ملف الكفيل وشهادة الراتب',
      descEn: 'Verifying minimum salary threshold (AED 4,000 or AED 3,000 + accommodation) and company labour contract.',
      descAr: 'التحقق من شرط الراتب (4,000 درهم أو 3,000 درهم + السكن) وعقد العمل الموثق.'
    },
    {
      step: '02',
      icon: Home,
      titleEn: 'Ejari Attestation & Marriage Certificate',
      titleAr: 'عقد إيجاري الموثق وشهادة الزواج',
      descEn: 'Attested tenancy lease, DEWA bill, and MOFA-attested marriage/birth certificates with Arabic translation.',
      descAr: 'توثيق عقد إيجاري وفاتورة ديوا وتصديق شهادات الزواج والميلاد بالترجمة القانونية.'
    },
    {
      step: '03',
      icon: FileCheck2,
      titleEn: 'Entry Permit & Inside-Country Status Change',
      titleAr: 'إصدار إذن الدخول وتعديل الوضع',
      descEn: 'Electronic entry permit typing and smooth in-country status adjustment without travel exits.',
      descAr: 'طباعة إذن الدخول الإلكتروني وتعديل الوضع داخل الدولة دون الحاجة للمغادرة.'
    },
    {
      step: '04',
      icon: Activity,
      titleEn: 'Medical Fitness Examination & Insurance',
      titleAr: 'الفحص الطبي والتأمين الصحي',
      descEn: 'VIP / regular medical typing for spouse and dependent children (18+) with health insurance sync.',
      descAr: 'طباعة وحجز الفحص الطبي للزوجة والأبناء فوق 18 عاماً مع وثيقة التأمين الصحي.'
    },
    {
      step: '05',
      icon: CreditCard,
      titleEn: 'Emirates ID & Residence E-Visa',
      titleAr: 'طباعة الهوية وإصدار الإقامة الإلكترونية',
      descEn: 'Final 2-year residency permit issuance with updated digital Emirates ID delivered via courier.',
      descAr: 'إصدار الإقامة الرسمية المعتمدة لسنتين واستلام بطاقات الهوية حتى باب منزلك.'
    }
  ];

  return (
    <section className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>{isAr ? 'كفالة الأسرة والإقامة العائلية' : 'FAMILY & DEPENDENT SPONSORSHIP HUB'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isAr ? 'رحلة كفالة وإقامة الأسرة، خطوة بخطوة' : 'Family Visa Sponsorship Journey'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {isAr
                ? 'إجراءات مبسطة ومتكاملة لكفالة الزوجة والأبناء والوالدين في دولة الإمارات من فتح الملف وحتى استلام بطاقات الهوية.'
                : 'Step-by-step guidance for sponsoring your spouse, children, and parents in the UAE — from salary verification to final card delivery.'}
            </p>
          </div>

          <button
            onClick={() => onOpenAppointment('family-visa-sponsorship')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all self-start lg:self-auto"
          >
            <span>{isAr ? 'بدء إجراءات كفالة الأسرة' : 'Start Family Sponsorship'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {familySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-[#072617] border border-amber-500/20 hover:border-amber-400 transition-all shadow-lg flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                      STEP {item.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Salary Criteria Callout */}
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              {isAr
                ? 'متطلبات الراتب: 4,000 درهم شهرياً أو 3,000 درهم + السكن لكفالة الزوجة والأبناء وفق اشتراطات الإدارة العامة للإقامة.'
                : 'Salary standard: AED 4,000/month or AED 3,000 + accommodation required by GDRFA / ICP for family sponsorship.'}
            </span>
          </div>
          <span className="font-mono text-amber-300 text-[11px] font-bold whitespace-nowrap">
            {isAr ? 'صلاحية الإقامة: سنتان' : '2-Year Renewable Residency'}
          </span>
        </div>

      </div>
    </section>
  );
}
