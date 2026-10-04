import { NextRequest, NextResponse } from 'next/server';
import { LinkedInClient } from '@/lib/linkedin/client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { commentary, linkUrl, linkTitle, linkDescription, authorUrn, confirm } = body;

    // Strict safety check: Never publish without manual approval confirm flag
    if (!confirm) {
      return NextResponse.json({
        error: 'Manual approval required. Please set confirm: true to publish.',
      }, { status: 400 });
    }

    if (!commentary || typeof commentary !== 'string' || !commentary.trim()) {
      return NextResponse.json({
        error: 'Post commentary text cannot be empty.',
      }, { status: 400 });
    }

    const client = new LinkedInClient();
    const result = await client.publishPost({
      commentary: commentary.trim(),
      linkUrl: linkUrl?.trim(),
      linkTitle: linkTitle?.trim(),
      linkDescription: linkDescription?.trim(),
      authorUrn: authorUrn || process.env.LINKEDIN_ORG_URN || process.env.LINKEDIN_AUTHOR_URN,
    });

    if (!result.success) {
      return NextResponse.json({
        success: false,
        error: result.error,
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      postId: result.postId,
      message: 'Post successfully published to LinkedIn!',
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 });
  }
}
