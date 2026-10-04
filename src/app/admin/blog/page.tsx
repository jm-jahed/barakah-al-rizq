'use client';
import React, { useEffect, useState } from 'react';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/admin/blog').then((r) => r.json()).then((d) => setPosts(d.posts || []));
  }, []);
  return (
    <div className="space-y-6 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-white">Insights & Blog CMS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <div key={p.id} className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <h3 className="text-lg font-bold text-white">{p.title}</h3>
            <p className="text-xs text-slate-400">{p.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
