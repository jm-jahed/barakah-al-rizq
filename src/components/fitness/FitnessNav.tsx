'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Search, Heart, SlidersHorizontal, MapPin, Dumbbell, ShieldCheck, Zap } from 'lucide-react';
import { KineticLogo } from './KineticLogo';

interface FitnessNavProps {
  onOpenSearch: () => void;
  onOpenComparator: () => void;
  onOpenSaved: () => void;
  onBookAssessment: () => void;
  savedCount: number;
  compareCount: number;
}

export const FitnessNav: React.FC<FitnessNavProps> = ({
  onOpenSearch,
  onOpenComparator,
  onOpenSaved,
  onBookAssessment,
  savedCount,
  compareCount
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CMD+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const navLinks = [
    { label: 'Disciplines', href: '#disciplines' },
    { label: '160 Protocols', href: '#catalog' },
    { label: 'Calculator', href: '#estimator' },
    { label: 'Recovery Suite', href: '#recovery' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* UAE Performance Telemetry Top Bar */}
      <div className="bg-[#090807] border-b border-red-500/20 py-2 px-3 sm:px-6 text-[11px] font-mono text-gray-300 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-[10px] uppercase font-bold text-red-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            LIVE CLUB TELEMETRY
          </span>
          <span className="hidden md:inline text-gray-400">
            DIFC Gate Avenue: <strong className="text-emerald-400 font-bold">Optimal Load (68%)</strong> • Palm Jumeirah: <strong className="text-emerald-400 font-bold">Open 24/7</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
          <span className="hidden lg:inline text-gray-400">
            VIP Concierge: <strong className="text-white">+971 4 399 2200</strong>
          </span>
          <a
            href="https://wa.me/971509922000?text=Hi%20KINETIC%20ATHLETICA!%20I%20would%20like%20to%20inquire%20about%20a%20private%20tour%20and%20VIP%20assessment."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
          >
            <Phone className="w-3 h-3" />
            <span>WhatsApp VIP</span>
          </a>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0908]/95 backdrop-blur-xl border-b border-red-500/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-[#0A0908]/80 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Mobile hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <KineticLogo size="md" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-mono text-gray-300 hover:text-red-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Interactive Utility Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* ⌘K Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white font-mono transition-all"
              title="Search 160 Protocols (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-red-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 rounded bg-black/50 text-[9px] text-gray-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Comparator Drawer Trigger */}
            <button
              onClick={onOpenComparator}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all"
              title="Compare Protocols"
            >
              <SlidersHorizontal className="w-4 h-4 text-red-400" />
              {compareCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-mono font-bold flex items-center justify-center animate-bounce">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Saved Programs Trigger */}
            <button
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all"
              title="View Shortlist"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-mono font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Book VIP Assessment CTA */}
            <button
              onClick={onBookAssessment}
              className="px-3.5 sm:px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs font-mono uppercase tracking-wider sm:tracking-widest shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Book Assessment</span>
              <span className="sm:hidden">VIP Pass</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl xl:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="w-full max-w-sm bg-[#110F0E] h-full p-6 border-l border-red-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-red-500/10">
                  <KineticLogo size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm uppercase font-mono tracking-widest text-gray-200 hover:text-red-400 py-2.5 border-b border-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookAssessment();
                  }}
                  className="w-full py-3 rounded-xl bg-red-600 text-white font-black font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book VIP Assessment
                </button>

                <div className="text-center text-[10px] font-mono text-gray-500 uppercase">
                  DIFC & Palm Jumeirah • Statutory DSC Permit #2026/8942
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
