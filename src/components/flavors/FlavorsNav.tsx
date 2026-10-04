'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlavorsBranch } from '@/data/flavorsData';
import { CartItem } from '@/app/projects/flavors/page';

interface FlavorsNavProps {
  selectedBranch: FlavorsBranch | null;
  cartItems: CartItem[];
  onCartOpen: () => void;
  onSearchOpen: () => void;
  onChangeBranch: () => void;
  onCakeBuilderOpen: () => void;
}

const NAV_LINKS = [
  { label: 'Cakes', href: '#cakes' },
  { label: 'Sweets', href: '#sweets' },
  { label: 'Bakery', href: '#bakery' },
  { label: 'Frozen', href: '#frozen' },
  { label: 'Gifts', href: '#gifts' },
  { label: 'Custom Cake', href: '#builder', highlight: true },
  { label: 'Corporate', href: '#corporate' },
];

export const FlavorsNav: React.FC<FlavorsNavProps> = ({
  selectedBranch,
  cartItems,
  onCartOpen,
  onSearchOpen,
  onChangeBranch,
  onCakeBuilderOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);
  const cartTotal = cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(10,31,18,0.97)' : 'rgba(10,31,18,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(245,197,24,0.2)' : '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.3s ease',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Branch Banner */}
        {selectedBranch && (
          <div style={{ background: 'rgba(245,197,24,0.08)', borderBottom: '1px solid rgba(245,197,24,0.12)', padding: '6px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px' }}>SERVING FROM:</span>
            <span style={{ fontSize: '12px', color: '#f5c518', fontWeight: 600, letterSpacing: '0.5px' }}>📍 {selectedBranch.name}</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>·</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>{selectedBranch.hours.weekdays}</span>
            <button
              onClick={onChangeBranch}
              style={{ fontSize: '11px', color: '#f5c518', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', letterSpacing: '0.5px', padding: '0' }}
            >
              Change Branch
            </button>
          </div>
        )}

        {/* Main Nav */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="/flavors-logo.jpg" 
              alt="FLAVORS Logo" 
              style={{ height: '44px', width: 'auto', borderRadius: '4px' }}
              onError={(e) => {
                // Fallback if image isn't saved yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.setAttribute('style', 'display: flex; align-items: center; gap: 10px;');
              }}
            />
            <div style={{ display: 'none' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', boxShadow: '0 4px 16px rgba(245,197,24,0.35)' }}>
                ✦
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', letterSpacing: '3px', lineHeight: 1 }}>FLAVORS</div>
                <div style={{ fontSize: '9px', color: '#f5c518', letterSpacing: '2.5px', textTransform: 'uppercase', lineHeight: 1.2, fontWeight: 500 }}>Premium Sweets & Bakers</div>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="flavors-nav-links">
            {NAV_LINKS.map(link => (
              link.highlight ? (
                <motion.button
                  key={link.label}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onCakeBuilderOpen}
                  style={{ padding: '8px 16px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', border: 'none', borderRadius: '8px', color: '#0a1f12', fontSize: '13px', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.3px' }}
                >
                  ✦ {link.label}
                </motion.button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ padding: '8px 14px', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', borderRadius: '8px', transition: 'all 0.2s', letterSpacing: '0.3px' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#ffffff'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.target as HTMLElement).style.background = 'transparent'; }}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Search */}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onSearchOpen} style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
              🔍
            </motion.button>

            {/* WhatsApp */}
            {selectedBranch && (
              <motion.a href={selectedBranch.whatsapp} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(76,175,125,0.12)', border: '1px solid rgba(76,175,125,0.2)', color: '#4caf7d', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', textDecoration: 'none' }}>
                💬
              </motion.a>
            )}

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartOpen}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)', borderRadius: '10px', color: '#f5c518', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}
            >
              <span>🛒</span>
              {cartCount > 0 && (
                <>
                  <span style={{ background: '#f5c518', color: '#0a1f12', borderRadius: '12px', padding: '1px 7px', fontSize: '11px', fontWeight: 700 }}>{cartCount}</span>
                  <span style={{ color: 'rgba(245,197,24,0.7)', fontSize: '12px' }}>৳{cartTotal.toLocaleString()}</span>
                </>
              )}
              {cartCount === 0 && <span style={{ fontSize: '12px' }}>Cart</span>}
            </motion.button>

            {/* Mobile menu */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flavors-mobile-menu-btn" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ position: 'fixed', top: selectedBranch ? '128px' : '96px', left: 0, right: 0, zIndex: 999, background: 'rgba(10,31,18,0.98)', borderBottom: '1px solid rgba(245,197,24,0.15)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ padding: '12px 0', color: link.highlight ? '#f5c518' : 'rgba(255,255,255,0.8)', fontSize: '15px', fontWeight: link.highlight ? 700 : 400, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {link.highlight ? '✦ ' : ''}{link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .flavors-nav-links { display: none !important; }
          .flavors-mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};
