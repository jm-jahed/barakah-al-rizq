'use strict';
import React from 'react';
import { 
  Calendar, 
  Crown, 
  ShieldCheck, 
  Award, 
  Clock, 
  ArrowRight, 
  Star,
  CheckCircle2,
  Sparkle
} from 'lucide-react';
import { SALON_BRAND_INFO } from '@/data/salonData';

interface SalonHeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
  onOpenCustomizer: () => void;
}

export const SalonHero: React.FC<SalonHeroProps> = ({
  onOpenBooking,
  onExploreTreatments,
  onOpenCustomizer
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950">
      {/* Background Ambience & Haute Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
          alt="Velvet Beauty Atelier Dubai"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.18),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top UAE Compliance & Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
              Dubai Design District (d3) & Jumeirah Flagship
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dubai Municipality Health Code #{SALON_BRAND_INFO.municipalityLicense}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>4 VIP Suites Available Today</span>
          </div>
        </div>

        {/* Hero Title & Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6 leading-[1.1]">
            Haute Aesthetics &{' '}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-100">
              Sovereign Beauty Rituals
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            An ultra-luxury sanctuary in Dubai. Master French Balayage, Swiss Cellular Valmont Facials, Russian E-file Manicures, and Royal Moroccan Hammams crafted for royalty and discerning clientele.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve VIP Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreTreatments}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 text-neutral-200 hover:text-white font-medium text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Explore 160+ Treatments</span>
            </button>

            <button
              onClick={onOpenCustomizer}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-amber-950/40 hover:bg-amber-900/40 border border-amber-500/30 text-amber-300 hover:text-amber-200 font-medium text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Crown className="w-4 h-4 text-amber-400" />
              <span>VIP & Bridal Estimator</span>
            </button>
          </div>
        </div>

        {/* Certified European Brands & Partner Banners */}
        <div className="border-t border-neutral-800/80 pt-8 pb-4">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-5 font-medium">
            100% Authentic Genuine Formulations & Equipment Exclusively From
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80">
            {['Biologique Recherche Paris', 'Valmont Cellular Switzerland', 'Kérastase Paris Chronologiste', 'Oribe Hair Care NYC', 'Dyson Supersonic Pro', 'Les Sens de Marrakech'].map((brand, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-serif tracking-widest text-neutral-400 hover:text-amber-300 transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">160+</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Haute Treatments</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">100%</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Authentic European</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">4.98 ★</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Dubai Royal Rating</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1">12</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Private VIP Suites</p>
          </div>
        </div>
      </div>
    </section>
  );
};
