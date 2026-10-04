'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Anchor, Star } from 'lucide-react';

interface NeroCaseStudyProps {
  onOpenBooking: () => void;
}

export const NeroCaseStudy: React.FC<NeroCaseStudyProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#030712] border-b border-cyan-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL ROYAL & ENTERPRISE DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Case Study: Sovereign Island Summit & F1 Mooring
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Execution overview of a 5-day private sovereign leadership retreat followed by VIP trackside hospitality at Yas Marina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto bg-[#091322] rounded-3xl border border-cyan-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Metrics & Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold inline-block">
              CLIENT: CONFIDENTIAL DIFC FAMILY OFFICE
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
              M/Y NERO SOVEREIGN (185 FT)
            </h3>

            <p className="text-xs font-sans text-gray-300 leading-relaxed">
              Coordinated a discreet 5-day marine itinerary connecting Dubai Harbour, Sir Bani Yas wildlife lagoons, and Yas Marina during the Abu Dhabi Grand Prix weekend with seamless helicopter transfers and 3-star Michelin banquets.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#040914] border border-white/5 font-mono text-xs">
                <span className="text-gray-400 block text-[10px] uppercase">Total Charter Value</span>
                <span className="text-xl font-bold text-cyan-400">AED 685,000</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#040914] border border-white/5 font-mono text-xs">
                <span className="text-gray-400 block text-[10px] uppercase">Security SLA</span>
                <span className="text-xl font-bold text-emerald-400">100% Zero-Leak</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {[
                'Airbus H145 helicopter touch-and-go transfers onto the sun deck',
                'Custom Omakase sashimi bar with fresh Arabian Gulf catches',
                'Guaranteed Zone 1 Trackside Berth at Yas Marina for the GP'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Case Study Visual & Review */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
                alt="Superyacht Case Study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091322] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#040914]/90 border border-cyan-500/30 backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-serif italic text-gray-200">
                  "NERO MARINE delivered flawless sovereign protocol. From the air-tight security to the Michelin culinary execution at Sir Bani Yas, this was the benchmark of Middle Eastern maritime luxury."
                </p>
                <span className="block text-[10px] font-mono text-cyan-300 mt-2">
                  — Managing Director, Single Family Office, ICD Brookfield Place DIFC
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer flex items-center gap-2"
              >
                <span>REQUEST CONFIDENTIAL CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
