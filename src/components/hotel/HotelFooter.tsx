'use client';

import React from 'react';
import { MapPin, Phone, Mail, Globe, Share2, Sparkles } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

export const HotelFooter: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-serif font-bold bg-[#29221D]">
                V
              </div>
              <span className="text-xl font-extrabold text-[#F7F4EE] tracking-widest font-serif">{VELORA_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              {VELORA_BRAND.subheading}
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VELORA_BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VELORA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VELORA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">EXPLORE</h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#house" className="hover:text-[#C5A059] transition-colors">The Sanctuary</a></li>
              <li><a href="#rooms" className="hover:text-[#C5A059] transition-colors">Palace Suites & Villas</a></li>
              <li><a href="#dining" className="hover:text-[#C5A059] transition-colors">ORA 2★ Michelin</a></li>
              <li><a href="#spa" className="hover:text-[#C5A059] transition-colors">24K Gold Hammam</a></li>
              <li><a href="#experiences" className="hover:text-[#C5A059] transition-colors">Superyacht Charters</a></li>
            </ul>
          </div>

          {/* Hotel */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">HOSPITALITY</h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#gallery" className="hover:text-[#C5A059] transition-colors">Visual Gallery</a></li>
              <li><a href="#location" className="hover:text-[#C5A059] transition-colors">Jumeirah Bay Location</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">UAE Palace FAQ</a></li>
              <li><a href="#location" className="hover:text-[#C5A059] transition-colors">DXB Rolls-Royce Transfers</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">RESERVATIONS & DESK</h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href={VELORA_BRAND.whatsapp} target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline">WhatsApp Direct (+971 50)</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Royal Butler Terms</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Privacy & VIP Protocol</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Currency: AED (د.إ)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {VELORA_BRAND.name} LLC (Dubai, UAE). All rights reserved. Concept Agency Build #25.
          </p>

          <div className="text-stone-500">
            JUMEIRAH BAY ISLAND • DUBAI, UAE • EST. {VELORA_BRAND.establishedYear}
          </div>
        </div>

      </div>
    </footer>
  );
};
