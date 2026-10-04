'use client';

import React from 'react';
import { FileSpreadsheet, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { LEDGERA_BRAND } from '@/data/ledgeraData';

export const LedgeraFooter: React.FC = () => {
  return (
    <footer className="bg-[#05170F] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#0E3B27] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-extrabold text-[#F7F6F2] tracking-widest">{LEDGERA_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{LEDGERA_BRAND.tagline}" {LEDGERA_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{LEDGERA_BRAND.dubaiAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{LEDGERA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{LEDGERA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Bookkeeping & Accounting</a></li>
              <li><a href="#tax-section" className="hover:text-[#D4AF37] transition-colors">Corporate Tax Advisory (9%)</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">VAT Registration & Returns</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Audit & Assurance Support</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Payroll & WPS Processing</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">INDUSTRIES</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">E-Commerce & Digital</a></li>
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">Real Estate & Property</a></li>
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">Construction & Engineering</a></li>
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">Retail & Hospitality</a></li>
            </ul>
          </div>

          {/* Locations & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">LOCATIONS & LEGAL</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Dubai Business Bay HQ</a></li>
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Abu Dhabi ADGM Office</a></li>
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Sharjah Advisory Desk</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">Regulatory Disclaimer</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed">
          <strong>GENERAL REGULATORY DISCLAIMER:</strong> LEDGERA is a fictional accounting, tax, and compliance consultancy website created for digital agency portfolio demonstration purposes. All financial calculations, case study statistics, and client reviews represent synthetic demo data. Information on this website is provided for general guidance only and does not constitute formal accounting, tax, or legal advice under UAE law.
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {LEDGERA_BRAND.name} UAE Accounting Advisory S.A. All rights reserved. Portfolio Build #31.
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
