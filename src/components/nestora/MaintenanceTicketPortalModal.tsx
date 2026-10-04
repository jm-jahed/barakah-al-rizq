'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  Send, 
  Sparkles, 
  MapPin, 
  Phone,
  MessageCircle,
  Building,
  UserCheck
} from 'lucide-react';
import { NESTORA_BRAND } from '@/data/nestoraData';

interface MaintenanceTicketPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MaintenanceTicketPortalModal: React.FC<MaintenanceTicketPortalModalProps> = ({
  isOpen,
  onClose
}) => {
  const [issueType, setIssueType] = useState<string>('A/C Cooling Failure & Water Dripping');
  const [priority, setPriority] = useState<'Emergency (60-Min SLA)' | 'Urgent (Same-Day)' | 'Standard (Scheduled)'>('Emergency (60-Min SLA)');
  const [community, setCommunity] = useState<string>('Downtown Dubai');
  const [unitDetails, setUnitDetails] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [tenantPhone, setTenantPhone] = useState<string>('');
  const [isDispatched, setIsDispatched] = useState<boolean>(false);

  const issueCategories = [
    'A/C Cooling Failure & Water Dripping',
    'Plumbing Burst Pipe & Major Drain Overflow',
    'Electrical Short Circuit & DB Panel Trip',
    'Smart Lock Keyless Access Malfunction',
    'Water Heater Leaking / No Hot Water',
    'Appliance Breakdown (Fridge / Washing Machine)'
  ];

  const communities = [
    'Downtown Dubai',
    'Dubai Marina',
    'Palm Jumeirah',
    'Dubai Hills Estate',
    'Business Bay',
    'DIFC',
    'Jumeirah Village Circle (JVC)',
    'Abu Dhabi Saadiyat / Al Reem'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDispatched(true);
  };

  const handleReset = () => {
    setIsDispatched(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 10 }}
        className="relative w-full max-w-2xl bg-[#082023] border border-[#C5A059]/40 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-[#F4EFE6]"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 blur-3xl pointer-events-none rounded-full" />
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isDispatched ? (
          <div>
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0C2D31] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-wider block">
                  24/7/365 RAPID RESPONSE DISPATCH
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  Maintenance Ticket Portal.
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-light mb-6">
              Simulate or submit a real-time emergency maintenance ticket for your managed unit. Certified MEP technicians deployed under strict SLA guidelines.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Issue Category */}
              <div>
                <label className="text-[11px] font-mono text-[#C5A059] uppercase block mb-1.5 font-semibold">
                  SELECT MAINTENANCE ISSUE
                </label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full bg-[#06181A] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-[#F4EFE6] focus:outline-none focus:border-[#C5A059] cursor-pointer"
                >
                  {issueCategories.map((c) => (
                    <option key={c} value={c} className="bg-[#0A2226] text-[#F4EFE6]">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Priority Tier */}
              <div>
                <label className="text-[11px] font-mono text-[#C5A059] uppercase block mb-1.5 font-semibold">
                  SLA PRIORITY LEVEL
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['Emergency (60-Min SLA)', 'Urgent (Same-Day)', 'Standard (Scheduled)'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriority(p)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                        priority === p
                          ? 'bg-[#C5A059] text-black font-bold border-[#C5A059]'
                          : 'bg-[#06181A] text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Community & Unit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-stone-300 uppercase block mb-1">
                    Community / Area
                  </label>
                  <select
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                    className="w-full bg-[#06181A] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-[#F4EFE6] focus:outline-none focus:border-[#C5A059] cursor-pointer"
                  >
                    {communities.map((c) => (
                      <option key={c} value={c} className="bg-[#0A2226]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-stone-300 uppercase block mb-1">
                    Building & Unit Number
                  </label>
                  <input
                    type="text"
                    required
                    value={unitDetails}
                    onChange={(e) => setUnitDetails(e.target.value)}
                    placeholder="e.g. Marina Gate 1, Apt 1402"
                    className="w-full bg-[#06181A] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-[#F4EFE6] placeholder:text-stone-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-stone-300 uppercase block mb-1">
                    Tenant / Landlord Name
                  </label>
                  <input
                    type="text"
                    required
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="e.g. Tariq Mansoor"
                    className="w-full bg-[#06181A] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-[#F4EFE6] placeholder:text-stone-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-stone-300 uppercase block mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={tenantPhone}
                    onChange={(e) => setTenantPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-[#06181A] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-[#F4EFE6] placeholder:text-stone-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] transition-transform cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Technician Ticket</span>
                </button>
              </div>

            </form>

          </div>
        ) : (
          <div className="text-center py-6 space-y-6">
            
            <div className="w-16 h-16 rounded-3xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">
                TICKET #NST-MNT-{Math.floor(1000 + Math.random() * 9000)} CONFIRMED
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                Technician Dispatched!
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto font-light mt-2">
                A certified NESTORA MEP lead has been assigned to <strong>{unitDetails || 'your unit'}</strong> in {community}.
              </p>
            </div>

            {/* Ticket Summary Box */}
            <div className="bg-[#06181A] p-5 rounded-2xl border border-stone-800 text-left font-mono text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-stone-400">
                <span>ISSUE:</span>
                <span className="text-white font-bold">{issueType}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>TARGET SLA:</span>
                <span className="text-emerald-400 font-bold">{priority}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>PRE-APPROVED CAP:</span>
                <span className="text-[#C5A059] font-bold">AED 500 (No Landlord Friction)</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`${NESTORA_BRAND.whatsapp}&text=Ticket%20Update:%20${encodeURIComponent(issueType)}%20at%20${encodeURIComponent(unitDetails)}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Track on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-mono text-xs font-bold"
              >
                Close Ticket Window
              </button>
            </div>

          </div>
        )}

      </motion.div>
    </div>
  );
};
