'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Eye, 
  Link as LinkIcon, 
  Image as ImageIcon,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

const PRESET_TEMPLATES = [
  {
    name: 'Flagship Launch Announcement',
    text: `Proud to unveil WebStudio AE — engineered from the ground up for UAE enterprises and global scale. 🇦🇪

We build bespoke Next.js 16 web platforms, sub-50ms e-commerce engines, and enterprise OpenAI RAG agents that redefine digital performance in Dubai and beyond.

Explore our latest live client architectures and interactive project matrix:
https://webstudioae.com

#WebEngineering #Nextjs #DubaiTech #UAEBusiness #FinTech #FullStack #SoftwareArchitecture`,
    url: 'https://webstudioae.com',
    title: 'WebStudio AE — Flagship Web Engineering & Digital Architecture',
    description: 'Bespoke Next.js 16 Web Platforms & AI Solutions for UAE & Global Leaders.',
  },
  {
    name: 'Flame & Flour Case Study',
    text: `Case Study: Flame & Flour Artisan Bakery POS 🥖

A look inside our high-velocity Next.js 16 e-commerce platform built for high-throughput Dubai bakery logistics:
• Instant AED Checkout & Apple Pay integration
• Sub-50ms TTFB across GCC Edge nodes
• Real-time kitchen inventory sync

Full interactive case study:
https://webstudioae.com/work/flame-and-flour

#ECommerce #Nextjs #WebDevelopment #UXDesign #Dubai`,
    url: 'https://webstudioae.com/work/flame-and-flour',
    title: 'Flame & Flour — Artisan Bakery POS & Omnichannel Commerce',
    description: 'Flagship Next.js 16 e-commerce architecture with instant AED settlement.',
  },
  {
    name: 'Nexara Logistics Blueprint',
    text: `Next-Gen Air Freight: Nexara Logistics Platform ✈️🌐

Engineered an enterprise autonomous dispatch matrix with live telemetry tracking, route optimization, and multi-tenant security.

Check out the full interactive blueprint:
https://webstudioae.com/work/nexara

#AI #Logistics #EnterpriseArchitecture #Nextjs #Dubai`,
    url: 'https://webstudioae.com/work/nexara',
    title: 'Nexara Logistics — Autonomous Air Freight Telemetry',
    description: 'Autonomous cargo telemetry and enterprise dispatch matrix.',
  },
];

export default function LinkedInAdminPage() {
  const [status, setStatus] = useState<{
    connected: boolean;
    hasClientConfigured: boolean;
    profile?: { name: string; email?: string; picture?: string; urn?: string } | null;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [commentary, setCommentary] = useState(PRESET_TEMPLATES[0].text);
  const [linkUrl, setLinkUrl] = useState(PRESET_TEMPLATES[0].url);
  const [linkTitle, setLinkTitle] = useState(PRESET_TEMPLATES[0].title);
  const [linkDescription, setLinkDescription] = useState(PRESET_TEMPLATES[0].description);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [targetAuthor, setTargetAuthor] = useState<'organization' | 'personal'>('organization');

  const [urlStatus, setUrlStatus] = useState<{ success?: string; error?: string } | null>(null);

  const fetchStatus = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/linkedin/status');
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      console.error('Error fetching LinkedIn status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const auth = params.get('auth');
      const error = params.get('error');

      if (auth === 'success') {
        setUrlStatus({ success: 'LinkedIn OAuth authorization successful! Access token updated and verified.' });
      } else if (error) {
        setUrlStatus({ error: decodeURIComponent(error) });
      }
    }
  }, []);

  const handleApplyTemplate = (idx: number) => {
    const tpl = PRESET_TEMPLATES[idx];
    setCommentary(tpl.text);
    setLinkUrl(tpl.url);
    setLinkTitle(tpl.title);
    setLinkDescription(tpl.description);
  };

  const handlePublish = async () => {
    setShowConfirmModal(false);
    setIsPublishing(true);
    setPublishResult(null);

    const authorUrn = targetAuthor === 'organization'
      ? 'urn:li:organization:143603354'
      : (status?.profile?.urn || 'urn:li:person:PKQEaB2iUM');

    try {
      const res = await fetch('/api/admin/linkedin/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          commentary,
          linkUrl: linkUrl || undefined,
          linkTitle: linkTitle || undefined,
          linkDescription: linkDescription || undefined,
          authorUrn,
          confirm: true, // Strict manual approval flag
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setPublishResult({
          success: true,
          message: `Post successfully published to LinkedIn as ${targetAuthor === 'organization' ? 'Company Page (WebStudio AE)' : 'Personal Profile'}! Post ID: ${data.postId || 'OK'}`,
        });
      } else {
        setPublishResult({
          success: false,
          error: data.error || 'Failed to publish to LinkedIn.',
        });
      }
    } catch (err: any) {
      setPublishResult({
        success: false,
        error: err.message,
      });
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              LinkedIn Marketing Studio
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
              MANUAL APPROVAL ONLY
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Compose, preview, and manually publish marketing posts to your connected LinkedIn profile.
          </p>
        </div>

        {/* Reconnect / Auth Button */}
        <div className="flex items-center gap-3">
          <a
            href="/api/admin/linkedin/auth"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077B5] hover:bg-[#006097] text-white text-xs font-bold font-mono transition-all shadow-lg hover:shadow-cyan-500/20"
          >
            <Globe className="w-4 h-4" />
            <span>{status?.connected ? 'Reconnect LinkedIn' : 'Connect LinkedIn'}</span>
          </a>
        </div>
      </div>

      {/* OAuth Banner Feedback */}
      {urlStatus && (
        <div
          className={`p-4 rounded-2xl border text-xs font-mono flex items-center justify-between gap-3 ${
            urlStatus.success
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {urlStatus.success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            )}
            <span>{urlStatus.success || urlStatus.error}</span>
          </div>
          <button
            onClick={() => setUrlStatus(null)}
            className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded bg-white/5 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Account Status Card */}
      <div className="p-5 rounded-2xl bg-[#0F141C] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0077B5] font-bold">
            in
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">
                {status?.profile?.name || 'LinkedIn Account'}
              </span>
              {status?.connected ? (
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                  <AlertCircle className="w-3 h-3" /> Ready to Authorize
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              OAuth 2.0 Credentials configured in .env.local (Protected against token leakage)
            </p>
          </div>
        </div>

        <button
          onClick={fetchStatus}
          disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-xs font-mono text-gray-300 self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Status</span>
        </button>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Post Composer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-3xl bg-[#0F141C] border border-white/10 space-y-5">
            {/* Template Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                Quick Preset Templates
              </label>
              <div className="flex flex-wrap gap-2">
                {PRESET_TEMPLATES.map((tpl, i) => (
                  <button
                    key={tpl.name}
                    type="button"
                    onClick={() => handleApplyTemplate(i)}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.06] text-xs text-gray-300 font-mono transition-colors cursor-pointer"
                  >
                    {tpl.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Author Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                Publishing Destination
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTargetAuthor('organization')}
                  className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer ${
                    targetAuthor === 'organization'
                      ? 'bg-amber-500/10 border-amber-500/50 text-white'
                      : 'bg-[#07090E] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono text-amber-400">🏢 Company Page (Official)</span>
                    <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono">143603354</span>
                  </div>
                  <p className="text-xs font-semibold text-white">WebStudio AE</p>
                  <p className="text-[10px] text-gray-400">urn:li:organization:143603354</p>
                </button>

                <button
                  type="button"
                  onClick={() => setTargetAuthor('personal')}
                  className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer ${
                    targetAuthor === 'personal'
                      ? 'bg-amber-500/10 border-amber-500/50 text-white'
                      : 'bg-[#07090E] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono text-cyan-400">👤 Personal Profile</span>
                    <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono">Member</span>
                  </div>
                  <p className="text-xs font-semibold text-white">{status?.profile?.name || 'Md Jahedul Islam'}</p>
                  <p className="text-[10px] text-gray-400">{status?.profile?.urn || 'urn:li:person:PKQEaB2iUM'}</p>
                </button>
              </div>
            </div>

            {/* Commentary Editor */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                Post Content & Commentary
              </label>
              <textarea
                rows={9}
                value={commentary}
                onChange={(e) => setCommentary(e.target.value)}
                placeholder="Write your LinkedIn post here..."
                className="w-full p-4 rounded-2xl bg-[#07090E] border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400/60 font-sans leading-relaxed resize-y"
              />
            </div>

            {/* Attached URL */}
            <div className="space-y-3">
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                Attached Web Link Preview
              </label>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#07090E] border border-white/10">
                <LinkIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://webstudioae.com"
                  className="w-full bg-transparent text-xs text-white focus:outline-none font-mono"
                />
              </div>

              {linkUrl && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">
                      Link Title
                    </label>
                    <input
                      type="text"
                      value={linkTitle}
                      onChange={(e) => setLinkTitle(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#07090E] border border-white/10 text-xs text-white focus:outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">
                      Link Description
                    </label>
                    <input
                      type="text"
                      value={linkDescription}
                      onChange={(e) => setLinkDescription(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#07090E] border border-white/10 text-xs text-white focus:outline-none font-mono"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Publishing Result Alert */}
            {publishResult && (
              <div
                className={`p-4 rounded-2xl border text-xs font-mono ${
                  publishResult.success
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-300'
                }`}
              >
                {publishResult.success ? publishResult.message : `Error: ${publishResult.error}`}
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Requires manual confirmation</span>
              </div>

              <button
                type="button"
                onClick={() => setShowConfirmModal(true)}
                disabled={!commentary.trim() || isPublishing}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-xs font-mono tracking-wider uppercase transition-all shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Review & Publish</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Exact LinkedIn Live Card Preview */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Exact LinkedIn Feed Preview
            </span>
            <span className="text-[10px] font-mono text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Live Mockup
            </span>
          </div>

          {/* LinkedIn Simulated Post Card */}
          <div className="bg-[#1B1F23] border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl text-left font-sans">
            {/* Author Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center font-bold text-black text-sm shrink-0">
                WA
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white hover:underline cursor-pointer">
                    {status?.profile?.name || 'WebStudio AE'}
                  </span>
                  <span className="text-xs text-gray-400">• 1st</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-tight">
                  Flagship Web Engineering & Digital Architecture · UAE
                </p>
                <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-0.5">
                  <span>Just now</span>
                  <span>•</span>
                  <Globe className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Post Text */}
            <div className="text-xs text-gray-200 whitespace-pre-wrap leading-relaxed mb-3 break-words font-sans">
              {commentary || 'Your post content will appear here in real-time.'}
            </div>

            {/* Link Preview Embed */}
            {linkUrl && (
              <div className="rounded-xl border border-white/15 overflow-hidden bg-[#111418] mb-3">
                <div className="h-32 bg-gradient-to-br from-neutral-900 via-amber-950/40 to-neutral-950 flex items-center justify-center p-4 text-center">
                  <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                    WEBSTUDIOAE.COM
                  </span>
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block truncate">
                    {linkUrl.replace('https://', '')}
                  </span>
                  <h4 className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                    {linkTitle || 'WebStudio AE — Flagship Web Engineering'}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-2">
                    {linkDescription || 'Bespoke Next.js 16 Web Platforms for UAE Leaders.'}
                  </p>
                </div>
              </div>
            )}

            {/* LinkedIn Footer Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="hover:text-white cursor-pointer">👍 Like</span>
              <span className="hover:text-white cursor-pointer">💬 Comment</span>
              <span className="hover:text-white cursor-pointer">🔁 Repost</span>
              <span className="hover:text-white cursor-pointer">🚀 Send</span>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Approval Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0D13] border border-amber-500/40 rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-mono">
                MANUAL APPROVAL REQUIRED
              </h3>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Are you sure you want to publish this post live to your connected LinkedIn profile? This action will immediately dispatch to LinkedIn.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-gray-400 max-h-36 overflow-y-auto font-mono whitespace-pre-wrap">
              {commentary}
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-mono text-gray-300 transition-colors cursor-pointer"
              >
                Cancel (Do Not Publish)
              </button>

              <button
                type="button"
                onClick={handlePublish}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs transition-colors cursor-pointer shadow-lg hover:shadow-amber-500/25"
              >
                Yes, Approve & Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
