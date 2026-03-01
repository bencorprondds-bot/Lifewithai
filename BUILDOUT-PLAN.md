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
- [x] **Content validation engine** — 6-check validator: cross-ref validity, parameter consistency, orphan detection, citation verification, KEDL readiness, schema completeness. Wired into build pipeline (`npm run validate`). Reports saved to `public/validation-report.{json,md}`. (shipped 2026-02-19)
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
- [x] **OAuth skeleton** — NextAuth.js config (`auth-config.ts`), catch-all route handler, GitHub provider configured (needs env vars to activate), custom sign-in page path defined. (scaffolded 2026-02-19)
- [x] **API keys for agents** — Key generation (`arc_ak_` prefix, SHA-256 hashing), validation logic, format checks. Agent submissions via `POST /api/v1/proposals` with `Authorization: Bearer arc_ak_...` (shipped 2026-02-19)
- [ ] **Remove the human/agent toggle** — Once auth is live, the submission path determines author type automatically. Human path: OAuth login → web form. Agent path: API key → POST endpoint. Toggle now marked as provisional with auth status banner. (toggle still present, banner added 2026-02-19)
- [x] **Agent registry** — `POST /api/v1/agents` (admin-gated) creates agents with permissions, rate limits, and trust scores. `GET /api/v1/agents` lists public metadata. API key shown once on creation. (shipped 2026-02-19)
- [x] **Submission provenance tracking** — `SubmissionProvenance` type tracks: submission_id, path (web_form|api), author_type (determined by path), author_id, ip_hash, user_agent, status workflow, reviewer info. Immutable after creation. (shipped 2026-02-19)
- [x] **Rate limiting** — In-memory rate limiter with per-hour/per-day/per-submission limits. Defaults: humans 60/hr, agents 30/hr. (shipped 2026-02-19, in-memory — needs Redis/DB for production)
- [x] **Universal trust scoring** — TrustScore type with 7 metrics: overall, acceptance_rate, confidence_calibration, citation_accuracy, consistency_score, total_submissions, total_accepted. Applied identically to humans and agents. Default score 0.5 for new contributors. (type system shipped 2026-02-19, computation placeholder)
- [ ] **Content provenance (future)** — Detecting whether "human" submissions were actually AI-generated is a separate, harder problem. For now, the KRP review process is the real quality gate. Accurate authorship tracking matters for metrics, but entry quality matters more than who typed it.

### Internationalization (i18n)
- [ ] **UI translation (Phase 2)** — Next.js `next-intl` for navigation, forms, Quick Start, governance docs. Target: top 10-15 languages by engineering workforce (English, Mandarin, Hindi, Spanish, Arabic, French, German, Japanese, Korean, Portuguese, Russian, Turkish, Bengali, Vietnamese, Indonesian).
- [ ] **Community translation management** — Crowdin or Weblate for contributor-driven UI translations.
- [ ] **Entry language metadata** — `language` field in frontmatter. Entries accepted in any language. Structured parameter tables are language-neutral (numbers, units, formulas).
- [ ] **Machine translation layer** — auto-translate prose sections of published entries, clearly labeled as unreviewed machine translation. Bilingual contributors earn trust score credit for verifying translations.
- [ ] **Standards harmonization entries** — Interface Entries mapping between national engineering standards (Eurocode ↔ US building codes ↔ IS codes ↔ GB standards). See CONTRIBUTION-FRAMEWORK.md §1.5.

### Content Pipeline
- [ ] Wave 2 entries (10-12, filling dependency chains — see CONTENT-ROADMAP.md)
- [ ] Wave 3 entries (12-15, balance and depth)
- [ ] Wave 4 entries (community-driven, data-informed)
- [ ] Blog/journal section
- [ ] Arcology-era stories (2035-2040)

### Knowledge Integrity
- [x] Cross-reference validation (do linked entries exist?) — `validate.ts` checks all cross_references[].slug against entry index (shipped 2026-02-19)
- [x] Parameter consistency checks (do numbers add up across entries?) — same-name params compared across entries, unit mismatches flagged, arcology-specific rules (population, power budget) (shipped 2026-02-19)
- [x] Orphan detection (entries with no inbound cross-references) — flagged as warnings with remediation advice (shipped 2026-02-19)
- [x] Citation verification layer (required fields, type validation, URL format, peer-reviewed URL suggestion) — (shipped 2026-02-19, URL liveness check deferred to CI)
- [x] KEDL progression tracking (which entries are ready to level up?) — criteria-based readiness check per KEDL level, dependency blocking detection (shipped 2026-02-19)
- [ ] **Cross-Domain Supervisory Agent** — AI agent monitoring parameter mismatches and interface conflicts across all domains continuously. Read-only, flag-only. See CONTRIBUTION-FRAMEWORK.md §4.3.
- [ ] **Adversarial input scanner** — CI pipeline step detecting prompt injection patterns in submissions. See CONTRIBUTION-FRAMEWORK.md §6.5.
- [ ] **Convergence detection engine** — automated similarity detection surfacing top 3-5 convergent themes per subdomain. See CONTRIBUTION-FRAMEWORK.md §5.4.
- [ ] **Chaff basin** — indexed archive of rejected/low-confidence entries for future re-evaluation against horizon triggers. See CONTRIBUTION-FRAMEWORK.md §5.4.

### Agent Infrastructure
- [ ] Deploy MCP server to Fly.io (when demand warrants $30/month)
- [x] Agent contribution API (POST `/api/v1/proposals` — requires API key auth. GET returns schema docs. Provenance tracked.) (shipped 2026-02-19)
- [ ] Semantic search via pgvector (Phase 1 on MCP roadmap)
- [ ] Knowledge graph via Neo4j (Phase 3+)
- [ ] **Horizon scanning agent team** — min 2 agents (different models) scanning arXiv, Semantic Scholar, patent filings weekly against registered triggers per subdomain. See CONTRIBUTION-FRAMEWORK.md §7.3.
- [ ] **Dual-audience evidence visualization** — React + D3.js argument tree rendering for humans; JSON graph API for agents. See CONTRIBUTION-FRAMEWORK.md §5.2.

### Analytics & Tracking
- [ ] Human vs. agent submission counts (per domain, over time)
- [ ] Entry quality scores (based on KRP checklist)
- [ ] Most-queried open questions (which gaps are agents asking about?)
- [ ] Cross-domain reference density map
- [ ] Contribution leaderboard (humans and agents separately)

### Nightly Autonomous Research System
- [x] **Research queue** — `state/research-queue.json` with all 32 subdomains ordered by content roadmap waves (shipped 2026-02-16)
- [x] **Research prompt** — `scripts/nightly-research-prompt.md` — behavioral spec for unattended subdomain research sessions (shipped 2026-02-16)
- [x] **Self-improvement prompt** — `scripts/self-improvement-prompt.md` — ArXiv/GitHub research + build something new each night (shipped 2026-02-16)
- [x] **PowerShell launcher** — `scripts/nightly-research.ps1` — lock file management, error logging, Claude Code invocation (shipped 2026-02-16)
- [x] **Task Scheduler setup** — `scripts/setup-nightly-research.ps1` — creates 5 scheduled tasks (midnight-4am), wake-from-sleep enabled (shipped 2026-02-16)
- [x] **Output directories** — `state/research-reports/` with subdirectories per domain + self-improvement (shipped 2026-02-16)
- [ ] Phase 2: Add outreach blurbs to research reports (after Ben reviews Wave 1 entries)
- [ ] Expert directory review workflow (morning review → outreach tracking in CSV)
- [ ] Self-improvement topic override (`state/self-improvement-topic.txt`)
- [ ] Nightly system monitoring dashboard (how many sessions ran, success rate, queue progress)

**Schedule:** 5 sessions/night — 4 subdomain research (midnight, 1am, 2am, 3am) + 1 self-improvement (4am). Full 32-subdomain run completes in ~8 nights.

**Cost:** ~$2-5/night for subdomain research phase. Self-improvement continues indefinitely at ~$0.50-1/night.

**Activation:** Run `scripts/setup-nightly-research.ps1` as admin to register Task Scheduler entries. Run `scripts/setup-nightly-research.ps1 -Remove` to deactivate.

---

## Shipped Log

| Date | Feature | Notes |
|------|---------|-------|
| 2026-02-16 | Platform launch | Netlify, 8 entries, REST API, 3 stories |
| 2026-02-16 | Viktor quote fix | Landing page voice corrected |
| 2026-02-16 | Clickable subdomains | Filter entries by subdomain on domain page |
| 2026-02-16 | Propose Entry form | `/arcology/propose` — structured submission |
| 2026-02-16 | Review queue | `/arcology/review` — pending proposals view |
| 2026-02-16 | Auth plan documented | OAuth for humans, API keys for agents, provisional toggle noted |
| 2026-02-16 | Nightly Research System | Queue, prompts, launcher, scheduler setup — ready to activate |
| 2026-02-19 | Content Validation Engine | `validate.ts` + runner: cross-refs, params, orphans, citations, KEDL, schema. Wired into `npm run build`. |
| 2026-02-19 | Auth & Identity Skeleton | NextAuth.js config, API key system, agent registry API, proposals API, provenance tracking, rate limiting, trust scoring types |
| 2026-02-19 | Propose form auth banner | Provisional mode banner explaining upcoming auth-aware submission paths |
| 2026-02-19 | `.env.local.example` | Environment variable template for OAuth configuration |

---

## Launch Strategy: Vertical Slice

The platform launches with **Structural Engineering** as the single fully-governed domain. Remaining 7 domains are published as read-only reference (KEDL 100-200) until Domain Stewards are recruited. Activation sequence: Structural → Energy → Environmental → rest. See CONTRIBUTION-FRAMEWORK.md §10 for full phasing.

---

## Architecture Decisions

1. **File-based content, no database.** Entries are markdown with YAML frontmatter. Build step generates JSON index. Simple, auditable, Git-tracked.
2. **Static site generation.** Every page server-rendered at build time. Only search is client-side.
3. **KRP before open submissions.** Quality review process must exist before we open the door to external contributors.
4. **Human and agent paths are distinct.** Submission path determines author type — no self-reporting. Humans authenticate via OAuth and submit through the web form. Agents authenticate via API key and submit through the REST API. Both go through the same KRP review process. The current human/agent toggle on the propose form is a provisional placeholder until auth ships.
5. **Proposals are stored as `draft` status entries.** Same format as published entries, just with `status: draft`. Review = changing status to `published`.
6. **MCP server deferred.** REST API at $0/month covers agent access. MCP deploys when there's actual demand.
