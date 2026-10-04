'use client';

import React, { useState } from 'react';
import { Globe, Plane, Ship, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INTERNATIONAL_ROUTES, InternationalRouteItem } from '@/data/movingData';

interface InternationalMovingProps {
  onOpenQuoteModal: (routeTitle?: string) => void;
}

export const InternationalMoving: React.FC<InternationalMovingProps> = ({ onOpenQuoteModal }) => {
  const [selectedRoute, setSelectedRoute] = useState<InternationalRouteItem>(INTERNATIONAL_ROUTES[0]);

  return (
    <section id="international" className="py-24 bg-[#090807] relative border-b border-amber-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              CROSS-BORDER GLOBAL RELOCATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
              Moving Across International Borders.
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl">
              Door-to-door worldwide relocation coordination including 5-ply export crating, air/sea freight customs clearance, and destination white-glove uncrating.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
            <Globe className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <span>FIDI-FAIM & IAM ACCREDITED PARTNER</span>
          </div>
        </div>

        {/* Route Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {INTERNATIONAL_ROUTES.map((route) => {
            const isSelected = selectedRoute.id === route.id;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRoute(route)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-950/80 to-[#14100C] border-amber-400 text-white shadow-xl shadow-amber-950/60 ring-1 ring-amber-400/30'
                    : 'bg-[#120F0C] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl">{route.flag}</span>
                  <span className="text-[10px] font-mono text-amber-400 font-bold">
                    From AED {route.startingPriceAED.toLocaleString()}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white block mt-1">{route.destination.split(',')[0]}</h3>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5 truncate">{route.transitTime.split('|')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Route Detailed Card */}
        <div className="bg-gradient-to-b from-[#14100C] to-[#0A0806] rounded-3xl border border-amber-500/40 p-8 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <span>{selectedRoute.origin}</span>
              <span className="text-amber-500">➔</span>
              <span className="font-bold text-white text-sm">{selectedRoute.destination}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              International Move to {selectedRoute.destination.split(',')[0]} {selectedRoute.flag}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] uppercase block mb-1">TRANSIT SCHEDULE</span>
                <span className="text-emerald-400 font-bold">{selectedRoute.transitTime}</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] uppercase block mb-1">CONTAINER CLASS</span>
                <span className="text-white font-bold">{selectedRoute.containerOptions}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs">
              <span className="text-amber-400 font-bold block mb-1">CUSTOMS & DUTY CLEARANCE ASSISTANCE:</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{selectedRoute.customsSupport}</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-mono block">STARTING RATE</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-amber-400 font-bold">AED</span>
                  <span className="text-3xl font-black text-white font-mono">{selectedRoute.startingPriceAED.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-mono">/ turnkey overseas</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal(`International: ${selectedRoute.destination}`)}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
              >
                <span>Request Custom Plan to {selectedRoute.destination.split(',')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl relative group h-80 sm:h-96">
              <img
                src={selectedRoute.image}
                alt={selectedRoute.destination}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs">
                <span className="font-bold text-white block">Full All-Risk Marine Insurance Included</span>
                <p className="text-[11px] text-slate-300 mt-1">Export customs clearance & door delivery in {selectedRoute.destination.split(',')[0]}.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
