'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  MessageCircle, 
  Building2, 
  Menu, 
  X, 
  KeyRound, 
  Layers, 
  Calculator, 
  Scale, 
  Wrench, 
  ChevronDown,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { NESTORA_BRAND } from '@/data/nestoraData';

interface NestoraNavProps {
  onOpenConsultationModal: () => void;
  onOpenMaintenanceModal?: () => void;
}

export const NestoraNav: React.FC<NestoraNavProps> = ({ 
  onOpenConsultationModal,
  onOpenMaintenanceModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnginesDropdownOpen, setIsEnginesDropdownOpen] = useState(false);
  const enginesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (enginesDropdownRef.current && !enginesDropdownRef.current.contains(event.target as Node)) {
        setIsEnginesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsEnginesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
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

  const primaryNavLinks = [
    { id: 'catalog', label: '200+ Mandates' },
    { id: 'services', label: 'Landlord Services' },
    { id: 'communities', label: 'Communities' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'why-nestora', label: 'Why NESTORA' },
    { id: 'insights', label: 'Insights' },
    { id: 'locations', label: 'Offices' },
    { id: 'faq', label: 'FAQ' },
  ];

  const propertyEngines = [
    { id: 'rental-yield-simulator', label: 'Rental Yield & ROI Simulator', icon: Calculator, desc: 'Model net yields after Mollak service fees' },
    { id: 'rera-calculator', label: 'RERA Rent Increase Calculator', icon: Scale, desc: 'Decree 43/2013 permitted increase audit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#082023]/95 backdrop-blur-xl border-b border-[#C5A059]/20 py-2.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#082023]/95 via-[#082023]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
            
            {/* Left: Brand & Back */}
            <div className="flex items-center gap-2.5 xl:gap-3.5 shrink-0">
              <a
                href="/"
                className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-stone-300 hover:text-white transition-all group whitespace-nowrap"
              >
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform text-[#C5A059]" />
                <span>Portfolio</span>
              </a>

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 group shrink-0"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#C5A059] via-[#D4AF37] to-[#0C2D31] p-0.5 shadow-lg shadow-[#C5A059]/20 group-hover:scale-105 transition-transform shrink-0">
                  <div className="w-full h-full bg-[#082023] rounded-[10px] flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-serif font-extrabold text-[#F4EFE6] tracking-widest leading-none">
                    NESTORA
                  </span>
                  <span className="text-[7.5px] sm:text-[8px] font-mono font-bold text-[#C5A059] tracking-widest uppercase mt-0.5 whitespace-nowrap">
                    PROPERTY MANAGEMENT UAE
                  </span>
                </div>
              </a>
            </div>

            {/* Middle: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md shrink-0">
              
              {/* 200+ Catalog Link */}
              <button
                type="button"
                onClick={() => scrollToSection('catalog')}
                className="px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-stone-300 hover:text-[#C5A059] hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>200+ Mandates</span>
              </button>

              {/* Property Engines Flyout */}
              <div className="relative" ref={enginesDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsEnginesDropdownOpen(!isEnginesDropdownOpen)}
                  className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isEnginesDropdownOpen
                      ? 'bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Calculators</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isEnginesDropdownOpen ? 'rotate-180 text-[#C5A059]' : 'text-stone-400'}`} />
                </button>

                <AnimatePresence>
                  {isEnginesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-72 p-2.5 rounded-2xl bg-[#082023]/98 backdrop-blur-2xl border border-[#C5A059]/30 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50"
                    >
                      <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider px-2 py-1 mb-1 border-b border-white/5">
                        Landlord Yield & Legal Tools
                      </div>
                      <div className="space-y-1">
                        {propertyEngines.map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <button
                              key={tool.id}
                              type="button"
                              onClick={() => scrollToSection(tool.id)}
                              className="w-full text-left p-2 rounded-xl hover:bg-[#C5A059]/10 transition-colors flex items-start gap-2.5 group cursor-pointer"
                            >
                              <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#C5A059]/20 text-[#C5A059] shrink-0 mt-0.5">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="block text-xs font-serif font-bold text-white group-hover:text-[#C5A059]">
                                  {tool.label}
                                </span>
                                <span className="block text-[10px] text-stone-400 leading-tight font-sans">
                                  {tool.desc}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Landlord Services */}
              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-serif font-semibold text-stone-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
              >
                Services
              </button>

              {/* Communities */}
              <button
                type="button"
                onClick={() => scrollToSection('communities')}
                className="hidden xl:inline-flex px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-serif font-semibold text-stone-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
              >
                Communities
              </button>

              {/* Case Study */}
              <button
                type="button"
                onClick={() => scrollToSection('case-study')}
                className="hidden 2xl:inline-flex px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-serif font-semibold text-stone-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
              >
                Case Study
              </button>

              {/* Offices */}
              <button
                type="button"
                onClick={() => scrollToSection('locations')}
                className="px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-serif font-semibold text-stone-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
              >
                Offices
              </button>

              {/* FAQ */}
              <button
                type="button"
                onClick={() => scrollToSection('faq')}
                className="hidden xl:inline-flex px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-serif font-semibold text-stone-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
              >
                FAQ
              </button>

            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              
              {/* Maintenance Ticket Trigger */}
              {onOpenMaintenanceModal && (
                <button
                  type="button"
                  onClick={onOpenMaintenanceModal}
                  className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#C5A059]/15 hover:bg-[#C5A059]/25 border border-[#C5A059]/40 text-[#C5A059] font-mono text-xs font-bold transition-all shadow-md shadow-[#C5A059]/10 whitespace-nowrap cursor-pointer shrink-0"
                >
                  <Wrench className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>24/7 Helpdesk</span>
                </button>
              )}

              {/* WhatsApp Desk */}
              <a
                href={NESTORA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>

              {/* Primary Mandate CTA */}
              <button
                type="button"
                onClick={onOpenConsultationModal}
                className="px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:from-[#b38e47] text-black font-serif text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-[#C5A059]/20 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer shrink-0"
              >
                Free Assessment
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-[#0C2D31] border border-stone-800 text-stone-300 hover:text-white cursor-pointer shrink-0"
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#082023]/98 backdrop-blur-2xl border-b border-[#C5A059]/30 p-6 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-4">
              
              <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider font-bold">
                Navigation & Catalog
              </div>

              <div className="grid grid-cols-2 gap-2">
                {primaryNavLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="p-3 rounded-xl bg-[#06181A] hover:bg-stone-800 border border-stone-800 text-left font-serif text-xs text-stone-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider font-bold pt-2 border-t border-stone-800">
                Landlord Calculators & Helpdesk
              </div>

              <div className="space-y-2">
                {propertyEngines.map((engine) => {
                  const Icon = engine.icon;
                  return (
                    <button
                      key={engine.id}
                      type="button"
                      onClick={() => scrollToSection(engine.id)}
                      className="w-full p-3 rounded-xl bg-[#06181A] hover:bg-[#0C2D31] border border-stone-800 flex items-center gap-3 text-left"
                    >
                      <div className="p-2 rounded-lg bg-[#C5A059]/10 text-[#C5A059]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white">{engine.label}</span>
                        <span className="block text-[10px] text-stone-400">{engine.desc}</span>
                      </div>
                    </button>
                  );
                })}

                {onOpenMaintenanceModal && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenMaintenanceModal();
                    }}
                    className="w-full p-3 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center gap-3 text-left"
                  >
                    <div className="p-2 rounded-lg bg-[#C5A059]/20 text-[#C5A059]">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#C5A059]">24/7 Rapid Maintenance Helpdesk</span>
                      <span className="block text-[10px] text-stone-300">Dispatch certified MEP technician ticket</span>
                    </div>
                  </button>
                )}
              </div>

              <div className="pt-3 border-t border-stone-800 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultationModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider"
                >
                  Free Landlord Assessment
                </button>

                <a
                  href={NESTORA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-950/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Property Manager</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};
