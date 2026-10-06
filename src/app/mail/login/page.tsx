'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ShieldCheck, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MailPortalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Invalid email credentials.');
      }

      router.push('/mail');
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed. Please check your credentials.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] flex flex-col justify-center items-center p-4 text-slate-100 font-sans relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md z-10">
        {/* Brand Card */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-600 to-amber-500 p-[1.5px] shadow-xl shadow-emerald-950/60 mb-2">
            <div className="w-full h-full bg-[#0B0F19] rounded-[14px] flex items-center justify-center text-amber-300">
              <Mail className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            BARAKAH AL RIZQ
          </h1>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENTERPRISE EMAIL PORTAL</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Dedicated Business Mailbox Administration &bull; Dubai, UAE
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-[#0F172A] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                BUSINESS EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@barakahalrizquae.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                PORTAL ACCESS PASSWORD
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono transition"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </span>
              ) : (
                <>
                  <span>Sign In to Email Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Mailbox Information Footer */}
          <div className="pt-4 border-t border-slate-800 text-[10.5px] font-mono text-slate-400 space-y-1">
            <div className="font-semibold text-slate-300">Authorized Mailboxes:</div>
            <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-400">
              <div>&bull; info@barakahalrizquae.com</div>
              <div>&bull; sales@barakahalrizquae.com</div>
              <div>&bull; orders@barakahalrizquae.com</div>
              <div>&bull; habeeb@barakahalrizquae.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
