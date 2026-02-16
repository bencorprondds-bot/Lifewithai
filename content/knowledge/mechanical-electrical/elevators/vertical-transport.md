---
id: "mechanical-electrical/elevators/vertical-transport"
title: "Vertical Transport Challenge"
domain: "mechanical-electrical"
subdomain: "elevators"
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
entry_type: "open-question"
tags: ["elevators", "vertical-transport", "maglev", "ropeless", "MULTI", "transit", "floor-area", "tier-transfer"]
summary: "Moving 10 million people vertically through 360 floors using no existing elevator technology. Analysis of why conventional cable elevators fail above ~500m, multi-cab systems (ThyssenKrupp MULTI), ropeless magnetic levitation concepts, and the integration challenge with horizontal transit. The most open engineering question in the entire project."
citations:
  - id: "thyssenkrupp-multi-2024"
    type: "project-data"
    title: "MULTI: Ropeless Elevator System Development and Testing"
    source: "TK Elevator"
    year: 2024
  - id: "ctbuh-vertical-transport-2023"
    type: "peer-reviewed"
    title: "Vertical Transportation in Megatall Buildings: Technology Limits and Future Systems"
    source: "CTBUH Journal"
    year: 2023
  - id: "arcology-manifesto-2026"
    type: "internal"
    title: "All Boats Rise with the Tide: A Manifesto for Building the Future Together"
    source: "Life with AI"
    year: 2026
cross_references:
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "urban-design-livability/residential/space-allocation"
    relationship: "informs"
  - slug: "construction-logistics/robotics/robotics-factory"
    relationship: "informs"
open_questions:
  - "Can ropeless maglev elevator technology scale to 360 floors?"
  - "What is the transfer penalty when riders must change elevator systems at tier boundaries?"
  - "How much floor area do elevator shafts consume — and does this eat into the 70% usability ratio?"
  - "Can horizontal transit within tiers reduce vertical demand?"
assumptions:
  - "Conventional cable elevator systems are limited to approximately 500m of travel height"
  - "The arcology's 10 tiers with ~36 floors each create natural transfer points at tier boundaries"
  - "Peak hour vertical demand could require moving 500,000-1,000,000 people per hour"
  - "Elevator shaft floor area must be accounted for within the 30% non-usable structural allocation"
parameters:
  - name: "total_floors"
    value: 360
    unit: "floors"
    confidence: 2
  - name: "max_cable_elevator_height_m"
    value: 500
    unit: "meters"
    confidence: 2
  - name: "population"
    value: 10000000
    unit: "people"
    confidence: 2
  - name: "peak_hour_demand_trips"
    value: 750000
    unit: "trips/hour (estimate range: 500K-1M)"
    confidence: 1
  - name: "elevator_shaft_floor_area_pct"
    value: 10
    unit: "percent (estimate range: 8-12)"
    confidence: 1
---

## The Problem Statement

No elevator system on Earth can move people through 360 floors. This is not an incremental engineering challenge — it is a categorical one. The tallest elevator installation in operation (as of 2026) serves the Burj Khalifa at 636 meters, using a two-stage system with a sky lobby transfer at level 43. The Jeddah Tower, if completed, would push this to approximately 660 meters. The arcology requires vertical transport through approximately 1,524 meters — more than double the height of any existing system, serving a population 1,000x larger than the Burj Khalifa's daily occupants.

This is the most open engineering question in the entire arcology project. Structural design, power generation, water systems, and compute infrastructure all have identifiable paths from current technology to the required scale. Vertical transport does not. It requires either a fundamental technology change (ropeless systems), a creative architectural solution (tiered transfer networks), or — most likely — both.

## Why Cable Systems Fail

Conventional traction elevators use steel ropes (or modern carbon-fiber composites) running over a sheave at the top of the shaft. The physics problem is simple: the rope must support its own weight plus the cab weight plus the counterweight. As height increases, the rope's self-weight grows linearly, eventually exceeding the rope's strength.

**Steel ropes**: Maximum practical travel height of approximately 500 meters. Beyond this, the rope weight requires progressively thicker ropes, which require larger sheaves, which require more powerful motors, in a feedback loop that becomes uneconomical around 500-600m.

**UltraRope (Kone, carbon fiber)**: Reduces rope weight by approximately 60% compared to steel, extending maximum travel height to approximately 1,000 meters. Kone's UltraRope installation in the Jeddah Tower targets 660m. Even at the theoretical limit, a single-run UltraRope system reaches only two-thirds of the arcology's height.

**Double-deck cabs**: Serve two floors per stop, improving throughput by approximately 30% but not addressing the height limitation.

No rope-based system can serve the full height of the arcology in a single run. Period.

## Candidate Technologies

### Ropeless Magnetic Levitation (TK Elevator MULTI)

ThyssenKrupp (now TK Elevator) demonstrated the MULTI system in a test tower in Rottweil, Germany: a ropeless elevator where the cab is propelled by linear induction motors along guide rails, similar to a vertical maglev train. The MULTI system's key innovation is that multiple cabs can share a single shaft, moving both vertically and horizontally, with no rope limiting travel height.

MULTI's theoretical advantages for the arcology:
- No height limit (propulsion is distributed along the shaft, not concentrated at the top)
- Multiple cabs per shaft increase throughput by 50%+ versus conventional one-cab-per-shaft
- Horizontal movement capability allows cabs to transfer between shafts, enabling network routing
- Energy regeneration during descent

MULTI's current limitations:
- Only demonstrated in a test tower of modest height (~250m)
- Linear motor efficiency decreases with speed; high-speed long-distance travel is energy-intensive
- The guide rail system requires extreme precision over hundreds of meters — thermal expansion, structural movement, and construction tolerances become critical
- No installation has operated at anything approaching commercial scale or the duty cycles required for 10 million residents

### Pneumatic / Vacuum Systems

Evacuated tube transport concepts (similar to Hyperloop) could theoretically provide rapid vertical movement in partial-vacuum shafts. The reduced air resistance would improve energy efficiency at high speeds. However, the safety implications of vacuum-based personnel transport in a residential building are severe — a breach in a vacuum shaft is an immediate life-safety event, not a maintenance issue. This technology remains speculative for vertical transport applications.

### Cable Relay Systems

A more conservative approach: use conventional cable elevators within each tier (36 floors, approximately 150m — well within cable limits), with express systems connecting tier lobbies. This is essentially how the Burj Khalifa works, scaled up:

- **Local elevators**: Cable systems serving 36 floors within a single tier (runs of ~150m)
- **Express elevators**: Serving only tier sky lobbies, with travel heights of up to 500m (covering 3-4 tiers per express zone)
- **Super-express**: Serving only the ground level and every third or fourth tier lobby

The relay system requires passengers to transfer between elevator systems at tier boundaries — analogous to changing subway lines. This works, but the transfer penalty is real.

## The Transfer Penalty

Every transfer costs time, creates congestion at transfer points, and reduces the system's perceived convenience. Research on urban transit systems consistently shows that riders value transfer-free trips 2-3x more than equivalent-time trips with transfers. A trip from Tier 1 to Tier 8 requiring two transfers (local to express at Tier 1 lobby, express to local at Tier 8 lobby) might take 15-20 minutes including wait times — acceptable for a commute, but not for the sense of seamless connectivity that makes the arcology feel like one city rather than ten stacked neighborhoods.

The design challenge is minimizing transfers while keeping shaft infrastructure within bounds. One approach: express elevators that serve non-contiguous tiers, combined with horizontal transit within tiers. A resident on Tier 8, floor 280, takes a local elevator down 6 floors to the Tier 8 sky lobby, catches an express to the ground level, and arrives in approximately 8-12 minutes. Reverse for the trip up. Most daily trips (work, shopping, school) should be within a single tier or between adjacent tiers, reducing vertical demand.

## Floor Area Impact

This is the hidden cost. Every elevator shaft consumes floor area on every floor it passes through. In conventional high-rises, elevator cores consume 25-30% of the gross floor area. The arcology's assumption of 30% non-usable area (yielding a 70% usability ratio) must accommodate elevator shafts, stairs, mechanical risers, and structural columns.

Rough estimation of shaft area:

- A single elevator shaft (including structure and clearances): approximately 80-100 sqft per floor
- At 360 floors, a shaft running the full height occupies 28,800-36,000 sqft total
- For express shafts serving only tier lobbies, the shaft passes through all floors but stops at only 10

The total number of shafts required depends on the system capacity model, which depends on peak demand, which depends on how successfully horizontal transit reduces vertical trips. Estimates range from 8,000 to 15,000 shaft positions across the structure. At 10,000 shafts averaging 50 sqft per floor, the shaft floor area is 500 sqft per floor x 360 floors x 10,000 = approximately 1.8 billion sqft — roughly 2.3% of gross floor area.

But this estimate assumes most shafts are local (serving only one tier of 36 floors), not full-height. If the shaft count required for adequate service turns out to be higher — 15,000+ with more express routes — the percentage could reach 4-5% of gross area, eating significantly into the 30% non-usable allocation already shared with structural columns and mechanical systems.

## The Horizontal Transit Strategy

The most effective way to reduce vertical transport demand is to reduce the need for vertical trips. If each tier is a functionally complete neighborhood — with housing, employment, schools, parks, commercial services, and healthcare — most daily trips occur horizontally within a tier, not vertically between tiers.

This is the urban design implication of the vertical transport constraint. The space allocation (see space-allocation entry) distributes every land use across all tiers, not concentrating commercial in lower tiers and residential in upper tiers. A resident of Tier 7 should be able to live, work, shop, and socialize without leaving Tier 7 on most days. Vertical trips become occasional — visiting friends on another tier, attending a city-wide event at ground level, accessing specialized facilities.

Horizontal transit within tiers (people movers, light rail, cycling networks, walking paths) is conventional technology. Moving people horizontally across a 3.5-mile floor plate is a solved problem. The vertical transport challenge is manageable only if horizontal design minimizes vertical demand.

## Honest Assessment

This entry is classified as an open question for a reason. No candidate technology is proven at the required scale. The MULTI system is the most promising ropeless approach, but it has been demonstrated only in a test tower, not in a 1,500-meter, 10-million-person operational environment. The cable relay system works with existing technology but imposes transfer penalties that affect livability. The floor area consumption of any system eats into the structural budget.

The vertical transport solution will likely be a hybrid: ropeless express systems for inter-tier travel (when the technology matures), conventional cable systems for intra-tier local service, and an urban design strategy that minimizes the demand for vertical trips in the first place. The engineering risk is real — if ropeless systems do not mature on the construction timeline, the arcology may need to operate with cable relay systems for its first decade, accepting the transfer penalties while the technology catches up.

This is the one system in the arcology where the required technology does not yet exist at the required scale, and the fallback is a meaningful compromise, not just a performance reduction. Every other major system (power, compute, water, structure) has an identifiable path from here to there. Vertical transport has a gap.
