'use client';
import React, { useState } from 'react';
import { HeartPulse, Phone, Calendar, Menu, X, Search } from 'lucide-react';
import { NovaClinicCrestLogo } from './NovaClinicCrestLogo';

export const ClinicNav: React.FC<any> = ({ onOpenBooking, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur-xl border-b border-sky-500/20 text-white">
      <div className="bg-gradient-to-r from-sky-950 via-teal-900 to-sky-950 py-1.5 px-3 sm:px-4 text-center border-b border-sky-500/20 flex flex-wrap items-center justify-center gap-1">
        <p className="text-[10px] sm:text-[11px] font-mono text-sky-200 tracking-normal sm:tracking-wider">
          ✦ Fictional Concept Showcase • NOVA PRIVATE CLINIC Dubai • UAE AED Pricing
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <NovaClinicCrestLogo size="md" className="group-hover:scale-105 transition-transform" />
          <div>
            <span className="text-lg sm:text-xl font-sans font-extrabold tracking-tight text-white block leading-tight">NOVA</span>
            <span className="text-[8px] sm:text-[9px] font-mono text-sky-400 tracking-[0.2em] uppercase block font-semibold">PRIVATE CLINIC • DUBAI</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs font-semibold text-slate-300">
          <a href="#services" className="hover:text-sky-300 transition-colors">Services</a>
          <a href="#doctors" className="hover:text-sky-300 transition-colors">Specialists</a>
          <a href="#finder" className="hover:text-sky-300 transition-colors">Appointment Finder</a>
          <a href="#navigator" className="hover:text-sky-300 transition-colors">Care Navigator</a>
          <a href="#telehealth" className="hover:text-sky-300 transition-colors">Teleconsult</a>
          <a href="#portal" className="hover:text-sky-300 transition-colors">Patient Portal</a>
          <a href="#tour" className="hover:text-sky-300 transition-colors">Clinic Tour</a>
          <a href="#guide" className="hover:text-sky-300 transition-colors">Patient Guide</a>
          <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <div className="relative hidden lg:block">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search services..."
              className="w-28 xl:w-36 pl-8 pr-3 py-1.5 bg-slate-900/80 border border-sky-500/30 rounded-full text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <a
            href="https://wa.me/971523394001?text=Hi%20NOVA%20Private%20Clinic!%20I%20want%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            className="p-2 sm:p-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/25 transition-colors"
            title="WhatsApp Reception"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 text-slate-950 font-extrabold text-xs uppercase font-mono tracking-wider flex items-center gap-1.5 shadow-lg shadow-sky-500/20 transition-all hover:scale-105 shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Visit</span>
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-white hover:text-sky-400">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-sky-500/20 px-6 py-6 space-y-4">
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search departments..."
              className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
            />
          </div>
          <div className="flex flex-col gap-3 text-sm font-semibold text-slate-300">
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#doctors" onClick={() => setIsOpen(false)}>Specialists</a>
            <a href="#finder" onClick={() => setIsOpen(false)}>Appointment Finder</a>
            <a href="#navigator" onClick={() => setIsOpen(false)}>Care Navigator</a>
            <a href="#telehealth" onClick={() => setIsOpen(false)}>Teleconsultation</a>
            <a href="#portal" onClick={() => setIsOpen(false)}>Patient Portal</a>
            <a href="#tour" onClick={() => setIsOpen(false)}>Clinic Tour</a>
            <a href="#guide" onClick={() => setIsOpen(false)}>Patient Guide</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
          <button
            onClick={() => { setIsOpen(false); onOpenBooking(); }}
            className="w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase text-center mt-4"
          >
            Book Appointment Now
          </button>
        </div>
      )}
    </header>
  );
};
