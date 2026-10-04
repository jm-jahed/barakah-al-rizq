'use client';

import React from 'react';
import Link from 'next/link';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const LHFooter: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].footer;
  const navTr = LH_TRANSLATIONS[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060B08] border-t border-emerald-900/60 py-16 text-emerald-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-emerald-900/60">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/work/premium-nursery-preschool" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-[#0A120D] font-black text-sm shadow-md">
                LH
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white font-sans">
                  {isRtl ? 'ليتل' : 'LITTLE'} <span className="text-amber-400">{isRtl ? 'هورايزون' : 'HORIZON'}</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">
                  {navTr.brandSub}
                </span>
              </div>
            </Link>
            <p className="text-xs text-emerald-300/80 max-w-sm leading-relaxed mb-4">
              {tr.brandDesc}
            </p>
            <div className="text-xs text-amber-300 font-medium">
              🌿 {tr.hours}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
                {isRtl ? 'البرامج التعليمية' : 'Programs'}
              </h4>
              <ul className="space-y-2 text-xs text-emerald-300/80">
                <li><a href="#programs" className="hover:text-amber-300">{isRtl ? 'جناح الرضع (٦-١٨ شهراً)' : 'Baby Room (6-18 mos)'}</a></li>
                <li><a href="#programs" className="hover:text-amber-300">{isRtl ? 'برنامج البراعم (١٨ شهراً-٣ سنوات)' : 'Toddler Program (18m-3y)'}</a></li>
                <li><a href="#programs" className="hover:text-amber-300">{isRtl ? 'الروضة التمهيدية (٣-٤ سنوات)' : 'Pre-Kindergarten (3-4y)'}</a></li>
                <li><a href="#programs" className="hover:text-amber-300">{isRtl ? 'المخيمات الموسمية والصيفية' : 'Summer & Seasonal Camps'}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
                {tr.campusesTitle}
              </h4>
              <ul className="space-y-2 text-xs text-emerald-300/80">
                <li><a href="#campuses" className="hover:text-amber-300">{isRtl ? 'دبي — المرابع العربية' : 'Dubai — Arabian Ranches'}</a></li>
                <li><a href="#campuses" className="hover:text-amber-300">{isRtl ? 'دبي — جميرا الساحلي' : 'Dubai — Jumeirah Coastal'}</a></li>
                <li><a href="#campuses" className="hover:text-amber-300">{isRtl ? 'أبوظبي — جزيرة الريم' : 'Abu Dhabi — Al Reem Island'}</a></li>
                <li><a href="#finder" className="hover:text-amber-300">{navTr.finder}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
                {tr.quickLinks}
              </h4>
              <ul className="space-y-2 text-xs text-emerald-300/80">
                <li><a href="#why-lh" className="hover:text-amber-300">{navTr.whyUs}</a></li>
                <li><a href="#curriculum" className="hover:text-amber-300">{navTr.curriculum}</a></li>
                <li><a href="#leadership" className="hover:text-amber-300">{navTr.leadership}</a></li>
                <li><a href="#insights" className="hover:text-amber-300">{navTr.insights}</a></li>
                <li><a href="#faq" className="hover:text-amber-300">{navTr.faq}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back-to-Top and Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-400/80 text-[11px]">
          <div>
            <span>© 2026 LITTLE HORIZON UAE. {tr.allRights}</span>
          </div>

          <div className="max-w-md text-center sm:text-end text-[10px] text-emerald-500">
            {tr.legalDisclaimer}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 bg-[#132219] px-3 py-1.5 rounded-full border border-emerald-800/40"
          >
            <span>↑</span>
            <span>{isRtl ? 'أعلى الصفحة' : 'Back to Top'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
