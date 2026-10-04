'use client';

import React from 'react';
import Link from 'next/link';
import { Wrench } from 'lucide-react';
import { AUTOVANTA_BRAND } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

export const AutovantaFooter: React.FC = () => {
  const { language, t } = useAutovantaLanguage();

  return (
    <footer className="bg-[#090A0B] text-white pt-16 pb-12 border-t border-orange-500/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/auto-service-repair" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FF5722] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                AUTO<span className="text-[#FF5722]">VANTA</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              {t('brandTagline')} {t('footerDesc')}
            </p>
            <div className="text-xs font-mono text-amber-300 space-y-1 pt-2">
              <p dir="ltr" className="rtl:text-right">📞 {AUTOVANTA_BRAND.phone}</p>
              <p dir="ltr" className="rtl:text-right">✉️ {AUTOVANTA_BRAND.email}</p>
              <p>📍 {language === 'ar' ? 'شارع ٨، القوز الصناعية ٣، دبي، الإمارات' : 'Street 8, Al Quoz Industrial 3, Dubai, UAE'}</p>
            </div>
          </div>

          {/* Column Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'الصيانة الدورية والزيوت' : 'General Maintenance'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'المحركات وناقل الحركة' : 'Engine & Transmission'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'المكابح والمساعدات' : 'Brakes & Suspension'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'إصلاح التكييف وشحن الغاز' : 'AC Repair & Gas Flush'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'الكهرباء وبطاريات AGM' : 'Electrical & AGM Battery'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'فحص ما قبل الشراء (PPI)' : 'Pre-Purchase Inspection'}</a></li>
            </ul>
          </div>

          {/* Column Locations */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {t('footerLocationsNav')}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#locations" className="hover:text-white">{language === 'ar' ? 'دبي (القوز الصناعية ٣)' : 'Dubai (Al Quoz 3)'}</a></li>
              <li><a href="#locations" className="hover:text-white">{language === 'ar' ? 'الشارقة (المنطقة الصناعية ١٢)' : 'Sharjah (Industrial 12)'}</a></li>
              <li><a href="#fleet" className="hover:text-white">{language === 'ar' ? 'مسارات خدمة الأساطيل' : 'Fleet Priority Bays'}</a></li>
              <li><a href="#quote-tool" className="hover:text-white">{language === 'ar' ? 'حاسبة التكلفة الفورية' : 'Instant Quote Tool'}</a></li>
              <li><a href="#whyus" className="hover:text-white">{language === 'ar' ? 'ضمان ١٢ شهراً معتمد' : '12-Month Warranty'}</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {language === 'ar' ? 'الشركة والضمان' : 'COMPANY & LEGAL'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#whyus" className="hover:text-white">{language === 'ar' ? 'عن أوتوفانتا' : 'About AUTOVANTA'}</a></li>
              <li><a href="#casestudy" className="hover:text-white">{language === 'ar' ? 'دراسة حالة الأساطيل' : 'Fleet Case Study'}</a></li>
              <li><a href="#insights" className="hover:text-white">{language === 'ar' ? 'أدلة الصيانة' : 'Maintenance Guides'}</a></li>
              <li><a href="#faq" className="hover:text-white">{language === 'ar' ? 'الأسئلة الشائعة' : 'Service FAQ'}</a></li>
              <li><span className="text-gray-600">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</span></li>
              <li><span className="text-gray-600">{language === 'ar' ? 'شروط الضمان' : 'Warranty Terms'}</span></li>
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