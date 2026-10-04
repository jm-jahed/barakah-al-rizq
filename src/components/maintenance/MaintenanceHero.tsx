'use strict';
import React from 'react';
import { 
  Truck, 
  Wrench, 
  ShieldCheck, 
  Crown, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Zap,
  Phone
} from 'lucide-react';

interface MaintenanceHeroProps {
  onOpenDispatch: () => void;
  onExploreScopes: () => void;
  onOpenAmcEstimator: () => void;
}

export const MaintenanceHero: React.FC<MaintenanceHeroProps> = ({
  onOpenDispatch,
  onExploreScopes,
  onOpenAmcEstimator
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=85"
          alt="Aura Facility Management Dubai Mobile Service Fleet"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.18),rgba(6,182,212,0.08),rgba(0,0,0,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top UAE Compliance & Status Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-semibold tracking-wider text-emerald-300 uppercase">
              DEWA Master MEP License #914280 • Dubai Municipality Code DM-HEALTH-7721
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Genuine OEM European Parts Guarantee</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>18 GPS Mobile Service Vans Active in Dubai</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6 leading-[1.1]">
            Sovereign Engineering Care for{' '}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-100">
              Super-Prime UAE Properties
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Precision Daikin/Carrier VRV chiller overhauls, FLIR thermal electrical diagnostics, Dubai Municipality approved water tank bio-sanitization, and 365-day palatial villa maintenance retainers.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={onOpenDispatch}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <Truck className="w-4 h-4" />
              <span>Dispatch Mobile Van (28 Min SLA)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreScopes}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-emerald-500/50 text-neutral-200 hover:text-white font-medium text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Explore 160+ Services</span>
            </button>

            <button
              onClick={onOpenAmcEstimator}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 font-medium text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4 text-emerald-400" />
              <span>Villa AMC Estimator</span>
            </button>
          </div>
        </div>

        {/* Certified Equipment & Partner Brands Banner */}
        <div className="border-t border-neutral-800/80 pt-8 pb-4">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-5 font-medium">
            Certified Technical Alliances & Genuine OEM Equipment
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-85">
            {['Daikin VRV Japanese Systems', 'Carrier Commercial Chiller Certified', 'Schneider Electric Partner', 'Grohe Master Sanitaryware', 'FLIR Infrared Thermography', 'Hunter Smart Irrigation'].map((partner, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-serif tracking-widest text-neutral-400 hover:text-emerald-300 transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mb-1">28 Mins</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Average Emergency Arrival</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mb-1">98.4%</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">First-Time Fix SLA Rate</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mb-1">100%</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">DEWA & DM Permitted</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mb-1">160+</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Precision MEP Scopes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
