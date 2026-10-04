'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { SKYVAULT_BRAND } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const SkyvaultFooter: React.FC = () => {
  const { lang, t } = useSkyvaultLanguage();

  return (
    <footer className="bg-[#05060A] text-white pt-16 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/executive-aviation" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E5C378] flex items-center justify-center text-black shadow-lg shadow-[#E5C378]/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                SKY<span className="text-[#E5C378]">VAULT</span> <span className="text-xs font-mono text-slate-400">UAE</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              {t('footer.brandDesc')}
            </p>
            <div className="text-xs font-mono text-[#E5C378] space-y-1.5 pt-2">
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{SKYVAULT_BRAND.phone}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{SKYVAULT_BRAND.email}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{lang === 'ar' ? 'مجمع هناجر إكسيكوجيت DWC دبي • مطار البطين للطيران الخاص، أبوظبي' : 'ExecuJet Hangar Complex, DWC Airport, Dubai • Al Bateen Airport, Abu Dhabi'}</span>
              </p>
            </div>
          </div>

          {/* Column Modules */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest mb-4">
              {t('footer.colModules')}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'ar' ? 'الإدارة التشغيلية الشاملة (Turnkey)' : 'Full Turnkey Aircraft Management'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'ar' ? 'صلاحية الطيران GCAA / EASA CAMO' : 'GCAA / EASA CAMO Airworthiness'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'ar' ? 'برنامج تعويض عوائد التأجير' : 'Charter Revenue Offset Program'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'ar' ? 'الهناجر المكيفة والدعم الأرضي' : 'VIP Hangarage & Tarmac Support'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'ar' ? 'توظيف وتدريب أطقم الطيران' : 'Flight Crew Recruitment & Staffing'}</a></li>
            </ul>
          </div>

          {/* Column Airworthiness */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest mb-4">
              {t('footer.colAirworthiness')}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><a href="#program" className="hover:text-white transition-colors">{lang === 'ar' ? 'حاسبة عوائد التأجير والتشغيل' : 'Charter Yield Calculator'}</a></li>
              <li><a href="#ground" className="hover:text-white transition-colors">{lang === 'ar' ? 'هناجر DWC المكيفة بمساحة ٨,٠٠٠ م²' : 'DWC Climate-Controlled Bays'}</a></li>
              <li><a href="#casestudy" className="hover:text-white transition-colors">{lang === 'ar' ? 'دراسة حالة جلف ستريم G650ER' : 'Gulfstream G650ER Case Study'}</a></li>
              <li><a href="#bases" className="hover:text-white transition-colors">{lang === 'ar' ? 'قواعد دبي وأبوظبي التنفيذية' : 'Dubai & Abu Dhabi Bases'}</a></li>
              <li><a href="#whyus" className="hover:text-white transition-colors">{lang === 'ar' ? 'معايير IS-BAO واعتمادات السلامة' : 'IS-BAO Stage III Standards'}</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest mb-4">
              {t('footer.colLegal')}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><a href="#whyus" className="hover:text-white transition-colors">{lang === 'ar' ? 'ترخيص GCAA CAMO AWR-048' : 'GCAA CAMO AWR-048 Approval'}</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">{lang === 'ar' ? 'دليل إدارة الطيران التنفيذي' : 'Aviation Intelligence Library'}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{lang === 'ar' ? 'الأسئلة الشائعة والأجوبة' : 'Executive Aviation FAQ'}</a></li>
              <li><span className="text-slate-500">{lang === 'ar' ? 'اتفاقيات عدم الإفصاح والسرية (NDA)' : 'Strict Non-Disclosure (NDA)'}</span></li>
              <li><span className="text-slate-500">{lang === 'ar' ? 'شروط وساطة وإدارة الطائرات' : 'Terms of Asset Management'}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-4">
          <p>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};