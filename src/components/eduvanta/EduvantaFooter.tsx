'use client';

import React from 'react';
import Link from 'next/link';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const EduvantaFooter: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#05070B] text-slate-400 text-xs border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5C378] to-[#D4AF37] flex items-center justify-center text-[#07090E] font-black text-sm shadow-md">
                EV
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl text-white tracking-wider font-sans">
                    {language === 'ar' ? 'إدوفانتا' : 'EDUVANTA'}
                  </span>
                  <span className="text-[10px] font-bold text-[#E5C378] uppercase px-1.5 py-0.2 rounded bg-[#E5C378]/10 border border-[#E5C378]/20">
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

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-[#E5C378]">📞</span>
                <span>{EDUVANTA_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E5C378]">✉️</span>
                <span>{EDUVANTA_DATA.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-[#E5C378]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#courses" className="hover:text-[#E5C378] transition-colors">{t.nav.courses}</a></li>
              <li><a href="#finder" className="hover:text-[#E5C378] transition-colors">{t.nav.finder}</a></li>
              <li><a href="#pathways" className="hover:text-[#E5C378] transition-colors">{t.nav.pathways}</a></li>
              <li><a href="#formats" className="hover:text-[#E5C378] transition-colors">{t.nav.formats}</a></li>
              <li><a href="#corporate" className="hover:text-[#E5C378] transition-colors">{t.nav.corporate}</a></li>
              <li><a href="#why-eduvanta" className="hover:text-[#E5C378] transition-colors">{t.nav.pillars}</a></li>
              <li><a href="#insights" className="hover:text-[#E5C378] transition-colors">{t.nav.insights}</a></li>
              <li><a href="#faq" className="hover:text-[#E5C378] transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-[#E5C378]">
              {t.footer.programs}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#courses" className="hover:text-[#E5C378] transition-colors">{language === 'ar' ? 'إدارة المشاريع (ECPP)' : 'Project Management (ECPP)'}</a></li>
              <li><a href="#courses" className="hover:text-[#E5C378] transition-colors">{language === 'ar' ? 'القيادة التنفيذية (EELD)' : 'Executive Leadership (EELD)'}</a></li>
              <li><a href="#courses" className="hover:text-[#E5C378] transition-colors">{language === 'ar' ? 'النمو الرقمي (EDGS)' : 'Digital Growth Specialist'}</a></li>
              <li><a href="#courses" className="hover:text-[#E5C378] transition-colors">{language === 'ar' ? 'المالية المؤسسية (ECFA)' : 'Corporate Finance (ECFA)'}</a></li>
              <li><a href="#courses" className="hover:text-[#E5C378] transition-colors">{language === 'ar' ? 'الموارد البشرية (ECHRP)' : 'Strategic HR (ECHRP)'}</a></li>
              <li><a href="#courses" className="hover:text-[#E5C378] transition-colors">{language === 'ar' ? 'التقنية المالية (FinTech)' : 'FinTech & Digital Banking'}</a></li>
            </ul>
          </div>

          {/* Col 4: Campus Hubs */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-[#E5C378]">
              {t.footer.campuses}
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <span className="font-bold text-white block mb-0.5">
                  {language === 'ar' ? 'حرم دبي للمعرفة' : 'Dubai Knowledge Park'}
                </span>
                <p className="text-slate-400 text-[11px]">
                  {t.footer.dubaiCampus}
                </p>
              </div>

              <div>
                <span className="font-bold text-white block mb-0.5">
                  {language === 'ar' ? 'مركز أبوظبي (جزيرة المارية)' : 'Abu Dhabi Training Center'}
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
          <div>
            © {new Date().getFullYear()} EDUVANTA UAE. {t.footer.rights}
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
