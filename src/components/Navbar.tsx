'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Menu, 
  X, 
  MessageSquare, 
  ArrowRight, 
  Crown, 
  Layers, 
  ChevronDown, 
  ExternalLink,
  ShieldCheck,
  Globe,
  Compass,
  Activity
} from 'lucide-react';
import { AGENCY_BUSINESS, SELECTED_WORK, getDynamicFlagshipShortcuts } from '@/data/siteData';

interface NavbarProps {
  onOpenOrderModal: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const flagshipShortcuts = React.useMemo(() => getDynamicFlagshipShortcuts(4), []);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flagshipOpen, setFlagshipOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 20);

          // Detect active section on homepage
          if (pathname === '/') {
            const sections = ['contact', 'faq', 'pricing', 'tech', 'process', 'why', 'services', 'work', 'home'];
            for (const sec of sections) {
              const el = document.getElementById(sec === 'why' ? 'why' : sec);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 250) {
                  setActiveSection(sec);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Click outside to close flagships flyout
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFlagshipOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'Projects', id: 'work', href: '#work' },
    { name: 'Services', id: 'services', href: '#services' },
    { name: 'Why Us', id: 'why', href: '#why' },
    { name: 'Process', id: 'process', href: '#process' },
    { name: 'Tech', id: 'tech', href: '#tech' },
    { name: 'Pricing', id: 'pricing', href: '#pricing' },
    { name: 'FAQ', id: 'faq', href: '#faq' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setMobileMenuOpen(false);
    setFlagshipOpen(false);

    if (pathname === '/') {
      setTimeout(() => {
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }, 50);
    } else {
      router.push(`/${href}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    setFlagshipOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-amber-500/20 py-2.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-[#07090E]/60 backdrop-blur-md py-3.5 border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Identity with Subtle Premium Ambient Light */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="relative flex items-center group shrink-0 py-1"
          aria-label="Web Studio AE Home"
        >
          {/* Soft ambient backlight (barely noticeable, elegant luxury depth) */}
          <div className="absolute inset-0 -inset-x-1 bg-amber-400/15 blur-lg rounded-full pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500" />
          
          <img
            src="/webstudio-logo.png"
            alt="Web Studio AE Logo"
            className="relative z-10 h-8 sm:h-9 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_0_8px_rgba(245,158,11,0.2)] group-hover:drop-shadow-[0_0_14px_rgba(245,158,11,0.4)] group-hover:brightness-105"
          />
        </Link>

        {/* Center: Desktop Navigation Links with Sliding Spring Indicator */}
        <nav 
          onMouseLeave={() => setHoveredNav(null)}
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md relative"
        >
          {navLinks.map((link) => {
            const isActive = pathname === '/' && activeSection === link.id;
            const isHovered = hoveredNav === link.id;
            const isHighlighted = isHovered || (!hoveredNav && isActive);

            return (
              <a
                key={link.name}
                href={pathname === '/' ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredNav(link.id)}
                className={`relative px-3 py-1.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-colors z-10 whitespace-nowrap ${
                  isHighlighted ? 'text-black font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {isHighlighted && (
                  <motion.div
                    layoutId="activeNavSectionPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/25 -z-10"
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}

          {/* Projects Quick Launch HUD Trigger */}
          <div className="relative ml-1" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setFlagshipOpen(!flagshipOpen)}
              className={`flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider py-1.5 px-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                flagshipOpen
                  ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-md shadow-amber-500/30'
                  : 'bg-white/[0.04] text-gray-300 hover:text-amber-400 border-white/[0.08]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Projects</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${flagshipOpen ? 'rotate-180' : 'text-gray-400'}`} />
            </button>

            {/* Quick Projects HUD Modal Flyout */}
            <AnimatePresence>
              {flagshipOpen && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className="absolute top-full right-0 mt-3 w-84 p-3.5 rounded-2xl bg-[#0B0D14]/98 backdrop-blur-2xl border border-amber-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(245,158,11,0.12)] z-50 overflow-hidden"
                >
                  {/* Flyout Header */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.08] px-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Production Deployments</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">{SELECTED_WORK.length}+ Platforms</span>
                  </div>

                  {/* Staggered Shortcut Cards */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.06 }
                      }
                    }}
                    initial={shouldReduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="flex flex-col gap-1.5"
                  >
                    {flagshipShortcuts.map((item) => (
                      <motion.div
                        key={item.num}
                        variants={{
                          hidden: { opacity: 0, x: -8 },
                          show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 350, damping: 25 } }
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setFlagshipOpen(false)}
                          className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-amber-500/[0.08] border border-white/[0.05] hover:border-amber-400/50 transition-all hover:scale-[1.015] hover:shadow-[0_4px_16px_rgba(245,158,11,0.12)]"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-8 h-8 rounded-lg bg-black/80 border border-amber-500/20 group-hover:border-amber-400/60 flex items-center justify-center font-mono text-[11px] font-bold text-amber-400 group-hover:scale-105 transition-all">
                              {item.num}
                            </span>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                                <span>{item.title}</span>
                              </div>
                              <div className="text-[10px] text-gray-400">
                                {item.category}
                              </div>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 group-hover:bg-amber-500/20 group-hover:border-amber-400/40 transition-colors">
                            {item.tag}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="pt-2.5 mt-2.5 border-t border-white/[0.06] flex items-center justify-between px-1">
                    <Link
                      href="/projects"
                      onClick={() => setFlagshipOpen(false)}
                      className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>VIEW ALL PROJECTS →</span>
                    </Link>
                    <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {SELECTED_WORK.length}+ Active
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right: Desktop Action Hub */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenOrderModal()}
            className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href={AGENCY_BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-amber-400" />}
        </button>
      </div>


      {/* Mobile Drawer Command Center */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#07090E]/98 border-b border-amber-500/30 backdrop-blur-2xl overflow-hidden shadow-2xl relative z-50 max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 py-6 flex flex-col gap-4 font-sans">
              
              {/* Studio Status Live Pill in Mobile */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DXB STUDIO ONLINE</span>
                </div>
                <span className="text-[10px] font-mono text-amber-400">Q1/Q2 SPRINT ACTIVE</span>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={pathname === '/' ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-semibold tracking-wide text-gray-200 hover:text-amber-400 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400/60" />
                  </a>
                ))}
              </div>

              {/* Flagships Mini Section */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-amber-400" />
                  <span>Featured Production Flagships</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {flagshipShortcuts.slice(0, 2).map((item) => (
                    <Link
                      key={item.num}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/30 flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-amber-400 text-xs font-bold">{item.num}</span>
                        <span className="text-[8px] font-mono uppercase px-1 py-0.2 rounded bg-amber-500/10 text-amber-300">
                          {item.tag.split(' ')[0]}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-white truncate">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-98 touch-manipulation cursor-pointer"
                >
                  <Crown className="w-4 h-4" />
                  <span>Start a Project</span>
                </button>

                <a
                  href={AGENCY_BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-98 touch-manipulation"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk on WhatsApp (+971 52 339 4001)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;