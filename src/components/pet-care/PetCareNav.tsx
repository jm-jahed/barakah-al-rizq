'use client';

import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Calendar, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Activity,
  Award,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface PetCareNavProps {
  onOpenBooking: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  cartCount: number;
  wishlistCount: number;
  onSearch?: (query: string) => void;
}

export const PetCareNav: React.FC<PetCareNavProps> = ({
  onOpenBooking,
  onOpenCart,
  onOpenWishlist,
  cartCount,
  wishlistCount,
  onSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeBranch, setActiveBranch] = useState('Dubai (Jumeirah 2)');
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchValue);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Emergency & Trust Alert Bar */}
      <div className="bg-[#080D12] text-white border-b border-emerald-500/20 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono font-bold text-[10px] border border-rose-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
              24/7 LEVEL-1 ICU OPEN
            </span>
            <span className="text-slate-300 hidden md:inline text-[11px] font-mono">
              Emergency Trauma Hotline: <a href="tel:+971523394001" className="text-emerald-400 font-bold hover:underline">+971 52 339 4001</a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-300">
            <div className="relative">
              <button 
                type="button"
                onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors text-slate-200 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{activeBranch}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {branchDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#0E1720] border border-emerald-500/30 rounded-2xl shadow-2xl p-2 z-50 text-left">
                  {['Dubai (Jumeirah 2)', 'Dubai Hills Sanctuary', 'Abu Dhabi (Al Bateen)', 'Sharjah (Al Majaz)'].map((branch) => (
                    <button
                      key={branch}
                      type="button"
                      onClick={() => {
                        setActiveBranch(branch);
                        setBranchDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono transition-colors ${
                        activeBranch === branch 
                          ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              MOCCAE & RCVS Accredited
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B1219]/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl py-3' 
          : 'bg-[#0B1219]/80 backdrop-blur-md border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/work/pet-care-veterinary" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B1219] rounded-[14px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black text-white tracking-tight font-sans">
                  PAWS <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">& CLAWS</span>
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                  24/7 HOSP
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider block">
                VETERINARY & LUXURY RESORT • DUBAI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#services" className="hover:text-emerald-300 transition-colors">Specialties</a>
            <a href="#triage" className="hover:text-emerald-300 transition-colors">AI Triage</a>
            <a href="#specialists" className="hover:text-emerald-300 transition-colors">Surgeons</a>
            <a href="#boarding" className="hover:text-emerald-300 transition-colors">Resort Suites</a>
            <a href="#calculator" className="hover:text-emerald-300 transition-colors">Longevity Calc</a>
            <a href="#apothecary" className="hover:text-emerald-300 transition-colors">Prescription Store</a>
            <a href="#locations" className="hover:text-emerald-300 transition-colors">Hospitals</a>
          </div>

          {/* Actions & Triggers */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center relative">
              <input
                type="text"
                placeholder="Search services, doctors, meds..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  if (onSearch) onSearch(e.target.value);
                }}
                className="w-48 lg:w-56 pl-8 pr-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-all font-mono"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            </form>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-mono font-extrabold text-[10px] flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            {/* 24/7 WhatsApp Quick Dial */}
            <a
              href="https://wa.me/971523394001?text=Emergency%20Veterinary%20Assistance%20Required"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 hover:bg-rose-500/25 font-mono text-xs font-bold transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>24/7 ICU</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer hover:scale-102"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Book Visit</span>
              <span className="sm:hidden">Book</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-emerald-500/20 bg-[#0A1016] px-4 py-5 space-y-4 text-xs font-mono">
            <div className="flex flex-col space-y-3 text-slate-300">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-300">Specialties & Diagnostics</a>
              <a href="#triage" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-300">Interactive AI Triage</a>
              <a href="#specialists" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-300">Resident Surgeons</a>
              <a href="#boarding" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-300">Luxury Boarding Suites</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-300">Longevity & Hydration Calculator</a>
              <a href="#apothecary" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-300">Prescription Pharmacy Store</a>
              <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-emerald-300">UAE Hospital Network</a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-center uppercase tracking-wider"
              >
                Book Veterinary Appointment
              </button>
              <a
                href="tel:+971523394001"
                className="w-full py-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
                Call 24/7 Emergency Line
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default PetCareNav;
