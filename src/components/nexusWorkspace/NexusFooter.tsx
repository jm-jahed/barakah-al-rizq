'use client';

import React from 'react';
import Link from 'next/link';
import { NEXUS_BRAND, NEXUS_LOCATIONS } from '@/data/nexusWorkspaceData';

export default function NexusFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-base shadow-md">
                N
              </div>
              <span className="text-base font-black text-white tracking-wider">
                {NEXUS_BRAND.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {NEXUS_BRAND.positioning}. Sovereign Grade-A serviced offices, meeting rooms, and instant DED mainland Ejari solutions across Dubai and Abu Dhabi.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500 space-y-1">
              <div>📞 UAE Central: <strong className="text-slate-300">{NEXUS_BRAND.phone}</strong></div>
              <div>💬 WhatsApp: <strong className="text-emerald-400">{NEXUS_BRAND.whatsapp}</strong></div>
              <div>✉️ Inquiries: <strong className="text-slate-300">{NEXUS_BRAND.email}</strong></div>
            </div>
          </div>

          {/* Locations Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              5 Flagship Centers
            </h4>
            <ul className="space-y-2 text-xs">
              {NEXUS_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <a href="#locations" className="hover:text-amber-400 transition block">
                    <span className="text-white block">{loc.name}</span>
                    <span className="text-[10px] text-slate-500">{loc.district}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suites & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Workspace Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#offices" className="hover:text-amber-400 transition">Executive Private Suites</a></li>
              <li><a href="#offices" className="hover:text-amber-400 transition">Presidential C-Suite HQ</a></li>
              <li><a href="#offices" className="hover:text-amber-400 transition">DED License Ready Offices</a></li>
              <li><a href="#offices" className="hover:text-amber-400 transition">Royal Boardrooms</a></li>
              <li><a href="#offices" className="hover:text-amber-400 transition">Full Enterprise Floorplates</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition text-amber-400 font-semibold">AED Space Calculator</a></li>
            </ul>
          </div>

          {/* Regulatory & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              UAE Compliance
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[11px]">
              {NEXUS_BRAND.regulatory.map((r, idx) => (
                <li key={idx} className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-slate-300 block font-bold">{r.title}</span>
                  <span className="text-amber-400/80 block text-[9px]">{r.ref}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p className="text-slate-500">
            © 2026 {NEXUS_BRAND.legalName}. All rights reserved across the United Arab Emirates.
          </p>
          <div className="flex items-center gap-6">
            <a href="#tour" className="hover:text-amber-400 transition">
              Private Tour Pass
            </a>
            <a href="https://wa.me/971508821122" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition">
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
