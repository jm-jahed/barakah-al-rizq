'use client';

import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { STAYORA_BRAND } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const StayoraFooter: React.FC = () => {
  const { language, t } = useStayoraLanguage();

  return (
    <footer className="bg-[#0A2224] text-white pt-16 pb-12 border-t border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/holiday-home-management" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#C85A32] flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                STAY<span className="text-[#E07A5F]">ORA</span>
              </span>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed font-light max-w-sm">
              {t('brandTagline')} {t('footerDesc')}
            </p>
            <div className="text-xs font-mono text-amber-300 space-y-1 pt-2">
              <p dir="ltr" className="rtl:text-right">📞 {STAYORA_BRAND.phone}</p>
              <p dir="ltr" className="rtl:text-right">✉️ {STAYORA_BRAND.email}</p>
              <p>📍 {language === 'ar' ? 'الطابق ٢٨، مارينا بلازا، دبي مارينا، الإمارات' : 'Level 28, Marina Plaza, Dubai Marina, UAE'}</p>
            </div>
          </div>

          {/* Column Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest mb-4">
              {language === 'ar' ? 'خدمات الإدارة' : 'SERVICES'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'تحسين وإدارة الإدراج' : 'Listing Optimization'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'تقنيات التسعير الذكي' : 'Dynamic Pricing Tech'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'كونسيرج النزلاء ٢٤/٧' : 'Guest Concierge 24/7'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'نظافة فندقية ٥ نجوم' : '5-Star Housekeeping'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'تراخيص دائرة السياحة' : 'DTCM Permit Support'}</a></li>
              <li><a href="#services" className="hover:text-white">{language === 'ar' ? 'لوحة أرباح الملاك' : 'Owner Revenue Portal'}</a></li>
            </ul>
          </div>

          {/* Column Markets */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest mb-4">
              {language === 'ar' ? 'مناطق الإمارات' : 'UAE MARKETS'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li><a href="#properties" className="hover:text-white">{language === 'ar' ? 'دبي مارينا' : 'Dubai Marina'}</a></li>
              <li><a href="#properties" className="hover:text-white">{language === 'ar' ? 'وسط مدينة دبي (داون تاون)' : 'Downtown Dubai'}</a></li>
              <li><a href="#properties" className="hover:text-white">{language === 'ar' ? 'نخلة جميرا' : 'Palm Jumeirah'}</a></li>
              <li><a href="#properties" className="hover:text-white">{language === 'ar' ? 'جزيرة الريم (أبوظبي)' : 'Al Reem Island (Abu Dhabi)'}</a></li>
              <li><a href="#properties" className="hover:text-white">{language === 'ar' ? 'جزيرة المرجان (رأس الخيمة)' : 'Al Marjan Island (RAK)'}</a></li>
              <li><a href="#properties" className="hover:text-white">{language === 'ar' ? 'جي بي آر' : 'JBR The Walk'}</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest mb-4">
              {language === 'ar' ? 'الشركة والامتثال' : 'COMPANY & LEGAL'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li><a href="#whyus" className="hover:text-white">{language === 'ar' ? 'عن ستايورا' : 'About STAYORA'}</a></li>
              <li><a href="#casestudy" className="hover:text-white">{language === 'ar' ? 'دراسة حالة الملاك' : 'Owner Case Study'}</a></li>
              <li><a href="#insights" className="hover:text-white">{language === 'ar' ? 'رؤى السوق' : 'Market Insights'}</a></li>
              <li><a href="#faq" className="hover:text-white">{language === 'ar' ? 'الأسئلة الشائعة' : 'Owner FAQ'}</a></li>
              <li><span className="text-gray-500">{language === 'ar' ? 'امتثال دائرة السياحة DTCM' : 'DTCM Compliance'}</span></li>
              <li><span className="text-gray-500">{language === 'ar' ? 'الخصوصية والشروط' : 'Privacy & Terms'}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400 font-mono gap-4">
          <p>{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
};