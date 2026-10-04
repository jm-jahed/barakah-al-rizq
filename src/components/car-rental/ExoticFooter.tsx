'use client';

import React from 'react';
import Link from 'next/link';
import { ApexMotorsLogo } from './ApexMotorsLogo';
import { ShieldCheck, MapPin, PhoneCall, Mail, Building2, Award, Zap, Car } from 'lucide-react';
import { VEHICLE_CATEGORIES, RENTAL_LOCATIONS } from '@/data/carRentalData';

interface ExoticFooterProps {
  onSelectCategory: (catId: string) => void;
  onOpenBooking: () => void;
}

export const ExoticFooter: React.FC<ExoticFooterProps> = ({
  onSelectCategory,
  onOpenBooking
}) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs font-light">
      {/* Top CTA Banner */}
      <div className="border-b border-zinc-900 bg-gradient-to-b from-zinc-900/40 to-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Command the UAE Supercar Experience
            </h3>
            <p className="text-zinc-400 text-sm font-light">
              Connect with our 24/7 VIP Fleet Operations Desk for immediate flatbed transporter delivery across Dubai, Abu Dhabi, and Northern Emirates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Reserve Instant Supercar</span>
            </button>
            <a
              href="tel:+97143928800"
              className="px-6 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs flex items-center justify-center gap-2 border border-zinc-800 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>+971 4 392 8800</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Credentials */}
        <div className="lg:col-span-2 space-y-4">
          <ApexMotorsLogo size="lg" />
          <p className="text-zinc-400 leading-relaxed max-w-sm">
            APEX EXOTIC MOTORS UAE is the sovereign benchmark in luxury supercar leasing, hypercar allocations, and diplomatic chauffeur services across Dubai and Abu Dhabi.
          </p>
          <div className="space-y-2 pt-2 text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>RTA Luxury Car Rental License No. 84920</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Dubai Aviation Airside & Tarmac Clearance</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-400" />
              <span>0% Security Deposit Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Col 2: Fleet Categories */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            Fleet Disciplines
          </div>
          <ul className="space-y-2 font-mono text-[11px]">
            {VEHICLE_CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => {
                    onSelectCategory(c.id);
                    const el = document.getElementById('fleet-discovery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Delivery Hubs */}
        <div className="space-y-3">
          <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
            Fleet Delivery Hubs
          </div>
          <ul className="space-y-2 text-[11px]">
            {RENTAL_LOCATIONS.map((loc, idx) => (
              <li key={idx} className="flex flex-col text-zinc-400">
                <span className="text-white font-medium">{loc.name.split('(')[0]}</span>
                <span className="font-mono text-[10px] text-amber-400">{loc.deliveryTime}</span>
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
              <div className="font-semibold text-white">DIFC Gate Village Flagship</div>
              <p className="text-zinc-400">Level 4, Gate Village Building 2, DIFC, Dubai</p>
            </div>
            <div>
              <div className="font-semibold text-white">Dubai Harbour Superyacht Valet</div>
              <p className="text-zinc-400">Dubai Harbour Marina Terminal, Dubai</p>
            </div>
            <div className="pt-2 font-mono text-amber-400">
              Fleet Desk: +971 4 392 8800
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-zinc-900 py-8 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} APEX EXOTIC MOTORS UAE LLC. All Rights Reserved. RTA Registered Luxury Limousine Fleet.
          </div>
          <div className="flex items-center gap-6">
            <span>0% Security Deposit</span>
            <span>Zero Excess CDW Available</span>
            <span>Cryptocurrency Accepted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
