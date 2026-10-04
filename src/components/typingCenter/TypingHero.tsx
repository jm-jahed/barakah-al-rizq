'use client';

import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  FileCheck2, 
  CreditCard, 
  Briefcase, 
  Building, 
  FileText, 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface TypingHeroProps {
  lang: Language;
  onOpenAppointment: () => void;
  onSelectCategory: (category: string) => void;
}

export default function TypingHero({
  lang,
  onOpenAppointment,
  onSelectCategory
}: TypingHeroProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const floatingModules = [
    { id: 'visa', icon: FileCheck2, nameEn: 'Visa & Residency', nameAr: 'التأشيرات والإقامة', statusEn: 'Active GDRFA/ICP', statusAr: 'جاهز للإصدار' },
    { id: 'emirates-id', icon: CreditCard, nameEn: 'Emirates ID Hub', nameAr: 'الهوية الإماراتية', statusEn: 'ICP Certified', statusAr: 'طباعة فورية' },
    { id: 'tasheel', icon: Briefcase, nameEn: 'Tasheel / MOHRE', nameAr: 'تسهيل والعمل', statusEn: 'Labour Permits', statusAr: 'تصاريح العمل' },
    { id: 'business', icon: Building, nameEn: 'Corporate PRO', nameAr: 'خدمات الشركات', statusEn: 'Trade Licenses', statusAr: 'الرخص والمنشآت' },
    { id: 'translation', icon: Globe2, nameEn: 'Legal Translation', nameAr: 'الترجمة والتصديقات', statusEn: 'MOJ & MOFA', statusAr: 'معتمد من العدل' },
    { id: 'ejari', icon: FileText, nameEn: 'Ejari & Property', nameAr: 'إيجاري والعقارات', statusEn: 'DLD Connected', statusAr: 'توثيق أراضي دبي' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-[#060913]">
      
      {/* UAE Architectural Geometric Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-600/[0.08] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-amber-500/10[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Primary Text Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left rtl:lg:text-right">
            
            {/* Government Digital Hub Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>
                {isAr 
                  ? 'المركز الرقمي للخدمات الحكومية في دولة الإمارات'
                  : 'UAE GOVERNMENT SERVICES • DIGITAL SERVICE CENTER'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              {isAr ? (
                <>
                  خدماتك الحكومية، <br />
                  <span className="bg-gradient-to-r from-amber-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">
                    بكل بساطة ودقة.
                  </span>
                </>
              ) : (
                <>
                  Government Services, <br />
                  <span className="bg-gradient-to-r from-amber-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">
                    Simplified.
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isAr
                ? 'طباعة دقيقة ومعاملات معتمدة للتأشيرات، بطاقة الهوية الإماراتية، عقود العمل، تأسيس الشركات، توثيق عقود إيجاري، والترجمة والتصديقات القانونية — تُنجز بشفافية تامة وبأعلى سرعة للمقيمين والشركات والعائلات.'
                : 'Professional typing, visa, Emirates ID, labour, business, and document services — handled accurately, transparently, and efficiently for UAE residents, families, and enterprises.'}
            </p>

            {/* Transparent Fee Promise Bar */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-amber-500/20 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-white">
                  {isAr ? 'الشفافية الكاملة في الرسوم:' : 'Total Fee Transparency:'}
                </span>
                <span className="text-slate-400">
                  {isAr ? 'الرسوم الحكومية مفصولة تماماً عن رسوم الخدمة' : 'Official Government Fees separated from Typing Fees'}
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                {isAr ? '0 أتعاب خفية' : '0 Hidden Charges'}
              </span>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 pt-2">
              <a
                href="#wizard"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>{isAr ? 'ابدأ معاملتك الآن' : 'Start a Service'}</span>
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/[0.05] border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-white/[0.09] hover:border-amber-500/40 hover:text-white transition-all"
              >
                <span>{isAr ? 'استعراض كافة الخدمات' : 'View All Services'}</span>
              </a>

              <a
                href="https://wa.me/971507719900?text=Hello%20Sanad%20Government%20Services,%20I%20would%20like%20to%20inquire%20about%20UAE%20typing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm hover:bg-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'تواصل عبر واتساب' : 'WhatsApp Us'}</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-center lg:text-left rtl:lg:text-right">
              <div>
                <p className="text-xl sm:text-2xl font-black text-white font-mono">100%</p>
                <p className="text-[11px] text-slate-400">
                  {isAr ? 'مطابقة للأنظمة الرسمية' : 'Gov Compliant Typing'}
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-400 font-mono">&lt; 30 Min</p>
                <p className="text-[11px] text-slate-400">
                  {isAr ? 'متوسط تجهيز الطلبات' : 'Avg Application Draft'}
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-400 font-mono">8 Emirates</p>
                <p className="text-[11px] text-slate-400">
                  {isAr ? 'تغطية كافة إمارات الدولة' : 'UAE Nationwide Reach'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column / Interactive Floating Service Command Module */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#072617]/90 to-[#072617]/95 border border-amber-500/25 p-6 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl space-y-5">
              
              {/* Card Header with Live Queue Pill */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">
                    {isAr ? 'لوحة الخدمات الحكومية المباشرة' : 'DIGITAL SERVICES CONSOLE'}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  LIVE DEMO
                </span>
              </div>

              {/* 6 Interactive Category Modules */}
              <div className="grid grid-cols-2 gap-3">
                {floatingModules.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectCategory(item.id)}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10[0.05] transition-all text-left rtl:text-right group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-mono text-emerald-400">
                          {isAr ? item.statusAr : item.statusEn}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {isAr ? item.nameAr : item.nameEn}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {isAr ? 'استعراض الرسوم والشروط' : 'Explore fees & criteria'}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Instant Application Status Tracking Strip */}
              <div className="pt-2">
                <a
                  href="#tracking"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-slate-900 to-[#072617]/90 border border-amber-500/30 flex items-center justify-between text-xs text-slate-200 hover:text-white hover:border-amber-500/60 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{isAr ? 'تتبع حالة طلبك برقم المرجع' : 'Track Active Application (Demo)'}</span>
                  </div>
                  <span className="font-mono text-amber-400 text-[11px] font-bold">
                    {isAr ? 'تتبع الآن ←' : 'Lookup →'}
                  </span>
                </a>
              </div>

              {/* Official Disclaimer Note */}
              <p className="text-[10px] text-slate-400 text-center leading-normal">
                {isAr
                  ? 'المركز معتمد لطباعة المعاملات وتجهيز الملفات للجهات الرسمية. الموافقة النهائية تخضع للجهات المختصة.'
                  : 'Authorized typing center for application preparation. Final approvals remain with official UAE government authorities.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
