'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck, Building2, Mail, Phone, User, MessageSquare, Bot, Share2, Lock } from 'lucide-react';
import { TENSORIS_BRAND } from '@/data/tensorisData';

interface TensorisProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIntent?: string;
}

export const TensorisProjectModal: React.FC<TensorisProjectModalProps> = ({
  isOpen,
  onClose,
  defaultIntent
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [organization, setOrganization] = useState('');
  const [computeTier, setComputeTier] = useState('Cognitive Matrix Pro (AED 115k/mo)');
  const [intentNote, setIntentNote] = useState(defaultIntent || 'Request Sovereign AI Infrastructure Proposal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello TENSORIS AI Architects,\n` +
      `I am requesting an Enterprise AI Architecture consultation from WebStudio AE:\n` +
      `• Name: ${fullName || 'Enterprise Lead'}\n` +
      `• Organization: ${organization || 'UAE Enterprise'}\n` +
      `• Email: ${workEmail || 'Pending'}\n` +
      `• Compute Tier: ${computeTier}\n` +
      `• Scope: ${intentNote}\n` +
      `Please connect me with a Senior Sovereign AI Solutions Architect.`
    );
    window.open(`https://wa.me/${TENSORIS_BRAND.whatsappDirect}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 text-slate-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Architecture Briefing Request Received
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                A Senior Sovereign AI Solutions Architect from our DIFC Innovation One team will reach out to <strong>{workEmail || 'your organization'}</strong> within 2 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Open WhatsApp Direct Thread</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>DIFC & ADGM SOVEREIGN DISPATCH</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Schedule Enterprise AI Architecture Briefing
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect directly with our cognitive engineering team to architect your sovereign enclaves, agent swarms, and custom MoE weights.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="H.E. Tariq Al-Mansoor"
                        className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Corporate Work Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="tariq@holding.ae"
                        className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Organization Name *</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Emirates Logistics Group"
                        className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">UAE / Direct Phone *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Target Infrastructure Sizing</label>
                  <select
                    value={computeTier}
                    onChange={(e) => setComputeTier(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono px-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Sovereign AI Foundation (AED 45k/mo)">Sovereign AI Foundation (AED 45,000 / mo · Single Division)</option>
                    <option value="Cognitive Matrix Pro (AED 115k/mo)">Cognitive Matrix Pro (AED 115,000 / mo · Multi-Division Swarm)</option>
                    <option value="Sovereign Defense & Government (AED 280k/mo)">Sovereign Defense & Government (AED 280,000 / mo · Air-Gapped Dedicated)</option>
                    <option value="Custom GPU Cluster Architecture">Custom GPU Cluster Architecture (Bespoke Bare-Metal)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Transformation Scope / Workflows</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <textarea
                      rows={3}
                      value={intentNote}
                      onChange={(e) => setIntentNote(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to Solutions Team...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Architecture Request</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>

                <div className="text-[10px] font-mono text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>Protected by UAE Data Privacy Law & Strict Enterprise NDA.</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
