'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Send, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

export const PressoraQuoteEngine: React.FC = () => {
  const [jobType, setJobType] = useState('Luxury Presentation Boxes');
  const [quantity, setQuantity] = useState('1000');
  const [finishing, setFinishing] = useState('Hot Foil + Soft Touch Velvet');
  const [timeline, setTimeline] = useState('Standard (4-5 Days)');
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const calculateEstimate = () => {
    let base = 500;
    if (jobType.includes('Boxes')) base = 1800;
    if (jobType.includes('Catalog')) base = 1200;
    if (jobType.includes('Signage')) base = 950;
    
    const qtyMultiplier = parseInt(quantity, 10) / 500;
    const finalEst = Math.round(base * (qtyMultiplier > 0.5 ? qtyMultiplier * 0.85 : 1));
    return finalEst;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-neutral-900/40 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              CUSTOM PRODUCTION QUOTE
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
              Bespoke Enterprise <span className="font-serif italic text-amber-400">Estimates</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Need custom die-cut rigid boxes, high-volume direct-mail drops, or special multi-foil stationery for UAE launches? Generate an instant estimate.
            </p>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Dynamic Instant Estimate</div>
                  <div className="text-2xl font-mono font-medium text-amber-400">
                    ~ AED {calculateEstimate().toLocaleString()}
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-neutral-500">
                *Demo calculation based on UAE raw materials, standard tooling, and Dubai production hub turnaround.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Quote Request Logged</h3>
                  <p className="text-neutral-400 text-xs max-w-md mx-auto mb-6">
                    Reference <span className="font-mono text-amber-400">#QTE-2026-DXB-94</span> created. Production engineer will inspect die-lines and dispatch formal pricing.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-neutral-900 text-white text-xs hover:bg-neutral-800 transition-colors"
                  >
                    Submit Another Specification
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1.5">Project Scope / Category</label>
                      <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Luxury Presentation Boxes">Luxury Presentation Boxes</option>
                        <option value="Corporate Catalog (100+ pgs)">Corporate Catalog (100+ pgs)</option>
                        <option value="Multi-Foil Executive Stationery">Multi-Foil Executive Stationery</option>
                        <option value="Expo Trade Show Displays">Expo Trade Show Displays</option>
                        <option value="Specialty Food Packaging">Specialty Food Packaging</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1.5">Target Run Quantity</label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="250">250 units</option>
                        <option value="500">500 units</option>
                        <option value="1000">1,000 units</option>
                        <option value="2500">2,500 units</option>
                        <option value="5000">5,000 units</option>
                        <option value="10000">10,000+ units (Bulk)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1.5">Surface Embellishment</label>
                      <select
                        value={finishing}
                        onChange={(e) => setFinishing(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Hot Foil + Soft Touch Velvet">Hot Foil + Soft Touch Velvet</option>
                        <option value="Spot UV + Matte Lamination">Spot UV + Matte Lamination</option>
                        <option value="Blind Deboss + Gilded Edges">Blind Deboss + Gilded Edges</option>
                        <option value="Standard Silk Finish">Standard Silk Finish</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1.5">Turnaround Requirement</label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Standard (4-5 Days)">Standard (4-5 Days)</option>
                        <option value="Express Priority (48 Hours)">Express Priority (48 Hours)</option>
                        <option value="Same Day Emergency Run">Same Day Emergency Run</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1.5">Company / Entity</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Al Futtaim Trading LLC"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1.5">Contact Email / Phone</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. procurement@domain.ae"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Official Production Spec & Proof</span>
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
