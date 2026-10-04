'use client';

import React from 'react';
import { 
  Truck, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferFooterProps {
  onOpenQuote: (defaultValues?: Record<string, string>) => void;
}

export default function ReeferFooter({ onOpenQuote }: ReeferFooterProps) {
  const { isDark } = useReeferTheme();

  const routes = [
    { name: 'Saudi Arabia (Riyadh / Jeddah / Dammam)', flag: '🇸🇦', id: 'saudi-arabia' },
    { name: 'Qatar (Doha / Al Wakrah)', flag: '🇶🇦', id: 'qatar' },
    { name: 'Kuwait (Kuwait City / Shuwaikh)', flag: '🇰🇼', id: 'kuwait' },
    { name: 'Bahrain (Manama / Causeway)', flag: '🇧🇭', id: 'bahrain' },
    { name: 'Oman (Muscat / Sohar)', flag: '🇴🇲', id: 'oman' },
    { name: 'Syria (Damascus Overland)', flag: '🇸🇾', id: 'syria' },
  ];

  const services = [
    '25-Ton Reefer Transport',
    'Chilled Transport (0°C to +4°C)',
    'Frozen Transport (-18°C to -25°C)',
    'GCC Cross-Border Customs Clearance',
    'Spot / Single Trip Basis',
    'Fixed Annual Contract Capacity',
  ];

  return (
    <footer className={`font-sans border-t pt-16 pb-24 md:pb-12 transition-colors duration-200 ${
      isDark ? 'bg-[#080C14] border-slate-800 text-slate-400' : 'bg-[#F8FAFC] border-slate-200 text-[#4B5563]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Operational Branding Ribbon */}
        <div className={`flex flex-col md:flex-row md:items-center justify-between pb-8 border-b gap-6 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 shadow-sm">
              <Truck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className={`font-black tracking-tight text-xl ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                DUBAI → GCC
              </div>
              <div className="text-amber-500 font-mono text-xs font-bold uppercase tracking-widest">
                25-TON REEFER TRANSPORT
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
            >
              Request Rate Calculation
            </button>
            <a
              href="https://wa.me/971508924471?text=Hello%20Khaleej%20Reefer,%20I%20need%20a%20GCC%20reefer%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-bold transition-colors flex items-center gap-1.5 shadow-2xs ${
                isDark ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/60' : 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp Dispatch</span>
            </a>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 01: Company Profile */}
          <div className="space-y-4">
            <div className={`font-bold text-sm font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              About Our Operations
            </div>
            <p className="text-xs leading-relaxed font-sans font-medium text-slate-400">
              Specialized UAE refrigerated road transport operating 20 dedicated 25-ton 15-meter reefer trailers. Built for temperature-sensitive foodstuff, dairy, meat, and fresh produce dispatches from Dubai across the GCC.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400 space-y-1 font-semibold">
              <div>• EN 12830 Thermal Compliance</div>
              <div>• Continuous 24/7 GPS Telemetry</div>
              <div>• Certified GCC Border Drivers</div>
            </div>
          </div>

          {/* Column 02: Routes */}
          <div className="space-y-4">
            <div className={`font-bold text-sm font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              GCC Route Network
            </div>
            <ul className="space-y-2 text-xs font-medium">
              {routes.map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => onOpenQuote({ destination: r.name.split(' ')[0] })}
                    className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer"
                  >
                    <span>{r.flag}</span>
                    <span>{r.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 03: Services */}
          <div className="space-y-4">
            <div className={`font-bold text-sm font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              Specialized Cold Services
            </div>
            <ul className="space-y-2 text-xs font-medium">
              {services.map((s, i) => (
                <li key={i} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-[#4B5563] hover:text-[#111111]'}`}>
                  • {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 04: Official UAE Contact */}
          <div className="space-y-4">
            <div className={`font-bold text-sm font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              Direct Dispatch & Contact
            </div>
            <div className="space-y-3 text-xs font-mono font-medium">
              <a
                href="tel:+97148812900"
                className="flex items-center gap-2.5 text-slate-400 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+971 4 881 2900 (Main Desk)</span>
              </a>

              <a
                href="https://wa.me/971508924471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+971 50 892 4471 (WhatsApp 24/7)</span>
              </a>

              <a
                href="mailto:dispatch@khaleejreefer.ae"
                className="flex items-center gap-2.5 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <span>dispatch@khaleejreefer.ae</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-sans text-xs">
                  Al Aweer Fruit & Veg Wholesale Complex / JAFZA South Logistics Gate, Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Operational Disclaimer & Copyright */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-[#6B7280]'
        }`}>
          <div>
            © {new Date().getFullYear()} KHALEEJ REEFER LOGISTICS (KRL UAE). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-[#4B5563]'}`}>25-Ton Cold-Chain Infrastructure</span>
            <span>•</span>
            <span className="text-amber-500 font-bold">Dubai to GCC Line-Haul</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
