'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Download,
  Calendar
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface CorporateProDashboardProps {
  lang: Language;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function CorporateProDashboard({
  lang,
  onOpenAppointment
}: CorporateProDashboardProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<'employees' | 'renewals' | 'quota'>('renewals');

  const demoEmployees = [
    { name: 'Dr. Tariq Al-Nuaimi', role: 'Chief Medical Officer', visaExp: '18 Nov 2027', eidStatus: 'Active', wpsStatus: 'Matched' },
    { name: 'Marcus Vance', role: 'VP Engineering', visaExp: '12 Oct 2026', eidStatus: 'Renewal Required (24 Days)', wpsStatus: 'Matched' },
    { name: 'Elena Rostova', role: 'Operations Director', visaExp: '04 Dec 2026', eidStatus: 'Active', wpsStatus: 'Matched' },
    { name: 'Zaid Al-Husseini', role: 'Senior Architect', visaExp: '15 Jan 2027', eidStatus: 'Active', wpsStatus: 'Matched' },
  ];

  return (
    <section id="corporate-pro" className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Building2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'منصة خدمات الشركات والعلاقات العامة' : 'B2B CORPORATE PRO CONSOLE'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isAr ? 'إدارة معاملات الشركات وإقامات الموظفين' : 'Corporate PRO & Visa Management'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {isAr
                ? 'لوحة تحكم تفاعلية مخصصة للمنشآت والشركات لمتابعة إقامات الموظفين، تنبيهات انتهاء الرخص، ونسب التوطين والامتثال لنظام الأجور.'
                : 'Interactive corporate operations hub designed for UAE enterprises, SMEs, and HR departments to streamline employee visa renewals, quota allocations, and WPS compliance.'}
            </p>
          </div>

          <button
            onClick={() => onOpenAppointment('corporate')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all self-start lg:self-auto"
          >
            <span>{isAr ? 'طلب عقد خدمات PRO للشركات' : 'Retain Sanad Corporate PRO Desk'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Interactive Dashboard Frame */}
        <div className="rounded-3xl bg-[#072617] border border-amber-500/25 p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl space-y-6">
          
          {/* Top Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-800">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                {isAr ? 'إجمالي الموظفين المكفولين' : 'Sponsored Headcount'}
              </span>
              <p className="text-2xl font-black text-white font-mono mt-1">48 Staff</p>
              <span className="text-[10px] text-emerald-400 font-mono">● All Visas Valid</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                {isAr ? 'معاملات تنتهي خلال 30 يوماً' : 'Expiring &lt; 30 Days'}
              </span>
              <p className="text-2xl font-black text-amber-400 font-mono mt-1">04 Action Items</p>
              <span className="text-[10px] text-amber-300 font-mono">● 2 Visas • 2 IDs</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                {isAr ? 'كوتة العمل المستهلكة' : 'MOHRE Quota Utilized'}
              </span>
              <p className="text-2xl font-black text-amber-400 font-mono mt-1">82% (41/50)</p>
              <span className="text-[10px] text-amber-300 font-mono">● 9 Slots Remaining</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                {isAr ? 'امتثال حماية الأجور WPS' : 'WPS Wage Protection'}
              </span>
              <p className="text-2xl font-black text-emerald-400 font-mono mt-1">100% Green</p>
              <span className="text-[10px] text-emerald-300 font-mono">● Zero Violations</span>
            </div>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              {[
                { id: 'renewals', labelEn: 'Active Renewal Radar', labelAr: 'رادار التجديدات العاجلة' },
                { id: 'employees', labelEn: 'Staff Residency Register', labelAr: 'سجل إقامات الكادر' },
                { id: 'quota', labelEn: 'Company Establishment Profile', labelAr: 'ملف المنشأة والرخصة' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-amber-500/20 border border-amber-400 text-amber-300'
                      : 'bg-white/[0.02] border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? tab.labelAr : tab.labelEn}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-slate-400">
              {isAr ? 'منشأة: كابيتال فيرتكس ش.ذ.م.م' : 'Client: Capital Vertex LLC (Demo)'}
            </span>
          </div>

          {/* Table / Content Area */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-black/20">
            <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
                  <th className="py-3.5 px-4">{isAr ? 'اسم الموظف / الوثيقة' : 'Employee / Document'}</th>
                  <th className="py-3.5 px-4">{isAr ? 'المسمى الوظيفي' : 'Designation'}</th>
                  <th className="py-3.5 px-4">{isAr ? 'تاريخ الانتهاء' : 'Expiry Date'}</th>
                  <th className="py-3.5 px-4">{isAr ? 'حالة الهوية / التأشيرة' : 'Residency Status'}</th>
                  <th className="py-3.5 px-4 text-center">{isAr ? 'الإجراء' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {demoEmployees.map((emp, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                      {emp.name}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 whitespace-nowrap">
                      {emp.role}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300 whitespace-nowrap">
                      {emp.visaExp}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                        emp.eidStatus.includes('Renewal')
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      }`}>
                        {emp.eidStatus.includes('Renewal') ? (
                          <AlertTriangle className="w-3 h-3 text-amber-400" />
                        ) : (
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        )}
                        <span>{emp.eidStatus}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => onOpenAppointment('eid-renewal')}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition-all cursor-pointer"
                      >
                        {isAr ? 'بدء التجديد' : 'Start Renewal'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* High-Trust Demo Notice */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'عقود إدارة علاقات عامة (PRO) شهرية وسنوية للمنشآت في دبي وكافة الإمارات' : 'Monthly & Annual Corporate PRO Retainer Contracts for UAE Companies'}</span>
            </span>
            <span className="font-mono text-[11px] text-amber-400">
              {isAr ? 'تحديث تلقائي لحماية الأجور' : 'Real-time WPS sync support'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
