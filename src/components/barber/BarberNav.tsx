'use client';
import React, { useState } from 'react';
import { Scissors, Phone, Calendar, Menu, X, Search, Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { GentlemenRoomCrestLogo } from './GentlemenRoomCrestLogo';

export const BarberNav: React.FC<any> = ({ onOpenBooking, onOpenCart, onOpenWishlist, cartCount, wishlistCount, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-amber-500/20 text-white">
      <div className="bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-950 py-1.5 px-3 sm:px-4 text-center border-b border-amber-500/20">
        <p className="text-[10px] sm:text-[11px] font-mono text-amber-200 tracking-normal sm:tracking-wider flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span>Concept Showcase • THE GENTLEMEN'S ROOM Dubai • UAE AED Pricing</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <GentlemenRoomCrestLogo size="md" className="group-hover:scale-105 transition-transform shrink-0" />
          <div>
            <span className="text-lg sm:text-xl font-sans font-extrabold tracking-tight text-white block leading-tight">THE GENTLEMEN'S</span>
            <span className="text-[9px] font-mono text-amber-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase block font-semibold">ROOM BARBER STUDIO • DUBAI</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-neutral-300">
          <a href="#services" className="hover:text-amber-300 transition-colors">Services</a>
          <a href="#match" className="hover:text-amber-300 transition-colors">Style Match</a>
          <a href="#barbers" className="hover:text-amber-300 transition-colors">Barbers</a>
          <a href="#memberships" className="hover:text-amber-300 transition-colors">Memberships</a>
          <a href="#calculator" className="hover:text-amber-300 transition-colors">Calculator</a>
          <a href="#styles" className="hover:text-amber-300 transition-colors">Hairstyles</a>
          <a href="#products" className="hover:text-amber-300 transition-colors">Grooming Shop</a>
          <a href="#locations" className="hover:text-amber-300 transition-colors">Locations</a>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search cuts, beard..."
              className="w-32 md:w-40 pl-8 pr-3 py-1.5 bg-neutral-900 border border-amber-500/30 rounded-full text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <button onClick={onOpenWishlist} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-rose-400 relative">
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-mono font-bold flex items-center justify-center">{wishlistCount}</span>}
          </button>

          <button onClick={onOpenCart} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 relative">
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[9px] font-mono font-bold flex items-center justify-center">{cartCount}</span>}
          </button>

          <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
            <Phone className="w-4 h-4" />
          </a>

          <button onClick={onOpenBooking} className="hidden md:flex px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs uppercase font-mono tracking-wider items-center gap-1.5 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all">
            <Calendar className="w-3.5 h-3.5" /> Book Visit
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};
