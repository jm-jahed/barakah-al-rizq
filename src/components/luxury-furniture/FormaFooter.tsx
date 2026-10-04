'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Check, 
  ShieldCheck, 
  Truck, 
  Crown,
  Compass,
  ArrowUp
} from 'lucide-react';
import Link from 'next/link';
import { FormaLogo } from './FormaLogo';

interface FormaFooterProps {
  onNavigateSection?: (sectionId: string) => void;
  onOpenShowrooms?: () => void;
}

export const FormaFooter: React.FC<FormaFooterProps> = ({
  onNavigateSection,
  onOpenShowrooms
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0908] text-[#F5F2EB] border-t border-stone-800/80 pt-20 pb-12 font-sans relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#9E7A52]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Private Client Invitation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80 items-center">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A97A] font-medium flex items-center gap-2">
              <Crown className="w-3.5 h-3.5" />
              Private Client Register
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-white leading-snug">
              Receive private atelier dispatches, rare material arrivals & preview editions.
            </h2>
            <p className="text-xs text-stone-400 max-w-md">
              Invitations to private showroom salons in Dubai Design District (d3) and Saadiyat Island, plus curatorial essays from our Italian master joinery team.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#141210] border border-emerald-500/30 rounded-sm flex items-center gap-3 text-emerald-400 text-xs">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>
                  Welcome to the FORMA Private Client Register. An introductory dossier has been dispatched to your inbox.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address (e.g. client@dubai.ae)"
                    required
                    className="flex-1 bg-[#141210] border border-stone-800 rounded-sm px-4 py-3.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#9E7A52] font-mono"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#9E7A52] hover:bg-[#8A6740] text-white text-xs uppercase tracking-widest font-medium rounded-sm transition-colors flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    <span>Request Invitation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-stone-400">
                  Strict privacy observed. No unsolicited communication. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Middle Multi-column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-stone-800/80 text-xs">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <FormaLogo size="md" />
            <p className="text-stone-400 leading-relaxed text-xs">
              Architectural furniture shaped around living. Handcrafted between Treviso, Italy and Al Quoz, Dubai.
            </p>
            <div className="pt-2 text-[11px] text-[#C9A97A] font-mono space-y-1">
              <p>UAE Flagship: d3, Building 6</p>
              <p>Concierge: +971 4 394 8800</p>
            </div>
          </div>

          {/* Room Collections */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-widest text-[#C9A97A] font-semibold">
              Spaces & Rooms
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('products')} className="hover:text-white transition-colors text-left">
                  Living Room (48 Works)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('products')} className="hover:text-white transition-colors text-left">
                  Dining Room (36 Works)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('products')} className="hover:text-white transition-colors text-left">
                  Bedroom Suites (32 Works)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('products')} className="hover:text-white transition-colors text-left">
                  Home Office & Studios (28 Works)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('products')} className="hover:text-white transition-colors text-left">
                  Outdoor & Terrace Living (30 Works)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('products')} className="hover:text-white transition-colors text-left">
                  Lighting & Sculptural Objects (34 Works)
                </button>
              </li>
            </ul>
          </div>

          {/* Materials & Craft */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-widest text-[#C9A97A] font-semibold">
              Materials & Craft
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('materials')} className="hover:text-white transition-colors text-left">
                  Roman Navona Travertine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('materials')} className="hover:text-white transition-colors text-left">
                  Solid American Black Walnut
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('materials')} className="hover:text-white transition-colors text-left">
                  Full-Grain Italian Leather
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('materials')} className="hover:text-white transition-colors text-left">
                  Italian Wool Bouclé
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('materials')} className="hover:text-white transition-colors text-left">
                  Calacatta Viola Marble
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('craftsmanship')} className="hover:text-white transition-colors text-left">
                  5-Chapter Joinery Manifesto
                </button>
              </li>
            </ul>
          </div>

          {/* Private Services */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-widest text-[#C9A97A] font-semibold">
              Private Client Services
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('bespoke')} className="hover:text-white transition-colors text-left">
                  Bespoke Customizer Studio
                </button>
              </li>
              <li>
                <button onClick={() => onOpenShowrooms && onOpenShowrooms()} className="hover:text-white transition-colors text-left">
                  VIP Showroom Appointments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection && onNavigateSection('journal')} className="hover:text-white transition-colors text-left">
                  The Journal Editorial
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Trade & Interior Architects Portal
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  UAE White-Glove In-Home Delivery
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  5-Year Structural Atelier Warranty
                </span>
              </li>
            </ul>
          </div>

          {/* UAE Showrooms */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-widest text-[#C9A97A] font-semibold">
              UAE Showrooms
            </h4>
            <ul className="space-y-3 text-stone-400">
              <div>
                <p className="text-white font-medium">Dubai Design District (d3)</p>
                <p className="text-[11px] text-stone-400">Building 6, Mezzanine 102</p>
                <p className="text-[10px] text-[#C9A97A] font-mono">+971 4 394 8800</p>
              </div>
              <div>
                <p className="text-white font-medium">Al Quoz Creative Zone</p>
                <p className="text-[11px] text-stone-400">Street 8, Alserkal Annex</p>
                <p className="text-[10px] text-[#C9A97A] font-mono">+971 4 482 1100</p>
              </div>
              <div>
                <p className="text-white font-medium">Saadiyat Island, Abu Dhabi</p>
                <p className="text-[11px] text-stone-400">Mamsha Cultural Pavilion</p>
                <p className="text-[10px] text-[#C9A97A] font-mono">+971 2 612 9900</p>
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Compliance & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900 border border-stone-800 rounded-sm text-[11px] text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              UAE Direct Atelier Dispatch (AED)
            </span>
            <span>TRN: 10048291000003</span>
          </div>

          <p className="text-center text-stone-400">
            © {new Date().getFullYear()} FORMA ATELIER L.L.C. All rights reserved. Registered in Dubai, UAE.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white uppercase tracking-wider text-[11px] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
