'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, MessageSquare, Building2, UserCheck, Video, Key } from 'lucide-react';
import { AEGIS_BRAND } from '@/data/aegisSecurityData';

interface SecurityAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecurityAssessmentModal({ isOpen, onClose }: SecurityAssessmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [propertyType, setPropertyType] = useState('Corporate Headquarters');
  const [coverageScope, setCoverageScope] = useState('24/7 Static & Patrol');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `AEGIS-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(code);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AEGIS Sovereign Security,\n\nI requested an executive security assessment:\n• Ref: ${refCode || 'AEGIS-VIP'}\n• Principal: ${fullName}\n• Organization: ${companyName}\n• Facility: ${propertyType}\n• Scope: ${coverageScope}\n\nPlease assign a senior advisor for a confidential site survey.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#090E1A] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl my-auto text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  CONFIDENTIAL SECURITY ASSESSMENT
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Request Facility Threat Assessment
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                A Senior Security Advisor will review your threat profile under strict non-disclosure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Nuaimi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">Organization / Family Office *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sovereign Assets LLC"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="tariq@company.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">UAE Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">Facility Category</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Corporate Headquarters">Corporate Headquarters / Tower</option>
                    <option value="Luxury Residential Villa">Luxury Residential Estate / Villa</option>
                    <option value="Banking & Vault">Banking &amp; Vault Facility</option>
                    <option value="VIP Event & Summit">VIP Event / Summit Protection</option>
                    <option value="Industrial / Port Facility">Industrial / Port Infrastructure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">Desired Coverage</label>
                  <select
                    value={coverageScope}
                    onChange={(e) => setCoverageScope(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="24/7 Static & Patrol">24/7/365 Static &amp; Patrol Guarding</option>
                    <option value="Executive Close Protection (CPO)">Executive Close Protection (CPO)</option>
                    <option value="AI Video Surveillance SOC">AI Video Surveillance &amp; Remote SOC</option>
                    <option value="Integrated Master Security">Integrated Turnkey Master Plan</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs font-mono uppercase tracking-wider shadow-xl shadow-cyan-500/20 transition flex items-center justify-center gap-2 mt-2"
              >
                <span>REQUEST CONFIDENTIAL ASSESSMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                <a
                  href={AEGIS_BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:underline font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 24/7 Command Desk Directly</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto">
              ✓
            </div>
            <h3 className="text-2xl font-black text-white">Assessment Dossier Created</h3>
            <p className="text-xs text-slate-300 font-mono max-w-sm mx-auto">
              Your request for <strong className="text-white">{companyName}</strong> has been assigned reference <strong className="text-cyan-400">{refCode}</strong>.
            </p>
            <div className="flex justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/971507719900?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 bg-slate-800 text-slate-300 hover:text-white font-mono text-xs font-bold rounded-xl"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
