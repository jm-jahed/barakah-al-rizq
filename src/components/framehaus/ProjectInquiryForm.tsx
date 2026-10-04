'use client';

import React, { useState } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import {
  Camera,
  Calendar,
  CheckCircle2,
  Sparkles,
  Send,
  Loader2,
  Building2,
  Phone,
  Mail,
  User,
  ArrowRight,
  ArrowLeft,
  FileText,
  DollarSign,
} from 'lucide-react';

export const ProjectInquiryForm: React.FC = () => {
  const { language, isRtl, formatPrice } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  const [step, setStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [ticketRef, setTicketRef] = useState<string>('');

  const [formData, setFormData] = useState({
    shootType: 'Commercial Brand Campaign',
    locationPref: 'Dubai Al Quoz Cyclorama Studio',
    targetDate: '2026-06-15',
    budgetBracket: 'AED 15,000 – AED 30,000',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (step === 1 && !formData.shootType) return;
    if (step === 2 && !formData.targetDate) return;
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setTicketRef(`FH-2026-${randomCode}`);
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      shootType: 'Commercial Brand Campaign',
      locationPref: 'Dubai Al Quoz Cyclorama Studio',
      targetDate: '2026-06-15',
      budgetBracket: 'AED 15,000 – AED 30,000',
      fullName: '',
      company: '',
      email: '',
      phone: '',
      details: '',
    });
  };

  return (
    <section id="inquiry" className="py-24 bg-[#0A0A0D] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.inquiry.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.inquiry.title}
          </h2>
          <p className="text-base text-zinc-400 font-light max-w-2xl mx-auto">
            {t.inquiry.subtitle}
          </p>
        </div>

        {/* Step Indicator */}
        {!submitted && (
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs font-mono border-b border-zinc-800 pb-6">
            <div
              className={`p-3 rounded-lg text-center border transition-all ${
                step >= 1
                  ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-500'
              }`}
            >
              <span>{t.inquiry.steps.step1}</span>
            </div>
            <div
              className={`p-3 rounded-lg text-center border transition-all ${
                step >= 2
                  ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-500'
              }`}
            >
              <span>{t.inquiry.steps.step2}</span>
            </div>
            <div
              className={`p-3 rounded-lg text-center border transition-all ${
                step >= 3
                  ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-500'
              }`}
            >
              <span>{t.inquiry.steps.step3}</span>
            </div>
          </div>
        )}

        {/* Form Body or Success State */}
        <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  {t.inquiry.success.title}
                </h3>
                <p className="text-sm text-zinc-300 font-light max-w-lg mx-auto leading-relaxed">
                  {t.inquiry.success.message}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 max-w-md mx-auto space-y-1 font-mono text-xs">
                <span className="text-zinc-400">{t.inquiry.success.refCode}</span>
                <span className="text-amber-400 font-bold text-base block">{ticketRef}</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/971506009200?text=${encodeURIComponent(
                    `Hello FRAMEHAUS Producer, I just submitted brief ${ticketRef} for ${formData.shootType} (${formData.company}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 font-mono text-xs font-bold uppercase transition-colors"
                >
                  Follow-Up on WhatsApp VIP Desk &rarr;
                </a>
                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-zinc-400 hover:text-zinc-200 underline"
                >
                  {t.inquiry.success.bookAnother}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Project Scope */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-amber-400">
                      {t.inquiry.fields.shootType}
                    </label>
                    <select
                      name="shootType"
                      value={formData.shootType}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                      required
                    >
                      <option value="Commercial Brand Campaign">Commercial Brand Campaign & Key Visuals</option>
                      <option value="Architecture & Real Estate">Architecture, Interior & Development</option>
                      <option value="Luxury Product & Jewelry Macro">Luxury Product, Watches & Fine Jewelry</option>
                      <option value="High-Fashion Editorial">High-Fashion Lookbooks & Haute Couture</option>
                      <option value="Executive Portraiture">Executive Portraiture & Boardroom Profiles</option>
                      <option value="Cinematic 8K Video Reels">Cinematic 8K Video & Social Motion Reels</option>
                      <option value="Dry-Hire Studio Rental">Dry-Hire Studio / Soundstage Booking</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-amber-400">
                      {t.inquiry.fields.budget}
                    </label>
                    <select
                      name="budgetBracket"
                      value={formData.budgetBracket}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                    >
                      <option value="AED 8,500 – AED 15,000">AED 8,500 – AED 15,000 (Half/Single Day)</option>
                      <option value="AED 15,000 – AED 30,000">AED 15,000 – AED 30,000 (Commercial Campaign)</option>
                      <option value="AED 30,000 – AED 60,000">AED 30,000 – AED 60,000 (Multi-Day Production)</option>
                      <option value="AED 60,000+">AED 60,000+ (Master Regional Campaign)</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                      <span>Continue to Timing</span>
                      {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Timing & Location */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-amber-400">
                      {t.inquiry.fields.locationPref}
                    </label>
                    <select
                      name="locationPref"
                      value={formData.locationPref}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                      required
                    >
                      <option value="Dubai Al Quoz Cyclorama Studio">Dubai Al Quoz Cyclorama Studio (3,500 sqft)</option>
                      <option value="Abu Dhabi Mussafah Soundstage">Abu Dhabi Mussafah Soundstage (Drive-In)</option>
                      <option value="On-Location in Dubai (Architectural / Landmark)">On-Location in Dubai (Architectural / Landmark)</option>
                      <option value="On-Location in Abu Dhabi / Desert Dunes">On-Location in Abu Dhabi / Desert Dunes</option>
                      <option value="Client Corporate Headquarters">Client Corporate Headquarters (Pop-Up Studio)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-amber-400">
                      {t.inquiry.fields.date}
                    </label>
                    <input
                      type="date"
                      name="targetDate"
                      value={formData.targetDate}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-amber-400">
                      {t.inquiry.fields.details}
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder={t.inquiry.placeholders.details}
                      className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none resize-none"
                      required
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs uppercase"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                      <span>Continue to Contact</span>
                      {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details & Submit */}
              {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        {t.inquiry.fields.fullName}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Al-Hashimi"
                        className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        {t.inquiry.fields.company}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Vertex Luxury Holdings"
                        className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        {t.inquiry.fields.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tariq@vertexholdings.ae"
                        className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        {t.inquiry.fields.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:border-amber-400 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs uppercase"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-amber-500/20 disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.inquiry.fields.submitting}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.inquiry.fields.submit}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
