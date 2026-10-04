'use client';

import React from 'react';
import { Phone, Mail, MapPin, Leaf } from 'lucide-react';
import { FRESHAURA_BRAND } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

export const FreshauraFooter: React.FC = () => {
  const { t, isRtl } = useFreshauraLanguage();

  return (
    <footer className="bg-[#021F1E] border-t border-emerald-900/80 text-stone-300 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#064E3B] border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-extrabold text-[#FBF9F5] tracking-widest">
                {t('brandName')}
              </span>
            </div>

            <p className="text-xs text-stone-300 font-light leading-relaxed max-w-sm">
              "{t('tagline')}" {isRtl ? 'خدمة توصيل الخضروات والفواكه العضوية والطازجة الأرقى في دولة الإمارات العربية المتحدة.' : FRESHAURA_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{isRtl ? FRESHAURA_BRAND.dubaiHubAr : FRESHAURA_BRAND.dubaiHub}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{FRESHAURA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{FRESHAURA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              {isRtl ? 'أقسام المنتجات' : 'PRODUCE SHOP'}
            </h4>
            <ul className="space-y-2 text-stone-300 font-serif text-xs">
              <li><a href="#catalog" className="hover:text-emerald-400 transition-colors">{isRtl ? 'الفواكه الطازجة (٢١٠ أصناف)' : 'Fresh Fruits (210 Items)'}</a></li>
              <li><a href="#catalog" className="hover:text-emerald-400 transition-colors">{isRtl ? 'الخضروات الورقية والمائية' : 'Hydroponic Greens'}</a></li>
              <li><a href="#catalog" className="hover:text-emerald-400 transition-colors">{isRtl ? 'المحاصيل العضوية المعتمدة' : 'Organic Certified Harvest'}</a></li>
              <li><a href="#fruit-builder" className="hover:text-emerald-400 transition-colors">{t('navFruitBoxes')}</a></li>
              <li><a href="#veg-boxes" className="hover:text-emerald-400 transition-colors">{t('navVegBoxes')}</a></li>
            </ul>
          </div>

          {/* Delivery Areas */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              {isRtl ? 'مناطق التوصيل' : 'DELIVERY AREAS'}
            </h4>
            <ul className="space-y-2 text-stone-300 font-mono text-[11px]">
              <li><a href="#delivery" className="hover:text-emerald-400 transition-colors">{isRtl ? 'دبي (توصيل فوري خلال ساعتين)' : 'Dubai (2-Hour Express)'}</a></li>
              <li><a href="#delivery" className="hover:text-emerald-400 transition-colors">{isRtl ? 'أبوظبي (توصيل بنفس اليوم)' : 'Abu Dhabi (Same-Day)'}</a></li>
              <li><a href="#delivery" className="hover:text-emerald-400 transition-colors">{isRtl ? 'الشارقة وعجمان' : 'Sharjah & Ajman'}</a></li>
              <li><a href="#delivery" className="hover:text-emerald-400 transition-colors">{isRtl ? 'العين ورأس الخيمة والفجيرة' : 'Al Ain & Northern Emirates'}</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              {isRtl ? 'الدعم والخدمات' : 'SERVICES & SUPPORT'}
            </h4>
            <ul className="space-y-2 text-stone-300 font-mono text-[11px]">
              <li><a href="#wholesale" className="hover:text-emerald-400 transition-colors">{t('navWholesale')}</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">{isRtl ? 'سياسة ضمان النضارة' : 'Freshness Guarantee Policy'}</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">{isRtl ? 'استبدال المنتجات الفوري' : 'Replacement Flow'}</a></li>
              <li><a href={FRESHAURA_BRAND.whatsapp} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">{isRtl ? 'مكتب طلبات واتساب' : 'WhatsApp Desk (+971 50)'}</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-400 border-b border-emerald-900/80 leading-relaxed">
          <strong>{isRtl ? 'إشعار المشروع التجريبي لمحفظة الأعمال:' : 'PORTFOLIO DEMONSTRATION NOTICE:'} </strong>
          {isRtl
            ? 'مشروع "فريش أورا" (FRESHAURA UAE) تم تصميمه كنموذج تطبيقي فائق الجودة لمحفظة أعمال الوكالة الرقمية. جميع المنتجات الزراعية والأسعار بالدرهم الإماراتي تمثل بيانات حقيقية ومدروسة لسوق الإمارات.'
            : 'FRESHAURA is a high-grade fresh fruits & vegetables grocery delivery experience created for digital agency portfolio demonstration purposes. All 210 produce items and prices in AED represent authentic UAE market data.'}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-400">
            {isRtl ? `© ٢٠٢٦ فريش أورا الإمارات. جميع الحقوق محفوظة. مشروع رقم #٣٦.` : `© 2026 FRESHAURA UAE. All rights reserved. Project #36.`}
          </p>

          <div className="flex items-center gap-4 text-stone-300">
            <a href="#faq" className="hover:text-emerald-400 transition-colors">{isRtl ? 'معايير الجودة' : 'Quality Standards'}</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
