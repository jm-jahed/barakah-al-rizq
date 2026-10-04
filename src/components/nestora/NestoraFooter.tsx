'use client';

import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import { NESTORA_BRAND } from '@/data/nestoraData';

export const NestoraFooter: React.FC = () => {
  return (
    <footer className="bg-[#041113] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#0C2D31] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-extrabold text-[#F4EFE6] tracking-widest">{NESTORA_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{NESTORA_BRAND.tagline}" {NESTORA_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{NESTORA_BRAND.dubaiAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{NESTORA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{NESTORA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">LANDLORD SERVICES</h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Full Management (8%)</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Tenant Screening & Placement</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Ejari Registration & Compliance</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Rent Collection & Cheque Escrow</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">24/7 Facility Maintenance</a></li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">PRIME COMMUNITIES</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Dubai Marina & JBR</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Downtown Dubai</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Palm Jumeirah Fronds</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Dubai Hills Estate</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Jumeirah Village Circle (JVC)</a></li>
            </ul>
          </div>

          {/* Locations & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">OFFICES & LEGAL</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#locations" className="hover:text-[#C5A059] transition-colors">Dubai Business Bay HQ</a></li>
              <li><a href="#locations" className="hover:text-[#C5A059] transition-colors">Abu Dhabi Reem Island</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Landlord Terms of Service</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Fictional Portfolio Notice</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed">
          <strong>FICTIONAL PORTFOLIO DEMONSTRATION NOTICE:</strong> NESTORA is a fictional property management and landlord advisory brand created strictly for digital agency portfolio demonstration purposes. No real RERA license, Dubai Land Department authorization, or developer partnership is held or implied. All rental yields, case studies, and tenant statistics represent synthetic demo data.
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {NESTORA_BRAND.name} UAE Property Management S.A. All rights reserved. Portfolio Build #33.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Landlord Portal</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
