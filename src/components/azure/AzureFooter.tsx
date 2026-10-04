'use client';

import React from 'react';
import Link from 'next/link';
import { Anchor, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { AZURE_BRAND } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

export const AzureFooter: React.FC = () => {
  const { language, t } = useAzureLanguage();

  return (
    <footer className="bg-[#030A14] text-white pt-16 pb-12 border-t border-amber-500/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/yacht-charter" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black shadow-lg">
                <Anchor className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                AZURE <span className="text-amber-400 font-serif">YACHTS</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              {t('footerDesc')}
            </p>
            <div className="text-xs font-mono text-amber-300/90 space-y-1.5 pt-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${AZURE_BRAND.phone.replace(/\s+/g, '')}`} dir="ltr" className="hover:underline">
                  {AZURE_BRAND.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{AZURE_BRAND.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {language === 'ar'
                    ? 'بيير ٧، ممشى دبي مارينا • مرسى الكورنيش، أبوظبي، الإمارات'
                    : 'Pier 7, Dubai Marina Walk, Dubai • Corniche Pier B, Abu Dhabi'}
                </span>
              </p>
            </div>
          </div>

          {/* Column Fleet */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {t('footerFleetLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">AZURE Royal 52 (52ft)</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">AZURE Sovereign 68 (68ft)</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">AZURE Majesty 84 (84ft)</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">AZURE Emperor 105 (105ft)</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">AZURE Gulf Sport 44 (44ft)</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">AZURE Oceanis 120 (120ft)</a></li>
            </ul>
          </div>

          {/* Column Experiences */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {t('navExperiences')}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'جولة الغروب وأفق دبي' : 'Sunset Skyline Cruise'}</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'أعياد الميلاد والمناسبات' : 'Birthday & Party Cruise'}</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'فعاليات الشركات والمنتجات' : 'Corporate Launch Events'}</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'صيد الأسماك في الأعماق' : 'Deep Sea Fishing Trip'}</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'رحلات الجزر لعدة أيام' : 'Multi-Day GCC Voyage'}</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#whyus" className="hover:text-amber-400 transition-colors">{t('navWhyUs')}</a></li>
              <li><a href="#casestudy" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'دراسة حالة: تدشين منتج' : 'Corporate Case Study'}</a></li>
              <li><a href="#marinas" className="hover:text-amber-400 transition-colors">{t('navMarinas')}</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">{t('navFAQ')}</a></li>
              <li><span className="text-gray-500">{t('footerLicensing')}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400 font-mono gap-4">
          <p>© 2026 {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};