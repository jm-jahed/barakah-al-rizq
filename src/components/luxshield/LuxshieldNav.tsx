'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { LUXSHIELD_BRAND } from '@/data/luxshieldData';

interface LuxshieldNavProps {
  onOpenBookingModal: (pkgId?: string) => void;
}

export const LuxshieldNav: React.FC<LuxshieldNavProps> = ({ onOpenBookingModal }) => {
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
    { label: 'Services', href: '#services' },
    { label: 'Ceramic Coating', href: '#packages' },
    { label: 'PPF', href: '#packages' },
    { label: 'Before & After', href: '#beforeafter' },
    { label: 'About', href: '#whyus' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0C0E]/95 backdrop-blur-md border-b border-blue-500/20 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-950/50 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black text-white tracking-tight font-sans">
                LUX<span className="text-blue-500">SHIELD</span>
              </span>
              <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest -mt-1">
                AUTOMOTIVE PROTECTION
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-blue-400 transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={LUXSHIELD_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/30 transition-all font-mono"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-blue-950/50 hover:scale-105 transition-all font-mono"
            >
              <span>BOOK NOW</span>
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
        <div className="lg:hidden bg-[#14161A] border-b border-blue-500/20 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-200 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={LUXSHIELD_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Studio Concierge</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm text-center font-mono"
            >
              BOOK DETAILING APPOINTMENT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};