'use strict';
import React from 'react';
import Link from 'next/link';
import { AuraLogo } from './AuraLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Crown, ArrowUpRight, Truck } from 'lucide-react';

export const MaintenanceFooter: React.FC = () => {
  return (
    <footer id="dispatch-zones" className="bg-neutral-950 text-neutral-400 pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Col 1 & 2: Brand & Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/work/home-maintenance" className="inline-block">
              <AuraLogo size="lg" variant="emerald" />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Dubai&apos;s definitive MEP engineering & luxury estate facility management provider. Precision HVAC chiller overhauls, FLIR thermal electrical audits, and 365-day villa AMC retainers.
            </p>
            
            <div className="pt-2 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>DEWA License #914280 • Dubai Municipality DM-HEALTH-7721</span>
              </div>
              <p className="text-[11px] text-neutral-500">
                100% Genuine OEM European Parts • 12-Month Guarantee on All Installed Components.
              </p>
            </div>
          </div>

          {/* Col 3: Disciplines */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              MEP Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#scopes" className="hover:text-emerald-400 transition-colors">
                  Precision HVAC & Chiller Care
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-emerald-400 transition-colors">
                  FLIR Thermal Electrical Audits
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-emerald-400 transition-colors">
                  Water Tank Bio-Sterilization
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-emerald-400 transition-colors">
                  Annual Villa Contracts (AMC)
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-emerald-400 transition-colors">
                  Emergency 28-Min Dispatch
                </a>
              </li>
              <li>
                <a href="#scopes" className="hover:text-emerald-400 transition-colors">
                  Pools, Chillers & Irrigation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapid Hubs */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Service Hubs
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Palm Jumeirah:</strong> Service Hub Bay 4, Golden Mile Galleria
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Emirates Hills:</strong> Montgomerie Community Center
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>24/7 Emergency Van Dispatch Active 365 Days</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Dispatch Control */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Dispatch Control
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+97148819200"
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+971 4 881 9200</span>
              </a>

              <a
                href="https://wa.me/971506341190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>WhatsApp Dispatch: +971 50 634 1190</span>
              </a>

              <a
                href="mailto:dispatch@auramaintenance.ae"
                className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>dispatch@auramaintenance.ae</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} AURA HOME MAINTENANCE & FACILITY MANAGEMENT UAE. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-emerald-400 font-medium">All Pricing in UAE Dirhams (AED)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
