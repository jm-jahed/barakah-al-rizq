'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageCircle, Calendar, Menu, X, Building, ShieldCheck, ChevronRight } from 'lucide-react';
import { NEXORA_BRAND } from '@/data/nexoraData';

interface NexoraNavProps {
  onOpenConsultationModal: () => void;
}

export const NexoraNav: React.FC<NexoraNavProps> = ({ onOpenConsultationModal }) => {
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
    { id: 'setup', label: 'UAE Setup' },
    { id: 'services', label: 'Services' },
    { id: 'calculator', label: 'Setup Calculator' },
    { id: 'industries', label: 'Industries' },
    { id: 'market-entry', label: 'Market Entry' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'insights', label: 'Insights' },
    { id: 'locations', label: 'UAE Offices' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
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
            ? 'bg-[#121417]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#121417]/90 via-[#121417]/60 to-transparent py-5'
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#C5A059] to-[#0F382C] p-0.5 shadow-lg shadow-[#D4AF37]/10 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#121417] rounded-[10px] flex items-center justify-center">
                    <Building className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-[#F7F6F2] tracking-wider leading-none">
                    NEXORA
                  </span>
                  <span className="text-[9px] font-mono font-bold text-[#D4AF37] tracking-widest uppercase mt-0.5">
                    BUSINESS CONSULTANCY UAE
                  </span>
                </div>
              </a>
            </div>

            {/* Middle Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 font-serif text-xs font-medium text-stone-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-1.5 rounded-lg hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              
              <a
                href={NEXORA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Advisor</span>
              </a>

              <button
                onClick={onOpenConsultationModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] hover:from-[#c49f2b] hover:to-[#a37e37] text-black font-serif text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Consultation
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#1A1D24] border border-stone-800 text-stone-300"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-[#121417]/95 border-b border-stone-800 backdrop-blur-2xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 font-serif">

              <div className="grid grid-cols-2 gap-2 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-stone-200 font-bold text-xs text-left hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-stone-800">
                <a
                  href={NEXORA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Senior Advisor (+971 50)</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultationModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-black font-serif font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
