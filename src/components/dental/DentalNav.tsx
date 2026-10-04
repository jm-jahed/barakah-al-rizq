'use client';
import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Search } from 'lucide-react';
import { LuminaDentalCrestLogo } from './LuminaDentalCrestLogo';

export const DentalNav: React.FC<any> = ({ onOpenBooking, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#06101E]/90 backdrop-blur-xl border-b border-cyan-500/20 text-white">
      <div className="bg-gradient-to-r from-cyan-950 via-teal-900 to-cyan-950 py-1.5 px-3 sm:px-4 text-center border-b border-cyan-500/20">
        <p className="text-[10px] sm:text-[11px] font-mono text-cyan-200 tracking-normal sm:tracking-wider flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span>✦ Concept Project Showcase</span>
          <span>• LUMINA DENTAL ATELIER Dubai</span>
          <span>• UAE AED Pricing</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <LuminaDentalCrestLogo size="md" className="group-hover:scale-105 transition-transform shrink-0" />
          <div>
            <span className="text-xl font-sans font-extrabold tracking-tight text-white block leading-tight">LUMINA</span>
            <span className="text-[9px] font-mono text-cyan-400 tracking-[0.2em] uppercase block font-semibold">DENTAL ATELIER • DUBAI</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <a href="#treatments" className="hover:text-cyan-300 transition-colors">Treatments</a>
          <a href="#dentists" className="hover:text-cyan-300 transition-colors">Dentists</a>
          <a href="#cosmetic" className="hover:text-cyan-300 transition-colors">Cosmetic</a>
          <a href="#ortho" className="hover:text-cyan-300 transition-colors">Aligners</a>
          <a href="#implants" className="hover:text-cyan-300 transition-colors">Implants</a>
          <a href="#assessment" className="hover:text-cyan-300 transition-colors">Smile Quiz</a>
          <a href="#technology" className="hover:text-cyan-300 transition-colors">Technology</a>
          <a href="#planner" className="hover:text-cyan-300 transition-colors">Cost Calculator</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search treatments..."
              className="w-32 md:w-44 pl-8 pr-3 py-1.5 bg-slate-900/80 border border-cyan-500/30 rounded-full text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <a
            href="https://wa.me/971523394001?text=Hi%20LUMINA%20Dental!%20I%20want%20to%20book%20a%20consultation."
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/25 transition-all"
            title="WhatsApp Booking"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden md:flex px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 text-slate-950 font-extrabold text-xs uppercase font-mono tracking-wider items-center gap-1.5 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Consultation
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#06101E] border-b border-cyan-500/20 p-5 space-y-3">
          <div className="flex flex-col gap-2 font-medium text-sm text-slate-300">
            <a href="#treatments" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Treatments</a>
            <a href="#dentists" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Dentists</a>
            <a href="#cosmetic" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Cosmetic Dentistry</a>
            <a href="#ortho" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Clear Aligners</a>
            <a href="#implants" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Dental Implants</a>
            <a href="#assessment" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Smile Assessment Quiz</a>
            <a href="#technology" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Advanced Technology</a>
            <a href="#planner" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Cost Calculator</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-300 py-1">Contact Clinic</a>
          </div>
          <button
            onClick={() => { setIsOpen(false); onOpenBooking(); }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};
