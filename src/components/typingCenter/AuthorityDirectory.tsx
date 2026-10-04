'use client';

import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Briefcase, 
  Globe2, 
  FileCheck2, 
  Scale, 
  ExternalLink 
} from 'lucide-react';
import { Language, AUTHORITIES_DIRECTORY } from '@/data/typingCenterData';

interface AuthorityDirectoryProps {
  lang: Language;
}

export default function AuthorityDirectory({ lang }: AuthorityDirectoryProps) {
  const isAr = lang === 'ar';

  const iconMap: Record<string, any> = {
    ShieldCheck,
    Building: Building2,
    Briefcase,
    FileCheck: FileCheck2,
    Home: Building2,
    Scale
  };

  return (
    <section id="authorities" className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'دليل الجهات الحكومية في الإمارات' : 'UAE GOVERNMENT AUTHORITY DIRECTORY'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'الجهات والوزارات الحكومية ذات الصلة' : 'Governing UAE Authorities & Entities'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr
              ? 'نعمل كمركز طباعة وتجهيز معاملات مرخص ومعتمد للربط مع كافة البوابات الإلكترونية الرسمية في دولة الإمارات.'
              : 'Sanad acts as an authorized processing and typing intermediary seamlessly connecting applicants with official UAE ministerial portals.'}
          </p>
        </div>

        {/* 6 Authorities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {AUTHORITIES_DIRECTORY.map((auth) => {
            const Icon = iconMap[auth.iconName] || Building2;
            return (
              <div
                key={auth.id}
                className="p-6 rounded-3xl bg-[#072617] border border-amber-500/20 hover:border-amber-400 transition-all shadow-xl space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-amber-300 font-bold">
                    {auth.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isAr ? auth.nameAr : auth.nameEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {isAr ? auth.roleAr : auth.roleEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{isAr ? 'النطاق الجغرافي:' : 'Jurisdiction:'}</span>
                  <span className="text-slate-300">{isAr ? auth.jurisdictionAr : auth.jurisdictionEn}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Distinction Disclosure */}
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-amber-500/20 text-xs text-slate-300 text-center leading-relaxed">
          {isAr
            ? 'تنويه قانوني: مركز سند هو مركز مرخص لإعداد وطباعة المعاملات وتدقيق المستندات وليس جهة حكومية بديلة. القرار النهائي والموافقة الرسمية تصدر حصراً عن الجهات والوزارات المعنية في دولة الإمارات.'
            : 'Legal Notice: Sanad is a licensed private typing and documentation center and not an official government entity. Final approvals, card issuances, and regulatory decisions remain the exclusive purview of the respective UAE authorities.'}
        </div>

      </div>
    </section>
  );
}
