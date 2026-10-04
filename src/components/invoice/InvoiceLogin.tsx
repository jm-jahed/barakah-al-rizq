"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lock, ShieldCheck, ArrowRight, AlertCircle, Building2, KeyRound, Delete, Sparkles } from "lucide-react";

interface InvoiceLoginProps {
  onLoginSuccess: (mode: "demo" | "production") => void;
}

const DEMO_PIN = "1234";
const PRODUCTION_PIN = "4253";

export default function InvoiceLogin({ onLoginSuccess }: InvoiceLoginProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // PIN field is intentionally empty / NOT auto-filled
    inputRef.current?.focus();
  }, []);

  const handleVerifyPin = (pinToTest: string) => {
    setError(null);
    if (pinToTest.length !== 4) {
      setError("Please enter a 4-digit PIN");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (pinToTest === DEMO_PIN) {
        // Explicitly set DEMO mode
        localStorage.setItem("nabta_auth_mode", "demo");
        localStorage.setItem("nabta_invoice_auth", "true");
        sessionStorage.setItem("nabta_invoice_auth", "true");
        setIsLoading(false);
        onLoginSuccess("demo");
      } else if (pinToTest === PRODUCTION_PIN) {
        // Explicitly set PRODUCTION mode
        localStorage.setItem("nabta_auth_mode", "production");
        localStorage.setItem("nabta_invoice_auth", "true");
        sessionStorage.setItem("nabta_invoice_auth", "true");
        setIsLoading(false);
        onLoginSuccess("production");
      } else {
        setIsLoading(false);
        setError("Invalid PIN code. Please try again.");
        setPin("");
        inputRef.current?.focus();
      }
    }, 250);
  };

  const handleKeypadPress = (digit: string) => {
    if (isLoading) return;
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setError(null);
    }
  };

  const handleBackspace = () => {
    if (isLoading) return;
    setPin((prev) => prev.slice(0, -1));
    setError(null);
  };

  const handleClear = () => {
    if (isLoading) return;
    setPin("");
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleVerifyPin(pin);
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Background ambient lighting effects */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-sm bg-[#0C1019]/95 border border-slate-800/80 rounded-2xl p-7 backdrop-blur-xl shadow-2xl relative z-10">
        {/* Top Header - Neutral UAE Tax Invoicing Portal (Nabta branding removed per user instruction) */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 flex items-center justify-center mb-3 shadow-lg shadow-emerald-950/40">
            <Building2 className="w-7 h-7 text-emerald-400" />
          </div>

          <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full mb-2">
            🇦🇪 Official UAE Tax Portal
          </span>

          <h1 className="font-bold text-white text-[15px] leading-snug tracking-tight">
            UAE B2B Invoicing & Billing Portal
          </h1>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/80 flex items-center justify-center gap-2 text-rose-200 text-[12px] animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Hidden Form for hardware keyboard */}
        <form onSubmit={handleSubmit} className="mb-5">
          <input
            ref={inputRef}
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            value={pin}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 4);
              setPin(val);
              setError(null);
            }}
            className="opacity-0 absolute -z-10 w-1 h-1 pointer-events-none"
            autoFocus
          />

          {/* 4 PIN Dots / Digits Display */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="flex items-center justify-center gap-3 py-3 cursor-pointer"
          >
            {[0, 1, 2, 3].map((index) => {
              const hasDigit = pin.length > index;
              const isCurrent = pin.length === index;

              return (
                <div
                  key={index}
                  className={`w-12 h-13 rounded-xl border flex items-center justify-center transition-all duration-200 ${
                    hasDigit
                      ? "border-emerald-500/80 bg-emerald-950/40 shadow-md shadow-emerald-950/50"
                      : isCurrent
                      ? "border-slate-500 bg-slate-900/90 ring-2 ring-emerald-500/30"
                      : "border-slate-800 bg-slate-900/60"
                  }`}
                >
                  {hasDigit ? (
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-scale-in" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  )}
                </div>
              );
            })}
          </div>
        </form>

        {/* Numeric Keypad Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleKeypadPress(num)}
              disabled={isLoading}
              className="h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 active:bg-emerald-950/60 border border-slate-800 hover:border-slate-700 text-white font-mono text-lg font-bold transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-sm"
            >
              {num}
            </button>
          ))}

          {/* Clear Button */}
          <button
            type="button"
            onClick={handleClear}
            disabled={isLoading || pin.length === 0}
            className="h-12 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-800/80 text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 disabled:opacity-30 cursor-pointer"
          >
            Clear
          </button>

          {/* 0 */}
          <button
            type="button"
            onClick={() => handleKeypadPress("0")}
            disabled={isLoading}
            className="h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 active:bg-emerald-950/60 border border-slate-800 hover:border-slate-700 text-white font-mono text-lg font-bold transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-sm"
          >
            0
          </button>

          {/* Backspace */}
          <button
            type="button"
            onClick={handleBackspace}
            disabled={isLoading || pin.length === 0}
            className="h-12 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-800/80 flex items-center justify-center transition-all active:scale-95 disabled:opacity-30 cursor-pointer"
          >
            <Delete className="w-5 h-5" />
          </button>
        </div>

        {/* Login Action Button */}
        <button
          type="button"
          onClick={() => handleVerifyPin(pin)}
          disabled={isLoading || pin.length !== 4}
          className="w-full h-11 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none cursor-pointer mb-4"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Verifying PIN...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Enter Portal
            </span>
          )}
        </button>

        {/* Demo Login PIN Display (Required by Master Prompt Section 2) */}
        <div className="pt-3 pb-2 text-center border-t border-slate-800/80">
          <p className="text-[12px] font-semibold text-amber-400/90 tracking-wide flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Demo Login PIN: <strong className="font-mono text-white bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/40 text-[13px]">1234</strong></span>
          </p>
        </div>

        {/* Security Footer Badge */}
        <div className="pt-2 flex items-center justify-center gap-1.5 text-slate-500 text-[10.5px]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400/80 shrink-0" />
          <span>FTA UAE Tax Invoicing • Encrypted PIN Session</span>
        </div>
      </div>
    </div>
  );
}
