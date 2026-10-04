'use client';

import React from 'react';
import Link from 'next/link';
import { Activity, ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const PetCareFooter: React.FC<any> = () => {
  return (
    <footer className="bg-[#050A0E] text-white border-t border-emerald-500/20 py-16 px-4 sm:px-6 lg:px-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
        
        {/* Col 1: Brand */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-slate-950 font-bold">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-base font-extrabold text-white tracking-tight font-sans">
              PAWS <span className="text-emerald-400">& CLAWS CLINIC</span>
            </span>
          </div>

          <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm">
            Gold-standard 24/7 veterinary hospital, level-1 trauma surgical center, luxury feline sanctuary, and climate-controlled boarding resort across Dubai and Abu Dhabi, UAE.
          </p>

          <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>MOCCAE License #VET-DXB-88219</span>
          </div>
        </div>

        {/* Col 2: Hospital Specialties */}
        <div className="md:col-span-3 space-y-2.5 text-slate-400">
          <span className="text-white font-bold block uppercase tracking-wider text-[11px]">Specialty Departments</span>
          <a href="#services" className="block hover:text-emerald-300">24/7 Level-1 Emergency ICU</a>
          <a href="#services" className="block hover:text-emerald-300">Orthopedic & TPLO Knee Center</a>
          <a href="#services" className="block hover:text-emerald-300">128-Slice High-Speed CT Scanner</a>
          <a href="#services" className="block hover:text-emerald-300">Ultrasonic Dental Prophylaxis</a>
          <a href="#services" className="block hover:text-emerald-300">Canine Aquatic Hydrotherapy Pool</a>
        </div>

        {/* Col 3: Quick Links */}
        <div className="md:col-span-2 space-y-2.5 text-slate-400">
          <span className="text-white font-bold block uppercase tracking-wider text-[11px]">Hospital Services</span>
          <a href="#triage" className="block hover:text-emerald-300">AI Symptom Triage</a>
          <a href="#specialists" className="block hover:text-emerald-300">Resident Surgeons</a>
          <a href="#boarding" className="block hover:text-emerald-300">Presidential Suites</a>
          <a href="#calculator" className="block hover:text-emerald-300">Longevity Calculator</a>
          <a href="#apothecary" className="block hover:text-emerald-300">Prescription Pharmacy</a>
        </div>

        {/* Col 4: Contact & Hubs */}
        <div className="md:col-span-3 space-y-2.5 text-slate-400">
          <span className="text-white font-bold block uppercase tracking-wider text-[11px]">24/7 Emergency Dispatch</span>
          <p className="text-white font-bold text-sm">Al Wasl Road, Jumeirah 2, Dubai</p>
          <p className="text-emerald-300">Emergency: +971 52 339 4001</p>
          <p className="text-slate-400">Appointments: +971 4 388 9200</p>
          <p className="text-slate-400">Email: concierge@pawsandclaws.ae</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <span>© {new Date().getFullYear()} Paws & Claws Veterinary Hospital & Luxury Resort. All Rights Reserved. UAE Market Standard.</span>
      </div>
    </footer>
  );
};

export default PetCareFooter;
