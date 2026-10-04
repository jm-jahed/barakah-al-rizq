'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { VERITAS_BRAND } from '@/data/veritasData';

interface ConsultationFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialMatterType?: string;
  initialEngagementMode?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen = true,
  onClose,
  initialMatterType,
  initialEngagementMode,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [matterType, setMatterType] = useState(initialMatterType || 'Corporate & Commercial');
  const [jurisdiction, setJurisdiction] = useState('DIFC (Dubai Financial Centre)');
  const [urgency, setUrgency] = useState('Standard (3-7 Days)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!company.trim()) errs.company = 'Company name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid corporate email is required';
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
    <div className="bg-[#0F1C3F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans text-stone-100 max-w-3xl w-full mx-auto">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#0B132B] border border-stone-800 text-stone-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {isSubmitted ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-[#C5A059] font-bold block uppercase tracking-widest">
            PRIVILEGED LEGAL INQUIRY CONFIRMED
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF8F5]">
            Thank you, {name}.
          </h3>
          <p className="text-sm font-mono text-stone-300 max-w-md mx-auto leading-relaxed">
            A member of our legal team will contact you shortly to conduct a confidential conflict check and review your legal scope for <strong className="text-white">{company || 'your entity'}</strong>.
          </p>

          <div className="p-4 rounded-xl bg-[#0B132B] border border-[#C5A059]/30 max-w-sm mx-auto font-mono text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">SELECTED PRACTICE SCOPE</span>
            <span className="text-[#C5A059] font-bold text-sm">{matterType} ({jurisdiction})</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <a
              href={VERITAS_BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-900 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Legal Desk Immediately</span>
            </a>

            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
              >
                Return to Chambers
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest block mb-1">
              PRIVILEGED ATTORNEY-CLIENT INQUIRY
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF8F5]">
              Speak With Our Legal Team.
            </h3>
            <p className="text-xs font-mono text-stone-400 mt-1">
              Schedule a confidential consultation with a senior partner or practice director.
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
                  placeholder="Edward Vance"
                  className={`w-full p-3.5 rounded-xl bg-[#0B132B] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.name ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.name && <span className="text-rose-400 text-[10px] mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">COMPANY / ENTITY NAME *</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Meridian Capital Holdings"
                  className={`w-full p-3.5 rounded-xl bg-[#0B132B] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.company ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.company && <span className="text-rose-400 text-[10px] mt-1 block">{errors.company}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">CORPORATE EMAIL *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="counsel@meridian.ae"
                  className={`w-full p-3.5 rounded-xl bg-[#0B132B] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.email ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.email && <span className="text-rose-400 text-[10px] mt-1 block">{errors.email}</span>}
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">PHONE / WHATSAPP *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 987 6543"
                  className={`w-full p-3.5 rounded-xl bg-[#0B132B] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.phone ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.phone && <span className="text-rose-400 text-[10px] mt-1 block">{errors.phone}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">MATTER PRACTICE AREA</label>
                <select
                  value={matterType}
                  onChange={(e) => setMatterType(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0B132B] border border-stone-800 text-[#C5A059] font-bold"
                >
                  <option value="Corporate & Commercial">Corporate & Commercial</option>
                  <option value="Mergers & Acquisitions">Mergers & Acquisitions (M&A)</option>
                  <option value="Contract Drafting & Review">Contract Drafting & Review</option>
                  <option value="Corporate Structuring">Corporate Structuring (DIFC/ADGM)</option>
                  <option value="Dispute Resolution & Arbitration">Dispute Resolution & Arbitration</option>
                  <option value="Regulatory Compliance">Regulatory & Tax Compliance</option>
                </select>
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">TARGET JURISDICTION</label>
                <select
                  value={jurisdiction}
                  onChange={(e) => setJurisdiction(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0B132B] border border-stone-800 text-white"
                >
                  <option value="DIFC (Dubai Financial Centre)">DIFC Common Law</option>
                  <option value="ADGM (Abu Dhabi Global Market)">ADGM Common Law</option>
                  <option value="Dubai Onshore DED">Dubai Onshore DED</option>
                  <option value="Abu Dhabi Onshore ADDED">Abu Dhabi Onshore ADDED</option>
                </select>
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">TIMELINE URGENCY</label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0B132B] border border-stone-800 text-white"
                >
                  <option value="Standard (3-7 Days)">Standard (3–7 Days)</option>
                  <option value="Urgent (24-48 Hours)">Urgent (24–48 Hours)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">MATTER DESCRIPTION / LEGAL BRIEF</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly outline your commercial transaction, underlying agreement, or dispute particulars..."
                className="w-full p-3.5 rounded-xl bg-[#0B132B] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Book My Legal Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={VERITAS_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[#C5A059] text-xs font-mono font-bold flex items-center gap-1 hover:underline pt-2 sm:pt-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Our Legal Team</span>
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
    <section id="contact" className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
