---
id: "structural-engineering/superstructure/primary-geometry"
title: "Primary Geometry and Dimensional Envelope"
domain: "structural-engineering"
subdomain: "superstructure"
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
entry_type: "analysis"
tags: ["geometry", "dimensions", "envelope", "floor-area", "ziggurat", "tiers"]
summary: "Defines the primary geometric envelope of Arcology One — a terraced ziggurat form with a 3.5-mile base, 10 major tiers, and a central spire reaching approximately 5,000 feet. Total gross floor area of ~79.7 billion square feet housing 10 million residents at 1,395 sqft per capita."
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
open_questions:
  - "What is the optimal setback angle per tier for both structural efficiency and livable terrace creation?"
  - "How does the terraced form affect wind loading compared to a conventional tapered supertall?"
  - "Is a central spire structurally necessary for the ziggurat form, or is it primarily architectural?"
  - "What is the minimum base footprint that supports the target floor area at this height?"
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
    confidence: 1
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

Arcology One takes the form of a terraced ziggurat — 10 major tiers stepping back from a 3.5-mile base, with a central spire reaching approximately 5,000 feet (~0.95 miles). This is not a conventional tower. The ziggurat form solves the fundamental problem of mile-high construction: you cannot stack a million-square-foot floor plate to 5,000 feet with a single structural system. But you can terrace a mountain.

The structure sits on a 12.25-square-mile footprint (7,840 acres) in Burleson County, Texas. For reference, Manhattan is 22.8 square miles. The arcology's footprint is roughly half of Manhattan, but its total usable floor area — 55.8 billion square feet — is equivalent to approximately 24,500 square miles of floor space stacked vertically. Roughly the area of West Virginia, inside a footprint you can see across.

## Dimensional Envelope

**Above ground:**
- 10 major tiers, each approximately 36 floors (14 ft floor-to-floor average)
- ~360 total above-ground floors
- Each tier sets back ~550 feet per side from the tier below
- Tier 1 (base): maximum floor plate area
- Tier 10 + spire: smallest floor plate, highest elevation

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

The 70% usability ratio accounts for structural columns, mechanical shafts, vertical circulation (elevators, stairs), and service corridors. This is conservative for a building of this scale — conventional high-rises achieve 75-85%, but the unprecedented structural demands and mechanical distribution requirements of a mile-high structure likely reduce this.

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

**Structural:** The stepped profile dramatically reduces the moment demand at the base compared to a straight tower. Each terrace level creates a natural location for transfer structures and outrigger systems. The wide base distributes vertical load across a massive foundation footprint.

**Livability:** Every terrace creates an "outdoor" surface — a tier-top park or agricultural area with sky access. Residents on any tier can walk to an exterior terrace within minutes. The structure doesn't feel like a single building; it feels like a landscape with neighborhoods at different elevations.

**Wind:** The stepped profile reduces the effective sail area compared to a continuous tower. Wind loads at 5,000 feet are severe, but the ziggurat presents a smaller cross-section at altitude than a prismatic tower of equivalent floor area.

**Construction:** The structure can be built from the bottom up, with each completed tier serving as a staging platform for the next. Lower tiers can be occupied while upper tiers are still under construction — enabling a phased occupancy model that generates revenue (and political momentum) during the 20-30 year build.

## Open Design Space

At KEDL 200, this entry establishes the dimensional envelope without specifying internal structure, material systems, or detailed load paths. Those parameters cascade from choices made in other entries — lateral system design, material selection, program distribution, and the vertical transport solution (which heavily constrains floor-to-floor heights and core layouts).

The most critical open question is the setback geometry. The 550 ft/side estimate produces a reasonable taper, but the optimal profile depends on a coupled structural-aerodynamic-programmatic analysis that hasn't been performed. Different setback profiles produce different terrace widths, different wind behaviors, and different structural efficiencies. This is a design space, not a design.
