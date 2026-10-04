import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, MessageSquare, Zap, Crown, ArrowRight } from 'lucide-react';
import { FitnessProgram } from '@/data/fitnessCatalogData';

interface AssessmentBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: FitnessProgram | null;
  customQuote?: any;
}

const CLUB_LOCATIONS = [
  { id: 'difc', name: 'DIFC Gate Precinct 04 — Flagship Arena & Biohacking Pods' },
  { id: 'palm', name: 'Palm Jumeirah West Beach — Waterfront Club & Rooftop Pool' },
  { id: 'downtown', name: 'Downtown Opera District — 24/7 Private Athlete Sanctum' }
];

const TIME_SLOTS = [
  '06:30 AM (Executive Early Sprint)',
  '08:00 AM (Morning Conditioning)',
  '12:30 PM (Midday Mobility & Lift)',
  '05:30 PM (Peak Performance Wave 1)',
  '07:00 PM (Peak Performance Wave 2)',
  '08:30 PM (Evening Recovery & Cryo)'
];

export const AssessmentBookingDrawer: React.FC<AssessmentBookingDrawerProps> = ({
  isOpen,
  onClose,
  selectedProgram,
  customQuote
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+971 50 ');
  const [email, setEmail] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(CLUB_LOCATIONS[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [fitnessGoal, setFitnessGoal] = useState(
    selectedProgram ? `Targeting: ${selectedProgram.title}` : customQuote ? `Membership Tier: ${customQuote.tier}` : 'Hypertrophy, DEXA Scan & Biohacking'
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-yellow-500/40 text-zinc-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  VIP Assessment & Session Pass
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                
                {/* Pre-selected Program / Quote Box */}
                {selectedProgram && (
                  <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-xs">
                    <div className="text-[10px] uppercase font-mono text-yellow-400 font-semibold">Selected Protocol</div>
                    <div className="font-serif font-bold text-zinc-200">{selectedProgram.title}</div>
                    <div className="text-yellow-300 font-mono mt-0.5">AED {selectedProgram.priceAED.toLocaleString()}</div>
                  </div>
                )}

                {customQuote && (
                  <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-xs">
                    <div className="text-[10px] uppercase font-mono text-yellow-400 font-semibold">Custom Membership Package</div>
                    <div className="font-serif font-bold text-zinc-200">{customQuote.tier} ({customQuote.duration})</div>
                    <div className="text-yellow-300 font-mono mt-0.5">AED {customQuote.monthlyAED.toLocaleString()} / month</div>
                  </div>
                )}

                {/* Location Selection */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                    Club Sanctum Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500"
                  >
                    {CLUB_LOCATIONS.map(loc => (
                      <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Session Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Seating Window
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500"
                    >
                      {TIME_SLOTS.map(t => (
                        <option key={t} value={t}>{t.split(' ')[0]} {t.split(' ')[1]}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 pt-2 border-t border-zinc-900">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      UAE Contact / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 000 0000"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 font-mono focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="athlete@domain.ae"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Athletic Goals & Injury History
                    </label>
                    <textarea
                      rows={2}
                      value={fitnessGoal}
                      onChange={(e) => setFitnessGoal(e.target.value)}
                      placeholder="Lower back disc rehab, Olympic snatch technique..."
                      className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-zinc-950 shadow-lg shadow-yellow-950/60 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Transmit Priority Assessment Pass</span>
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="mt-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-serif font-bold text-zinc-100">
                  Assessment Pass Confirmed
                </h4>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Thank you, <span className="font-semibold text-yellow-300">{fullName}</span>. Your VIP pass on <span className="font-semibold text-yellow-300">{selectedDate}</span> at our <span className="font-semibold text-yellow-300">{selectedLocation.toUpperCase()}</span> club has been registered with our Head Performance Director.
                </p>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-left space-y-1.5 font-mono text-zinc-300">
                  <div className="text-[10px] text-yellow-400 uppercase">Pass Reference: #KA-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div>Window: {selectedTime}</div>
                  <div>Valet: Complimentary VIP Valet Included</div>
                </div>

                <div className="pt-4 space-y-2">
                  <a
                    href={`https://wa.me/971508889999?text=Hello%20Kinetic%20Athletica%20Concierge,%20I%20have%20booked%20a%20VIP%20assessment%20for%20${encodeURIComponent(fullName)}%20on%20${selectedDate}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Concierge Verification</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 text-xs text-zinc-400 hover:text-white"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guarantee Footer */}
          <div className="pt-6 border-t border-zinc-900 text-center text-[10px] text-zinc-500">
            Dubai Sports Council (DSC) Accredited Olympic Training Center
          </div>

        </div>
      </div>
    </div>
  );
};
