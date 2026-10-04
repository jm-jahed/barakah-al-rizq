'use client';

import React from 'react';
import Link from 'next/link';
import { Sun } from 'lucide-react';
import { DUNECRAFT_BRAND } from '@/data/dunecraftData';

export const DunecraftFooter: React.FC = () => {
  return (
    <footer className="bg-[#0E0601] text-white pt-16 pb-12 border-t border-amber-500/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-black">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                DUNE<span className="text-amber-400">CRAFT</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              DUNECRAFT — "Where the Desert Comes Alive." Premium UAE desert safaris, red dune bashing, VIP Bedouin camping, quad biking, and corporate desert offsites.
            </p>
            <div className="text-xs font-mono text-amber-300 space-y-1 pt-2">
              <p>📞 {DUNECRAFT_BRAND.phone}</p>
              <p>✉️ {DUNECRAFT_BRAND.email}</p>
              <p>📍 Al Awir Red Dunes Reserve (Dubai) • Al Khatim Reserve (Abu Dhabi)</p>
            </div>
          </div>

          {/* Column Experiences */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              EXPERIENCES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#experiences" className="hover:text-white">Red Dune Sunset Safari</a></li>
              <li><a href="#experiences" className="hover:text-white">Private VIP Royal Safari</a></li>
              <li><a href="#experiences" className="hover:text-white">Overnight Glamping Safari</a></li>
              <li><a href="#experiences" className="hover:text-white">Extreme Quad Biking</a></li>
              <li><a href="#experiences" className="hover:text-white">Sunrise Camel Trek</a></li>
              <li><a href="#corporate" className="hover:text-white">Corporate Camp Buyouts</a></li>
            </ul>
          </div>

          {/* Column Gateways */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              DESERT GATEWAYS
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#gateways" className="hover:text-white">Dubai Al Awir Reserve</a></li>
              <li><a href="#gateways" className="hover:text-white">Abu Dhabi Al Khatim Reserve</a></li>
              <li><a href="#planner" className="hover:text-white">Hotel Pickup Zones</a></li>
              <li><a href="#whyus" className="hover:text-white">RTA Certified Drivers</a></li>
            </ul>
          </div>

          {/* Column Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              COMPANY &amp; LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#whyus" className="hover:text-white">About DUNECRAFT</a></li>
              <li><a href="#casestudy" className="hover:text-white">Tech Offsite Case Study</a></li>
              <li><a href="#insights" className="hover:text-white">Desert Packing Guides</a></li>
              <li><a href="#faq" className="hover:text-white">Safari FAQ</a></li>
              <li><span className="text-gray-600">Privacy Policy</span></li>
              <li><span className="text-gray-600">Terms &amp; Weather Policy</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-4">
          <p>© 2026 DUNECRAFT UAE. Fictional agency portfolio brand demo. All safari activities conducted by licensed off-road guides.</p>
        </div>
      </div>
    </footer>
  );
};