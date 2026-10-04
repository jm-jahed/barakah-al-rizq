'use client';

import React from 'react';
import { Palmtree, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { OASIRA_BRAND } from '@/data/oasiraData';

export const OasiraFooter: React.FC = () => {
  return (
    <footer className="bg-[#071F18] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#0F382C] border border-[#D4B382]/40 flex items-center justify-center text-[#D4B382]">
                <Palmtree className="w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-extrabold text-[#FAF6EE] tracking-widest">{OASIRA_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{OASIRA_BRAND.tagline}" {OASIRA_BRAND.subheading}
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4B382]" />
                <span>{OASIRA_BRAND.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4B382]" />
                <span>{OASIRA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4B382]" />
                <span>{OASIRA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">EXPLORE</h4>
            <ul className="space-y-2.5 text-stone-400 font-serif text-xs">
              <li><a href="#resorts" className="hover:text-[#D4B382] transition-colors">UAE Luxury Resorts</a></li>
              <li><a href="#destinations" className="hover:text-[#D4B382] transition-colors">7 Emirates Guide</a></li>
              <li><a href="#experiences" className="hover:text-[#D4B382] transition-colors">Private Yacht Charters</a></li>
              <li><a href="#staycations" className="hover:text-[#D4B382] transition-colors">Weekend Staycations</a></li>
              <li><a href="#guide" className="hover:text-[#D4B382] transition-colors">Editorial Journal</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">EMIRATES</h4>
            <ul className="space-y-2.5 text-stone-400 font-mono text-[11px]">
              <li><a href="#destinations" className="hover:text-[#D4B382] transition-colors">Dubai Palm & Jumeirah</a></li>
              <li><a href="#destinations" className="hover:text-[#D4B382] transition-colors">Abu Dhabi Saadiyat</a></li>
              <li><a href="#destinations" className="hover:text-[#D4B382] transition-colors">Ras Al Khaimah Dunes</a></li>
              <li><a href="#destinations" className="hover:text-[#D4B382] transition-colors">Fujairah Ocean Coast</a></li>
              <li><a href="#destinations" className="hover:text-[#D4B382] transition-colors">Al Ain Mountain Oasis</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">SUPPORT & LEGAL</h4>
            <ul className="space-y-2.5 text-stone-400 font-mono text-[11px]">
              <li><a href={OASIRA_BRAND.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#D4B382] transition-colors">WhatsApp Concierge</a></li>
              <li><a href="#rewards" className="hover:text-[#D4B382] transition-colors">OASIRA Rewards</a></li>
              <li><a href="#faq" className="hover:text-[#D4B382] transition-colors">100% AED Price Guarantee</a></li>
              <li><a href="#faq" className="hover:text-[#D4B382] transition-colors">Privacy & Hospitality Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {OASIRA_BRAND.name} UAE Travel Technologies S.A. All rights reserved. Portfolio Build #27.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#D4B382] transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
