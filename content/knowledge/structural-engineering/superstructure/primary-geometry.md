---
id: "structural-engineering/superstructure/primary-geometry"
title: "Primary Geometry and Dimensional Envelope"
domain: "structural-engineering"
subdomain: "superstructure"
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
entry_type: "analysis"
tags: ["geometry", "dimensions", "envelope", "floor-area", "ziggurat", "tiers", "setback", "wind-loading", "space-efficiency"]
summary: "Defines the primary geometric envelope of Arcology One — a terraced ziggurat form with a 3.5-mile base, 10 major tiers, and a central spire reaching approximately 5,000 feet. Total gross floor area of ~79.7 billion square feet housing 10 million residents at 1,395 sqft per capita. KEDL 300 upgrade grounds the setback geometry in bounded geometric analysis, validates the usability ratio against a 135-tower meta-analysis, quantifies wind load benefits of the stepped form from peer-reviewed CFD studies, and resolves the spire structural necessity question."
citations:
  - id: "ctbuh-tall-2023"
    type: "peer-reviewed"
    title: "Structural Systems for Supertall and Megatall Buildings"
    source: "CTBUH Journal"
    year: 2023
  - id: "jeddah-tower-2019"
    type: "project-data"
    title: "Jeddah Tower Engineering Assessment"
    source: "Adrian Smith + Gordon Gill Architecture"
    year: 2019
  - id: "arcology-manifesto-2026"
    type: "internal"
    title: "All Boats Rise with the Tide: A Manifesto for Building the Future Together"
    source: "Life with AI"
    year: 2026
  - id: "bhattacharyya-stepped-2021"
    type: "peer-reviewed"
    title: "Estimation of Wind Load on Stepped Tall Building Using CFD Simulation"
    source: "Iranian Journal of Science and Technology, Transactions of Civil Engineering, 45, 707+"
    year: 2021
  - id: "roy-setback-les-2024"
    type: "peer-reviewed"
    title: "Wind-Induced Aerodynamic Effects on Set-Back Tall Buildings Using LES"
    source: "Buildings 14(5), 1252"
    year: 2024
  - id: "du-supertall-efficiency-2024"
    type: "peer-reviewed"
    title: "Examining Space Efficiency in Supertall Towers through an Analysis of 135 Case Studies"
    source: "Buildings 14(5), 1295"
    year: 2024
  - id: "sarkar-space-efficiency-2024"
    type: "peer-reviewed"
    title: "Comparative Analysis of Space Efficiency in Skyscrapers with Prismatic, Tapered, and Free Forms"
    source: "Buildings 14(11), 3345"
    year: 2024
  - id: "moon-mile-high-2018"
    type: "peer-reviewed"
    title: "Developments of Structural Systems Toward Mile-High Towers"
    source: "CTBUH Journal"
    year: 2018
  - id: "ctbuh-vanity-height-2013"
    type: "peer-reviewed"
    title: "Vanity Height: the Empty Space in Today's Tallest"
    source: "CTBUH Journal 2013(III)"
    year: 2013
  - id: "konar-supertall-2025"
    type: "peer-reviewed"
    title: "Historical background, current trends and future prospects of supertall buildings"
    source: "Discover Civil Engineering"
    year: 2025
cross_references:
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "informs"
  - slug: "urban-design-livability/residential/space-allocation"
    relationship: "informs"
  - slug: "ai-compute-infrastructure/data-centers/compute-overview"
    relationship: "informs"
  - slug: "construction-logistics/robotics/robotics-factory"
    relationship: "depends-on"
  - slug: "mechanical-electrical/elevators/vertical-transport"
    relationship: "informs"
  - slug: "environmental-systems/hvac/atmospheric-control"
    relationship: "informs"
open_questions:
  - "What is the optimal setback angle per tier for both structural efficiency and livable terrace creation?"
  - "How do terrace-level vortex interactions scale at 1,500 m height with 10 stepped tiers — do CFD results from sub-200 m setback studies (showing 40-93% cross-wind moment reductions) extrapolate to this regime?"
  - "What is the minimum base footprint that supports the target floor area at this height?"
  - "Is a constant setback per tier optimal, or would a graduated profile (varying setback with height) improve structural efficiency, wind response, or terrace utility?"
assumptions:
  - "Target population of approximately 10 million residents"
  - "Terraced ziggurat form with 10 major tiers and central spire (~5,000 ft peak)"
  - "Base footprint of 3.5 miles per side (12.25 square miles / 7,840 acres)"
  - "Structure located in Burleson County, Texas (relatively benign seismic zone)"
  - "Average floor-to-floor height of 14 ft (blended residential/commercial)"
  - "30 subterranean levels at 16 ft floor-to-floor"
  - "70% usability ratio after deducting structure, mechanical, and vertical circulation"
parameters:
  - name: "peak_height_ft"
    value: 5000
    unit: "feet"
    confidence: 2
  - name: "peak_height_m"
    value: 1524
    unit: "meters"
    confidence: 2
  - name: "base_footprint_miles"
    value: 3.5
    unit: "miles per side"
    confidence: 2
  - name: "base_footprint_sqmi"
    value: 12.25
    unit: "square miles"
    confidence: 2
  - name: "major_tiers"
    value: 10
    unit: "tiers"
    confidence: 2
  - name: "setback_per_tier_ft"
    value: 550
    unit: "feet per side"
    confidence: 2
  - name: "terrace_depth_ft"
    value: 550
    unit: "feet"
    confidence: 2
  - name: "top_tier_width_ft"
    value: 8580
    unit: "feet per side"
    confidence: 2
  - name: "tier_height_ft"
    value: 504
    unit: "feet"
    confidence: 2
  - name: "floor_to_floor_avg_ft"
    value: 14
    unit: "feet"
    confidence: 2
  - name: "floors_per_tier"
    value: 36
    unit: "floors"
    confidence: 2
  - name: "total_above_ground_floors"
    value: 360
    unit: "floors"
    confidence: 2
  - name: "subterranean_levels"
    value: 30
    unit: "levels"
    confidence: 2
  - name: "gross_floor_area_bsqft"
    value: 79.7
    unit: "billion square feet"
    confidence: 2
  - name: "usable_floor_area_bsqft"
    value: 55.8
    unit: "billion square feet"
    confidence: 2
  - name: "usability_ratio"
    value: 0.7
    unit: "ratio"
    confidence: 2
  - name: "target_population"
    value: 10000000
    unit: "people"
    confidence: 2
  - name: "sqft_per_capita"
    value: 1395
    unit: "square feet/person"
    confidence: 2
---

## Overview

Arcology One takes the form of a terraced ziggurat — 10 major tiers stepping back from a 3.5-mile base, with a central spire reaching approximately 5,000 feet (~0.95 miles). This is not a conventional tower. The ziggurat form solves the fundamental problem of mile-high construction: you cannot stack a million-square-foot floor plate to 5,000 feet with a single structural system. But you can terrace a mountain. Moon (2018) identifies conjoined-tower superframes as the most promising structural approach for mile-high buildings [moon-mile-high-2018], but the ziggurat offers an alternative path: distributing load across a massive footprint rather than concentrating it in slender shafts.

The structure sits on a 12.25-square-mile footprint (7,840 acres) in Burleson County, Texas. For reference, Manhattan is 22.8 square miles. The arcology's footprint is roughly half of Manhattan, but its total usable floor area — 55.8 billion square feet — is equivalent to approximately 24,500 square miles of floor space stacked vertically. Roughly the area of West Virginia, inside a footprint you can see across.

The only comparable megastructure to receive serious engineering analysis was Shimizu Corporation's Mega-City Pyramid (2004): 2,004 m tall with an 8 km² (~3.1 sq mi) base, designed for 750,000 residents using a super-truss network of carbon nanotube struts [konar-supertall-2025]. Shimizu concluded the technology gap was 50-100 years and shelved the concept. Arcology One's wider base (12.25 vs. 3.1 sq mi) and dramatically lower aspect ratio (0.27:1 vs. ~0.72:1) partially address the structural challenges that made the Shimizu pyramid infeasible — but Arcology One must house 13x the population, demanding proportionally more internal volume and structural redundancy.

## Dimensional Envelope

**Above ground:**
- 10 major tiers, each approximately 36 floors (14 ft floor-to-floor average), yielding 504 ft per tier
- ~360 total above-ground floors
- Each tier sets back ~550 feet per side from the tier below
- Tier 1 (base): 18,480 ft per side (3.5 miles), maximum floor plate area of ~341.5 million sqft
- Tier 10 (top): ~8,580 ft per side (1.62 miles), floor plate of ~73.6 million sqft
- Each setback creates a terrace 550 feet deep — roughly two standard city blocks, wide enough for parks, agriculture, and substantial outdoor program

**Below ground:**
- 30 subterranean levels at 16 ft floor-to-floor
- ~10.2 billion gross sqft (7.2 billion usable)
- Houses: data centers, heavy infrastructure, water treatment, foundation systems

**Totals:**

| Component | Gross (B sqft) | Usable (B sqft) |
|-----------|---------------|-----------------|
| Above ground (all tiers) | ~69.5 | ~48.6 |
| Below ground (30 levels) | ~10.2 | ~7.2 |
| **Total** | **~79.7** | **~55.8** |

**Geometric self-consistency check:** The 550 ft setback per tier is bounded by two constraints. Less than ~400 ft/side produces terraces too narrow for meaningful outdoor program and yields a top tier wider than 2 miles (diminishing the structural advantage of the stepped form). More than ~733 ft/side shrinks the top tier below 1 mile per side, reducing upper-tier floor area below what's needed for a self-contained neighborhood of ~1 million people. The 550 ft value places the top tier at 1.62 miles per side — still larger than most airports — while creating terraces deep enough for parks and agriculture. The tier-by-tier floor area sums to 69.5 billion gross sqft above ground, confirmed by direct calculation of each tier's floor plate area across 36 floors.

The 70% usability ratio accounts for structural columns, mechanical shafts, vertical circulation (elevators, stairs), and service corridors. A 2024 meta-analysis of 135 supertall towers found average space efficiency of 72.1% (range: 55-84%), with the ratio declining as height increases due to growing core area and structural requirements [du-supertall-efficiency-2024]. Comparable Asian supertalls average 67.5%, with core areas consuming 29.5% of gross floor area [sarkar-space-efficiency-2024]. For the arcology, where structural cores must resist unprecedented lateral loads at extreme height, 70% is a reasonable blended estimate — likely conservative for lower tiers (where core-to-floor-area ratios are more favorable) and optimistic for upper tiers (where structural demands grow). KEDL 400 should model the usability ratio per tier rather than applying a single value.

## Space Allocation

At 10 million residents and 55.8 billion usable square feet, the per-capita allocation is approximately 1,395 sqft — nearly double the 750 sqft comfort baseline used in dense urban planning. The surplus is deliberate, accommodating both generous living standards and the full spectrum of non-residential program.

| Function | % of Usable | Total (B sqft) | Sqft/Person |
|----------|------------|----------------|-------------|
| Residential | 25% | 13.95 | 1,395 |
| Parks / Open Space / Atria | 20% | 11.16 | 1,116 |
| Commercial / Civic / Cultural | 10% | 5.58 | 558 |
| Vertical Agriculture | 8.5% | 4.74 | 474 |
| Transit / Circulation | 8.5% | 4.74 | 474 |
| Data Center / Compute | 10% | 5.58 | 558 |
| Infrastructure / Mechanical | 8.5% | 4.74 | 474 |
| Surplus / Future Capacity | 8.5% | 4.74 | 474 |

The 10% compute allocation is high by any conventional standard — it reflects the arcology's dual purpose as both a human habitat and an AI infrastructure platform. See the compute infrastructure overview for the reasoning.

## Population Capacity

The same envelope supports a range of density scenarios:

| Standard | Sqft/Person | Population |
|----------|-------------|-----------|
| Suburban comfort | 750 | ~18.6 million |
| Urban comfortable | 500 | ~27.9 million |
| Dense urban | 300 | ~46.5 million |
| Target (generous) | 1,395 | 10 million |

The target 10 million at 1,395 sqft/person provides the generous end. This allows the structure to grow into its capacity over decades, with early residents experiencing extremely spacious conditions that gradually densify as the population approaches full capacity.

## Why the Ziggurat Form

The terraced form is not an aesthetic choice. It emerges from structural and livability constraints:

**Structural:** The stepped profile dramatically reduces the moment demand at the base compared to a straight tower. Each terrace level creates a natural location for transfer structures and outrigger systems. The wide base distributes vertical load across a massive foundation footprint. Step pyramids inherently have a lower center of mass than structures with straight vertical sides, making them fundamentally more stable — a principle understood since ancient Mesopotamian ziggurats and Egyptian step pyramids.

**Livability:** Every terrace creates an "outdoor" surface — a tier-top park or agricultural area with sky access. At 550 feet deep, each terrace is the equivalent of two city blocks of open space. Residents on any tier can walk to an exterior terrace within minutes. The structure doesn't feel like a single building; it feels like a landscape with neighborhoods at different elevations.

**Wind:** The stepped profile reduces the effective sail area compared to a continuous tower, and recent research quantifies the advantage. CFD and large-eddy simulation (LES) studies on setback buildings show cross-wind base moment reductions of up to 93% and along-wind peak dynamic moment reductions of up to 40.4% compared to prismatic buildings of equivalent height [roy-setback-les-2024]. A 20% double-side setback configuration proves most efficient for regulating both along-wind and cross-wind moments [bhattacharyya-stepped-2021]. The arcology's graduated 3-6% per-tier setback is more subtle than the configurations tested in these sub-200 m studies, but the cumulative stepping from a 3.5-mile base to a 1.62-mile top tier produces an effective taper ratio of ~0.46 — within the range where significant aerodynamic benefits are observed. Each terrace step also disrupts regular vortex shedding, preventing the resonant lock-in that threatens slender towers. However, terrace-level turbulence and the interaction between vortices shed from each of the 10 steps remain unstudied at this scale — the aerodynamic behavior of a 1,500 m stepped structure is extrapolated from models no taller than 200 m.

**Spire:** The central spire reaching ~5,000 feet is not a separate structural element like the Burj Khalifa's 244-meter antenna — which constitutes 29% vanity height (4,000 tonnes of structural steel serving primarily aesthetic and communications functions) [ctbuh-vanity-height-2013]. Instead, the arcology's spire represents the natural apex where the ziggurat's stepped form converges. Unlike slender tower spires that require horizontal tuned mass dampers to control vibration, the arcology's massive inertia and low aspect ratio (0.27:1) make spire-specific vibration control unnecessary. The spire zone is architecturally symbolic and programmatically useful — communications, observation, light and air access for upper tiers — rather than structurally critical to the ziggurat system.

**Construction:** The structure can be built from the bottom up, with each completed tier serving as a staging platform for the next. Lower tiers can be occupied while upper tiers are still under construction — enabling a phased occupancy model that generates revenue (and political momentum) during the 20-30 year build.

## Open Design Space

At KEDL 300, this entry establishes the dimensional envelope with geometrically bounded setback parameters, validated usability ratios, and quantified wind load benefits — but without specifying internal structure, material systems, or detailed load paths. Those parameters cascade from choices made in other entries — lateral system design, material selection, program distribution, and the vertical transport solution (which heavily constrains floor-to-floor heights and core layouts).

The most critical open question is the setback profile. The 550 ft/side estimate is geometrically bounded (less yields terraces too narrow for outdoor program; more shrinks upper-tier floor area below neighborhood viability), but the optimal profile may not be a constant setback. A graduated profile — smaller setbacks at the base where floor area is most valuable, larger setbacks near the top where wind loads peak — could improve both structural efficiency and aerodynamic performance. Conversely, an inverse profile (larger base setbacks) would create wider lower terraces at the cost of upper-tier area. The coupled structural-aerodynamic-programmatic analysis needed to resolve this requires wind tunnel testing or validated CFD for a structure of this cross-section, which no existing facility can provide.

The wind load question has been partially resolved: setback buildings demonstrably outperform prismatic buildings in wind resistance, with reductions well-established in the literature [bhattacharyya-stepped-2021] [roy-setback-les-2024]. What remains open is whether these results, derived from models under 200 m, scale linearly to a 1,500 m structure with 10 discrete steps. The Reynolds number regime, atmospheric boundary layer profile, and vortex interaction patterns at this scale are genuinely unprecedented.
