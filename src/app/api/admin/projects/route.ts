import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { TOP_20_FEATURED_RANKS, getAllProjects } from '@/data/siteData';

export async function GET() {
  const content = db.homepage.get();
  const allProjects = getAllProjects();
  
  // Default top 20 IDs ordered by initial rank if not yet configured (deduplicated)
  const seenIds = new Set<string>();
  const defaultTop20: string[] = [];
  const sortedFeatured = allProjects
    .filter((p) => p.featured && p.featuredRank !== undefined)
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999));

  for (const p of sortedFeatured) {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      defaultTop20.push(p.id);
    }
    if (defaultTop20.length === 20) break;
  }

  const selectedProjectIds = content?.selectedProjectIds && content.selectedProjectIds.length > 0
    ? content.selectedProjectIds
    : defaultTop20;

  return NextResponse.json({
    projects: allProjects,
    selectedProjectIds,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (body.selectedProjectIds && Array.isArray(body.selectedProjectIds)) {
      // Save top 20 rankings to homepage database
      const cleanIds = body.selectedProjectIds.slice(0, 20);
      db.homepage.update({ selectedProjectIds: cleanIds });
      
      return NextResponse.json({
        success: true,
        selectedProjectIds: cleanIds,
        message: 'Top 20 Project rankings saved successfully.',
      });
    }

    return NextResponse.json({ error: 'Invalid selectedProjectIds array' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
