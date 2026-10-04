'use client';

import React from 'react';
import Link from 'next/link';
import { PristineLogo } from './PristineLogo';
import { ShieldCheck, MapPin, PhoneCall, Mail, Building2, Award, Car, CheckCircle2 } from 'lucide-react';
import { CLEANING_CATEGORIES, SERVICE_AREAS } from '@/data/cleaningData';

interface CleaningFooterProps {
  onSelectCategory: (catId: string) => void;
  onOpenDispatch: () => void;
}

export const CleaningFooter: React.FC<CleaningFooterProps> = ({
  onSelectCategory,
  onOpenDispatch
}) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs font-light">
      {/* Top CTA Banner */}
      <div className="border-b border-zinc-900 bg-gradient-to-b from-zinc-900/40 to-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Experience the Sovereign Standard of Clean
            </h3>
            <p className="text-zinc-400 text-sm font-light">
              Connect with our Central Dispatch Desk for immediate villa deep cleaning, diamond marble honing, or enterprise facility management proposals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenDispatch}
              className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4" />
              <span>Book Instant Van Dispatch</span>
            </button>
            <a
              href="tel:+97143928400"
              className="px-6 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs flex items-center justify-center gap-2 border border-zinc-800 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+971 4 392 8400</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Credentials */}
        <div className="lg:col-span-2 space-y-4">
          <PristineLogo size="lg" />
          <p className="text-zinc-400 leading-relaxed max-w-sm">
            PRISTINE UAE is the sovereign benchmark in architectural deep sanitization, Italian diamond stone restoration, and institutional facility management across Dubai and Abu Dhabi.
          </p>
          <div className="space-y-2 pt-2 text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Dubai Municipality Permit No. 94821</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-400" />
              <span>British BICSc & ISO 9001:2015 Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>AED 5,000,000 Third-Party Liability Insured</span>
            </div>
          </div>
        </div>

        {/* Col 2: Core Disciplines */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            Disciplines
          </div>
          <ul className="space-y-2 font-mono text-[11px]">
            {CLEANING_CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => {
                    onSelectCategory(c.id);
                    const el = document.getElementById('service-discovery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Service Areas */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            Fleet Coverage
          </div>
          <ul className="space-y-2 text-[11px]">
            {SERVICE_AREAS.map((area, idx) => (
              <li key={idx} className="flex items-center justify-between text-zinc-400">
                <span>{area.name}</span>
                <span className="font-mono text-[10px] text-emerald-400">{area.deliveryTime.split('(')[0]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Corporate Offices */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            UAE Operations
          </div>
          <div className="space-y-3 text-[11px]">
            <div>
              <div className="font-semibold text-white">DIFC Central Command</div>
              <p className="text-zinc-400">Level 14, Al Saada Tower, DIFC, Dubai, UAE</p>
            </div>
            <div>
              <div className="font-semibold text-white">Abu Dhabi Fleet Hub</div>
              <p className="text-zinc-400">Al Maryah Hub, ADGM Square, Abu Dhabi, UAE</p>
            </div>
            <div className="pt-2 font-mono text-emerald-400">
              Emergency Dispatch: +971 4 392 8400
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="border-t border-zinc-900 py-8 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} PRISTINE UAE FACILITY SERVICES LLC. All Rights Reserved. Dubai Municipality Registered.
          </div>
          <div className="flex items-center gap-6">
            <span>DHA Medical Compliant</span>
            <span>100% Non-Toxic & Pet Safe</span>
            <span>AED 5M Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
