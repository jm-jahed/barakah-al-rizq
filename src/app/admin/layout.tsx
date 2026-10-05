'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  TrendingUp,
  CreditCard,
  BarChart3,
  ArrowLeftRight,
  Boxes,
  Tag,
  Activity,
  Users,
  Inbox,
  ShieldCheck,
  History,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pendingOrdersCount, setPendingOrdersCount] = useState<number>(0);

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

  // Fetch pending orders badge count
  useEffect(() => {
    if (authenticated && pathname !== '/admin/login') {
      fetch('/api/admin/foodstuff/orders')
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.metrics?.pending !== undefined) {
            setPendingOrdersCount(data.metrics.pending);
          }
        })
        .catch(() => {});
    }
  }, [authenticated, pathname]);

  if (pathname === '/admin/login') {
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
            <span className="text-xs font-bold text-white tracking-wider block">BARAKAH AL RIZQ</span>
            <span className="text-[10px] font-mono text-emerald-400/80 uppercase">Authenticating UAE Executive Session...</span>
          </div>
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
      group: 'COMMERCIAL HUB',
      items: [
        { label: 'Executive Overview', href: '/admin', icon: LayoutDashboard },
        {
          label: 'Wholesale Orders',
          href: '/admin/orders',
          icon: Package,
          badge: pendingOrdersCount > 0 ? `${pendingOrdersCount}` : undefined,
        },
        { label: 'Sales History', href: '/admin/sales', icon: TrendingUp },
        { label: 'Payments & Receivables', href: '/admin/payments', icon: CreditCard },
        { label: 'Sales Reports & Analytics', href: '/admin/reports', icon: BarChart3 },
        { label: 'Import & Export Center', href: '/admin/import-export', icon: ArrowLeftRight },
      ],
    },
    {
      group: 'CATALOG & INVENTORY',
      items: [
        { label: 'Products Management', href: '/admin/products', icon: Boxes },
        { label: 'Product Categories', href: '/admin/categories', icon: Tag },
        { label: 'Live Commodity Prices', href: '/admin/foodstuff-prices', icon: Activity },
      ],
    },
    {
      group: 'CRM & CLIENTS',
      items: [
        { label: 'Clients & Buyers', href: '/admin/customers', icon: Users },
        { label: 'Inquiries & RFQ Leads', href: '/admin/leads', icon: Inbox },
      ],
    },
    {
      group: 'SYSTEM & SECURITY',
      items: [
        { label: 'Admin Security', href: '/admin/account', icon: ShieldCheck },
        { label: 'Audit Activity Logs', href: '/admin/activity', icon: History },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col md:flex-row font-sans max-w-full overflow-x-hidden">
      {/* Mobile Header Bar */}
      <header className="md:hidden bg-[#0A0E17]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-amber-500 p-[1px] shadow-lg shadow-emerald-950/50">
            <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center font-black text-xs text-amber-300 tracking-wider">
              BR
            </div>
          </div>
          <div>
            <span className="text-xs font-extrabold text-white tracking-wide block leading-none">
              BARAKAH AL RIZQ
            </span>
            <span className="text-[9px] font-mono text-emerald-400 tracking-wider uppercase block mt-0.5">
              COMMODITY TERMINAL
            </span>
          </div>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-slate-900/90 border border-slate-700/60 rounded-xl text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all focus:outline-none"
          aria-label="Toggle Navigation Drawer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#07090E]/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
        />
      )}

      {/* Luxury Trading Terminal Sidebar */}
      <aside
        className={`fixed md:sticky top-0 inset-y-0 left-0 z-50 w-72 md:w-68 h-screen bg-[#0A0E17] border-r border-slate-800/80 p-4 flex flex-col justify-between shrink-0 transition-transform duration-300 ease-out shadow-2xl md:shadow-none ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-4 flex flex-col h-[calc(100%-76px)]">
          {/* Top Brand Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80 px-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-amber-400 to-emerald-600 p-[1.5px] shadow-lg shadow-emerald-500/10">
                <div className="w-full h-full bg-gradient-to-b from-[#0F172A] to-[#070A11] rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-sm tracking-wider bg-gradient-to-r from-amber-300 via-emerald-200 to-amber-400 bg-clip-text text-transparent">
                    BR
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-white tracking-wider block leading-none">
                    BARAKAH AL RIZQ
                  </span>
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    UAE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">
                    AL AWEER · LIVE
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800/60 transition-colors"
              aria-label="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with custom ultra-sleek scrollbar */}
          <nav className="flex-1 overflow-y-auto space-y-4 pr-1.5 custom-scrollbar">
            {navGroups.map((g, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between px-2.5 py-1">
                  <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    {g.group}
                  </span>
                  <div className="h-[1px] flex-1 ml-2 bg-gradient-to-r from-slate-800/80 to-transparent" />
                </div>
                <div className="space-y-0.5">
                  {g.items.map((item) => {
                    const active = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group relative flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                          active
                            ? 'bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent text-emerald-300 font-semibold border-l-2 border-emerald-400 shadow-[inset_0_1px_0_0_rgba(16,185,129,0.1)]'
                            : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                              active
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                                : 'bg-slate-900/80 text-slate-400 border border-slate-800/80 group-hover:text-amber-300 group-hover:border-amber-500/30 group-hover:bg-slate-800/80'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="truncate">{item.label}</span>
                        </div>

                        <div className="flex items-center gap-1.5 ml-2 shrink-0">
                          {item.badge && (
                            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full shadow-sm">
                              {item.badge}
                            </span>
                          )}
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Executive User Card & Logout Footer */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between px-1">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 font-bold text-xs shrink-0">
              HK
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-white block truncate leading-tight">
                MD HABEER KHAN
              </span>
              <span className="text-[9.5px] font-mono text-emerald-400/90 block truncate">
                Super Admin · Dubai Desk
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all shrink-0"
            title="Secure Logout"
            aria-label="Secure Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto w-full max-w-full min-w-0">
        {children}
      </main>
    </div>
  );
}

