'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, ArrowUpRight, ShieldCheck, ShoppingBag } from 'lucide-react';
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
    { label: 'Products', href: '#products' },
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
      {/* Top Persistent Corporate Header */}
      <div className="bg-[#063D24] text-amber-300 py-2 px-4 text-center font-mono text-xs font-semibold flex items-center justify-center gap-4 z-50 relative border-b border-amber-500/20 shadow-sm">
        <span className="flex items-center gap-1.5 text-white">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>DUBAI AL AWEER VEGETABLE MARKET HQ</span>
        </span>
        <span className="hidden md:inline text-amber-500/40">•</span>
        <span className="hidden md:inline text-gray-200 font-sans">
          Managing Director: <strong className="text-amber-300 font-mono">{BARAKAH_BRAND.mdName}</strong>
        </span>
        <span className="hidden md:inline text-amber-500/40">•</span>
        <a
          href={`tel:${BARAKAH_BRAND.phones[0].replace(/\s+/g, '')}`}
          className="underline hover:text-white font-bold text-amber-300 transition-colors"
        >
          SALES DESK: {BARAKAH_BRAND.phones[0]}
        </a>
      </div>

      <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-900/10 py-2.5 shadow-md' 
          : 'bg-white py-3.5 border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-12 w-auto flex items-center justify-center filter drop-shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src="/images/barakah-logo.png"
                  alt="BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C Logo"
                  className="h-12 w-auto object-contain"
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

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-[#063D24] transition-colors font-sans"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                type="button"
                onClick={openCart}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-[#063D24] border border-amber-400/60 font-mono font-bold text-xs transition-all shadow-xs"
                title="Open Wholesale Order Cart"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-800" />
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-[#063D24] text-amber-300 text-[10px] font-black">
                    {totalCtn} CTN
                  </span>
                )}
              </button>

              <a
                href={BARAKAH_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-all font-mono"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs tracking-wider uppercase font-mono shadow-md hover:scale-105 transition-all border border-emerald-900"
              >
                <span className="text-amber-300">QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>

            {/* Mobile Header Actions (Cart + Menu) */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={openCart}
                className="relative p-2.5 rounded-xl bg-amber-400/20 text-[#063D24] border border-amber-400/50 hover:bg-amber-400/30 transition-all font-mono flex items-center gap-1.5"
                title="Open Wholesale Cart"
              >
                <ShoppingBag className="w-5 h-5 text-emerald-800" />
                {totalItems > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-[#063D24] text-amber-300 text-[9px] font-black">
                    {totalCtn}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-emerald-50 text-[#063D24] hover:bg-emerald-100 transition-all border border-emerald-200 touch-manipulation cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#063D24]" /> : <Menu className="w-5 h-5 text-[#063D24]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
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
                className="w-full py-3.5 rounded-xl bg-[#063D24] text-white font-extrabold text-xs text-center font-mono uppercase tracking-wider shadow-md touch-manipulation"
              >
                <span className="text-amber-300">REQUEST A QUOTE NOW</span>
              </button>
              <a
                href={BARAKAH_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2 font-mono shadow-sm touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT WITH SALES ON WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};