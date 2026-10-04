'use client';

import React from 'react';
import { Building, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { NEXORA_BRAND } from '@/data/nexoraData';

export const NexoraFooter: React.FC = () => {
  return (
    <footer className="bg-[#0B0D0F] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#1A1D24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-extrabold text-[#F7F6F2] tracking-wider">{NEXORA_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{NEXORA_BRAND.tagline}" {NEXORA_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{NEXORA_BRAND.dubaiAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{NEXORA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{NEXORA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#setup" className="hover:text-[#D4AF37] transition-colors">Business Setup & Licensing</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Corporate Structuring</a></li>
              <li><a href="#market-entry" className="hover:text-[#D4AF37] transition-colors">UAE Market Entry</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">9% Corporate Tax Compliance</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Corporate PRO Services</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">INDUSTRIES</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">Technology & SaaS</a></li>
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">Real Estate & PropTech</a></li>
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">E-Commerce & Retail</a></li>
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">Healthcare & Pharma</a></li>
              <li><a href="#industries" className="hover:text-[#D4AF37] transition-colors">Professional Services</a></li>
            </ul>
          </div>

          {/* Locations & Support */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">LOCATIONS</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Dubai (ICD Brookfield DIFC)</a></li>
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Abu Dhabi (Al Maryah Island)</a></li>
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Sharjah Media City</a></li>
              <li><a href="#locations" className="hover:text-[#D4AF37] transition-colors">Ras Al Khaimah RAKEZ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {NEXORA_BRAND.name} UAE Business Advisory S.A. All rights reserved. Portfolio Build #29.
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
