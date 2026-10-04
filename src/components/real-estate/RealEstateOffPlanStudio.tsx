'use client';

import React, { useState } from 'react';
import { TOP_DEVELOPERS, DeveloperPartner } from '@/data/realEstateData';
import { Building2, Award, ShieldCheck, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface RealEstateOffPlanStudioProps {
  onOpenViewing: () => void;
}

export const RealEstateOffPlanStudio: React.FC<RealEstateOffPlanStudioProps> = ({
  onOpenViewing
}) => {
  const [selectedDevIndex, setSelectedDevIndex] = useState(0);
  const activeDev = TOP_DEVELOPERS[selectedDevIndex];

  return (
    <section id="offplan-studio" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Direct Master Developer Allocations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              UAE Off-Plan Studio
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Secure priority tier-one VIP launch allocations, linked DLD escrow payment milestones, and zero-commission developer agreements.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Guaranteed DLD Escrow Accounts</span>
            </span>
          </div>
        </div>

        {/* Developer Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {TOP_DEVELOPERS.map((dev: DeveloperPartner, idx: number) => {
            const isSelected = selectedDevIndex === idx;
            return (
              <button
                key={dev.id}
                onClick={() => setSelectedDevIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500/50 shadow-lg shadow-amber-500/10'
                    : 'bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="text-xs font-serif font-bold text-white mb-1">
                  {dev.name}
                </div>
                <div className="text-[10px] font-mono text-zinc-400">
                  {dev.ongoingProjects} Active Projects
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Developer Showcase Spotlight */}
        {activeDev && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-10">
            {/* Developer Media */}
            <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden border border-zinc-800">
              <img
                src={activeDev.heroImage}
                alt={activeDev.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
                  Flagship: {activeDev.flagshipProject}
                </span>
                <span className="text-amber-400 font-bold">Est. {activeDev.established}</span>
              </div>
            </div>

            {/* Developer Details & Allocations */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                  Institutional Master Developer
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                  {activeDev.name}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-light mb-6">
                  {activeDev.description}
                </p>

                {/* Milestones & Payment Architecture */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono text-zinc-400 uppercase">
                    Standard Investor Payment Plan Architecture
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                      <div className="text-lg font-bold text-amber-400">10% - 20%</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">Booking / Down Payment</div>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                      <div className="text-lg font-bold text-white">40% - 50%</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">During Construction</div>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                      <div className="text-lg font-bold text-emerald-400">30% - 40%</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">On Handover & Title Deed</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Zero Brokerage Fees (0%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>DLD Registered Escrow</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenViewing}
                className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Request {activeDev.name} Private Launch Allocations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
