'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, Shield, Stethoscope, ArrowRight, Building, Mail, Phone, User } from 'lucide-react';

interface VirelisProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirelisProjectModal: React.FC<VirelisProjectModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    emiratOrRegion: 'Dubai',
    deploymentScope: 'Enterprise Lab Network',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#091220] to-[#040810] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                Diagnostic Architecture Inquiry
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Consult with Diagnostic Intelligence Leads
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Connect with our clinical systems architects to discuss multi-modal laboratory automation, WebAssembly PACS imaging, and UAE health data sovereignty enclaves.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        placeholder="Dr. Sarah Al-Falasi"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Clinical Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="email"
                        placeholder="s.falasi@dubaihealth.ae"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Contact Phone (UAE / Int)</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Healthcare Institution / Lab</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Dubai Healthcare City Lab Group"
                        value={formData.organization}
                        onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Emirate / Region</label>
                    <select
                      value={formData.emiratOrRegion}
                      onChange={e => setFormData({ ...formData, emiratOrRegion: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none"
                    >
                      <option value="Dubai">Dubai, UAE</option>
                      <option value="Abu Dhabi">Abu Dhabi, UAE</option>
                      <option value="Sharjah">Sharjah, UAE</option>
                      <option value="Northern Emirates">Northern Emirates, UAE</option>
                      <option value="GCC / Regional">GCC & Regional</option>
                      <option value="International">International Healthcare</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Diagnostic Scope</label>
                    <select
                      value={formData.deploymentScope}
                      onChange={e => setFormData({ ...formData, deploymentScope: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none"
                    >
                      <option value="Enterprise Lab Network">Enterprise Laboratory Intelligence</option>
                      <option value="Multi-Modality Imaging">Radiology PACS & Imaging Stream</option>
                      <option value="Tumor Board MDT">Multi-Disciplinary Board Collaboration</option>
                      <option value="Comprehensive Platform">Comprehensive VIRELIS Suite</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Project Requisition Details (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Describe laboratory throughput, imaging modalities, or existing LIS/PACS systems..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    Submit Architecture Request <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[10px] font-mono text-center text-slate-500 pt-1">
                  Simulation Requisition • Zero Real Patient Data Collected • Enterprise Privacy Protected
                </p>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Requisition Transmitted</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our diagnostic systems architecture team will review your requirements for <strong className="text-cyan-300">{formData.organization || formData.emiratOrRegion}</strong> and connect shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
