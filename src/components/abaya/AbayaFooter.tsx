'use client';

import React from 'react';
import { Phone, Mail, MapPin, Crown } from 'lucide-react';
import { ABAYA_BRAND } from '@/data/abayaData';

export const AbayaFooter: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#121212] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <span className="font-serif font-black text-sm">N</span>
              </div>
              <span className="text-xl font-serif font-extrabold text-[#FAFAFA] tracking-widest">{ABAYA_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{ABAYA_BRAND.tagline}" {ABAYA_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{ABAYA_BRAND.boutiqueAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{ABAYA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{ABAYA_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">COLLECTIONS</h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">Ramadan & Eid Edition</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">Luxury Evening Couture</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">Everyday Minimal Chic</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">Embroidered Silk Abayas</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">Liquid Satin Kimonos</a></li>
            </ul>
          </div>

          {/* Client Care */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">CLIENT CARE</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#delivery" className="hover:text-[#C5A059] transition-colors">Same-Day UAE Delivery</a></li>
              <li><a href="#catalog" className="hover:text-[#C5A059] transition-colors">Complimentary Custom Sizing</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">7-Day Home Exchanges</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Tabby 4-Payment Setup</a></li>
            </ul>
          </div>

          {/* Boutiques */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">BOUTIQUES & LEGAL</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#delivery" className="hover:text-[#C5A059] transition-colors">Fashion Avenue Dubai Mall</a></li>
              <li><a href="#delivery" className="hover:text-[#C5A059] transition-colors">Galleria Abu Dhabi</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Boutique Terms of Service</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Fictional Demo Notice</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed">
          <strong>FICTIONAL E-COMMERCE PORTFOLIO DEMONSTRATION NOTICE:</strong> NOURA ABAYA is a fictional women's luxury abaya e-commerce brand created strictly for digital agency portfolio demonstration purposes. All 100 abaya products, prices in AED, and client reviews represent synthetic demonstration data.
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {ABAYA_BRAND.name} UAE. All rights reserved. Portfolio Build #35.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">VIP Client Portal</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
