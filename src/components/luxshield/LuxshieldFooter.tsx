'use client';

import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { LUXSHIELD_BRAND } from '@/data/luxshieldData';

export const LuxshieldFooter: React.FC = () => {
  return (
    <footer className="bg-[#07080A] text-white pt-16 pb-12 border-t border-blue-500/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                LUX<span className="text-blue-500">SHIELD</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              LUXSHIELD AUTO — "Protection Meets Perfection." Climate-engineered ceramic coating, self-healing PPF, and paint restoration across Dubai and Abu Dhabi.
            </p>
            <div className="text-xs font-mono text-amber-300 space-y-1 pt-2">
              <p>📞 {LUXSHIELD_BRAND.phone}</p>
              <p>✉️ {LUXSHIELD_BRAND.email}</p>
              <p>📍 Al Quoz Industrial 1, Dubai • Mussafah M-14, Abu Dhabi</p>
            </div>
          </div>

          {/* Column Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#services" className="hover:text-white">Ceramic Coating (9H)</a></li>
              <li><a href="#services" className="hover:text-white">Paint Protection Film (PPF)</a></li>
              <li><a href="#services" className="hover:text-white">Interior Detailing &amp; Leather</a></li>
              <li><a href="#services" className="hover:text-white">Exterior Detailing &amp; Wash</a></li>
              <li><a href="#services" className="hover:text-white">Paint Correction &amp; Polish</a></li>
              <li><a href="#services" className="hover:text-white">IR Window Tinting</a></li>
            </ul>
          </div>

          {/* Column Packages */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-4">
              PACKAGES &amp; LOCATIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#packages" className="hover:text-white">Essential (Up to 2-Yr)</a></li>
              <li><a href="#packages" className="hover:text-white">Signature (Up to 5-Yr)</a></li>
              <li><a href="#packages" className="hover:text-white">Ultimate (Up to 7-Yr)</a></li>
              <li><a href="#contact" className="hover:text-white">Dubai Studio (Al Quoz 1)</a></li>
              <li><a href="#contact" className="hover:text-white">Abu Dhabi Studio (Mussafah)</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-4">
              COMPANY &amp; LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#whyus" className="hover:text-white">About LUXSHIELD</a></li>
              <li><a href="#casestudy" className="hover:text-white">Porsche 911 Case Study</a></li>
              <li><a href="#insights" className="hover:text-white">Protection Guides</a></li>
              <li><a href="#faq" className="hover:text-white">Studio FAQ</a></li>
              <li><span className="text-gray-600">Privacy Policy</span></li>
              <li><span className="text-gray-600">Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-4">
          <p>© 2026 LUXSHIELD AUTO UAE. Fictional agency portfolio brand demo. All warranty claims package-dependent up to 7 years.</p>
        </div>
      </div>
    </footer>
  );
};