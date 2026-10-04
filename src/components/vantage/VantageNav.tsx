'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageCircle, Building2, Menu, X, Sparkles } from 'lucide-react';
import { VANTAGE_BRAND } from '@/data/vantageData';

interface VantageNavProps {
  onOpenRegisterModal: () => void;
  onOpenVipModal?: () => void;
}

export const VantageNav: React.FC<VantageNavProps> = ({ onOpenRegisterModal, onOpenVipModal }) => {
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
    { id: 'projects', label: 'Developments (216+)' },
    { id: 'payment-calc', label: 'Financial Studio' },
    { id: 'buyer-journey', label: 'Buyer Journey' },
    { id: 'communities', label: 'Masterplans' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'why-vantage', label: 'Why Vantage' },
    { id: 'insights', label: 'Insights' },
    { id: 'sales-offices', label: 'Sales Galleries' },
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
            ? 'bg-[#06101E]/95 backdrop-blur-xl border-b border-[#C5A059]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#06101E]/90 via-[#06101E]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Logo */}
            <div className="flex items-center gap-6">

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059] via-[#D4AF37] to-[#0A192F] p-0.5 shadow-lg shadow-[#C5A059]/10 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#06101E] rounded-[10px] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#C5A059]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-extrabold text-[#FAFAFA] tracking-[0.2em] leading-none">
                    VANTAGE
                  </span>
                  <span className="text-[8px] font-mono font-bold text-[#C5A059] tracking-[0.25em] uppercase mt-0.5">
                    DEVELOPMENTS • UAE
                  </span>
                </div>
              </a>
            </div>

            {/* Middle Nav */}
            <nav className="hidden xl:flex items-center gap-1 font-serif text-xs font-medium text-stone-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-1.5 rounded-lg hover:text-[#C5A059] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {onOpenVipModal && (
                <button
                  onClick={onOpenVipModal}
                  className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#C5A059] font-mono text-xs font-bold transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VIP Pass</span>
                </button>
              )}

              <a
                href={VANTAGE_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenRegisterModal}
                className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:from-[#b38e47] text-black font-serif text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#C5A059]/20 hover:scale-[1.02]"
              >
                Register Interest
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2.5 rounded-xl bg-[#0A192F] border border-stone-800 text-stone-300"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-[#06101E]/95 border-b border-stone-800 backdrop-blur-2xl p-6 xl:hidden shadow-2xl font-serif"
          >
            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-2 gap-2 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-stone-200 font-bold text-xs text-left hover:text-[#C5A059]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-stone-800">
                {onOpenVipModal && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenVipModal();
                    }}
                    className="w-full py-3 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] font-mono text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate VIP Launch Pass</span>
                  </button>
                )}

                <a
                  href={VANTAGE_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Sales Team (+971 50)</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenRegisterModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  Register Your Interest Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
