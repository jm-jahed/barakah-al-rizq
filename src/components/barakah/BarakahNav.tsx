'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, ArrowUpRight, ShieldCheck, ShoppingBag, Phone } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';
import { useWholesaleCart } from '@/context/WholesaleCartContext';

interface BarakahNavProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const BarakahNav: React.FC<BarakahNavProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, totalCtn, totalItems } = useWholesaleCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Live Wholesale Prices', href: '#live-prices' },
    { label: 'Import & Export', href: '#services' },
    { label: 'Why Choose Us', href: '#whyus' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    setTimeout(() => {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -85;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <>
      {/* Top Persistent Executive Trade Desk Strip */}
      <div className="bg-[#032516] text-emerald-100 text-[10px] sm:text-[11px] font-mono py-1.5 px-3 sm:px-6 lg:px-8 border-b border-emerald-800/40 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Market Credential & MD info */}
          <div className="flex items-center gap-2 sm:gap-4 shrink min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-600/40 text-emerald-200 text-[9.5px] sm:text-[10px] font-mono font-semibold tracking-wide shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="hidden xs:inline">DUBAI AL AWEER CENTRAL MARKET HQ</span>
              <span className="xs:hidden">AL AWEER HQ</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-emerald-200/90 text-[11px] font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Managing Director:</span>
              <strong className="text-white font-medium">{BARAKAH_BRAND.mdName}</strong>
            </div>
          </div>

          {/* Right: Direct Sales Trade Desk Dial */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${BARAKAH_BRAND.phones[0].replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-amber-300 hover:text-white px-2 sm:px-2.5 py-0.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-all tracking-tight whitespace-nowrap"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 shrink-0" />
              <span className="hidden sm:inline">SALES DESK: </span>
              <span>{BARAKAH_BRAND.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-900/10 py-2.5 shadow-md' 
          : 'bg-white py-3 border-b border-gray-100 shadow-xs'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Commercial Entity Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-11 w-auto flex items-center justify-center filter drop-shadow-sm group-hover:scale-102 transition-transform">
                <img
                  src="/images/barakah-logo.png"
                  alt="BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C Logo"
                  className="h-11 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg sm:text-xl font-black text-[#063D24] tracking-tight font-sans leading-none block">
                  BARAKAH <span className="text-amber-600 font-serif italic">AL RIZQ</span>
                </span>
                <span className="block text-[8px] font-mono text-emerald-800 uppercase tracking-widest mt-1 font-bold">
                  FOODSTUFF TRADING L.L.C • DUBAI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 mr-4 xl:mr-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[12px] font-bold uppercase tracking-wider text-slate-700 hover:text-[#063D24] transition-colors font-sans relative py-1 group whitespace-nowrap"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#063D24] transition-all duration-200 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Executive Action Buttons Group */}
            <div className="hidden sm:flex items-center gap-2.5 xl:gap-3.5 pl-2 lg:pl-4 border-l border-gray-100 lg:border-emerald-100/80">
              
              {/* 1. B2B Wholesale Procurement Cart */}
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex items-center gap-2 h-10 px-3.5 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white border border-emerald-700/60 font-mono text-xs font-bold transition-all shadow-sm hover:shadow-md group active:scale-95"
                title="Open Wholesale Order Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  )}
                </div>
                <span>Cart</span>
                {totalItems > 0 ? (
                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black font-mono shadow-xs tracking-tight">
                    {totalCtn} CTN
                  </span>
                ) : (
                  <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-emerald-200 text-[10px] font-mono">
                    0
                  </span>
                )}
              </button>

              {/* 2. Official WhatsApp Trade Desk */}
              <a
                href={BARAKAH_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-3.5 rounded-xl bg-emerald-50/90 hover:bg-emerald-100 text-emerald-950 border border-emerald-200/90 font-bold text-xs transition-all font-mono shadow-xs hover:border-emerald-300 active:scale-95"
                title="Direct WhatsApp Commercial Desk"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* 3. Executive Instant Quote Button */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-105 text-slate-950 font-black text-xs tracking-wider uppercase font-mono shadow-sm hover:shadow-md transition-all border border-amber-300 active:scale-95"
              >
                <span>QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Header Actions (Cart + Hamburger Menu) */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile Cart Button */}
              <button
                type="button"
                onClick={openCart}
                className="relative h-10 px-3 rounded-xl bg-[#063D24] text-white border border-emerald-700/60 font-mono flex items-center gap-1.5 shadow-sm active:scale-95"
                title="Open Wholesale Cart"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                {totalItems > 0 ? (
                  <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black">
                    {totalCtn}
                  </span>
                ) : (
                  <span className="text-[10px] text-emerald-200 font-mono">0</span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-10 w-10 rounded-xl bg-emerald-50 text-[#063D24] hover:bg-emerald-100 transition-all border border-emerald-200 touch-manipulation cursor-pointer flex items-center justify-center active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#063D24]" /> : <Menu className="w-5 h-5 text-[#063D24]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-emerald-200 px-4 pt-4 pb-6 space-y-3 font-sans shadow-xl">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <img
                src="/images/barakah-logo.png"
                alt="BARAKAH AL RIZQ Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-base font-bold text-[#063D24] block">BARAKAH AL RIZQ</span>
                <span className="text-[9px] font-mono text-amber-600 block">FOODSTUFF TRADING L.L.C</span>
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-base font-semibold text-gray-800 hover:text-[#063D24] border-b border-gray-100 touch-manipulation cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs text-center font-mono uppercase tracking-wider shadow-md touch-manipulation"
              >
                REQUEST AN OFFICIAL QUOTE NOW
              </button>
              <a
                href={BARAKAH_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs text-center flex items-center justify-center gap-2 font-mono shadow-sm touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT WITH COMMERCIAL SALES ON WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};