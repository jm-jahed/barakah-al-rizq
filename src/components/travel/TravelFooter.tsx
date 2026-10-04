'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Compass, 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Crown,
  Globe2
} from 'lucide-react';

export const TravelFooter: React.FC = () => {
  return (
    <footer className="bg-[#05070B] border-t border-white/10 text-slate-400 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-lg font-black text-white uppercase tracking-wider">
                AURELIA LUXURY TRAVEL
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              A premier Dubai and Abu Dhabi luxury travel agency and private concierge orchestrating bespoke private island retreats, panoramic luxury rail journeys, and private jet charters globally.
            </p>

            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>UAE DTCM & IATA Accredited Luxury Agency</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Signature Portfolios
            </h4>
            <ul className="space-y-2">
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Maldives Overwater Sanctuaries</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Swiss Alpine Chalets & Rail</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Tokyo Penthouse & Kyoto Ryokan</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Serengeti Private Safari Camp</a></li>
            </ul>
          </div>

          {/* VIP Aviation & Concierge (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider">
              VIP Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#aviation" className="hover:text-amber-400 transition-colors">Private Jet Charters</a></li>
              <li><a href="#itinerary-builder" className="hover:text-amber-400 transition-colors">Itinerary Estimator</a></li>
              <li><a href="#membership" className="hover:text-amber-400 transition-colors">Concierge Retainers</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">UAE Airport VIP</a></li>
            </ul>
          </div>

          {/* UAE Concierge Desk (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs font-mono">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Dubai Flagship Lounge
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Level 22, Boulevard Plaza Tower 1, Downtown Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+971 4 398 7700</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>concierge@aureliatravel.ae</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 AURELIA LUXURY TRAVEL LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-300">Booking Terms in AED</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-300">VIP Jet Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
