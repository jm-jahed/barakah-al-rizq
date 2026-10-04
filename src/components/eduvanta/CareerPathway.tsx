'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const CareerPathway: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  const [activePathway, setActivePathway] = useState<string>('pm');

  const pathways = [
    {
      id: 'pm',
      title: language === 'ar' ? 'مسار إدارة المشاريع' : 'Project Management Pathway',
      current: language === 'ar' ? 'مهندس موقع أو منسق مشاريع' : 'Site Engineer / Project Coordinator',
      gap: language === 'ar' ? 'ضعف أطر الأجايل وحوكمة المخاطر والتحكم بالتكاليف' : 'Lack of Agile Governance, Budget Control & Procurement Rigor',
      cert: language === 'ar' ? 'شهادة ممارس إدارة المشاريع (ECPP)' : 'Certified Project Practitioner (ECPP)',
      application: language === 'ar' ? 'إدارة ميزانيات بملايين الدراهم في البنية التحتية والتقنية' : 'Leading Multi-Million AED UAE Infrastructure & Tech Initiatives',
      outcome: language === 'ar' ? 'الترقي لمنصب رئيس مشاريع أول أو مدير مكتب PMO' : 'Promotion to Senior Project Lead / Head of PMO (+35% Pay Scale)',
      courseId: 'pm-prep'
    },
    {
      id: 'leadership',
      title: language === 'ar' ? 'مسار القيادة التنفيذية' : 'Executive Leadership Pathway',
      current: language === 'ar' ? 'مدير قسم أو رئيس وحدة تشغيلية' : 'Department Head / Senior Operational Manager',
      gap: language === 'ar' ? 'محدودية الحضور القيادي وإدارة الأرباح والخسائر الشاملة' : 'Limited Boardroom Presence & Holistic P&L Stewardship',
      cert: language === 'ar' ? 'دبلوم القيادة والإدارة التنفيذية (EELD)' : 'Executive Leadership Diploma (EELD)',
      application: language === 'ar' ? 'صياغة الاستراتيجيات وقيادة التحول المؤسسي لفرق الخليج' : 'Enterprise Strategy Formulation & Cross-Cultural GCC Leadership',
      outcome: language === 'ar' ? 'التعيين في منصب نائب رئيس تنفيذي أو مدير عام' : 'Direct C-Suite / VP Succession & Board Sub-Committee Appointment',
      courseId: 'leadership-exec'
    },
    {
      id: 'finance',
      title: language === 'ar' ? 'مسار التحليل والمالية المؤسسية' : 'Corporate Finance Pathway',
      current: language === 'ar' ? 'محاسب أول أو محلل مالي مبتدئ' : 'Senior Accountant / Junior Financial Analyst',
      gap: language === 'ar' ? 'غياب مهارات النمذجة المتقدمة وقوانين ضريبة الشركات' : 'Absence of DCF Modeling, M&A Structuring & UAE Corporate Tax',
      cert: language === 'ar' ? 'شهادة المحلل المالي المؤسسي (ECFA)' : 'Certified Financial Analyst (ECFA)',
      application: language === 'ar' ? 'بناء نماذج مالية ثلاثية لتقييم صفقات الاستحواذ' : 'Dynamic 3-Statement Modeling & Board Investment Defense',
      outcome: language === 'ar' ? 'الترقي لمنصب مدير التخطيط المالي (FP&A) أو مستشار استثمار' : 'Promotion to Head of FP&A / Senior Investment Strategist',
      courseId: 'corp-finance'
    },
    {
      id: 'hr',
      title: language === 'ar' ? 'مسار الموارد البشرية الاستراتيجية' : 'Strategic HR Pathway',
      current: language === 'ar' ? 'أخصائي توظيف أو مسؤول شؤون موظفين' : 'HR Officer / Talent Acquisition Specialist',
      gap: language === 'ar' ? 'نقص الخبرة في لوائح التوطين وتحليلات الأداء المتقدمة' : 'Gaps in Emiratization Strategy, MoHRE Compliance & People Analytics',
      cert: language === 'ar' ? 'شهادة محترف الموارد البشرية (ECHRP)' : 'Certified HR Professional (ECHRP)',
      application: language === 'ar' ? 'إعادة هيكلة سياسات الاستقطاب وحوكمة المكافآت المؤسسية' : 'Workforce Planning, Emiratization Audits & KPI Restructuring',
      outcome: language === 'ar' ? 'تولي منصب رئيس الموارد البشرية أو مدير العمليات المؤسسية' : 'Appointment as Head of People Operations / VP of HR',
      courseId: 'hr-management'
    }
  ];

  const currentPathway = pathways.find((p) => p.id === activePathway) || pathways[0];

  return (
    <section id="pathways" className="bg-[#07090E] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.pathway.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.pathway.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.pathway.subtitle}
          </p>
        </div>

        {/* Pathway Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {pathways.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePathway(p.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePathway === p.id
                  ? 'bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#07090E] shadow-lg shadow-[#E5C378]/20 ring-1 ring-[#E5C378]'
                  : 'bg-[#0D1118] border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* 5-Stage Visual Progression Line */}
        <div className="bg-[#0D1118] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {/* Step 1: Current Baseline */}
            <div className="p-5 rounded-2xl bg-[#11161F] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">
                  {t.pathway.step1}
                </div>
                <div className="text-sm font-bold text-slate-200 mb-2">
                  {currentPathway.current}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-white/5">
                {t.pathway.step1Sub}
              </div>
            </div>

            {/* Step 2: Skill Gap */}
            <div className="p-5 rounded-2xl bg-[#11161F] border border-amber-500/20 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono font-bold text-[#E5C378] uppercase mb-2">
                  {t.pathway.step2}
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-2">
                  {currentPathway.gap}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-white/5">
                {t.pathway.step2Sub}
              </div>
            </div>

            {/* Step 3: Certification */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#11161F] to-[#151D2A] border border-[#E5C378]/50 ring-1 ring-[#E5C378]/20 flex flex-col justify-between shadow-lg shadow-[#E5C378]/5">
              <div>
                <div className="text-[11px] font-mono font-bold text-[#E5C378] uppercase mb-2">
                  {t.pathway.step3}
                </div>
                <div className="text-sm font-bold text-white mb-2">
                  {currentPathway.cert}
                </div>
              </div>
              <div className="text-[11px] text-slate-300 pt-3 border-t border-white/10">
                {t.pathway.step3Sub}
              </div>
            </div>

            {/* Step 4: Practical Application */}
            <div className="p-5 rounded-2xl bg-[#11161F] border border-indigo-500/20 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono font-bold text-indigo-400 uppercase mb-2">
                  {t.pathway.step4}
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-2">
                  {currentPathway.application}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-white/5">
                {t.pathway.step4Sub}
              </div>
            </div>

            {/* Step 5: Executive Advancement */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-[#11161F] border border-emerald-500/40 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase mb-2">
                  {t.pathway.step5}
                </div>
                <div className="text-sm font-bold text-emerald-300 mb-2">
                  {currentPathway.outcome}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 pt-3 border-t border-white/5">
                {t.pathway.step5Sub}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              {language === 'ar'
                ? 'جميع المسارات معتمدة وتتضمن ورش عمل تطبيقية ودراسات حالة إماراتية.'
                : 'All developmental pathways include hands-on case simulations and executive mentoring.'}
            </div>

            <a
              href="#enroll"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/20 transition-all cursor-pointer"
            >
              <span>{language === 'ar' ? 'الالتحاق بهذا المسار' : 'Enroll in This Pathway'}</span>
              <span className={isRtl ? 'rotate-180' : ''}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
