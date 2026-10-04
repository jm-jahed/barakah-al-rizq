'use client';

import React, { useState } from 'react';
import { NEXUS_LOCATIONS, NEXUS_OFFICES, NEXUS_BRAND } from '@/data/nexusWorkspaceData';

export default function TourBookingForm() {
  const [step, setStep] = useState<number>(1);
  const [selectedLocation, setSelectedLocation] = useState<string>(NEXUS_LOCATIONS[0].id);
  const [selectedOfficeCategory, setSelectedOfficeCategory] = useState<string>('Private Suite');
  const [tourType, setTourType] = useState<'in_person' | 'virtual'>('in_person');
  const [tourDate, setTourDate] = useState<string>('2026-09-15');
  const [tourTime, setTourTime] = useState<string>('10:00 AM');

  // Contact details
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [teamSize, setTeamSize] = useState<string>('4-8');
  const [needEjari, setNeedEjari] = useState<boolean>(true);

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  const locObj = NEXUS_LOCATIONS.find((l) => l.id === selectedLocation) || NEXUS_LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `NEXUS-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello NEXUS Workspace Team,\n\nI have booked a VIP Tour Pass:\n• Ref: ${confirmationCode || 'VIP-TOUR'}\n• Client: ${fullName || 'Guest'}\n• Company: ${companyName || 'Enterprise'}\n• Location: ${locObj.name}\n• Category: ${selectedOfficeCategory}\n• Date: ${tourDate} at ${tourTime}\n• Tour Type: ${tourType === 'in_person' ? 'In-Person Private Viewing' : 'Virtual Guided Tour'}\n• Ejari Required: ${needEjari ? 'Yes' : 'No'}\n\nPlease confirm concierge availability.`
  );

  return (
    <section id="tour" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>VIP Executive Access</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Reserve Your Private Suite Viewing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Experience our sovereign executive suites, meet your dedicated concierge team, and inspect available layouts in DIFC, Downtown, Business Bay, Marina, or ADGM.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {!submitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      step >= 1 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    1
                  </div>
                  <span className="text-xs font-bold text-white hidden sm:inline">Location & Suite</span>
                </div>
                <div className="w-12 h-px bg-slate-800" />
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      step >= 2 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    2
                  </div>
                  <span className="text-xs font-bold text-white hidden sm:inline">Date & Time</span>
                </div>
                <div className="w-12 h-px bg-slate-800" />
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      step >= 3 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    3
                  </div>
                  <span className="text-xs font-bold text-white hidden sm:inline">Executive Contact</span>
                </div>
              </div>

              {/* Step 1: Location & Category */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                      Select Flagship Business Center
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {NEXUS_LOCATIONS.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => setSelectedLocation(loc.id)}
                          className={`p-4 rounded-2xl border text-left transition flex items-center justify-between ${
                            selectedLocation === loc.id
                              ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                              : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold block">{loc.name}</span>
                            <span className="text-[10px] text-slate-400 block">{loc.tower}</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                            {loc.availableSuites} Free
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                      Workspace Configuration Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        'Private Suite',
                        'Executive Office',
                        'License Ready',
                        'Dedicated Hot-Desk',
                        'Royal Boardroom',
                        'Full Floorplate',
                      ].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedOfficeCategory(cat)}
                          className={`p-3 rounded-xl border text-center transition ${
                            selectedOfficeCategory === cat
                              ? 'bg-amber-500 text-slate-950 font-black border-amber-400'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span className="text-xs block font-bold">{cat}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition"
                    >
                      Continue to Date & Time →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                      Tour Format
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setTourType('in_person')}
                        className={`p-4 rounded-2xl border text-left transition ${
                          tourType === 'in_person'
                            ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                            : 'bg-slate-950/50 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className="text-sm font-bold block text-white">🏢 In-Person VIP Walkthrough</span>
                        <span className="text-xs text-slate-400 block mt-1">
                          Private tour with Business Center Director & complimentary barista tasting.
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTourType('virtual')}
                        className={`p-4 rounded-2xl border text-left transition ${
                          tourType === 'virtual'
                            ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                            : 'bg-slate-950/50 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className="text-sm font-bold block text-white">📹 Live Guided Video Call</span>
                        <span className="text-xs text-slate-400 block mt-1">
                          High-resolution interactive video walkthrough via Zoom or Teams.
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={tourDate}
                        onChange={(e) => setTourDate(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Preferred Time Slot (GST)</label>
                      <select
                        value={tourTime}
                        onChange={(e) => setTourTime(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:border-amber-400 focus:outline-none"
                      >
                        <option value="09:00 AM">09:00 AM GST (Morning Slot)</option>
                        <option value="11:00 AM">11:00 AM GST (Executive Slot)</option>
                        <option value="02:00 PM">02:00 PM GST (Afternoon Slot)</option>
                        <option value="04:30 PM">04:30 PM GST (Sunset Slot)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition"
                    >
                      Continue to Contact Details →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Company Details */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Nuaimi"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sovereign Wealth Advisors LLC"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="tariq@company.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">UAE Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Team Size Required</label>
                      <select
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:border-amber-400 focus:outline-none"
                      >
                        <option value="1-3">1 - 3 Workstations</option>
                        <option value="4-8">4 - 8 Workstations</option>
                        <option value="9-20">9 - 20 Workstations</option>
                        <option value="20-50">20 - 50 Workstations</option>
                        <option value="50+">50+ Enterprise Floorplate</option>
                      </select>
                    </div>

                    <div className="flex items-center pt-6">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={needEjari}
                          onChange={(e) => setNeedEjari(e.target.checked)}
                          className="w-5 h-5 rounded text-amber-500 focus:ring-0 bg-slate-800 border-slate-700"
                        />
                        <span className="text-xs text-slate-300 font-semibold">
                          Require DED / Freezone Ejari Certificate & Visa Quota
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-amber-500/20"
                    >
                      Confirm VIP Viewing Reservation 🚀
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Confirmation State */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto">
                ✓
              </div>

              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">
                  VIP Viewing Pass Generated
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Thank You, {fullName || 'Valued Executive'}
                </h3>
                <p className="text-slate-300 text-sm mt-2 max-w-lg mx-auto">
                  Your private viewing at <strong className="text-white">{locObj.name}</strong> is reserved for{' '}
                  <strong className="text-amber-400">{tourDate} at {tourTime}</strong>.
                </p>
              </div>

              {/* Pass Card */}
              <div className="max-w-md mx-auto bg-slate-950 p-6 rounded-2xl border border-amber-500/40 text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500 uppercase">Pass Reference</span>
                  <span className="text-amber-400 font-bold">{confirmationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Center:</span>
                  <span className="text-white">{locObj.tower}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Suite Type:</span>
                  <span className="text-white">{selectedOfficeCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dedicated Host:</span>
                  <span className="text-emerald-400">Senior Leasing Director</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/971508821122?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <span>💬</span>
                  <span>Open in WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 text-slate-300 hover:text-white text-xs font-bold rounded-xl transition"
                >
                  Book Another Center
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
