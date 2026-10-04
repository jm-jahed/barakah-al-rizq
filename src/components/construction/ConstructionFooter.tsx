'use strict';
import React from 'react';
import Link from 'next/link';
import { VertexLogo } from './VertexLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Crown, ArrowUpRight, Compass } from 'lucide-react';

export const ConstructionFooter: React.FC = () => {
  return (
    <footer id="fabrication-yard" className="bg-neutral-950 text-neutral-400 pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Col 1 & 2: Brand & Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/construction-interior" className="inline-block">
              <VertexLogo size="lg" variant="gold" />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Dubai&apos;s premier Grade-1 architectural construction & luxury turnkey interior contractor. Ground-up palatial villas, super-prime penthouses, and DIFC headquarters.
            </p>
            
            <div className="pt-2 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Dubai Municipality Grade-1 License #698241</span>
              </div>
              <p className="text-[11px] text-neutral-500">
                10-Year Structural Defect Insurance • Certified Italian Marble & European Joinery Facilities.
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
                <a href="#scopes" className="hover:text-amber-400 transition-colors">
                  Ground-Up Villa Construction
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-amber-400 transition-colors">
                  DIFC Corporate Turnkey Fit-Out
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-amber-400 transition-colors">
                  Super-Prime Penthouse Overhauls
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-amber-400 transition-colors">
                  MEP & Dubai Municipality Approvals
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-amber-400 transition-colors">
                  Fine Dining Restaurant Fit-Out
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-amber-400 transition-colors">
                  Landscape Architecture & Pools
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: UAE Facilities */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Facilities
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Fabrication Yard:</strong> Street 8, Al Quoz Industrial 1, Dubai
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Engineering Suite:</strong> Level 18, Conrad Tower, Sheikh Zayed Road
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00 AM – 7:00 PM GST</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Site Survey Direct */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Site Survey Desk
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+97143491200"
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+971 4 349 1200</span>
              </a>

              <a
                href="https://wa.me/971507219904"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>WhatsApp Desk: +971 50 721 9904</span>
              </a>

              <a
                href="mailto:projects@vertexcontracting.ae"
                className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>projects@vertexcontracting.ae</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} VERTEX CONTRACTING & INTERIORS UAE. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-amber-400 font-medium">All BOQs in UAE Dirhams (AED)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
