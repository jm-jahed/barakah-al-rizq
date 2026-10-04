'use strict';
import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Crown, 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

interface MarketingHeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
  onOpenRoiSimulator: () => void;
}

export const MarketingHero: React.FC<MarketingHeroProps> = ({
  onOpenAudit,
  onExploreSolutions,
  onOpenRoiSimulator
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85"
          alt="Nexus Growth Atelier DIFC Dubai"
          className="w-full h-full object-cover object-center opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,179,8,0.18),rgba(6,182,212,0.08),rgba(0,0,0,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top UAE Compliance & Status Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
              DIFC Innovation Hub • Level 5, Gate Precinct 4, Dubai
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dubai DED Media License #894210</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AED 184M+ Revenue Generated in GCC</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6 leading-[1.1]">
            Architects of Sovereign{' '}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-100">
              Market Dominance
            </span>{' '}
            & High-Yield Growth
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Performance PPC, bilingual Arabic/English SEO, neuro-funnel CRO, and custom AI lead scoring engineered exclusively for luxury real estate, fintech, and high-ticket UAE enterprises.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <Zap className="w-4 h-4 fill-neutral-950" />
              <span>Claim Free 24h Growth Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreSolutions}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 text-neutral-200 hover:text-white font-medium text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Explore 160+ Solutions</span>
            </button>

            <button
              onClick={onOpenRoiSimulator}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-amber-950/40 hover:bg-amber-900/40 border border-amber-500/30 text-amber-300 hover:text-amber-200 font-medium text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span>Interactive ROI Simulator</span>
            </button>
          </div>
        </div>

        {/* Certified Tier-1 Partners Banner */}
        <div className="border-t border-neutral-800/80 pt-8 pb-4">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-5 font-medium">
            Official Tier-1 Growth Partners & Technology Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-85">
            {['Google Premier Partner 2026', 'Meta Business Partner Elite', 'TikTok UAE Agency Partner', 'HubSpot Diamond Agency', 'Salesforce Marketing Cloud', 'LinkedIn Marketing Solutions'].map((partner, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-serif tracking-widest text-neutral-400 hover:text-amber-300 transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">AED 184M+</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Tracked Client Revenue</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">6.8x</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Average Blended ROAS</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">94.2%</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Annual Retainer Retention</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">160+</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Enterprise Growth Protocols</p>
          </div>
        </div>
      </div>
    </section>
  );
};
