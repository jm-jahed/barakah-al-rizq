'use client';

import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Clock, 
  FileCheck2, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  MessageSquare, 
  Calendar 
} from 'lucide-react';
import { Language, ServiceItem } from '@/data/typingCenterData';

interface ServiceDetailDrawerProps {
  service: ServiceItem | null;
  onClose: () => void;
  lang: Language;
  onOpenAppointment: (serviceId: string) => void;
}

export default function ServiceDetailDrawer({
  service,
  onClose,
  lang,
  onOpenAppointment
}: ServiceDetailDrawerProps) {
  if (!service) return null;

  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const handleWhatsAppInquiry = () => {
    const sName = isAr ? service.nameAr : service.nameEn;
    const msg = `Hello Sanad Government Services, I am inquiring about the requirements and fees for *${sName}*. Please assist me.`;
    window.open(`https://wa.me/971507719900?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#090D1A] border-l rtl:border-l-0 rtl:border-r border-amber-500/30 h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-2xl"
      >
        <div className="space-y-6">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase">
              {isAr ? service.categoryLabelAr : service.categoryLabelEn}
            </span>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-400 hover:text-white hover:border-amber-400 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Authority */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {isAr ? service.nameAr : service.nameEn}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Building2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{isAr ? service.authorityAr : service.authority}</span>
            </div>
          </div>

          {/* Full Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isAr ? service.descriptionAr : service.descriptionEn}
          </p>

          {/* Transparent Fee Structure Card */}
          <div className="p-5 rounded-3xl bg-[#072617] border border-amber-500/25 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-bold uppercase">
              <span>{isAr ? 'هيكلية الرسوم الشفافة' : 'TRANSPARENT FEE BREAKDOWN'}</span>
              <span className="text-slate-400">{isAr ? 'درهم إماراتي (AED)' : 'AED'}</span>
            </div>

            <div className="space-y-2 text-xs divide-y divide-slate-800/80 pt-1">
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-300">{isAr ? 'رسوم الطباعة والتدقيق في سند:' : 'Sanad Typing & Audit Fee:'}</span>
                <span className="font-mono font-bold text-amber-300">
                  AED {service.typingFeeMin} {service.typingFeeMax !== service.typingFeeMin ? `- ${service.typingFeeMax}` : ''}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-slate-300">{isAr ? 'الرسوم الحكومية الرسمية (تقديرية):' : 'Official Government Authority Fee:'}</span>
                  <p className="text-[10px] text-slate-500">{isAr ? 'تُسدد للوزارة المعنية' : 'Mandated official ministry fee'}</p>
                </div>
                <span className="font-mono text-white font-bold">
                  AED {service.govtFeeMin} {service.govtFeeMax !== service.govtFeeMin ? `- ${service.govtFeeMax}` : ''}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-400">{isAr ? 'متوسط مدة الإنجاز (SLA):' : 'Processing Timeline:'}</span>
                <span className="font-mono text-emerald-400">{isAr ? service.processingTimeAr : service.processingTimeEn}</span>
              </div>
            </div>
          </div>

          {/* Mandatory Requirements */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              {isAr ? 'المستندات والمتطلبات الإلزامية:' : 'Mandatory Document Requirements:'}
            </h4>
            <ul className="space-y-2">
              {(isAr ? service.requirementsAr : service.requirementsEn).map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Next Steps / Process Roadmap */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              {isAr ? 'خطوات تنفيذ المعاملة:' : 'Application Execution Steps:'}
            </h4>
            <div className="space-y-2">
              {(isAr ? service.nextStepsAr : service.nextStepsEn).map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-slate-800 text-xs text-slate-300">
                  <span className="font-mono text-amber-400 font-bold">{i + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* High-Trust Disclosure */}
          <div className="p-3.5 rounded-xl bg-amber-500/10[0.05] border border-amber-500/20 text-[11px] text-slate-400 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              {isAr
                ? 'تخضع الرسوم الحكومية ومتطلبات الأهلية لتحديثات الجهات الرسمية. القرار النهائي لإصدار التأشيرات وبطاقات الهوية يعود للجهات الحكومية المعنية.'
                : 'Statutory fees and requirements may vary based on applicant category and authority updates. Final decisions rest with respective UAE ministries.'}
            </p>
          </div>

        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenAppointment(service.id);
            }}
            className="w-full sm:flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
          >
            <span>{isAr ? 'تقديم هذه المعاملة الآن' : 'Start Application Now'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
