'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, QrCode, MapPin, Calendar, Users, Download, Share2, Compass, CheckCircle2 } from 'lucide-react';
import { EmberwildStay } from '@/data/emberwildData';

interface EmberwildTripPassProps {
  passData: {
    bookingRef: string;
    stayName: string;
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    addons: string[];
    totalAED: number;
  };
  onClose?: () => void;
}

export const EmberwildTripPass: React.FC<EmberwildTripPassProps> = ({ passData, onClose }) => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 border border-stone-800 text-stone-100 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
      {/* Top Pass Brand Strip */}
      <div className="flex items-center justify-between pb-6 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
              EMBERWILD TRIP PASS
            </div>
            <div className="text-[11px] text-stone-400">Official Wilderness Access Document</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-[10px] font-mono text-stone-500 uppercase">Reservation Reference</div>
          <div className="text-base font-mono font-bold text-amber-400 tracking-wider">
            {passData.bookingRef}
          </div>
        </div>
      </div>

      {/* Main Pass Information Grid */}
      <div className="py-6 space-y-6">
        {/* Stay & Guest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800/80">
            <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">Reserved Wilderness Stay</div>
            <div className="text-base font-medium text-stone-100">{passData.stayName}</div>
            <div className="text-xs text-amber-400/90 flex items-center gap-1 mt-1 font-mono">
              <MapPin className="w-3 h-3" />
              <span>{passData.location}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800/80">
            <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">Primary Guest</div>
            <div className="text-base font-medium text-stone-100">{passData.guestName}</div>
            <div className="text-xs text-stone-400 mt-1 font-mono">
              {passData.guestPhone} · {passData.guests} Guests
            </div>
          </div>
        </div>

        {/* Dates & Telemetry */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80">
            <div className="text-[10px] font-mono uppercase text-stone-500">Check-In</div>
            <div className="text-xs font-mono font-bold text-stone-200 mt-1">{passData.checkIn}</div>
            <div className="text-[10px] text-stone-500 mt-0.5">From 3:00 PM</div>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80">
            <div className="text-[10px] font-mono uppercase text-stone-500">Check-Out</div>
            <div className="text-xs font-mono font-bold text-stone-200 mt-1">{passData.checkOut}</div>
            <div className="text-[10px] text-stone-500 mt-0.5">By 11:00 AM</div>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80">
            <div className="text-[10px] font-mono uppercase text-stone-500">Access Key</div>
            <div className="text-xs font-mono font-bold text-emerald-400 mt-1">SMART-PIN</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Dispatched 2h Prior</div>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80">
            <div className="text-[10px] font-mono uppercase text-stone-500">Total Value</div>
            <div className="text-xs font-mono font-bold text-amber-400 mt-1">AED {passData.totalAED.toLocaleString()}</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Confirmed Demo</div>
          </div>
        </div>

        {/* Addons if any */}
        {passData.addons.length > 0 && (
          <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800/80">
            <div className="text-[10px] font-mono uppercase text-stone-500 mb-2">
              Scheduled Add-on Experiences:
            </div>
            <div className="flex flex-wrap gap-2">
              {passData.addons.map((a, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-stone-900 text-stone-300 border border-stone-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" />
                  <span>{a}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Arrival & Safety Instructions */}
        <div className="p-5 rounded-2xl bg-stone-950/80 border border-stone-800 text-xs text-stone-300 space-y-2">
          <div className="font-mono text-amber-400 font-medium uppercase text-[11px]">
            Arrival & Gate Instructions:
          </div>
          <p>• Off-road vehicle navigation is not strictly mandatory; all routes are accessible by standard SUV or sedan via paved trails.</p>
          <p>• Mobile network signal drops to 1-bar near the canyon crest. Please save this offline pass or screenshot your reference.</p>
          <p>• Wilderness Camp Host on-duty: +971 4 888 7788 (Radio Channel: 144.800 MHz).</p>
        </div>
      </div>

      {/* Footer & Actions */}
      <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[10px] text-stone-500 font-mono text-center sm:text-left">
          VERIFIED DIGITAL DEMO PASS · EMBERWILD UAE
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Demo Trip Pass saved to device!')}
            className="px-4 py-2 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-700 text-xs text-stone-300 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save Offline</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-medium transition-colors"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
