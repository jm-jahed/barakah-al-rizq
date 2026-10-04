'use client';

import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import { VANTAGE_BRAND } from '@/data/vantageData';

export const VantageFooter: React.FC = () => {
  return (
    <footer className="bg-[#030914] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#0A192F] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-extrabold text-[#FAFAFA] tracking-widest">{VANTAGE_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{VANTAGE_BRAND.tagline}" {VANTAGE_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VANTAGE_BRAND.dubaiAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VANTAGE_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VANTAGE_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Flagships */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">FLAGSHIP DEVELOPMENTS</h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#projects" className="hover:text-[#C5A059] transition-colors">Vantage Horizon (Dubai Marina)</a></li>
              <li><a href="#projects" className="hover:text-[#C5A059] transition-colors">Vantage Crest Villas (Dubai Hills)</a></li>
              <li><a href="#projects" className="hover:text-[#C5A059] transition-colors">Vantage Bay Residences (Business Bay)</a></li>
              <li><a href="#projects" className="hover:text-[#C5A059] transition-colors">Vantage Reem Towers (Abu Dhabi)</a></li>
            </ul>
          </div>

          {/* Masterplans */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">MASTERPLAN DESTINATIONS</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Waterfront Living District</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Urban Metropolis Residences</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Golf & Sanctuary Enclaves</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Mixed-Use Landmark Hubs</a></li>
            </ul>
          </div>

          {/* Sales Galleries & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">GALLERIES & LEGAL</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#sales-offices" className="hover:text-[#C5A059] transition-colors">Dubai Business Bay Sales HQ</a></li>
              <li><a href="#sales-offices" className="hover:text-[#C5A059] transition-colors">Abu Dhabi Reem Island Suite</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Off-Plan Escrow Policies</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Fictional Portfolio Notice</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed">
          <strong>FICTIONAL PORTFOLIO DEMONSTRATION NOTICE:</strong> VANTAGE DEVELOPMENTS is a fictional property development brand created strictly for digital agency portfolio demonstration purposes. No real Dubai Land Department (DLD) registration, RERA developer license, or real project escrow account is held or implied. All project starting prices, handover dates, and masterplan metrics represent synthetic demo data.
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {VANTAGE_BRAND.name} UAE. All rights reserved. Portfolio Build #34.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Investor Portal</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
