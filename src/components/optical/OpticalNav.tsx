'use client';
import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Search, Heart, ShoppingBag } from 'lucide-react';
import { VistaEyeCrestLogo } from './VistaEyeCrestLogo';

export const OpticalNav: React.FC<any> = ({ onOpenBooking, onOpenCart, onOpenWishlist, cartCount, wishlistCount, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070D18]/90 backdrop-blur-xl border-b border-sky-500/20 text-white">
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 py-1.5 px-3 sm:px-4 text-center border-b border-sky-500/20">
        <p className="text-[10px] sm:text-[11px] font-mono text-sky-200 tracking-normal sm:tracking-wider flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span>✦ Concept Project Showcase</span>
          <span>• VISTAÉYE OPTICAL ATELIER Dubai</span>
          <span>• UAE AED Pricing</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <VistaEyeCrestLogo size="md" className="group-hover:scale-105 transition-transform shrink-0" />
          <div>
            <span className="text-xl font-sans font-extrabold tracking-tight text-white block leading-tight">VISTAÉYE</span>
            <span className="text-[9px] font-mono text-sky-400 tracking-[0.2em] uppercase block font-semibold">OPTICAL ATELIER • DUBAI</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-slate-300">
          <a href="#eyewear" className="hover:text-sky-300 transition-colors">Catalog</a>
          <a href="#sunglasses" className="hover:text-sky-300 transition-colors">Sunglasses</a>
          <a href="#blue-light" className="hover:text-sky-300 transition-colors">Blue-Light</a>
          <a href="#try-on" className="hover:text-sky-300 transition-colors">Virtual Try-On</a>
          <a href="#lenses" className="hover:text-sky-300 transition-colors">Lens Studio</a>
          <a href="#services" className="hover:text-sky-300 transition-colors">Eye Care</a>
          <a href="#optometrists" className="hover:text-sky-300 transition-colors">Optometrists</a>
          <a href="#location" className="hover:text-sky-300 transition-colors">City Walk Store</a>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search frames, lenses..."
              className="w-32 md:w-40 pl-8 pr-3 py-1.5 bg-slate-900/80 border border-sky-500/30 rounded-full text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <button onClick={onOpenWishlist} className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 relative">
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-mono font-bold flex items-center justify-center">{wishlistCount}</span>}
          </button>

          <button onClick={onOpenCart} className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 relative">
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-sky-400 text-slate-950 text-[9px] font-mono font-bold flex items-center justify-center">{cartCount}</span>}
          </button>

          <a
            href="https://wa.me/971523394001?text=Hi%20VISTAÉYE%20Optical!%20I%20want%20to%20book%20an%20eye%20exam."
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden md:flex px-4 py-2.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-slate-950 font-extrabold text-xs uppercase font-mono tracking-wider items-center gap-1.5 shadow-lg shadow-sky-500/20 hover:scale-105 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Eye Exam
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#070D18] border-b border-sky-500/20 p-5 space-y-3">
          <div className="flex flex-col gap-2 font-medium text-sm text-slate-300">
            <a href="#eyewear" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">Eyewear Catalog</a>
            <a href="#sunglasses" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">Sunglasses</a>
            <a href="#blue-light" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">Blue-Light Blocking</a>
            <a href="#try-on" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">Virtual Try-On</a>
            <a href="#lenses" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">Lens Studio</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">Eye Care Services</a>
            <a href="#optometrists" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">Consultant Optometrists</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="hover:text-sky-300 py-1">City Walk Dubai Store</a>
          </div>
          <button
            onClick={() => { setIsOpen(false); onOpenBooking(); }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book Eye Exam
          </button>
        </div>
      )}
    </header>
  );
};
