'use client';

import React from 'react';
import { TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CASE_STUDY } from '@/data/logisticsData';

interface CaseStudySectionProps {
  onOpenQuoteModal: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-[#0B1120] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0F172A] rounded-3xl border border-blue-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              FEATURED ENTERPRISE CASE STUDY
            </span>
            <span className="text-xs font-mono text-gray-400">{CASE_STUDY.industry}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
            {CASE_STUDY.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            
            {/* Challenge & Solution */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-2xl bg-[#070B14] border border-white/10">
                <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">OPERATIONAL CHALLENGE</span>
                <p className="text-xs text-gray-300 leading-relaxed">{CASE_STUDY.challenge}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B14] border border-blue-500/30">
                <span className="text-[10px] font-mono text-cyan-400 uppercase block mb-1">VELOX LOGISTICS SOLUTION</span>
                <p className="text-xs text-gray-200 leading-relaxed">{CASE_STUDY.solution}</p>
              </div>
            </div>

            {/* Before vs After Benchmark Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#070B14] border border-blue-500/30 font-mono text-xs space-y-4">
              <span className="text-xs font-bold text-white uppercase block pb-2 border-b border-white/10">
                BENCHMARK COMPARISON
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-400 block text-[10px]">AVG DELIVERY TIME</span>
                  <span className="text-red-400 font-bold block">Before: {CASE_STUDY.before.avgTime}</span>
                  <span className="text-emerald-400 font-bold text-sm block mt-1">After: {CASE_STUDY.after.avgTime}</span>
                </div>

                <div>
                  <span className="text-gray-400 block text-[10px]">FAILED DELIVERY RATE</span>
                  <span className="text-red-400 font-bold block">Before: {CASE_STUDY.before.failedRate}</span>
                  <span className="text-emerald-400 font-bold text-sm block mt-1">After: {CASE_STUDY.after.failedRate}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-gray-400 block text-[10px]">CUSTOMER CSAT SCORE</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-red-400 line-through">74% CSAT</span>
                  <span className="text-emerald-400 font-extrabold text-base">96% CSAT (+22%)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Result Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {CASE_STUDY.results.map((res) => (
              <div key={res.label} className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center font-mono">
                <span className="text-2xl font-black text-cyan-300 block">{res.value}</span>
                <span className="text-[10px] text-gray-300 uppercase block mt-1">{res.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-gray-400">Client: {CASE_STUDY.clientName}</span>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <span>Build Similar Logistics Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
