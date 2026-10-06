'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';

interface ContactSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    category: 'Fresh Vegetables & Produce',
    volume: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.category,
          budget: formData.volume,
          message: formData.message || `Required Volume: ${formData.volume || 'Not specified'}`,
          source: 'contact_form',
        }),
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('Failed to submit contact inquiry:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F2F7F3] text-[#111827] relative font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#063D24] font-mono text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            COMMERCIAL INQUIRIES &amp; WHOLESALE QUOTATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063D24] tracking-tight">
            Get in Touch With Our Sales Desk
          </h2>
          <p className="text-gray-600 text-base font-light">
            Contact Managing Director Habeeb Khan or our commercial trade desk for instant market quotes, contract terms, or sample requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-md space-y-6">
              <div>
                <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-widest block mb-1">
                  HEAD OFFICE &amp; DISTRIBUTION HUB
                </span>
                <h3 className="text-xl font-bold text-[#063D24] font-sans">
                  Barakah Al Rizq Foodstuff Trading L.L.C
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs text-gray-700">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#063D24] font-sans">Al Aweer Market Location:</strong>
                    <span>{BARAKAH_BRAND.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#063D24] font-sans">Commercial Sales Desk Phones:</strong>
                    <div className="space-y-0.5 text-emerald-800 font-bold mt-0.5">
                      <p>{BARAKAH_BRAND.phones[0]} (Direct / WhatsApp)</p>
                      <p>{BARAKAH_BRAND.phones[1]} (Sales Line)</p>
                      <p>{BARAKAH_BRAND.phones[2]} (Landline Office)</p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                    <strong className="block text-[#063D24] font-sans text-xs">Official Business Email Desks:</strong>
                  </div>
                  <div className="space-y-1.5 pl-6 text-[11px] font-mono">
                    <div>
                      <span className="text-gray-500 block text-[10px]">General / Inquiries:</span>
                      <a href="mailto:info@barakahalrizquae.com" className="text-emerald-800 font-bold hover:underline">
                        info@barakahalrizquae.com
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px]">Sales &amp; Wholesale RFQ:</span>
                      <a href="mailto:sales@barakahalrizquae.com" className="text-emerald-800 font-bold hover:underline">
                        sales@barakahalrizquae.com
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px]">Website Orders &amp; Dispatch:</span>
                      <a href="mailto:orders@barakahalrizquae.com" className="text-emerald-800 font-bold hover:underline">
                        orders@barakahalrizquae.com
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px]">Managing Director Direct:</span>
                      <a href="mailto:habeeb@barakahalrizquae.com" className="text-emerald-800 font-bold hover:underline">
                        habeeb@barakahalrizquae.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BARAKAH_BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>DIRECT WHATSAPP CHAT WITH MD</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Quote Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-md space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#063D24] font-sans">
                  Request a Bulk Wholesale Quotation
                </h3>
                <p className="text-xs text-gray-600 font-light mt-1">
                  Fill in your product requirements below. Our commercial team responds within 30 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-[#063D24]">Quotation Request Received!</h4>
                  <p className="text-xs text-gray-700 font-mono">
                    Thank you! Managing Director Habeeb Khan and our trade sales desk will contact you shortly with competitive market rates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-mono font-bold mb-1">COMPANY NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        placeholder="e.g. Lulu Hypermarket / Grand Stores"
                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-mono font-bold mb-1">CONTACT PERSON *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-mono font-bold mb-1">PHONE / WHATSAPP *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+971 50 123 4567"
                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-mono font-bold mb-1">BUSINESS EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="purchase@company.ae"
                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-mono font-bold mb-1">PRODUCT CATEGORY</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] focus:outline-none focus:border-emerald-600"
                      >
                        <option>Fresh Vegetables &amp; Produce</option>
                        <option>Fresh Citrus &amp; Fruits</option>
                        <option>1121 Steam Basmati Rice</option>
                        <option>Pulses &amp; Lentils (Dal)</option>
                        <option>Whole Spices &amp; Black Pepper</option>
                        <option>Dry Foodstuffs &amp; Nuts</option>
                        <option>Mixed Container / Pallet Order</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-mono font-bold mb-1">REQUIRED VOLUME / TONNAGE</label>
                      <input
                        type="text"
                        value={formData.volume}
                        onChange={(e) => setFormData((prev) => ({ ...prev, volume: e.target.value }))}
                        placeholder="e.g. 5 Tons / 1 Reefer Container"
                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-mono font-bold mb-1">SPECIFIC REQUIREMENTS / PACKAGING</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Specify required origins, packaging (25kg PP bags, jute bags, 10kg cartons), or target delivery schedule..."
                      className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    <span className="text-amber-300">{loading ? 'SUBMITTING INQUIRY...' : 'SUBMIT WHOLESALE INQUIRY'}</span>
                    <Send className="w-4 h-4 text-amber-300" />
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