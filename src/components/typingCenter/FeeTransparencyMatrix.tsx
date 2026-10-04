'use client';

import React from 'react';
import { ShieldCheck, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language, FEE_STRUCTURE_BREAKDOWN } from '@/data/typingCenterData';

interface FeeTransparencyMatrixProps {
  lang: Language;
}

export default function FeeTransparencyMatrix({ lang }: FeeTransparencyMatrixProps) {
  const isAr = lang === 'ar';

  return (
    <section className="py-16 bg-[#04070E] border-b border-amber-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isAr ? 'ميثاق شفافية الرسوم' : 'FEE INTEGRITY & SEPARATION STANDARD'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isAr ? 'كيف تُحتسب رسوم المعاملات الحكومية؟' : 'Understanding UAE Government & Typing Fees'}
          </h3>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'في مركز سند، نلتزم بالوضوح التام وفصل الرسوم الرسمية المقررة من الوزارات عن أتعاب إعداد المعاملة.'
              : 'At Sanad, we maintain absolute transparency by separating official ministry charges from center preparation and typing fees.'}
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-amber-500/20 bg-[#072617]/90 shadow-xl backdrop-blur-xl">
          <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-slate-800 text-amber-300 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-4 px-5">{isAr ? 'نوع الرسم' : 'Fee Classification'}</th>
                <th className="py-4 px-5">{isAr ? 'المعنى والتوضيح' : 'What it Covers'}</th>
                <th className="py-4 px-5">{isAr ? 'طريقة السداد والشفافية' : 'Payment & Regulatory Status'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {FEE_STRUCTURE_BREAKDOWN.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 font-bold text-white whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{isAr ? row.feeTypeAr : row.feeTypeEn}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-slate-300 leading-relaxed max-w-md">
                    {isAr ? row.meaningAr : row.meaningEn}
                  </td>
                  <td className="py-4 px-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-slate-700/80 text-amber-300 font-mono text-xs">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{isAr ? row.payerNoteAr : row.payerNoteEn}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* High-Trust Footnote */}
        <div className="mt-6 flex items-start gap-2.5 p-4 rounded-xl bg-amber-500/10[0.05] border border-amber-500/20 text-xs text-slate-300">
          <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {isAr
              ? 'ملاحظة: تخضع الرسوم الحكومية الرسمية لقرارات الجهات الاتحادية والمحلية (الهيئة الاتحادية، إقامة دبي، وزارة العمل، التنمية الاقتصادية) وتختلف حسب مدة الإقامة ونوع المنشأة والغرامات المترتبة.'
              : 'Important Notice: Official authority charges are determined directly by UAE federal and local government bodies and may vary based on residency duration, establishment classification, and historical fines.'}
          </p>
        </div>

      </div>
    </section>
  );
}
