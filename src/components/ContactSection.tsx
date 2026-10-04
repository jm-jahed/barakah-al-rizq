'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, MapPin, Send } from 'lucide-react';
import { AGENCY_BUSINESS } from '@/data/siteData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: 'AED 799 – AED 2,499',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Web Development',
        budget: 'AED 799 – AED 2,499',
        details: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0907] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                  Direct Engineering Inquiry
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                Let's Start the Conversation.
              </h2>

              <p className="text-base text-gray-400 leading-relaxed mb-8">
                Tell us about your project requirements, target goals, or custom AI architecture needs. Our team responds within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>{AGENCY_BUSINESS.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>{AGENCY_BUSINESS.whatsappDisplay}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>{AGENCY_BUSINESS.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#14100C] border border-amber-500/30 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-xs text-gray-400">Thank you. Frontend form validated and recorded.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-2">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-2">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-2">Target Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1612] border border-white/10 text-white text-sm focus:border-amber-400 outline-none"
                      >
                        <option>Web Development</option>
                        <option>AI Bot & Agent</option>
                        <option>Headless E-Commerce</option>
                        <option>SaaS Development</option>
                        <option>UX/UI Strategy</option>
                        <option>Digital Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-2">Project Details & Requirements</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about your project scope, timeline, or objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Start the Conversation →</span>
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
