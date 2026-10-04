'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Layers, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  SlidersHorizontal, 
  Compass,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { FURNITURE_ROOMS, FURNITURE_MATERIALS } from '@/data/furnitureData';
import { FormaLogo } from './FormaLogo';

interface FormaNavProps {
  cartCount: number;
  cartTotal?: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onSelectRoom: (roomName: string) => void;
  onSelectMaterial: (materialId: string) => void;
  onBookShowroom?: () => void;
  onOpenShowrooms?: () => void;
}

export const FormaNav: React.FC<FormaNavProps> = ({
  cartCount,
  cartTotal = 0,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectRoom,
  onSelectMaterial,
  onBookShowroom,
  onOpenShowrooms
}) => {
  const handleShowroomClick = onBookShowroom || onOpenShowrooms || (() => {});
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [materialsDropdownOpen, setMaterialsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* UAE White-Glove Notice Bar */}
      <div className="bg-[#121110] border-b border-[#2C2926] text-[11px] tracking-wider text-[#C5BDB5] py-1.5 px-4 hidden md:flex items-center justify-between z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#E6AF73] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6AF73] animate-pulse"></span>
            UAE White-Glove In-Home Assembly & Delivery across Dubai, Abu Dhabi & All Emirates
          </span>
          <span className="text-[#3E3B37]">|</span>
          <span className="flex items-center gap-1 text-[#A8A096]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E6AF73]" /> 5-Year Official Structural Warranty
          </span>
        </div>
        <div className="flex items-center gap-5 text-[#A8A096]">
          <button 
            onClick={onBookShowroom}
            className="hover:text-[#E6AF73] transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3 text-[#E6AF73]" />
            <span>Ateliers: Dubai Design District (d3) & Saadiyat Island</span>
          </button>
          <span className="text-[#3E3B37]">|</span>
          <a 
            href="https://wa.me/971523394001?text=Hello%20FORMA%20ATELIER,%20I%20would%20like%20to%20inquire%20about%20bespoke%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6AF73] hover:text-[#FFD29E] transition-colors flex items-center gap-1 font-medium"
          >
            <span>WhatsApp Concierge: +971 52 339 4001</span>
          </a>
          <span className="text-[#3E3B37]">|</span>
          <span className="text-[#E6AF73] font-mono font-semibold">AED (Dirham)</span>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#151412]/92 backdrop-blur-xl border-b border-[#2C2926] shadow-2xl shadow-black/40 py-3.5' 
            : 'bg-[#151412]/70 backdrop-blur-md border-b border-[#242220] py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Editorial Monogram */}
            <div className="flex items-center gap-8">
              <a href="#hero" className="transition-transform duration-300 hover:opacity-95">
                <FormaLogo size="md" />
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-1 text-xs tracking-widest uppercase text-[#DCD6CE] font-medium">
                
                {/* Rooms Mega-Menu */}
                <div className="relative">
                  <button 
                    onClick={() => {
                      setRoomsDropdownOpen(!roomsDropdownOpen);
                      setMaterialsDropdownOpen(false);
                    }}
                    onMouseEnter={() => setRoomsDropdownOpen(true)}
                    className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all flex items-center gap-1.5 text-[#F3EFEA]"
                  >
                    <span>Rooms</span>
                    <ChevronDown className={`w-3 h-3 text-[#A8A096] transition-transform ${roomsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {roomsDropdownOpen && (
                    <div 
                      onMouseLeave={() => setRoomsDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-[520px] bg-[#1A1816]/95 backdrop-blur-2xl border border-[#38332E] rounded-2xl p-5 shadow-2xl shadow-black/80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2C2926]">
                        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#E6AF73]">
                          Curated Interior Spaces (216+ Works)
                        </span>
                        <a 
                          href="#catalog" 
                          onClick={() => setRoomsDropdownOpen(false)}
                          className="text-[11px] text-[#E6AF73] hover:underline"
                        >
                          View All Rooms →
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {FURNITURE_ROOMS.map(room => (
                          <button
                            key={room.id}
                            onClick={() => {
                              onSelectRoom(room.name);
                              setRoomsDropdownOpen(false);
                            }}
                            className="text-left p-3 rounded-xl bg-white/[0.02] hover:bg-[#E6AF73]/10 border border-white/5 hover:border-[#E6AF73]/30 transition-all group"
                          >
                            <div className="text-xs font-bold text-[#F3EFEA] group-hover:text-[#E6AF73] flex items-center justify-between">
                              <span>{room.name}</span>
                              <span className="text-[10px] font-mono text-[#A8A096]">{room.count}</span>
                            </div>
                            <div className="text-[10px] text-[#A8A096] line-clamp-1 mt-0.5 font-light">
                              {room.tagline}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Materials Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => {
                      setMaterialsDropdownOpen(!materialsDropdownOpen);
                      setRoomsDropdownOpen(false);
                    }}
                    onMouseEnter={() => setMaterialsDropdownOpen(true)}
                    className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all flex items-center gap-1.5 text-[#F3EFEA]"
                  >
                    <span>Materials</span>
                    <ChevronDown className={`w-3 h-3 text-[#A8A096] transition-transform ${materialsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {materialsDropdownOpen && (
                    <div 
                      onMouseLeave={() => setMaterialsDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-[480px] bg-[#1A1816]/95 backdrop-blur-2xl border border-[#38332E] rounded-2xl p-5 shadow-2xl shadow-black/80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="pb-3 mb-3 border-b border-[#2C2926] text-[11px] font-mono font-bold tracking-widest uppercase text-[#E6AF73]">
                        Master Material Provenance
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {FURNITURE_MATERIALS.map(mat => (
                          <button
                            key={mat.id}
                            onClick={() => {
                              onSelectMaterial(mat.id);
                              setMaterialsDropdownOpen(false);
                            }}
                            className="text-left p-2.5 rounded-xl bg-white/[0.02] hover:bg-[#E6AF73]/10 border border-white/5 hover:border-[#E6AF73]/30 transition-all group"
                          >
                            <div className="text-xs font-bold text-[#F3EFEA] group-hover:text-[#E6AF73]">
                              {mat.name}
                            </div>
                            <div className="text-[10px] text-[#A8A096] font-mono">{mat.origin}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href="#interiors" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Interiors
                </a>
                <a href="#transformation" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Before / After
                </a>
                <a href="#catalog" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all text-[#E6AF73] font-semibold">
                  200+ Catalog
                </a>
                <a href="#bespoke" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Bespoke
                </a>
                <a href="#journal" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Journal
                </a>
                <a href="#showrooms" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Ateliers
                </a>
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button 
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#DCD6CE] text-xs tracking-wider transition-all"
                title="Search 200+ Furniture Works (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-[#E6AF73]" />
                <span className="hidden sm:inline font-sans">Search Collection...</span>
                <kbd className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[#A8A096] font-mono">⌘K</kbd>
              </button>

              {/* Wishlist Trigger */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#DCD6CE] hover:text-[#E6AF73] transition-all"
                title="Saved Pieces"
              >
                <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-[#E6AF73] fill-[#E6AF73]' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E6AF73] text-[10px] font-bold text-black flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#E6AF73]/20 to-[#C68D4C]/20 hover:from-[#E6AF73]/30 hover:to-[#C68D4C]/30 border border-[#E6AF73]/40 text-[#F5D8B8] font-medium text-xs tracking-wide transition-all group"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#E6AF73] group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#E6AF73] text-black text-[10px] font-bold flex items-center justify-center animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col items-start text-left leading-tight">
                  <span className="text-[9px] text-[#A8A096] uppercase tracking-wider">Bag</span>
                  <span className="text-[11px] font-mono font-bold text-[#F3EFEA]">
                    AED {cartTotal.toLocaleString()}
                  </span>
                </div>
              </button>

              {/* VIP Atelier Booking Button */}
              <button
                onClick={handleShowroomClick}
                className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F3EFEA] text-[#121110] font-semibold text-xs tracking-widest uppercase hover:bg-[#E6AF73] transition-all shadow-md"
              >
                <Crown className="w-3.5 h-3.5 text-[#121110]" />
                <span>Book Fitting</span>
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#151412] border-b border-[#2C2926] px-4 py-6 mt-3 space-y-4 animate-in slide-in-from-top-4">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a 
                href="#catalog" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#E6AF73]/10 border border-[#E6AF73]/30 text-[#E6AF73] flex items-center gap-2"
              >
                <Layers className="w-4 h-4" /> 200+ Catalog
              </a>
              <a 
                href="#interiors" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#E6AF73]" /> Interior Spaces
              </a>
              <a 
                href="#transformation" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                Before / After
              </a>
              <a 
                href="#materials" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                Materials
              </a>
              <a 
                href="#bespoke" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                Bespoke Studio
              </a>
              <a 
                href="#showrooms" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#E6AF73]" /> UAE Showrooms
              </a>
            </div>

            <div className="pt-2 border-t border-[#2C2926] flex flex-col gap-2">
              <button
                onClick={() => {
                  handleShowroomClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-[#F3EFEA] text-black font-semibold text-xs uppercase tracking-wider text-center"
              >
                Book VIP Atelier Fitting
              </button>
              <a
                href="https://wa.me/971523394001?text=Hello%20FORMA%20ATELIER,%20I%20would%20like%20to%20inquire%20about%20bespoke%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-medium text-xs tracking-wider text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp VIP Concierge
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
