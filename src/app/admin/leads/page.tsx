'use client';

import React, { useEffect, useState } from 'react';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [search, setSearch] = useState('');
  const [selectedLead, setSelectedLead] = useState<any | null>(null);

  const fetchLeads = () => {
    fetch('/api/admin/leads')
      .then((res) => res.json())
      .then((data) => {
        if (data.leads) setLeads(data.leads);
      });
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (id: string, status: string, notes?: string) => {
    await fetch('/api/admin/leads', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status, notes }),
    });
    fetchLeads();
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead((prev: any) => ({ ...prev, status, notes }));
    }
  };

  const filtered = leads.filter((l) => {
    const matchesStatus = filterStatus === 'ALL' || l.status === filterStatus;
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(search.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Lead Management & CRM</h1>
          <p className="text-slate-400 text-xs mt-1">Track inbound client inquiries, budget allocations, and status updates.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0F172A] p-4 rounded-2xl border border-slate-800">
        <input
          type="text"
          placeholder="Search by client name, email, or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 bg-slate-950 border border-slate-800 text-white rounded-xl p-2.5 text-xs focus:border-amber-400 focus:outline-none"
        />
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'WON', 'LOST'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterStatus === st
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              <th className="p-4">Client Name</th>
              <th className="p-4">Email / Phone</th>
              <th className="p-4">Service & Budget</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filtered.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-900/50">
                <td className="p-4 font-bold text-white">
                  {lead.name}
                  {lead.company && <span className="text-slate-400 block font-normal text-[11px]">{lead.company}</span>}
                </td>
                <td className="p-4">
                  {lead.email}
                  <span className="text-[10px] text-slate-500 block">{lead.phone}</span>
                </td>
                <td className="p-4">
                  <span className="text-amber-400 font-semibold block">{lead.service}</span>
                  <span className="text-[10px] text-slate-400">{lead.budget}</span>
                </td>
                <td className="p-4">
                  <select
                    value={lead.status}
                    onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-amber-400 font-bold rounded text-xs p-1.5"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="QUALIFIED">QUALIFIED</option>
                    <option value="PROPOSAL">PROPOSAL</option>
                    <option value="WON">WON</option>
                    <option value="LOST">LOST</option>
                  </select>
                </td>
                <td className="p-4 text-slate-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => setSelectedLead(lead)}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs"
                  >
                    View Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Drawer Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl max-w-xl w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-white">Lead Details: {selectedLead.name}</h3>
              <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-3 text-xs">
              <div><span className="text-slate-500">Email:</span> <strong className="text-white">{selectedLead.email}</strong></div>
              <div><span className="text-slate-500">Phone:</span> <strong className="text-white">{selectedLead.phone}</strong></div>
              <div><span className="text-slate-500">Company:</span> <strong className="text-white">{selectedLead.company || 'N/A'}</strong></div>
              <div><span className="text-slate-500">Service Requested:</span> <strong className="text-amber-400">{selectedLead.service}</strong></div>
              <div><span className="text-slate-500">Budget Allocation:</span> <strong className="text-white">{selectedLead.budget}</strong></div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 block mb-1">Message Content:</span>
                <p className="text-slate-200 leading-relaxed">{selectedLead.message}</p>
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button onClick={() => setSelectedLead(null)} className="px-5 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
