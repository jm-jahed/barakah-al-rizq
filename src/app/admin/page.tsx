'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboardHome() {
  const [stats, setStats] = useState({ leads: 0, products: 22, marketPrices: 22, containerPrices: 22 });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/admin/leads')
      .then((res) => res.json())
      .then((data) => {
        if (data.leads) {
          setStats((prev) => ({ ...prev, leads: data.leads.length }));
          setRecentLeads(data.leads.slice(0, 5));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-8 max-w-7xl">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Barakah Operations Command</h1>
        <p className="text-slate-400 text-xs mt-1">Barakah Al Rizq Foodstuff Trading L.L.C — Real-time price sessions, wholesale inquiries, and commodity orders.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-amber-400 font-mono uppercase block">Active Inquiries & Quotes</span>
          <div className="text-3xl font-black text-white mt-2">{stats.leads}</div>
          <span className="text-[10px] text-emerald-400 block mt-2">↑ Al Aweer & Global Buyers</span>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-emerald-400 font-mono uppercase block">Catalog Commodities</span>
          <div className="text-3xl font-black text-white mt-2">22</div>
          <span className="text-[10px] text-slate-400 block mt-2">Fresh Produce, Pulses & Spices</span>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-blue-400 font-mono uppercase block">Wholesale Price Sessions</span>
          <div className="text-3xl font-black text-white mt-2">Active</div>
          <span className="text-[10px] text-emerald-400 block mt-2">Daily Al Aweer Fruit & Veg Sync</span>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-purple-400 font-mono uppercase block">Container Import Status</span>
          <div className="text-3xl font-black text-white mt-2">Ready</div>
          <span className="text-[10px] text-slate-400 block mt-2">FCL / LCL Dubai Import Routes</span>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/foodstuff-prices"
          className="bg-gradient-to-br from-emerald-950/40 to-[#0F172A] border border-emerald-500/30 hover:border-emerald-500/60 p-6 rounded-2xl transition-all block group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-1">Price Management</span>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Update Foodstuff Market & Container Prices →
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Edit AED rates per KG/bag, container availability, import origins, and publish morning/evening updates.
              </p>
            </div>
            <div className="text-3xl">🥬</div>
          </div>
        </Link>

        <Link
          href="/admin/leads"
          className="bg-gradient-to-br from-amber-950/40 to-[#0F172A] border border-amber-500/30 hover:border-amber-500/60 p-6 rounded-2xl transition-all block group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 font-bold block mb-1">Client Inquiries</span>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Review Wholesale Inquiries & Orders →
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Manage RFQs, WhatsApp requests, restaurant and supermarket bulk order inquiries.
              </p>
            </div>
            <div className="text-3xl">📥</div>
          </div>
        </Link>
      </div>

      {/* Recent Inquiries Table */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Recent Foodstuff Wholesale Inquiries</h3>
          <Link href="/admin/leads" className="text-xs font-semibold text-emerald-400 hover:underline">
            View All Inquiries →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-3">Buyer Name</th>
                <th className="p-3">Email & Phone</th>
                <th className="p-3">Commodity / Requirement</th>
                <th className="p-3">Estimated Volume</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {recentLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-slate-500">
                    No inquiries recorded yet. Direct inquiries from the website quote modal will appear here.
                  </td>
                </tr>
              ) : (
                recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-900/50">
                    <td className="p-3 font-bold text-white">{lead.name}</td>
                    <td className="p-3">{lead.email}<br/><span className="text-[10px] text-slate-500">{lead.phone}</span></td>
                    <td className="p-3 text-emerald-400">{lead.service || lead.productName || 'Wholesale Foodstuff'}</td>
                    <td className="p-3">{lead.budget || lead.volume || 'Standard Commercial'}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold rounded text-[10px]">
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-3 text-slate-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
