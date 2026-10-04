'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

interface DiningMembershipProps {
  onOpenReservationModal: () => void;
}

export const DiningMembership: React.FC<DiningMembershipProps> = ({ onOpenReservationModal }) => {
  const benefits = [
    "Priority Table & Sunset Terrace Reservations",
    "Complimentary Birthday Dessert & Champagne Toast",
    "Access to Off-Menu Secret Chef Dishes",
    "15% Privileges on Private Dining Room Rentals",
    "Seasonal Invitations to Masterclasses & Tasting Nights",
    "Dedicated VIP Whatsapp Concierge Channel"
  ];

  return (
    <section className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#141B24] via-[#0E131B] to-[#0A0D12] border-2 border-amber-400 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase">
                <Crown className="w-3.5 h-3.5" /> Annual Gastronomy Club
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">The Table Circle</h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                An exclusive membership for patrons who value prioritized reservations, secret off-menu tastings, and personalized hospitality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {benefits.map((b, idx) => (
                  <div key={idx} className="text-xs text-gray-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080A0E] border border-amber-500/30 text-center space-y-4 shadow-xl">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                ANNUAL MEMBERSHIP PASS
              </span>

              <div className="text-4xl font-extrabold text-amber-400 font-mono">
                AED 299 <span className="text-xs text-gray-400 font-sans">/ year</span>
              </div>

              <span className="text-[10px] font-mono text-gray-400 block">
                Concept Membership — Sample Pricing
              </span>

              <button
                onClick={onOpenReservationModal}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
              >
                Join The Table Circle →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
