'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, TrendingUp, Check } from 'lucide-react';
import { LUXSHIELD_CASE_STUDY } from '@/data/luxshieldData';

interface CaseStudyProps {
  onOpenBookingModal: (pkgId?: string) => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="casestudy" className="py-24 bg-[#0B0C0E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#14161A] border border-blue-500/30 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>FEATURED STUDIO CASE STUDY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {LUXSHIELD_CASE_STUDY.clientTitle}
            </h2>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              {LUXSHIELD_CASE_STUDY.challenge}
            </p>

            <div className="p-5 rounded-2xl bg-[#0B0C0E] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                APPLIED STUDIO SOLUTION
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {LUXSHIELD_CASE_STUDY.solution}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div>
                <span className="text-2xl font-black text-blue-400 font-mono block">
                  {LUXSHIELD_CASE_STUDY.metrics.swirlRemoval}
                </span>
                <span className="text-xs text-gray-400 font-medium">Defect Removal</span>
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-400 font-mono block">
                  {LUXSHIELD_CASE_STUDY.metrics.warrantyYears}
                </span>
                <span className="text-xs text-gray-400 font-medium">Warranty Coverage</span>
              </div>
              <div>
                <span className="text-2xl font-black text-amber-300 font-mono block">
                  {LUXSHIELD_CASE_STUDY.metrics.glossLevel}
                </span>
                <span className="text-xs text-gray-400 font-medium">Gloss Index</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBookingModal('signature')}
                className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <span>BOOK A SIMILAR SIGNATURE TREATMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={LUXSHIELD_CASE_STUDY.image}
                alt="Porsche 911 Case Study"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase block">
                  PORSCHE 911 CARRERA S (DUBAI)
                </span>
                <span className="text-sm font-bold text-white block mt-1">
                  100 GU Mirror Gloss • 9H Ceramic Matrix
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};