'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Truck, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { REEFER_ROUTES } from '@/data/reeferData';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultValues?: Record<string, string>;
}

export default function ReeferQuoteModal({ isOpen, onClose, defaultValues }: ReeferQuoteModalProps) {
  const [fromLocation, setFromLocation] = useState<string>('Al Aweer');
  const [toDestination, setToDestination] = useState<string>('Saudi Arabia');
  const [cargoType, setCargoType] = useState<string>('Frozen Food');
  const [temperature, setTemperature] = useState<string>('-18°C');
  const [serviceTier, setServiceTier] = useState<string>('Spot / Trip');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { isDark } = useReeferTheme();

  useEffect(() => {
    if (defaultValues) {
      if (defaultValues.from) setFromLocation(defaultValues.from);
      if (defaultValues.destination) setToDestination(defaultValues.destination);
      if (defaultValues.cargoType) {
        if (defaultValues.cargoType === 'frozen-food') setCargoType('Frozen Food');
        else if (defaultValues.cargoType === 'dairy') setCargoType('Dairy');
        else if (defaultValues.cargoType === 'meat') setCargoType('Meat');
        else if (defaultValues.cargoType === 'fruits-vegetables') setCargoType('Fruits & Vegetables');
        else setCargoType(defaultValues.cargoType);
      }
      if (defaultValues.serviceType) setServiceTier(defaultValues.serviceType);
    }
  }, [defaultValues, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Khaleej Reefer Logistics, I am requesting an expedited transport quote:
• Loading From: ${fromLocation}
• Destination: ${toDestination}
• Cargo Scope: ${cargoType}
• Setpoint Temp: ${temperature}
• Capacity: 25-Ton Reefer Trailer (15m)
• Service Type: ${serviceTier}
• Company: ${companyName || 'N/A'}
• Contact: ${contactPerson || 'N/A'}
• Phone: ${phone || 'N/A'}`;
    return `https://wa.me/971508924471?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className={`relative w-full max-w-2xl border rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col ${
        isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#111111]'
      }`}>
        
        {/* Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-2xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-lg font-black ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                REQUEST A 25-TON REEFER QUOTE
              </h3>
              <p className="text-[11px] font-mono text-sky-400 font-bold">
                Dubai to GCC Temperature-Controlled Road Transport
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border shadow-2xs transition-colors cursor-pointer ${
              isDark ? 'bg-slate-800 text-slate-300 hover:text-white border-slate-700' : 'bg-white text-[#4B5563] hover:text-[#111111] border-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mx-auto text-emerald-500 shadow-xs ${
                isDark ? 'bg-emerald-950/40 border-emerald-500' : 'bg-emerald-50 border-emerald-500'
              }`}>
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-[#111111]'}`}>Quotation Request Received</h4>
              <p className={`text-xs sm:text-sm max-w-md mx-auto font-medium ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
                Our logistics dispatch team has been notified for your shipment from{' '}
                <strong className="text-amber-500">{fromLocation}</strong> to{' '}
                <strong className="text-amber-500">{toDestination}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details to WhatsApp Dispatch</span>
                </a>
                <button
                  onClick={onClose}
                  className={`w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-mono font-bold cursor-pointer ${
                    isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-100 text-[#111111] hover:bg-slate-200'
                  }`}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Route row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>FROM (DUBAI HUB)</label>
                  <select
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-semibold ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  >
                    <option value="Al Aweer">Al Aweer Fruit & Veg Complex</option>
                    <option value="JAFZA">JAFZA South Logistics Port</option>
                  </select>
                </div>

                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>TO (GCC DESTINATION)</label>
                  <select
                    value={toDestination}
                    onChange={(e) => setToDestination(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-semibold ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  >
                    {REEFER_ROUTES.map((r) => (
                      <option key={r.id} value={r.country}>
                        {r.flag} {r.country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cargo & Temp */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>CARGO TYPE</label>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-semibold ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  >
                    <option value="Frozen Food">Frozen Food</option>
                    <option value="Chilled">Chilled</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat & Poultry</option>
                    <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                    <option value="Foodstuff">Foodstuff</option>
                    <option value="FMCG">FMCG</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>REQUIRED TEMP</label>
                  <select
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-semibold ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  >
                    <option value="-18°C">-18°C (Deep Frozen)</option>
                    <option value="-12°C">-12°C (Frozen)</option>
                    <option value="0°C">0°C (Fresh Poultry)</option>
                    <option value="+2°C">+2°C (Dairy)</option>
                    <option value="+4°C">+4°C (Produce)</option>
                    <option value="+14°C">+14°C (Confectionery)</option>
                  </select>
                </div>

                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>SERVICE TIER</label>
                  <select
                    value={serviceTier}
                    onChange={(e) => setServiceTier(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-semibold ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  >
                    <option value="Spot / Trip">Spot / Trip Basis</option>
                    <option value="Annual Contract">Fixed Annual Contract</option>
                  </select>
                </div>
              </div>

              {/* Company & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>COMPANY NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="Trading / FMCG Co."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-medium placeholder:text-slate-500 focus:outline-none focus:border-amber-500 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>CONTACT PERSON *</label>
                  <input
                    type="text"
                    required
                    placeholder="Logistics Manager"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-medium placeholder:text-slate-500 focus:outline-none focus:border-amber-500 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>PHONE / WHATSAPP *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-medium placeholder:text-slate-500 focus:outline-none focus:border-amber-500 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-300' : 'text-[#111111]'}`}>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@company.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full mt-1 p-3 rounded-xl border text-xs font-mono font-medium placeholder:text-slate-500 focus:outline-none focus:border-amber-500 ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  />
                </div>
              </div>

              {/* Transparency Notice */}
              <div className={`p-3 rounded-xl border text-[11px] font-mono ${
                isDark ? 'bg-slate-900/80 border-slate-800 text-slate-400' : 'bg-[#F8FAFC] border-slate-200 text-[#4B5563]'
              }`}>
                <span className="text-amber-500 font-bold">● NOTE:</span> Quote based on route + cargo + requirements. Capacity confirmed within 30 minutes.
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                >
                  SUBMIT TRANSPORT QUOTE INQUIRY
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
