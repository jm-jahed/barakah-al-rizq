'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboardHome() {
  const [stats, setStats] = useState({ leads: 0, projects: 3, services: 3, subscribers: 1 });
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
        <h1 className="text-3xl font-extrabold text-white">Executive Dashboard Overview</h1>
        <p className="text-slate-400 text-xs mt-1">Real-time leads, project metrics, and digital agency performance.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-amber-400 font-mono uppercase block">Total Leads</span>
          <div className="text-3xl font-black text-white mt-2">{stats.leads}</div>
          <span className="text-[10px] text-emerald-400 block mt-2">↑ Active Inquiry Flow</span>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-blue-400 font-mono uppercase block">Published Projects</span>
          <div className="text-3xl font-black text-white mt-2">51</div>
          <span className="text-[10px] text-slate-400 block mt-2">Standalone UAE Platforms</span>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-emerald-400 font-mono uppercase block">Prerendered Routes</span>
          <div className="text-3xl font-black text-white mt-2">58/58</div>
          <span className="text-[10px] text-emerald-400 block mt-2">100% Static Compile</span>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <span className="text-xs text-purple-400 font-mono uppercase block">Subscribers</span>
          <div className="text-3xl font-black text-white mt-2">{stats.subscribers}</div>
          <span className="text-[10px] text-slate-400 block mt-2">Newsletter Community</span>
        </div>
      </div>

      {/* Recent Inquiries Table */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Recent Client Inquiries</h3>
          <Link href="/admin/leads" className="text-xs font-semibold text-amber-400 hover:underline">
            View All Leads →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-3">Client Name</th>
                <th className="p-3">Email & Phone</th>
                <th className="p-3">Requested Service</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-900/50">
                  <td className="p-3 font-bold text-white">{lead.name}</td>
                  <td className="p-3">{lead.email}<br/><span className="text-[10px] text-slate-500">{lead.phone}</span></td>
                  <td className="p-3 text-amber-400">{lead.service}</td>
                  <td className="p-3">{lead.budget}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold rounded text-[10px]">
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
