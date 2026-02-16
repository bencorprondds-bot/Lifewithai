---
id: "energy-systems/grid-architecture/power-budget"
title: "Power Generation Budget"
domain: "energy-systems"
subdomain: "grid-architecture"
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
tags: ["power", "energy", "SMR", "solar", "grid", "budget", "generation"]
summary: "Total power budget of 9.5 GW from a mixed portfolio: 25 next-generation SMRs (5.0 GW), solar (1.0 GW avg), grid supplemental (1.5 GW), and speculative early fusion (2.0 GW). 65% allocated to compute infrastructure, reflecting the arcology's dual purpose."
citations:
  - id: "nuscale-voygr-2025"
    type: "project-data"
    title: "NuScale VOYGR SMR: Design Certification and Deployment Status"
    source: "NuScale Power"
    year: 2025
  - id: "vogtle-lessons-2024"
    type: "peer-reviewed"
    title: "Lessons from Vogtle: Cost Overruns and Schedule Delays in Nuclear New Build"
    source: "Energy Policy"
    year: 2024
  - id: "arcology-manifesto-2026"
    type: "internal"
    title: "All Boats Rise with the Tide: A Manifesto for Building the Future Together"
    source: "Life with AI"
    year: 2026
cross_references:
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "ai-compute-infrastructure/data-centers/compute-overview"
    relationship: "informs"
  - slug: "environmental-systems/hvac/hvac-overview"
    relationship: "informs"
  - slug: "construction-logistics/robotics/robotics-factory"
    relationship: "informs"
open_questions:
  - "Can 25 SMRs be sited within or adjacent to the arcology footprint given NRC exclusion zone requirements?"
  - "What is the realistic timeline for deploying 25 SMRs, given that no nation has deployed more than 2 simultaneously?"
  - "Is the 2.0 GW fusion allocation realistic within the construction timeline, or should it be replaced with additional SMR/grid capacity?"
  - "What is the thermal rejection strategy for 9.5 GW of generation — where does the waste heat go?"
  - "How does the 65% compute allocation change if AI hardware efficiency improves faster than projected?"
assumptions:
  - "Next-generation SMRs achieve ~200 MW per unit (improvement over current NuScale 77 MW modules)"
  - "Solar capacity factor of ~25% for central Texas (1.0 GW average from ~4.0 GW nameplate)"
  - "Grid interconnection available at 1.5 GW from ERCOT (Texas grid)"
  - "Early fusion contributes 2.0 GW — this is speculative and may not materialize within construction timeline"
  - "Compute power allocation of 65% reflects the arcology's role as an AI infrastructure platform"
parameters:
  - name: "total_power_gw"
    value: 9.5
    unit: "GW"
    confidence: 2
  - name: "smr_power_gw"
    value: 5.0
    unit: "GW"
    confidence: 2
  - name: "smr_unit_count"
    value: 25
    unit: "reactors"
    confidence: 2
  - name: "smr_unit_capacity_mw"
    value: 200
    unit: "MW"
    confidence: 1
  - name: "solar_power_avg_gw"
    value: 1.0
    unit: "GW"
    confidence: 2
  - name: "grid_supplemental_gw"
    value: 1.5
    unit: "GW"
    confidence: 2
  - name: "fusion_speculative_gw"
    value: 2.0
    unit: "GW"
    confidence: 1
  - name: "compute_allocation_pct"
    value: 65
    unit: "percent"
    confidence: 2
  - name: "compute_power_gw"
    value: 6.175
    unit: "GW"
    confidence: 2
  - name: "residential_civic_gw"
    value: 1.71
    unit: "GW"
    confidence: 2
  - name: "agriculture_hvac_transit_gw"
    value: 1.14
    unit: "GW"
    confidence: 2
  - name: "infrastructure_overhead_gw"
    value: 0.475
    unit: "GW"
    confidence: 2
---

## Overview

The arcology requires approximately 9.5 GW of continuous power generation — roughly equivalent to the output of 9 large conventional nuclear plants, or about 1% of current total US generation capacity. This is an enormous energy demand, driven primarily by the compute infrastructure that makes the arcology viable as both a human habitat and an AI infrastructure platform.

The generation portfolio is diversified across four sources, each chosen for specific technical and strategic reasons.

## Generation Portfolio

| Source | Capacity (GW) | Role |
|--------|--------------|------|
| 25 next-gen SMRs (~200 MW each) | 5.0 | Baseload, nuclear-dominant |
| Solar arrays (surrounding land, avg) | 1.0 | Supplemental, daytime peak |
| Grid / supplemental (ERCOT) | 1.5 | Backup, peak shaving |
| Early fusion (speculative) | 2.0 | Aspirational, timeline-dependent |
| **Total** | **9.5** | |

**Nuclear-dominant is deliberate.** SMRs provide the 24/7 baseload that compute infrastructure demands. Data centers cannot tolerate intermittent power — a brownout in a rack housing active AI agents is not a minor inconvenience, it's a potential loss of running cognitive processes. The 5.0 GW nuclear baseload ensures that the compute allocation (6.175 GW) always has reliable power, with solar and grid covering the variable residential and agricultural loads.

## Load Allocation

| Consumer | Power (GW) | % of Total |
|----------|-----------|-----------|
| Compute (data centers) | 6.175 | 65% |
| Residential + civic | 1.710 | 18% |
| Agriculture + HVAC + transit | 1.140 | 12% |
| Infrastructure overhead | 0.475 | 5% |

The 65% compute allocation is unusual for any human habitat. In a conventional city, data centers consume perhaps 2-5% of total energy. Here, the allocation reflects the fundamental thesis: the arcology is as much an AI infrastructure platform as it is a human city. The compute capacity is not a service running inside a building — it is a co-equal reason the building exists.

## The SMR Challenge

No nation has deployed SMRs at the scale this project requires. The current state of the art:
- **NuScale VOYGR**: NRC design certification received, but individual modules are 77 MW (we assume next-generation ~200 MW units)
- **Vogtle Units 3 & 4**: Conventional large reactors, but the project ran 7 years late and $17 billion over budget
- **Global SMR pipeline**: Multiple designs in development (GE-Hitachi BWRX-300, Rolls-Royce SMR, X-energy Xe-100), but none at commercial operation

Deploying 25 SMRs requires either a breakthrough in regulatory streamlining (NRC approval timelines currently add 5-10 years), a factory-based manufacturing approach to reactor construction (which is the SMR promise but is unproven at scale), or both.

The Vogtle experience is the cautionary case. The arcology cannot afford per-unit costs that escalate 2-3x during construction. The SMR value proposition — factory-built, standardized, faster deployment — must actually deliver.

## The Fusion Question

The 2.0 GW fusion allocation is explicitly speculative. No fusion reactor has achieved net energy production as of 2026. Including it in the power budget is a design choice that says: if fusion arrives during the 20-30 year construction window, the arcology can integrate it. If it doesn't, the shortfall must be covered by additional SMRs (10 more units) or expanded grid interconnection.

This is an honest hedge, not optimism disguised as planning. The power budget works without fusion — it just works better with it.

## Waste Heat as Resource

9.5 GW of generation produces enormous waste heat. This is not exclusively a problem — it's a thermal resource. The waste heat cascade concept (see district energy entries) uses compute waste heat to:
- Heat residential spaces (reducing HVAC load)
- Drive absorption chillers for cooling
- Support vertical agriculture (greenhouse heating)
- Preheat domestic hot water

A well-designed thermal network can recover 30-50% of waste heat for useful purposes, effectively reducing the net power requirement for non-compute functions.

## Grid Interdependence

The 1.5 GW grid allocation assumes ERCOT interconnection. This introduces a dependency on the Texas grid — which has experienced multiple reliability crises (2021 winter storm, 2023 heat events). The arcology's grid connection should be bidirectional: drawing power during internal shortfalls, but also exporting surplus during normal operation. At 9.5 GW total generation and typical internal demand of 8-9 GW, the arcology could be a significant grid stabilizer for the surrounding region.
