'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Zap, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  Users2 
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface WhyTrustUsProps {
  lang: Language;
}

export default function WhyTrustUs({ lang }: WhyTrustUsProps) {
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: ShieldCheck,
      titleEn: '100% Data Accuracy & Audit',
      titleAr: 'دقة تامة وتدقيق شامل للبيانات',
      descEn: 'Meticulous verification of passport names, unified numbers (UID), and salary figures preventing costly application rejections.',
      descAr: 'تدقيق دقيق لمطابقة الأسماء مع الجوازات، الرقم الموحد، وتفاصيل الرواتب لمنع الرفض أو تكرار الرسوم.'
    },
    {
      icon: Eye,
      titleEn: 'Absolute Fee Transparency',
      titleAr: 'شفافية كاملة وفصل واضح للرسوم',
      descEn: 'Government statutory charges and typing center preparation fees are clearly itemized on official digital receipts with 0 hidden markups.',
      descAr: 'فصل تام بين الرسوم الحكومية الرسمية وأتعاب الطباعة مع إيصالات إلكترونية رسمية دون أي تكاليف خفية.'
    },
    {
      icon: Zap,
      titleEn: 'Rapid Turnaround & Priority SLA',
      titleAr: 'سرعة الإنجاز والمسار السريع',
      descEn: 'Average application drafting under 30 minutes. Express priority processing available for same-day visa status changes and ID prints.',
      descAr: 'تجهيز الطلبات في أقل من 30 دقيقة، مع خيارات المسار السريع لإنجاز تعديل الوضع وتجديد الهوية في نفس اليوم.'
    },
    {
      icon: Users2,
      titleEn: 'Bilingual Expertise & Support',
      titleAr: 'خبرة ثنائية اللغة ودعم مستمر',
      descEn: 'Dedicated Arabic and English government liaison specialists catering to individuals, families, expatriates, and corporate HR teams.',
      descAr: 'مستشارون متخصصون باللغتين العربية والإنجليزية لخدمة الأفراد والعائلات والمدراء التنفيذيين وإدارات الموارد البشرية.'
    }
  ];

  return (
    <section className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isAr ? 'ركائز الثقة والاعتماد' : 'WHY TRUST SANAD GOV HUB'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'الدقة والشفافية في كل معاملة' : 'Precision, Transparency & Speed'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr
              ? 'نبني علاقتنا مع متعاملينا على الثقة والسرعة والوضوح التام في المعاملات والرسوم.'
              : 'Our operational standards are founded on data accuracy, regulatory adherence, and transparent client communication.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#072617] border border-amber-500/20 hover:border-amber-400 transition-all shadow-xl space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isAr ? p.titleAr : p.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {isAr ? p.descAr : p.descEn}
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
