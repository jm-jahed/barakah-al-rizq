'use client';
import React, { useState } from 'react';
import { Award, Phone, Calendar, Menu, X, Search, Sparkles } from 'lucide-react';
import { AuraSanctuaryLogo } from './AuraSanctuaryLogo';

export const WellnessNav: React.FC<any> = ({ onOpenBooking, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0E0D0B]/90 backdrop-blur-xl border-b border-amber-500/15 shadow-2xl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-900/40 via-amber-700/20 to-amber-900/40 py-1.5 px-3 sm:px-4 text-center border-b border-amber-500/10">
        <p className="text-[10px] sm:text-[11px] font-mono text-amber-200 tracking-normal sm:tracking-wider flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span>✦ AURA WELLNESS SANCTUARY • DOWNTOWN DUBAI</span>
          <span>• 160 PRACTICES & RETREATS</span>
          <span>• UAE AED PRICING</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <AuraSanctuaryLogo size="sm" />
          <div>
            <span className="text-lg sm:text-xl font-serif font-bold text-white tracking-widest block leading-tight">
              AURA SANCTUARY
            </span>
            <span className="text-[9px] font-mono text-amber-400 tracking-[0.25em] uppercase block">
              DOWNTOWN DUBAI • WELLNESS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-gray-300">
          <a href="#classes" className="hover:text-amber-300 transition-colors">160 Practices</a>
          <a href="#matcher" className="hover:text-amber-300 transition-colors">Goal Matcher</a>
          <a href="#schedule" className="hover:text-amber-300 transition-colors">Timetable</a>
          <a href="#memberships" className="hover:text-amber-300 transition-colors">Memberships</a>
          <a href="#instructors" className="hover:text-amber-300 transition-colors">Instructors</a>
          <a href="#mindfulness" className="hover:text-amber-300 transition-colors">Sound &amp; Breath</a>
          <a href="#tour" className="hover:text-amber-300 transition-colors">Studio Tour</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search 160 practices..."
              className="w-32 md:w-44 pl-8 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors font-mono"
            />
          </div>

          <a
            href="https://wa.me/971508887766?text=Hi%20AURA%20Sanctuary!%20I%20want%20to%20inquire%20about%20classes%20and%20private%20sessions."
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 transition-colors"
            title="WhatsApp Sanctuary"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Class</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-gray-300 hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#12100E] border-b border-amber-500/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3 text-sm text-gray-300">
            <a href="#classes" onClick={() => setIsOpen(false)} className="hover:text-amber-300">160 Practices</a>
            <a href="#matcher" onClick={() => setIsOpen(false)} className="hover:text-amber-300">Goal Matcher</a>
            <a href="#schedule" onClick={() => setIsOpen(false)} className="hover:text-amber-300">Timetable</a>
            <a href="#memberships" onClick={() => setIsOpen(false)} className="hover:text-amber-300">Memberships</a>
            <a href="#instructors" onClick={() => setIsOpen(false)} className="hover:text-amber-300">Instructors</a>
            <a href="#mindfulness" onClick={() => setIsOpen(false)} className="hover:text-amber-300">Sound &amp; Breath</a>
            <a href="#tour" onClick={() => setIsOpen(false)} className="hover:text-amber-300">Studio Tour</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-amber-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};
