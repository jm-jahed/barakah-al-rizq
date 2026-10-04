'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Building2, Anchor, ShieldCheck, Clock } from 'lucide-react';
import { NERO_BRAND } from '@/data/neroData';

export const NeroContact: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [service, setService] = useState<string>('charter');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Anchor className="w-3.5 h-3.5" />
            <span>24/7/365 GLOBAL MARINA OPERATIONS DESK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Marina Desks & Sovereign Concierge
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Direct coordination with our senior yacht charter brokers, naval architects, and port operations captains in Dubai and Abu Dhabi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Physical Marina Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dubai Harbour HQ */}
            <div className="p-6 rounded-3xl bg-[#091322] border border-cyan-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-white">
                    {NERO_BRAND.dubaiMarinaHQ.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">
                    {NERO_BRAND.dubaiMarinaHQ.address}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-gray-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Toll Free:</span>
                  <a href="tel:8006376" className="text-cyan-400 font-bold hover:underline">{NERO_BRAND.dubaiMarinaHQ.tollFree}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Direct Desk:</span>
                  <a href="tel:+97143997700" className="text-white font-bold hover:underline">{NERO_BRAND.dubaiMarinaHQ.phone}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">WhatsApp Concierge:</span>
                  <a href="https://wa.me/971508821122" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">{NERO_BRAND.whatsapp}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Marine VHF Radio:</span>
                  <span className="text-cyan-300">{NERO_BRAND.dubaiMarinaHQ.vhfChannel}</span>
                </div>
              </div>
            </div>

            {/* Abu Dhabi Yas Marina Desk */}
            <div className="p-6 rounded-3xl bg-[#091322] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-white">
                    {NERO_BRAND.abuDhabiMarina.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    {NERO_BRAND.abuDhabiMarina.address}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-gray-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Capital Desk:</span>
                  <a href="tel:+97126773344" className="text-white font-bold hover:underline">{NERO_BRAND.abuDhabiMarina.phone}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">VHF Frequency:</span>
                  <span className="text-cyan-300">{NERO_BRAND.abuDhabiMarina.vhfChannel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Operations:</span>
                  <span className="text-emerald-400">24/7 Trackside Dispatch</span>
                </div>
              </div>
            </div>

            {/* Bulgari Yacht Club */}
            <div className="p-5 rounded-2xl bg-[#091322] border border-white/10 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-cyan-300 font-bold">
                <span>{NERO_BRAND.bulgariDesk.title}</span>
                <span>Jumeira Bay Island</span>
              </div>
              <p className="text-gray-400">Private client lounge for ultra-high-net-worth consultations & sunset departures.</p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#091322] p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Consultation Request Received
                </h3>
                <p className="text-xs font-mono text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. A Senior Superyacht Broker from our Dubai Harbour team will contact you via <strong>{phone}</strong> within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  TRANSMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Direct Superyacht Consultation Desk
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Confidential inquiries for charter hire, new build acquisitions, or yacht management.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sheikh Mohammed Al-Qassimi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="mohammed@alqassimi.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">
                      UAE Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 882 1122"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400 cursor-pointer"
                    >
                      <option value="charter" className="bg-[#091322]">Superyacht Private Charter</option>
                      <option value="sales" className="bg-[#091322]">Yacht Sales & New Build Brokerage</option>
                      <option value="management" className="bg-[#091322]">Yacht Management & Crew Manning</option>
                      <option value="f1" className="bg-[#091322]">Abu Dhabi F1 Grand Prix VIP Mooring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Charter Specifications & Special Inquiries
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify preferred vessel length, dates, guest counts, and customized maritime requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT CONFIDENTIAL INQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
