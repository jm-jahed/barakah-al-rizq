'use client';

import React from 'react';
import Link from 'next/link';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const CodeforgeFooter: React.FC = () => {
  const { language, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#03050A] text-slate-400 text-xs border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-[#070A12] font-black text-sm font-mono shadow-md">
                {'<CF/>'}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl text-white tracking-wider font-sans">
                    {language === 'ar' ? 'كود فورج' : 'CODEFORGE'}
                  </span>
                  <span className="text-[10px] font-bold text-[#38BDF8] uppercase px-1.5 py-0.2 rounded bg-sky-500/10 border border-sky-500/20 font-mono">
                    UAE
                  </span>
                </div>
                <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest">
                  {t.nav.brandTagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.brandBio}
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#38BDF8]">📞</span>
                <span>{CODEFORGE_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38BDF8]">✉️</span>
                <span>{CODEFORGE_DATA.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-[#38BDF8] font-mono">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#programs" className="hover:text-[#38BDF8] transition-colors">{t.nav.programs}</a></li>
              <li><a href="#matcher" className="hover:text-[#38BDF8] transition-colors">{t.nav.matcher}</a></li>
              <li><a href="#journey" className="hover:text-[#38BDF8] transition-colors">{t.nav.journey}</a></li>
              <li><a href="#outcomes" className="hover:text-[#38BDF8] transition-colors">{t.nav.outcomes}</a></li>
              <li><a href="#why-codeforge" className="hover:text-[#38BDF8] transition-colors">{t.nav.whyCodeforge}</a></li>
              <li><a href="#faculty" className="hover:text-[#38BDF8] transition-colors">{t.nav.faculty}</a></li>
              <li><a href="#insights" className="hover:text-[#38BDF8] transition-colors">{t.nav.insights}</a></li>
              <li><a href="#faq" className="hover:text-[#38BDF8] transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Col 3: Tracks */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-[#38BDF8] font-mono">
              {t.footer.tracks}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><a href="#programs" className="hover:text-[#38BDF8] transition-colors">{language === 'ar' ? 'هندسة البرمجيات (Full-Stack)' : 'Full-Stack Software Engineering'}</a></li>
              <li><a href="#programs" className="hover:text-[#38BDF8] transition-colors">{language === 'ar' ? 'علوم البيانات والذكاء الاصطناعي' : 'Data Science & GenAI'}</a></li>
              <li><a href="#programs" className="hover:text-[#38BDF8] transition-colors">{language === 'ar' ? 'الأمن السيبراني وسحابة AWS' : 'Cyber Security & Cloud Ops'}</a></li>
              <li><a href="#programs" className="hover:text-[#38BDF8] transition-colors">{language === 'ar' ? 'تصميم تجربة المستخدم (UX/UI)' : 'UX/UI Product Design'}</a></li>
              <li><a href="#programs" className="hover:text-[#38BDF8] transition-colors">{language === 'ar' ? 'تطوير تطبيقات الجوال' : 'Mobile App Engineering'}</a></li>
            </ul>
          </div>

          {/* Col 4: Campuses */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-[#38BDF8] font-mono">
              {t.footer.campuses}
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <span className="font-bold text-white block mb-0.5 font-mono">
                  {language === 'ar' ? 'مدينة دبي للإنترنت' : 'Dubai Internet City'}
                </span>
                <p className="text-slate-400 text-[11px]">
                  {t.footer.dubaiCampus}
                </p>
              </div>

              <div>
                <span className="font-bold text-white block mb-0.5 font-mono">
                  {language === 'ar' ? 'مركز Hub71 (أبوظبي)' : 'Hub71 Innovation Center'}
                </span>
                <p className="text-slate-400 text-[11px]">
                  {t.footer.abudhabiCampus}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="font-mono">
            © {new Date().getFullYear()} CODEFORGE UAE. {t.footer.rights}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-6 pt-4 border-t border-white/[0.04] text-[10.5px] text-slate-400 text-center leading-relaxed">
          {t.footer.disclaimer}
        </div>
      </div>
    </footer>
  );
};
