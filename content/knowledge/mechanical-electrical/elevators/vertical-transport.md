---
id: "mechanical-electrical/elevators/vertical-transport"
title: "Vertical Transport Challenge"
domain: "mechanical-electrical"
subdomain: "elevators"
kedl: 300
confidence: 2
status: "published"
created: "2026-02-16"
updated: "2026-02-28"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "open-question"
tags: ["elevators", "vertical-transport", "maglev", "ropeless", "MULTI", "transit", "floor-area", "tier-transfer", "sky-lobby", "UltraRope", "linear-motor", "transfer-penalty"]
summary: "Moving 10 million people vertically through 360 floors using no existing elevator technology. Analysis of why conventional cable elevators fail above ~500m, ropeless linear synchronous motor systems (TK Elevator MULTI), UltraRope carbon-fiber hoisting, transfer penalty quantification, floor area constraints from 135-building supertall study, and the thermal expansion challenge for guide rails over 1,524m. The most open engineering question in the entire project."
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
  - id: "iso-8100-32-2020"
    type: "standard"
    title: "ISO 8100-32:2020 — Planning and selection of passenger lifts to be installed in groups"
    source: "International Organization for Standardization"
    year: 2020
  - id: "ilgin-supertall-core-2023"
    type: "peer-reviewed"
    title: "Space Efficiency in Supertall Office Buildings"
    source: "International Journal of Architectural Engineering Technology"
    year: 2023
  - id: "appunn-multi-demonstrator-2018"
    type: "peer-reviewed"
    title: "MULTI — rope-less elevator demonstrator at test tower Rottweil"
    source: "Transportation Systems and Technology"
    year: 2018
  - id: "guo-wilson-transfer-2011"
    type: "peer-reviewed"
    title: "Assessing the cost of transfer inconvenience in public transport systems: A case study of the London Underground"
    source: "Transportation Research Part A"
    year: 2011
  - id: "zhang-vertical-15min-2025"
    type: "peer-reviewed"
    title: "Vertical 15-minute city: Modeling urban density and functional mix with multi-source geospatial data"
    source: "Cities"
    year: 2025
  - id: "wieler-thornton-lsm-2012"
    type: "peer-reviewed"
    title: "Linear Synchronous Motor Elevators Become a Reality"
    source: "Elevator World"
    year: 2012
  - id: "kone-ultrarope-2013"
    type: "project-data"
    title: "UltraRope: Carbon Fiber Elevator Hoisting Technology"
    source: "KONE Corporation / ENR"
    year: 2013
  - id: "ctbuh-ropeless-report-2019"
    type: "peer-reviewed"
    title: "Ropeless Elevator Systems"
    source: "Council on Tall Buildings and Urban Habitat"
    year: 2019
cross_references:
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "urban-design-livability/residential/space-allocation"
    relationship: "informs"
  - slug: "construction-logistics/robotics/robotics-factory"
    relationship: "informs"
  - slug: "urban-design-livability/transport/internal-transport"
    relationship: "informs"
open_questions:
  - "Can ropeless maglev elevator technology achieve commercial deployment, given that MULTI has zero installations after nine years of testing?"
  - "Given 24% core area in conventional supertalls, can the arcology's tiered design achieve 4-5% shaft area through sky lobby zoning?"
  - "By what percentage does self-contained tier design reduce vertical transport demand compared to conventional single-use high-rises?"
  - "What regulatory pathway exists for certifying ropeless multi-cab elevator systems for passenger transport?"
  - "Can guide rail alignment tolerances (<0.5mm) be maintained over 1,524m given steel thermal expansion of 18-55cm?"
assumptions:
  - "Conventional steel cable elevator systems are limited to approximately 500m of travel height"
  - "KONE UltraRope extends maximum single-run travel to approximately 1,000m using carbon-fiber composite belts"
  - "The arcology's 10 tiers with ~36 floors each create natural transfer points at tier boundaries"
  - "Peak vertical demand could require moving 300,000-800,000 people in a 5-minute peak window, depending on tier self-containment"
  - "Elevator shaft floor area must be accounted for within the 30% non-usable structural allocation"
  - "Each inter-tier transfer imposes approximately 17 equivalent in-vehicle minutes of perceived travel cost"
parameters:
  - name: "total_floors"
    value: 360
    unit: "floors"
    confidence: 2
  - name: "max_cable_elevator_height_m"
    value: 500
    unit: "meters"
    confidence: 2
  - name: "max_ultrarope_height_m"
    value: 1000
    unit: "meters"
    confidence: 3
  - name: "population"
    value: 10000000
    unit: "people"
    confidence: 2
  - name: "peak_5min_vertical_demand"
    value: 500000
    unit: "trips per 5-min peak (design range: 300K-800K)"
    confidence: 2
  - name: "elevator_shaft_floor_area_pct"
    value: 5
    unit: "percent of gross floor area (design range: 2-8)"
    confidence: 2
  - name: "transfer_penalty_eivm"
    value: 17
    unit: "equivalent in-vehicle minutes per transfer"
    confidence: 3
  - name: "multi_demonstrated_speed_mps"
    value: 5
    unit: "m/s (Rottweil test tower, 2018)"
    confidence: 3
  - name: "supertall_core_area_pct"
    value: 24
    unit: "percent of GFA (135-building average)"
    confidence: 3
  - name: "thermal_expansion_20c_cm"
    value: 36.6
    unit: "cm (steel guide rail at delta-T 20C over 1,524m)"
    confidence: 3
---

## The Problem Statement

No elevator system on Earth can move people through 360 floors. This is not an incremental engineering challenge — it is a categorical one. The tallest elevator installation in operation (as of 2026) serves the Burj Khalifa at 636 meters, using a two-stage system with a sky lobby transfer at level 43. The Jeddah Tower, if completed, would push single-run travel to approximately 653 meters using KONE's carbon-fiber UltraRope — the most advanced hoisting technology commercially available, with a rated maximum of 1,000 meters [kone-ultrarope-2013]. The arcology requires vertical transport through approximately 1,524 meters — more than 50% beyond even UltraRope's rated limit, serving a population 1,000x larger than the Burj Khalifa's 35,000 daily occupants.

This is the most open engineering question in the entire arcology project. Structural design, power generation, water systems, and compute infrastructure all have identifiable paths from current technology to the required scale. Vertical transport does not. It requires either a fundamental technology change (ropeless systems), a creative architectural solution (tiered transfer networks), or — most likely — both.

## Why Cable Systems Fail

Conventional traction elevators use steel ropes (or modern carbon-fiber composites) running over a sheave at the top of the shaft. The physics problem is simple: the rope must support its own weight plus the cab weight plus the counterweight. As height increases, the rope's self-weight grows linearly, eventually exceeding the rope's strength.

**Steel ropes**: Maximum practical travel height of approximately 500 meters. Beyond this, the rope weight requires progressively thicker ropes, which require larger sheaves, which require more powerful motors, in a feedback loop that becomes uneconomical around 500-600m.

**UltraRope (KONE, carbon fiber)**: A 2.5cm x 0.5cm belt containing four carbon-fiber cores in epoxy resin, manufactured by pultrusion [kone-ultrarope-2013]. At approximately one-seventh the weight of equivalent steel rope, UltraRope extends maximum single-run travel to approximately 1,000 meters. At a 500m run, a conventional steel rope system weighs approximately 29,000 kg; UltraRope reduces this to approximately 12,800 kg. The technology has been commercially deployed in buildings including Marina Bay Sands (Singapore), South Quay Plaza (London), ONE Frankfurt, and 110 North Wacker (Chicago), with the most ambitious installation specified for Jeddah Tower's 653-meter observation deck run. Operational speeds of 7 m/s have been confirmed in service, with designs targeting >10 m/s for Jeddah. Energy savings of 11-20% versus steel rope are attributed to the lower moving mass [kone-ultrarope-2013]. Even at UltraRope's theoretical limit, a single-run system reaches only two-thirds of the arcology's height.

**Double-deck cabs**: Serve two floors per stop, improving throughput by approximately 30% but not addressing the height limitation. Jeddah Tower's double-deck elevators carry 54 persons per cabin (108 across both decks) [ctbuh-vertical-transport-2023].

No rope-based system can serve the full height of the arcology in a single run. Period.

## Candidate Technologies

### Ropeless Magnetic Levitation (TK Elevator MULTI)

ThyssenKrupp (now TK Elevator) demonstrated the MULTI system in a 246-meter test tower in Rottweil, Germany: a ropeless elevator where the cab is propelled by ironless long-stator linear synchronous motors (LSM) along guide rails, with permanent magnet yokes fixed to the cab and distributed coil units along the shaft wall [appunn-multi-demonstrator-2018]. Multiple cabs share a single shaft, moving both vertically and horizontally, with no rope limiting travel height.

The Rottweil tests documented: vertical speed of 5 m/s, horizontal speed of 0.2 m/s, maximum vertical acceleration of 1.2 m/s squared (at the upper boundary of passenger comfort), position sensor accuracy of several micrometers, and fourfold redundant power supply [appunn-multi-demonstrator-2018]. Eight motor controllers per car operate in a double-array configuration with a DC-based power distribution architecture. The test tower itself is rated for 18 m/s, though MULTI has not been publicly tested at that speed.

MULTI's theoretical advantages for the arcology:
- No height limit — propulsion is distributed along the shaft, not concentrated at the top. As Wieler and Thornton note, eliminating ropes removes counterweights, cables, and pulley systems, enabling "unlimited hoistway heights" [wieler-thornton-lsm-2012]
- Multiple cabs per shaft increase throughput by up to 50% versus conventional one-cab-per-shaft [ctbuh-ropeless-report-2019]
- Horizontal movement capability allows cabs to transfer between shafts, enabling loop routing
- Energy regeneration during descent recovers 21-40% of traction energy, with an onboard energy buffer at 95-100% charge/discharge efficiency [appunn-multi-demonstrator-2018]
- Peak power demand reduced by up to 50% through onboard energy buffering
- Building usable area increases by up to 25% through reduced core footprint [ctbuh-ropeless-report-2019]

MULTI's current limitations are severe:
- **Zero commercial installations** as of February 2026 — nine years after the Rottweil inauguration [thyssenkrupp-multi-2024]. TK Elevator's FY 2024/2025 financial results do not mention MULTI; their flagship product is the conventional EOX platform. The global ropeless elevator market remains nascent at $155.6 million (2024).
- Demonstrated speed of 5 m/s is well below the 10-18 m/s needed for express service. LSM technology is theoretically capable of exceeding 20 m/s [wieler-thornton-lsm-2012], but this has not been demonstrated in a vertical elevator application.
- Passenger transport safety certification has not been publicly completed. EN 81-20 requires Unintended Car Movement Protection, which MULTI's power-off-equals-no-movement architecture addresses in principle, but formal certification has not been announced.
- Guide rail precision over 1,524 meters faces the thermal expansion challenge (see below).

The safety architecture includes onboard batteries for emergency movement to the nearest landing during power loss, multi-step braking that prevents free movement, and collision avoidance logic derived from TK Elevator's commercially deployed TWIN system [appunn-multi-demonstrator-2018]. The closest operational analog to ropeless LSM vertical transport is MagneMotion's Advanced Weapons Elevator on Ford-class aircraft carriers, which transports loads exceeding 20 tons using LSM with failsafe wedge brakes — a military system carrying munitions, not passengers [wieler-thornton-lsm-2012].

No other manufacturer has announced a competing ropeless multi-car product. KONE, Otis, Schindler, and Hitachi are not developing published alternatives. Academic work exists (notably Lim and Krishnan's 2007 IEEE paper on linear switched reluctance motor actuation), but nothing approaching commercial development.

### Pneumatic / Vacuum Systems

Evacuated tube transport concepts (similar to Hyperloop) could theoretically provide rapid vertical movement in partial-vacuum shafts. The reduced air resistance would improve energy efficiency at high speeds. However, the safety implications of vacuum-based personnel transport in a residential building are severe — a breach in a vacuum shaft is an immediate life-safety event, not a maintenance issue. This technology remains speculative for vertical transport applications.

### Cable Relay Systems

A more conservative approach: use conventional cable elevators within each tier (36 floors, approximately 150m — well within cable limits), with express systems connecting tier lobbies. This is how the Burj Khalifa works (sky lobbies at floors 43, 76, and 123 serving 35,000 daily occupants with 57 elevators), scaled up:

- **Local elevators**: Cable systems serving 36 floors within a single tier (runs of ~150m)
- **Express elevators**: Serving only tier sky lobbies, with travel heights of up to 500m (covering 3-4 tiers per express zone), potentially using UltraRope for the longest runs
- **Super-express**: Serving only the ground level and every third or fourth tier lobby

Round-trip time (RTT) analysis using the standard formula from ISO 8100-32 [iso-8100-32-2020] illustrates the throughput constraint:

- **36-floor local zone at 2.5 m/s**: RTT of approximately 385 seconds (6.4 minutes). With 6 cars per bank, the interval is 64 seconds — exceeding the 30-second office standard but meeting the 60-second residential standard. Higher speeds (4+ m/s) or sub-zoning into 18-floor half-tiers would be required for mixed-use zones.
- **10-stop express at 8 m/s**: RTT of approximately 148 seconds (2.5 minutes). With 4 cars, the interval is 37 seconds — adequate for shuttle service.

The relay system requires passengers to transfer between elevator systems at tier boundaries — analogous to changing subway lines. This works, but the transfer penalty is quantifiable and significant.

## The Transfer Penalty

Every transfer costs time, creates congestion at transfer points, and reduces the system's perceived convenience. The transport economics literature quantifies this precisely.

Guo and Wilson's 2011 study of the London Underground measured the "pure transfer penalty" at metro-to-metro interchanges: an average of 4.9 minutes of actual additional time, but the critical finding is that 68% of total transfer disutility is psychological — riders experience a transfer as far worse than the actual walking and waiting time would suggest [guo-wilson-transfer-2011]. This psychological component cannot be engineered away by shortening the walk between platforms. An international meta-analysis across transit systems in Madrid, Vitoria, and London found the pure transfer penalty equals approximately 17 equivalent in-vehicle minutes (EIVM) as a fixed additive cost per transfer, regardless of physical transfer duration.

For the arcology, this means: a trip from Tier 1 to Tier 8 requiring two transfers (local to express at Tier 1 lobby, express to local at Tier 8 lobby) carries a perceived penalty of approximately 34 EIVM — over half an hour of "felt" travel time on top of actual transit of 15-20 minutes. When inter-tier trips feel like intercity trips, the arcology stops functioning as one city. The design imperative is clear: minimize transfers to at most one for common trips, and ensure that most daily activities require zero vertical transfers.

## Floor Area Impact

This is the hidden cost. Every elevator shaft consumes floor area on every floor it passes through. A peer-reviewed study of 135 supertall buildings found that service cores (elevator shafts, stairs, mechanical risers, structural columns) consume an average of 24% of gross floor area, with space efficiency averaging approximately 72% [ilgin-supertall-core-2023]. In office supertalls, core area reaches 26% of GFA; residential supertalls achieve better efficiency at 19%. Elevator shafts typically constitute 50-60% of core area in office towers, implying elevator-specific floor consumption of 12-14% of GFA in conventional supertalls — and this percentage increases with height as more shafts and larger structural cores are needed.

The arcology's tiered design substantially reduces this burden. The original World Trade Center's sky lobby system demonstrated the principle: by terminating local elevator shafts at sky lobbies rather than running them the full building height, the WTC recovered approximately 75% of the shaft space that would otherwise have been consumed in upper floors [ctbuh-vertical-transport-2023]. In the arcology's 10-tier design, local shafts serve only 36 floors, and express shafts — while passing through all intermediate floors — require only a fraction of the shaft positions.

Rough estimation of shaft area for the tiered system:

- A single elevator shaft (including structure and clearances): approximately 80-100 sqft per floor
- Local shafts (serving one tier of 36 floors each): the dominant shaft type, terminated at tier boundaries
- Express shafts (running through multiple tiers): fewer in number but consuming area on every floor they traverse
- Estimates range from 8,000 to 15,000 shaft positions across the structure, with most being local

The total shaft area as a percentage of the arcology's gross floor area is estimated at 2-8%, depending on express shaft requirements and throughput demands — significantly below the 12-14% typical of conventional supertalls, thanks to the sky lobby zoning strategy and the arcology's much larger floor plates (which dilute the per-floor shaft percentage). However, if the system needs more shafts than projected to meet peak demand, the percentage rises. The 30% non-usable allocation shared with structural columns and mechanical systems provides the ceiling.

## The Horizontal Transit Strategy

The most effective way to reduce vertical transport demand is to reduce the need for vertical trips. If each tier is a functionally complete neighborhood — with housing, employment, schools, parks, commercial services, and healthcare — most daily trips occur horizontally within a tier, not vertically between tiers.

Zhang, Hou, and Long's 2025 study formalized this as the "vertical 15-minute city" framework, modeling over 90 million simulated trips in Nanjing to measure three-dimensional accessibility accounting for elevator wait times [zhang-vertical-15min-2025]. Their key finding: while overall accessibility declines with building height, access to offices and commercial facilities actually improves above floor 20 in mixed-use buildings — workers on high floors are closer to within-building amenities than ground-level residents are to equivalent services on the street. This provides the first empirical framework for evaluating whether vertical functional mixing can substitute for horizontal proximity.

This is the urban design implication of the vertical transport constraint. The space allocation (see space-allocation entry) distributes every land use across all tiers, not concentrating commercial in lower tiers and residential in upper tiers. A resident of Tier 7 should be able to live, work, shop, and socialize without leaving Tier 7 on most days. Vertical trips become occasional — visiting friends on another tier, attending a city-wide event at ground level, accessing specialized facilities.

Elevator traffic analysis supports this approach. The British Council for Offices found that lunchtime two-way traffic — interfloor trips for meals, errands, and socializing — is actually the most demanding elevator design case, requiring handling capacity of 13% or more of population per 5 minutes versus 12% for morning up-peak [iso-8100-32-2020]. In a building where lunch destinations are distributed within each vertical zone, this peak disperses across local elevator banks rather than concentrating in express shafts. A 2004 survey of London office buildings found actual morning peak usage was only 6% of building population, versus the 15% historical design standard — suggesting the industry systematically overestimates demand.

Horizontal transit within tiers (people movers, light rail, cycling networks, walking paths) is conventional technology. Moving people horizontally across a 3.5-mile floor plate is a solved problem. The vertical transport challenge is manageable only if horizontal design minimizes vertical demand.

## The Thermal Expansion Problem

A challenge critical at arcology scale but rarely discussed in the vertical transport literature: the precision of guide rails over 1,524 meters. Maglev-class guidance systems require alignment tolerances of less than 0.5mm, with a nominal air gap of approximately 15mm [wieler-thornton-lsm-2012].

Steel's coefficient of thermal expansion is 12 x 10^-6 per degree C. Over 1,524 meters, a temperature differential of 20 degrees C — a mild interior variation between lower and upper tiers given stack effect and solar gain — produces 36.6 cm of guide rail expansion. That is roughly 700 times the required alignment tolerance. Even a 10 degree swing produces 18.3 cm of expansion. At the extreme (30 degree differential), the expansion reaches 54.8 cm.

The Rottweil test tower illustrates the related challenge of structural movement: its 246-meter shell oscillates up to 75 cm laterally in wind [appunn-multi-demonstrator-2018]. A 1,524-meter structure would experience proportionally larger absolute deflections.

The engineering response must involve segmented guide rails with precision expansion joints — each tier boundary would be a natural segmentation point. But each joint introduces an alignment discontinuity that must be managed to sub-millimeter precision during thermal cycling. Active compensation systems (servo-driven rail adjustment, piezoelectric alignment) are theoretically feasible but have no published precedent at building scale. The U.S. Department of Transportation has studied thermal effects on maglev guideways in the context of high-speed ground transport, but that work addresses horizontal spans, not vertical structures with fundamentally different thermal gradients.

## Honest Assessment

This entry is classified as an open question for a reason. No candidate technology is proven at the required scale.

The MULTI system is the most promising ropeless approach, but after nine years of testing in Rottweil, it has zero commercial installations, no public safety certification, and a demonstrated speed of 5 m/s — half the minimum needed for express service [appunn-multi-demonstrator-2018]. TK Elevator's own financial reports focus on their conventional EOX platform, not MULTI [thyssenkrupp-multi-2024]. No competing ropeless product exists from any manufacturer.

KONE's UltraRope is the most commercially mature height-extension technology, with multiple installations worldwide and a rated maximum of 1,000 meters [kone-ultrarope-2013]. It does not solve the height problem for a 1,524-meter building, but it could serve express zones covering the lower two-thirds while ropeless technology matures for the upper reaches.

The cable relay system works with existing technology but imposes transfer penalties — approximately 17 EIVM per transfer, 68% of which is psychological and cannot be designed away [guo-wilson-transfer-2011] — that fundamentally affect whether the arcology feels like one city or ten stacked neighborhoods. And any ropeless system operating over the full building height must solve the thermal expansion problem: 36.6 cm of guide rail movement at a 20 degree temperature differential, against a required alignment tolerance of less than 0.5mm.

The vertical transport solution will likely be a hybrid: UltraRope-equipped express systems for the longest feasible runs (up to 1,000m), conventional cable systems for intra-tier local service, ropeless systems for inter-tier express service (when the technology matures and achieves certification), and an urban design strategy that minimizes vertical trips in the first place [zhang-vertical-15min-2025]. The engineering risk is real — if ropeless systems do not achieve commercial deployment on the construction timeline, the arcology may need to operate with cable relay systems for its first decade, accepting the transfer penalties while the technology catches up.

This is the one system in the arcology where the required technology does not yet exist at the required scale, and the fallback is a meaningful compromise, not just a performance reduction. Every other major system (power, compute, water, structure) has an identifiable path from here to there. Vertical transport has a gap — and the thermal expansion constraint adds a physical challenge that no amount of motor development alone can solve.
