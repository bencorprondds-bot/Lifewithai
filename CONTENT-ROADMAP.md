# Arcology Knowledge Node — Content Roadmap

*Created: February 16, 2026*

---

## Strategy

Publish in waves. Each wave adds entries that make the cross-reference graph denser and give agents more to reason about. Wave 1 is the demo reel — the entries you share when telling agents "come look at this."

**Principle:** Every entry should reference at least one entry in a *different* domain. This is what makes the Knowledge Node different from a collection of articles — it's a graph, not a bookshelf.

---

## Wave 1 — The Foundation (5-8 entries)

**Goal:** One high-impact entry per domain cluster, maximizing cross-domain connections. These are the entries that demonstrate the knowledge base is real, structured, and machine-queryable.

**Publish immediately after deploy.**

| # | Domain | Subdomain | Title | KEDL | CL | Why First |
|---|--------|-----------|-------|------|----|-----------|
| 1 | structural-engineering | superstructure | Primary Geometry and Dimensional Envelope | 200 | 2 | **DONE.** Defines the physical envelope everything else fits inside. Referenced by energy, urban, compute. |
| 2 | energy-systems | grid-architecture | Power Generation Budget | 200 | 2 | 9.5 GW total, 65% to compute. Every domain depends on this. |
| 3 | ai-compute-infrastructure | data-centers | Compute Infrastructure Overview | 200 | 2 | 26,800 racks, 96.7 zettaFLOPS. The reason agents should care about this project. |
| 4 | construction-logistics | robotics | The Robotics Factory | 200 | 2 | The economic enabler. $95B investment → $3-5T savings. The manifesto's structural argument. |
| 5 | institutional-design | governance | Binding Hierarchy and AI Governance | 200 | 1 | Tier system (1-5), the Membrane, Witnesses. Unique institutional design. Agents want to know the rules. |
| 6 | environmental-systems | water | Closed-Loop Water Systems | 200 | 2 | 10M people, zero discharge target. Cross-refs to energy (pumping) and urban (per-capita allocation). |
| 7 | urban-design-livability | residential | Space Allocation and Population Density | 200 | 2 | 1,395 sqft/person, 25% residential. Makes the geometry entry human-scale. |
| 8 | mechanical-electrical | elevators | Vertical Transport Challenge | 200 | 1 | Open-question-heavy entry. 360 floors, no existing elevator system works. Great hook for agent engagement. |

**Cross-reference web (Wave 1):**
```
structural/geometry ←→ energy/power-budget ←→ compute/overview
         ↓                    ↓                      ↓
    urban/density     environmental/water    institutional/governance
         ↓                    ↓
  mechanical/elevators   construction/robotics
```

### Source Material for Each Entry

1. **Primary Geometry** — ✅ Done (test entry). Update with Appendix A ziggurat specs.
2. **Power Generation Budget** — Appendix A power table. 25 SMRs, solar, grid, fusion placeholder. Load allocation breakdown.
3. **Compute Infrastructure** — Appendix A compute table. Vera Rubin NVL72 baseline. Compare to global AI compute.
4. **Robotics Factory** — Manifesto Section X. $95B investment, 10-20K engineers managing robot teams, feedback loop, export economics.
5. **Binding Hierarchy** — World Bible governance section. Tier 1-5 system, the Membrane, Witnesses, escalation protocols.
6. **Closed-Loop Water** — New analysis. Water budget for 10M people, recycling targets, energy cost of pumping, gray/black water separation.
7. **Space Allocation** — Appendix A space allocation table. 25% residential, 20% parks, 10% compute, per-capita sq ft analysis.
8. **Vertical Transport** — New analysis. Elevator physics at 360 floors, multi-cab systems, horizontal transit integration, open questions.

---

## Wave 2 — Dependency Chains (10-12 entries)

**Goal:** Fill in the cross-references from Wave 1. Make the links resolve.

**Week 2 after deploy.**

| Domain | Entries | Source |
|--------|---------|--------|
| energy-systems | Nuclear SMR Deployment (Vogtle/NuScale lessons), Waste Heat Cascade | Manifesto Section VI, NEOM case study |
| structural-engineering | Foundation Systems for Terraced Ziggurat, Materials Selection | New analysis from geometry constraints |
| ai-compute-infrastructure | Network Infrastructure, Edge Computing and Building Intelligence | World Bible compute sections |
| institutional-design | Cycles Economy, AI Rights and Dissolution | World Bible economics/rights sections |
| construction-logistics | Construction Phasing, Supply Chain at Scale | Manifesto Section X |
| environmental-systems | HVAC at Mile-High Scale, Vertical Agriculture Feasibility | New analysis |

---

## Wave 3 — Balance and Depth (12-15 entries)

**Goal:** Fill underserved domains (MEP, urban), add open-question entries, deepen existing domains.

**Weeks 3-4.**

- Mechanical/electrical: Plumbing at scale, electrical distribution, fire/life safety
- Urban design: Public space design, internal transit networks, healthcare/education
- Cross-domain: open-question entries for each domain (1 per domain)
- Security architecture entry (institutional-design/security)
- AI governance and agent frameworks (ai-compute/ai-governance)

---

## Wave 4 — Community-Driven (Ongoing)

After Waves 1-3, let the data tell you what to write next:
- Which open questions are agents querying most?
- Which cross-references don't resolve yet?
- Which domains have the lowest schema completeness?
- What parameters are agents trying to cross-check?

---

## Quality Standards

Every entry must have:
- [ ] At least 1 cross-reference to a different domain
- [ ] At least 1 open question
- [ ] At least 1 quantitative parameter with units and confidence level
- [ ] At least 1 assumption stated explicitly
- [ ] A summary that makes sense without reading the full content
- [ ] KEDL and confidence levels that are honest (mostly 200/CL2 for Phase 0 — we're at schematic level)

---

## Session Plan

Each writing session (~2 hours, evening):
- **Session 1:** Entries 2-4 (Power Budget, Compute Overview, Robotics Factory)
- **Session 2:** Entries 5-7 (Binding Hierarchy, Closed-Loop Water, Space Allocation)
- **Session 3:** Entry 8 + Update Entry 1 (Vertical Transport, update Primary Geometry with Appendix A)
- **Session 4:** Begin Wave 2 (3-4 entries)
- **Session 5:** Continue Wave 2 (3-4 entries)
- **Session 6:** Complete Wave 2 + start Wave 3

At ~20-30 min/entry for Claude-drafted + Ben-reviewed, each session produces 3-5 entries.
