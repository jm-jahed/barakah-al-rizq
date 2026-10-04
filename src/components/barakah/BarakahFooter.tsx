'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';

export const BarakahFooter: React.FC = () => {
  return (
    <footer className="bg-[#041B11] text-white pt-16 pb-12 border-t border-amber-500/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/barakah-logo.png"
                alt="BARAKAH AL RIZQ Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed font-light max-w-sm">
              BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C — &ldquo;Quality You Can Trust, Service You Can Rely On.&rdquo; Premier UAE foodstuff importer, exporter, wholesaler, and bulk distributor headquartered at Al Aweer Veg Market, Ras Al Khor, Dubai.
            </p>
            <div className="text-xs font-mono text-amber-300 space-y-2 pt-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BARAKAH_BRAND.phones[0]} / {BARAKAH_BRAND.phones[1]}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BARAKAH_BRAND.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-tight">{BARAKAH_BRAND.address}</span>
              </p>
            </div>
          </div>

          {/* Column Products */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              PRODUCT CATEGORIES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li><a href="#products" className="hover:text-white">Fresh Vegetables &amp; Produce</a></li>
              <li><a href="#products" className="hover:text-white">Fresh Fruits (Citrus &amp; Apples)</a></li>
              <li><a href="#products" className="hover:text-white">1121 Steam Basmati Rice</a></li>
              <li><a href="#products" className="hover:text-white">Pulses &amp; Lentils (Dal)</a></li>
              <li><a href="#products" className="hover:text-white">Whole Spices &amp; Black Pepper</a></li>
              <li><a href="#products" className="hover:text-white">Cashews &amp; Dry Foodstuffs</a></li>
            </ul>
          </div>

          {/* Column Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              CORE SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li><a href="#services" className="hover:text-white">Direct International Food Import</a></li>
              <li><a href="#services" className="hover:text-white">GCC Re-Export Logistics</a></li>
              <li><a href="#live-prices" className="hover:text-white">Al Aweer Spot Price Feed</a></li>
              <li><a href="#services" className="hover:text-white">Supermarket Wholesale SLAs</a></li>
              <li><a href="#services" className="hover:text-white">Reefer Truck Cold Chain Supply</a></li>
            </ul>
          </div>

          {/* Column Legal & Corporate */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              CORPORATE &amp; LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li><a href="#about" className="hover:text-white">Managing Director MD HABEER KHAN</a></li>
              <li><a href="#whyus" className="hover:text-white">Dubai Municipality Compliance</a></li>
              <li><a href="#whyus" className="hover:text-white">GSO Food Safety Standards</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Commercial Desk</a></li>
              <li><span className="text-gray-500">Privacy Policy</span></li>
              <li><span className="text-gray-500">Terms of Wholesale Trade</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400 font-mono gap-4">
          <p>© 2026 BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. Quality You Can Trust, Service You Can Rely On.</p>
        </div>
      </div>
    </footer>
  );
};