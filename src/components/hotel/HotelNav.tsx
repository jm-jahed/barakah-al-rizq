'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Compass, Menu, X, Calendar, MapPin, Award, Phone, Sparkles } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

interface HotelNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBookingModal: () => void;
  onOpenConciergeModal: () => void;
}

export const HotelNav: React.FC<HotelNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenBookingModal,
  onOpenConciergeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'house', label: 'The Sanctuary' },
    { id: 'rooms', label: 'Palace Suites & Villas' },
    { id: 'dining', label: 'Michelin Dining' },
    { id: 'spa', label: 'Royal Spa' },
    { id: 'experiences', label: 'VIP Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Location' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Live Ticker Top Bar */}
      <div className="bg-[#12100E] border-b border-[#C5A059]/20 text-[11px] font-mono text-stone-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#C5A059] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
              DUBAI ISLAND SANCTUARY
            </span>
            <span className="text-stone-500">•</span>
            <span>Jumeirah Bay Island & Palm Jumeirah, Dubai</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-400">Currency: <strong className="text-[#C5A059]">AED (د.إ)</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${VELORA_BRAND.phone.replace(/\s+/g, '')}`}
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{VELORA_BRAND.phone}</span>
            </a>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400 font-sans text-[10px] uppercase tracking-wider">
              24/7 Dedicated Royal Butler
            </span>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 md:top-[29px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1C1917]/95 backdrop-blur-xl border-b border-[#C5A059]/20 py-3 shadow-2xl md:top-0'
            : 'bg-gradient-to-b from-[#1C1917]/90 via-[#1C1917]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Logo */}
            <div className="flex items-center gap-5">

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 p-0.5 flex items-center justify-center bg-[#29221D] shadow-lg shadow-[#C5A059]/10">
                  <span className="font-serif text-lg font-bold text-[#C5A059]">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-extrabold text-[#F7F4EE] tracking-widest font-serif leading-tight">
                    {VELORA_BRAND.name}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-[#C5A059] tracking-[0.22em] uppercase font-mono">
                    JUMEIRAH BAY ISLAND • DUBAI, UAE
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#29221D]/80 p-1.5 rounded-full border border-stone-800 backdrop-blur-md">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === link.id
                      ? 'bg-[#3D332A] text-[#F7F4EE] border border-[#C5A059]/40 shadow-md'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenConciergeModal}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 text-xs font-serif transition-all"
              >
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Concierge & Rolls-Royce</span>
              </button>

              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] hover:to-[#c49f2b] text-black text-xs font-bold font-sans tracking-wide transition-all shadow-lg shadow-[#C5A059]/20 hover:scale-[1.02] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Suite</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-stone-300"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#1C1917]/98 border-b border-stone-800 px-6 py-6 font-sans space-y-4 shadow-2xl backdrop-blur-2xl"
            >
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="p-3 text-left rounded-xl bg-white/5 hover:bg-[#3D332A] text-stone-200 hover:text-white text-xs font-medium transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-800 space-y-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConciergeModal();
                  }}
                  className="w-full py-3 rounded-xl bg-white/5 text-stone-200 text-xs font-serif"
                >
                  Royal Concierge & VIP Jet Transfer
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-black font-bold text-xs"
                >
                  Reserve Suite in AED
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

