'use client';
import React, { useEffect, useState } from 'react';

export default function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/admin/newsletter').then((r) => r.json()).then((d) => setSubscribers(d.subscribers || []));
  }, []);
  return (
    <div className="space-y-6 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-white">Newsletter Subscribers</h1>
      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900 text-slate-400 uppercase text-[10px]">
            <tr>
              <th className="p-3">Email Address</th>
              <th className="p-3">Subscribed Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {subscribers.map((s) => (
              <tr key={s.id}>
                <td className="p-3 font-bold text-white">{s.email}</td>
                <td className="p-3 text-slate-500">{new Date(s.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
