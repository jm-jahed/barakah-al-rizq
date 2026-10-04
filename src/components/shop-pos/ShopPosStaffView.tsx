"use client";

import React, { useState } from "react";
import { Shield, Key, UserCheck, Lock, CheckCircle2, Plus, Trash2, X } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { StaffRole, StaffUser } from "@/types/shopPos";

export const ShopPosStaffView: React.FC = () => {
  const { staffList, addStaff, deleteStaff, currentStaff, switchStaff, setIsPinModalOpen, lang } = useShopPos();

  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("1234");
  const [role, setRole] = useState<StaffRole>("cashier");

  const handleAddStaffSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !pin) return;

    addStaff({
      id: `st-${Date.now()}`,
      name,
      email: email || `${name.toLowerCase().replace(/\s+/g, ".")}@retailpos.ae`,
      phone: phone || "+971 50 000 0000",
      pin,
      role,
      active: true,
      shiftStatus: "closed",
    });

    setIsAddStaffOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setPin("1234");
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <Shield className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "طاقم العمل وإدارات الصلاحيات" : "Staff Roster & Roles Management"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "إدارة حسابات الكاشير والمشرفين والتحقق برقم PIN"
              : "Manage cashiers, shift supervisors, admin permissions, and PIN access"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAddStaffOpen(true)}
            className="px-3.5 py-2.5 rounded-xl bg-[#141A26] border border-[#202738] hover:border-[#D4AF37] text-slate-200 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#D4AF37]" />
            <span>{lang === "ar" ? "إضافة موظف" : "Add Staff Account"}</span>
          </button>

          <button
            onClick={() => setIsPinModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Key className="w-4 h-4" />
            <span>{lang === "ar" ? "تبديل الموظف / إدخال PIN" : "Switch Cashier (PIN)"}</span>
          </button>
        </div>
      </div>

      {/* Current Active Staff Badge */}
      <div className="p-4 mb-6 rounded-2xl bg-[#0E121B] border border-[#1C2333] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-black font-mono text-base">
            {currentStaff.name[0]}
          </div>
          <div>
            <div className="text-sm font-bold text-slate-100">{currentStaff.name}</div>
            <div className="text-xs text-slate-400">{currentStaff.email} • {currentStaff.phone}</div>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-[#182030] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase font-mono">
          Active {currentStaff.role}
        </div>
      </div>

      {/* Roster Table */}
      <div className="bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 text-start">Staff Name</th>
                <th className="py-3 px-4 text-start">Role</th>
                <th className="py-3 px-4 text-start">Email / Phone</th>
                <th className="py-3 px-4 text-center">Default PIN</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#182030] text-slate-300">
              {staffList.map((staff) => {
                const isActiveUser = staff.id === currentStaff.id;
                return (
                  <tr key={staff.id} className="hover:bg-[#141A26] transition">
                    <td className="py-3 px-4 font-bold text-slate-100">{staff.name}</td>
                    <td className="py-3 px-4 uppercase font-mono text-slate-300">{staff.role}</td>
                    <td className="py-3 px-4 font-mono text-slate-400">{staff.email}</td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-amber-400">{staff.pin || "••••"}</td>
                    <td className="py-3 px-4 text-center font-mono">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px]">
                        Active
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => switchStaff(staff.id)}
                          disabled={isActiveUser}
                          className="px-3 py-1 rounded-lg bg-[#182030] hover:bg-[#D4AF37] hover:text-black text-slate-200 border border-[#222B3D] font-bold text-[11px] transition disabled:opacity-40 cursor-pointer"
                        >
                          {isActiveUser ? "Current" : "Switch Account"}
                        </button>

                        {!isActiveUser && (
                          <button
                            onClick={() => deleteStaff(staff.id)}
                            className="p-1 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20 transition cursor-pointer"
                            title="Deactivate Staff Account"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Staff Modal */}
      {isAddStaffOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1C2333]">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                <span>Create Staff User Account</span>
              </h3>
              <button onClick={() => setIsAddStaffOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStaffSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Staff Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tariq Mahmoud"
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Role Permission *</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as StaffRole)}
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                  >
                    <option value="cashier">Cashier</option>
                    <option value="manager">Store Manager</option>
                    <option value="stock">Stock Keeper</option>
                    <option value="admin">System Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">4-Digit Auth PIN *</label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="1234"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono font-bold text-center rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="staff@retailpos.ae"
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 000 0000"
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddStaffOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition"
                >
                  Save Staff User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
