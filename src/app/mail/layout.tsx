'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ShieldCheck, LogOut, Radio, Clock, Sparkles } from 'lucide-react';

export default function MailPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [userEmail, setUserEmail] = useState<string>('admin@barakahalrizquae.com');
  const [gstTime, setGstTime] = useState<string>('');

  // Real-time Dubai GST Clock (UTC+4)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Dubai is UTC+4
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setGstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (pathname === '/mail/login') {
      setAuthenticated(true);
      return;
    }

    fetch('/api/auth/me')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Unauthenticated');
      })
      .then((data) => {
        setAuthenticated(true);
        if (data?.user?.email) {
          setUserEmail(data.user.email);
        }
      })
      .catch(() => {
        setAuthenticated(false);
        router.push('/mail/login');
      });
  }, [pathname, router]);

  if (pathname === '/mail/login') {
    return <>{children}</>;
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-[#050811] text-slate-300 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-4 bg-slate-900/60 p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="relative flex items-center justify-center">
            <span className="w-12 h-12 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin" />
            <span className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 animate-pulse" />
          </div>
          <div className="text-center space-y-1">
            <span className="text-sm font-extrabold text-white tracking-widest block bg-gradient-to-r from-white via-slate-200 to-amber-200 bg-clip-text text-transparent">
              BARAKAH AL RIZQ
            </span>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
              Authenticating Executive Mail Terminal...
            </span>
          </div>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/mail/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans max-w-full relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Luxury Background Ambient Mesh & Radial Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[700px] h-[400px] bg-emerald-500/[0.07] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-[450px] bg-teal-500/[0.05] rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Dedicated Mail Portal Master Top Navigation Bar */}
      <header className="relative z-40 bg-[#070B14]/85 backdrop-blur-2xl border-b border-white/[0.08] px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]">
        {/* Brand & Terminal Identity */}
        <div className="flex items-center gap-3.5">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-2xl blur-xs opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-10 h-10 rounded-2xl bg-[#090E1A] p-[1.5px] flex items-center justify-center shadow-inner">
              <span className="font-black text-sm bg-gradient-to-br from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent tracking-tighter">
                BR
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-white tracking-wider block leading-none">
                BARAKAH AL RIZQ
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                TERMINAL
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-slate-400 tracking-wider uppercase block mt-1 flex items-center gap-1.5">
              <span>Al Aweer Central Fruit & Vegetable Market &bull; Dubai, UAE</span>
            </span>
          </div>
        </div>

        {/* Live Dubai GST & Security Indicators */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Dubai Clock */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-900/60 border border-white/[0.08] rounded-xl text-xs font-mono shadow-inner">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-300 font-semibold">{gstTime || '12:00 PM'}</span>
            <span className="text-[9.5px] text-amber-300 font-bold bg-amber-500/10 px-1.5 py-0.2 rounded">GST</span>
          </div>

          {/* User Identity Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 border border-white/[0.08] rounded-xl text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300 truncate max-w-[200px]">{userEmail}</span>
          </div>

          {/* Logout Action */}
          <button
            onClick={handleLogout}
            className="px-3.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-white border border-rose-500/30 hover:border-rose-500/50 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(244,63,94,0.25)] active:scale-95"
            title="Secure Logout"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Mail Viewport with Glassmorphism canvas */}
      <main className="flex-1 p-2 sm:p-4 md:p-6 w-full max-w-full min-w-0 relative">
        {children}
      </main>
    </div>
  );
}
