'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Send, X, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { WholesaleCustomer } from '@/lib/db/types';

interface CustomerEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: WholesaleCustomer | null;
  onSuccess?: () => void;
}

type EmailChannelOption = 'sales' | 'info' | 'orders' | 'habeeb';

interface TemplateDef {
  name: string;
  channel: EmailChannelOption;
  subject: (cust: WholesaleCustomer) => string;
  body: (cust: WholesaleCustomer) => string;
}

const TEMPLATES: Record<string, TemplateDef> = {
  SPOT_QUOTE: {
    name: 'Spot Market Quotation',
    channel: 'sales',
    subject: (cust) => `[Wholesale Spot Rates] Active Market Pricing for ${cust.companyName || cust.name}`,
    body: (cust) =>
      `We are pleased to provide you with today's verified Al Aweer wholesale spot market rates and direct importer container allocations.\n\n` +
      `Active Highlights:\n` +
      `• Fresh Red Tomatoes (Grade A): Available for immediate dispatch.\n` +
      `• Fresh White Garlic (10kg Carton): Container & Spot available.\n` +
      `• Fresh Citrus & Produce: Direct Reefer delivery across UAE.\n\n` +
      `Please let us know your required quantities so we can secure your batch.`,
  },
  ORDER_UPDATE: {
    name: 'Order Status Update',
    channel: 'orders',
    subject: (cust) => `[Order Status Update] Barakah Al Rizq Store Pickup — ${cust.companyName || cust.name}`,
    body: (cust) =>
      `This is an update regarding your wholesale produce order.\n\n` +
      `Your produce crates and pallets are being staged at Stand 19, Fresh Produce Block B, Al Aweer Central Market, Ras Al Khor, Dubai.\n\n` +
      `Please ensure your driver/transport vehicle arrives during the active morning session (07:00 - 11:00 GST).`,
  },
  PAYMENT_REMINDER: {
    name: 'Payment & Statement Reminder',
    channel: 'orders',
    subject: (cust) => `[Account Statement] Pending Wholesale Invoice for ${cust.companyName || cust.name}`,
    body: (cust) =>
      `We hope this email finds you well.\n\n` +
      `Kindly review the outstanding invoice statement for your recent wholesale produce collections.\n\n` +
      `Please arrange settlement via Bank Transfer or COD cash payment at our Al Aweer accounts desk. If payment has already been remitted, please share the transaction slip.`,
  },
  CUSTOM: {
    name: 'Custom Direct Message',
    channel: 'sales',
    subject: (cust) => `Commercial Communication — Barakah Al Rizq Foodstuff Trading L.L.C`,
    body: (cust) =>
      `Thank you for your valued partnership with Barakah Al Rizq Foodstuff Trading L.L.C.\n\n` +
      `We are writing to discuss your upcoming fresh produce requirements...`,
  },
};

export const CustomerEmailModal: React.FC<CustomerEmailModalProps> = ({
  isOpen,
  onClose,
  customer,
  onSuccess,
}) => {
  const [channel, setChannel] = useState<EmailChannelOption>('sales');
  const [selectedTemplateKey, setSelectedTemplateKey] = useState<string>('SPOT_QUOTE');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Initialize form when customer opens
  useEffect(() => {
    if (customer && isOpen) {
      const template = TEMPLATES.SPOT_QUOTE;
      setSelectedTemplateKey('SPOT_QUOTE');
      setChannel(template.channel);
      setSubject(template.subject(customer));
      setMessage(template.body(customer));
      setError(null);
      setSuccessMessage(null);
    }
  }, [customer, isOpen]);

  if (!isOpen || !customer) return null;

  const handleTemplateChange = (templateKey: string) => {
    setSelectedTemplateKey(templateKey);
    const tmpl = TEMPLATES[templateKey];
    if (tmpl && customer) {
      setChannel(tmpl.channel);
      setSubject(tmpl.subject(customer));
      setMessage(tmpl.body(customer));
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!customer.email || !customer.email.includes('@')) {
      setError('Selected customer does not have a valid email address on file.');
      return;
    }

    if (!subject.trim()) {
      setError('Please provide a valid subject line.');
      return;
    }

    if (!message.trim()) {
      setError('Please write a message before sending.');
      return;
    }

    setSending(true);

    try {
      const res = await fetch('/api/admin/foodstuff/customers/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: customer.id,
          customerName: customer.name,
          recipientEmail: customer.email,
          channel,
          subject: subject.trim(),
          message: message.trim(),
          templateName: selectedTemplateKey,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Email could not be sent. Please try again.');
      }

      setSuccessMessage(`Email sent successfully to ${customer.email}`);
      if (onSuccess) onSuccess();

      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err?.message || 'Email could not be sent. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in font-sans">
      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>Compose Direct Client Email</span>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/40">
                  Brevo Authenticated
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                {customer.name} {customer.companyName ? `• ${customer.companyName}` : ''}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={sending}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSend} className="p-6 overflow-y-auto space-y-4 text-xs">
          {/* Status Banners */}
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-800/80 text-rose-300 flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-700/80 text-emerald-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Read-Only Recipient (To) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 font-mono text-[11px] mb-1 font-semibold uppercase">
                RECIPIENT (TO)
              </label>
              <div className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-mono text-white flex items-center justify-between">
                <span className="truncate">{customer.email || 'No email available'}</span>
                <span className="text-[10px] text-slate-500 font-sans shrink-0">Locked</span>
              </div>
            </div>

            {/* Sender Dropdown (From) */}
            <div>
              <label className="block text-slate-400 font-mono text-[11px] mb-1 font-semibold uppercase">
                SENDER IDENTITY (FROM)
              </label>
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value as EmailChannelOption)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 text-amber-300 font-mono rounded-xl focus:outline-none focus:border-emerald-500 text-xs"
              >
                <option value="sales">Sales Desk — sales@barakahalrizquae.com</option>
                <option value="info">General — info@barakahalrizquae.com</option>
                <option value="orders">Wholesale Orders — orders@barakahalrizquae.com</option>
                <option value="habeeb">Direct Desk — habeeb@barakahalrizquae.com</option>
              </select>
            </div>
          </div>

          {/* Template Selector */}
          <div>
            <label className="block text-slate-400 font-mono text-[11px] mb-1 font-semibold uppercase flex items-center justify-between">
              <span>PRESET EMAIL TEMPLATE</span>
              <span className="text-[10px] text-emerald-400">Auto-Fills Content</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.entries(TEMPLATES).map(([key, tmpl]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => handleTemplateChange(key)}
                  className={`p-2 rounded-xl text-left border text-[11px] transition font-medium ${
                    selectedTemplateKey === key
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="font-semibold truncate">{tmpl.name}</div>
                  <div className="text-[9.5px] font-mono text-slate-500 uppercase mt-0.5">{tmpl.channel}@</div>
                </button>
              ))}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-slate-400 font-mono text-[11px] mb-1 font-semibold uppercase">
              SUBJECT LINE *
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter email subject line..."
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl focus:outline-none focus:border-emerald-500 text-xs"
            />
          </div>

          {/* Message Body Field */}
          <div>
            <label className="block text-slate-400 font-mono text-[11px] mb-1 font-semibold uppercase flex items-center justify-between">
              <span>MESSAGE BODY *</span>
              <span className="text-[10px] text-slate-500">{message.length} / 5000</span>
            </label>
            <textarea
              rows={6}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your email message to the client here..."
              className="w-full p-3.5 bg-slate-900 border border-slate-800 text-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-xs leading-relaxed font-mono"
            />
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sent via SMTP Relay (STARTTLS 587)</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                disabled={sending}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={sending || !!successMessage}
                className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/10 transition disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
