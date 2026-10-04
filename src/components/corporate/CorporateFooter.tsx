'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  Mail, 
  PhoneCall, 
  MapPin, 
  ArrowRight,
  Landmark,
  Scale
} from 'lucide-react';

export const CorporateFooter: React.FC = () => {
  return (
    <footer className="bg-[#05070B] border-t border-white/10 text-slate-400 font-sans relative overflow-hidden">
      
      {/* Top Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-lg font-black text-white uppercase tracking-wider">
                VANGUARD HOLDINGS
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              A premier sovereign-grade enterprise holding and capital advisory group operating across DIFC Dubai, ADGM Abu Dhabi, Riyadh KAFD, and London Mayfair.
            </p>

            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>DFSA & FSRA Tier-1 Regulated Fiduciary</span>
            </div>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Enterprise Verticals
            </h4>
            <ul className="space-y-2">
              <li><a href="#divisions" className="hover:text-amber-400 transition-colors">Strategic Capital & M&A</a></li>
              <li><a href="#divisions" className="hover:text-amber-400 transition-colors">Sovereign AI & Cloud Mesh</a></li>
              <li><a href="#divisions" className="hover:text-amber-400 transition-colors">Energy Transition & Real Assets</a></li>
              <li><a href="#divisions" className="hover:text-amber-400 transition-colors">Global Trade & Commodities</a></li>
            </ul>
          </div>

          {/* Governance & Compliance (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Governance
            </h4>
            <ul className="space-y-2">
              <li><a href="#governance" className="hover:text-amber-400 transition-colors">DFSA / FSRA Charter</a></li>
              <li><a href="#governance" className="hover:text-amber-400 transition-colors">UAE Corporate Tax 9%</a></li>
              <li><a href="#governance" className="hover:text-amber-400 transition-colors">UAE Net-Zero 2050</a></li>
              <li><a href="#leadership" className="hover:text-amber-400 transition-colors">Executive Board</a></li>
            </ul>
          </div>

          {/* Primary Headquarters Node (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs font-mono">
            <h4 className="text-white font-bold uppercase tracking-wider">
              DIFC Global Headquarters
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Level 42, Gate Precinct Tower 4, DIFC, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+971 4 458 8900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>executive@vanguardholdings.ae</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosure Box */}
        <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-white/5 text-[11px] font-mono text-slate-500 leading-relaxed space-y-2">
          <div className="text-slate-400 font-bold uppercase flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Regulatory & Fiduciary Disclosures</span>
          </div>
          <p>
            Vanguard Holdings Ltd is authorized and regulated by the Dubai Financial Services Authority (DFSA) under firm reference F004821 and the Financial Services Regulatory Authority (FSRA) of Abu Dhabi Global Market (ADGM) under reference 190038. Nothing contained on this website constitutes an offer to sell, or a solicitation of an offer to buy, any security or advisory services in any jurisdiction where such offer or solicitation would be unlawful. Past performance and projected IRRs are not indicative of future results.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 VANGUARD HOLDINGS LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a href="#governance" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#governance" className="hover:text-slate-300">Terms of Mandate</a>
            <span>•</span>
            <a href="#governance" className="hover:text-slate-300">Whistleblower Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
