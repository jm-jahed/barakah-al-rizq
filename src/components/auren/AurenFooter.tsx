'use client';

import React from 'react';
import { Compass, Phone, Mail, MapPin, ShieldAlert } from 'lucide-react';
import { AUREN_BRAND } from '@/data/aurenData';

export const AurenFooter: React.FC = () => {
  return (
    <footer className="bg-[#040505] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#1A1D1B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-extrabold text-[#F8F6F0] tracking-[0.2em]">{AUREN_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{AUREN_BRAND.tagline}" {AUREN_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{AUREN_BRAND.difcAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{AUREN_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{AUREN_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Advisory Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">ADVISORY MANDATES</h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Wealth Management</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Portfolio Structuring</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Succession & Governance</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Family Office (DIFC/ADGM)</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Corporate Exit Advisory</a></li>
            </ul>
          </div>

          {/* Client Profiles */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">CLIENT PROFILES</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#client-profiles" className="hover:text-[#D4AF37] transition-colors">Entrepreneurs & Exit Founders</a></li>
              <li><a href="#client-profiles" className="hover:text-[#D4AF37] transition-colors">Family Offices & Patriarchs</a></li>
              <li><a href="#client-profiles" className="hover:text-[#D4AF37] transition-colors">C-Suite Executives</a></li>
              <li><a href="#client-profiles" className="hover:text-[#D4AF37] transition-colors">Real Estate SPV Investors</a></li>
            </ul>
          </div>

          {/* Locations & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">CHAMBERS & LEGAL</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Dubai DIFC Precinct 4</a></li>
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Abu Dhabi ADGM Al Sila</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">Risk Disclosure Notice</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">Discretion & Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Regulatory Risk Disclosure Banner */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed space-y-2">
          <p>
            <strong>REGULATORY RISK DISCLOSURE & DISCLAIMER:</strong> Investing involves risk. The value of investments may rise or fall, and past performance is not indicative of future results. Information presented on this website is for general information purposes only and does not constitute investment, financial, legal or tax advice. Consult an appropriately licensed financial professional for advice based on your individual circumstances.
          </p>
          <p>
            <strong>FICTIONAL PORTFOLIO DEMONSTRATION NOTICE:</strong> AUREN CAPITAL is a fictional private wealth advisory concept created strictly for digital agency portfolio demonstration purposes. No DFSA, FSRA, or real financial services licensing is held or implied. All AUM statistics, client quotes, and case studies represent synthetic demo data.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {AUREN_BRAND.name} UAE Private Wealth Advisory S.A. All rights reserved. Portfolio Build #32.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
            <a href="#faq" className="hover:text-[#D4AF37] transition-colors">Terms of Advisory</a>
            <a href="#faq" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
