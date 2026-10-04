import React from 'react';
import { ShieldCheck, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { OudRoyaleLogo } from './OudRoyaleLogo';

export const PerfumeFooter: React.FC = () => {
  return (
    <footer id="boutiques" className="bg-zinc-950 border-t border-amber-900/30 text-zinc-400 font-sans text-xs">
      
      {/* Flagship Boutiques Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Dubai Mall */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between text-zinc-200">
              <h4 className="font-serif font-bold text-sm text-amber-200">The Dubai Mall Flagship</h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">OPEN DAILY</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Fashion Avenue, Level 01, Dedicated VIP Fragrance Salon, Dubai, UAE
            </p>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <div>Hours: 10:00 AM – 12:00 Midnight</div>
              <div>Private Scent Consultation Suite Available</div>
            </div>
          </div>

          {/* Mall of the Emirates */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between text-zinc-200">
              <h4 className="font-serif font-bold text-sm text-amber-200">Mall of the Emirates Atelier</h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">OPEN DAILY</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Fashion Dome Luxury Precinct, Ground Level, Dubai, UAE
            </p>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <div>Hours: 10:00 AM – 11:00 PM</div>
              <div>Live 24K Gold Calligraphy Engraving Counter</div>
            </div>
          </div>

          {/* Abu Dhabi */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between text-zinc-200">
              <h4 className="font-serif font-bold text-sm text-amber-200">The Galleria Al Maryah Island</h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">OPEN DAILY</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Luxury Collection Wing, Level 02, Abu Dhabi, UAE
            </p>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <div>Hours: 10:00 AM – 11:00 PM</div>
              <div>Dehn Al Oud Vintage Tasting Bar</div>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Links & Compliance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <OudRoyaleLogo size="md" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-3">
              OUD ROYALE PARIS • DUBAI represents the pinnacle of French-Arabian haute perfumery, blending 30-year wild Kalakassi agarwood extraits with Grasse floral craftsmanship for royalty and high-net-worth connoisseurs.
            </p>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono text-xs">+971 4 888 6666 / +971 50 888 6666</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono text-xs">concierge@oudroyale.ae</span>
              </div>
            </div>
          </div>

          {/* Column 2: 8 Olfactory Families */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-zinc-200">
              Olfactory Families
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#perfume-catalog" className="hover:text-amber-300">Royal Aged Dehn Al Oud</a></li>
              <li><a href="#perfume-catalog" className="hover:text-amber-300">French Oriental Extraits (40%)</a></li>
              <li><a href="#perfume-catalog" className="hover:text-amber-300">Taif Rose & Saffron Attars</a></li>
              <li><a href="#perfume-catalog" className="hover:text-amber-300">Hojari Frankincense & Leather</a></li>
              <li><a href="#perfume-catalog" className="hover:text-amber-300">Bourbon Vanilla & Ambers</a></li>
              <li><a href="#perfume-catalog" className="hover:text-amber-300">Mysore Sandalwood & Cedar</a></li>
              <li><a href="#perfume-catalog" className="hover:text-amber-300">Wild Agarwood Muattar</a></li>
            </ul>
          </div>

          {/* Column 3: VIP Bespoke */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-zinc-200">
              VIP Bespoke Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#coffret-builder" className="hover:text-amber-300">Bespoke Master Coffret Simulator</a></li>
              <li><a href="#coffret-builder" className="hover:text-amber-300">24K Gold Calligraphy Engraving</a></li>
              <li><a href="#coffret-builder" className="hover:text-amber-300">Private Nose Master Distillation</a></li>
              <li><a href="#coffret-builder" className="hover:text-amber-300">White-Glove Chauffeur Delivery</a></li>
              <li><a href="#coffret-builder" className="hover:text-amber-300">VIP Wedding & Protocol Favors</a></li>
            </ul>
          </div>

          {/* Column 4: Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-zinc-200">
              Statutory UAE Certifications
            </h4>
            <div className="space-y-2 text-[11px] text-zinc-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>ESMA UAE Halal Certified Cosmetics & Fragrance (#ESMA-UAE-2026-8819)</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Dubai Municipality Montaji Approved (Grade-A)</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>IFRA Paris 100% Pure Botanical Grade Certified</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-zinc-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} OUD ROYALE PERFUMES DUBAI LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>ALL PRICES IN UAE DIRHAM (AED)</span>
            <span>•</span>
            <a href="https://webstudioae.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
              PORTFOLIO FLAGSHIP #09
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};
