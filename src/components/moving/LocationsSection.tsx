'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Users, ArrowRight, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { UAE_COMMUNITIES, UAELocationItem } from '@/data/movingData';

interface LocationsSectionProps {
  onOpenQuoteModal: (locationName?: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedLoc, setSelectedLoc] = useState<UAELocationItem>(UAE_COMMUNITIES[0]);

  return (
    <section id="permits" className="py-24 bg-[#0A0806] relative border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              UAE DEVELOPER PERMITS & LOCAL HUBS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
              Moving Across UAE Luxury Communities.
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl">
              We manage 100% of building move permits, lift bookings, and developer gatepasses across Emaar, Nakheel, DAMAC, Aldar, and Dubai Holding master developments.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% PRE-APPROVED DEVELOPER CONTRACTOR</span>
          </div>
        </div>

        {/* Location Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {UAE_COMMUNITIES.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLoc(loc)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedLoc.id === loc.id
                    ? 'bg-gradient-to-r from-amber-950/80 to-[#14100C] border-amber-400 text-white shadow-xl shadow-amber-950/60 ring-1 ring-amber-400/30'
                    : 'bg-[#120F0C] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${selectedLoc.id === loc.id ? 'text-amber-400' : 'text-slate-500'}`} />
                    <span className="font-bold text-sm text-white">{loc.city} ({loc.emirate})</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">{loc.availability}</span>
                </div>
                <span className="text-xs text-slate-400 block truncate">{loc.popularAreas.slice(0, 2).join(', ')}</span>
              </button>
            ))}
          </div>

          {/* Selected Location Card */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#14100C] to-[#0A0806] rounded-3xl border border-amber-500/30 p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">{selectedLoc.emirate} REGION</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">{selectedLoc.city} Operational Hub</h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                  {selectedLoc.availability}
                </span>
              </div>

              {/* Permit Rules Box */}
              <div className="my-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-300 uppercase block">
                    PERMIT CLEARANCE STANDARD:
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5">
                    {selectedLoc.permitRequirements}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 font-mono text-xs mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase block mb-1">DISPATCH SLA</span>
                  <span className="text-white font-bold">{selectedLoc.responseTime}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase block mb-1">LOCAL FLEET</span>
                  <span className="text-emerald-400 font-bold">{selectedLoc.localTeamSize}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase block mb-1">STARTING PRICE</span>
                  <span className="text-amber-400 font-bold">{selectedLoc.startingPrice}</span>
                </div>
              </div>

              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase mb-3">
                Key Serviced Luxury Communities:
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedLoc.popularAreas.map((area) => (
                  <span key={area} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">Zero gate delays guaranteed.</span>
              <button
                onClick={() => onOpenQuoteModal(selectedLoc.city)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
              >
                <span>Book Move in {selectedLoc.city}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
