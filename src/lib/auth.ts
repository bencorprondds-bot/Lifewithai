// ============================================================
// Arcology Knowledge Node — Authentication & Authorization
// ============================================================
// Handles:
//   - Session validation (OAuth users)
//   - API key validation (registered agents)
//   - Rate limiting (per-account and per-key)
//   - Submission provenance creation
//
// IMPORTANT: This is a SKELETON. It uses file-based storage
// as a transitional step. When the platform scales, replace
// the JSON file reads with a proper database (SQLite/Postgres).
//
// To activate OAuth:
//   1. Create GitHub OAuth App: https://github.com/settings/developers
//   2. Set callback URL to: https://lifewithai.ai/api/auth/callback/github
//   3. Add to .env.local:
//        GITHUB_CLIENT_ID=...
//        GITHUB_CLIENT_SECRET=...
//        AUTH_SECRET=... (generate with: openssl rand -base64 32)

import { type NextRequest } from 'next/server';
import crypto from 'crypto';
import type {
  UserSession,
  RegisteredAgent,
  SubmissionProvenance,
  ProposalStatus,
  RateLimit,
  TrustScore,
} from './auth-types';
import { API_KEY_PREFIX, DEFAULT_TRUST_SCORE, DEFAULT_RATE_LIMITS } from './auth-types';

// --- API Key Utilities ---

/**
 * Generate a new API key for an agent.
 * Format: arc_ak_{32 random hex chars}
 * Returns: { key: string (plaintext, show once), hash: string (store this) }
 */
export function generateApiKey(): { key: string; hash: string; prefix: string } {
  const random = crypto.randomBytes(32).toString('hex');
  const key = `${API_KEY_PREFIX}${random}`;
  const hash = hashApiKey(key);
  const prefix = key.substring(0, 12); // "arc_ak_XXXXX"
  return { key, hash, prefix };
}

/**
 * Hash an API key for storage. Uses SHA-256.
 * We don't use bcrypt here because API keys are high-entropy
 * (unlike passwords) so dictionary attacks aren't a concern.
 */
export function hashApiKey(key: string): string {
  return crypto.createHash('sha256').update(key).digest('hex');
}

/**
 * Validate an API key from a request.
 * Checks format, then looks up hash in the agent registry.
 */
export function validateApiKey(
  key: string,
  agents: RegisteredAgent[]
): RegisteredAgent | null {
  // Format check
  if (!key.startsWith(API_KEY_PREFIX)) return null;
  if (key.length < 40) return null;

  const hash = hashApiKey(key);
  return agents.find(a => a.api_key_hash === hash && a.is_active) || null;
}

// --- Request Authentication ---

export type AuthResult =
  | { type: 'human'; user: UserSession }
  | { type: 'agent'; agent: RegisteredAgent }
  | { type: 'anonymous' }
  | { type: 'error'; message: string };

/**
 * Authenticate a request. Checks (in order):
 *   1. API key in Authorization header (for agents)
 *   2. Session cookie (for OAuth humans)
 *   3. Falls back to anonymous
 */
export function authenticateRequest(
  request: NextRequest,
  users: UserSession[],
  agents: RegisteredAgent[]
): AuthResult {
  // 1. Check for API key
  const authHeader = request.headers.get('authorization');
  if (authHeader) {
    const key = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (key.startsWith(API_KEY_PREFIX)) {
      const agent = validateApiKey(key, agents);
      if (!agent) {
        return { type: 'error', message: 'Invalid or revoked API key' };
      }
      return { type: 'agent', agent };
    }
  }

  // 2. Check for session cookie (placeholder — will be replaced by NextAuth.js)
  // In the real implementation, this calls getServerSession(authOptions)
  // For now, we return anonymous if no API key
  const sessionToken = request.cookies.get('next-auth.session-token')?.value;
  if (sessionToken) {
    // TODO: Validate session token via NextAuth.js
    // const session = await getServerSession(authOptions);
    // if (session?.user) return { type: 'human', user: session.user };
  }

  // 3. Anonymous
  return { type: 'anonymous' };
}

// --- Rate Limiting ---

// In-memory rate limit tracking (resets on server restart)
// For production, use Redis or a database
const rateLimitStore = new Map<string, { count: number; window_start: number }>();

export function checkRateLimit(
  identifier: string,  // user ID or API key prefix
  limits: RateLimit
): { allowed: boolean; remaining: number; reset_at: number } {
  const now = Date.now();
  const hourMs = 60 * 60 * 1000;
  const key = `hourly:${identifier}`;

  const existing = rateLimitStore.get(key);
  if (!existing || (now - existing.window_start) > hourMs) {
    // New window
    rateLimitStore.set(key, { count: 1, window_start: now });
    return {
      allowed: true,
      remaining: limits.requests_per_hour - 1,
      reset_at: now + hourMs,
    };
  }

  if (existing.count >= limits.requests_per_hour) {
    return {
      allowed: false,
      remaining: 0,
      reset_at: existing.window_start + hourMs,
    };
  }

  existing.count++;
  return {
    allowed: true,
    remaining: limits.requests_per_hour - existing.count,
    reset_at: existing.window_start + hourMs,
  };
}

// --- Submission Provenance ---

export function createProvenance(params: {
  entry_id: string;
  submission_path: 'web_form' | 'api';
  author_type: 'human' | 'agent';
  author_id: string;
  ip_hash?: string;
  user_agent?: string;
}): SubmissionProvenance {
  return {
    submission_id: crypto.randomUUID(),
    entry_id: params.entry_id,
    submitted_at: new Date().toISOString(),
    submission_path: params.submission_path,
    author_type: params.author_type,
    author_id: params.author_id,
    ip_hash: params.ip_hash,
    user_agent: params.user_agent,
    status: 'submitted' as ProposalStatus,
  };
}

// --- IP Hashing (for abuse detection, not tracking) ---

export function hashIP(ip: string, salt: string): string {
  return crypto.createHash('sha256').update(ip + salt).digest('hex').substring(0, 16);
}

// --- Trust Score Computation ---
// Placeholder — will be computed from submission history

export function computeTrustScore(
  totalSubmissions: number,
  totalAccepted: number,
  // Additional metrics would come from the review database
): TrustScore {
  if (totalSubmissions === 0) return DEFAULT_TRUST_SCORE;

  const acceptanceRate = totalAccepted / totalSubmissions;

  return {
    overall: acceptanceRate, // Simplified — real version weighs multiple factors
    acceptance_rate: acceptanceRate,
    confidence_calibration: 0, // Requires comparing predicted vs actual confidence levels
    citation_accuracy: 0,     // Requires citation verification results
    consistency_score: 0,     // Requires cross-entry parameter comparison
    total_submissions: totalSubmissions,
    total_accepted: totalAccepted,
    last_updated: new Date().toISOString(),
  };
}
