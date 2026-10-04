'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  MessageSquare,
  Globe,
  Building2,
  Mail,
  Phone
} from 'lucide-react';
import { AGENCY_BUSINESS } from '@/data/siteData';

interface StratosynProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecs?: string;
}

export function StratosynProjectModal({
  isOpen,
  onClose,
  initialSpecs = ''
}: StratosynProjectModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [workloadType, setWorkloadType] = useState('AI & Machine Learning / GPU Cluster');
  const [regionsNeeded, setRegionsNeeded] = useState('UAE Sovereign Enclave (Dubai ME-DXB-01)');
  const [notes, setNotes] = useState(initialSpecs);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappMessage = encodeURIComponent(
      `Hello WEBSTUDIO AE, I would like to discuss an enterprise cloud infrastructure deployment for ${company || 'my organization'}.\n\n` +
      `• Contact: ${name} (${phone || email})\n` +
      `• Primary Workload: ${workloadType}\n` +
      `• Geographic Region: ${regionsNeeded}\n` +
      `• Specifications: ${notes || 'Standard Enterprise Deployment'}`
    );

    // Open WhatsApp in new tab
    window.open(`https://wa.me/971523394001?text=${whatsappMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/80 text-sky-400 text-xs font-mono mb-2 border border-sky-800/50">
              <Terminal className="w-3.5 h-3.5" />
              <span>STRATOSYN INFRASTRUCTURE INQUIRY</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Request Sovereign Cloud Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
              Connect directly with WebStudio AE principal cloud architects for custom enterprise sizing, UAE sovereign data residency setups, and migration roadmaps.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Forwarded</h4>
              <p className="text-xs text-slate-300 font-light max-w-md mx-auto">
                Your infrastructure request has been forwarded to our WhatsApp engineering desk (+971 52 339 4001). A principal systems architect will respond shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-lg bg-sky-500 text-slate-950 font-bold text-xs"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Al Mansoori"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Organization / Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Emirates FinTech Group"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tariq@emiratesfintech.ae"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Primary Workload Category
                  </label>
                  <select
                    value={workloadType}
                    onChange={(e) => setWorkloadType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-sky-500 font-mono text-xs"
                  >
                    <option>AI & Machine Learning / GPU Cluster</option>
                    <option>Banking / Financial Systems (DIFC/ADGM)</option>
                    <option>High-Scale E-Commerce & Retail</option>
                    <option>Enterprise ERP & Distributed Database</option>
                    <option>Real-Time IoT & Telematics Ingest</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Target Deployment Region
                  </label>
                  <select
                    value={regionsNeeded}
                    onChange={(e) => setRegionsNeeded(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-sky-500 font-mono text-xs"
                  >
                    <option>UAE Sovereign Enclave (Dubai ME-DXB-01)</option>
                    <option>Multi-Region GCC & EU (Dubai + Frankfurt)</option>
                    <option>Global Ring (Dubai + London + Singapore + NY)</option>
                    <option>Dedicated Private Enclave VPC</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono text-[11px] mb-1">
                  Estimated Capacity / Custom Specs
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Provide approximate vCPU, RAM, GPU requirements or workload SLA requirements..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Forward to Cloud Architecture Desk</span>
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-slate-500 pt-1">
                Direct WhatsApp Channel: {AGENCY_BUSINESS.whatsappDisplay} • Non-Disclosure Agreement (NDA) Protected
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
