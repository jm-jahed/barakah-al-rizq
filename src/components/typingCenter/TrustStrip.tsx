'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, FileBadge, Building2, Scale } from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface TrustStripProps {
  lang: Language;
}

export default function TrustStrip({ lang }: TrustStripProps) {
  const isAr = lang === 'ar';

  const trustBadges = [
    {
      icon: ShieldCheck,
      titleEn: 'ICP Authorized Typing Office Standards',
      titleAr: 'معايير مكاتب الطباعة المعتمدة لدى الهيئة الاتحادية',
      descEn: 'Strict alignment with Federal ICP electronic portal guidelines.',
      descAr: 'التزام كامل بضوابط البوابة الإلكترونية للهيئة الاتحادية للهوية والجنسية.'
    },
    {
      icon: Building2,
      titleEn: 'GDRFA Dubai / Amer System Compatibility',
      titleAr: 'توافق كامل مع أنظمة إقامة دبي ومنظومة آمر',
      descEn: 'Direct preparation for Dubai entry permits, visas & Golden Visas.',
      descAr: 'تجهيز مباشر لتأشيرات دبي، الإقامات العادية والإقامة الذهبية.'
    },
    {
      icon: FileBadge,
      titleEn: 'MOHRE Tasheel Corporate Labour Gateway',
      titleAr: 'بوابة تسهيل لمعاملات وزارة الموارد البشرية',
      descEn: 'Mainland work permits, contracts & establishment files.',
      descAr: 'إصدار وتعديل تصاريح العمل، العقود الموحدة وبطاقات المنشأة.'
    },
    {
      icon: Scale,
      titleEn: 'MOJ & MOFA Certified Legal Workflow',
      titleAr: 'ترجمة وتصديقات معتمدة من العدل والخارجية',
      descEn: 'Sworn legal translation & foreign ministry attestation assistance.',
      descAr: 'ترجمة قانونية محلفة وتصديقات الوثائق الرسمية والدولية.'
    },
    {
      icon: Lock,
      titleEn: 'UAE Data Protection & Privacy Compliant',
      titleAr: 'حماية وأمان البيانات وفق القانون الاتحادي الإماراتي',
      descEn: 'Federal Decree-Law No. 45 of 2021 on Personal Data Protection.',
      descAr: 'حماية كاملة لسرية الجوازات والمستندات وفق قانون حماية البيانات الشخصية.'
    }
  ];

  return (
    <section className="py-6 bg-[#04070E] border-y border-amber-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-slate-800/80 hover:border-amber-500/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:bg-amber-500/20 group-hover:scale-105 transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {isAr ? badge.titleAr : badge.titleEn}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    {isAr ? badge.descAr : badge.descEn}
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
