'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
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
  Building,
  ArrowLeft,
  Paperclip,
  Reply,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff,
  Sparkles,
  Tag,
  Briefcase,
  Layers,
  ChevronRight,
  ExternalLink,
  Plus,
  PenSquare,
} from 'lucide-react';
import { InboxMessage, InboxMailbox, InboxMessageStatus } from '@/lib/db/types';

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
  { label: string; email: string; color: string; badgeBg: string; border: string; desc: string }
> = {
  info: {
    label: 'Info Desk',
    email: 'info@barakahalrizquae.com',
    color: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    border: 'border-cyan-500/40',
    desc: 'General Inquiries & Corporate Desk',
  },
  sales: {
    label: 'Sales Desk',
    email: 'sales@barakahalrizquae.com',
    color: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    border: 'border-emerald-500/40',
    desc: 'Quotations, Container Feeds & Spot RFQs',
  },
  orders: {
    label: 'Orders Desk',
    email: 'orders@barakahalrizquae.com',
    color: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    border: 'border-amber-500/40',
    desc: 'Website Orders, Pickup & Fulfillment',
  },
  habeeb: {
    label: 'Habeeb Khan',
    email: 'habeeb@barakahalrizquae.com',
    color: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    border: 'border-purple-500/40',
    desc: 'Managing Director Direct Executive Desk',
  },
};

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
  const fetchInbox = useCallback(async (isSilent = false) => {
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
        // Update selected message if already selected
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
  }, [activeFolder, statusFilter, searchQuery, selectedMessage]);

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
            prev.map((item) => (item.id === msg.id ? { ...item, status: 'READ', readAt: new Date().toISOString() } : item))
          );
          setSelectedMessage((prev) => (prev && prev.id === msg.id ? { ...prev, status: 'READ', readAt: new Date().toISOString() } : prev));
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
        // Remove from list if in active inbox view
        if (activeFolder !== 'TRASH') {
          setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id && m.messageId !== selectedMessage.messageId));
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
            prev.map((item) => (item.id === selectedMessage.id ? { ...item, status: 'READ', deletedAt: undefined } : item))
          );
          setSelectedMessage((prev) => (prev ? { ...prev, status: 'READ', deletedAt: undefined } : null));
        }
      }
    } catch (err) {
      console.error('Failed to restore message', err);
    }
  };

  // Open Reply Modal with auto-populated context
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

      // Update local message state to REPLIED
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

      setTimeout(() => {
        fetchInbox(true);
      }, 500);

      setTimeout(() => {
        setShowComposeModal(false);
      }, 1600);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error sending email';
      setComposeError(msg);
    } finally {
      setSendingCompose(false);
    }
  };

  // Format Date cleanly
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
    <div className="space-y-4 max-w-[1600px] mx-auto pb-10">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-[#0F172A] border border-slate-800/90 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-amber-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black text-white tracking-wide">
                Executive Email Terminal
              </h1>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Brevo Verified
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              4 Official Mailboxes &bull; Stand 19 Al Aweer Central Market, Dubai
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => fetchInbox()}
            disabled={loading}
            className="px-3 py-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"
            title="Refresh Inbox"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            <span>Sync</span>
          </button>
        </div>
      </div>

      {/* Main 3-Column Inbox Grid */}
      <div className="bg-[#0F172A] border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden min-h-[720px] flex flex-col md:flex-row">
        {/* ========================================================= */}
        {/* COLUMN 1: Left Mailbox / Folder Sidebar */}
        {/* ========================================================= */}
        <aside className="w-full md:w-64 lg:w-72 bg-[#0B1120] border-b md:border-b-0 md:border-r border-slate-800/90 p-3.5 flex flex-col justify-between shrink-0">
          <div className="space-y-4">
            {/* Primary Action: Compose New Email */}
            <button
              onClick={() => handleOpenCompose()}
              className="w-full py-2.5 px-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 border border-emerald-400/40 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <PenSquare className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>Compose New Email</span>
            </button>

            {/* Folders List */}
            <div>
              <div className="px-2.5 py-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>INBOX CHANNELS</span>
                <span className="text-emerald-400">{stats.unread} unread</span>
              </div>

              <div className="space-y-1 mt-2">
                {/* ALL INBOX */}
                <button
                  onClick={() => {
                    setActiveFolder('ALL');
                    setSelectedMessage(null);
                    setMobileView('list');
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeFolder === 'ALL'
                      ? 'bg-gradient-to-r from-emerald-500/20 to-transparent text-emerald-300 font-bold border-l-2 border-emerald-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Inbox className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">All Inboxes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {stats.unread > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {stats.unread}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-slate-500">{stats.total}</span>
                  </div>
                </button>

                {/* 4 OFFICIAL MAILBOXES */}
                {(['info', 'sales', 'orders', 'habeeb'] as InboxMailbox[]).map((boxKey) => {
                  const meta = MAILBOX_META[boxKey];
                  const boxStat = stats.byMailbox?.[boxKey] || { total: 0, unread: 0 };
                  const isActive = activeFolder === boxKey;

                  return (
                    <button
                      key={boxKey}
                      onClick={() => {
                        setActiveFolder(boxKey);
                        setSelectedMessage(null);
                        setMobileView('list');
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${
                        isActive
                          ? `bg-slate-900/90 text-white font-bold border-l-2 ${meta.border} shadow-sm`
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`w-2 h-2 rounded-full ${meta.color.replace('text-', 'bg-')}`} />
                        <div className="text-left min-w-0">
                          <div className="truncate font-semibold">{meta.label}</div>
                          <div className="text-[10px] font-mono text-slate-400 truncate">{boxKey}@</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {boxStat.unread > 0 && (
                          <span className="px-1.5 py-0.2 rounded-full text-[9.5px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {boxStat.unread}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-slate-500">{boxStat.total}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TRASH FOLDER */}
            <div className="pt-2 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setActiveFolder('TRASH');
                  setSelectedMessage(null);
                  setMobileView('list');
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                  activeFolder === 'TRASH'
                    ? 'bg-rose-950/40 text-rose-300 font-bold border-l-2 border-rose-500'
                    : 'text-slate-400 hover:text-rose-300 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                  <span>Trash</span>
                </div>
                {stats.trash > 0 && (
                  <span className="text-[10px] font-mono text-rose-400 font-semibold">{stats.trash}</span>
                )}
              </button>
            </div>
          </div>

          {/* Mailbox Status Card */}
          <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1.5">
            <div className="flex items-center justify-between text-slate-300 font-bold">
              <span>ACTIVE DOMAIN</span>
              <span className="text-emerald-400 text-[10px]">LIVE</span>
            </div>
            <div className="text-slate-300 font-semibold truncate">barakahalrizquae.com</div>
            <div className="text-[9.5px] text-slate-400">
              Cloudflare Inbound &bull; Brevo Outbound
            </div>
          </div>
        </aside>

        {/* ========================================================= */}
        {/* COLUMN 2: Center Email Message List */}
        {/* ========================================================= */}
        <section
          className={`w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-slate-800/90 flex flex-col bg-[#0D1322] shrink-0 ${
            mobileView === 'detail' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {/* List Search & Filter Header */}
          <div className="p-3 border-b border-slate-800 space-y-2.5 bg-slate-900/40">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sender, subject, text..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Status Tabs (All / Unread / Read / Replied) */}
            {activeFolder !== 'TRASH' && (
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800/80 text-[10.5px] font-mono">
                {(['ALL', 'UNREAD', 'READ', 'REPLIED'] as StatusFilter[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setStatusFilter(tab)}
                    className={`py-1 text-center rounded-lg transition-all ${
                      statusFilter === tab
                        ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-800/60 custom-scrollbar max-h-[640px]">
            {loading ? (
              <div className="p-12 text-center text-slate-400 space-y-3">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto text-emerald-400" />
                <p className="text-xs font-mono">Loading inbox messages...</p>
              </div>
            ) : error ? (
              <div className="p-6 text-center space-y-2">
                <AlertTriangle className="w-6 h-6 text-rose-400 mx-auto" />
                <p className="text-xs text-rose-300 font-sans">{error}</p>
                <button
                  onClick={() => fetchInbox()}
                  className="mt-2 px-3 py-1 bg-slate-800 text-xs text-white rounded-lg hover:bg-slate-700"
                >
                  Retry
                </button>
              </div>
            ) : messages.length === 0 ? (
              <div className="p-12 text-center text-slate-400 space-y-2">
                <Inbox className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-mono">
                  {activeFolder === 'TRASH'
                    ? 'Trash is empty.'
                    : searchQuery
                    ? 'No emails match your search query.'
                    : 'No emails found in this mailbox.'}
                </p>
              </div>
            ) : (
              messages.map((msg) => {
                const isSelected = selectedMessage?.id === msg.id;
                const isUnread = msg.status === 'UNREAD';
                const meta = MAILBOX_META[msg.mailbox] || MAILBOX_META.info;

                return (
                  <button
                    key={msg.id}
                    onClick={() => handleSelectMessage(msg)}
                    className={`w-full text-left p-3.5 transition-all block relative ${
                      isSelected
                        ? 'bg-slate-800/90 border-l-4 border-emerald-400'
                        : isUnread
                        ? 'bg-slate-900/90 hover:bg-slate-800/60'
                        : 'hover:bg-slate-900/50 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {/* Top Row: Sender & Date */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 min-w-0">
                        {isUnread && (
                          <span
                            className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                            title="Unread"
                          />
                        )}
                        <span
                          className={`text-xs truncate ${
                            isUnread ? 'font-bold text-white' : 'font-medium text-slate-300'
                          }`}
                        >
                          {msg.fromName || msg.fromEmail}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0">
                        {formatDate(msg.receivedAt)}
                      </span>
                    </div>

                    {/* Subject */}
                    <div
                      className={`text-xs truncate mb-1 ${
                        isUnread ? 'font-bold text-emerald-200' : 'text-slate-300'
                      }`}
                    >
                      {msg.subject || '(No Subject)'}
                    </div>

                    {/* Preview snippet */}
                    <div className="text-[11px] text-slate-400 line-clamp-1 mb-2 font-sans">
                      {msg.previewText || msg.textBody || 'No preview available'}
                    </div>

                    {/* Bottom Metadata Badges */}
                    <div className="flex items-center justify-between text-[9.5px] font-mono">
                      <span className={`px-2 py-0.5 rounded-full border ${meta.badgeBg}`}>
                        {meta.label}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {msg.hasAttachments && (
                          <span className="text-slate-400 flex items-center gap-0.5" title="Has attachments">
                            <Paperclip className="w-3 h-3" />
                            <span>{msg.attachmentsCount || 1}</span>
                          </span>
                        )}
                        {msg.status === 'REPLIED' && (
                          <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 flex items-center gap-1">
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
        {/* COLUMN 3: Right Selected Email Detail & Reader */}
        {/* ========================================================= */}
        <section
          className={`flex-1 flex flex-col bg-[#0F172A] ${
            mobileView === 'list' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {selectedMessage ? (
            <div className="flex-1 flex flex-col h-full">
              {/* Detail Toolbar */}
              <div className="p-3.5 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* Mobile Back Button */}
                  <button
                    onClick={() => setMobileView('list')}
                    className="md:hidden p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
                    title="Back to email list"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  {/* Reply Button */}
                  <button
                    onClick={handleOpenReply}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-sm shadow-emerald-950"
                  >
                    <Reply className="w-3.5 h-3.5" />
                    <span>Reply</span>
                  </button>

                  {/* Toggle Read/Unread */}
                  {selectedMessage.status === 'UNREAD' ? (
                    <button
                      onClick={() => handleToggleReadStatus('READ')}
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono flex items-center gap-1.5 transition"
                      title="Mark as Read"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden sm:inline">Mark Read</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggleReadStatus('UNREAD')}
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono flex items-center gap-1.5 transition"
                      title="Mark as Unread"
                    >
                      <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">Mark Unread</span>
                    </button>
                  )}
                </div>

                {/* Trash / Restore Actions */}
                <div className="flex items-center gap-2">
                  {selectedMessage.status === 'TRASH' ? (
                    <button
                      onClick={handleRestoreMessage}
                      className="px-3 py-1.5 bg-emerald-950 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restore to Inbox</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowTrashConfirm(true)}
                      className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition"
                      title="Move to Trash"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Email Content Header */}
              <div className="p-5 border-b border-slate-800/80 space-y-3 bg-slate-900/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-wide leading-snug">
                    {selectedMessage.subject || '(No Subject)'}
                  </h2>
                  <span className="text-xs font-mono text-slate-400 shrink-0">
                    {new Date(selectedMessage.receivedAt).toLocaleString()}
                  </span>
                </div>

                {/* Sender & Recipient Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">FROM</div>
                    <div className="text-white font-medium flex items-center gap-1.5 truncate">
                      <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-semibold">{selectedMessage.fromName || 'External Sender'}</span>
                      <span className="text-slate-400 font-mono text-[11px]">&lt;{selectedMessage.fromEmail}&gt;</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">TO (DESTINATION)</div>
                    <div className="text-amber-300 font-mono text-[11px] flex items-center gap-1.5 truncate">
                      <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{selectedMessage.toEmail}</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[9px] text-slate-300 uppercase">
                        {selectedMessage.mailbox}
                      </span>
                    </div>
                  </div>

                  {selectedMessage.replyTo && selectedMessage.replyTo !== selectedMessage.fromEmail && (
                    <div className="sm:col-span-2 pt-1 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono">
                      <span className="text-slate-400">Reply-To:</span> {selectedMessage.replyTo}
                    </div>
                  )}
                </div>
              </div>

              {/* Email Body Container (Safe Sanitized HTML / Plain-text) */}
              <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-slate-950/40">
                {selectedMessage.htmlBody ? (
                  <div
                    className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed overflow-x-auto break-words"
                    dangerouslySetInnerHTML={{ __html: selectedMessage.htmlBody }}
                  />
                ) : (
                  <div className="whitespace-pre-wrap font-sans text-sm text-slate-200 leading-relaxed break-words">
                    {selectedMessage.textBody || selectedMessage.previewText || 'Empty email content.'}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-slate-400 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shadow-inner">
                <Mail className="w-7 h-7" />
              </div>
              <div className="max-w-xs space-y-1">
                <h3 className="text-sm font-bold text-slate-300">Select an email to view details</h3>
                <p className="text-xs text-slate-400 font-mono">
                  Pick a conversation from the left feed to inspect message content and reply.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* ========================================================= */}
      {/* MODAL 1: Move to Trash Confirmation Modal */}
      {/* ========================================================= */}
      {showTrashConfirm && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Move this email to Trash?</h3>
                <p className="text-xs text-slate-400 font-mono">
                  Subject: {selectedMessage.subject || '(No Subject)'}
                </p>
              </div>
            </div>

            {trashError && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{trashError}</span>
              </div>
            )}

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              This moves the message to your Admin Inbox Trash. Your original Gmail / Cloudflare copies remain completely untouched. You can restore it anytime.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowTrashConfirm(false)}
                disabled={isTrashing}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-slate-300 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleMoveToTrash}
                disabled={isTrashing}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-950 flex items-center gap-2"
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
      {/* MODAL 2: Professional Reply Composer Modal */}
      {/* ========================================================= */}
      {showReplyModal && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/70 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Reply className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Reply to Inbound Email</span>
                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.2 rounded-full bg-emerald-950/80 border border-emerald-600/40">
                      Brevo SMTP Dispatch
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono">
                    To: {selectedMessage.replyTo || selectedMessage.fromEmail}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowReplyModal(false)}
                disabled={sendingReply}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSendReply} className="p-5 overflow-y-auto space-y-4 text-xs">
              {/* Alert Banners */}
              {replyError && (
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{replyError}</span>
                </div>
              )}
              {replySuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{replySuccess}</span>
                </div>
              )}

              {/* Locked Header Identities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                    FROM (MATCHED BUSINESS DESK)
                  </label>
                  <div className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono text-emerald-400 text-xs flex items-center justify-between">
                    <span className="truncate">{selectedMessage.toEmail}</span>
                    <span className="text-[9px] text-slate-400 font-sans shrink-0">Locked</span>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                    RECIPIENT (TO)
                  </label>
                  <div className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono text-white text-xs flex items-center justify-between">
                    <span className="truncate">{selectedMessage.replyTo || selectedMessage.fromEmail}</span>
                    <span className="text-[9px] text-slate-400 font-sans shrink-0">Original</span>
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={replySubject}
                  onChange={(e) => setReplySubject(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 font-sans text-xs"
                  required
                />
              </div>

              {/* Reply Body */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                  MESSAGE BODY
                </label>
                <textarea
                  rows={7}
                  value={replyBody}
                  onChange={(e) => setReplyBody(e.target.value)}
                  placeholder="Type your official reply here... (Barakah Al Rizq signature and quoted context will be automatically attached)"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans text-xs resize-none"
                  required
                />
              </div>

              {/* Quoted Message Preview */}
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                  QUOTED ORIGINAL MESSAGE
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
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sendingReply}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-lg shadow-emerald-950 flex items-center gap-2"
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
      {/* MODAL 3: Compose New Email Modal (Send to Anyone)        */}
      {/* ========================================================= */}
      {showComposeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/70 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <PenSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Compose New Email</span>
                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/40">
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
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSendCompose} className="p-5 overflow-y-auto space-y-4 text-xs">
              {/* Alert Banners */}
              {composeError && (
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{composeError}</span>
                </div>
              )}
              {composeSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{composeSuccess}</span>
                </div>
              )}

              {/* FROM (Sender Desk Selector) */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                  FROM DESK (OFFICIAL SENDER)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['info', 'sales', 'orders', 'habeeb'] as InboxMailbox[]).map((boxKey) => {
                    const meta = MAILBOX_META[boxKey];
                    const isSelected = composeFrom === boxKey;
                    return (
                      <button
                        type="button"
                        key={boxKey}
                        onClick={() => setComposeFrom(boxKey)}
                        className={`p-2 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-emerald-950/50 border-emerald-500/80 text-white shadow-sm ring-1 ring-emerald-500/40'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-semibold text-[11px] truncate text-white">
                          <span className={`w-1.5 h-1.5 rounded-full ${meta.color.replace('text-', 'bg-')}`} />
                          <span className="truncate">{meta.label}</span>
                        </div>
                        <div className="text-[9.5px] font-mono text-slate-400 truncate mt-0.5">
                          {boxKey}@
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TO & RECIPIENT NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                    TO EMAIL ADDRESS <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={composeTo}
                    onChange={(e) => setComposeTo(e.target.value)}
                    placeholder="e.g. client@gmail.com, buyer@hypermarket.ae"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                    RECIPIENT NAME (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={composeName}
                    onChange={(e) => setComposeName(e.target.value)}
                    placeholder="e.g. Mr. Tariq Al Marzooqi"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans text-xs"
                  />
                </div>
              </div>

              {/* CC & SUBJECT */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                    SUBJECT <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={composeSubject}
                    onChange={(e) => setComposeSubject(e.target.value)}
                    placeholder="e.g. Commercial Trade Quotation & Supply Terms"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                    CC (OPTIONAL)
                  </label>
                  <input
                    type="email"
                    value={composeCc}
                    onChange={(e) => setComposeCc(e.target.value)}
                    placeholder="accounts@client.ae"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                  />
                </div>
              </div>

              {/* MESSAGE BODY */}
              <div>
                <label className="block text-slate-400 font-mono text-[10px] uppercase font-bold mb-1">
                  EMAIL MESSAGE BODY <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  rows={8}
                  required
                  value={composeBody}
                  onChange={(e) => setComposeBody(e.target.value)}
                  placeholder="Type your official email message here...

(The official UAE Barakah Al Rizq signature, commercial contact numbers, and trade license details will be attached automatically.)"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans text-xs resize-none"
                />
              </div>

              {/* Signature Preview */}
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1">
                <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase flex items-center justify-between">
                  <span>ATTACHED OFFICIAL UAE SIGNATURE</span>
                  <span className="text-slate-500 font-normal">Auto-Appended</span>
                </div>
                <div className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  <strong>BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C</strong> &bull; {MAILBOX_META[composeFrom].label}
                  <br />
                  <span className="text-slate-500">Stand 19, Fresh Produce Block B, Al Aweer Central Market, Ras Al Khor, Dubai, UAE</span>
                  <br />
                  <span className="text-slate-500">Commercial Desk: +971 56 944 8850 | WhatsApp Orders: +971 50 252 6750</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowComposeModal(false)}
                  disabled={sendingCompose}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sendingCompose}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-lg shadow-emerald-950 flex items-center gap-2"
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
