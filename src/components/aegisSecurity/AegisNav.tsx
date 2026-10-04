'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Phone, MessageSquare, ArrowUpRight, Menu, X, Radio, Activity } from 'lucide-react';
import { AEGIS_BRAND } from '@/data/aegisSecurityData';

interface AegisNavProps {
  onOpenAssessment: () => void;
}

export default function AegisNav({ onOpenAssessment }: AegisNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Command Center', href: '#command-center' },
    { label: 'Risk Assessment', href: '#assessment' },
    { label: 'UAE Coverage', href: '#coverage' },
    { label: 'Technology', href: '#technology' },
    { label: 'Industries', href: '#industries' },
    { label: 'Standards', href: '#standards' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06090E]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-6">

            <Link href="/work/security-guard-services" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-wider text-white group-hover:text-cyan-300 transition">
                  {AEGIS_BRAND.name}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase -mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sovereign Protection • UAE
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-300 tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${AEGIS_BRAND.phone.replace(/\s+/g, '')}`}
              className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono font-medium flex items-center gap-2 transition"
              title="UAE Security Desk"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{AEGIS_BRAND.phone}</span>
            </a>

            <a
              href={AEGIS_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md transition font-mono"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenAssessment}
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/20 transition transform hover:-translate-y-0.5 flex items-center gap-1.5 font-mono"
            >
              <span>Assess Risk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenAssessment}
              className="px-3 py-1.5 bg-cyan-500 text-slate-950 text-xs font-bold rounded-lg font-mono"
            >
              Assess Risk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-4 border-t border-slate-800 bg-[#0A0E17]/95 backdrop-blur-xl rounded-2xl p-4 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-slate-200 hover:text-cyan-400 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`tel:${AEGIS_BRAND.phone.replace(/\s+/g, '')}`}
                className="w-full text-center py-2.5 bg-slate-900 text-white rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call {AEGIS_BRAND.phone}</span>
              </a>
              <a
                href={AEGIS_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Command Desk</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
