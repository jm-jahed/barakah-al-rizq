'use client';

import React from 'react';
import { ShieldCheck, Award, Lock, Car, ArrowRight, CheckCircle2, Plane, Key } from 'lucide-react';

interface ChauffeurTarmacProtocolProps {
  onOpenBooking: () => void;
}

export const ChauffeurTarmacProtocol: React.FC<ChauffeurTarmacProtocolProps> = ({
  onOpenBooking
}) => {
  return (
    <section id="chauffeur-protocol" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Plane className="w-3.5 h-3.5" />
              <span>Private Aviation & Executive Protocols</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              VIP Tarmac & Chauffeur Services
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Direct aircraft-side meet & greet at Dubai International Airport (DXB) and Al Maktoum (DWC) VIP terminals with high-security armored escorts.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Dubai Aviation Authority Airside Clearance</span>
            </span>
          </div>
        </div>

        {/* 4 Protocol Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">
              Airside Jet Tarmac Meet & Greet
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Step directly from your private Gulfstream or Bombardier into a Rolls-Royce Phantom or Maybach GLS600 positioned on the tarmac.
            </p>
            <div className="text-[11px] font-mono text-amber-400 pt-3 border-t border-zinc-800">
              DXB & DWC VIP Terminals
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">
              VR7 Armored Protection Fleet
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Ballistic-certified VR7/VR9 Mercedes-Benz S-Guard and Cadillac Escalade vehicles with close-protection security details.
            </p>
            <div className="text-[11px] font-mono text-rose-400 pt-3 border-t border-zinc-800">
              Diplomatic & Sovereign Grade
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">
              White-Glove Flatbed Transporter
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Your Ferrari or Lamborghini delivered on an enclosed VIP transporter directly to your villa driveway with zero added mileage.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-zinc-800">
              0 KM Delivery Guarantee
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">
              British Certified Chauffeurs
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Multilingual, police-cleared executive drivers trained in evasive driving maneuvers, high-protocol etiquette, and strict NDAs.
            </p>
            <div className="text-[11px] font-mono text-purple-400 pt-3 border-t border-zinc-800">
              24/7 Dedicated Standby
            </div>
          </div>
        </div>

        {/* Corporate Trust Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Family Office & Corporate Delegations
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Bespoke Multi-Vehicle Motorcade Coordination
            </h3>
            <p className="text-zinc-300 text-sm font-light leading-relaxed">
              We coordinate multi-vehicle motorcades for COP summits, royal visits, and ultra-high-net-worth family office stays across Dubai and Abu Dhabi.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-xl shadow-amber-500/20"
          >
            <span>Consult VIP Fleet Concierge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
