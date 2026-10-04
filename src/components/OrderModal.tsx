'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  X, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  Code2,
  Bot,
  ShoppingBag,
  Check,
  Calculator
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UaeDirhamIcon } from '@/components/UaeDirhamIcon';
import { 
  ESTIMATOR_PLATFORMS, 
  ESTIMATOR_VELOCITIES, 
  ESTIMATOR_ADDONS, 
  calculateEstimatorTotal,
  ScopeQuotePayload 
} from '@/data/estimatorPricing';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string | ScopeQuotePayload;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, initialServiceId }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedType, setSelectedType] = useState<string>('starter-web');
  const [selectedVelocity, setSelectedVelocity] = useState<'standard' | 'rapid'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [customContext, setCustomContext] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  // Sync initial payload or service ID when opened
  useEffect(() => {
    if (!isOpen) return;
    setStep(1);
    setSubmitted(false);

    if (typeof initialServiceId === 'object' && initialServiceId !== null) {
      if (initialServiceId.platformId) setSelectedType(initialServiceId.platformId);
      if (initialServiceId.velocityId) setSelectedVelocity(initialServiceId.velocityId);
      setSelectedAddons(Array.isArray(initialServiceId.addonIds) ? initialServiceId.addonIds : []);
      setCustomContext(initialServiceId.customTitle || '');
    } else if (typeof initialServiceId === 'string' && initialServiceId) {
      setSelectedAddons([]);
      setSelectedVelocity('standard');
      const matchPlatform = ESTIMATOR_PLATFORMS.find(
        (p) => p.id === initialServiceId || p.name.toLowerCase() === initialServiceId.toLowerCase()
      );
      if (matchPlatform) {
        setSelectedType(matchPlatform.id);
        setCustomContext('');
      } else if (initialServiceId === 'starter' || initialServiceId === 'corporate-hq' || initialServiceId === 'web-development') {
        setSelectedType('starter-web');
        setCustomContext('Starter Package');
      } else if (initialServiceId === 'business' || initialServiceId === 'ai-automation') {
        setSelectedType('ai-solution');
        setCustomContext('Business Package');
      } else if (initialServiceId === 'premium' || initialServiceId === 'ecommerce') {
        setSelectedType('ecommerce');
        setCustomContext('Premium Package');
      } else if (initialServiceId === 'custom' || initialServiceId === 'full-saas') {
        setSelectedType('full-saas');
        setCustomContext('Enterprise Custom');
      } else {
        setSelectedType('starter-web');
        setCustomContext(initialServiceId);
      }
    } else {
      setSelectedType('starter-web');
      setSelectedVelocity('standard');
      setSelectedAddons([]);
      setCustomContext('');
    }
  }, [initialServiceId, isOpen]);

  // Calculate synchronized quote from single source of truth
  const calculatedQuote = useMemo(() => {
    return calculateEstimatorTotal(selectedType, selectedVelocity, selectedAddons);
  }, [selectedType, selectedVelocity, selectedAddons]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Handle Escape key, backdrop click, and preserve exact scroll position
  useEffect(() => {
    if (!isOpen) return;
    const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      // Seamlessly return to exact same scroll position on page
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: currentScrollY,
          behavior: 'instant' as ScrollBehavior,
        });
      }
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Confetti celebration
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      onClose();
    }, 2800);
  };

  const handleWhatsAppDirect = () => {
    const addonsList = calculatedQuote.selectedAddons.length > 0 
      ? calculatedQuote.selectedAddons.map(a => `${a.name} (+AED ${a.price})`).join(', ')
      : 'None';

    const message = encodeURIComponent(
      `Hello WebStudio AE team! I would like to start a project:\n\n` +
      `• Platform Core: ${calculatedQuote.platform.name} (Base AED ${calculatedQuote.basePrice.toLocaleString()})\n` +
      `• Delivery Velocity: ${calculatedQuote.velocity.name} (${calculatedQuote.velocity.timeline})\n` +
      `• Enhancements: ${addonsList}\n` +
      `• Estimated Total: AED ${calculatedQuote.total.toLocaleString()}\n` +
      (customContext ? `• Reference: ${customContext}\n` : '') +
      `• Client Name: ${formData.name || 'Not provided'}\n` +
      `• Notes: ${formData.details || 'Ready for architecture kickoff'}\n\n` +
      `Please confirm available sprint slots.`
    );

    window.open(`https://wa.me/971566184509?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md cursor-pointer"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="bg-[#0B0D13] border border-amber-500/30 rounded-3xl p-5 sm:p-7 max-w-2xl w-full relative shadow-[0_25px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(245,158,11,0.15)] overflow-hidden max-h-[92vh] overflow-y-auto pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] cursor-default"
        >
          {/* Top Specular Gold Accent Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-90 shadow-[0_0_12px_rgba(245,158,11,0.6)]" />

          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Telemetry */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest">
              WEBSTUDIO AE · SPRINT SCOPE CONFIGURATOR
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
            {step === 1 ? 'Configure Project Scope' : 'Client & Delivery Logistics'}
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            {step === 1 
              ? 'Select your architectural system requirements and target delivery SLA in UAE standard time.' 
              : 'Provide contact coordinates for instant architecture brief & WhatsApp priority dispatch.'}
          </p>

          {/* Synchronized Live Price Pill */}
          <div className="p-3.5 mb-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono text-gray-300 font-medium">Synchronized Scope Total:</span>
            </div>
            <div className="flex items-baseline gap-1.5 self-end sm:self-auto">
              <UaeDirhamIcon className="w-4 h-4 text-amber-400" />
              <span className="text-lg font-bold font-mono text-white">
                {calculatedQuote.total.toLocaleString()}
              </span>
              <span className="text-xs font-mono font-bold text-amber-400">AED</span>
            </div>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="py-12 text-center relative z-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Inquiry Dispatched!</h4>
              <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                Your scope brief has been registered with our Dubai engineering team. A Lead Solutions Architect will respond within 2-4 hours.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-[11px]">
                <span>PRIORITY SPRINT QUEUE: ASSIGNED (AED {calculatedQuote.total.toLocaleString()})</span>
              </div>
            </motion.div>
          ) : (
            <div>
              {/* Step 1: Scope & SLA Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  className="space-y-5"
                >
                  {/* System Type Selector Grid */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                      1. Select System Core
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ESTIMATOR_PLATFORMS.map((pt) => {
                        const Icon = pt.icon;
                        const isSelected = selectedType === pt.id;
                        return (
                          <motion.button
                            key={pt.id}
                            type="button"
                            whileHover={shouldReduceMotion ? {} : { scale: 1.015, y: -2 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                            onClick={() => setSelectedType(pt.id)}
                            className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-start gap-3 relative overflow-hidden group ${
                              isSelected
                                ? 'bg-amber-500/15 border-2 border-amber-400 shadow-[0_8px_25px_rgba(245,158,11,0.22)]'
                                : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-amber-400/40 hover:shadow-[0_4px_15px_rgba(245,158,11,0.1)]'
                            }`}
                          >
                            <div className={`p-2 rounded-xl border transition-colors ${
                              isSelected ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-gray-300 group-hover:text-amber-300'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-bold transition-colors ${isSelected ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                                  {pt.name}
                                </span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                              </div>
                              <p className="text-[11px] text-gray-400 truncate">{pt.desc}</p>
                              <span className="text-[10px] font-mono text-amber-400 font-semibold mt-1 inline-block">
                                AED {pt.basePrice.toLocaleString()}
                              </span>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Delivery Velocity & Add-ons Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Velocity Option */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                        2. Delivery Velocity
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedVelocity('standard')}
                          className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all cursor-pointer ${
                            selectedVelocity === 'standard'
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                              : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          Standard
                          <span className="block text-[10px] text-gray-400 mt-0.5">{calculatedQuote.platform.timeline}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedVelocity('rapid')}
                          className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all cursor-pointer ${
                            selectedVelocity === 'rapid'
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                              : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          Rapid Sprint
                          <span className="block text-[10px] text-amber-400/90 mt-0.5">48–72 Hours</span>
                        </button>
                      </div>
                    </div>

                    {/* Add-ons */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                        3. High-Impact Add-ons
                      </label>
                      <div className="space-y-1.5">
                        {ESTIMATOR_ADDONS.map((addon) => {
                          const isChecked = selectedAddons.includes(addon.id);
                          return (
                            <button
                              key={addon.id}
                              type="button"
                              onClick={() => toggleAddon(addon.id)}
                              className={`w-full px-2.5 py-1.5 rounded-xl border text-left text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                                  : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-gray-200'
                              }`}
                            >
                              <span className="truncate">{addon.name}</span>
                              <span className="text-[10px] text-amber-400 font-bold shrink-0 ml-1">+AED {addon.price}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons for Step 1 */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <motion.button
                      type="button"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      onClick={handleWhatsAppDirect}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold text-xs hover:bg-emerald-500/20 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Instant WhatsApp Kickoff</span>
                    </motion.button>

                    <motion.button
                      type="button"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      onClick={() => setStep(2)}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                    >
                      <span>Proceed to Contact</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info & Dispatch */}
              {step === 2 && (
                <motion.form
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Selected Summary Pill */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-2 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Selected Platform: <strong className="text-white">{calculatedQuote.platform.name}</strong></span>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-amber-400 hover:underline text-[11px] cursor-pointer"
                      >
                        Edit Scope
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 border-t border-white/5 pt-2">
                      <span>Velocity: <span className="text-amber-300">{calculatedQuote.velocity.name}</span></span>
                      <span>Add-ons: <span className="text-emerald-300">{calculatedQuote.selectedAddons.length > 0 ? `${calculatedQuote.selectedAddons.length} Applied` : 'None'}</span></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">Full Name / Stakeholder *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al Mansoori / John Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-amber-400 focus:bg-white/[0.08] transition-colors outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com / tariq@company.ae"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-amber-400 focus:bg-white/[0.08] transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">WhatsApp / Phone (UAE &amp; Global) *</label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567 or +1 / +44..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-amber-400 focus:bg-white/[0.08] transition-colors outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">Calculated Scope Total (AED)</label>
                      <input
                        type="text"
                        readOnly
                        value={`AED ${calculatedQuote.total.toLocaleString()} (${calculatedQuote.platform.name})`}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-amber-400 font-mono text-xs outline-none cursor-default font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Project Objectives &amp; Technical Notes</label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly mention key features, target launch date, integrations (e.g. Stripe, CRM, WhatsApp)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-amber-400 focus:bg-white/[0.08] transition-colors outline-none resize-none"
                    />
                  </div>

                  {/* Navigation Buttons for Step 2 */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 text-xs font-bold hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      <span>Submit Architecture Brief</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OrderModal;
