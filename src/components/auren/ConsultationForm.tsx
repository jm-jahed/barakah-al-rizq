'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, X, Lock } from 'lucide-react';
import { AUREN_BRAND } from '@/data/aurenData';

interface ConsultationFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialGoalText?: string;
  initialTopicText?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen = true,
  onClose,
  initialGoalText,
  initialTopicText,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState(initialGoalText || 'Wealth Management Advisory');
  const [preferredContact, setPreferredContact] = useState('Confidential Phone Call');
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
    <div className="bg-[#1A1D1B] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans text-stone-100 max-w-3xl w-full mx-auto">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#080A09] border border-stone-800 text-stone-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {isSubmitted ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-[#D4AF37] font-bold block uppercase tracking-[0.2em]">
            CONFIDENTIAL ADVISORY REQUEST RECEIVED
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8F6F0]">
            Thank you, {name}.
          </h3>
          <p className="text-sm font-mono text-stone-300 max-w-md mx-auto leading-relaxed">
            A senior Managing Partner will be in touch discreetly via {preferredContact.toLowerCase()} to discuss your advisory requirements.
          </p>

          <div className="p-4 rounded-xl bg-[#080A09] border border-[#D4AF37]/30 max-w-sm mx-auto font-mono text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">SELECTED ADVISORY FOCUS</span>
            <span className="text-[#D4AF37] font-bold text-sm">{areaOfInterest}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <a
              href={AUREN_BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-900 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Advisory Desk Immediately</span>
            </a>

            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-black font-serif font-bold text-xs uppercase"
              >
                Return to Advisory Page
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] block mb-1 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              CONFIDENTIAL WEALTH ADVISORY INQUIRY
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8F6F0]">
              Begin a Private Conversation.
            </h3>
            <p className="text-xs font-mono text-stone-400 mt-1">
              Speak with a senior Managing Partner in DIFC or ADGM regarding your wealth architecture.
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
                  placeholder="Julian Vance-Chatham"
                  className={`w-full p-3.5 rounded-xl bg-[#080A09] border text-white focus:outline-none focus:border-[#D4AF37] ${
                    errors.name ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.name && <span className="text-rose-400 text-[10px] mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">CONFIDENTIAL EMAIL *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="julian@vance-holdings.ae"
                  className={`w-full p-3.5 rounded-xl bg-[#080A09] border text-white focus:outline-none focus:border-[#D4AF37] ${
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
                  placeholder="+971 50 998 8440"
                  className={`w-full p-3.5 rounded-xl bg-[#080A09] border text-white focus:outline-none focus:border-[#D4AF37] ${
                    errors.phone ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.phone && <span className="text-rose-400 text-[10px] mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">PREFERRED CONTACT METHOD</label>
                <select
                  value={preferredContact}
                  onChange={(e) => setPreferredContact(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#080A09] border border-stone-800 text-white"
                >
                  <option value="Confidential Phone Call">Confidential Phone Call</option>
                  <option value="Encrypted Email Response">Encrypted Email Response</option>
                  <option value="WhatsApp Advisory Desk">WhatsApp Advisory Desk</option>
                  <option value="Private Meeting at DIFC / ADGM">Private Meeting at DIFC / ADGM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">AREA OF ADVISORY INTEREST</label>
              <select
                value={areaOfInterest}
                onChange={(e) => setAreaOfInterest(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#080A09] border border-stone-800 text-[#D4AF37] font-bold"
              >
                <option value="Wealth Management Advisory">Wealth Management Advisory</option>
                <option value="Investment Portfolio Structuring">Investment Portfolio Structuring</option>
                <option value="Retirement & Succession Planning">Retirement & Succession Planning</option>
                <option value="Family Office Advisory (DIFC / ADGM)">Family Office Advisory (DIFC / ADGM)</option>
                <option value="Corporate Exit & Pre-Sale Structuring">Corporate Exit & Pre-Sale Structuring</option>
                <option value="Real Estate Investment Advisory">Real Estate Investment Advisory</option>
                <option value="Cross-Border Wealth Structuring">Cross-Border Wealth Structuring</option>
              </select>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">PRIVATE ADVISORY NOTES / OBJECTIVES</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline your primary financial objectives or legacy structure requirements..."
                className="w-full p-3.5 rounded-xl bg-[#080A09] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Request Private Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={AUREN_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] text-xs font-mono font-bold flex items-center gap-1 hover:underline pt-2 sm:pt-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Our Advisory Desk</span>
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
    <section id="contact" className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
