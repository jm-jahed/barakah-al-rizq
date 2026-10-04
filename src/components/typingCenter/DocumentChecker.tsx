'use client';

import React, { useState } from 'react';
import { 
  FileCheck, 
  CheckSquare, 
  Square, 
  Download, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Info
} from 'lucide-react';
import { Language, TYPING_SERVICES_DATA } from '@/data/typingCenterData';

interface DocumentCheckerProps {
  lang: Language;
}

export default function DocumentChecker({ lang }: DocumentCheckerProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [selectedServiceId, setSelectedServiceId] = useState<string>('residence-visa-renewal');
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  const activeService = TYPING_SERVICES_DATA.find((s) => s.id === selectedServiceId) || TYPING_SERVICES_DATA[0];
  const reqList = isAr ? activeService.requirementsAr : activeService.requirementsEn;

  const toggleCheck = (idx: number) => {
    setCheckedMap((prev) => ({
      ...prev,
      [`${selectedServiceId}-${idx}`]: !prev[`${selectedServiceId}-${idx}`]
    }));
  };

  const completedCount = reqList.filter((_, idx) => !!checkedMap[`${selectedServiceId}-${idx}`]).length;
  const progressPercent = Math.round((completedCount / (reqList.length || 1)) * 100);

  const handleSendChecklist = () => {
    const serviceName = isAr ? activeService.nameAr : activeService.nameEn;
    const items = reqList.map((r, i) => `${i + 1}. ${r}`).join('%0A');
    const message = `Hello Sanad Government Services, here is my document checklist for *${serviceName}*:%0A${items}%0AI have ${completedCount} of ${reqList.length} ready. Please verify my files.`;
    window.open(`https://wa.me/971507719900?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-[#04070E] border-b border-amber-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <FileCheck className="w-3.5 h-3.5" />
            <span>{isAr ? 'المدقق التفاعلي للوثائق' : 'DYNAMIC DOCUMENT CHECKER'}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'ما هي الأوراق المطلوبة لمعاملتك؟' : 'What Documents Do You Need?'}
          </h3>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'اختر الخدمة للتحقق من قائمة المستندات الرسمية الإلزامية وتجنب أخطاء أو تأخيرات الرفض لدى الجهات الحكومية.'
              : 'Select your transaction to inspect the exact checklist of mandatory files required by official UAE authorities before submission.'}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Checkbox List */}
          <div className="lg:col-span-8 bg-[#072617] border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Service Dropdown */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-amber-400 font-bold uppercase">
                {isAr ? 'اختر المعاملة لمعاينة المستندات المطلوبة:' : 'Select Transaction to Inspect Checklist:'}
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => {
                  setSelectedServiceId(e.target.value);
                  setCheckedMap({});
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-sm font-medium focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                {TYPING_SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id} className="bg-[#072617] text-white">
                    {isAr ? srv.nameAr : srv.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Checklist Items */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>{isAr ? 'قائمة التحقق الرسمية' : 'Mandatory Requirement Checklist'}</span>
                <span className="text-amber-400 font-bold">
                  {completedCount} / {reqList.length} {isAr ? 'جاهز' : 'Ready'}
                </span>
              </div>

              <div className="space-y-2">
                {reqList.map((req, idx) => {
                  const isChecked = !!checkedMap[`${selectedServiceId}-${idx}`];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleCheck(idx)}
                      className={`w-full p-3.5 rounded-xl border text-left rtl:text-right flex items-center justify-between gap-3 transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                          : 'bg-white/[0.02] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-500 flex-shrink-0" />
                        )}
                        <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through opacity-80' : ''}`}>
                          {req}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 flex-shrink-0">
                        {isChecked ? (isAr ? 'جاهز' : 'Ready') : (isAr ? 'مطلوب' : 'Required')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
              <button
                type="button"
                onClick={handleSendChecklist}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'إرسال القائمة لواتساب للتدقيق' : 'Send Checklist to WhatsApp Desk'}</span>
              </button>

              <p className="text-[11px] text-slate-400">
                {isAr ? 'نساعدك في تدقيق الملفات قبل السداد' : 'We review your files before fee payment'}
              </p>
            </div>

          </div>

          {/* Right Column: Readiness Score & Authority Guidelines */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#072617] to-[#072617] border border-amber-500/25 rounded-3xl p-6 space-y-6 shadow-xl">
            
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">
                {isAr ? 'معدل جاهزية الملف' : 'FILE READINESS SCORE'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white font-mono">{progressPercent}%</span>
                <span className="text-xs text-slate-400">
                  {completedCount === reqList.length ? (isAr ? 'جاهز للتقديم' : 'Ready to File') : (isAr ? 'قيد التجهيز' : 'In Progress')}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Authority Guideline Box */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-[11px]">
                <Info className="w-3.5 h-3.5" />
                <span>{isAr ? 'معايير الجهة الرسمية:' : 'Official Authority Rule:'}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {isAr ? activeService.whoNeedsItAr : activeService.whoNeedsItEn}
              </p>
            </div>

            {/* Privacy Compliance Pill */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>
                {isAr ? 'حماية مشددة لبيانات الجوازات والهوية' : 'Zero public storage of sensitive ID files'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
