// ============================================================
// Arcology Knowledge Node — Subscribe API
// ============================================================
// POST /api/v1/subscribe — Subscribe to updates (site-wide or domain-specific)
// GET  /api/v1/subscribe — Public subscriber count (no PII exposed)
//
// No authentication required. Email is the only required field.
// Subscriptions are stored in Netlify Blobs keyed by email hash.

import { type NextRequest } from 'next/server';
import crypto from 'crypto';
import { apiResponse, errorResponse } from '@/lib/api-helpers';
import { getStore, getAll, setJSON } from '@/lib/storage';

const SUBSCRIBERS_STORE = 'subscribers';

interface StoredSubscription {
  id: string;
  email: string;
  domains: string[];       // empty = site-wide; populated = domain-specific
  subscribed_at: string;
  updated_at: string;
  source: string;          // 'footer' | 'domain-page' | 'api'
  confirmed: boolean;      // future: email confirmation flow
}

// --- POST: Subscribe ---

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return errorResponse('Invalid JSON in request body', 400);
  }

  const email = (body.email as string || '').trim().toLowerCase();

  // Validate email (basic)
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse('A valid email address is required', 400);
  }

  // Normalize domains
  const domains: string[] = Array.isArray(body.domains) ? body.domains : [];
  const source = (body.source as string) || 'api';

  // Key by email hash so duplicates merge
  const id = hashEmail(email);

  // Check for existing subscription
  const store = getStore(SUBSCRIBERS_STORE);
  const existing = await store.get(id);
  let subscription: StoredSubscription;

  if (existing) {
    // Merge: add new domains to existing subscription
    const prev = JSON.parse(existing) as StoredSubscription;
    const mergedDomains = [...new Set([...prev.domains, ...domains])];
    subscription = {
      ...prev,
      domains: mergedDomains,
      updated_at: new Date().toISOString(),
      source,
    };
  } else {
    subscription = {
      id,
      email,
      domains,
      subscribed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      source,
      confirmed: false,
    };
  }

  await setJSON(SUBSCRIBERS_STORE, id, subscription);

  return apiResponse(
    {
      message: existing ? 'Subscription updated' : 'Subscribed successfully',
      domains: subscription.domains.length > 0 ? subscription.domains : ['all'],
    },
    existing ? 200 : 201
  );
}

// --- GET: Subscriber count (no PII) ---

export async function GET() {
  const all = await getAll<StoredSubscription>(SUBSCRIBERS_STORE);

  // Domain breakdown (count only)
  const domainCounts: Record<string, number> = {};
  let siteWide = 0;

  for (const sub of all) {
    if (sub.domains.length === 0) {
      siteWide++;
    }
    for (const d of sub.domains) {
      domainCounts[d] = (domainCounts[d] || 0) + 1;
    }
  }

  return apiResponse({
    total_subscribers: all.length,
    site_wide: siteWide,
    by_domain: domainCounts,
  });
}

// --- Helpers ---

function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email).digest('hex').substring(0, 16);
}
