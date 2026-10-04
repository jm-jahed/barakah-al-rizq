'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { LEDGERA_BRAND } from '@/data/ledgeraData';

interface ConsultationFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialServiceText?: string;
  initialRiskLevel?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen = true,
  onClose,
  initialServiceText,
  initialRiskLevel,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('Mainland LLC');
  const [serviceNeeded, setServiceNeeded] = useState(initialServiceText || 'Bookkeeping & Accounting');
  const [bookkeepingStatus, setBookkeepingStatus] = useState('Partially Organized');
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
    <div className="bg-[#0E3B27] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans text-stone-100 max-w-3xl w-full mx-auto">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#0A291C] border border-stone-800 text-stone-400 hover:text-white z-10"
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
            FINANCIAL CONSULTATION REQUEST RECEIVED
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F7F6F2]">
            Thank you, {name}.
          </h3>
          <p className="text-sm font-mono text-stone-300 max-w-md mx-auto leading-relaxed">
            A senior chartered accountant will contact you shortly to review your financial setup and tax requirements for <strong className="text-white">{company || 'your business'}</strong>.
          </p>

          <div className="p-4 rounded-xl bg-[#0A291C] border border-[#D4AF37]/30 max-w-sm mx-auto font-mono text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">SELECTED PRACTICE MODULE</span>
            <span className="text-[#D4AF37] font-bold text-sm">{serviceNeeded} ({businessType})</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <a
              href={LEDGERA_BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-900 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Tax Advisor Immediately</span>
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
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
              FINANCIAL REVIEW & INQUIRY WIZARD
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F7F6F2]">
              Let's Review Your Finances.
            </h3>
            <p className="text-xs font-mono text-stone-400 mt-1">
              Speak with a senior partner or tax director about your bookkeeping, VAT, or Corporate Tax requirements.
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
                  placeholder="Tariq Al-Mansoor"
                  className={`w-full p-3.5 rounded-xl bg-[#0A291C] border text-white focus:outline-none focus:border-[#D4AF37] ${
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
                  placeholder="Orbit Tech FZ"
                  className={`w-full p-3.5 rounded-xl bg-[#0A291C] border text-white focus:outline-none focus:border-[#D4AF37] ${
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
                  placeholder="finance@orbittech.ae"
                  className={`w-full p-3.5 rounded-xl bg-[#0A291C] border text-white focus:outline-none focus:border-[#D4AF37] ${
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
                  placeholder="+971 50 123 4567"
                  className={`w-full p-3.5 rounded-xl bg-[#0A291C] border text-white focus:outline-none focus:border-[#D4AF37] ${
                    errors.phone ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.phone && <span className="text-rose-400 text-[10px] mt-1 block">{errors.phone}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">BUSINESS TYPE</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0A291C] border border-stone-800 text-white"
                >
                  <option value="Mainland LLC">Mainland LLC</option>
                  <option value="Free Zone Entity">Free Zone Entity</option>
                  <option value="Offshore / Holding">Offshore / Holding SPV</option>
                </select>
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">PRIMARY SERVICE NEEDED</label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0A291C] border border-stone-800 text-[#D4AF37] font-bold"
                >
                  <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
                  <option value="Corporate Tax Advisory (9%)">Corporate Tax Advisory (9%)</option>
                  <option value="VAT Registration & Filings">VAT Registration & Filings</option>
                  <option value="Audit & Assurance Support">Audit & Assurance Support</option>
                  <option value="Payroll & WPS Processing">Payroll & WPS Processing</option>
                  <option value="Fractional CFO Advisory">Fractional CFO Advisory</option>
                </select>
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">BOOKKEEPING STATUS</label>
                <select
                  value={bookkeepingStatus}
                  onChange={(e) => setBookkeepingStatus(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#0A291C] border border-stone-800 text-white"
                >
                  <option value="Fully Up to Date">Fully Up to Date</option>
                  <option value="Partially Organized">Partially Organized</option>
                  <option value="3+ Months Backlogged">3+ Months Backlogged</option>
                  <option value="No Accounting System">No Accounting System</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">ADDITIONAL NOTES / TAX PARTICULARS</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share any specific Corporate Tax, VAT, or bookkeeping catch-up details..."
                className="w-full p-3.5 rounded-xl bg-[#0A291C] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
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
                href={LEDGERA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] text-xs font-mono font-bold flex items-center gap-1 hover:underline pt-2 sm:pt-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp a Tax Advisor</span>
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
    <section id="contact" className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
