'use strict';
import React from 'react';
import Link from 'next/link';
import { NexusLogo } from './NexusLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Crown, ArrowUpRight, Zap } from 'lucide-react';

export const MarketingFooter: React.FC = () => {
  return (
    <footer id="difc-hq" className="bg-neutral-950 text-neutral-400 pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Col 1 & 2: Brand & Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/digital-marketing-agency" className="inline-block">
              <NexusLogo size="lg" variant="gold" />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Dubai&apos;s definitive enterprise growth and performance media atelier. High-ROI PPC, bilingual SEO, neuro-funnels, and predictive AI lead systems.
            </p>
            
            <div className="pt-2 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Dubai DED Media & Advertising License #894210</span>
              </div>
              <p className="text-[11px] text-neutral-500">
                100% transparent client-owned ad accounts • Zero spend markups • DIFC SLA contracts.
              </p>
            </div>
          </div>

          {/* Col 3: Disciplines */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Growth Pillars
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Performance PPC & Google PMax
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Bilingual Arabic & English SEO
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  Neuro-Funnel CRO Architecture
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  GCC Influencer & Creator Matrix
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  WhatsApp Cloud API & CRM
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">
                  AI Lead Scoring & Attribution
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: UAE Headquarters */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              DIFC Headquarters
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Dubai DIFC:</strong> Level 5, Gate Precinct 4, Innovation Hub
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Abu Dhabi:</strong> Level 14, Al Khatem Tower, ADGM Square
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon - Fri: 8:30 AM – 6:30 PM GST</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Executive Desk */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Executive Desk
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+97144589200"
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+971 4 458 9200</span>
              </a>

              <a
                href="https://wa.me/971504928810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>WhatsApp Desk: +971 50 492 8810</span>
              </a>

              <a
                href="mailto:growth@nexusatelier.ae"
                className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>growth@nexusatelier.ae</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} NEXUS GROWTH ATELIER DUBAI. All Rights Reserved. UAE.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-amber-400 font-medium">All Retainers in UAE Dirhams (AED)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
