'use client';

import React from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';
import { ROADFORGE_BRAND } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const RoadforgeFooter: React.FC = () => {
  const { language, t } = useRoadforgeLanguage();

  return (
    <footer className="bg-[#060A14] text-white pt-16 pb-12 border-t border-amber-500/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/car-recovery-roadside-assistance" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#EF4444] to-[#F59E0B] flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                ROAD<span className="text-[#F59E0B]">FORGE</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              {t('brandTagline')} {t('footerDesc')}
            </p>
            <div className="text-xs font-mono text-amber-300 space-y-1 pt-2">
              <p dir="ltr" className="rtl:text-right">📞 {t('emergencyHotline')}: {ROADFORGE_BRAND.phone}</p>
              <p dir="ltr" className="rtl:text-right">✉️ {ROADFORGE_BRAND.email}</p>
              <p>📍 {language === 'ar' ? 'القوز (دبي) • مصفح (أبوظبي) • المنطقة الصناعية ٦ (الشارقة)' : 'Al Quoz (Dubai) • Mussafah (Abu Dhabi) • Industrial 6 (Sharjah)'}</p>
            </div>
          </div>

          {/* Column Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'سطحات سحب هيدروليكية' : 'Flatbed Vehicle Towing'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'اشتراك وبطاريات AGM' : 'Battery Jumpstart & AGM'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'تبديل ورقع الإطارات' : 'Flat Tyre Replacement'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'توصيل الوقود في الطوارئ' : 'Emergency Fuel Delivery'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'فتح أبواب السيارات' : 'Key Lockout Unlocking'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'ونش حوادث وسحب رمال' : 'Accident Recovery Winch'}</a></li>
            </ul>
          </div>

          {/* Column Coverage & Locations */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {t('footerCorridorsNav')}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#coverage" className="hover:text-white">{language === 'ar' ? 'شارع الشيخ زايد (E11)' : 'Sheikh Zayed Road (E11)'}</a></li>
              <li><a href="#coverage" className="hover:text-white">{language === 'ar' ? 'شارع محمد بن زايد (E311)' : 'MBZ Road (E311)'}</a></li>
              <li><a href="#coverage" className="hover:text-white">{language === 'ar' ? 'شارع الإمارات (E611)' : 'Emirates Road (E611)'}</a></li>
              <li><a href="#bases" className="hover:text-white">{language === 'ar' ? 'مركز عمليات دبي' : 'Dubai Dispatch Base'}</a></li>
              <li><a href="#bases" className="hover:text-white">{language === 'ar' ? 'مركز عمليات أبوظبي' : 'Abu Dhabi Base'}</a></li>
              <li><a href="#bases" className="hover:text-white">{language === 'ar' ? 'مركز عمليات الشارقة' : 'Sharjah Base'}</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {language === 'ar' ? 'الشركة والامتثال' : 'COMPANY & LEGAL'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#whyus" className="hover:text-white">{language === 'ar' ? 'عن رودفورج' : 'About ROADFORGE'}</a></li>
              <li><a href="#fleet" className="hover:text-white">{language === 'ar' ? 'عقود الأساطيل والتأمين' : 'Fleet SLA Contracts'}</a></li>
              <li><a href="#casestudy" className="hover:text-white">{language === 'ar' ? 'دراسة حالة الطرق السريعة' : 'Insurance Case Study'}</a></li>
              <li><a href="#insights" className="hover:text-white">{language === 'ar' ? 'أدلة السلامة على الطريق' : 'Highway Safety Guides'}</a></li>
              <li><a href="#faq" className="hover:text-white">{language === 'ar' ? 'الأسئلة الشائعة' : 'Recovery FAQ'}</a></li>
              <li><span className="text-gray-600">{language === 'ar' ? 'الخصوصية والشروط' : 'Privacy & Terms'}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-4">
          <p>{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
};