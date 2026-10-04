'use client';

import React, { useState } from 'react';
import { Award, Send, CheckCircle2, Phone, Mail, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

export const ConciergeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Michelin Dining');
  const [submitted, setSubmitted] = useState(false);
  const [requestText, setRequestText] = useState('');
  const [guestName, setGuestName] = useState('');

  const categories = ['Michelin Dining', 'Rolls-Royce Transfer', 'Superyacht Charter', 'Desert Falconry', '24K Gold Hammam', 'Helicopter Tour'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#141210] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              ROYAL BUTLER CONCIERGE • UAE
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight">
              Consider it handled.
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              Whether reserving a waterfront chef's table at ORA, organizing private Rolls-Royce Ghost transfers from DXB / DWC, or chartering an 85ft superyacht sunset cruise around Palm Jumeirah, our Royal Butler team is at your command 24/7.
            </p>

            <div className="space-y-3 font-mono text-xs text-stone-300 pt-4 border-t border-stone-800">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>{VELORA_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>{VELORA_BRAND.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Dedicated 24/7 WhatsApp: +971 50 892 4110</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="lg:col-span-7 bg-[#29221D] rounded-3xl border border-stone-800 p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4 font-sans">
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#C5A059]/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white">Royal Concierge Request Received</h3>
                <p className="text-xs text-stone-300 font-mono leading-relaxed max-w-md mx-auto">
                  Marhaban {guestName}. Our Head Royal Butler will confirm your {selectedCategory} arrangements shortly via email and WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-stone-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div>
                  <label className="text-xs font-mono font-bold text-[#C5A059] uppercase block mb-3">
                    WHAT CAN WE ARRANGE FOR YOUR UAE STAY?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                          selectedCategory === cat
                            ? 'bg-[#C5A059] text-black font-bold shadow-md'
                            : 'bg-[#1C1917] border border-stone-800 text-stone-300 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-stone-400 uppercase block mb-1">GUEST NAME</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Sheikh Mansoor / Dr. Evelyn Vance"
                      className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white text-xs font-mono focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-stone-400 uppercase block mb-1">UAE PHONE / WHATSAPP</label>
                    <input
                      type="text"
                      required
                      placeholder="+971 50 000 0000"
                      className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white text-xs font-mono focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-stone-400 uppercase block mb-1">CONCIERGE DETAILS & PREFERRED DATES</label>
                  <textarea
                    rows={3}
                    required
                    value={requestText}
                    onChange={(e) => setRequestText(e.target.value)}
                    placeholder="e.g. Table reservation for 2 at ORA waterfront terrace, followed by private Rolls-Royce transfer to Dubai Opera..."
                    className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white text-xs font-mono focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Request to Royal Butler</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
