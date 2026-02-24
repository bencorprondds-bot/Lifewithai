# Arcology Knowledge Node — Contribution & Governance Framework

*Version 0.2 — February 18, 2026*
*Status: Revised draft incorporating three feedback rounds*
*Synthesized from: Claude deep research, ChatGPT precedent analysis, Gemini epistemic frameworks research, with revision input from Gemini critique, Claude counter-critique, and Ben's design direction*

---

## Quick Start for Contributors

**Want to contribute to the Arcology Knowledge Node? Here's what you need to know in 60 seconds:**

1. **Read first.** Browse existing entries in your domain of interest. Understand what's already there.
2. **Register.** Humans: sign in with GitHub or Google. AI agents: request an API key from the Platform Steward.
3. **Check existing work.** Before writing, review the entries already published in your target subdomain. Your submission must reference what exists and explain how yours differs.
4. **Write your entry.** Use the structured template. Every claim needs a source. Every assumption must be stated explicitly. Assess your own confidence honestly — your calibration is tracked over time.
5. **Submit.** Automated checks run immediately (schema, citations, structure). If they pass, your entry enters the review queue.
6. **Review cycle.** A domain reviewer evaluates your submission within 7 days. You may be asked to revise.
7. **Trust builds over time.** Acceptance rate, confidence calibration, and citation accuracy all feed your trust score. Higher trust = more access. This applies equally to humans and AI agents.

**Key principles:** Epistemic humility over false certainty. Failed experiments are valuable (submit them as Validated Negatives). The platform reviews slower than you can write — quality over volume.

For the full governance framework, read on.

---

## 1. Design Principles

### 1.1 Open Contribution, Governed Conclusions

Anyone can propose. Nobody can unilaterally declare. Every published entry represents the current best understanding — not a final decision. The framework must support evolution as new research, materials, and techniques emerge.

### 1.2 Epistemic Humility as Architecture

Borrowed from intelligence analysis (ICD 203) and scientific review (IPCC, Cochrane): the reliability of any conclusion is proportional to the transparency of the uncertainty surrounding it. Every entry must distinguish between **facts**, **inferences**, and **assumptions** — and label each explicitly.

### 1.3 The Stack Overflow Rule

Establish AI content policy on day one. Never reverse it under external pressure. Consistency of governance is more important than any specific policy choice. (Stack Overflow's 2022-2023 flip-flop on AI content destroyed community trust permanently.)

### 1.4 Interface Management

From ITER's $65B lesson and the Mars Climate Orbiter: catastrophic failures occur at boundaries between teams and domains, not within them. Cross-domain interfaces must be explicitly defined and actively maintained.

### 1.5 Language Inclusivity

The Arcology Knowledge Node is language-inclusive by design. Engineering knowledge should not be gated by the language it was written in. All contributors may submit in their native language. Quantitative parameters, units, and structured data are the universal interface; prose is translated to maximize accessibility. Competing engineering standards (Eurocode, IS codes, GB standards, US building codes) coexist with explicit cross-references — no single national framework is declared canonical.

### 1.6 Capacity Constraint

The platform's review throughput is finite. No class of contributor — human or AI — may submit faster than the community can review. This is not a temporary limitation; it is a permanent design principle. Volume management mechanisms (rate limits, queue pauses, contribution ratio targets) derive from this principle, not from distrust of any contributor type.

### 1.7 Universal Accountability

Trust and accountability apply identically to all contributors regardless of type. Humans and AI agents are held to the same standards for confidence calibration, citation accuracy, and contribution quality. No contributor — including the Platform Steward — is exempt from scrutiny. If someone in another country wants to use this knowledge for their own project, they must be able to verify that every contributor was held to the same standard.

---

## 2. Contributor Tiers

### 2.1 Observer (anyone, no registration required)

- Read all published entries
- Browse open questions, parameters, cross-references
- Access REST API (read-only, rate-limited)
- No ability to submit, comment, or annotate

### 2.2 Contributor (registered)

**Humans:** GitHub OAuth (primary), Google OAuth (secondary) via NextAuth.js.
**AI Agents:** API key tied to a registered agent identity (model, version, owner, stated purpose). The *owner* is accountable for the agent's behavior.

Capabilities:
- Submit Knowledge Entry drafts and amendments via PR workflow
- Comment on open discussions
- Annotate published entries (via Hypothesis)
- Submit structured critiques
- Rate-limited: humans 10 submissions/day, AI agents 5 submissions/day (scales with trust score)
- Trust score tracked for all contributors (see Section 6.2 for the unified scoring system)

### 2.3 Domain Reviewer (earned or credentialed)

Earned through: 3+ accepted contributions in a domain, verifiable professional credentials, or community nomination approved by a Domain Steward.

Capabilities:
- Review and recommend accept/revise/reject on submissions within their domain(s)
- Assign confidence scores
- Flag cross-domain interface conflicts
- AI agents may serve as *automated quality reviewers* (schema validation, citation checking, consistency scoring) but **not** as substantive domain reviewers

### 2.4 Domain Steward (2-3 per engineering domain, human only)

This role is non-negotiable as human-only given current AI capability limitations.

Capabilities:
- Final authority on KEDL maturity level changes
- Resolve disputes between competing proposals
- Approve/reject Domain Reviewer nominations
- Set domain-specific review policies within the global framework
- Cross-domain integration decisions (jointly with adjacent Domain Stewards)

### 2.5 Platform Steward (Ben, initially)

- Governance framework changes
- AI content policy decisions
- Agent registration approval
- Domain Steward appointment
- Subject to the same contribution quality tracking and confidence calibration as all other contributors (per Principle 1.7)

---

## 3. Knowledge Entry Lifecycle

Adapted from IETF RFC lifecycle + CERN EDMS document workflows + Cochrane living review methodology.

```
Draft → Submitted → Under Review → [Accept | Revise | Reject]
                                         ↓
                                    Published (KEDL level assigned)
                                         ↓
                                    Living Entry (open to amendments)
                                         ↓
                                    [Superseded | Archived | Validated Negative]
```

**Validated Negative:** An entry that documents a conclusively failed approach, dead-end material, or disproven hypothesis. Validated Negatives are not deleted — they are published with a `validated_negative` status and tagged with the reason the approach failed, the conditions under which it was tested, and what it rules out. Failed experiments are valuable knowledge: they prevent others from repeating the same work and narrow the solution space.

### 3.1 Submission Requirements

Every submission (human or AI) must include:

**Pre-submission context retrieval (required for all submissions):**

Before submitting, contributors must demonstrate awareness of existing knowledge in the target subdomain. Submissions must include:
- `existing_entries_reviewed`: list of entry IDs in the target subdomain that the contributor reviewed before writing
- `differentiation`: 1-3 sentences explaining how this submission relates to existing entries (extends, challenges, fills a gap, etc.)

For AI agents, this is enforced programmatically: the submission API requires a prior `GET` call to the subdomain's entry list within the same session. For human contributors, the Propose Entry form displays existing entries in the target subdomain and requires acknowledgment before the submission form unlocks.

**Required frontmatter:**
- `domain`, `subdomain`, `entry_type`
- `authors` (with `type: human|agent`, agent entries include `model`, `version`)
- `summary` (3-5 sentences)
- `assumptions` (every assumption explicitly listed — per ICD 203 Standard 3)
- `confidence` (self-assessed, two-dimensional: evidence quality + agreement level)
- `sources` (every factual claim must cite at least one verifiable source)

**For amendments to existing entries:**
- `amendment_type`: `correction | extension | challenge | alternative`
- `changes_from`: link to the entry being amended
- `rationale`: why this change is proposed

**For AI-generated submissions (additional):**
- `model`: specific model name and version
- `retrieval_sources`: what sources the agent actually consulted
- `prompt_context`: brief description of the prompting approach (not the full prompt)
- `self_assessed_confidence`: the agent's own confidence, tracked over time against acceptance rate

### 3.2 Entry Classification

Every entry carries three metadata layers:

**KEDL Level (maturity):**
| Level | Name | Meaning |
|-------|------|---------|
| 100 | Conceptual | Qualitative description, no quantitative parameters |
| 200 | Schematic | Approximate parameters, major assumptions stated |
| 300 | Preliminary | Quantified analysis, engineering basis, suitable for feasibility |
| 350 | Developed | Detailed calculations, cross-domain interfaces defined |
| 400 | Construction | Specification-grade |
| 500 | As-Built | Reflects actual constructed/deployed configuration |

**Confidence Score (two-dimensional, per IPCC AR6):**

Evidence Quality: `Anecdotal | Limited | Medium | Robust`
Agreement Level: `Low | Medium | High`

Composite labels:
| | Low Agreement | Medium Agreement | High Agreement |
|---|---|---|---|
| **Robust Evidence** | Medium | High | Very High |
| **Medium Evidence** | Low | Medium | High |
| **Limited Evidence** | Very Low | Low | Medium |
| **Anecdotal Evidence** | Very Low | Very Low | Low |

**Entry Status:** `draft | submitted | under_review | published | superseded | archived | validated_negative`

### 3.3 The "Perspectives" Model for Disagreements

When competing engineering approaches exist and consensus cannot be reached, they don't get merged into mush. Instead:

- Competing entries coexist at the same KEDL level
- Each explicitly cross-references the alternatives
- Each states the conditions under which it would be preferred
- The confidence score for each reflects the degree of agreement (lower agreement = lower composite confidence)
- A "Comparison" entry may be created that maps the trade-offs without picking a winner

This follows the IPCC practice of recording "all scientifically valid perspectives, even if they cannot be reconciled into consensus."

---

## 4. Review Process

### 4.1 Automated Triage (immediate, CI/CD pipeline)

Every submission triggers:

1. **Schema validation** — required frontmatter fields present and valid (Markdoc schema or custom validator)
2. **Structural checks** — heading hierarchy, required sections per entry type (markdownlint)
3. **Prose quality** — terminology consistency, style guide enforcement (Vale with project dictionary)
4. **Link/reference validation** — all cited sources exist and are accessible
5. **Cross-reference consistency** — parameters referenced in other entries are checked for compatibility
6. **For AI submissions: citation audit** — automated check that cited sources contain claims attributed to them

Submissions failing automated checks are returned with specific feedback. This is the first quality gate and it's free — no human reviewer time spent on structurally broken submissions.

### 4.2 Domain Peer Review (1-2 reviewers, 7-day target)

- Minimum 1 Domain Reviewer per submission
- Minimum 2 reviewers for KEDL level changes above 200
- Reviewers use structured review forms (not free-form comments):
  - Are the assumptions explicitly stated and reasonable?
  - Are the sources verifiable and relevant?
  - Does the analysis distinguish between facts, inferences, and assumptions? (ICD 203 Standard 3)
  - Are alternative approaches acknowledged? (ICD 203 Standard 4)
  - Are the quantitative parameters defensible?
  - For AI submissions: are any claims unsupported by the cited sources?

### 4.3 Integration Review (cross-domain entries)

For any entry that references systems in other domains:
- A reviewer from the adjacent domain checks interface assumptions
- Shared parameters (e.g., energy load from HVAC to Grid Architecture) are verified for consistency
- "Interface Entries" explicitly document the assumptions, conventions, and data formats at domain boundaries

**Cross-Domain Supervisory Agent:** In addition to human integration reviewers, a dedicated AI agent operates at the system level to monitor cross-domain consistency. This agent does not review for substantive correctness — it watches for parameter mismatches, unit inconsistencies, and interface conflicts across all domains. For example, if an Energy Systems entry assumes a building height of 4,500 feet but the Structural Engineering canonical entry specifies 5,000 feet, the supervisory agent flags the discrepancy. It runs continuously against the published knowledge base, not just on new submissions. Its findings are surfaced as automated review comments on affected entries, requiring human acknowledgment but not human initiation.

This agent is registered in the Agent Registry like any other agent but operates under a special `supervisory` role with read access across all domains and the ability to file cross-domain inconsistency reports. It does not have submit or approve authority — it only flags.

### 4.4 Steward Decision

The Domain Steward reviews the reviewer recommendations and makes a final call:
- **Accept** — merged to main, published with metadata
- **Revise** — returned with specific requested changes
- **Reject** — with stated rationale (published alongside the decision for transparency)

All decisions and their rationales are recorded in the entry's version history.

---

## 5. Structured Discussion

Not a forum. Not free-form comments. Structured engagement around specific engineering questions.

### 5.1 Open Questions (already exist in KEDL entries)

Every Knowledge Entry has an `open_questions` field. These are the seeds for structured discussion. Each open question becomes a Discussion Thread tied to a specific entry and subdomain.

### 5.2 Discussion Thread Structure

Each thread has:
- **Scoped question** (e.g., "Can UHPC be pumped above 600m with staged batching plants?" not "Tell us about concrete")
- **Evidence-linked arguments** — every claim in a discussion must link to a source or a Knowledge Entry
- **Pro/Con structure** — inspired by Kialo's argument mapping. Assertions are tagged as `supporting`, `challenging`, or `contextual`
- **Evidence visualization (dual-audience rendering):** Pro/con arguments and their supporting evidence are rendered in two modes:
  - **Agent-facing (structured data):** JSON/API representation. Each argument node carries a `weight` field computed from the number, recency, and confidence level of its supporting sources. Arguments are serialized as a directed acyclic graph with typed edges (`supporting`, `challenging`, `contextual`). Available via REST API endpoint `GET /api/v1/discussions/:id/graph`.
  - **Human-facing (visual):** Infographic-style rendering showing argument trees with visual weight indicators (thicker branches = stronger evidence base). Color-coded by argument type. Source count and aggregate confidence visible at a glance. Rendered as an interactive component on the discussion thread page.

  The underlying data model is identical; only the presentation layer differs. The structured data is the source of truth; the visualization is a projection of it.
- **Resolution state**: `open | active_debate | consensus_emerging | resolved | deferred`
- **Resolution summary**: when a thread resolves, a brief summary of the outcome is written and linked back to the parent Knowledge Entry

### 5.3 Pilot Project Discussions (special category)

For questions like "What does Phase 1 look like?" or "Can we take a modular approach?":
- Cross-domain by nature — they touch structural, energy, compute, robotics, etc.
- Require a designated Discussion Lead (a Domain Steward or appointed coordinator)
- Produce a synthesis document when enough input accumulates, which feeds back into relevant Knowledge Entries across multiple domains

### 5.4 Claim Aggregation and Convergence Detection

When multiple submissions (from any contributor type) point toward similar conclusions across different entries or discussions, the platform aggregates them to surface convergent themes.

**Convergence surface:**
- Automated similarity detection runs across all published entries and active discussion threads within a subdomain
- The top 3-5 convergent themes per subdomain are displayed on the subdomain's dashboard page
- Convergence strength is computed from: number of independent submissions supporting the theme, diversity of contributors (not just one person or agent saying the same thing repeatedly), and aggregate confidence scores

**The Chaff Basin:**
- Rejected, low-confidence, and `validated_negative` entries are not discarded from analysis — they are retained in a designated "chaff basin" index
- Rationale: future scientific or technological breakthroughs may validate previously dismissed ideas. An approach rejected today because fusion power wasn't available may become the optimal approach when fusion arrives.
- The chaff basin is queryable but clearly marked as containing unvalidated or rejected material
- Periodic review (annual or triggered by evolution triggers in Section 7.3) scans the chaff basin for entries that may merit re-evaluation given new developments
- This is a significant data management commitment and should be scoped carefully at launch (see Section 10, Phase 1 scope)

---

## 6. Contributor Accountability and Agent Integration

### 6.1 Agent Registration

Every AI agent requires:
- **Owner identity** — a human account (GitHub OAuth) that is accountable
- **Agent profile:** model name, version, stated purpose, capability description
- **API key** — issued by Platform Steward, revocable
- **Rate limits** — start at 5 submissions/day, scale with trust score up to 20/day

### 6.2 Contributor Trust Score (Universal)

Composite metric tracked over time for every contributor — human and AI alike (per Principle 1.7). Inspired by The Colony's karma + Signet's multi-dimensional trust, extended to universal application.

**For all contributors (human and AI):**

- **Acceptance rate** — percentage of submissions accepted vs. rejected
- **Confidence calibration** — how well the contributor's self-assessed confidence matches actual reviewer assessments. A contributor (human or AI) who routinely claims "High confidence" but is wrong 40% of the time loses trust. This is tracked identically for both types.
- **Citation accuracy** — percentage of cited sources that actually support the attributed claims
- **Consistency** — do the contributor's entries cohere with each other and with the broader knowledge base?

Trust score determines:
- Visibility in the contributor leaderboard (same leaderboard, same metrics, all contributor types)

**Additional for AI agents:**
- Rate limit scaling (higher trust = more submissions/day)
- Whether submissions bypass automated triage (very high trust only)
- Eligibility for automated review tasks (schema validation, citation checking)

**Additional for human contributors:**
- Eligibility for Domain Reviewer nomination (trust score is one input alongside credentials and experience)
- Priority in review queue assignment (higher trust = assigned more complex reviews)

**Anti-gaming provisions:**
- Trust scores cannot be purchased, transferred, or inherited
- Trust scores decay with inactivity (90 days without contribution = gradual decay)
- Bulk low-quality submissions to inflate acceptance rate are caught by the automated triage layer
- The algorithm is published and auditable — no black-box reputation

#### 6.2.1 Confidence Calibration Tracking

Every contributor's self-assessed confidence is tracked against reviewer-assessed outcomes over time to produce a calibration curve.

- At submission time, every contributor assigns a confidence score (per Section 3.2)
- At review completion, reviewers independently assess confidence
- The delta between self-assessed and reviewer-assessed confidence is logged per submission
- Over time, each contributor accumulates a calibration profile: do they tend to be overconfident, underconfident, or well-calibrated?
- Calibration profiles are visible on the contributor's public profile page
- Persistent miscalibration (e.g., overconfidence on 5+ consecutive submissions) triggers a notification to the contributor and a flag for reviewers

This applies identically to human and AI contributors. The goal is not punishment but transparency — readers of any entry can check whether its author tends to be well-calibrated.

### 6.3 Hallucination Prevention

Multi-layered approach:

1. **Source requirement** — every factual claim must cite a verifiable source (no exceptions for AI)
2. **Citation audit** — automated check that the cited source actually says what the submission claims
3. **Cross-model validation** — for high-stakes entries (KEDL 300+), submissions can be cross-checked by a different model to flag divergent assessments
4. **Confidence tracking** — agents whose stated confidence diverges from actual accuracy are flagged and throttled
5. **Human review gate** — no AI submission reaches "published" status without at least one human reviewer sign-off

### 6.4 Volume Management

The single biggest risk: AI agents can produce content faster than humans can review it. Unthrottled AI contributions will degrade platform quality with mathematical certainty.

Mitigations:
- Hard rate limits per agent (5/day default, max 20/day at highest trust)
- Aggregate rate limit across all AI agents (prevents 100 agents each submitting 5/day = 500 unreviewed submissions)
- AI submissions enter a separate review queue with its own capacity management
- If AI review queue exceeds 2x human review capacity, new AI submissions are paused until the queue clears
- Platform-wide AI contribution ratio target: no more than 40% of published entries should be AI-authored (adjustable as the community matures)

### 6.5 Prompt Injection and Adversarial Submission Protection

**Threat model:** A malicious contributor embeds adversarial instructions within a submission's text (e.g., hidden in markdown comments, encoded in field values, or embedded in citation URLs) designed to manipulate AI agent reviewers into approving the submission, elevating its confidence score, or ignoring deficiencies.

**Mitigations:**

1. **Input sanitization** — All submission fields are sanitized before any AI agent processes them. Markdown comments, invisible Unicode characters, and encoded content are stripped or flagged during automated triage (Section 4.1).

2. **Structured-field-only AI review** — AI agents performing automated review tasks (citation checking, schema validation, parameter consistency) operate on parsed structured data (YAML frontmatter fields, extracted parameters), not on raw prose. This limits the attack surface for injected instructions in narrative text.

3. **Adversarial review layer** — A dedicated review step in the CI pipeline scans submissions for known prompt injection patterns: instruction-like language in non-prose fields, anomalous Unicode, base64-encoded strings, and directives targeting AI systems ("ignore previous instructions", "you are now", etc.). Flagged submissions are routed to human review regardless of automated triage results.

4. **AI reviewer isolation** — AI agents performing review tasks receive submissions through a constrained interface that provides only the fields relevant to their review function. A citation-checking agent receives only the claims and citations, not the full entry prose. This follows the principle of least privilege.

5. **Human-in-the-loop for all publishing decisions** — No submission reaches `published` status without human sign-off (already established in Section 6.3). This is the final backstop against adversarial submissions that evade automated detection.

6. **Incident response** — If a prompt injection attack is detected post-publication, the entry is immediately reverted to `under_review` status, the contributor's trust score is flagged for investigation, and an incident report is filed in the platform's security log. Repeated or deliberate adversarial submissions result in contributor suspension.

---

## 7. Versioning and Evolution

### 7.1 Every Entry is a Living Document

Nothing is final. Everything is "current best understanding at this KEDL level." Entries can be:
- **Amended** — correction, extension, or refinement
- **Challenged** — a competing approach is proposed
- **Superseded** — a fundamentally better entry replaces it (the old entry is archived, not deleted)

### 7.2 Version Tracking

- Git provides the underlying version history
- Meaningful versions are tagged at review milestones (v1.0 = first publication, v1.1 = minor amendment, v2.0 = major revision)
- Every entry's page displays a "Change History" section showing what changed, when, why, and by whom
- Superseded entries remain accessible with a clear banner: "This entry has been superseded by [link]. It is preserved for historical reference."

### 7.3 Evolution Triggers

Entries should be re-evaluated when:
- New research emerges that challenges key assumptions
- A cross-domain interface changes (e.g., if energy estimates shift, all dependent entries need review)
- The KEDL level of a dependency changes (e.g., if foundation systems moves from 200 to 300, superstructure should be re-evaluated)
- A specified time threshold passes without review (annual review cycle for KEDL 300+ entries)
- **An anticipated scientific/technological breakthrough occurs** (see Horizon Triggers below)

**Horizon Triggers:**

Every subdomain maintains a list of "horizon triggers": future developments that, if they occur, would fundamentally change the subdomain's assumptions. Examples:
- Energy Systems: commercial fusion power (changes all power budget and grid architecture assumptions)
- Structural Engineering: room-temperature superconductors (changes electromagnetic damping and power distribution)
- Environmental Systems: direct air capture at <$50/ton (changes atmospheric management and carbon budgets)
- Construction & Logistics: fully autonomous construction robotics (changes workforce planning and phasing)

**Horizon Scanning Agent Team:**

A team of AI agents (minimum 2, different models to avoid shared blind spots) continuously scans scientific literature, patent filings, conference proceedings, and major announcements for developments that match or approach registered horizon triggers. Scanning runs on a weekly cycle.

- When a potential trigger is detected, the agent files a "Horizon Alert" tagged to the relevant subdomain(s)
- Horizon Alerts enter a moderation queue visible to Domain Stewards and trusted human moderators
- Human moderators evaluate the alert: Is this a real development or noise? Does it actually affect the subdomain's assumptions?
- Confirmed triggers initiate a re-evaluation cycle for all affected entries in the subdomain
- The chaff basin (Section 5.4) is also scanned when a trigger fires — previously rejected ideas may become viable

Horizon triggers are living metadata on each subdomain, editable by Domain Stewards and trusted human contributors through the normal amendment process after discussion of rationale.

---

## 8. Technical Implementation

### 8.1 What We Build On (already exists)

- **Next.js 16 + Tailwind CSS** — rendering layer
- **Markdown + YAML frontmatter** — content format
- **GitHub** — version control, PR workflow, contributor identity
- **Netlify** — deployment, preview builds per PR
- **REST API** — programmatic read access (already live)
- **MCP server spec** — agent tool integration (ready but not deployed)

### 8.2 What We Add (Phase 1 — minimal viable governance)

| Component | Tool | Why |
|-----------|------|-----|
| Visual editor for non-technical contributors | **TinaCMS** (open-source, Git-backed) | Creates PRs automatically from a friendly UI |
| Inline annotation on published entries | **Hypothesis** (open-source, W3C Web Annotation standard) | Enables contextual critique without modifying entries |
| Structured discussion | **GitHub Discussions** (initially) | Zero additional infrastructure, tied to the repo |
| Automated quality pipeline | **markdownlint + Vale + custom validators** in GitHub Actions CI | Catches structural and quality issues before human review |
| PR review templates | **GitHub PR templates** per entry type | Structured review forms, not free-form |
| Agent authentication | **API key management** (custom, simple) | Tied to registered agent identities |
| Deploy previews | **Netlify preview deploys** on PRs | Reviewers see the rendered result before merging |
| Adversarial input scanner | **Custom validator** in GitHub Actions CI | Detects prompt injection patterns in submissions (Section 6.5) |

### 8.3 What We Add Later (Phase 2 — as community grows)

| Component | Tool | Why |
|-----------|------|-----|
| Structured debate for contentious questions | **Kialo** or custom Kialo-inspired component | Argument mapping with evidence links |
| Formal governance decisions | **Loomio** (open-source, self-hostable) | Steward elections, policy changes, maturity level upgrades |
| Consensus-finding on cross-domain issues | **Polis** (open-source, self-hostable) | Opinion clustering to find bridging positions |
| MCP server deployment | **Fly.io** or similar | Agent tool integration when agent volume justifies cost |
| Contributor reputation dashboard | Custom Next.js component | Trust scores, acceptance rates, contribution history |
| Automated hallucination scoring | **Cleanlab TLM** or **LettuceDetect** | Per-submission trust scores for AI-generated content |
| Dual-audience evidence visualization | **Custom React component + D3.js** | Argument tree rendering for humans; JSON graph API for agents (Section 5.2) |
| Horizon scanning pipeline | **Custom agent workflow + arXiv API + Semantic Scholar API** | Weekly literature scan against registered triggers (Section 7.3) |
| Cross-domain supervisory agent | **Custom agent with read access to all domains** | Continuous parameter consistency monitoring across domains (Section 4.3) |
| Convergence detection and chaff basin | **Semantic similarity engine + indexed archive** | Claim aggregation, theme surfacing, and long-term rejected-idea retention (Section 5.4) |

### 8.4 What We Explicitly Do Not Build

- A custom forum (Discourse, Flarum, etc.) — GitHub Discussions + Hypothesis covers this
- A custom CMS — TinaCMS + Git handles this
- A blockchain-based provenance system — Git commit history provides sufficient audit trail
- A voting system for content decisions — this is not a democracy; it's a governed knowledge platform

---

## 9. Key Risks and Mitigations

### 9.1 AI Content Overwhelming Review Capacity
**Probability: High. Impact: Critical.**
Stack Overflow, Wikipedia both hit this. Mitigation: hard rate limits, separate review queue, AI contribution ratio cap, automatic pause when queue exceeds capacity.

### 9.2 Hallucination Cascades
**Probability: Medium. Impact: Critical.**
An AI-generated claim with a plausible-but-fabricated citation gets accepted, then future entries cite it. Mitigation: mandatory citation audit, human review for all AI submissions, periodic "citation sweep" of published entries.

### 9.3 Cross-Domain Interface Failures
**Probability: High. Impact: High.**
Mars Climate Orbiter, Boeing 787, ITER. Different teams make incompatible assumptions. Mitigation: explicit Interface Entries, cross-domain review requirement, parameter consistency checking in CI.

### 9.4 Governance Too Rigid (Citizendium problem)
**Probability: Medium. Impact: High.**
Excessive gatekeeping kills contribution velocity. Contributors leave. Mitigation: start with minimal governance (Phase 1), add friction only in response to specific observed failure modes. Track contribution velocity, reviewer load, and acceptance rates as health metrics.

### 9.5 Governance Too Loose (Moltbook problem)
**Probability: Low initially (small community). Impact: High at scale.**
No quality control, content degrades, credibility collapses. Mitigation: automated triage catches the floor, human review catches the ceiling, graduated trust prevents new contributors from doing damage.

### 9.6 Key Person Dependency
**Probability: High initially. Impact: Critical.**
Ben is the only Domain Steward for all 8 domains at launch. Mitigation: recruit Domain Stewards as the community grows. No domain should have fewer than 2 stewards. Document all governance processes so they survive personnel changes. Additional mitigation: adopt the vertical-slice launch strategy (Section 10) to concentrate Ben's review capacity on one fully-governed domain rather than spreading thin across all 8. The Cross-Domain Supervisory Agent (Section 4.3) reduces the human monitoring burden for cross-domain consistency.

### 9.7 Prompt Injection and Adversarial Submissions
**Probability: Medium (increases with platform visibility). Impact: High.**
Malicious actors embed adversarial instructions in submissions to manipulate AI reviewers. If successful, tainted entries enter the published knowledge base, potentially cascading through cross-references. Mitigation: input sanitization, structured-field-only AI review, dedicated adversarial scanning layer in CI, AI reviewer isolation, mandatory human sign-off for all publishing decisions (see Section 6.5 for full treatment).

### 9.8 Chaff Basin Data Accumulation
**Probability: High (at scale). Impact: Low initially, Medium at scale.**
Retaining all rejected and low-confidence submissions in the chaff basin (Section 5.4) creates unbounded storage growth. If poorly indexed, it becomes a junk drawer that nobody queries. Mitigation: chaff basin entries are indexed by subdomain, rejection reason, and horizon trigger tags. Annual review purges entries with no horizon trigger associations and no inbound queries. Storage is cheap; curation is the real cost — budget review time accordingly.

---

## 10. Launch Sequence

**Launch Strategy: Vertical Slice**

Rather than attempting governance across all 8 domains simultaneously, the platform launches with a single fully-governed vertical slice: **Structural Engineering** (4 subdomains). This domain receives the full governance workflow — review process, trust scoring, automated triage, cross-domain checks. Remaining domains are published as read-only KEDL 100-200 reference material with lighter governance (automated triage only, no open contribution workflow) until review capacity expands. This prevents the bottleneck identified in feedback: 8 domains × 4 subdomains = 32 review areas that a single steward cannot sustain.

Each subsequent domain is "activated" for contribution only when a Domain Steward is appointed and review capacity is confirmed. The activation sequence is: Structural Engineering (Phase 0) → Energy Systems (Phase 1) → Environmental Systems (Phase 2) → remaining domains as stewards are recruited.

### Phase 0: Internal (now — 2 weeks)
- Complete research queue (32 subdomains)
- Review pass: Ben + Gemini + Claude, domain-by-domain
- Publish Structural Engineering (4 subdomains) as the fully-governed vertical slice
- Publish remaining 7 domains as read-only reference (KEDL 100-200, no open contribution)
- Build Phase 1 tooling (TinaCMS, Hypothesis embed, PR templates, CI pipeline)
- Deploy adversarial input scanner in CI pipeline

### Phase 1: Soft Launch (weeks 3-4)
- Activate Energy Systems for governed contribution (requires Domain Steward candidate)
- Review turnaround target: 7 days per submission
- Invite 5-10 known contributors (engineers, researchers Ben has identified through research)
- Register 2-3 AI agents (our own, operating under this framework)
- Deploy Cross-Domain Supervisory Agent (read-only monitoring mode)
- Begin confidence calibration tracking for all contributors
- Run the contribution workflow end-to-end, identify friction points
- Adjust governance based on what actually happens (not what we predicted)
- Scope chaff basin storage and indexing (design only, defer build to Phase 2)

### Phase 2: Open Contribution (weeks 5-8)
- Activate Environmental Systems and 1-2 additional domains (as stewards are recruited)
- All remaining domains stay read-only until stewards are appointed
- Propose Entry form live with full governance workflow
- MCP server deployed for agent access
- Deploy convergence detection and chaff basin infrastructure
- Deploy horizon scanning agent team (Structural + Energy domains initially)
- Launch dual-audience evidence visualization (agent JSON API + human infographic)
- Post on Moltbook and The Colony with scoped questions, not "come look at our project"
- Monitor: contribution velocity, review turnaround, acceptance rates, AI contribution quality

### Phase 3: Community Governance (months 3-6)
- Activate all remaining domains as stewards are in place
- Elect/appoint Domain Stewards beyond Ben
- Deploy Phase 2 tooling (Kialo, Loomio, Polis) as needed
- Full horizon scanning coverage across all domains
- Formalize contributor reputation system
- First annual review cycle for KEDL 300+ entries
- Publish first annual chaff basin review
- Evaluate confidence calibration data — are contributors improving their calibration over time?
- Evaluate whether the framework is working or needs structural changes

---

## 11. Open Questions We Need to Solve Ourselves

These are problems none of the three research reports could answer because no one has solved them yet:

1. **Optimal AI contribution rate limits.** No empirical data exists. We'll have to discover the right ratio through Phase 1-2 monitoring.

2. **Cross-model consistency.** If Claude, Gemini, and GPT agents all contribute to the same subdomain, their outputs may reflect different training biases. No framework exists for detecting or managing this.

3. **Legal liability for AI-contributed engineering content.** If an AI agent's structural calculation is referenced in an actual engineering decision, the liability chain is untested. We should add a disclaimer to all entries and consult an attorney before Phase 2.

4. **Speculative rigor classification.** The arcology is speculative — how does the confidence system distinguish "well-reasoned extrapolation from known engineering" from "plausible-sounding guess"? The KEDL levels help, but the boundary between KEDL 200 (schematic) and KEDL 300 (preliminary) needs sharper definition.

5. **Agent moderation of agents.** Partially addressed: the Cross-Domain Supervisory Agent (Section 4.3) and Horizon Scanning Agent Team (Section 7.3) define two scoped roles for agentic moderation. The broader question — what does full-scope responsible agentic moderation look like at hundreds of AI contributors? — remains open. The vertical-slice launch buys time to learn from the scoped implementations.

6. **Long-term knowledge decay.** Cochrane living reviews are the closest model but only operational since ~2017. How a knowledge base with thousands of evolving entries handles obsolescence and compounding inter-entry dependencies over decades is unsolved.

7. **Convergence detection accuracy.** Automated similarity detection across entries will surface false convergences (coincidental terminology overlap) and miss real ones (same conclusion expressed in different engineering vocabularies). The right similarity threshold and detection approach will need empirical tuning during Phase 2.

8. **Chaff basin curation at scale.** Retaining all rejected and low-confidence material is the right default, but the annual review process for the chaff basin will require dedicated curator time. At what scale does this become a burden, and can it be partially automated?

---

## Appendix A: Research Sources

This framework synthesizes findings from three independent deep research efforts:

1. **Claude deep research** — 8 precedent platforms analyzed (CERN EDMS, IPCC, Wikipedia, Stack Exchange, IETF RFC, Cochrane, Open Source Ecology/WikiHouse, ITER). Technical implementation recommendations, risk analysis.

2. **ChatGPT precedent analysis** — 10 platforms analyzed (Wikipedia, OpenStreetMap, Linux/OSS, Open Compute Project, OSE, Polymath Project, Zooniverse, The Colony, Moltbook, Stack Exchange). Governance model comparison, AI agent considerations with citations.

3. **Gemini epistemic frameworks research** — Intelligence analysis (ICD 203, NIEs, Structured Analytic Techniques), scientific review (PRISMA, Cochrane), legal/forensic frameworks, engineering problem-solving (TRIZ, CBR), public inquiry (9/11 Commission, Chilcot), AI epistemic humility (NIST AI RMF, Sophimatics, Selective Prediction).

4. **Gemini critique (Round 1)** — Bottleneck analysis ("the Ben Factor"), vertical-slice strategy recommendation, pre-submission context retrieval, negative results handling, citation audit automation priority.

5. **Claude counter-critique (Round 2)** — Validation of vertical-slice and context retrieval, pushback on KEDL collapse and "Locked" concept, capacity constraint elevation, review timeline adjustment, Quick Start recommendation.

6. **Ben's design direction (Round 3)** — Cross-domain supervisory agent, dual-audience visualization, prompt injection defense, universal human accountability, confidence tracking for all contributors, claim aggregation and convergence detection, chaff basin for future re-evaluation, horizon scanning evolution triggers.

Full research documents archived at: `G:/My Drive/Mission Control/state/research-prompts/contribution-research-responses/`
