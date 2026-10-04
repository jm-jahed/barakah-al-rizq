'use strict';
import React from 'react';
import { SALON_STYLISTS, SalonStylist } from '@/data/salonData';
import { Award, Calendar, Crown, CheckCircle2, Sparkle } from 'lucide-react';

interface SalonStylistsRosterProps {
  onBookWithStylist: (stylist: SalonStylist) => void;
}

export const SalonStylistsRoster: React.FC<SalonStylistsRosterProps> = ({ onBookWithStylist }) => {
  return (
    <section id="stylists" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/90 border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>World-Class Talent Roster</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Master Artisans & <span className="italic font-normal text-amber-400">Creative Directors</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Directly recruited from Paris Haute Coiffure academies, Swiss dermal clinics, and Russian precision nail institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_STYLISTS.map((stylist) => (
            <div
              key={stylist.id}
              className="group bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-amber-500/30 text-[10px] font-semibold text-amber-300">
                      {stylist.experience}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mb-3">
                    {stylist.title}
                  </p>

                  <div className="space-y-2 text-xs text-neutral-400 mb-4">
                    <p className="flex items-start gap-1.5">
                      <span className="text-neutral-500 font-medium">Specialty:</span>
                      <span className="text-neutral-300">{stylist.specialty}</span>
                    </p>
                    <p className="flex items-start gap-1.5">
                      <span className="text-neutral-500 font-medium">Signature:</span>
                      <span className="text-amber-300/90">{stylist.signatureService}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookWithStylist(stylist)}
                  className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-neutral-200 font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 border border-neutral-700 hover:border-amber-500"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
