'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, MessageCircle, Calendar, Menu, X, Compass, Palmtree } from 'lucide-react';
import { OASIRA_BRAND } from '@/data/oasiraData';

interface OasiraNavProps {
  savedCount: number;
  onOpenSavedDrawer: () => void;
  onOpenBookingModal: () => void;
}

export const OasiraNav: React.FC<OasiraNavProps> = ({
  savedCount,
  onOpenSavedDrawer,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'destinations', label: 'Destinations' },
    { id: 'resorts', label: 'UAE Resorts' },
    { id: 'staycations', label: 'Staycations' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'rewards', label: 'OASIRA Rewards' },
    { id: 'guide', label: 'Travel Guide' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A2920]/95 backdrop-blur-xl border-b border-[#D4B382]/30 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A2920]/90 via-[#0A2920]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-6">

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D4B382] via-[#C59B63] to-[#2A7F7A] p-0.5 shadow-lg shadow-[#D4B382]/20 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#0F382C] rounded-[14px] flex items-center justify-center">
                    <Palmtree className="w-5 h-5 text-[#D4B382]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-extrabold text-[#FAF6EE] tracking-widest leading-none">
                    OASIRA
                  </span>
                  <span className="text-[9px] font-mono font-bold text-[#D4B382] tracking-widest uppercase mt-0.5">
                    UAE RESORTS & ESCAPES
                  </span>
                </div>
              </a>
            </div>

            {/* Middle Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 font-serif text-xs font-medium text-stone-200">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3.5 py-1.5 rounded-xl hover:text-[#D4B382] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              
              {/* Saved Wishlist Drawer Trigger */}
              <button
                onClick={onOpenSavedDrawer}
                className="relative p-2.5 rounded-2xl bg-[#0F382C] hover:bg-stone-800 border border-stone-700 text-stone-200 transition-all shadow-md group"
                aria-label="View Saved Resorts"
              >
                <Heart className="w-4 h-4 text-[#D4B382] group-hover:scale-110 transition-transform" />
                {savedCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#E63946] text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-md border border-[#0F382C]"
                  >
                    {savedCount}
                  </motion.span>
                )}
              </button>

              {/* WhatsApp Concierge Button */}
              <a
                href={OASIRA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 text-white font-mono text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Concierge</span>
              </a>

              {/* Book Now Primary Button */}
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] hover:from-[#c2a170] hover:to-[#c49f2b] text-black font-serif text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#D4B382]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Now
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-2xl bg-[#0F382C] border border-stone-700 text-stone-200"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-[#0A2920]/95 border-b border-stone-800 backdrop-blur-2xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 font-serif">

              <div className="grid grid-cols-2 gap-2 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-stone-200 font-bold text-xs text-left hover:text-[#D4B382]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-stone-800">
                <a
                  href={OASIRA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-700/80 text-white font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp Concierge (+971 50)</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#D4B382] text-black font-serif font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  Reserve Your Staycation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
