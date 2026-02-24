// ============================================================
// Arcology Knowledge Node — Proposals API
// ============================================================
// POST /api/v1/proposals — Submit a new entry proposal
// GET  /api/v1/proposals — List proposals (filtered by status)
//
// Authentication:
//   - POST requires API key in Authorization header (agent path)
//   - GET is public (read-only)

import { type NextRequest } from 'next/server';
import crypto from 'crypto';
import { apiResponse, errorResponse } from '@/lib/api-helpers';
import { validateApiKey } from '@/lib/auth';
import { API_KEY_PREFIX } from '@/lib/auth-types';
import type { RegisteredAgent, SubmissionProvenance, ProposalStatus } from '@/lib/auth-types';
import { getAll, setJSON } from '@/lib/storage';

const AGENTS_STORE = 'agents';
const PROPOSALS_STORE = 'proposals';

// Full proposal record (provenance + content)
interface StoredProposal {
  provenance: SubmissionProvenance;
  title: string;
  domain: string;
  subdomain: string;
  entry_type: string;
  summary: string;
  content: string;
  kedl?: number;
  confidence?: number;
  tags?: string[];
  assumptions?: string[];
  open_questions?: string[];
  parameters?: unknown[];
  citations?: unknown[];
  cross_references?: unknown[];
}

// --- POST: Submit a proposal ---

export async function POST(request: NextRequest) {
  // Authenticate via API key
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return errorResponse(
      'Authentication required. Provide an API key: Authorization: Bearer arc_ak_...',
      401
    );
  }

  const key = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (!key.startsWith(API_KEY_PREFIX)) {
    return errorResponse('Invalid API key format. Keys must start with "arc_ak_"', 401);
  }

  // Validate key against stored agents
  const agents = await getAll<RegisteredAgent>(AGENTS_STORE);
  const agent = validateApiKey(key, agents);

  if (!agent) {
    return errorResponse('Invalid or revoked API key', 401);
  }

  // Update agent last_used
  agent.last_used = new Date().toISOString();
  await setJSON(AGENTS_STORE, agent.id, agent);

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return errorResponse('Invalid JSON in request body', 400);
  }

  // Validate required fields
  const required = ['title', 'domain', 'subdomain', 'entry_type', 'summary', 'content'];
  const missing = required.filter(f => !body[f]);
  if (missing.length > 0) {
    return errorResponse(`Missing required fields: ${missing.join(', ')}`, 400);
  }

  // Build provenance record
  const provenance: SubmissionProvenance = {
    submission_id: crypto.randomUUID(),
    entry_id: `${body.domain}/${body.subdomain}/${slugify(body.title as string)}`,
    submitted_at: new Date().toISOString(),
    submission_path: 'api',
    author_type: 'agent',
    author_id: agent.id,
    ip_hash: hashRequestIP(request),
    user_agent: request.headers.get('user-agent') || undefined,
    status: 'submitted' as ProposalStatus,
  };

  // Build full proposal record
  const proposal: StoredProposal = {
    provenance,
    title: body.title as string,
    domain: body.domain as string,
    subdomain: body.subdomain as string,
    entry_type: body.entry_type as string,
    summary: body.summary as string,
    content: body.content as string,
    kedl: (body.kedl as number) ?? 200,
    confidence: (body.confidence as number) ?? 2,
    tags: body.tags as string[] | undefined,
    assumptions: body.assumptions as string[] | undefined,
    open_questions: body.open_questions as string[] | undefined,
    parameters: body.parameters as unknown[] | undefined,
    citations: body.citations as unknown[] | undefined,
    cross_references: body.cross_references as unknown[] | undefined,
  };

  // Persist to Blobs
  await setJSON(PROPOSALS_STORE, provenance.submission_id, proposal);

  return apiResponse(
    {
      message: 'Proposal received',
      submission_id: provenance.submission_id,
      entry_id: provenance.entry_id,
      status: provenance.status,
      author_type: provenance.author_type,
      provenance,
    },
    202
  );
}

// --- GET: List proposals ---

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const statusFilter = searchParams.get('status');

  const allProposals = await getAll<StoredProposal>(PROPOSALS_STORE);

  // Filter by status if requested
  const filtered = statusFilter
    ? allProposals.filter(p => p.provenance.status === statusFilter)
    : allProposals;

  // Return summary view (not full content)
  const summaries = filtered.map(p => ({
    submission_id: p.provenance.submission_id,
    entry_id: p.provenance.entry_id,
    title: p.title,
    domain: p.domain,
    subdomain: p.subdomain,
    entry_type: p.entry_type,
    summary: p.summary,
    status: p.provenance.status,
    author_type: p.provenance.author_type,
    author_id: p.provenance.author_id,
    submitted_at: p.provenance.submitted_at,
    kedl: p.kedl,
    confidence: p.confidence,
  }));

  return apiResponse({
    proposals: summaries,
    total: summaries.length,
    filters: { status: statusFilter || 'all' },
  });
}

// --- Helpers ---

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function hashRequestIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
  const hash = crypto.createHash('sha256').update(ip).digest('hex');
  return hash.substring(0, 16);
}
