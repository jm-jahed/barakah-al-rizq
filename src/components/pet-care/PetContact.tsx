'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';

export const PetContact: React.FC<any> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [petName, setPetName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Surgery & Diagnostics');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080D14] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-[#0E1620] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  VIP CLINICAL CONCIERGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  Direct Reception & Surgical Inquiries.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Have questions regarding surgical quotes, international travel paperwork, or senior pet care? Our clinical directors respond within 2 hours.
                </p>
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Appointments: +971 4 388 9200</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>concierge@pawsandclaws.ae</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hospital Open 24/7 • Reception 8am – 10pm</span>
                </div>
              </div>
            </div>

            {/* Right Inquiry Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 font-mono">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-sans">Inquiry Dispatched to Clinical Team</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    Thank you, {ownerName}. Our veterinary concierge has received your request regarding {petName} and will contact you at {phone} shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">Owner's Name:</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dr. Rashid Al-Nuaimi"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">Companion Name & Species:</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Luna (Persian Cat)"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">UAE Phone (+971):</label>
                      <input
                        required
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1 font-bold">Department Interest:</label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Surgery & Diagnostics">Orthopedic / Soft Tissue Surgery</option>
                        <option value="CT Imaging">128-Slice Diagnostic CT Scan</option>
                        <option value="Travel Clearances">UAE Export Pet Passport & RNATT</option>
                        <option value="Boarding">Presidential Suite Resort Booking</option>
                        <option value="General">General Medical Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-bold">Clinical Notes / Questions:</label>
                    <textarea
                      rows={3}
                      placeholder="Describe symptoms, desired appointment date, or specific surgical inquiries..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold uppercase font-mono tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-102 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Clinical Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PetContact;
