'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { SUPERMARKET_CATEGORIES } from '../../data/supermarketData';
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  CreditCard,
  ArrowUp
} from 'lucide-react';

export default function SupermarketFooter() {
  const { lang, isRtl, t } = useSupermarketLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800">
      
      {/* Top Banner: App & Newsletter */}
      <div className="border-b border-zinc-800/80 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-black text-white mb-1">
              {isRtl ? 'احصل على عروض السوبرماركت الأسبوعية حصرياً' : 'Subscribe for Weekly UAE Supermarket Deals'}
            </h3>
            <p className="text-xs text-zinc-400">
              {isRtl
                ? 'انضم لأكثر من 45,000 عائلة وتعرف على خصومات نهاية الأسبوع أولاً بأول.'
                : 'Join 45,000+ UAE families receiving instant discounts & fresh arrival alerts.'}
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder={isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
              className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 w-full md:w-64"
            />
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap">
              {isRtl ? 'اشتراك' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer group select-none w-fit"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-900 flex items-center justify-center text-white font-black group-hover:scale-105 transition-transform">
              AM
            </div>
            <div>
              <span className="font-extrabold text-base text-white group-hover:text-emerald-400 transition-colors block leading-tight">
                {isRtl ? 'سوق المرقاب المركزي' : 'AL MIRQAB HYPERMARKET'}
              </span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase">
                UAE DIGITAL GROCERY PLATFORM
              </span>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed pr-4">
            {t('footerAbout')}
          </p>

          <div className="space-y-1.5 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+971 4 800 MIRQAB / +971 50 892 4110</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>customercare@mirqab-demo.ae</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Dubai Investment Park 2, Warehouse 14, Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Col 2: Fresh Aisles */}
        <div>
          <h4 className="font-bold text-sm text-white mb-3">
            {isRtl ? 'أقسام الطازج' : 'Fresh Aisles'}
          </h4>
          <ul className="space-y-2 text-xs">
            {SUPERMARKET_CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.id}>
                <span className="hover:text-emerald-400 cursor-pointer transition-colors">
                  {isRtl ? c.nameAr : c.nameEn}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Pantry & Household */}
        <div>
          <h4 className="font-bold text-sm text-white mb-3">
            {isRtl ? 'المؤونة والمنزل' : 'Pantry & Home'}
          </h4>
          <ul className="space-y-2 text-xs">
            {SUPERMARKET_CATEGORIES.slice(6, 12).map((c) => (
              <li key={c.id}>
                <span className="hover:text-emerald-400 cursor-pointer transition-colors">
                  {isRtl ? c.nameAr : c.nameEn}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Customer Services & Guarantees */}
        <div>
          <h4 className="font-bold text-sm text-white mb-3">
            {isRtl ? 'خدمات المتسوقين' : 'Customer Service'}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>{isRtl ? 'تتبع الطلبات المباشر' : 'Live Order Tracking'}</li>
            <li>{isRtl ? 'مناطق التوصيل في الإمارات' : 'UAE Delivery Zones'}</li>
            <li>{isRtl ? 'سياسة الاستبدال والاسترجاع' : 'Freshness Returns Policy'}</li>
            <li>{isRtl ? 'الشروط والأحكام' : 'Terms of Service'}</li>
            <li>{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal & Payment Strip */}
      <div className="border-t border-zinc-900 py-6 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-zinc-500 text-center sm:text-start">
            © {new Date().getFullYear()} Al Mirqab Hypermarket UAE. All Rights Reserved. Currency: <strong>AED</strong>.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
            <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">VISA</span>
            <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Mastercard</span>
            <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Apple Pay</span>
            <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Tabby</span>
            <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">Cash on Delivery</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
}
