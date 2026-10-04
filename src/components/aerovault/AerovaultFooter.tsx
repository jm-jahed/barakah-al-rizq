'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { AEROVAULT_BRAND } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

export const AerovaultFooter: React.FC = () => {
  const { lang } = useAerovaultLanguage();

  return (
    <footer className="bg-[#05060A] text-white pt-16 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/private-jet-charter" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E5C378] flex items-center justify-center text-black shadow-lg shadow-[#E5C378]/20">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                AERO<span className="text-[#E5C378]">VAULT</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              {lang === 'ar'
                ? 'إيروفولت — "سافر وفق جدولك الزمني الخاص، لا جداولهم." وساطة وتأجير طائرات خاصة فاخرة بدولة الإمارات لربط قادة الأعمال والمسافرين بأكثر من ٥,٠٠٠ مطار حول العالم.'
                : 'AEROVAULT — "Private Aviation, Precisely Arranged." Premium UAE private jet charter broker connecting business executives, HNWIs, and diplomatic delegations to 5,000+ global airports.'}
            </p>
            <div className="text-xs font-mono text-[#E5C378] space-y-1.5 pt-2">
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{AEROVAULT_BRAND.phone}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{AEROVAULT_BRAND.email}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{lang === 'ar' ? 'صالات كبار الشخصيات بمطاري آل مكتوم DWC دبي والبطين بأبوظبي' : 'ExecuJet FBO Terminal, DWC Airport, Dubai • Al Bateen FBO, Abu Dhabi'}</span>
              </p>
            </div>
          </div>

          {/* Column Fleet */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest mb-4">
              {lang === 'ar' ? 'فئات الأسطول' : 'FLEET CATEGORIES'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><a href="#fleet" className="hover:text-white transition-colors">{lang === 'ar' ? 'إمبراير فينوم ٣٠٠ إي (نفاثة خفيفة)' : 'Phenom 300E (Light Jet)'}</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">{lang === 'ar' ? 'بومباردييه تشالنجر ٦٥٠ (متوسطة)' : 'Challenger 650 (Super Mid)'}</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">{lang === 'ar' ? 'بومباردييه جلوبال ٧٥٠٠ (فائقة المدى)' : 'Global 7500 (Ultra Long)'}</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">{lang === 'ar' ? 'جلف ستريم G650ER (طويلة المدى)' : 'Gulfstream G650ER'}</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">{lang === 'ar' ? 'بوينغ BBJ (طائرة ركاب رئاسية VIP)' : 'Boeing BBJ (VIP Airliner)'}</a></li>
            </ul>
          </div>

          {/* Column Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest mb-4">
              {lang === 'ar' ? 'خدمات الطيران' : 'CHARTER SERVICES'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><a href="#quote-tool" className="hover:text-white transition-colors">{lang === 'ar' ? 'حاسبة تسعير الرحلات الفورية' : 'Instant Private Flight Quote'}</a></li>
              <li><a href="#emptylegs" className="hover:text-white transition-colors">{lang === 'ar' ? 'عروض الرحلات الفارغة المباشرة' : 'Live Empty Leg Flight Deals'}</a></li>
              <li><a href="#jetcard" className="hover:text-white transition-colors">{lang === 'ar' ? 'برنامج بطاقة طيران إيروفولت' : 'Black Jet Card Membership'}</a></li>
              <li><a href="#casestudy" className="hover:text-white transition-colors">{lang === 'ar' ? 'الإقلاع الطارئ خلال ٩٠ دقيقة' : 'Diplomatic Emergency Dispatch'}</a></li>
              <li><a href="#desks" className="hover:text-white transition-colors">{lang === 'ar' ? 'خدمات صالات وتارماك FBO' : 'FBO Terminal Tarmac Transfers'}</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest mb-4">
              {lang === 'ar' ? 'الشركة والسلامة' : 'COMPANY & SAFETY'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><a href="#whyus" className="hover:text-white transition-colors">{lang === 'ar' ? 'معايير ARGUS المعتمدة للسلامة' : 'ARGUS Safety Standards'}</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">{lang === 'ar' ? 'أدلة الطيران وصالات المطارات' : 'Aviation Knowledge Base'}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{lang === 'ar' ? 'الأسئلة الشائعة والأجوبة' : 'Aviation FAQ'}</a></li>
              <li><span className="text-slate-500">{lang === 'ar' ? 'اتفاقيات عدم الإفصاح والسرية' : 'Privacy & Non-Disclosure'}</span></li>
              <li><span className="text-slate-500">{lang === 'ar' ? 'شروط وساطة الطيران المعتمدة' : 'Terms of Charter Brokerage'}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-4">
          <p>
            {lang === 'ar'
              ? '© ٢٠٢٦ إيروفولت الإمارات (AEROVAULT UAE). نموذج استعراض محفظة وكالة WebStudio AE. وسيط طيران خاص (جميع الرحلات تُشغّل بواسطة ناقلين جويين مرخصين يحملون شهادات AOC).'
              : '© 2026 AEROVAULT UAE. WebStudio AE agency portfolio showcase. Air charter broker (all flights operated by licensed Part 135 / AOC air carriers).'}
          </p>
        </div>
      </div>
    </footer>
  );
};