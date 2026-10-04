"use client";

import React, { useState } from "react";
import {
  Users,
  Plus,
  Shield,
  KeyRound,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  X,
  Save,
  Clock,
  Phone,
  Mail,
  Check,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { StaffMember, StaffRole } from "../../types/restaurantPos";

export const StaffManagementView: React.FC = () => {
  const {
    staff,
    currentStaff,
    setCurrentStaffDirect,
    addStaff,
    updateStaff,
    deleteStaff,
    t,
    lang,
  } = useRestaurantPos();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<StaffMember | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [role, setRole] = useState<StaffRole>("cashier");
  const [pin, setPin] = useState("1234");
  const [employeeId, setEmployeeId] = useState(`EMP-${Math.floor(1000 + Math.random() * 9000)}`);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+971 50 ");

  const getRoleBadge = (r: StaffRole) => {
    switch (r) {
      case "admin":
        return {
          label: lang === "ar" ? "مدير النظام (Admin)" : "Administrator",
          color: "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40",
        };
      case "manager":
        return {
          label: lang === "ar" ? "مشرف الصالة (Manager)" : "Floor Manager",
          color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
        };
      case "cashier":
        return {
          label: lang === "ar" ? "أمين الصندوق (Cashier)" : "Cashier / POS",
          color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        };
      case "kitchen":
        return {
          label: lang === "ar" ? "طاهي المطبخ (Kitchen)" : "Kitchen Staff",
          color: "bg-amber-500/15 text-amber-400 border-amber-500/30",
        };
    }
  };

  const handleCreateStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addStaff({
      name,
      arabicName: arabicName || name,
      role,
      pin: pin.trim() || "1234",
      employeeId,
      email: email || `${name.toLowerCase().replace(/\s+/g, ".")}@restaurantpos.ae`,
      phone,
      isActive: true,
      shiftStartedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });

    setIsAddModalOpen(false);
    setName("");
    setArabicName("");
    setPin("1234");
  };

  const handleUpdateStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStaff) return;
    updateStaff(editingStaff);
    setEditingStaff(null);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden">
      {/* Top Banner */}
      <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-[#1E2230] bg-white dark:bg-[#10121A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              {lang === "ar" ? "إدارة فريق العمل والأدوار والصلاحيات" : "Staff & Role-Based Access Control"}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-800 dark:text-[#D4AF37] font-mono font-bold">
                {staff.length} {lang === "ar" ? "موظف" : "Employees"}
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "ar"
                ? "إدارة صلاحيات المدير، أمين الصندوق، مشرف الصالة، والمطبخ مع رموز PIN آمنة"
                : "Manage Admin, Manager, Cashier and Kitchen user roles with secure 4-digit terminal PINs"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 active:scale-95 transition"
        >
          <Plus className="w-4 h-4" />
          <span>{lang === "ar" ? "إضافة موظف جديد" : "Add Staff Member"}</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-3 sm:p-6 overflow-y-auto min-h-0 h-full space-y-6 pb-16">
        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {staff.map((member) => {
            const roleBadge = getRoleBadge(member.role);
            const isCurrent = currentStaff.id === member.id;

            return (
              <div
                key={member.id}
                className={`rounded-2xl p-5 border flex flex-col justify-between transition-all duration-200 ${
                  isCurrent
                    ? "bg-amber-500/10 dark:bg-[#181C28] border-amber-500 dark:border-[#D4AF37] shadow-lg shadow-amber-500/15 ring-1 ring-amber-500/50"
                    : "bg-white dark:bg-[#12141C] border-slate-200 dark:border-[#222736] hover:border-amber-400 dark:hover:border-slate-600 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#1D212E] border border-slate-200 dark:border-[#2B3042] text-amber-700 dark:text-[#D4AF37] font-black text-sm flex items-center justify-center font-mono">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                          {member.name}
                        </h4>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {member.arabicName}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border ${roleBadge.color}`}
                    >
                      {roleBadge.label}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-[#1E2230] space-y-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">ID:</span>
                      <span className="font-mono text-slate-800 dark:text-slate-300 font-semibold">{member.employeeId}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">PIN:</span>
                      <span className="font-mono text-amber-700 dark:text-[#D4AF37] font-bold">•••• ({member.pin})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Phone:</span>
                      <span className="font-mono text-slate-800 dark:text-slate-300">{member.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-[#1E2230] flex items-center justify-between">
                  {isCurrent ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{lang === "ar" ? "المستخدم النشط حالياً" : "Active Terminal User"}</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => setCurrentStaffDirect(member)}
                      className="text-xs font-bold text-amber-700 dark:text-[#D4AF37] hover:underline"
                    >
                      {lang === "ar" ? "تفعيل الحساب" : "Switch To User"}
                    </button>
                  )}

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setEditingStaff(member)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#1A1D2A] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#252A3C] transition"
                      title="Edit Staff"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    {staff.length > 1 && (
                      <button
                        onClick={() => {
                          if (confirm(`Delete staff member ${member.name}?`)) {
                            deleteStaff(member.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/60 transition"
                        title="Delete Staff"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roles Permission Matrix Card */}
        <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl p-5 space-y-4 shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-600 dark:text-[#D4AF37]" />
            <span>{lang === "ar" ? "مصفوفة صلاحيات الأدوار الرسمية" : "Role Permissions Matrix"}</span>
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-[#161924] border-b border-slate-200 dark:border-[#222736] text-slate-700 dark:text-slate-400 font-bold uppercase text-[10px]">
                <tr>
                  <th className="px-4 py-3">{lang === "ar" ? "الدور الوظيفي" : "Role"}</th>
                  <th className="px-4 py-3 text-center">POS Billing</th>
                  <th className="px-4 py-3 text-center">Tables Plan</th>
                  <th className="px-4 py-3 text-center">Kitchen (KDS)</th>
                  <th className="px-4 py-3 text-center">Menu & Catalog</th>
                  <th className="px-4 py-3 text-center">Sales Reports</th>
                  <th className="px-4 py-3 text-center">Settings & Staff</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#1D212E] text-slate-800 dark:text-slate-300">
                <tr>
                  <td className="px-4 py-3 font-bold text-amber-700 dark:text-[#D4AF37]">Admin</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">Manager</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">— View</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Cashier</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">— View</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-amber-700 dark:text-amber-400">Kitchen</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">— View</td>
                  <td className="px-4 py-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">✓ Full</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">—</td>
                  <td className="px-4 py-3 text-center text-slate-400 dark:text-slate-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Staff Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#2A2F42] rounded-2xl max-w-md w-full p-5 shadow-2xl text-slate-100 space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#202534]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === "ar" ? "إضافة موظف جديد" : "Add Staff Member"}</span>
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateStaff} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "الاسم الكامل (بالإنجليزية)" : "Full Name (English)"}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Salim Al Zaabi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "الاسم (بالعربية)" : "Full Name (Arabic)"}
                </label>
                <input
                  type="text"
                  required
                  dir="rtl"
                  placeholder="مثل: سالم الزعابي"
                  value={arabicName}
                  onChange={(e) => setArabicName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "الدور الوظيفي" : "Role"}
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as StaffRole)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  >
                    <option value="admin">Administrator</option>
                    <option value="manager">Floor Manager</option>
                    <option value="cashier">Cashier</option>
                    <option value="kitchen">Kitchen Staff</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "رمز PIN (4 أرقام)" : "4-Digit PIN"}
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-[#D4AF37] focus:border-[#D4AF37] outline-none font-mono font-bold tracking-widest text-center"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "رقم الهاتف (+971)" : "Phone Number"}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "الرقم الوظيفي" : "Employee ID"}
                  </label>
                  <input
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 text-black font-extrabold shadow-md transition"
                >
                  {lang === "ar" ? "حفظ وإضافة الموظف" : "Save & Add Staff"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="py-2.5 px-4 rounded-xl bg-[#1A1D2A] text-slate-300 hover:text-white transition"
                >
                  {lang === "ar" ? "إلغاء" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Staff Modal */}
      {editingStaff && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#2A2F42] rounded-2xl max-w-md w-full p-5 shadow-2xl text-slate-100 space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#202534]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === "ar" ? "تعديل بيانات الموظف" : "Edit Staff Member"}</span>
              </h3>
              <button
                onClick={() => setEditingStaff(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleUpdateStaff} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "الاسم الكامل (بالإنجليزية)" : "Full Name (English)"}
                </label>
                <input
                  type="text"
                  required
                  value={editingStaff.name}
                  onChange={(e) => setEditingStaff({ ...editingStaff, name: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "الاسم (بالعربية)" : "Full Name (Arabic)"}
                </label>
                <input
                  type="text"
                  required
                  dir="rtl"
                  value={editingStaff.arabicName}
                  onChange={(e) => setEditingStaff({ ...editingStaff, arabicName: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "الدور الوظيفي" : "Role"}
                  </label>
                  <select
                    value={editingStaff.role}
                    onChange={(e) =>
                      setEditingStaff({ ...editingStaff, role: e.target.value as StaffRole })
                    }
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  >
                    <option value="admin">Administrator</option>
                    <option value="manager">Floor Manager</option>
                    <option value="cashier">Cashier</option>
                    <option value="kitchen">Kitchen Staff</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "رمز PIN (4 أرقام)" : "4-Digit PIN"}
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    value={editingStaff.pin}
                    onChange={(e) => setEditingStaff({ ...editingStaff, pin: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-[#D4AF37] focus:border-[#D4AF37] outline-none font-mono font-bold tracking-widest text-center"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 text-black font-extrabold shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === "ar" ? "حفظ التعديلات" : "Save Changes"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEditingStaff(null)}
                  className="py-2.5 px-4 rounded-xl bg-[#1A1D2A] text-slate-300 hover:text-white transition"
                >
                  {lang === "ar" ? "إلغاء" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
