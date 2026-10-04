'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, X } from 'lucide-react';
import { NEXORA_BRAND } from '@/data/nexoraData';

interface ConsultationFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialServiceText?: string;
  initialQuoteAmount?: number;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen = true,
  onClose,
  initialServiceText,
  initialQuoteAmount,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('Commercial LLC');
  const [currentLocation, setCurrentLocation] = useState('UAE Resident');
  const [interestedService, setInterestedService] = useState(initialServiceText || 'Business Setup & Licensing');
  const [investmentBudget, setInvestmentBudget] = useState('AED 25,000 – AED 100,000');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formContent = (
    <div className="bg-[#1A1D24] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans text-stone-100 max-w-3xl w-full mx-auto">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#121417] border border-stone-800 text-stone-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {isSubmitted ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-[#D4AF37] font-bold block uppercase tracking-widest">
            CONSULTATION REQUEST CONFIRMED
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F7F6F2]">
            Thank you, {name}.
          </h3>
          <p className="text-sm font-mono text-stone-300 max-w-md mx-auto leading-relaxed">
            An executive UAE business advisor will contact you within 2 business hours to discuss your advisory scope for <strong className="text-white">{company || 'your business'}</strong>.
          </p>

          {initialQuoteAmount && (
            <div className="p-4 rounded-xl bg-[#121417] border border-[#D4AF37]/30 max-w-sm mx-auto font-mono text-xs">
              <span className="text-stone-400 block text-[10px] uppercase">ESTIMATED ADVISORY FEE REFERENCE</span>
              <span className="text-[#D4AF37] font-bold text-lg">AED {initialQuoteAmount.toLocaleString()}+</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <a
              href={NEXORA_BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-900 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Advisor Immediately</span>
            </a>

            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-black font-serif font-bold text-xs uppercase"
              >
                Return to Site
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
              CONFIDENTIAL BUSINESS ADVISORY INQUIRY
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F7F6F2]">
              Let's Talk About Your Business.
            </h3>
            <p className="text-xs font-mono text-stone-400 mt-1">
              Schedule a 1-on-1 strategic consultation with a senior UAE corporate advisor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">FULL NAME *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tariq Al-Sabah"
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">COMPANY NAME *</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Apex Ventures LLC"
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">CORPORATE EMAIL *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tariq@apexventures.ae"
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">UAE PHONE / WHATSAPP *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 123 4567"
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">BUSINESS STRUCTURE TYPE</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white font-serif"
                >
                  <option value="Commercial LLC">Mainland Commercial LLC</option>
                  <option value="Free Zone">Free Zone Company (FZE/FZ-LLC)</option>
                  <option value="Holding Foundation">DIFC / ADGM Holding Foundation</option>
                  <option value="Branch Office">Foreign / GCC Branch Office</option>
                </select>
              </div>
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">CURRENT APPLICANT LOCATION</label>
                <select
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white"
                >
                  <option value="UAE Resident">UAE Resident (Dubai/Abu Dhabi)</option>
                  <option value="GCC Region">GCC Region (Saudi/Qatar/Kuwait)</option>
                  <option value="International">International / Overseas Founder</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">INTERESTED ADVISORY SERVICE</label>
                <select
                  value={interestedService}
                  onChange={(e) => setInterestedService(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-[#D4AF37] font-bold"
                >
                  <option value="Business Setup & Licensing">Business Setup & Licensing</option>
                  <option value="Corporate Structuring">Corporate Structuring & Holding</option>
                  <option value="UAE Market Entry">UAE Market Entry Strategy</option>
                  <option value="Tax & Compliance">UAE Corporate Tax (9%) & Compliance</option>
                  <option value="M&A & Investor Advisory">M&A & Investor Advisory</option>
                </select>
              </div>
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">ESTIMATED SETUP / INVESTMENT BUDGET</label>
                <select
                  value={investmentBudget}
                  onChange={(e) => setInvestmentBudget(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white"
                >
                  <option value="AED 25,000 – AED 100,000">AED 25,000 – AED 100,000</option>
                  <option value="AED 100,000 – AED 500,000">AED 100,000 – AED 500,000</option>
                  <option value="AED 500,000+">AED 500,000+ (Enterprise)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">BUSINESS OBJECTIVES / MESSAGE</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your business activities, target launch date, or specific corporate structuring questions..."
                className="w-full p-3.5 rounded-xl bg-[#121417] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Book My Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={NEXORA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] text-xs font-mono font-bold flex items-center gap-1 hover:underline pt-2 sm:pt-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Prefer WhatsApp Instead?</span>
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );

  if (onClose) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        {formContent}
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
