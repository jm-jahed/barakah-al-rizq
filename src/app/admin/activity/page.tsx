'use client';

import React, { useEffect, useState } from 'react';

export default function AdminActivityPage() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/admin/activity')
      .then((res) => res.json())
      .then((data) => {
        if (data.activity) setLogs(data.activity);
      });
  }, []);

  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-extrabold text-white">Security & Audit Activity Log</h1>
      <p className="text-slate-400 text-xs">Immutable audit trail of administrator mutations and CMS updates.</p>

      <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              <th className="p-3">Timestamp</th>
              <th className="p-3">User</th>
              <th className="p-3">Action</th>
              <th className="p-3">Target Entity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {logs.map((log) => (
              <tr key={log.id}>
                <td className="p-3 text-slate-500 font-mono">{new Date(log.timestamp).toLocaleString()}</td>
                <td className="p-3 font-bold text-white">{log.user}</td>
                <td className="p-3 text-amber-400 font-mono">{log.action}</td>
                <td className="p-3">{log.entity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
