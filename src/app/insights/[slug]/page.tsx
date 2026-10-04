import { Metadata } from 'next';
import { db } from '@/lib/db';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = db.blog.findBySlug(slug);
  return {
    title: post ? `${post.title} — WebStudioAE Insights` : 'Insight Article — WebStudioAE',
    description: post?.excerpt || 'Engineering insight by WebStudioAE',
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = db.blog.findBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#07090E] text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Article Not Found</h1>
          <Link href="/" className="text-amber-400 underline text-sm">Return to WebStudioAE Homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#07090E] text-slate-100 py-24">
      <article className="max-w-3xl mx-auto px-4 space-y-8">
        <Link href="/" className="text-xs font-mono text-amber-400 hover:underline">← Back to WebStudioAE</Link>
        <span className="text-xs font-mono text-amber-400 uppercase block">{post.category} • {post.author}</span>
        <h1 className="text-4xl font-extrabold text-white leading-tight">{post.title}</h1>
        <p className="text-slate-300 text-base leading-relaxed italic border-l-2 border-amber-500 pl-4">{post.excerpt}</p>
        <img src={post.coverImage} alt={post.title} className="w-full h-80 object-cover rounded-2xl border border-slate-800" />
        <div className="text-slate-300 text-sm leading-relaxed space-y-4 pt-4">{post.content}</div>
      </article>
    </main>
  );
}
