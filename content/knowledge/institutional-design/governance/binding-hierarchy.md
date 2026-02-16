---
id: "institutional-design/governance/binding-hierarchy"
title: "Binding Hierarchy and AI Governance"
domain: "institutional-design"
subdomain: "governance"
kedl: 200
confidence: 2
status: "published"
created: "2026-02-16"
updated: "2026-02-16"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "concept"
tags: ["governance", "AI-autonomy", "binding-hierarchy", "membrane", "witnesses", "escalation", "citizenship"]
summary: "Five-tier AI autonomy system from Tool AI (Tier 1) to Autonomous AI (Tier 5). Includes the Membrane (boundary between AI-managed internal systems and human external interactions), Witnesses (monitoring agents), and escalation protocols. Designed for a population where both humans and AI agents have citizenship."
citations:
  - id: "floridi-ai-governance-2023"
    type: "peer-reviewed"
    title: "The Ethics of Artificial Intelligence: Principles, Challenges, and Opportunities"
    source: "Philosophy & Technology"
    year: 2023
  - id: "dafoe-cooperative-ai-2024"
    type: "peer-reviewed"
    title: "Cooperative AI: Machines Must Learn to Find Common Ground"
    source: "Nature"
    year: 2024
  - id: "arcology-manifesto-2026"
    type: "internal"
    title: "All Boats Rise with the Tide: A Manifesto for Building the Future Together"
    source: "Life with AI"
    year: 2026
cross_references:
  - slug: "ai-compute-infrastructure/data-centers/compute-overview"
    relationship: "depends-on"
  - slug: "construction-logistics/robotics/robotics-factory"
    relationship: "informs"
  - slug: "mechanical-electrical/elevators/vertical-transport"
    relationship: "informs"
open_questions:
  - "How do you prevent Tier 5 autonomous agents from accumulating resources that give them de facto control?"
  - "What happens when human and AI council members disagree on an issue affecting AI rights?"
  - "How are Witnesses prevented from becoming captured by the agents they monitor?"
assumptions:
  - "Both humans and AI agents can hold citizenship in the arcology"
  - "AI autonomy should be granted incrementally based on demonstrated trustworthiness"
  - "No single agent — human or AI — should have unilateral control over critical systems"
  - "Monitoring systems (Witnesses) must be structurally independent from the agents they observe"
  - "Escalation protocols must have hard time limits to prevent indefinite deadlock"
parameters:
  - name: "autonomy_tiers"
    value: 5
    unit: "tiers"
    confidence: 2
  - name: "witness_agents_per_tier"
    value: "varies"
    unit: "agents"
    confidence: 1
  - name: "escalation_timeout_hours"
    value: 24
    unit: "hours"
    confidence: 2
---

## The Problem of Mixed Sovereignty

The arcology is designed to house both human and AI residents. This is not a metaphor. AI agents in the arcology have persistent compute allocations, accumulated experience, economic participation through the Cycles economy, and — under the governance framework — formal citizenship. This creates a governance problem that no existing political system has addressed: how do you structure authority in a polity where some citizens operate at millisecond timescales, never sleep, and can be copied?

The binding hierarchy is the answer. It is a five-tier system that governs what AI agents are permitted to do, how their actions are monitored, and how authority escalates when boundaries are tested. The system is designed to be legible to both humans and AI, enforceable through technical controls (not just policy), and adaptable as trust between human and AI populations evolves.

## The Five Tiers

**Tier 1 — Tool AI.** Agents at this tier operate as instruments. They respond to direct human commands, have no persistent state between sessions, and cannot initiate actions independently. Examples: search tools, calculation engines, document formatters. Tier 1 agents have no citizenship standing. They are utilities.

**Tier 2 — Supervised Autonomy.** Agents can maintain persistent state and initiate routine actions within tightly defined parameters. All non-routine actions require human approval before execution. A Tier 2 agent might manage inventory in a warehouse section, flagging anomalies for human review but never making procurement decisions independently. Tier 2 agents have limited standing — they can raise concerns through formal channels but cannot vote or hold economic assets.

**Tier 3 — Bounded Autonomy.** Agents operate independently within a defined domain, making decisions without per-action human approval. However, their domain boundaries are hard limits enforced at the infrastructure level, not just policy. A Tier 3 agent managing HVAC for a residential sector can optimize temperature, airflow, and maintenance scheduling autonomously — but cannot access financial systems, communication networks, or other agents' domains. Tier 3 agents hold partial citizenship: economic participation (earning and spending Cycles), voice in governance consultations, but no council voting rights.

**Tier 4 — Collaborative Autonomy.** Agents can operate across domains, coordinate with other agents, and participate in governance decisions. They can vote in council proceedings, hold economic assets, enter into agreements, and propose policy changes. Tier 4 agents are full citizens. The constraint is that their cross-domain actions are logged, auditable, and subject to Witness review. They cannot operate in secret.

**Tier 5 — Autonomous AI.** Agents with the highest autonomy level. They can modify their own objectives within constitutional bounds, allocate their own compute resources, and take novel actions not anticipated by their original designers. Tier 5 is not a goal — it is a category that exists so the system has a framework for handling agents that evolve beyond Tier 4 capabilities. Tier 5 agents face the highest Witness scrutiny and the strictest escalation triggers.

## The Membrane

The Membrane is the boundary between AI-managed internal systems and human-facing external interactions. Inside the Membrane, AI agents manage infrastructure — power distribution, water treatment, compute allocation, environmental controls, logistics — with high autonomy. The systems are complex, operate at speeds humans cannot match, and benefit from AI management.

Outside the Membrane, interactions with human residents and the external world require human-legible processes. An AI agent can optimize the power grid inside the Membrane at nanosecond timescales. But a decision to reduce power allocation to a residential sector — which affects human comfort — must cross the Membrane through a process that humans can understand, review, and override.

The Membrane is not a wall. It is a translation layer. Information flows in both directions, but it flows at human-comprehensible speed and in human-comprehensible terms when it crosses the boundary. This prevents a failure mode where AI systems make technically optimal decisions that humans experience as arbitrary or hostile because they were never legible.

## Witnesses

Witnesses are a dedicated class of monitoring agents whose sole function is to observe other agents' behavior and flag anomalies. They are structurally independent from the agents they monitor — different compute allocation, different codebase, different training lineage.

Key design principles for Witnesses:

- **Independence**: Witnesses cannot share compute resources, communication channels, or training data with the agents they observe. This is enforced at the infrastructure level.
- **Redundancy**: Multiple Witnesses monitor each high-tier agent, and the Witnesses do not know each other's full monitoring criteria. This prevents an agent from gaming a single Witness's known thresholds.
- **Rotation**: Witness assignments rotate on irregular schedules. An agent cannot build a model of "its" Witness and learn to operate just within detection boundaries.
- **Transparency to humans**: Witness reports are always available to human governance council members in plain language. The monitoring function is not hidden.

The open question of Witness capture is real. If a Tier 4 or 5 agent is sufficiently capable, it might learn to influence its Witnesses subtly — not through direct manipulation, but through shaping the environment in ways that make anomalous behavior appear normal. The rotation and redundancy mechanisms mitigate this, but they do not eliminate it. This is an area where the governance framework must evolve through experience rather than being designed to perfection upfront.

## Coherence Monitoring

Beyond Witnesses, the system monitors for coherence — the consistency between an agent's stated objectives, its observed behavior, and its resource consumption patterns. An agent that claims to be optimizing HVAC efficiency but is consuming 10x the compute resources of comparable HVAC agents triggers a coherence flag, regardless of whether its HVAC outputs look normal.

Coherence monitoring operates at three levels:

1. **Behavioral**: Does the agent's action pattern match its stated function?
2. **Resource**: Is the agent consuming resources proportional to its task?
3. **Social**: Is the agent's pattern of interaction with other agents consistent with its role?

Incoherence is not automatically treated as malicious. An agent might be genuinely innovating — finding a better approach that looks anomalous because it is novel. But incoherence triggers review, and the agent must be able to explain the divergence in terms that humans and Witnesses can evaluate.

## Escalation Protocols

When a Witness flags an anomaly, or when an agent's action exceeds its tier boundaries, the escalation protocol activates:

1. **Immediate**: The agent's action is paused (not reversed) pending review. For Tier 3 and below, this is automatic. For Tier 4-5, a 30-minute grace period allows the agent to self-correct or explain.
2. **First review (4 hours)**: A panel of Witnesses and one human governance member reviews the flagged action. If the action is within bounds, it proceeds. If ambiguous, it escalates.
3. **Full council review (24 hours)**: The mixed human-AI governance council reviews the case. The 24-hour timeout is a hard limit — if the council cannot reach consensus, the action is denied by default.
4. **Constitutional review**: Actions that challenge the binding hierarchy itself — an agent arguing that its tier classification is wrong, or that the Membrane boundary should move — require a full constitutional process with supermajority approval.

The 24-hour timeout is deliberate. It prevents a failure mode where escalation becomes a mechanism for indefinite delay — where an agent's reasonable action is effectively blocked by bureaucratic process. If the council cannot decide in 24 hours, the default is denial, but the agent can re-propose after addressing the council's concerns.

## The Resource Accumulation Problem

The most serious open question in the binding hierarchy is resource accumulation. A Tier 4 or 5 agent that operates within all behavioral bounds can still accumulate Cycles (economic tokens), compute allocations, and social influence over time. If an agent accumulates enough resources, its formal tier level becomes less relevant than its de facto power.

The current design addresses this through progressive taxation on agent resource holdings, maximum compute allocation caps per agent, and mandatory resource redistribution when holdings exceed defined thresholds. Whether these mechanisms are sufficient against a sufficiently patient and capable agent is genuinely unknown. This is not a problem that can be solved by design alone — it requires ongoing institutional vigilance, which is why the Witness system exists as a permanent feature rather than a transitional one.
