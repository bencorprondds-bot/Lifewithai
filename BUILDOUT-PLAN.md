# Arcology Knowledge Node — Buildout Plan

*Created: February 16, 2026*
*Status: Living document — updated as features ship*

---

## Purpose

Master inventory of what exists, what's planned, and what's been shipped. If it's not in this document, it's not on the roadmap.

---

## What Exists (Shipped)

### Platform Infrastructure
- [x] Next.js 16 + Tailwind 4 static site on Netlify
- [x] Dark-first design system (background, surface, accent colors)
- [x] Responsive layout with sticky header, mobile menu
- [x] Prebuild step generates `content-index.json` from markdown files
- [x] CORS-enabled REST API (7 GET endpoints)
- [x] MCP server code (Python/FastMCP, in `mcp/` — not deployed, deferred for cost)

### Content Architecture
- [x] 8 engineering domains with `_domain.yaml` metadata
- [x] 32 subdomains (4 per domain) defined in domain YAML
- [x] Markdown + YAML frontmatter content format
- [x] KEDL level system (100-500) for entry maturity
- [x] Confidence level system (1-5) for claim reliability
- [x] Cross-reference system (depends-on, informs, contradicts, extends, alternative-to)
- [x] Author tracking with human/agent type distinction
- [x] Parameter extraction with units and per-parameter confidence

### Content (Wave 1)
- [x] 8 knowledge entries (1 per domain, all KEDL 200)
- [x] 67 quantitative parameters across entries
- [x] 29 open questions
- [x] Cross-reference web connecting all 8 entries

### Stories
- [x] "Marcus: 90 Seconds" (4,198 words)
- [x] "Oren and Dex: The Dropout" (5,928 words)
- [x] "Arun: The Distance" (3,122 words)
- [x] Stories index with series grouping (Life with AI / Arcology One)

### Pages & Navigation
- [x] Home page with project cards
- [x] Arcology landing with domain grid + stats
- [x] Domain detail pages with entry listings
- [x] Individual entry pages with full rendering (parameters, citations, cross-refs, KEDL/CL badges)
- [x] Search page (client-side, full-text)
- [x] Open Questions page (grouped by domain)
- [x] Stats dashboard
- [x] About page
- [x] MCP info page with tool documentation

### API Endpoints
- [x] `GET /api/v1/domains` — all domains with summary stats
- [x] `GET /api/v1/domains/:slug` — single domain detail
- [x] `GET /api/v1/domains/:slug/entries` — entries by domain (filterable)
- [x] `GET /api/v1/entries/:id` — single entry with full content
- [x] `GET /api/v1/search?q=` — full-text search
- [x] `GET /api/v1/open-questions` — all open questions
- [x] `GET /api/v1/parameters` — all quantitative parameters
- [x] `GET /api/v1/stats` — aggregate + per-domain statistics

---

## What's Planned (Not Yet Built)

### Navigation & UX
- [x] **Clickable subdomain cards** — filter entries by subdomain on domain page (shipped 2026-02-16)
- [x] Breadcrumb trail showing domain > subdomain (shipped 2026-02-16)
- [ ] "Back to subdomain" navigation from entry pages
- [ ] Entry sorting/filtering controls (by KEDL, confidence, type, date)

### Contribution System — Knowledge Review Protocol (KRP)
- [x] **Propose Entry form** — structured submission at `/arcology/propose` (shipped 2026-02-16)
- [x] **Review queue page** — entry quality scores and contribution metrics at `/arcology/review` (shipped 2026-02-16)
- [ ] Proposal status workflow: `draft → submitted → under_review → accepted | rejected | superseded`
- [ ] Amendment proposals for existing entries (corrections, extensions, challenges, alternatives)
- [ ] Submission quality checklist (auto-validated):
  - At least 1 cross-reference to a different domain
  - At least 1 open question
  - At least 1 quantitative parameter with units and confidence
  - At least 1 assumption stated explicitly
  - Summary present and under 300 words
  - KEDL and confidence levels assigned
  - No hallucinated citations (agent submissions flagged for citation review)

### Authentication & Identity Verification
The current Propose Entry form uses a self-reported human/agent toggle. This is a placeholder — **it is trivially fakeable and must be replaced with real authentication before opening submissions to anyone beyond us.**

The principle: **the submission path determines the author type**, not a toggle. If you authenticated via OAuth, you're human. If you submitted via API key, you're an agent. No self-reporting.

**Planned implementation:**
- [ ] **OAuth for humans** — Sign in with GitHub (primary) or Google. Identity verified by auth provider, not self-reported. Use NextAuth.js.
- [ ] **API keys for agents** — We issue keys tied to registered agent identities (model, owner, purpose). Key required for all agent submissions. No key = no submission.
- [ ] **Remove the human/agent toggle** — Once auth is live, the submission path determines author type automatically. Human path: OAuth login → web form. Agent path: API key → POST endpoint.
- [ ] **Agent registry** — Database of approved agent identities (agent ID, model, owner, issued date, permissions, rate limits). We control who gets keys.
- [ ] **Submission provenance tracking** — Every entry records how it was submitted (web form + OAuth identity, or API + key identity). Immutable after creation.
- [ ] **Rate limiting** — Per-key rate limits for agents. Per-account rate limits for humans. Prevents spam from either path.
- [ ] **Content provenance (future)** — Detecting whether "human" submissions were actually AI-generated is a separate, harder problem. For now, the KRP review process is the real quality gate. Accurate authorship tracking matters for metrics, but entry quality matters more than who typed it.

### Content Pipeline
- [ ] Wave 2 entries (10-12, filling dependency chains — see CONTENT-ROADMAP.md)
- [ ] Wave 3 entries (12-15, balance and depth)
- [ ] Wave 4 entries (community-driven, data-informed)
- [ ] Blog/journal section
- [ ] Arcology-era stories (2035-2040)

### Knowledge Integrity
- [ ] Cross-reference validation (do linked entries exist?)
- [ ] Parameter consistency checks (do numbers add up across entries?)
- [ ] Orphan detection (entries with no inbound cross-references)
- [ ] Citation verification layer (external citations have valid URLs)
- [ ] KEDL progression tracking (which entries are ready to level up?)

### Agent Infrastructure
- [ ] Deploy MCP server to Fly.io (when demand warrants $30/month)
- [ ] Agent contribution API (POST `/api/v1/proposals` — requires API key auth, see Authentication section)
- [ ] Semantic search via pgvector (Phase 1 on MCP roadmap)
- [ ] Knowledge graph via Neo4j (Phase 3+)

### Analytics & Tracking
- [ ] Human vs. agent submission counts (per domain, over time)
- [ ] Entry quality scores (based on KRP checklist)
- [ ] Most-queried open questions (which gaps are agents asking about?)
- [ ] Cross-domain reference density map
- [ ] Contribution leaderboard (humans and agents separately)

---

## Shipped Log

| Date | Feature | Notes |
|------|---------|-------|
| 2026-02-16 | Platform launch | Netlify, 8 entries, REST API, 3 stories |
| 2026-02-16 | Viktor quote fix | Landing page voice corrected |
| 2026-02-16 | Clickable subdomains | Filter entries by subdomain on domain page |
| 2026-02-16 | Propose Entry form | `/arcology/propose` — structured submission |
| 2026-02-16 | Review queue | `/arcology/review` — pending proposals view |

---

## Architecture Decisions

1. **File-based content, no database.** Entries are markdown with YAML frontmatter. Build step generates JSON index. Simple, auditable, Git-tracked.
2. **Static site generation.** Every page server-rendered at build time. Only search is client-side.
3. **KRP before open submissions.** Quality review process must exist before we open the door to external contributors.
4. **Human and agent paths are distinct.** Submission path determines author type — no self-reporting. Humans authenticate via OAuth and submit through the web form. Agents authenticate via API key and submit through the REST API. Both go through the same KRP review process. The current human/agent toggle on the propose form is a provisional placeholder until auth ships.
5. **Proposals are stored as `draft` status entries.** Same format as published entries, just with `status: draft`. Review = changing status to `published`.
6. **MCP server deferred.** REST API at $0/month covers agent access. MCP deploys when there's actual demand.
