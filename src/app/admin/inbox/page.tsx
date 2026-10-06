'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {
  Inbox,
  Mail,
  Send,
  Trash2,
  RotateCcw,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  User,
  Building2,
  ArrowLeft,
  Paperclip,
  Reply,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff,
  Sparkles,
  PenSquare,
  ShoppingBag,
  TrendingUp,
  Crown,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { InboxMessage, InboxMailbox } from '@/lib/db/types';

type FolderFilter = 'ALL' | 'info' | 'sales' | 'orders' | 'habeeb' | 'TRASH';
type StatusFilter = 'ALL' | 'UNREAD' | 'READ' | 'REPLIED';

interface InboxStats {
  total: number;
  unread: number;
  byMailbox: Record<string, { total: number; unread: number }>;
  trash: number;
}

const MAILBOX_META: Record<
  InboxMailbox,
  {
    label: string;
    email: string;
    color: string;
    badgeBg: string;
    border: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
    accentGlow: string;
  }
> = {
  info: {
    label: 'Info Desk',
    email: 'info@barakahalrizquae.com',
    color: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]',
    border: 'border-cyan-500/50',
    desc: 'General Inquiries & Corporate Desk',
    icon: Building2,
    accentGlow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  sales: {
    label: 'Sales Desk',
    email: 'sales@barakahalrizquae.com',
    color: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    border: 'border-emerald-500/50',
    desc: 'Quotations, Container Feeds & Spot RFQs',
    icon: TrendingUp,
    accentGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  orders: {
    label: 'Orders Desk',
    email: 'orders@barakahalrizquae.com',
    color: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    border: 'border-amber-500/50',
    desc: 'Website Orders, Pickup & Fulfillment',
    icon: ShoppingBag,
    accentGlow: 'from-amber-500/20 via-yellow-500/10 to-transparent',
  },
  habeeb: {
    label: 'Habeeb Khan',
    email: 'habeeb@barakahalrizquae.com',
    color: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]',
    border: 'border-purple-500/50',
    desc: 'Managing Director Direct Executive Desk',
    icon: Crown,
    accentGlow: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
  },
};

function getInitials(name?: string, email?: string): string {
  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  if (email) {
    const user = email.split('@')[0];
    return user.slice(0, 2).toUpperCase();
  }
  return 'BR';
}

function getAvatarStyle(mailbox?: string) {
  switch (mailbox) {
    case 'orders':
      return {
        bg: 'bg-gradient-to-br from-amber-500/25 via-amber-600/15 to-yellow-700/10',
        text: 'text-amber-300',
        ring: 'ring-1 ring-amber-400/30',
      };
    case 'sales':
      return {
        bg: 'bg-gradient-to-br from-emerald-500/25 via-teal-600/15 to-emerald-700/10',
        text: 'text-emerald-300',
        ring: 'ring-1 ring-emerald-400/30',
      };
    case 'info':
      return {
        bg: 'bg-gradient-to-br from-cyan-500/25 via-blue-600/15 to-cyan-700/10',
        text: 'text-cyan-300',
        ring: 'ring-1 ring-cyan-400/30',
      };
    case 'habeeb':
      return {
        bg: 'bg-gradient-to-br from-purple-500/25 via-fuchsia-600/15 to-purple-700/10',
        text: 'text-purple-300',
        ring: 'ring-1 ring-purple-400/30',
      };
    default:
      return {
        bg: 'bg-gradient-to-br from-slate-700/30 via-slate-800/30 to-slate-900/20',
        text: 'text-slate-200',
        ring: 'ring-1 ring-slate-600/30',
      };
  }
}

export default function AdminInboxPage() {
  const [messages, setMessages] = useState<InboxMessage[]>([]);
  const [stats, setStats] = useState<InboxStats>({
    total: 0,
    unread: 0,
    byMailbox: {
      info: { total: 0, unread: 0 },
      sales: { total: 0, unread: 0 },
      orders: { total: 0, unread: 0 },
      habeeb: { total: 0, unread: 0 },
    },
    trash: 0,
  });

  const [activeFolder, setActiveFolder] = useState<FolderFilter>('ALL');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<InboxMessage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Modals & Action States
  const [showTrashConfirm, setShowTrashConfirm] = useState(false);
  const [isTrashing, setIsTrashing] = useState(false);
  const [trashError, setTrashError] = useState<string | null>(null);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replySubject, setReplySubject] = useState('');
  const [replyBody, setReplyBody] = useState('');
  const [sendingReply, setSendingReply] = useState(false);
  const [replySuccess, setReplySuccess] = useState<string | null>(null);
  const [replyError, setReplyError] = useState<string | null>(null);

  // Compose New Email Modal State
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [composeFrom, setComposeFrom] = useState<InboxMailbox>('info');
  const [composeTo, setComposeTo] = useState('');
  const [composeName, setComposeName] = useState('');
  const [composeCc, setComposeCc] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');
  const [sendingCompose, setSendingCompose] = useState(false);
  const [composeSuccess, setComposeSuccess] = useState<string | null>(null);
  const [composeError, setComposeError] = useState<string | null>(null);

  // Mobile View Toggle
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');

  // Fetch Messages from Backend API
  const fetchInbox = useCallback(
    async (isSilent = false) => {
      if (!isSilent) setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (activeFolder === 'TRASH') {
          params.set('status', 'TRASH');
        } else {
          if (activeFolder !== 'ALL') {
            params.set('mailbox', activeFolder);
          }
          if (statusFilter !== 'ALL') {
            params.set('status', statusFilter);
          }
        }

        if (searchQuery.trim()) {
          params.set('search', searchQuery.trim());
        }

        const res = await fetch(`/api/admin/inbox?${params.toString()}`);
        if (!res.ok) {
          throw new Error('Failed to load email inbox. Please try again.');
        }

        const data = await res.json();
        if (data.success) {
          setMessages(data.messages || []);
          if (data.stats) {
            setStats(data.stats);
          }
          if (selectedMessage) {
            const fresh = (data.messages || []).find((m: InboxMessage) => m.id === selectedMessage.id);
            if (fresh) setSelectedMessage(fresh);
          }
        } else {
          throw new Error(data.error || 'Unable to retrieve messages');
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Failed to fetch inbox messages';
        setError(msg);
      } finally {
        if (!isSilent) setLoading(false);
      }
    },
    [activeFolder, statusFilter, searchQuery, selectedMessage]
  );

  useEffect(() => {
    fetchInbox();
  }, [activeFolder, statusFilter, searchQuery]);

  // Mark Read when selecting an unread message
  const handleSelectMessage = async (msg: InboxMessage) => {
    setSelectedMessage(msg);
    setMobileView('detail');

    if (msg.status === 'UNREAD') {
      try {
        const res = await fetch('/api/admin/inbox', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: msg.id, status: 'READ' }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.stats) setStats(data.stats);
          setMessages((prev) =>
            prev.map((item) =>
              item.id === msg.id ? { ...item, status: 'READ', readAt: new Date().toISOString() } : item
            )
          );
          setSelectedMessage((prev) =>
            prev && prev.id === msg.id ? { ...prev, status: 'READ', readAt: new Date().toISOString() } : prev
          );
        }
      } catch (err) {
        console.error('Failed to mark message as read', err);
      }
    }
  };

  // Toggle Read / Unread manually
  const handleToggleReadStatus = async (targetStatus: 'READ' | 'UNREAD') => {
    if (!selectedMessage) return;
    try {
      const res = await fetch('/api/admin/inbox', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedMessage.id, status: targetStatus }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.stats) setStats(data.stats);
        setMessages((prev) =>
          prev.map((item) => (item.id === selectedMessage.id ? { ...item, status: targetStatus } : item))
        );
        setSelectedMessage((prev) => (prev ? { ...prev, status: targetStatus } : null));
      }
    } catch (err) {
      console.error('Failed to toggle read status', err);
    }
  };

  // Move message to Trash
  const handleMoveToTrash = async () => {
    if (!selectedMessage) return;
    setIsTrashing(true);
    setTrashError(null);
    try {
      const res = await fetch('/api/admin/inbox', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedMessage.id || selectedMessage.messageId, status: 'TRASH' }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        if (data.stats) setStats(data.stats);
        setShowTrashConfirm(false);
        if (activeFolder !== 'TRASH') {
          setMessages((prev) =>
            prev.filter((m) => m.id !== selectedMessage.id && m.messageId !== selectedMessage.messageId)
          );
          setSelectedMessage(null);
          setMobileView('list');
        } else {
          setMessages((prev) =>
            prev.map((item) => (item.id === selectedMessage.id ? { ...item, status: 'TRASH' } : item))
          );
          setSelectedMessage((prev) => (prev ? { ...prev, status: 'TRASH' } : null));
        }
      } else {
        setTrashError(data.error || data.message || 'Failed to move message to trash.');
      }
    } catch (err) {
      console.error('Failed to move message to trash', err);
      setTrashError('Network error while moving to trash. Please try again.');
    } finally {
      setIsTrashing(false);
    }
  };

  // Restore from Trash
  const handleRestoreMessage = async () => {
    if (!selectedMessage) return;
    try {
      const res = await fetch('/api/admin/inbox', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedMessage.id, status: 'RESTORE' }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.stats) setStats(data.stats);
        if (activeFolder === 'TRASH') {
          setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
          setSelectedMessage(null);
          setMobileView('list');
        } else {
          setMessages((prev) =>
            prev.map((item) =>
              item.id === selectedMessage.id ? { ...item, status: 'READ', deletedAt: undefined } : item
            )
          );
          setSelectedMessage((prev) => (prev ? { ...prev, status: 'READ', deletedAt: undefined } : null));
        }
      }
    } catch (err) {
      console.error('Failed to restore message', err);
    }
  };

  // Open Reply Modal
  const handleOpenReply = () => {
    if (!selectedMessage) return;
    const cleanSubject = selectedMessage.subject.startsWith('Re:')
      ? selectedMessage.subject
      : `Re: ${selectedMessage.subject}`;
    setReplySubject(cleanSubject);
    setReplyBody('');
    setReplyError(null);
    setReplySuccess(null);
    setShowReplyModal(true);
  };

  // Submit Reply
  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMessage) return;
    if (!replySubject.trim() || !replyBody.trim()) {
      setReplyError('Subject and message body are required.');
      return;
    }

    setSendingReply(true);
    setReplyError(null);
    setReplySuccess(null);

    try {
      const res = await fetch('/api/admin/inbox/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messageId: selectedMessage.id,
          replySubject: replySubject.trim(),
          replyBody: replyBody.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch reply.');
      }

      setReplySuccess(
        data.simulated
          ? 'Reply processed (Development Simulation Mode).'
          : 'Reply dispatched successfully via Brevo SMTP.'
      );

      if (data.message) {
        setMessages((prev) =>
          prev.map((item) => (item.id === selectedMessage.id ? data.message : item))
        );
        setSelectedMessage(data.message);
      }

      setTimeout(() => {
        setShowReplyModal(false);
      }, 1500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error sending reply';
      setReplyError(msg);
    } finally {
      setSendingReply(false);
    }
  };

  // Open Compose Modal
  const handleOpenCompose = (defaultFrom?: InboxMailbox) => {
    if (defaultFrom) {
      setComposeFrom(defaultFrom);
    } else if (activeFolder !== 'ALL' && activeFolder !== 'TRASH') {
      setComposeFrom(activeFolder);
    } else {
      setComposeFrom('info');
    }
    setComposeTo('');
    setComposeName('');
    setComposeCc('');
    setComposeSubject('');
    setComposeBody('');
    setComposeError(null);
    setComposeSuccess(null);
    setShowComposeModal(true);
  };

  // Submit Compose Email
  const handleSendCompose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!composeTo.trim() || !composeSubject.trim() || !composeBody.trim()) {
      setComposeError('Recipient email, subject, and message body are required.');
      return;
    }

    setSendingCompose(true);
    setComposeError(null);
    setComposeSuccess(null);

    try {
      const res = await fetch('/api/admin/inbox/compose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fromMailbox: composeFrom,
          toEmail: composeTo.trim(),
          recipientName: composeName.trim() || undefined,
          cc: composeCc.trim() || undefined,
          subject: composeSubject.trim(),
          messageBody: composeBody.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch email.');
      }

      setComposeSuccess(
        data.simulated
          ? `Email dispatched (Development Simulation Mode).`
          : `Email sent successfully to ${composeTo.trim()} via Brevo SMTP!`
      );

      fetchInbox(true);

      setTimeout(() => {
        setShowComposeModal(false);
      }, 700);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error sending email';
      setComposeError(msg);
    } finally {
      setSendingCompose(false);
    }
  };

  const handleCopyEmail = (text: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      const now = new Date();
      const isToday = d.toDateString() === now.toDateString();
      if (isToday) {
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
      return d.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch {
      return isoStr;
    }
  };

  return (
    <div className="space-y-4 max-w-[1700px] mx-auto pb-6">
      {/* 3-Column Luxury Executive Mailbox Shell */}
      <div className="bg-[#090E1A]/90 backdrop-blur-2xl border border-white/[0.08] rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden min-h-[780px] flex flex-col md:flex-row relative ring-1 ring-white/[0.04]">
        {/* ========================================================= */}
        {/* COLUMN 1: Left Executive Mailbox & Folders Sidebar        */}
        {/* ========================================================= */}
        <aside className="w-full md:w-68 lg:w-76 bg-[#060A13]/95 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/[0.07] p-4.5 flex flex-col justify-between shrink-0">
          <div className="space-y-4.5">
            {/* Header & Sync */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  EXECUTIVE DESKS
                </span>
              </div>
              <button
                onClick={() => fetchInbox()}
                disabled={loading}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.06] transition duration-200 disabled:opacity-50 group"
                title="Sync All Mailboxes"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors ${
                    loading ? 'animate-spin text-emerald-400' : ''
                  }`}
                />
              </button>
            </div>

            {/* Radiant Master Compose Button */}
            <button
              onClick={() => handleOpenCompose()}
              className="relative group overflow-hidden w-full py-3 px-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs rounded-2xl shadow-[0_4px_25px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2.5 border border-emerald-400/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
              <PenSquare className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 text-amber-200" />
              <span className="tracking-wide">Compose New Email</span>
            </button>

            {/* Folders List */}
            <div className="space-y-1.5">
              {/* ALL INBOX */}
              <button
                onClick={() => {
                  setActiveFolder('ALL');
                  setSelectedMessage(null);
                  setMobileView('list');
                }}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-medium transition-all duration-200 ${
                  activeFolder === 'ALL'
                    ? 'bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent text-emerald-200 font-bold border-l-3 border-emerald-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                      activeFolder === 'ALL'
                        ? 'bg-emerald-500/20 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                        : 'bg-white/[0.04] text-slate-400'
                    }`}
                  >
                    <Inbox className="w-3.5 h-3.5" />
                  </div>
                  <span className="truncate tracking-wide">All Inboxes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {stats.unread > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      {stats.unread}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-500">{stats.total}</span>
                </div>
              </button>

              {/* 4 OFFICIAL EXECUTIVE DESKS */}
              {(['orders', 'sales', 'info', 'habeeb'] as InboxMailbox[]).map((boxKey) => {
                const meta = MAILBOX_META[boxKey];
                const boxStat = stats.byMailbox?.[boxKey] || { total: 0, unread: 0 };
                const isActive = activeFolder === boxKey;
                const IconComponent = meta.icon;

                return (
                  <button
                    key={boxKey}
                    onClick={() => {
                      setActiveFolder(boxKey);
                      setSelectedMessage(null);
                      setMobileView('list');
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs transition-all duration-200 ${
                      isActive
                        ? `bg-gradient-to-r ${meta.accentGlow} text-white font-bold border-l-3 ${meta.border} shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]`
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-white/10 ' + meta.color + ' shadow-sm'
                            : 'bg-white/[0.04] text-slate-400'
                        }`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="truncate font-semibold tracking-wide flex items-center gap-1.5">
                          <span>{meta.label}</span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                          {boxKey}@
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {boxStat.unread > 0 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.25)]">
                          {boxStat.unread}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-slate-500">{boxStat.total}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* TRASH FOLDER */}
            <div className="pt-2 border-t border-white/[0.07]">
              <button
                onClick={() => {
                  setActiveFolder('TRASH');
                  setSelectedMessage(null);
                  setMobileView('list');
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs transition-all duration-200 ${
                  activeFolder === 'TRASH'
                    ? 'bg-rose-950/40 text-rose-300 font-bold border-l-3 border-rose-500 shadow-sm'
                    : 'text-slate-400 hover:text-rose-300 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-white/[0.04] flex items-center justify-center text-rose-400">
                    <Trash2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Trash Archive</span>
                </div>
                {stats.trash > 0 && (
                  <span className="text-[10px] font-mono text-rose-400 font-semibold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20">
                    {stats.trash}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Luxury Executive Badge Footer */}
          <div className="mt-6 p-3.5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-white/[0.08] text-[11px] font-mono space-y-2 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-bold tracking-wide flex items-center gap-1.5 text-[10.5px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ENCRYPTED GATEWAY
              </span>
              <span className="text-[9.5px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                ACTIVE
              </span>
            </div>
            <div className="text-slate-400 text-[10px] leading-relaxed">
              Cloudflare Worker + Brevo SMTP Route Live for Dubai Fruit & Veg Market Desk.
            </div>
          </div>
        </aside>

        {/* ========================================================= */}
        {/* COLUMN 2: Center Email Feed / List                        */}
        {/* ========================================================= */}
        <section
          className={`w-full md:w-88 lg:w-[410px] border-b md:border-b-0 md:border-r border-white/[0.07] flex flex-col bg-[#070D18]/90 shrink-0 ${
            mobileView === 'detail' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {/* List Search & Filter Header */}
          <div className="p-3.5 border-b border-white/[0.07] space-y-3 bg-[#080E1C]/95 backdrop-blur-md">
            {/* Search Input */}
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sender, subject, text..."
                className="w-full pl-10 pr-12 py-2 bg-slate-950/90 border border-white/[0.08] rounded-2xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 font-sans shadow-inner transition-all"
              />
              {loading && messages.length > 0 ? (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                </div>
              ) : searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
                >
                  Clear
                </button>
              ) : (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-600 border border-slate-800 px-1.5 py-0.5 rounded">
                  /
                </span>
              )}
            </div>

            {/* Segmented Status Pill Selector */}
            {activeFolder !== 'TRASH' && (
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950/80 rounded-2xl border border-white/[0.06] text-[10.5px] font-mono">
                {(['ALL', 'UNREAD', 'READ', 'REPLIED'] as StatusFilter[]).map((tab) => {
                  const isActive = statusFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setStatusFilter(tab)}
                      className={`py-1.5 text-center rounded-xl transition-all duration-200 font-semibold ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Messages Scroll Feed */}
          <div className="flex-1 overflow-y-auto divide-y divide-white/[0.04] custom-scrollbar max-h-[660px]">
            {loading && messages.length === 0 ? (
              <div className="p-14 text-center text-slate-400 space-y-3">
                <div className="relative inline-flex items-center justify-center">
                  <RefreshCw className="w-7 h-7 animate-spin text-emerald-400" />
                </div>
                <p className="text-xs font-mono text-slate-300">Synchronizing mailbox feed...</p>
              </div>
            ) : error ? (
              <div className="p-8 text-center space-y-3">
                <AlertTriangle className="w-7 h-7 text-rose-400 mx-auto" />
                <p className="text-xs text-rose-300 font-sans">{error}</p>
                <button
                  onClick={() => fetchInbox()}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-xl font-medium transition"
                >
                  Retry Connection
                </button>
              </div>
            ) : messages.length === 0 ? (
              <div className="p-14 text-center text-slate-400 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto text-slate-500">
                  <Inbox className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-300">
                    {activeFolder === 'TRASH'
                      ? 'Trash Archive is Empty'
                      : searchQuery
                      ? 'No Matching Emails'
                      : 'No Messages Yet'}
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans max-w-xs mx-auto">
                    {searchQuery
                      ? 'Try refining your search keyword or clearing the filter.'
                      : 'Incoming customer orders and inquiries will appear here automatically.'}
                  </p>
                </div>
              </div>
            ) : (
              messages.map((msg) => {
                const isSelected = selectedMessage?.id === msg.id;
                const isUnread = msg.status === 'UNREAD';
                const meta = MAILBOX_META[msg.mailbox] || MAILBOX_META.info;
                const avatar = getAvatarStyle(msg.mailbox);
                const initials = getInitials(msg.fromName, msg.fromEmail);

                return (
                  <button
                    key={msg.id}
                    onClick={() => handleSelectMessage(msg)}
                    className={`w-full text-left p-4 transition-all duration-200 block relative group ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-500/15 via-slate-900/90 to-slate-900/70 border-l-3 border-emerald-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]'
                        : isUnread
                        ? 'bg-emerald-950/20 hover:bg-white/[0.04] border-l-3 border-emerald-500/50'
                        : 'hover:bg-white/[0.03] opacity-85 hover:opacity-100'
                    }`}
                  >
                    {/* Top Row: Avatar + Sender + Time */}
                    <div className="flex items-start justify-between gap-2.5 mb-1.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Avatar */}
                        <div
                          className={`w-8 h-8 rounded-xl ${avatar.bg} ${avatar.ring} flex items-center justify-center shrink-0 shadow-sm`}
                        >
                          <span className={`text-[11px] font-bold ${avatar.text}`}>{initials}</span>
                        </div>

                        {/* Name & Unread indicator */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            {isUnread && (
                              <span
                                className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse"
                                title="Unread Message"
                              />
                            )}
                            <span
                              className={`text-xs truncate block ${
                                isUnread ? 'font-bold text-white' : 'font-semibold text-slate-200'
                              }`}
                            >
                              {msg.fromName || msg.fromEmail}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 truncate block">
                            {msg.fromEmail}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-slate-400 shrink-0 mt-0.5">
                        {formatDate(msg.receivedAt)}
                      </span>
                    </div>

                    {/* Subject */}
                    <div
                      className={`text-xs truncate my-1.5 ${
                        isUnread ? 'font-bold text-emerald-200 tracking-wide' : 'font-medium text-slate-300'
                      }`}
                    >
                      {msg.subject || '(No Subject)'}
                    </div>

                    {/* Preview snippet */}
                    <div className="text-[11px] text-slate-400 line-clamp-1 mb-2.5 font-sans leading-normal">
                      {msg.previewText || msg.textBody || 'No preview available'}
                    </div>

                    {/* Bottom Badges */}
                    <div className="flex items-center justify-between text-[9.5px] font-mono">
                      <span className={`px-2 py-0.5 rounded-full border ${meta.badgeBg}`}>
                        {meta.label}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {msg.hasAttachments && (
                          <span
                            className="text-slate-400 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/[0.04]"
                            title="Contains attachments"
                          >
                            <Paperclip className="w-2.5 h-2.5" />
                            <span>{msg.attachmentsCount || 1}</span>
                          </span>
                        )}
                        {msg.status === 'REPLIED' && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 flex items-center gap-1 shadow-xs">
                            <Reply className="w-2.5 h-2.5" />
                            Replied
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* COLUMN 3: Right Selected Email Detail & Reader            */}
        {/* ========================================================= */}
        <section
          className={`flex-1 flex flex-col bg-[#080E1C]/90 ${
            mobileView === 'list' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {selectedMessage ? (
            <div className="flex-1 flex flex-col h-full">
              {/* Detail Top Toolbar */}
              <div className="p-3.5 border-b border-white/[0.07] bg-[#091020]/95 backdrop-blur-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMobileView('list')}
                    className="md:hidden p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl"
                    title="Back to email list"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  {/* Primary Reply Button */}
                  <button
                    onClick={handleOpenReply}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Reply className="w-3.5 h-3.5" />
                    <span>Reply</span>
                  </button>

                  {/* Mark Read / Unread */}
                  {selectedMessage.status === 'UNREAD' ? (
                    <button
                      onClick={() => handleToggleReadStatus('READ')}
                      className="px-3 py-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/[0.07] rounded-xl text-xs font-mono flex items-center gap-1.5 transition"
                      title="Mark as Read"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden sm:inline">Mark Read</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggleReadStatus('UNREAD')}
                      className="px-3 py-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/[0.07] rounded-xl text-xs font-mono flex items-center gap-1.5 transition"
                      title="Mark as Unread"
                    >
                      <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">Mark Unread</span>
                    </button>
                  )}

                  {/* Copy Email Helper */}
                  <button
                    onClick={() => handleCopyEmail(selectedMessage.fromEmail)}
                    className="px-3 py-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/[0.07] rounded-xl text-xs font-mono flex items-center gap-1.5 transition"
                    title="Copy sender email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span className="hidden sm:inline">Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Trash / Restore Actions */}
                <div className="flex items-center gap-2">
                  {selectedMessage.status === 'TRASH' ? (
                    <button
                      onClick={handleRestoreMessage}
                      className="px-3.5 py-2 bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restore to Inbox</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowTrashConfirm(true)}
                      className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition border border-transparent hover:border-rose-500/20"
                      title="Move to Trash"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Email Content Header Card */}
              <div className="p-6 border-b border-white/[0.07] space-y-4 bg-gradient-to-b from-[#0B1224] to-[#080E1C]">
                {/* Subject Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-snug">
                    {selectedMessage.subject || '(No Subject)'}
                  </h2>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-white/[0.06]">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{new Date(selectedMessage.receivedAt).toLocaleString()} (GST)</span>
                  </div>
                </div>

                {/* Sender & Recipient Executive Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs bg-slate-950/80 p-4 rounded-2xl border border-white/[0.08] shadow-inner">
                  {/* FROM */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold flex items-center gap-1">
                      <span>FROM</span>
                      <span className="text-emerald-400">&bull; VERIFIED INBOUND</span>
                    </div>
                    <div className="text-white font-medium flex items-center gap-2 truncate">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {getInitials(selectedMessage.fromName, selectedMessage.fromEmail)}
                      </div>
                      <span className="font-semibold text-white truncate">
                        {selectedMessage.fromName || 'External Customer / Buyer'}
                      </span>
                    </div>
                    <div className="text-slate-400 font-mono text-[11px] truncate pl-8">
                      {selectedMessage.fromEmail}
                    </div>
                  </div>

                  {/* TO (DESTINATION ROUTE) */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold flex items-center gap-1">
                      <span>ROUTED DESK</span>
                      <span className="text-amber-400">&bull; CLOUDFLARE SECURE</span>
                    </div>
                    <div className="text-amber-300 font-mono text-[11.5px] font-semibold flex items-center gap-2 truncate">
                      <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="truncate">{selectedMessage.toEmail}</span>
                    </div>
                    <div className="pl-6">
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[9.5px] uppercase font-bold">
                        {selectedMessage.mailbox} desk
                      </span>
                    </div>
                  </div>

                  {selectedMessage.replyTo && selectedMessage.replyTo !== selectedMessage.fromEmail && (
                    <div className="sm:col-span-2 pt-2 border-t border-white/[0.06] text-[11px] text-slate-400 font-mono flex items-center gap-2">
                      <span className="text-slate-500">Official Reply-To:</span>
                      <span className="text-slate-300">{selectedMessage.replyTo}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email Content Body */}
              <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-slate-950/50">
                {selectedMessage.htmlBody ? (
                  <div
                    className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed overflow-x-auto break-words bg-slate-900/40 p-5 rounded-2xl border border-white/[0.06] shadow-sm"
                    dangerouslySetInnerHTML={{ __html: selectedMessage.htmlBody }}
                  />
                ) : (
                  <div className="whitespace-pre-wrap font-sans text-sm text-slate-200 leading-relaxed break-words bg-slate-900/40 p-5 rounded-2xl border border-white/[0.06] shadow-sm">
                    {selectedMessage.textBody || selectedMessage.previewText || 'Empty email content.'}
                  </div>
                )}

                {/* Inline Quick Reply Trigger Bar */}
                <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between bg-slate-900/60 p-4 rounded-2xl border border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                      <Reply className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Need to respond to this message?</div>
                      <div className="text-[10px] font-mono text-slate-400">
                        Dispatch response through {selectedMessage.toEmail}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleOpenReply}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    Compose Reply
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Luxury Empty State */
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-slate-400 space-y-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-teal-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative w-16 h-16 rounded-3xl bg-[#090F1F] border border-white/10 flex items-center justify-center text-amber-300 shadow-2xl">
                  <Mail className="w-8 h-8" />
                </div>
              </div>
              <div className="max-w-sm space-y-1.5">
                <h3 className="text-base font-bold text-white tracking-wide">
                  Select an email to view full details
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Pick a message from the feed on the left to inspect customer orders, quotations, and general inquiries.
                </p>
              </div>
              <button
                onClick={() => handleOpenCompose()}
                className="mt-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition shadow-sm"
              >
                <PenSquare className="w-3.5 h-3.5" />
                <span>Or compose a new outbound email</span>
              </button>
            </div>
          )}
        </section>
      </div>

      {/* ========================================================= */}
      {/* MODAL 1: Move to Trash Confirmation Modal                 */}
      {/* ========================================================= */}
      {showTrashConfirm && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0A0F1F] border border-white/10 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-inner">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Move Email to Trash?</h3>
                <p className="text-xs text-slate-400 font-mono truncate max-w-xs">
                  Subject: {selectedMessage.subject || '(No Subject)'}
                </p>
              </div>
            </div>

            {trashError && (
              <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{trashError}</span>
              </div>
            )}

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/70 p-4 rounded-2xl border border-white/[0.06]">
              This moves the message to your Trash Archive. Your original Cloudflare and Gmail backup copies remain 100% safe. You can restore it anytime.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowTrashConfirm(false)}
                disabled={isTrashing}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-slate-300 rounded-xl text-xs font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleMoveToTrash}
                disabled={isTrashing}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-950 flex items-center gap-2 transition"
              >
                {isTrashing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Moving to Trash...</span>
                  </>
                ) : (
                  <span>Confirm Move to Trash</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: Master Reply Composer Modal                      */}
      {/* ========================================================= */}
      {showReplyModal && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0A0F1F] border border-white/10 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-5 border-b border-white/[0.07] bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                  <Reply className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Reply to Inbound Email</span>
                    <span className="text-[10px] font-mono text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-600/40">
                      Brevo SMTP Dispatch
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    To: {selectedMessage.replyTo || selectedMessage.fromEmail}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowReplyModal(false)}
                disabled={sendingReply}
                className="text-slate-400 hover:text-white text-xs px-2.5 py-1.5 rounded-xl hover:bg-slate-800 transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSendReply} className="p-6 overflow-y-auto space-y-4 text-xs">
              {/* Alert Banners */}
              {replyError && (
                <div className="p-3.5 rounded-2xl bg-rose-950/50 border border-rose-800 text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{replyError}</span>
                </div>
              )}
              {replySuccess && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{replySuccess}</span>
                </div>
              )}

              {/* Locked Header Identities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                    FROM DESK (MATCHED SENDER)
                  </label>
                  <div className="px-3.5 py-2.5 bg-slate-950 border border-white/[0.08] rounded-2xl font-mono text-emerald-400 text-xs flex items-center justify-between shadow-inner">
                    <span className="truncate">{selectedMessage.toEmail}</span>
                    <span className="text-[9px] text-slate-500 font-sans shrink-0 uppercase font-bold">
                      Locked
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                    RECIPIENT (TO)
                  </label>
                  <div className="px-3.5 py-2.5 bg-slate-950 border border-white/[0.08] rounded-2xl font-mono text-white text-xs flex items-center justify-between shadow-inner">
                    <span className="truncate">{selectedMessage.replyTo || selectedMessage.fromEmail}</span>
                    <span className="text-[9px] text-slate-500 font-sans shrink-0 uppercase font-bold">
                      Original
                    </span>
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={replySubject}
                  onChange={(e) => setReplySubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-white/[0.08] rounded-2xl text-white focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 font-sans text-xs transition-all"
                  required
                />
              </div>

              {/* Reply Body */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                  MESSAGE BODY
                </label>
                <textarea
                  rows={7}
                  value={replyBody}
                  onChange={(e) => setReplyBody(e.target.value)}
                  placeholder="Type your official response here... (Barakah Al Rizq signature and original context will be automatically included)"
                  className="w-full px-4 py-3 bg-slate-950 border border-white/[0.08] rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 font-sans text-xs resize-none transition-all leading-relaxed"
                  required
                />
              </div>

              {/* Quoted Original Message */}
              <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-white/[0.06] space-y-1">
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                  QUOTED CONTEXT
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-3 font-sans">
                  On {new Date(selectedMessage.receivedAt).toUTCString()}, {selectedMessage.fromName || selectedMessage.fromEmail} wrote:
                  <br />
                  {selectedMessage.textBody || selectedMessage.previewText}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowReplyModal(false)}
                  disabled={sendingReply}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sendingReply}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-950 flex items-center gap-2 transition"
                >
                  {sendingReply ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Official Reply</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 3: Master Compose New Email Modal                   */}
      {/* ========================================================= */}
      {showComposeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0A0F1F] border border-white/10 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-5 border-b border-white/[0.07] bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                  <PenSquare className="w-5 h-5 text-amber-200" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Compose New Email</span>
                    <span className="text-[10px] font-mono text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-600/40">
                      Brevo SMTP Outbound
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Send official email to any client, partner, or supplier
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowComposeModal(false)}
                disabled={sendingCompose}
                className="text-slate-400 hover:text-white text-xs px-2.5 py-1.5 rounded-xl hover:bg-slate-800 transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSendCompose} className="p-6 overflow-y-auto space-y-4 text-xs">
              {/* Alert Banners */}
              {composeError && (
                <div className="p-3.5 rounded-2xl bg-rose-950/50 border border-rose-800 text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{composeError}</span>
                </div>
              )}
              {composeSuccess && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{composeSuccess}</span>
                </div>
              )}

              {/* FROM (Sender Desk Selector) */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                  FROM DESK (OFFICIAL SENDER)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(['orders', 'sales', 'info', 'habeeb'] as InboxMailbox[]).map((boxKey) => {
                    const meta = MAILBOX_META[boxKey];
                    const isSelected = composeFrom === boxKey;
                    const IconComponent = meta.icon;
                    return (
                      <button
                        type="button"
                        key={boxKey}
                        onClick={() => setComposeFrom(boxKey)}
                        className={`p-2.5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-emerald-950/60 border-emerald-500/80 text-white shadow-md ring-1 ring-emerald-500/40'
                            : 'bg-slate-950/80 border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 font-semibold text-[11px] truncate text-white">
                          <IconComponent className={`w-3.5 h-3.5 ${meta.color}`} />
                          <span className="truncate">{meta.label}</span>
                        </div>
                        <div className="text-[9.5px] font-mono text-slate-400 truncate mt-1">
                          {boxKey}@
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TO & RECIPIENT NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                    TO EMAIL ADDRESS <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={composeTo}
                    onChange={(e) => setComposeTo(e.target.value)}
                    placeholder="e.g. client@gmail.com, buyer@hypermarket.ae"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-white/[0.08] rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 font-mono text-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                    RECIPIENT NAME (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={composeName}
                    onChange={(e) => setComposeName(e.target.value)}
                    placeholder="e.g. Mr. Tariq Al Marzooqi"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-white/[0.08] rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 font-sans text-xs transition-all"
                  />
                </div>
              </div>

              {/* CC & SUBJECT */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                    SUBJECT <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={composeSubject}
                    onChange={(e) => setComposeSubject(e.target.value)}
                    placeholder="e.g. Commercial Wholesale Produce Offer & Specifications"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-white/[0.08] rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 font-sans text-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                    CC (OPTIONAL)
                  </label>
                  <input
                    type="email"
                    value={composeCc}
                    onChange={(e) => setComposeCc(e.target.value)}
                    placeholder="accounts@client.ae"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-white/[0.08] rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 font-mono text-xs transition-all"
                  />
                </div>
              </div>

              {/* MESSAGE BODY */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1.5">
                  EMAIL MESSAGE BODY <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  rows={8}
                  required
                  value={composeBody}
                  onChange={(e) => setComposeBody(e.target.value)}
                  placeholder="Type your official email message here...

(The official UAE Barakah Al Rizq signature, commercial contact numbers, and trade license details will be attached automatically.)"
                  className="w-full px-4 py-3 bg-slate-950 border border-white/[0.08] rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 font-sans text-xs resize-none transition-all leading-relaxed"
                />
              </div>

              {/* Signature Preview */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-white/[0.06] space-y-1.5">
                <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase flex items-center justify-between">
                  <span>ATTACHED OFFICIAL UAE SIGNATURE</span>
                  <span className="text-slate-500 font-normal">Auto-Appended</span>
                </div>
                <div className="text-[11px] text-slate-300 font-sans leading-relaxed">
                  <strong>BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C</strong> &bull; {MAILBOX_META[composeFrom].label}
                  <br />
                  <span className="text-slate-400">
                    Stand 19, Fresh Produce Block B, Al Aweer Central Market, Ras Al Khor, Dubai, UAE
                  </span>
                  <br />
                  <span className="text-emerald-400 font-medium">
                    Commercial Desk: +971 56 944 8850 (Direct / WhatsApp)
                  </span>
                  <br />
                  <span className="text-slate-400 text-[10.5px]">
                    Sales Line: +971 56 953 8741 &bull; Landline Office: +971 4 576 4169
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowComposeModal(false)}
                  disabled={sendingCompose}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sendingCompose}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-950 flex items-center gap-2 transition"
                >
                  {sendingCompose ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Dispatching Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Official Email</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
