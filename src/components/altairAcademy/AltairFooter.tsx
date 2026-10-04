'use client';

import React from 'react';
import Link from 'next/link';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const AltairFooter: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].footer;
  const navTr = ALTAIR_TRANSLATIONS[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040814] border-t border-amber-500/20 py-16 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/work/private-school" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-[#070D1E] font-black font-serif text-sm shadow-md">
                AA
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white font-serif">
                  {isRtl ? 'أكاديمية' : 'ALTAIR'} <span className="text-amber-400">{isRtl ? 'ألتير' : 'ACADEMY'}</span>
                </span>
                <span className="text-[10px] text-amber-200/80 font-mono tracking-widest uppercase">
                  {navTr.brandSub}
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              {tr.brandDesc}
            </p>
            <div className="text-xs text-amber-300 font-medium">
              🏛️ {tr.hours}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-serif">
                {isRtl ? 'المراحل الدراسية' : 'Academic Stages'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#stages" className="hover:text-amber-300">{isRtl ? 'مرحلة التأسيس (FS1-FS2)' : 'Foundation (FS1-FS2)'}</a></li>
                <li><a href="#stages" className="hover:text-amber-300">{isRtl ? 'المرحلة الابتدائية (السنوات ١-٦)' : 'Primary School (Years 1-6)'}</a></li>
                <li><a href="#stages" className="hover:text-amber-300">{isRtl ? 'المرحلة الثانوية (IGCSE)' : 'Secondary School (IGCSE)'}</a></li>
                <li><a href="#stages" className="hover:text-amber-300">{isRtl ? 'المرحلة الجامعية (IB / A-Levels)' : 'Sixth Form (IBDP / A-Levels)'}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-serif">
                {tr.campusesTitle}
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#campuses" className="hover:text-amber-300">{isRtl ? 'دبي — فرع البرشاء' : 'Dubai — Al Barsha Campus'}</a></li>
                <li><a href="#campuses" className="hover:text-amber-300">{isRtl ? 'أبوظبي — مدينة خليفة' : 'Abu Dhabi — Khalifa City'}</a></li>
                <li><a href="#tuition" className="hover:text-amber-300">{navTr.calculator}</a></li>
                <li><a href="#journey" className="hover:text-amber-300">{navTr.journey}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-serif">
                {tr.quickLinks}
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#why-altair" className="hover:text-amber-300">{navTr.whyUs}</a></li>
                <li><a href="#academics" className="hover:text-amber-300">{navTr.curriculum}</a></li>
                <li><a href="#campus-life" className="hover:text-amber-300">{navTr.campusLife}</a></li>
                <li><a href="#leadership" className="hover:text-amber-300">{navTr.leadership}</a></li>
                <li><a href="#faq" className="hover:text-amber-300">{navTr.faq}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back-to-Top and Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            <span>© 2026 ALTAIR ACADEMY UAE. {tr.allRights}</span>
          </div>

          <div className="max-w-md text-center sm:text-end text-[10px] text-slate-500">
            {tr.legalDisclaimer}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 bg-[#0D1B3E] px-3 py-1.5 rounded-full border border-amber-500/30"
          >
            <span>↑</span>
            <span>{isRtl ? 'أعلى الصفحة' : 'Back to Top'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
