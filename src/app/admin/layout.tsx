'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/admin/login') {
      setAuthenticated(true);
      return;
    }
    fetch('/api/auth/me')
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          router.push('/admin/login');
        }
      })
      .catch(() => {
        setAuthenticated(false);
        router.push('/admin/login');
      });
  }, [pathname, router]);

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (pathname === '/admin/login' || pathname.startsWith('/admin/pos')) {
    return <>{children}</>;
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-[#07090E] text-slate-400 flex items-center justify-center p-4">
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs font-mono">Verifying Mobile Control Center Session...</span>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const navGroups = [
    {
      group: 'OVERVIEW',
      items: [{ label: 'Dashboard', href: '/admin', icon: '📊' }],
    },
    {
      group: 'WEBSITE',
      items: [
        { label: 'Homepage CMS', href: '/admin/homepage', icon: '🏠' },
        { label: 'Navigation Menu', href: '/admin/navigation', icon: '🧭' },
        { label: 'SEO Control Center', href: '/admin/seo', icon: '🔍' },
        { label: 'Media Library', href: '/admin/media', icon: '🖼️' },
        { label: 'Global Settings', href: '/admin/settings', icon: '⚙️' },
      ],
    },
    {
      group: 'CONTENT',
      items: [
        { label: 'Foodstuff Live Prices', href: '/admin/foodstuff-prices', icon: '🥬' },
        { label: 'Projects', href: '/admin/projects', icon: '📁' },
        { label: 'Services', href: '/admin/services', icon: '⚡' },
        { label: 'Pricing', href: '/admin/pricing', icon: '💎' },
        { label: 'Testimonials', href: '/admin/testimonials', icon: '⭐' },
        { label: 'Blog & Insights', href: '/admin/blog', icon: '📝' },
        { label: 'FAQ Manager', href: '/admin/faq', icon: '❓' },
      ],
    },
    {
      group: 'BUSINESS',
      items: [
        { label: 'LinkedIn Studio', href: '/admin/linkedin', icon: '💼' },
        { label: 'Leads & CRM', href: '/admin/leads', icon: '📥' },
        { label: 'Newsletter', href: '/admin/newsletter', icon: '✉️' },
      ],
    },
    {
      group: 'SYSTEM',
      items: [
        { label: 'Admin Account', href: '/admin/account', icon: '👤' },
        { label: 'Audit Logs', href: '/admin/activity', icon: '📜' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col md:flex-row font-sans max-w-full overflow-x-hidden">
      {/* Mobile Header Bar */}
      <header className="md:hidden bg-[#0F172A] border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-base">
            WS
          </div>
          <div>
            <span className="text-xs font-bold text-white block leading-none">WebStudioAE</span>
            <span className="text-[9px] font-mono text-amber-400 uppercase block">ADMIN CMS</span>
          </div>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none text-base"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Desktop & Mobile Sidebar Drawer */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 md:w-64 bg-[#0F172A] border-r border-slate-800 p-5 flex flex-col justify-between shrink-0 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg">
                WS
              </div>
              <div>
                <span className="text-sm font-bold text-white block leading-none">WebStudioAE</span>
                <span className="text-[10px] font-mono text-amber-400 uppercase mt-0.5 block">CONTROL CENTER</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-slate-400 hover:text-white p-1 text-lg"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-4 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
            {navGroups.map((g, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-3 block">
                  {g.group}
                </span>
                {g.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        active
                          ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-900'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs">
            <span className="font-bold text-white block">Md Jahedul Islam</span>
            <span className="text-[10px] text-slate-500">SuperAdmin</span>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-red-400 transition-colors text-xs font-mono"
            title="Logout"
          >
            🚪
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto w-full max-w-full min-w-0">
        {children}
      </main>
    </div>
  );
}
