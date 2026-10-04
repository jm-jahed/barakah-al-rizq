'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  MessageSquare,
  Building2
} from 'lucide-react';
import { AGENCY_BUSINESS } from '@/data/siteData';

interface AquavantaProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecs?: string;
}

export function AquavantaProjectModal({
  isOpen,
  onClose,
  initialSpecs = ''
}: AquavantaProjectModalProps) {
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectScope, setProjectScope] = useState('Master Development Smart Grid');
  const [location, setLocation] = useState('Dubai / Abu Dhabi, UAE');
  const [notes, setNotes] = useState(initialSpecs);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappMessage = encodeURIComponent(
      `Hello WEBSTUDIO AE, I would like to discuss a smart water infrastructure deployment for ${entity || 'my organization'}.\n\n` +
      `• Contact: ${name} (${phone || email})\n` +
      `• Scope: ${projectScope}\n` +
      `• Location: ${location}\n` +
      `• Requirements: ${notes || 'Standard Municipal / Master Grid Deployment'}`
    );

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
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-400 text-xs font-mono mb-2 border border-cyan-800/50">
              <Droplets className="w-3.5 h-3.5" />
              <span>AQUAVANTA INFRASTRUCTURE INQUIRY</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Request Smart Water Grid Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
              Connect directly with WebStudio AE smart utility architects for hydraulic twin modeling, SCADA integration, and leak intelligence proposals.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Forwarded</h4>
              <p className="text-xs text-slate-300 font-light max-w-md mx-auto">
                Your water infrastructure inquiry has been forwarded to our WhatsApp engineering desk (+971 52 339 4001). A principal utility consultant will respond shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
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
                    placeholder="e.g. Eng. Khalid Al Nuaimi"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Utility / Developer / Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={entity}
                    onChange={(e) => setEntity(e.target.value)}
                    placeholder="e.g. Emirates Water & Real Estate Authority"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
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
                    placeholder="khalid@waterauthority.ae"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    WhatsApp / Contact Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 987 6543"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Project Scope
                  </label>
                  <select
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 font-mono text-xs"
                  >
                    <option>Master Development Smart Grid</option>
                    <option>Municipal Network Modernization</option>
                    <option>Industrial Greywater & Process Water</option>
                    <option>Coastal Resort & Hospitality Network</option>
                    <option>Acoustic Leak Detection Integration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-mono text-[11px] mb-1">
                    Target Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 font-mono text-xs"
                  >
                    <option>Dubai / Abu Dhabi, UAE</option>
                    <option>Sharjah & Northern Emirates</option>
                    <option>GCC Regional Utility</option>
                    <option>International Master Planned City</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono text-[11px] mb-1">
                  Estimated Capacity / Hydraulic Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Provide approximate daily megalitres, pipeline extent, or SCADA integration requirements..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Forward to Water Infrastructure Desk</span>
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-slate-500 pt-1">
                Direct WhatsApp Channel: {AGENCY_BUSINESS.whatsappDisplay} • Non-Disclosure Agreement Protected
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
