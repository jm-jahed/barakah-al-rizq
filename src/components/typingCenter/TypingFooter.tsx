'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  Globe2 
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface TypingFooterProps {
  lang: Language;
  onOpenAppointment: () => void;
}

export default function TypingFooter({ lang, onOpenAppointment }: TypingFooterProps) {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#03060C] border-t border-amber-500/15 text-slate-300 text-xs">
      
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left rtl:md:text-right">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isAr ? 'جاهز لبدء معاملتك الحكومية اليوم؟' : 'Ready to streamline your UAE government paperwork?'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr
                ? 'فريقنا جاهز لمراجعة مستنداتك وإنجاز طلبك بأعلى سرعة وشفافية.'
                : 'Our certified typing desk is standing by for document audits, urgent status changes, and Emirates ID prints.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all cursor-pointer"
            >
              {isAr ? 'حجز موعد / استشارة' : 'Book In-Centre Appointment'}
            </button>
            <a
              href="https://wa.me/971507719900?text=Hello%20Sanad%20Government%20Services,%20I%20need%20assistance%20today."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
            >
              <span>{isAr ? 'واتساب مباشر' : 'Instant WhatsApp'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-sans">
                  {isAr ? 'سند للخدمات الحكومية' : 'SANAD GOV HUB'}
                </span>
                <p className="text-[10px] text-slate-400 font-mono">
                  {isAr ? 'المركز الرقمي المعتمد لطباعة المعاملات' : 'Certified UAE Government Services Platform'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isAr
                ? 'مركز سند هو منصتك الرقمية الموثوقة لطباعة وإنجاز معاملات الإقامة، الهوية الإماراتية، عقود العمل بتسهيل، توثيق إيجاري، والترجمة والتصديقات القانونية.'
                : 'Sanad is your trusted digital gateway for UAE residency visas, Emirates ID typing, Tasheel labour permits, Ejari registrations, and sworn MOFA-attested translations.'}
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Sheikh Zayed Road, Trade Centre Area, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Hamdan Bin Mohammed Street, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+971 4 399 8820 / +971 50 771 9900</span>
              </div>
            </div>
          </div>

          {/* Quick Services Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
              {isAr ? 'خدمات الأفراد والعائلات' : 'Individual & Family'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#emirates-id" className="hover:text-amber-300 transition-colors">{isAr ? 'تجديد بطاقة الهوية' : 'Emirates ID Renewal'}</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'تجديد الإقامة' : 'Residence Visa Renewal'}</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'كفالة الأسرة والأبناء' : 'Family Sponsorship'}</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'تعديل الوضع داخل الدولة' : 'In-Country Status Change'}</a></li>
              <li><a href="#golden-visa" className="hover:text-amber-300 transition-colors">{isAr ? 'الإقامة الذهبية 10 سنوات' : 'Golden Visa Guidance'}</a></li>
            </ul>
          </div>

          {/* Corporate & B2B Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
              {isAr ? 'خدمات المنشآت والشركات' : 'Corporate & PRO'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#tasheel" className="hover:text-amber-300 transition-colors">{isAr ? 'تصاريح العمل (تسهيل)' : 'Work Permits (Tasheel)'}</a></li>
              <li><a href="#tasheel" className="hover:text-amber-300 transition-colors">{isAr ? 'عقود العمل ونظام حماية الأجور' : 'Labour Contracts & WPS'}</a></li>
              <li><a href="#corporate-pro" className="hover:text-amber-300 transition-colors">{isAr ? 'فتح وتجديد بطاقة المنشأة' : 'Establishment Cards'}</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'تجديد الرخص التجارية' : 'Trade License Renewal'}</a></li>
              <li><a href="#corporate-pro" className="hover:text-amber-300 transition-colors">{isAr ? 'عقود PRO للشركات' : 'Corporate PRO Retainers'}</a></li>
            </ul>
          </div>

          {/* Legal & Document Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
              {isAr ? 'الترجمة والتوثيق' : 'Legal & Documents'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'تصديق وزارة الخارجية (MOFA)' : 'MOFA Attestation'}</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'الترجمة القانونية المعتمدة' : 'Certified Legal Translation'}</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'توثيق عقود إيجاري (دبي)' : 'Ejari Attestation (DLD)'}</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">{isAr ? 'صياغة الوكالات القانونية' : 'Power of Attorney (POA)'}</a></li>
              <li><a href="#tracking" className="hover:text-amber-300 transition-colors">{isAr ? 'تتبع حالة المعاملة' : 'Track Application Status'}</a></li>
            </ul>
          </div>

        </div>

        {/* Global Legal & Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-400 space-y-3 leading-relaxed">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              {isAr
                ? 'إخلاء مسؤولية قانوني: الرسوم الحكومية الرسمية، متطلبات الأهلية، والمدد الزمنية قابلة للتحديث وفق قرارات الجهات والوزارات المعنية في دولة الإمارات العربية المتحدة. رسوم الطباعة والخدمة المعروضة من المركز منفصلة تماماً عن الرسوم الحكومية المقررة. الموافقة النهائية وإصدار التأشيرات وبطاقات الهوية يعود حصراً للجهات الحكومية المختصة (الهيئة الاتحادية للهوية والجنسية، الإدارة العامة للإقامة وشؤون الأجانب، وزارة الموارد البشرية والتوطين، ووزارة الخارجية).'
                : 'Regulatory & Fee Disclaimer: Official UAE government statutory fees, eligibility criteria, and processing times are subject to formal ministerial adjustments. Center typing and documentation support fees are separate from mandatory government authority charges. Final application approval, visa stamping, and Emirates ID printing remain the exclusive legal jurisdiction of the designated UAE authorities (ICP, GDRFA, MOHRE, MOFA, and DLD).'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-slate-900 text-slate-400 text-[11px]">
            <p>© 2026 Sanad Digital Government Services Hub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/work/typing-center-government-services" className="hover:text-amber-300">Privacy Policy</Link>
              <span>•</span>
              <Link href="/work/typing-center-government-services" className="hover:text-amber-300">Terms of Service</Link>
              <span>•</span>
              <Link href="/work/typing-center-government-services" className="hover:text-amber-300">Fee Transparency Standard</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
