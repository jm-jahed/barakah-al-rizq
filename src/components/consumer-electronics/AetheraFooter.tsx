'use client';

import React, { useState } from 'react';
import { 
  Crown, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Layers,
  Globe
} from 'lucide-react';
import { GADGET_CATEGORIES } from '@/data/consumerElectronicsData';
import { AetheraLogo } from './AetheraLogo';

interface AetheraFooterProps {
  onSelectCategory: (categoryId: string) => void;
  onBookShowroom: () => void;
}

export const AetheraFooter: React.FC<AetheraFooterProps> = ({
  onSelectCategory,
  onBookShowroom
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#060709] border-t border-white/10 text-white/70 text-xs">
      
      {/* Top Value Propositions */}
      <div className="border-b border-white/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-sans">2-Year UAE VIP Warranty</h4>
              <p className="text-white/50 text-[11px] leading-relaxed">
                Official manufacturer guarantee with 1-to-1 immediate replacement service across Dubai & Abu Dhabi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 shrink-0">
              <Crown className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-sans">100% Authentic Provenance</h4>
              <p className="text-white/50 text-[11px] leading-relaxed">
                210+ curated flagship instruments sourced directly from official European & Japanese acoustic laboratories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-sans">Same-Day VIP Courier</h4>
              <p className="text-white/50 text-[11px] leading-relaxed">
                White-glove climate-controlled delivery across all 7 UAE Emirates within hours of order placement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-400/10 border border-purple-400/20 text-purple-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-sans">24/7 Concierge Support</h4>
              <p className="text-white/50 text-[11px] leading-relaxed">
                Dedicated hardware specialists available via WhatsApp, phone, or in-person at Dubai Mall & DIFC.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Newsletter (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <AetheraLogo size="md" />

            <p className="text-xs text-white/60 leading-relaxed">
              Engineered for those who refuse compromise. Flagship gadgets, acoustic instruments, and spatial computing hardware crafted for high-end UAE lifestyles.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <span className="text-[11px] font-mono text-white/70 uppercase">Join The Private Tech Dispatch</span>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your VIP email..."
                  className="bg-black/60 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400 flex-1 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                  <Check className="w-3 h-3" /> You are registered for private product drops.
                </div>
              )}
            </form>

            <div className="text-[11px] text-white/40 space-y-1 font-mono pt-2">
              <div>VAT Registration: <strong>TRN 100489201900003</strong></div>
              <div>Showrooms: The Dubai Mall, DIFC Gate Avenue & The Galleria Abu Dhabi</div>
            </div>
          </div>

          {/* 40 Categories Quick Directory (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> 40 Ecosystem Categories
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1.5 text-[11px]">
              {GADGET_CATEGORIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => onSelectCategory(c.name)}
                  className="text-left text-white/60 hover:text-amber-300 transition-colors truncate"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* UAE Ateliers & Concierge (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              UAE Atelier Concierge
            </h4>
            
            <div className="space-y-3 text-xs text-white/70">
              <div>
                <strong className="text-white">Dubai Mall Atelier:</strong>
                <div className="text-white/50 text-[11px]">Fashion Ave, Level 2 (+971 4 394 8800)</div>
              </div>
              <div>
                <strong className="text-white">DIFC Gate Pavilion:</strong>
                <div className="text-white/50 text-[11px]">Podium Level (+971 4 482 1100)</div>
              </div>
              <div>
                <strong className="text-white">Abu Dhabi Galleria:</strong>
                <div className="text-white/50 text-[11px]">Luxury Wing, Level 1 (+971 2 612 9900)</div>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/971523394001?text=Hello%20AETHERA,%20I%20would%20like%20to%20speak%20to%20a%20concierge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <span>WhatsApp: +971 52 339 4001</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <div>
            © {new Date().getFullYear()} AETHERA LUXURY CONSUMER ELECTRONICS LLC • DUBAI, UAE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacy Sovereign Policy</span>
            <span>•</span>
            <span>2-Year Warranty Terms</span>
            <span>•</span>
            <span className="text-amber-400">AED Currency</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
