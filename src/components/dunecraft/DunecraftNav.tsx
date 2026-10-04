'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, MessageCircle, Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { DUNECRAFT_BRAND } from '@/data/dunecraftData';

interface DunecraftNavProps {
  onOpenBookingModal: (expId?: string) => void;
}

export const DunecraftNav: React.FC<DunecraftNavProps> = ({ onOpenBookingModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experiences', href: '#experiences' },
    { label: 'Safari Planner', href: '#planner' },
    { label: 'Private & VIP', href: '#experiences' },
    { label: 'Corporate Events', href: '#corporate' },
    { label: 'Gateways', href: '#gateways' },
    { label: 'About', href: '#whyus' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#1C0D02]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-950/50 group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black text-white tracking-tight font-sans">
                DUNE<span className="text-amber-400">CRAFT</span>
              </span>
              <span className="block text-[9px] font-mono text-amber-300 uppercase tracking-widest -mt-1 font-bold">
                UAE DESERT SAFARI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-amber-400 transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={DUNECRAFT_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/30 transition-all font-mono"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Book</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-orange-950/50 hover:scale-105 transition-all font-mono"
            >
              <span>BOOK SAFARI</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2A1405] border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-200 hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={DUNECRAFT_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-black font-bold text-sm text-center font-mono"
            >
              BOOK YOUR DESERT SAFARI
            </button>
          </div>
        </div>
      )}
    </header>
  );
};