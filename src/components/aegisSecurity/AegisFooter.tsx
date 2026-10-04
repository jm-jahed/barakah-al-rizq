'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, MessageSquare, Radio } from 'lucide-react';
import { AEGIS_BRAND, AEGIS_SERVICES, AEGIS_REGIONS } from '@/data/aegisSecurityData';

export default function AegisFooter() {
  return (
    <footer className="bg-[#020408] border-t border-slate-800 text-slate-400 text-xs py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-black text-white tracking-wider">
                {AEGIS_BRAND.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {AEGIS_BRAND.subheading}
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>UAE Central Hotline: <strong className="text-white">{AEGIS_BRAND.phone}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>24/7 Rapid Command Ops: <strong className="text-emerald-400">{AEGIS_BRAND.hotline247}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Confidential Inquiries: <strong className="text-slate-300">{AEGIS_BRAND.email}</strong></span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">{AEGIS_BRAND.headquarters.address}</span>
              </div>
            </div>
          </div>

          {/* Security Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Security Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              {AEGIS_SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-cyan-400 transition block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* UAE Regional Coverage */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              UAE Regional Hubs
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {AEGIS_REGIONS.map((r) => (
                <li key={r.id}>
                  <a href="#coverage" className="hover:text-cyan-400 transition flex items-center justify-between">
                    <span className="text-slate-300">{r.city}</span>
                    <span className="text-[10px] text-cyan-400">{r.rapidResponseTime.split(' ')[0]} {r.rapidResponseTime.split(' ')[1]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Accreditations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              UAE Certifications
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {AEGIS_BRAND.regulatory.map((r, idx) => (
                <li key={idx} className="p-2 bg-slate-950 rounded-lg border border-slate-800/80">
                  <span className="text-slate-200 font-bold block">{r.title}</span>
                  <span className="text-cyan-400 text-[9px] block mt-0.5">{r.ref}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>
            &copy; 2026 {AEGIS_BRAND.legalName}. All rights reserved across Dubai, Abu Dhabi, and the UAE.
          </p>
          <div className="flex items-center gap-6">
            <a href="#assessment" className="hover:text-cyan-400 transition">
              Risk Assessment
            </a>
            <a href={AEGIS_BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition">
              WhatsApp Command
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
