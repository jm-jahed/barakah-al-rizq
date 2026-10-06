'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Mail, ShieldCheck, LogOut, Lock } from 'lucide-react';

export default function MailPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [userEmail, setUserEmail] = useState<string>('admin@barakahalrizquae.com');

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
      <div className="min-h-screen bg-[#07090E] text-slate-400 flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-10 h-10 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin" />
            <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold text-white tracking-wider block">BARAKAH AL RIZQ MAIL</span>
            <span className="text-[10px] font-mono text-emerald-400/80 uppercase">Authenticating Business Mailbox Session...</span>
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
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans max-w-full">
      {/* Dedicated Mail Portal Top Navigation Bar */}
      <header className="bg-[#0A0E17]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-40 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-amber-500 p-[1.5px] shadow-lg shadow-emerald-950/50">
            <div className="w-full h-full bg-[#0B0F19] rounded-[9px] flex items-center justify-center font-black text-xs text-amber-300 tracking-wider">
              BR
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide block leading-none">
                BARAKAH AL RIZQ
              </span>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                MAIL
              </span>
            </div>
            <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase block mt-0.5">
              Enterprise Business Mail Terminal &bull; Dubai, UAE
            </span>
          </div>
        </div>

        {/* User Identity & Logout */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300 truncate max-w-[200px]">{userEmail}</span>
          </div>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 border border-rose-500/30 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            title="Secure Logout"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Mail Viewport */}
      <main className="flex-1 p-3 sm:p-5 md:p-6 w-full max-w-full min-w-0">
        {children}
      </main>
    </div>
  );
}
