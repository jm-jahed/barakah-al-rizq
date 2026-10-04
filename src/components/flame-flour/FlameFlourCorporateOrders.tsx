'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Users, Calendar, Mail, Phone, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const FlameFlourCorporateOrders: React.FC = () => {
  const [company, setCompany] = useState('Emaar Properties HQ');
  const [contactName, setContactName] = useState('Rashid Al Mansoori');
  const [email, setEmail] = useState('r.mansoori@emaar.ae');
  const [phone, setPhone] = useState('+971 4 367 3333');
  const [guestCount, setGuestCount] = useState('35 Guests');
  const [eventType, setEventType] = useState('Executive Breakfast & Morning Viennoiserie');
  const [eventDate, setEventDate] = useState('Next Tuesday');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="corporate" className="py-24 bg-[#0c0908] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
              <Briefcase className="w-3.5 h-3.5" />
              <span>BAKED FOR BUSINESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
              Corporate & Private Events
            </h2>

            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Elevate board meetings, investor mornings, brand launches, and executive gatherings with bespoke sourdough platters, warm laminated pastries, and artisan coffee pairings.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Dedicated event baker and heated dispatch boxes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Custom branded pastry plaques and company ribboning</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Same-day invoice generation with VAT compliance</span>
              </div>
            </div>
          </div>

          {/* Right Quote Request Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#120f0d] p-6 sm:p-10 rounded-3xl border border-stone-800/80 shadow-2xl">
            <h3 className="text-xl font-serif text-stone-100 mb-1">Request Catering Proposal</h3>
            <p className="text-xs text-stone-400 mb-6 font-light">Receive a customized artisan proposal within 2 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Contact Person</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Work Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Phone (UAE)</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Guest Headcount</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="15–25 Guests">15–25 Guests</option>
                    <option value="35 Guests">35 Guests (Standard Boardroom)</option>
                    <option value="50–100 Guests">50–100 Guests (Conference)</option>
                    <option value="100+ Guests">100+ Guests (Large Event)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Event Type</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Executive Breakfast & Morning Viennoiserie">Executive Breakfast & Viennoiserie</option>
                    <option value="Artisan Lunch & Sourdough Sandwiches">Artisan Lunch & Sandwiches</option>
                    <option value="Afternoon Pastry & Dessert Table">Afternoon Pastry & Dessert Table</option>
                    <option value="Corporate Holiday Gifting Boxes">Corporate Holiday Gifting Boxes</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? 'bg-emerald-500 text-stone-950'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-950/40'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Catering Request Received · Quote Dispatched</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Catering & Event Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
