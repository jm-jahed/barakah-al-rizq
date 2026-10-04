'use client';

import React from 'react';
import { Flame, Phone, Mail, MapPin } from 'lucide-react';
import { CRISPO_BRAND } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

export const CrispoFooter: React.FC = () => {
  const { t, isRtl, toArabicDigits } = useCrispoLanguage();

  return (
    <footer className="bg-[#0C0A09] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E63946] flex items-center justify-center text-[#FFC107]">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-[#FAF6EE] italic tracking-tighter">
                {t('brandName')}!
              </span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              {t('footerAbout')}
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFC107]" />
                <span>{isRtl ? `الخط الساخن: ${toArabicDigits(CRISPO_BRAND.phone)}` : `Call Concierge: ${CRISPO_BRAND.phone}`}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFC107]" />
                <span>{isRtl ? 'وسط مدينة دبي، مارينا ومردف' : 'Dubai Downtown, Marina & Mirdif Hubs'}</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono mb-4">
              {isRtl ? 'القائمة' : 'MENU'}
            </h4>
            <ul className="space-y-2.5 text-stone-400 font-mono text-[11px]">
              <li><a href="#menu" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'بوكس الدجاج المقرمش' : 'Crispy Chicken Box'}</a></li>
              <li><a href="#menu" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'برجر كريسبو الفاخر' : 'Signature Burgers'}</a></li>
              <li><a href="#menu" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'أجنحة بافلو الحارة' : 'Hot & Spicy Wings'}</a></li>
              <li><a href="#menu" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'البوكسات العائلية' : 'Family Buckets'}</a></li>
              <li><a href="#menu" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'بطاطس مقلية بالجبن' : 'Loaded Cheese Fries'}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono mb-4">
              {isRtl ? 'المطعم' : 'COMPANY'}
            </h4>
            <ul className="space-y-2.5 text-stone-400 font-mono text-[11px]">
              <li><a href="#rewards" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'مكافآت ونقاط كريسبو' : 'CRISPO Rewards'}</a></li>
              <li><a href="#offers" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'العروض الأسبوعية' : 'Weekly Promos'}</a></li>
              <li><a href="#locations" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'فروع دبي' : 'Restaurant Finder'}</a></li>
              <li><a href="#faq" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'الأسئلة الشائعة والمساعدة' : 'Help & FAQ'}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono mb-4">
              {isRtl ? 'معلومات قانونية وضمان الجودة' : 'LEGAL & SAFETY'}
            </h4>
            <ul className="space-y-2.5 text-stone-400 font-mono text-[11px]">
              <li><a href="#faq" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'شهادة حلال 100%' : '100% Halal Certificate'}</a></li>
              <li><a href="#faq" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'دليل الحساسية الغذائية' : 'Allergen Guide'}</a></li>
              <li><a href="#faq" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</a></li>
              <li><a href="#faq" className="hover:text-[#FFC107] transition-colors">{isRtl ? 'شروط الخدمة' : 'Terms of Service'}</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed">
          {t('fictionalNotice')}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            {t('footerRights')}
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[#FFC107] transition-colors">TikTok</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#FFC107] transition-colors">Facebook</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
