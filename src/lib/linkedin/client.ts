/**
 * LinkedIn Official API Client Library
 * Secure, zero-leakage integration for publishing to LinkedIn Personal Profile & Company Pages.
 */

export interface LinkedInProfile {
  sub: string;
  name: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  email?: string;
  urn: string;
}

export interface PublishPostPayload {
  commentary: string;
  authorUrn?: string;
  linkUrl?: string;
  linkTitle?: string;
  linkDescription?: string;
  imageUrn?: string;
  visibility?: 'PUBLIC' | 'CONNECTIONS';
}

export interface PublishPostResponse {
  success: boolean;
  postId?: string;
  urn?: string;
  error?: string;
}

export class LinkedInClient {
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;
  private accessToken?: string;

  constructor(options?: {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    accessToken?: string;
  }) {
    this.clientId = options?.clientId || process.env.LINKEDIN_CLIENT_ID || '';
    this.clientSecret = options?.clientSecret || process.env.LINKEDIN_CLIENT_SECRET || '';
    this.redirectUri = options?.redirectUri || process.env.LINKEDIN_REDIRECT_URI || 'http://localhost:3000/api/admin/linkedin/callback';
    this.accessToken = options?.accessToken || process.env.LINKEDIN_ACCESS_TOKEN || '';
  }

  /**
   * Generates LinkedIn OAuth 2.0 Authorization URL
   */
  getAuthUrl(state: string = 'webstudio_state', customScopes?: string[]): string {
    const defaultScopes = [
      'openid',
      'profile',
      'email',
      'w_member_social',
    ];

    const scopesToUse = customScopes || 
      (process.env.LINKEDIN_SCOPES ? process.env.LINKEDIN_SCOPES.split(' ') : defaultScopes);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      state,
      scope: scopesToUse.join(' '),
    });
    return `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`;
  }

  /**
   * Exchanges OAuth authorization code for an Access Token
   */
  async exchangeCodeForToken(code: string): Promise<{ accessToken: string; expiresIn: number }> {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
    });

    const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`LinkedIn token exchange failed (${response.status}): ${errText}`);
    }

    const data = await response.json();
    return {
      accessToken: data.access_token,
      expiresIn: data.expires_in,
    };
  }

  /**
   * Fetches the currently authenticated profile
   */
  async getProfile(): Promise<LinkedInProfile> {
    if (!this.accessToken) {
      throw new Error('No LinkedIn access token configured.');
    }

    const response = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to fetch LinkedIn profile: ${errText}`);
    }

    const data = await response.json();
    const sub = data.sub;
    return {
      sub,
      name: data.name || `${data.given_name || ''} ${data.family_name || ''}`.trim(),
      given_name: data.given_name,
      family_name: data.family_name,
      picture: data.picture,
      email: data.email,
      urn: `urn:li:person:${sub}`,
    };
  }

  /**
   * Initializes image upload and uploads image binary to LinkedIn
   */
  async uploadImage(imageBuffer: Buffer, mimeType: string = 'image/png'): Promise<string> {
    if (!this.accessToken) {
      throw new Error('No LinkedIn access token configured.');
    }

    const profile = await this.getProfile();
    const ownerUrn = profile.urn;

    // Step 1: Initialize image upload
    const initPayload = {
      initializeUploadRequest: {
        owner: ownerUrn,
      },
    };

    const initRes = await fetch('https://api.linkedin.com/rest/images?action=initializeUpload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'LinkedIn-Version': '202401',
        'X-Restli-Protocol-Version': '2.0.0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(initPayload),
    });

    if (!initRes.ok) {
      const err = await initRes.text();
      throw new Error(`Failed to initialize LinkedIn image upload: ${err}`);
    }

    const initData = await initRes.json();
    const uploadUrl = initData.value.uploadUrl;
    const imageUrn = initData.value.image;

    // Step 2: Upload raw image binary to uploadUrl
    const uploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': mimeType,
      },
      body: new Uint8Array(imageBuffer),
    });

    if (!uploadRes.ok) {
      throw new Error(`Failed to upload image binary to LinkedIn: HTTP ${uploadRes.status}`);
    }

    return imageUrn;
  }

  /**
   * Publishes a post to LinkedIn (Personal Profile or Company Page)
   */
  async publishPost(payload: PublishPostPayload): Promise<PublishPostResponse> {
    if (!this.accessToken) {
      return { success: false, error: 'No LinkedIn access token configured.' };
    }

    let author = payload.authorUrn;
    if (!author) {
      try {
        const profile = await this.getProfile();
        author = profile.urn;
      } catch (err: any) {
        return { success: false, error: `Could not resolve author URN: ${err.message}` };
      }
    }

    // Try primary: Official LinkedIn UGC Posts API (v2/ugcPosts)
    const ugcPayload: Record<string, any> = {
      author,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: payload.commentary,
          },
          shareMediaCategory: payload.linkUrl ? 'ARTICLE' : (payload.imageUrn ? 'IMAGE' : 'NONE'),
          ...(payload.linkUrl ? {
            media: [
              {
                status: 'READY',
                originalUrl: payload.linkUrl,
                title: {
                  text: payload.linkTitle || 'WebStudio AE — Flagship Web Engineering',
                },
                description: {
                  text: payload.linkDescription || 'Bespoke Next.js 16 Web Platforms & AI Solutions for UAE & Global Leaders.',
                },
              },
            ],
          } : {}),
          ...(payload.imageUrn ? {
            media: [
              {
                status: 'READY',
                media: payload.imageUrn,
              },
            ],
          } : {}),
        },
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
      },
    };

    try {
      const ugcRes = await fetch('https://api.linkedin.com/v2/ugcPosts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'X-Restli-Protocol-Version': '2.0.0',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ugcPayload),
      });

      if (ugcRes.ok || ugcRes.status === 201) {
        const data = await ugcRes.json();
        return {
          success: true,
          postId: data.id || ugcRes.headers.get('x-restli-id') || '',
          urn: data.id || '',
        };
      }
    } catch (ugcErr) {
      // Fallback to rest/posts
    }

    // Fallback: REST Posts API
    const postBody: Record<string, any> = {
      author,
      commentary: payload.commentary,
      visibility: payload.visibility || 'PUBLIC',
      distribution: {
        feedDistribution: 'MAIN_FEED',
        targetEntities: [],
        thirdPartyDistributionChannels: [],
      },
      lifecycleState: 'PUBLISHED',
      isReshareDisabledByAuthor: false,
    };

    if (payload.linkUrl) {
      postBody.content = {
        article: {
          source: payload.linkUrl,
          title: payload.linkTitle || 'WebStudio AE — Flagship Web Engineering',
          description: payload.linkDescription || 'Bespoke Next.js 16 Web Platforms & AI Solutions for UAE & Global Leaders.',
        },
      };
    } else if (payload.imageUrn) {
      postBody.content = {
        media: {
          id: payload.imageUrn,
        },
      };
    }

    const response = await fetch('https://api.linkedin.com/rest/posts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'LinkedIn-Version': '202401',
        'X-Restli-Protocol-Version': '2.0.0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        success: false,
        error: `LinkedIn API error (${response.status}): ${errText}`,
      };
    }

    const postId = response.headers.get('x-restli-id') || response.headers.get('location') || '';
    return {
      success: true,
      postId,
      urn: postId,
    };
  }
}
