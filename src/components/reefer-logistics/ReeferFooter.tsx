'use client';

import React from 'react';
import Link from 'next/link';
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  ArrowUpRight,
  Globe2
} from 'lucide-react';
import { REEFER_COMPANY_INFO, GCC_ROUTES } from '@/data/reeferLogisticsData';

interface ReeferFooterProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferFooter({ onOpenQuote }: ReeferFooterProps) {
  const routesList = [
    { country: 'Saudi Arabia', flag: '🇸🇦', id: 'route-ksa' },
    { country: 'Qatar', flag: '🇶🇦', id: 'route-qatar' },
    { country: 'Kuwait', flag: '🇰🇼', id: 'route-kuwait' },
    { country: 'Bahrain', flag: '🇧🇭', id: 'route-bahrain' },
    { country: 'Oman', flag: '🇴🇲', id: 'route-oman' },
    { country: 'Syria', flag: '🇸🇾', id: 'route-syria' },
  ];

  const servicesList = [
    '25-Ton Reefer Road Transport',
    'Chilled Cargo (+2°C to +4°C)',
    'Sub-Zero Frozen Transport (-18°C)',
    'GCC Cross-Border Clearance',
    'Al Aweer & JAFZA Dock Staging',
    'Spot / Trip Basis Dispatch',
    'Fixed Annual Fleet Contracts',
    'Dual NIST Telematics & Temperature Log'
  ];

  return (
    <footer className="bg-[#04070d] text-slate-400 border-t border-white/10 pt-16 pb-12 text-left text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Corporate Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">
                  DUBAI → GCC
                </div>
                <div className="text-[11px] text-sky-400 font-bold">
                  25-TON REEFER TRANSPORT
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              Specialized UAE refrigerated road transportation infrastructure operating 20 dedicated 25-Ton / 15-meter reefer trailers connecting Dubai (Al Aweer & JAFZA) to Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and regional corridors.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px]">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                20 Dedicated Trailers
              </span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                25-Ton Payload
              </span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                -18°C ↔ +4°C Certified
              </span>
            </div>
          </div>

          {/* GCC Cross-Border Routes */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              GCC REEFER ROUTES
            </div>
            <ul className="space-y-2">
              {routesList.map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => onOpenQuote({ route: r.id, destination: r.country })}
                    className="hover:text-sky-300 transition-colors flex items-center gap-2 text-left"
                  >
                    <span>{r.flag}</span>
                    <span>Dubai ⇄ {r.country}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              REFRIGERATED SERVICES
            </div>
            <ul className="space-y-2">
              {servicesList.map((s, i) => (
                <li key={i} className="flex items-center gap-1.5 text-slate-300">
                  <span className="text-sky-400 text-[10px]">▪</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hub Locations */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              UAE DISPATCH
            </div>
            
            <div className="space-y-2.5">
              <a
                href={`tel:${REEFER_COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{REEFER_COMPANY_INFO.phone}</span>
              </a>

              <a
                href={REEFER_COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>+971 50 892 4477</span>
              </a>

              <a
                href={`mailto:${REEFER_COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{REEFER_COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Al Aweer Fruit Market & JAFZA South, Dubai, UAE
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Portfolio Navigation Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} TRANS-GCC REEFER LOGISTICS • Dubai, UAE. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenQuote()}
              className="text-sky-400 hover:text-sky-300 font-bold"
            >
              Get Transport Quote
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
