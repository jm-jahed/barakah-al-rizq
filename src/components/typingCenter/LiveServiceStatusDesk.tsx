'use client';

import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface LiveServiceStatusDeskProps {
  lang: Language;
}

interface DemoTrackResult {
  refNumber: string;
  serviceNameEn: string;
  serviceNameAr: string;
  authorityEn: string;
  authorityAr: string;
  applicant: string;
  submissionDate: string;
  currentStage: 'submitted' | 'review' | 'processing' | 'completed' | 'action_required';
  estimatedCompletionEn: string;
  estimatedCompletionAr: string;
  notesEn: string;
  notesAr: string;
}

const SAMPLE_DATABASE: Record<string, DemoTrackResult> = {
  'UAE-88219': {
    refNumber: 'UAE-88219',
    serviceNameEn: 'Emirates ID Renewal (Expedited Typing)',
    serviceNameAr: 'تجديد بطاقة الهوية الإماراتية (المسار السريع)',
    authorityEn: 'Federal Authority for Identity & Citizenship (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية',
    applicant: 'A. Al-Suwaidi',
    submissionDate: 'Today, 09:14 AM',
    currentStage: 'completed',
    estimatedCompletionEn: 'Card Printed & Dispatched to Courier',
    estimatedCompletionAr: 'تمت طباعة البطاقة وتسليمها للشحن',
    notesEn: 'Digital E-ID active in ICP App. Physical card delivery scheduled.',
    notesAr: 'الهوية الرقمية مفعلة بتطبيق الهيئة، وجارٍ تسليم البطاقة عبر الشحن.'
  },
  'DXB-VISA-402': {
    refNumber: 'DXB-VISA-402',
    serviceNameEn: 'Inside-Country Residence Visa Status Change',
    serviceNameAr: 'تعديل وضع التأشيرة داخل الدولة',
    authorityEn: 'GDRFA Dubai (Amer Service)',
    authorityAr: 'الإدارة العامة للإقامة وشؤون الأجانب - دبي',
    applicant: 'Elena Rostova',
    submissionDate: 'Today, 11:30 AM',
    currentStage: 'processing',
    estimatedCompletionEn: 'Approval Expected within 2-4 Hours',
    estimatedCompletionAr: 'الموافقة متوقعة خلال 2-4 ساعات عمل',
    notesEn: 'Application verified with GDRFA. Medical fitness test scheduled for tomorrow.',
    notesAr: 'تم تدقيق الطلب ورفعه للنظام. موعد الفحص الطبي محجوز للغد.'
  },
  'MOHRE-5519': {
    refNumber: 'MOHRE-5519',
    serviceNameEn: 'Corporate Work Permit & Offer Letter Submission',
    serviceNameAr: 'تصريح عمل جديد للمنشأة وعرض عمل',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MOHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين',
    applicant: 'Apex Logistics LLC (Candidate: R. Verma)',
    submissionDate: 'Yesterday, 04:45 PM',
    currentStage: 'review',
    estimatedCompletionEn: 'Under Final Tasheel Labor Review',
    estimatedCompletionAr: 'قيد المراجعة النهائية في نظام تسهيل',
    notesEn: 'Electronic signature verified. Waiting for quota voucher issuance.',
    notesAr: 'التوقيع الإلكتروني معتمد، بانتظار إشعار اعتماد الكوتة.'
  },
  'EID-784-902': {
    refNumber: 'EID-784-902',
    serviceNameEn: 'First-Time Emirates ID & Biometrics Coordination',
    serviceNameAr: 'إصدار هوية أول مرة وتنسيق البصمة',
    authorityEn: 'ICP UAE',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية',
    applicant: 'Marcus Vance',
    submissionDate: '08 Sept 2026',
    currentStage: 'action_required',
    estimatedCompletionEn: 'Biometric Capture Appointment Pending',
    estimatedCompletionAr: 'بانتظار حضور موعد البصمة',
    notesEn: 'Biometric appointment booked for Thursday 10:00 AM at ICP Happiness Center.',
    notesAr: 'موعد البصمة مؤكد يوم الخميس 10:00 ص في مركز سعادة المتعاملين.'
  }
};

export default function LiveServiceStatusDesk({ lang }: LiveServiceStatusDeskProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [inputQuery, setInputQuery] = useState('UAE-88219');
  const [activeRecord, setActiveRecord] = useState<DemoTrackResult | null>(SAMPLE_DATABASE['UAE-88219']);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      const clean = inputQuery.trim().toUpperCase();
      if (SAMPLE_DATABASE[clean]) {
        setActiveRecord(SAMPLE_DATABASE[clean]);
      } else {
        // Fallback demo generator for any entered string
        setActiveRecord({
          refNumber: clean || 'UAE-SAMPLE-01',
          serviceNameEn: 'Government Application Typing & Audit',
          serviceNameAr: 'طباعة وتدقيق معاملة حكومية',
          authorityEn: 'Official UAE Authority',
          authorityAr: 'الجهة الحكومية المعنية',
          applicant: 'Verified Client Record',
          submissionDate: 'Recent Submission',
          currentStage: 'processing',
          estimatedCompletionEn: 'Standard SLA in Progress',
          estimatedCompletionAr: 'جارٍ المتابعة وفق الإجراء المعتمد',
          notesEn: 'Draft processed and synchronized with official government electronic filing desk.',
          notesAr: 'تم تجهيز الطلب ومزامنته مع النظام الحكومي الرسمي.'
        });
      }
    }, 450);
  };

  const getStageBadge = (stage: DemoTrackResult['currentStage']) => {
    switch (stage) {
      case 'completed':
        return {
          labelEn: 'Approved & Completed',
          labelAr: 'تمت الموافقة والإنجاز',
          color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
        };
      case 'processing':
        return {
          labelEn: 'In Active Processing',
          labelAr: 'قيد المعالجة والإنجاز',
          color: 'bg-amber-500/10 border-amber-500/30 text-amber-400'
        };
      case 'review':
        return {
          labelEn: 'Under Official Review',
          labelAr: 'قيد التدقيق الحكومي',
          color: 'bg-amber-500/10 border-amber-500/30 text-amber-400'
        };
      case 'action_required':
        return {
          labelEn: 'Action Required (Biometrics / Slip)',
          labelAr: 'إجراء مطلوب (حضور البصمة)',
          color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
        };
      default:
        return {
          labelEn: 'Application Submitted',
          labelAr: 'تم استلام الطلب',
          color: 'bg-slate-500/10 border-slate-500/30 text-slate-400'
        };
    }
  };

  return (
    <section id="tracking" className="py-20 bg-[#070A14] relative overflow-hidden border-b border-amber-500/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-amber-600/[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>{isAr ? 'منصة تتبع المعاملات المباشرة' : 'LIVE APPLICATION STATUS TRACKER'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'تتبع حالة معاملتك في ثوانٍ' : 'Track Your Government Application'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr 
              ? 'أدخل رقم المرجع الخاص بمعاملتك للاطلاع على مرحلة الإنجاز وتحديثات الجهات الحكومية لحظة بلحظة.'
              : 'Enter your Sanad reference number to inspect live application milestones, biometric dates, and authority dispatch.'}
          </p>
        </div>

        {/* Interactive Search Console */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#072617] border border-amber-500/25 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl">
            
            {/* Search Input Form */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder={isAr ? 'أدخل رقم المرجع (مثال: UAE-88219)' : 'Enter Reference # (e.g. UAE-88219)'}
                  className="w-full pl-12 pr-4 rtl:pl-4 rtl:pr-12 py-3.5 rounded-2xl bg-white/[0.04] border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 font-mono text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isSearching ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <>
                    <span>{isAr ? 'استعلام فوري' : 'Lookup Status'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Pre-fill Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-slate-800 text-xs">
              <span className="text-slate-400 font-mono text-[11px]">
                {isAr ? 'نماذج للتجربة:' : 'Sample Reference Codes:'}
              </span>
              {Object.keys(SAMPLE_DATABASE).map((ref) => (
                <button
                  key={ref}
                  type="button"
                  onClick={() => {
                    setInputQuery(ref);
                    setActiveRecord(SAMPLE_DATABASE[ref]);
                  }}
                  className={`px-3 py-1 rounded-lg border font-mono text-[11px] transition-all ${
                    activeRecord?.refNumber === ref
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-white/[0.02] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {ref}
                </button>
              ))}
            </div>

            {/* Display Active Search Result Card */}
            {activeRecord && (
              <div className="space-y-6">
                
                {/* Result Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-amber-400 font-bold">
                        REF #{activeRecord.refNumber}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getStageBadge(activeRecord.currentStage).color}`}>
                        {isAr 
                          ? getStageBadge(activeRecord.currentStage).labelAr 
                          : getStageBadge(activeRecord.currentStage).labelEn}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {isAr ? activeRecord.serviceNameAr : activeRecord.serviceNameEn}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isAr ? activeRecord.authorityAr : activeRecord.authorityEn}
                    </p>
                  </div>

                  <div className="text-left rtl:text-right">
                    <p className="text-[11px] text-slate-400 font-mono">{isAr ? 'تاريخ التقديم' : 'Submission Date'}</p>
                    <p className="text-xs font-bold text-slate-200">{activeRecord.submissionDate}</p>
                  </div>
                </div>

                {/* 4-Stage Progress Visualizer */}
                <div className="relative pt-2 pb-4">
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-mono">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <span className="text-emerald-400 font-bold">
                        {isAr ? '1. استلام الطلب' : '1. Submitted'}
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        ['review', 'processing', 'completed', 'action_required'].includes(activeRecord.currentStage)
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        ✓
                      </div>
                      <span className="text-slate-300">
                        {isAr ? '2. تدقيق المستندات' : '2. Audit'}
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        ['processing', 'completed', 'action_required'].includes(activeRecord.currentStage)
                          ? 'bg-amber-500 text-slate-950 animate-pulse'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {['processing', 'completed'].includes(activeRecord.currentStage) ? '✓' : '3'}
                      </div>
                      <span className="text-amber-400 font-bold">
                        {isAr ? '3. معالجة النظام' : '3. Processing'}
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        activeRecord.currentStage === 'completed'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {activeRecord.currentStage === 'completed' ? '✓' : '4'}
                      </div>
                      <span className={activeRecord.currentStage === 'completed' ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        {isAr ? '4. الإنجاز والتسليم' : '4. Completed'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Milestones & Live Notes Box */}
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-amber-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isAr ? 'ملاحظة التتبع الفوري' : 'Live Status Milestone Note:'}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {isAr ? activeRecord.notesAr : activeRecord.notesEn}
                  </p>
                  <p className="text-[11px] font-mono text-emerald-400 pt-1">
                    {isAr ? `الحالة التقديرية: ${activeRecord.estimatedCompletionAr}` : `ETA: ${activeRecord.estimatedCompletionEn}`}
                  </p>
                </div>

              </div>
            )}

            {/* High-Trust Transparency Note */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>
                {isAr
                  ? 'هذه المنصة مخصصة لتتبع المعاملات عبر مركزنا. يتم إصدار الموافقات الرسمية من الجهات الحكومية المختصة.'
                  : 'Demonstration service desk tracking. Formal decision making remains with designated UAE government authorities.'}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
