'use client';

import React from 'react';
import Link from 'next/link';
import { LuxestateLogo } from './LuxestateLogo';
import { ShieldCheck, MapPin, PhoneCall, Mail, Building2, Award } from 'lucide-react';
import { PRIME_COMMUNITIES } from '@/data/realEstateData';

interface RealEstateFooterProps {
  onSelectCommunity: (commId: string) => void;
  onOpenViewing: () => void;
}

export const RealEstateFooter: React.FC<RealEstateFooterProps> = ({
  onSelectCommunity,
  onOpenViewing
}) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs font-light">
      {/* Top CTA Banner */}
      <div className="border-b border-zinc-900 bg-gradient-to-b from-zinc-900/40 to-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Curate Your UAE Real Estate Reserve
            </h3>
            <p className="text-zinc-400 text-sm font-light">
              Connect with our Private Client Wealth Advisors for confidential off-market acquisitions and bespoke family office mandates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenViewing}
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono shadow-xl shadow-amber-500/20 transition-all"
            >
              Book Private Chauffeur Tour
            </button>
            <a
              href="tel:+97143928100"
              className="px-6 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs flex items-center justify-center gap-2 border border-zinc-800 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>+971 4 392 8100</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Regulatory Credentials */}
        <div className="lg:col-span-2 space-y-4">
          <LuxestateLogo size="lg" />
          <p className="text-zinc-400 leading-relaxed max-w-sm">
            LUXESTATE UAE is the sovereign benchmark for prime and super-prime residential property acquisitions across Dubai and Abu Dhabi.
          </p>
          <div className="space-y-2 pt-2 text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>RERA Real Estate Brokerage License No. 84920</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Dubai Land Department (DLD) Authorized Escrow Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span>ADGM & DIFC Family Office Asset Advisor</span>
            </div>
          </div>
        </div>

        {/* Col 2: Prime Enclaves */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            Prime Enclaves
          </div>
          <ul className="space-y-2 font-mono text-[11px]">
            {PRIME_COMMUNITIES.slice(0, 6).map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => {
                    onSelectCommunity(c.id);
                    const el = document.getElementById('property-discovery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services & Advisory */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            Wealth Services
          </div>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#golden-visa-hub" className="hover:text-amber-400 transition-colors">10-Year UAE Golden Visa</a></li>
            <li><a href="#mortgage-roi" className="hover:text-amber-400 transition-colors">Private Client Mortgage Desk</a></li>
            <li><a href="#offplan-studio" className="hover:text-amber-400 transition-colors">Off-Plan Launch Allocations</a></li>
            <li><a href="#market-journal" className="hover:text-amber-400 transition-colors">Capital Appreciation Forecasts</a></li>
            <li><a href="#golden-visa-hub" className="hover:text-amber-400 transition-colors">DIFC SPV Structuring</a></li>
            <li><a href="#golden-visa-hub" className="hover:text-amber-400 transition-colors">DLD Title Deed Transfer</a></li>
          </ul>
        </div>

        {/* Col 4: Corporate Offices */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            UAE Headquarters
          </div>
          <div className="space-y-3 text-[11px]">
            <div>
              <div className="font-semibold text-white">Dubai DIFC Flagship</div>
              <p className="text-zinc-400">Gate Precinct Building 4, Level 7, DIFC, Dubai, UAE</p>
            </div>
            <div>
              <div className="font-semibold text-white">Abu Dhabi Advisory</div>
              <p className="text-zinc-400">Al Maryah Tower, ADGM Square, Abu Dhabi, UAE</p>
            </div>
            <div className="pt-2 font-mono text-amber-400">
              Direct: +971 4 392 8100
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Disclaimer Strip */}
      <div className="border-t border-zinc-900 py-8 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} LUXESTATE UAE PROPERTIES LLC. All Rights Reserved. RERA Registered Brokerage.
          </div>
          <div className="flex items-center gap-6">
            <span>DLD Escrow Guaranteed</span>
            <span>Zero Tax Regime</span>
            <span>AML & Compliance Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
