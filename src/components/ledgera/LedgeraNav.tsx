'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  MessageCircle, 
  FileSpreadsheet, 
  Menu, 
  X, 
  Shield, 
  ChevronDown,
  Calculator,
  Layers,
  Sparkles,
  Building2,
  Users
} from 'lucide-react';
import { LEDGERA_BRAND } from '@/data/ledgeraData';

interface LedgeraNavProps {
  onOpenConsultationModal: () => void;
  onOpenAuditModal?: () => void;
}

export const LedgeraNav: React.FC<LedgeraNavProps> = ({ onOpenConsultationModal, onOpenAuditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalcDropdownOpen, setIsCalcDropdownOpen] = useState(false);
  const calcDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close calculators dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calcDropdownRef.current && !calcDropdownRef.current.contains(event.target as Node)) {
        setIsCalcDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsCalcDropdownOpen(false);
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
    { id: 'catalog', label: '200+ Catalog' },
    { id: 'services', label: 'Core Practice' },
    { id: 'case-study', label: 'Case Studies' },
    { id: 'locations', label: 'Offices' },
    { id: 'faq', label: 'FAQ' },
  ];

  const calculatorTools = [
    { id: 'tax-simulator', label: 'Corporate Tax (9%) Simulator', icon: Calculator, desc: 'Calculate UAE 9% tax liability & SBR' },
    { id: 'gratuity-calculator', label: 'UAE Gratuity (EOSG) Calculator', icon: Users, desc: 'Statutory severance & leave encashment' },
    { id: 'vat-calc', label: 'VAT 201 Return Estimator', icon: FileSpreadsheet, desc: 'Output tax vs input recovery modeling' },
    { id: 'tax-checker', label: 'Tax Readiness Diagnostic', icon: Shield, desc: '5-point risk score & gap identification' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070A10]/95 backdrop-blur-xl border-b border-emerald-500/20 py-2.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#070A10]/95 via-[#070A10]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-4">
            
            {/* Left: Brand */}
            <div className="flex items-center gap-3 xl:gap-4 shrink-0">

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-800 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
                  <div className="w-full h-full bg-[#0A0E17] rounded-[10px] flex items-center justify-center">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white tracking-wider leading-none font-mono">
                    LEDGERA
                  </span>
                  <span className="text-[8px] font-mono font-bold text-emerald-400/90 tracking-widest uppercase mt-0.5 whitespace-nowrap">
                    TAX &amp; ADVISORY
                  </span>
                </div>
              </a>
            </div>

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              
              {/* 200+ Catalog Link */}
              <button
                type="button"
                onClick={() => scrollToSection('catalog')}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-gray-300 hover:text-emerald-300 hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>200+ Catalog</span>
              </button>

              {/* Calculators & Tools Flyout */}
              <div className="relative" ref={calcDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCalcDropdownOpen(!isCalcDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isCalcDropdownOpen
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-400" />
                  <span>Calculators</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isCalcDropdownOpen ? 'rotate-180 text-emerald-400' : 'text-gray-400'}`} />
                </button>

                <AnimatePresence>
                  {isCalcDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-72 p-2.5 rounded-2xl bg-[#0B0F19]/98 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50"
                    >
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider px-2 py-1 mb-1 border-b border-white/5">
                        Interactive Financial Engines
                      </div>
                      <div className="space-y-1">
                        {calculatorTools.map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <button
                              key={tool.id}
                              type="button"
                              onClick={() => scrollToSection(tool.id)}
                              className="w-full text-left p-2 rounded-xl hover:bg-emerald-500/10 transition-colors flex items-start gap-2.5 group cursor-pointer"
                            >
                              <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="block text-xs font-bold text-white group-hover:text-emerald-300 font-mono">
                                  {tool.label}
                                </span>
                                <span className="block text-[10px] text-gray-400 leading-tight">
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

              {/* Other Primary Links */}
              {primaryNavLinks.slice(1).map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

            </nav>

            {/* Right: Actions Hub */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              
              {/* FTA Audit Trigger Button */}
              {onOpenAuditModal && (
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold transition-all shadow-md shadow-amber-500/10 whitespace-nowrap cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>FTA Audit Check</span>
                </button>
              )}

              {/* WhatsApp Desk */}
              <a
                href={LEDGERA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>

              {/* Primary Consultation Action */}
              <button
                type="button"
                onClick={onOpenConsultationModal}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                Book Consultation
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-[#111722] border border-white/10 text-gray-300 hover:text-white cursor-pointer"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#080C14]/98 border-b border-white/10 backdrop-blur-2xl p-5 lg:hidden shadow-2xl font-mono text-xs max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">

              {/* Section Header */}
              <div className="text-[10px] text-gray-400 uppercase tracking-widest pt-2">
                Statutory Practice Scopes &amp; Calculators
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('catalog')}
                  className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-left flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>200+ Catalog</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('tax-simulator')}
                  className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-left flex items-center gap-2"
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tax 9% Simulator</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('gratuity-calculator')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-bold text-left flex items-center gap-2"
                >
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>EOSG Gratuity</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-bold text-left flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Services</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('vat-calc')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-bold text-left"
                >
                  VAT Calculator
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('tax-checker')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-bold text-left"
                >
                  Readiness Diagnostic
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('case-study')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-bold text-left"
                >
                  Case Studies
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('locations')}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-bold text-left"
                >
                  UAE Offices
                </button>
              </div>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                {onOpenAuditModal && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenAuditModal();
                    }}
                    className="w-full py-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center justify-center gap-2"
                  >
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span>Run FTA Audit Diagnostic</span>
                  </button>
                )}

                <a
                  href={LEDGERA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Tax Advisor (+971 50)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultationModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 text-black font-extrabold uppercase tracking-wider shadow-lg shadow-emerald-500/25"
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
