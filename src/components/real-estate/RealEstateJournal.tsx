'use client';

import React from 'react';
import { REAL_ESTATE_REPORTS, RealEstateReport } from '@/data/realEstateData';
import { FileText, ArrowRight, Download, Calendar, User } from 'lucide-react';

interface RealEstateJournalProps {
  onOpenViewing: () => void;
}

export const RealEstateJournal: React.FC<RealEstateJournalProps> = ({
  onOpenViewing
}) => {
  return (
    <section id="market-journal" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Institutional Research & Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              UAE Real Estate Market Journal
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Quarterly macro-economic analyses, ultra-prime capital appreciation forecasts, and prime yield benchmarking compiled by our research team.
            </p>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_ESTATE_REPORTS.map((report: RealEstateReport) => (
            <div
              key={report.id}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-3">
                  <span className="text-amber-400 font-semibold">{report.category}</span>
                  <span>{report.readTime}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                  {report.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                  {report.summary}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Key Findings:</div>
                  {report.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer details */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="text-[11px] font-mono text-zinc-500">
                  By {report.author} • {report.date}
                </div>
                <button
                  onClick={onOpenViewing}
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-zinc-950 transition-colors"
                  title="Download Research Report PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
