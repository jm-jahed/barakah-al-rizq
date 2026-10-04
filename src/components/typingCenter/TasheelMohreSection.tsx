'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Users, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Building, 
  Sparkles 
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface TasheelMohreSectionProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function TasheelMohreSection({
  lang,
  onOpenAppointment
}: TasheelMohreSectionProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<'permits' | 'contracts' | 'company' | 'cases'>('permits');

  const tabs = [
    { id: 'permits', labelEn: 'Work Permits', labelAr: 'تصاريح العمل' },
    { id: 'contracts', labelEn: 'Labour Contracts & WPS', labelAr: 'عقود العمل وحماية الأجور' },
    { id: 'company', labelEn: 'Company & Quota', labelAr: 'ملف المنشأة والكوتة' },
    { id: 'cases', labelEn: 'Labour Documentation', labelAr: 'الإلغاءات والمعاملات' },
  ];

  const contentMap = {
    permits: [
      {
        titleEn: 'New Electronic Work Permit',
        titleAr: 'إصدار تصريح عمل إلكتروني جديد',
        descEn: 'Quota allocation, job offer submission, and work permit approval across MOHRE categories.',
        descAr: 'تخصيص الكوتة وتقديم عرض العمل المعتمد وإصدار التصريح لكافة فئات الشركات.',
        typingFee: 'AED 120 - 220',
        govtFee: 'AED 250 - 3,200 (Category Tier)',
        timeEn: '24 - 48 Hours',
        timeAr: '24 - 48 ساعة'
      },
      {
        titleEn: 'Work Permit Renewal & Amendment',
        titleAr: 'تجديد وتعديل تصريح العمل',
        descEn: 'Timely labour permit renewal preventing MOHRE corporate delay fines and license blocks.',
        descAr: 'تجديد تصاريح العمل في الموعد المحدد لتفادي الغرامات الشهرية وتجميد الرخص.',
        typingFee: 'AED 100 - 180',
        govtFee: 'AED 250 - 2,500',
        timeEn: '24 Hours',
        timeAr: '24 ساعة'
      },
      {
        titleEn: 'Temporary & Part-Time Permit Typing',
        titleAr: 'تصاريح العمل المؤقت والجزئي',
        descEn: 'Permits for university students, project-based freelancers, and secondary employment.',
        descAr: 'تصاريح للطلاب والعمل الجزئي والمشاريع المؤقتة وفق قانون العمل الجديد.',
        typingFee: 'AED 120 - 200',
        govtFee: 'AED 300 - 600',
        timeEn: '24 Hours',
        timeAr: '24 ساعة'
      }
    ],
    contracts: [
      {
        titleEn: 'Standard Unified Labour Contract Submission',
        titleAr: 'طباعة وتصديق عقد العمل الموحد',
        descEn: 'Standard contracts compliant with Federal Decree-Law No. 33 of 2021 on Labour Relations.',
        descAr: 'عقود عمل موحدة مطابقة للمرسوم بقانون اتحادي رقم 33 لسنة 2021.',
        typingFee: 'AED 80 - 150',
        govtFee: 'AED 100 - 300',
        timeEn: '24 Hours',
        timeAr: '24 ساعة'
      },
      {
        titleEn: 'Salary Modification for WPS Compliance',
        titleAr: 'تعديل الراتب لنظام حماية الأجور (WPS)',
        descEn: 'Updating base salary or allowances to reconcile bank transfers with ministry records.',
        descAr: 'تحديث الراتب الأساسي والبدلات لمطابقة التحويلات المصرفية ومنع الحظر.',
        typingFee: 'AED 80 - 140',
        govtFee: 'AED 100',
        timeEn: '24 Hours',
        timeAr: '24 ساعة'
      }
    ],
    company: [
      {
        titleEn: 'New Establishment File Opening & Update',
        titleAr: 'فتح وتحديث ملف منشأة في وزارة العمل',
        descEn: 'Register newly licensed companies, setup E-Signature cards and assign PRO credentials.',
        descAr: 'تسجيل المنشآت الجديدة، تفعيل بطاقة التوقيع الإلكتروني وتفويض المندوب.',
        typingFee: 'AED 150 - 300',
        govtFee: 'AED 750 - 2,200',
        timeEn: '24 - 48 Hours',
        timeAr: '24 - 48 ساعة'
      },
      {
        titleEn: 'Electronic Quota Application & Increase',
        titleAr: 'طلب وتعديل كوتة العمالة للشركة',
        descEn: 'MOHRE employee visa quota expansion based on office area, project contracts, and Emiratisation.',
        descAr: 'زيادة سقف تصاريح العمل حسب مساحة المكتب ومشاريع الشركة ونسب التوطين.',
        typingFee: 'AED 140 - 280',
        govtFee: 'AED 200 - 500',
        timeEn: '24 - 72 Hours',
        timeAr: '24 - 72 ساعة'
      }
    ],
    cases: [
      {
        titleEn: 'Work Permit Cancellation & Settlement',
        titleAr: 'إلغاء تصريح العمل والتسوية الودية',
        descEn: 'Official cancellation preparation upon resignation, contract termination, or end-of-service.',
        descAr: 'إلغاء تصريح العمل للموظف المستقيل أو المنتهي عقده مع توثيق المخالصة.',
        typingFee: 'AED 90 - 160',
        govtFee: 'AED 100 - 250',
        timeEn: '24 Hours',
        timeAr: '24 ساعة'
      },
      {
        titleEn: 'Labour Case Documentation & Clarification',
        titleAr: 'تجهيز وثائق ومذكرات القضايا العمالية',
        descEn: 'Accurate filing of clarifications, dispute documentation, and employee records for MOHRE mediation.',
        descAr: 'تجهيز المذكرات والمستندات لتقديمها لجلسات التوفيق والتسوية في وزارة العمل.',
        typingFee: 'AED 150 - 350',
        govtFee: 'AED 0 - 150',
        timeEn: '24 - 48 Hours',
        timeAr: '24 - 48 ساعة'
      }
    ]
  };

  return (
    <section id="tasheel" className="py-20 bg-[#070A14] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isAr ? 'منظومة تسهيل ووزارة الموارد البشرية' : 'TASHEEL / MOHRE CORPORATE LABOUR HUB'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isAr ? 'معاملات وتصاريح العمل للشركات' : 'Corporate Labour & Tasheel Services'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {isAr
                ? 'إدارة متكاملة لتصاريح العمل، صياغة عقود العمل الموحدة، تعديلات نظام حماية الأجور (WPS)، وفتح وتجديد بطاقات المنشأة.'
                : 'Full-spectrum corporate labour administration: electronic work permits, WPS contract amendments, company quota expansions, and PRO support.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#072617] border border-slate-800 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {contentMap[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#072617] border border-amber-500/20 p-6 flex flex-col justify-between space-y-6 hover:border-amber-400 transition-all shadow-xl hover:shadow-emerald-950/50 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">
                    MOHRE COMPLIANT
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{isAr ? item.timeAr : item.timeEn}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">{isAr ? 'رسوم الطباعة والتدقيق:' : 'Typing & Audit Fee:'}</span>
                    <span className="font-mono font-bold text-amber-400">{item.typingFee}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] border-t border-slate-800/60 pt-1.5">
                    <span className="text-slate-500">{isAr ? 'الرسوم الحكومية التقديرية:' : 'Gov Ministry Fee:'}</span>
                    <span className="font-mono text-slate-300">{item.govtFee}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenAppointment('tasheel')}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500 hover:text-slate-950 border border-slate-700 hover:border-amber-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isAr ? 'بدء معاملة تسهيل' : 'Start Tasheel Transaction'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Company Classification Fee Notice */}
        <div className="p-4 rounded-2xl bg-amber-500/10[0.05] border border-amber-500/20 flex items-start gap-3 text-xs text-slate-300">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {isAr
              ? 'ملاحظة للمنشآت: تختلف الرسوم الحكومية لتصاريح العمل في وزارة الموارد البشرية والتوطين حسب تصنيف المنشأة (الفئة 1، الفئة 2، الفئة 3) ونسب التوطين والمستوى المهاري للموظف. أتعاب الطباعة تظل ثابتة وشفافة.'
              : 'Corporate Notice: Official MOHRE government fees for work permits vary significantly based on company tier classification (Category 1, 2, or 3), Emiratisation compliance, and employee skill level. Sanad typing fees remain fixed and fully transparent.'}
          </p>
        </div>

      </div>
    </section>
  );
}
