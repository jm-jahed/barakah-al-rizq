import React from 'react';
import { MaisonLogo } from './MaisonLogo';
import { ShieldCheck, Award, MapPin, Phone, Mail, Clock, ArrowUpRight, Crown, Gem } from 'lucide-react';

export const JewelryFooter: React.FC = () => {
  return (
    <footer className="bg-[#080706] border-t border-amber-500/20 text-zinc-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <MaisonLogo size="lg" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Maison D&apos;Or Paris • Dubai is a premier high jewelry atelier and horlogerie sanctuary. Sculpted in certified 18K gold and 950 platinum with Kimberley Process diamonds and Gübelin-tested rare colored gemstones.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-[10px] font-mono text-amber-400">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                <ShieldCheck className="w-3 h-3 text-amber-400" /> Dubai Gold &amp; Jewellery Group (DGJG) Member
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                <Award className="w-3 h-3 text-yellow-400" /> GIA &amp; HRD Certified Origin
              </span>
            </div>
          </div>

          {/* Disciplines */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Haute Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#jewelry-catalog" className="hover:text-amber-400 transition-colors">Solitaire Bridal Suites</a></li>
              <li><a href="#jewelry-catalog" className="hover:text-amber-400 transition-colors">Diamond Rivière Colliers</a></li>
              <li><a href="#jewelry-catalog" className="hover:text-amber-400 transition-colors">Muzo Emeralds &amp; Rubies</a></li>
              <li><a href="#jewelry-catalog" className="hover:text-amber-400 transition-colors">10ct Diamond Tennis Lines</a></li>
              <li><a href="#jewelry-catalog" className="hover:text-amber-400 transition-colors">Tourbillon Timepieces</a></li>
              <li><a href="#jewelry-catalog" className="hover:text-amber-400 transition-colors">Natural Basra Pearls</a></li>
            </ul>
          </div>

          {/* UAE Salons */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              UAE Private Salons
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-bold text-zinc-200">DIFC Gate Village Atelier</p>
                <p className="text-[11px] text-zinc-500">Building 03, Level 2, DIFC, Dubai</p>
                <p className="text-[11px] text-amber-400">+971 4 398 5500 • By Appointment</p>
              </div>
              <div>
                <p className="font-bold text-zinc-200">Fashion Avenue VIP Suite</p>
                <p className="text-[11px] text-zinc-500">The Dubai Mall, Level 1</p>
                <p className="text-[11px] text-amber-400">+971 4 458 9900 • 10:00 - 23:00</p>
              </div>
            </div>
          </div>

          {/* Concierge */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              VIP Concierge
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[11px] text-zinc-400">
                Direct WhatsApp consultation with our Master Gemologist &amp; Private Client Director:
              </p>
              <a
                href="https://wa.me/971508822000?text=Hi%20Maison%20D'Or%20Dubai!%20I%20would%20like%20to%20inquire%20about%20a%20private%20appointment."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:underline"
              >
                +971 50 882 2000 <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[10px] text-zinc-500 pt-1">
                Armored courier delivery across Dubai, Abu Dhabi &amp; Sharjah within 24 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} MAISON D&apos;OR HAUTE JOAILLERIE DUBAI LLC. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Statutory UAE Commercial License #849201</span>
            <span>•</span>
            <a href="https://webstudioae.com" className="text-zinc-400 hover:text-white transition-colors">
              Engineered by WebStudio UAE
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
