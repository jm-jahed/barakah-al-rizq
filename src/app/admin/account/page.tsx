'use client';

import React, { useState } from 'react';

export default function AdminAccountPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMsg({ text: 'New passwords do not match', type: 'error' });
      return;
    }

    const res = await fetch('/api/admin/account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    const data = await res.json();
    if (res.ok) {
      setMsg({ text: 'Password successfully updated!', type: 'success' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setMsg({ text: data.error || 'Password update failed', type: 'error' });
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Admin Account Security</h1>
        <p className="text-slate-400 text-xs mt-1">Manage credentials and password security for SuperAdmin account.</p>
      </div>

      {msg.text && (
        <div className={`p-4 rounded-xl text-xs font-bold ${
          msg.type === 'success' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
        }`}>
          {msg.text}
        </div>
      )}

      <form onSubmit={handlePasswordChange} className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Current Password</label>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">New Password</label>
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Confirm New Password</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs mt-2"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}
