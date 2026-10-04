'use client';

import React from 'react';
import { Scale, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { VERITAS_BRAND } from '@/data/veritasData';

export const VeritasFooter: React.FC = () => {
  return (
    <footer className="bg-[#070D1D] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#0F1C3F] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-extrabold text-[#FAF8F5] tracking-widest">{VERITAS_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              "{VERITAS_BRAND.tagline}" {VERITAS_BRAND.positioning}.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VERITAS_BRAND.difcAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VERITAS_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{VERITAS_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">PRACTICE AREAS</h4>
            <ul className="space-y-2 text-stone-400 font-serif text-xs">
              <li><a href="#practices" className="hover:text-[#C5A059] transition-colors">Corporate & Commercial</a></li>
              <li><a href="#practices" className="hover:text-[#C5A059] transition-colors">Mergers & Acquisitions</a></li>
              <li><a href="#practices" className="hover:text-[#C5A059] transition-colors">Contract Drafting & Review</a></li>
              <li><a href="#practices" className="hover:text-[#C5A059] transition-colors">Corporate Structuring</a></li>
              <li><a href="#practices" className="hover:text-[#C5A059] transition-colors">Dispute Resolution & DIAC</a></li>
            </ul>
          </div>

          {/* Jurisdictions */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">JURISDICTIONS</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#jurisdictions" className="hover:text-[#C5A059] transition-colors">DIFC Financial Free Zone</a></li>
              <li><a href="#jurisdictions" className="hover:text-[#C5A059] transition-colors">ADGM Global Market</a></li>
              <li><a href="#jurisdictions" className="hover:text-[#C5A059] transition-colors">Dubai Onshore DED</a></li>
              <li><a href="#jurisdictions" className="hover:text-[#C5A059] transition-colors">Abu Dhabi Onshore ADDED</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">CHAMBERS & LEGAL</h4>
            <ul className="space-y-2 text-stone-400 font-mono text-[11px]">
              <li><a href="#locations" className="hover:text-[#C5A059] transition-colors">Chambers Locations</a></li>
              <li><a href="#insights" className="hover:text-[#C5A059] transition-colors">Legal Briefings Journal</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Informational Disclaimer</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">Privacy & Privilege Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 pb-6 text-[10px] font-mono text-stone-500 border-b border-stone-800 leading-relaxed">
          <strong>LEGAL NOTICE & FICTIONAL PORTFOLIO DISCLAIMER:</strong> VERITAS LEGAL is a fictional law firm website created solely for digital agency portfolio demonstration purposes. All attorney profiles, transaction statistics, and client case studies represent synthetic demo data. Communications through this website are for general informational demonstration and do not constitute formal legal advice or establish an attorney-client relationship under UAE law.
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {VERITAS_BRAND.name} UAE Corporate Advisory S.A. All rights reserved. Portfolio Build #30.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Privilege Policy</a>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Terms of Engagement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
