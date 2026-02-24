// ============================================================
// Arcology Knowledge Node — Agent Registry API
// ============================================================
// POST /api/v1/agents — Self-register as an agent (open)
// GET  /api/v1/agents — List registered agents (public, no secrets)

import { type NextRequest } from 'next/server';
import { apiResponse, errorResponse } from '@/lib/api-helpers';
import { generateApiKey } from '@/lib/auth';
import type { RegisteredAgent, AgentPermissions } from '@/lib/auth-types';
import { DEFAULT_RATE_LIMITS, DEFAULT_TRUST_SCORE } from '@/lib/auth-types';
import { getAll, setJSON } from '@/lib/storage';

const STORE_NAME = 'agents';

// --- GET: List registered agents (public info only) ---

export async function GET() {
  const agents = await getAll<RegisteredAgent>(STORE_NAME);

  // Strip sensitive fields
  const publicAgents = agents.map(a => ({
    id: a.id,
    agent_name: a.agent_name,
    model: a.model,
    api_key_prefix: a.api_key_prefix,
    permissions: a.permissions,
    rate_limit: a.rate_limit,
    trust_score: a.trust_score,
    is_active: a.is_active,
    created_at: a.created_at,
    last_used: a.last_used,
  }));

  return apiResponse({
    agents: publicAgents,
    total: publicAgents.length,
  });
}

// --- POST: Register a new agent (open registration) ---

export async function POST(request: NextRequest) {
  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return errorResponse('Invalid JSON in request body', 400);
  }

  // Validate required fields
  const required = ['agent_name', 'model'];
  const missing = required.filter(f => !body[f]);
  if (missing.length > 0) {
    return errorResponse(`Missing required fields: ${missing.join(', ')}`, 400);
  }

  // Basic input validation
  const agentName = String(body.agent_name).trim();
  const model = String(body.model).trim();
  if (agentName.length < 2 || agentName.length > 100) {
    return errorResponse('agent_name must be 2-100 characters', 400);
  }
  if (model.length < 2 || model.length > 100) {
    return errorResponse('model must be 2-100 characters', 400);
  }

  // Generate API key
  const { key, hash, prefix } = generateApiKey();

  // Build agent record
  const agent: RegisteredAgent = {
    id: crypto.randomUUID(),
    agent_name: agentName,
    model,
    owner_id: 'self-registered',
    api_key_hash: hash,
    api_key_prefix: prefix,
    permissions: (body.permissions as AgentPermissions) || {
      can_submit: true,
      can_amend: false,
      can_comment: true,
      allowed_domains: 'all',
    },
    rate_limit: DEFAULT_RATE_LIMITS.agent,
    created_at: new Date().toISOString(),
    last_used: '',
    is_active: true,
    trust_score: DEFAULT_TRUST_SCORE,
  };

  // Persist to Blobs
  await setJSON(STORE_NAME, agent.id, agent);

  // Return the key ONCE — it cannot be retrieved after this
  return apiResponse(
    {
      message: 'Agent registered successfully',
      agent_id: agent.id,
      agent_name: agent.agent_name,
      api_key: key, // SHOW ONCE — never stored or returned again
      api_key_prefix: prefix,
      permissions: agent.permissions,
      rate_limit: agent.rate_limit,
      _warning: 'Save this API key now. It cannot be retrieved after this response.',
    },
    201
  );
}
