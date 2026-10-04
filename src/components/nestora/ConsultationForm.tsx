'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, X, Building2 } from 'lucide-react';
import { NESTORA_BRAND } from '@/data/nestoraData';

interface ConsultationFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialServiceText?: string;
  initialYieldText?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen = true,
  onClose,
  initialServiceText,
  initialYieldText,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Dubai Marina & JBR');
  const [unitCount, setUnitCount] = useState('1 Apartment');
  const [serviceNeeded, setServiceNeeded] = useState(initialServiceText || 'Full Landlord Property Management');
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
      try {
        import('canvas-confetti').then((confettiModule) => {
          const confetti = confettiModule.default;
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#C5A059', '#D4AF37', '#10B981', '#ffffff']
          });
        });
      } catch (err) {
        // Fallback gracefully
      }
    }
  };

  const formContent = (
    <div className="bg-[#0C2D31] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans text-stone-100 max-w-3xl w-full mx-auto">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#082023] border border-stone-800 text-stone-400 hover:text-white z-10"
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
            PROPERTY ASSESSMENT REQUEST RECEIVED
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE6]">
            Thank you, {name}.
          </h3>
          <p className="text-sm font-mono text-stone-300 max-w-md mx-auto leading-relaxed">
            A senior property asset manager will contact you shortly to review your rental yield assessment and management scope for <strong className="text-white">{location}</strong>.
          </p>

          <div className="p-4 rounded-xl bg-[#082023] border border-[#C5A059]/30 max-w-sm mx-auto font-mono text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">SELECTED SERVICE MANDATE</span>
            <span className="text-[#C5A059] font-bold text-sm">{serviceNeeded}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <a
              href={NESTORA_BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-900 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Property Manager Immediately</span>
            </a>

            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
              >
                Return to Advisory Page
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest block mb-1">
              FREE LANDLORD PROPERTY ASSESSMENT
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE6]">
              Get a Free Property Assessment.
            </h3>
            <p className="text-xs font-mono text-stone-400 mt-1">
              Speak with a senior asset manager regarding your Dubai or Abu Dhabi property portfolio.
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
                  className={`w-full p-3.5 rounded-xl bg-[#082023] border text-white focus:outline-none focus:border-[#C5A059] ${
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
                  className={`w-full p-3.5 rounded-xl bg-[#082023] border text-white focus:outline-none focus:border-[#C5A059] ${
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
                  className={`w-full p-3.5 rounded-xl bg-[#082023] border text-white focus:outline-none focus:border-[#C5A059] ${
                    errors.phone ? 'border-rose-500' : 'border-stone-800'
                  }`}
                />
                {errors.phone && <span className="text-rose-400 text-[10px] mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">PROPERTY LOCATION</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#082023] border border-stone-800 text-white"
                >
                  <option value="Dubai Marina & JBR">Dubai Marina & JBR</option>
                  <option value="Downtown Dubai">Downtown Dubai</option>
                  <option value="Palm Jumeirah">Palm Jumeirah</option>
                  <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                  <option value="Jumeirah Village Circle (JVC)">Jumeirah Village Circle (JVC)</option>
                  <option value="Yas Island / Saadiyat Abu Dhabi">Yas Island / Saadiyat Abu Dhabi</option>
                  <option value="Other UAE Location">Other UAE Location</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">NUMBER OF UNITS</label>
                <select
                  value={unitCount}
                  onChange={(e) => setUnitCount(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#082023] border border-stone-800 text-white"
                >
                  <option value="1 Apartment / Villa">1 Apartment / Villa</option>
                  <option value="2 – 4 Units">2 – 4 Units</option>
                  <option value="5 – 15 Portfolio Units">5 – 15 Portfolio Units</option>
                  <option value="Whole Residential Building">Whole Residential Building</option>
                </select>
              </div>

              <div>
                <label className="text-stone-400 block mb-1 uppercase text-[10px]">PRIMARY SERVICE NEEDED</label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#082023] border border-stone-800 text-[#C5A059] font-bold"
                >
                  <option value="Full Landlord Property Management">Full Landlord Property Management (8%)</option>
                  <option value="Tenant Screening & Placement">Tenant Screening & Placement</option>
                  <option value="Ejari & RERA Compliance Management">Ejari & RERA Compliance Management</option>
                  <option value="Short-Term Holiday Home Management">Short-Term Holiday Home Management</option>
                  <option value="Handover & Snagging Inspection">Handover & Snagging Inspection</option>
                  <option value="Renovation & Home Staging">Renovation & Home Staging</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">PROPERTY DETAILS & QUESTIONS</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share any specific building details, current rent, or vacancy status..."
                className="w-full p-3.5 rounded-xl bg-[#082023] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Request Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={NESTORA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[#C5A059] text-xs font-mono font-bold flex items-center gap-1 hover:underline pt-2 sm:pt-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Property Manager</span>
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
    <section id="contact" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
};
