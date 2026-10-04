'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Building2 } from 'lucide-react';
import { AURELIA_BRAND } from '@/data/aureliaData';

export const AureliaContact: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [interest, setInterest] = useState<string>('waterfront-villa');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#090C0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>DIFC & ABU DHABI PRIVATE CLIENT GALLERIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Private Development Desks
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Schedule a confidential architectural consultation with our senior development partners at DIFC Gate Village 3 or Abu Dhabi ADGM Square.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Physical Galleries */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* DIFC HQ */}
            <div className="p-6 rounded-3xl bg-[#13191D] border border-stone-700 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-stone-500/10 border border-stone-500/30 text-stone-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-white">
                    {AURELIA_BRAND.difcHQ.title}
                  </h3>
                  <p className="text-xs font-mono text-stone-400">
                    {AURELIA_BRAND.difcHQ.address}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-gray-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Toll Free:</span>
                  <a href="tel:8002873542" className="text-stone-300 font-bold hover:underline">{AURELIA_BRAND.difcHQ.tollFree}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Direct Desk:</span>
                  <a href="tel:+97143628800" className="text-white font-bold hover:underline">{AURELIA_BRAND.difcHQ.phone}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">WhatsApp Concierge:</span>
                  <a href="https://wa.me/971508821122" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">{AURELIA_BRAND.whatsapp}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Advisory Hours:</span>
                  <span className="text-stone-300">{AURELIA_BRAND.difcHQ.hours}</span>
                </div>
              </div>
            </div>

            {/* Abu Dhabi Desk */}
            <div className="p-6 rounded-3xl bg-[#13191D] border border-stone-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-stone-500/10 border border-stone-500/30 text-stone-300">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-white">
                    {AURELIA_BRAND.abuDhabiDesk.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    {AURELIA_BRAND.abuDhabiDesk.address}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-gray-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Capital Desk:</span>
                  <a href="tel:+97126947700" className="text-white font-bold hover:underline">{AURELIA_BRAND.abuDhabiDesk.phone}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-stone-300">{AURELIA_BRAND.abuDhabiDesk.email}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#13191D] p-8 sm:p-10 rounded-3xl border border-stone-700 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Advisory Inquiry Received
                </h3>
                <p className="text-xs font-mono text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. A Senior Private Client Director from our DIFC Gate Village office will contact you via <strong>{phone}</strong> within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-stone-200 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Confidential Property Advisory Form
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Direct communication with Aurelia Estates development partners under strict client NDA.
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
                      placeholder="e.g. Sheikh Saeed Al-Maktoum"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="saeed@maktoum.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">
                      Development Interest
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300 cursor-pointer"
                    >
                      <option value="waterfront-villa" className="bg-[#13191D]">Palm Jumeirah Waterfront Villa</option>
                      <option value="penthouse" className="bg-[#13191D]">DIFC Gateway Sky Penthouse</option>
                      <option value="compound" className="bg-[#13191D]">Saadiyat Cultural Compound</option>
                      <option value="bespoke-build" className="bg-[#13191D]">Bespoke Custom Mansion Commission</option>
                      <option value="plot-acquisition" className="bg-[#13191D]">Off-Market Land & Plot Acquisition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Acquisition Specifications & Special Inquiries
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify budget parameters in AED, preferred architectural styles, plot sizes, and confidential requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090C0E] border border-white/15 text-white font-mono text-xs outline-none focus:border-stone-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(214,211,209,0.35)] cursor-pointer flex items-center justify-center gap-2"
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
