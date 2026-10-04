'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  UploadCloud, 
  CheckCircle2, 
  ShoppingBag, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  FileText, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { MedicineItem } from '@/data/medivantaData';

interface MedivantaOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMedicine?: MedicineItem | null;
}

export const MedivantaOrderModal: React.FC<MedivantaOrderModalProps> = ({
  isOpen,
  onClose,
  selectedMedicine
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    emirate: 'Dubai',
    address: '',
    deliveryTime: 'Standard (Under 30 min)',
    notes: '',
    prescriptionAttached: false
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
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#091422] to-[#040810] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto"
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
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4 w-fit">
                <ShoppingBag className="w-3.5 h-3.5" />
                Intelligent Medicine Delivery Request
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Order Medicine & Upload Prescription
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Connect with our licensed pharmacy fulfillment network across Dubai, Abu Dhabi, and the Northern Emirates.
              </p>

              {/* Selected Medicine Info Banner */}
              {selectedMedicine && (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase block">Selected Medicine</span>
                    <h4 className="text-sm font-bold text-white">{selectedMedicine.name} ({selectedMedicine.dosage})</h4>
                  </div>
                  <span className="text-sm font-mono font-bold text-emerald-300">
                    AED {selectedMedicine.priceAED}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Recipient Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        placeholder="Amina Al-Falasi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Contact Phone (UAE / +971)</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Emirate / Metro Zone</label>
                    <select
                      value={formData.emirate}
                      onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 text-sm text-white focus:outline-none"
                    >
                      <option value="Dubai">Dubai, UAE</option>
                      <option value="Abu Dhabi">Abu Dhabi, UAE</option>
                      <option value="Sharjah">Sharjah, UAE</option>
                      <option value="Ajman">Ajman, UAE</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah, UAE</option>
                      <option value="Fujairah">Fujairah, UAE</option>
                      <option value="Umm Al Quwain">Umm Al Quwain, UAE</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Delivery Priority</label>
                    <select
                      value={formData.deliveryTime}
                      onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 text-sm text-white focus:outline-none"
                    >
                      <option value="STAT Express (< 20 min)">STAT Express (Under 20 min)</option>
                      <option value="Standard (Under 30 min)">Standard (Under 30 min)</option>
                      <option value="Scheduled Evening">Scheduled Evening Delivery</option>
                      <option value="Monthly Chronic Subscription">Monthly Chronic Subscription</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Doorstep Address / Villa</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="Villa 14, Palm Jumeirah Crescent or Street / Building..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Simulated Prescription Upload Checkbox */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Digital Prescription Attachment</div>
                      <span className="text-[11px] text-slate-400 font-mono">Pharmacist OCR verification enabled</span>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.prescriptionAttached}
                      onChange={(e) => setFormData({ ...formData, prescriptionAttached: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Special Handling Instructions (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="E.g. Cold-chain storage preference, gate code, or caregiver handover..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 font-mono"
                  >
                    Confirm Delivery Order <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[10px] font-mono text-center text-slate-500 pt-1">
                  Healthcare Logistics Simulation • No Real Medical Transaction Processed
                </p>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Order Dispatched to Micro-Hub</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your delivery order has been assigned to <strong className="text-emerald-300">Central Hub ({formData.emirate})</strong>. A live tracking link has been simulated for your doorstep route.
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
