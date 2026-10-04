'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NOURA_BRAND } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

export const NouraFooter: React.FC = () => {
  const { t, isRtl } = useNouraLanguage();

  return (
    <footer className="bg-[#050505] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#121212] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <span className="font-serif font-black text-sm">N</span>
              </div>
              <span className="text-xl font-serif font-extrabold text-[#FAFAFA] tracking-widest">
                {t('brandName')}
              </span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              {t('footerAbout')}
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{isRtl ? 'حي دبي للتصميم (d3) • مبنى 7 • أتيليه دبي' : NOURA_BRAND.dubaiFlagship}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span dir="ltr">{NOURA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{NOURA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              {isRtl ? 'المجموعات' : 'COLLECTIONS'}
            </h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'وصل حديثاً 2026' : 'New Arrivals 2026'}</a></li>
              <li><a href="#signature" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'تشكيلة التوقيع الملكي' : 'Signature Line'}</a></li>
              <li><a href="#occasion" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'إطلالات رمضان والعيد' : 'Ramadan & Eid Edit'}</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'فساتين السهرة الفاخرة' : 'Luxury Evening Gowns'}</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'عبايات كريب يومية ناعمة' : 'Everyday Minimal Crepe'}</a></li>
            </ul>
          </div>

          {/* Client Care */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              {isRtl ? 'خدمة العملاء' : 'CLIENT CARE'}
            </h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#delivery" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'توصيل سريع في نفس اليوم' : 'Same-Day UAE Delivery'}</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'تعديل الطول مجاناً' : 'Free Custom Tailoring'}</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'استبدال منزلي خلال 7 أيام' : '7-Day Home Exchange'}</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'تقسيط تابي على 4 دفعات' : 'Tabby 4-Payment Split'}</a></li>
            </ul>
          </div>

          {/* Boutiques */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              {isRtl ? 'الفروع ومعلومات قانونية' : 'BOUTIQUES & LEGAL'}
            </h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#delivery" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'قاعة الأزياء - دبي مول' : 'Fashion Avenue Dubai Mall'}</a></li>
              <li><a href="#delivery" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'غاليريا مول - جزيرة المارية، أبوظبي' : 'Galleria Abu Dhabi'}</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'شروط وأحكام الخدمة' : 'Boutique Terms of Service'}</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'إشعار النموذج التجريبي' : 'Fictional Demo Notice'}</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed">
          {isRtl ? (
            <>
              <strong>إشعار النموذج التجريبي للأعمال الرقمية:</strong> نورة عباية هو مشروع تجريبي فاخر للمتاجر الإلكترونية تم تصميمه خصيصاً لأغراض العرض التوضيحي. جميع العبايات المعروضة (248+ منتجاً)، والأسعار بالدرهم الإماراتي، وتقييمات العملاء هي بيانات توضيحية.
            </>
          ) : (
            <>
              <strong>FICTIONAL E-COMMERCE PORTFOLIO DEMONSTRATION NOTICE:</strong> NOURA ABAYA is a fictional luxury women's abaya e-commerce brand created strictly for digital agency portfolio demonstration purposes. All 248+ abaya products, prices in AED, and client reviews represent synthetic demonstration data.
            </>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            {isRtl
              ? `جميع الحقوق محفوظة © 2026 ${t('brandName')} الإمارات. مشروع رقم #35.`
              : `© 2026 ${NOURA_BRAND.name} UAE. All rights reserved. Portfolio Build #35.`}
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'بوابة كبار الشخصيات' : 'VIP Client Portal'}</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
