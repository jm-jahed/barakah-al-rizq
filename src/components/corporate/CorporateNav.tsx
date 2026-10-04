'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Lock, 
  FileText, 
  PhoneCall, 
  Briefcase
} from 'lucide-react';

interface CorporateNavProps {
  onOpenMandateModal: (divisionContext?: string) => void;
}

export const CorporateNav: React.FC<CorporateNavProps> = ({ onOpenMandateModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Divisions', href: '#divisions' },
    { name: 'Mandate Calculator', href: '#mandate-calculator' },
    { name: 'Track Record', href: '#case-studies' },
    { name: 'Governance & ESG', href: '#governance' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Global Footprint', href: '#footprint' },
    { name: 'Publications', href: '#publications' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0A0D14]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' 
        : 'bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Executive Brand Logo */}
          <Link href="#hero" className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-transparent border border-amber-400/30 flex items-center justify-center shadow-lg group-hover:border-amber-400/60 transition-all">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-sans">
                  VANGUARD
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                  HOLDINGS
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block -mt-0.5">
                DIFC DUBAI • ADGM ABU DHABI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider relative group py-1"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Regulatory Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DFSA & FSRA Tier-1 Authorized</span>
            </div>

            {/* Direct Mandate Initiation CTA */}
            <button
              type="button"
              onClick={() => onOpenMandateModal()}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Submit Mandate RFP</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenMandateModal()}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-mono text-[11px] font-bold"
            >
              RFP
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-[#0A0D14] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono text-slate-200 hover:text-amber-400 py-1.5 border-b border-white/5 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>DFSA & FSRA Regulated Fiduciary</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMandateModal();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Submit Private Mandate</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
