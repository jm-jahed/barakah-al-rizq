'use client';

import React from 'react';
import Link from 'next/link';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA } from '@/data/framehausData';
import {
  Camera,
  MapPin,
  Phone,
  ArrowUp,
  Globe,
  ShieldCheck,
  Building2,
  Layers,
} from 'lucide-react';

export const FramehausFooter: React.FC = () => {
  const { language, toggleLanguage, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-zinc-400 font-sans border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-zinc-900">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/work/photography-creative-studio" className="flex items-center gap-3">
              <div className="w-10 h-10 border border-amber-500/60 bg-gradient-to-br from-amber-500/20 to-zinc-900 flex items-center justify-center text-amber-400 font-mono text-sm font-black rounded">
                FH
              </div>
              <span className="font-extrabold text-2xl tracking-widest text-white font-serif uppercase">
                FRAME<span className="text-amber-500">HAUS</span>
              </span>
            </Link>

            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-amber-400 hover:text-amber-300 text-xs font-mono font-bold"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              <a
                href={FRAMEHAUS_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>WhatsApp VIP</span>
              </a>
            </div>
          </div>

          {/* Studios (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.studiosHeading}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="text-zinc-200 font-semibold block">{t.footer.dubaiStudio}</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">Street 8, Al Quoz 1, Dubai • 3,500 sqft Cyc</p>
                <a href="tel:+97146009200" className="text-amber-400 text-[11px] font-mono hover:underline block">
                  +971 4 600 9200
                </a>
              </div>
              <div className="space-y-1 pt-2 border-t border-zinc-900">
                <span className="text-zinc-200 font-semibold block">{t.footer.adStudio}</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">Sector M-12, Mussafah, Abu Dhabi • Soundstage</p>
                <a href="tel:+97125008100" className="text-amber-400 text-[11px] font-mono hover:underline block">
                  +971 2 500 8100
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.footer.commercialPhoto}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.footer.archPhoto}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.footer.productPhoto}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.footer.fashionPhoto}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.footer.videoMotion}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Licensing (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.legalHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.footer.licensing}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="text-center sm:text-start space-y-1">
            <p>{t.footer.copyright}</p>
            <p className="text-[10px] text-zinc-400">{t.footer.portfolioNotice}</p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 border border-zinc-800 transition-colors flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span className="text-[11px] uppercase">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
