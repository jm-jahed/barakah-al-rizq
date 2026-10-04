'use strict';
import React from 'react';
import Link from 'next/link';
import { VelvetLogo } from './VelvetLogo';
import { SALON_BRAND_INFO } from '@/data/salonData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Crown, Sparkle, ArrowUpRight } from 'lucide-react';

export const SalonFooter: React.FC = () => {
  return (
    <footer id="sanctuary" className="bg-neutral-950 text-neutral-400 pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Col 1 & 2: Brand & UAE Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/salon-beauty-studio" className="inline-block">
              <VelvetLogo size="lg" variant="gold" />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Dubai&apos;s definitive haute aesthetics atelier. French balayage, Swiss cellular facials, Russian e-file nail architecture, and Royal Moroccan hammams.
            </p>
            
            <div className="pt-2 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Dubai Municipality Health Permit #{SALON_BRAND_INFO.municipalityLicense}</span>
              </div>
              <p className="text-[11px] text-neutral-500">
                100% genuine certified European formulations • Single-use sterilized medical autoclave tools.
              </p>
            </div>
          </div>

          {/* Col 3: Disciplines */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#treatments" className="hover:text-amber-400 transition-colors">
                  Haute Coiffure & Balayage
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-amber-400 transition-colors">
                  Valmont & Biologique Facials
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-amber-400 transition-colors">
                  Russian Hardware Nails
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-amber-400 transition-colors">
                  Royal Moroccan Hammam
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-amber-400 transition-colors">
                  Cashmere Lash Architecture
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-amber-400 transition-colors">
                  Bridal & Red Carpet Glamour
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Private Suites & Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Sanctuaries
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>d3 Flagship:</strong> Building 4, Level 3, Dubai Design District
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Jumeirah Suites:</strong> Villa 18, Jumeirah Beach Road
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>9:00 AM – 10:00 PM Daily (VIP 24/7 on request)</span>
              </li>
            </ul>
          </div>

          {/* Col 5: VIP Concierge Direct */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              VIP Concierge
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${SALON_BRAND_INFO.phone}`}
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{SALON_BRAND_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${SALON_BRAND_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>WhatsApp VIP Booking: {SALON_BRAND_INFO.whatsapp}</span>
              </a>

              <a
                href={`mailto:${SALON_BRAND_INFO.email}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{SALON_BRAND_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {SALON_BRAND_INFO.name}. All Rights Reserved. UAE.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-amber-400 font-medium">All Prices in UAE Dirhams (AED)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
