'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, X, Building2 } from 'lucide-react';
import { VANTAGE_BRAND, VantageProject } from '@/data/vantageData';

interface RegisterInterestFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  selectedProject?: VantageProject | null;
  initialPriceText?: string;
}

export const RegisterInterestForm: React.FC<RegisterInterestFormProps> = ({
  isOpen = true,
  onClose,
  selectedProject,
  initialPriceText,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectInterest, setProjectInterest] = useState(
    selectedProject ? selectedProject.name : 'VANTAGE HORIZON (Dubai Marina)'
  );
  const [budgetRange, setBudgetRange] = useState('AED 1.5M – 3M');
  const [purpose, setPurpose] = useState<'Investment' | 'End-Use'>('Investment');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid corporate or personal email is required';
    if (!phone.trim()) errs.phone = 'Phone / WhatsApp number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const formContent = (
    <div className="bg-[#0A192F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans text-stone-100 max-w-3xl w-full mx-auto">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-stone-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {isSubmitted ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-[#C5A059] font-bold block uppercase tracking-[0.2em]">
            REGISTRATION OF INTEREST RECEIVED
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAFAFA]">
            Thank you, {name}.
          </h3>
          <p className="text-sm font-mono text-stone-300 max-w-md mx-auto leading-relaxed">
            A senior VANTAGE sales advisor will contact you shortly to share floor plans, brochure packets, and off-plan allocation availability for <strong className="text-white">{projectInterest}</strong>.
          </p>

          <div className="p-4 rounded-xl bg-[#06101E] border border-[#C5A059]/30 max-w-sm mx-auto font-mono text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">SELECTED DEVELOPMENT ALLOCATION</span>
            <span className="text-[#C5A059] font-bold text-sm">{projectInterest}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <a
              href={VANTAGE_BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-900 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Sales Team Directly</span>
            </a>

            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
              >
                Return to Developer Page
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              OFF-PLAN & READY UNIT RESERVATIONS
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAFAFA]">
              Register Your Interest.
            </h3>
            <p className="text-xs font-mono text-stone-400 mt-1">
              Connect with our sales gallery team to receive priority off-plan allocations, floor plans, and VIP launch pricing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">FULL NAME *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Arthur Pendelton"
                  className={`w-full p-3.5 rounded-xl bg-[#06101E] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.name ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.name && <span className="text-rose-400 text-[10px] mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">EMAIL ADDRESS *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="arthur@pendelton-holdings.co.uk"
                  className={`w-full p-3.5 rounded-xl bg-[#06101E] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.email ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.email && <span className="text-rose-400 text-[10px] mt-1 block">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">PHONE / WHATSAPP *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 123 4567"
                  className={`w-full p-3.5 rounded-xl bg-[#06101E] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.phone ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.phone && <span className="text-rose-400 text-[10px] mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">PROJECT OF INTEREST</label>
                <select
                  value={projectInterest}
                  onChange={(e) => setProjectInterest(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-[#C5A059] font-bold"
                >
                  <option value="VANTAGE HORIZON (Dubai Marina)">VANTAGE HORIZON (Dubai Marina - Off-Plan)</option>
                  <option value="VANTAGE CREST VILLAS (Dubai Hills)">VANTAGE CREST VILLAS (Dubai Hills - Golf Villas)</option>
                  <option value="VANTAGE BAY RESIDENCES (Business Bay)">VANTAGE BAY RESIDENCES (Business Bay - Ready)</option>
                  <option value="VANTAGE REEM TOWERS (Abu Dhabi)">VANTAGE REEM TOWERS (Al Reem Abu Dhabi)</option>
                  <option value="General UAE Masterplans Inquiry">General UAE Masterplans Inquiry</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">BUDGET RANGE (AED)</label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-white"
                >
                  <option value="AED 1.1M – 1.8M">AED 1.1M – 1.8M</option>
                  <option value="AED 1.8M – 3.5M">AED 1.8M – 3.5M</option>
                  <option value="AED 3.5M – 7.0M">AED 3.5M – 7.0M</option>
                  <option value="AED 7.0M+ (Luxury Mansions / Penthouses)">AED 7.0M+ (Luxury Mansions / Penthouses)</option>
                </select>
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">BUYER PURPOSE</label>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setPurpose('Investment')}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-bold font-serif transition-all ${
                      purpose === 'Investment'
                        ? 'bg-[#C5A059] text-black border-[#C5A059]'
                        : 'bg-[#06101E] text-stone-300 border-stone-800'
                    }`}
                  >
                    Investment (Yield / Resale)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPurpose('End-Use')}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-bold font-serif transition-all ${
                      purpose === 'End-Use'
                        ? 'bg-[#C5A059] text-black border-[#C5A059]'
                        : 'bg-[#06101E] text-stone-300 border-stone-800'
                    }`}
                  >
                    End-Use (Primary Home)
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">SPECIFIC INQUIRY & QUESTIONS</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Specify preferred unit bedrooms, view orientation, or payment plan questions..."
                className="w-full p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={VANTAGE_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[#C5A059] text-xs font-mono font-bold flex items-center gap-1 hover:underline pt-2 sm:pt-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Sales Desk</span>
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
    <section id="register" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
