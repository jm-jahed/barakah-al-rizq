'use client';

import React from 'react';
import { 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Building, 
  GraduationCap, 
  Briefcase, 
  Compass
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface GoldenGreenVisaHubProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function GoldenGreenVisaHub({
  lang,
  onOpenAppointment
}: GoldenGreenVisaHubProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const goldenTracks = [
    {
      icon: Building,
      titleEn: 'Real Estate Investors (AED 2M+)',
      titleAr: 'المستثمرون العقاريون (2 مليون درهم فأكثر)',
      descEn: 'Property owners with completed or off-plan properties evaluated at AED 2,000,000+ from Land Department.',
      descAr: 'ملاك العقارات الجاهزة أو على المخطط بقيمة 2 مليون درهم فأكثر معتمدة من دائرة الأراضي والأملاك.'
    },
    {
      icon: GraduationCap,
      titleEn: 'Skilled Executives & Professionals',
      titleAr: 'المدراء التنفيذيون والكفاءات المهنية',
      descEn: 'Bachelor degree holders earning minimum AED 30,000 monthly salary with attested degrees & MOHRE contract.',
      descAr: 'حملة البكالوريوس براتب شهري لا يقل عن 30,000 درهم بعقد عمل موثق وشهادة جامعية مصدقة.'
    },
    {
      icon: Briefcase,
      titleEn: 'Entrepreneurs & Startup Founders',
      titleAr: 'رواد الأعمال وأصحاب المشاريع الناشئة',
      descEn: 'Founders of certified SMEs with annual revenues of AED 1,000,000+ or approved incubator backing.',
      descAr: 'مؤسسو الشركات الناشئة المعتمدة بإيرادات سنوية لا تقل عن مليون درهم أو حاضنات الأعمال الرسمية.'
    },
    {
      icon: Compass,
      titleEn: 'Exceptional Talents & Scientists',
      titleAr: 'العلماء والمبدعون وأصحاب المواهب الاستثنائية',
      descEn: 'Innovators, cultural creators, athletes, and doctors nominated by UAE Ministry of Culture or Emirates Scientists Council.',
      descAr: 'الأطباء، الباحثون، المبتكرون، والمبدعون المعتمدون من مجلس علماء الإمارات أو وزارة الثقافة.'
    }
  ];

  return (
    <section id="golden-visa" className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Crown className="w-3.5 h-3.5" />
              <span>{isAr ? 'الإقامة الذهبية والخضراء في دولة الإمارات' : 'UAE 10-YEAR GOLDEN & GREEN VISA DESK'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isAr ? 'استشارات وتدقيق الإقامة الذهبية' : 'Golden Visa Eligibility & Application'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {isAr
                ? 'تدقيق معايير الأهلية وتجهيز ملفات الترشيح للمستثمرين العقاريين وأصحاب الكفاءات المهنية ورواد الأعمال دون وعود وهمية وبشفافية كاملة.'
                : 'Comprehensive eligibility review, nomination drafting, and document assembly for real estate owners, corporate leaders, and specialized talents.'}
            </p>
          </div>

          <button
            onClick={() => onOpenAppointment('golden-visa-guidance')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all self-start lg:self-auto"
          >
            <span>{isAr ? 'طلب تدقيق ملف الإقامة الذهبية' : 'Request Golden Visa Audit'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Golden Visa Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {goldenTracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#072617] border border-amber-500/20 hover:border-amber-400/60 transition-all shadow-xl space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">
                    10-YEAR RESIDENCY
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {isAr ? track.titleAr : track.titleEn}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isAr ? track.descAr : track.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* High-Trust Regulatory Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-amber-500/10[0.05] border border-amber-500/20 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              {isAr
                ? 'نقدم استشارات وتجهيز ملفات الترشيح الرسمية. القرار النهائي لإصدار الإقامة الذهبية يخضع للجهات المختصة في الدولة.'
                : 'Sanad provides professional documentation and nomination typing. Final approval authority resides exclusively with UAE government entities.'}
            </span>
          </div>
          <span className="font-mono text-amber-400 text-[11px]">
            {isAr ? 'كفالة الأسرة 100% مدعومة' : '100% Family Sponsorship Included'}
          </span>
        </div>

      </div>
    </section>
  );
}
