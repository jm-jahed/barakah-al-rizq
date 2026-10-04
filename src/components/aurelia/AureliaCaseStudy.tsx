'use client';

import React from 'react';
import { Award, CheckCircle2, Star, ArrowRight, ShieldCheck, Landmark } from 'lucide-react';

interface AureliaCaseStudyProps {
  onOpenViewing: () => void;
}

export const AureliaCaseStudy: React.FC<AureliaCaseStudyProps> = ({ onOpenViewing }) => {
  return (
    <section className="py-24 bg-[#090C0E] border-b border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL UHNW DEVELOPMENT CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Case Study: Nad Al Sheba Royal Compound
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Design, engineering, and turnkey execution of a 45,200 sq ft monumental private family palace with independent guest majlis and 12-car subterranean hypercar showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto bg-[#13191D] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-stone-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 rounded-xl bg-stone-500/10 border border-stone-500/30 text-stone-300 font-mono text-xs font-bold inline-block">
              CLIENT: PRIVATE SOVEREIGN FAMILY OFFICE
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
              Aurelia Signature Royal Compound (45,200 sq ft)
            </h3>

            <p className="text-xs font-sans text-gray-300 leading-relaxed">
              Managed from off-market plot acquisition to full architectural delivery. Sourced Italian Calacatta marble, engineered a 12-car subterranean hypercar vault with hydraulic turntable, and installed sovereign-grade ballistic security telemetries.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#090C0E] border border-white/5 font-mono text-xs">
                <span className="text-gray-400 block text-[10px] uppercase">Total Development Value</span>
                <span className="text-xl font-bold text-emerald-400">AED 250,000,000</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#090C0E] border border-white/5 font-mono text-xs">
                <span className="text-gray-400 block text-[10px] uppercase">Delivery Timeline</span>
                <span className="text-xl font-bold text-white">22 Months</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {[
                '10 Master palace staterooms with private terraces',
                'Independent 40-person Royal Guest Majlis & Guard House',
                '100% DLD escrow governance with 0 milestone delays'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80"
                alt="Aurelia Royal Compound Case Study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13191D] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090C0E]/90 border border-stone-600 backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-serif italic text-gray-200">
                  "Aurelia Estates executed our family compound with unmatched discretion and architectural perfection. The caliber of Italian stone craftsmanship and structural integrity is unprecedented in the UAE."
                </p>
                <span className="block text-[10px] font-mono text-stone-300 mt-2">
                  — Representative, Sovereign Family Office, Dubai
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={onOpenViewing}
                className="px-6 py-3.5 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>REQUEST CONFIDENTIAL ADVISORY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
