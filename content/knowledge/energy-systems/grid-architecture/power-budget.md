---
id: "energy-systems/grid-architecture/power-budget"
title: "Power Generation Budget"
domain: "energy-systems"
subdomain: "grid-architecture"
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
tags: ["power", "energy", "SMR", "solar", "grid", "budget", "generation", "fusion", "ERCOT", "waste-heat"]
summary: "Total power budget of 9.5 GW from a mixed portfolio: 17 next-generation SMRs (5.1 GW), solar (1.0 GW avg), grid supplemental (1.5 GW), and speculative early fusion (1.9 GW). 65% allocated to compute infrastructure, reflecting the arcology's dual purpose as human habitat and AI platform."
citations:
  - id: "nuscale-voygr-2025"
    type: "project-data"
    title: "NuScale VOYGR SMR: Standard Design Approval for 77 MWe Module"
    source: "NuScale Power / US NRC"
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
  - id: "bwrx300-opg-2025"
    type: "project-data"
    title: "BWRX-300 SMR Construction at Darlington Nuclear Site"
    source: "Ontario Power Generation / GE Vernova"
    year: 2025
  - id: "nrc-epz-rule-2023"
    type: "government-report"
    title: "Emergency Preparedness for Small Modular Reactors and Other New Technologies (10 CFR 50.160)"
    source: "US Nuclear Regulatory Commission, Federal Register 88 FR 80068"
    year: 2023
  - id: "nrc-siting-10cfr100"
    type: "government-report"
    title: "Reactor Site Criteria: Exclusion Area and Population Center Distance Requirements (10 CFR 100.11/100.21)"
    source: "US Nuclear Regulatory Commission"
    year: 2023
  - id: "lbnl-datacenter-2024"
    type: "government-report"
    title: "2024 United States Data Center Energy Usage Report"
    source: "Lawrence Berkeley National Laboratory / US Department of Energy"
    year: 2024
  - id: "epoch-hw-efficiency-2025"
    type: "peer-reviewed"
    title: "Leading ML Hardware Becomes 40% More Energy-Efficient Each Year"
    source: "Epoch AI"
    year: 2025
  - id: "jevons-facct-2025"
    type: "peer-reviewed"
    title: "From Efficiency Gains to Rebound Effects: The Jevons Paradox in AI Infrastructure"
    source: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)"
    year: 2025
  - id: "ferc-uri-2021"
    type: "government-report"
    title: "Final Report on February 2021 Freeze: Causes and Recommendations"
    source: "Federal Energy Regulatory Commission (FERC)"
    year: 2021
  - id: "fortum-microsoft-helsinki-2022"
    type: "project-data"
    title: "Fortum and Microsoft: World's Largest Data Centre Waste Heat Recovery Collaboration"
    source: "Fortum / Microsoft"
    year: 2022
  - id: "cfs-arc-virginia-2024"
    type: "project-data"
    title: "Commonwealth Fusion Systems ARC Commercial Fusion Plant Announcement"
    source: "Commonwealth Fusion Systems / MIT News"
    year: 2024
  - id: "haiyang-nuclear-heating-2025"
    type: "project-data"
    title: "Haiyang AP1000 Nuclear District Heating Expansion to 1,134 MWth"
    source: "World Nuclear News"
    year: 2025
cross_references:
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "ai-compute-infrastructure/data-centers/compute-overview"
    relationship: "informs"
  - slug: "environmental-systems/hvac/atmospheric-control"
    relationship: "informs"
  - slug: "construction-logistics/robotics/robotics-factory"
    relationship: "informs"
  - slug: "energy-systems/district-energy/district-thermal"
    relationship: "informs"
open_questions:
  - "What regulatory pathway could enable SMR siting adjacent to a dense population center, given that current NRC exclusion area requirements (10 CFR 100) prohibit residence within the exclusion zone and require distance from population centers exceeding 25,000 people?"
  - "What is the realistic timeline for deploying 17 SMRs at 300 MWe each, given that the current frontier for same-site multi-unit deployment is 12 units (X-energy Xe-100 for Amazon Cascade)?"
  - "Is the 1.9 GW fusion allocation realistic within the construction timeline, given that CFS ARC (~400 MWe) targets first power in the mid-2030s and fleet replication would require 2-3 years per additional unit?"
  - "What is the NOAK cost trajectory for 300 MWe class SMRs — can fleet deployment achieve $5,000/kW or below, given that the BWRX-300 FOAK at Darlington is ~$14,600/kW?"
  - "Can ERCOT's natural gas supply chain weatherization be independently verified before committing to a 1.5 GW grid dependency, given the August 2025 state auditor finding that gas infrastructure hardening remains inadequate?"
assumptions:
  - "Next-generation SMRs achieve ~300 MWe per unit, based on the BWRX-300/SMR-300/AP300 design cluster"
  - "Solar capacity factor of ~25% for central Texas (1.0 GW average from ~4.0 GW nameplate)"
  - "Grid interconnection available at 1.5 GW from ERCOT (Texas grid), representing ~1.8% of ERCOT peak demand"
  - "Early fusion contributes ~1.9 GW — speculative, contingent on CFS ARC or equivalent achieving commercial operation by mid-2040s"
  - "Compute power allocation of 65% reflects the arcology's role as an AI infrastructure platform; Jevons paradox analysis suggests this will not decrease with hardware efficiency gains"
parameters:
  - name: "total_power_gw"
    value: 9.5
    unit: "GW"
    confidence: 2
  - name: "smr_power_gw"
    value: 5.1
    unit: "GW"
    confidence: 2
  - name: "smr_unit_count"
    value: 17
    unit: "reactors"
    confidence: 2
  - name: "smr_unit_capacity_mw"
    value: 300
    unit: "MW"
    confidence: 2
  - name: "solar_power_avg_gw"
    value: 1.0
    unit: "GW"
    confidence: 2
  - name: "grid_supplemental_gw"
    value: 1.5
    unit: "GW"
    confidence: 2
  - name: "fusion_speculative_gw"
    value: 1.9
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
  - name: "waste_heat_recovery_pct"
    value: 40
    unit: "percent"
    confidence: 2
---

## Overview

The arcology requires approximately 9.5 GW of continuous power generation — roughly equivalent to the output of 9 large conventional nuclear plants, or about 1% of current total US generation capacity. This is an enormous energy demand, driven primarily by the compute infrastructure that makes the arcology viable as both a human habitat and an AI infrastructure platform.

For context, the entire US data center sector consumed approximately 176 TWh in 2023 — an average continuous draw of ~20 GW across all facilities nationwide [lbnl-datacenter-2024]. The arcology's 6.175 GW compute allocation alone would represent roughly 31% of that 2023 total, though projections for 2028 US data center consumption range from 325-580 TWh (37-66 GW average), against which the arcology's share drops to 9-17%. The Stargate program (OpenAI/Oracle/SoftBank) alone targets 10 GW across multiple US campuses, suggesting that by the 2030s-2040s, multi-gigawatt compute installations will be a recognized category of infrastructure, not an anomaly.

The generation portfolio is diversified across four sources, each chosen for specific technical and strategic reasons.

## Generation Portfolio

| Source | Capacity (GW) | Role |
|--------|--------------|------|
| 17 next-gen SMRs (~300 MWe each) | 5.1 | Baseload, nuclear-dominant |
| Solar arrays (surrounding land, avg) | 1.0 | Supplemental, daytime peak |
| Grid / supplemental (ERCOT) | 1.5 | Backup, peak shaving |
| Early fusion (speculative) | 1.9 | Aspirational, timeline-dependent |
| **Total** | **9.5** | |

**Nuclear-dominant is deliberate.** SMRs provide the 24/7 baseload that compute infrastructure demands. Data centers cannot tolerate intermittent power — a brownout in a rack housing active AI agents is not a minor inconvenience, it's a potential loss of running cognitive processes. The 5.1 GW nuclear baseload ensures that the compute allocation (6.175 GW) always has reliable power, with solar and grid covering the variable residential and agricultural loads.

## Load Allocation

| Consumer | Power (GW) | % of Total |
|----------|-----------|-----------|
| Compute (data centers) | 6.175 | 65% |
| Residential + civic | 1.710 | 18% |
| Agriculture + HVAC + transit | 1.140 | 12% |
| Infrastructure overhead | 0.475 | 5% |

The 65% compute allocation is unusual for any human habitat. In a conventional city, data centers consume perhaps 2-5% of total energy. Here, the allocation reflects the fundamental thesis: the arcology is as much an AI infrastructure platform as it is a human city. The compute capacity is not a service running inside a building — it is a co-equal reason the building exists.

The non-compute allocation of 3.325 GW for 10 million residents translates to approximately 333 W per person continuous, or ~2,916 kWh per person per year. This is below Singapore's total per-capita electricity consumption (~1,121 W / 9,822 kWh/yr) and above Hong Kong's (~685 W / 6,000 kWh/yr). The comparison is imperfect — Singapore's figure includes commercial and light industrial activity, while the arcology separates compute loads — but it confirms the non-compute allocation is in a reasonable range for a well-serviced, climate-controlled dense urban population.

**The efficiency question.** A natural objection: if AI hardware efficiency improves at the observed rate of ~1.4x per year [epoch-hw-efficiency-2025], won't the 65% compute allocation shrink over time? The empirical answer is no. Between 2017 and 2023, GPU energy efficiency improved approximately 4x while total US data center power consumption more than doubled, from ~80 TWh to 176 TWh [lbnl-datacenter-2024]. This is Jevons paradox operating at industrial scale: cheaper, more efficient compute enables larger models, broader deployment, and new applications, driving demand faster than efficiency gains reduce per-unit consumption [jevons-facct-2025]. The arcology's power budget should not be discounted for projected hardware improvements. If anything, 65% may prove conservative.

## The SMR Challenge

The arcology's nuclear strategy calls for 17 units of approximately 300 MWe each. This design point is grounded in the emerging 300 MWe class of Western SMR designs:

- **GE-Hitachi BWRX-300**: 300 MWe, light water, natural circulation. Construction began at OPG Darlington (Canada) in May 2025, targeting commercial operation by 2030. Four units planned at Darlington; also advancing in the UK, US (TVA, $400M DOE grant), and Poland [bwrx300-opg-2025].
- **Holtec SMR-300**: 300 MWe, light water PWR. Partial construction permit application filed at Palisades, Michigan in January 2026. DOE-backed at $400M.
- **Westinghouse AP300**: 300 MWe, light water PWR. NRC pre-application underway; four units planned at North Teesside, UK for early 2030s.
- **TerraPower Natrium**: 345 MWe base / 500 MWe peak, sodium-cooled fast reactor. NRC final safety evaluation completed December 2025 for the Wyoming site; construction permit expected December 2026.

The earlier assumption of 200 MWe per unit (based on interpolation between NuScale's 77 MWe modules and larger designs) has been revised upward. NuScale's approved modules remain at 77 MWe [nuscale-voygr-2025], but the company's scaling strategy is to aggregate modules (up to 12 per plant = 924 MWe), not increase individual module size. The dominant next-generation design point for Western SMRs is 300 MWe, supported by three independent designs from three different vendors. China's HTR-PM (210 MWe, commercially operating since December 2023) confirms that the 200-300 MWe range is an achievable design space.

Updating from 25 units at 200 MWe to 17 units at 300 MWe to achieve the same ~5 GW reduces the deployment challenge significantly — fewer units to license, manufacture, site, and interconnect.

**Cost reality.** The Vogtle experience remains the cautionary case — 7 years late, $17 billion over budget [vogtle-lessons-2024]. The BWRX-300 FOAK (first of a kind) cost at Darlington is CAD 7.7 billion for Unit 1 (~$14,600 USD/kW), with subsequent units projected at ~28% less. These are real numbers, not marketing targets. The SMR value proposition — factory-built, standardized, faster deployment — must demonstrate NOAK (Nth of a kind) cost learning that brings per-kW costs below $5,000. No empirical data exists for this yet. The arcology's financial viability on the nuclear side depends on whether the 5th through 17th units are dramatically cheaper than the 1st.

**The siting constraint.** The NRC finalized a performance-based emergency preparedness rule for SMRs in December 2023 (10 CFR 50.160), allowing Emergency Planning Zones to be as small as the site boundary for reactors with sufficiently low source terms [nrc-epz-rule-2023]. This reform is often misread as permitting urban co-location. It does not. The EPZ governs emergency response planning. The physical siting constraint is separate: under 10 CFR 100.11, the exclusion area boundary must ensure that a person standing at the boundary for two hours post-accident receives less than 25 rem whole-body dose. Residence within the exclusion area is prohibited. Additionally, 10 CFR 100.21(b) requires a minimum distance from any population center exceeding 25,000 people of at least 1.33 times the low population zone boundary [nrc-siting-10cfr100].

Siting 17 SMRs within or immediately adjacent to a building housing 10 million people is not permitted under current NRC regulations. The regulatory path would require new rulemaking under 10 CFR Part 100 — likely requiring Congressional action and facing extensive public comment. The more realistic configuration is a dedicated nuclear campus 2-5 km from the arcology footprint, connected by dedicated transmission infrastructure. This is architecturally feasible but adds transmission losses (~1-2%) and emergency planning complexity.

**Deployment precedent.** The largest confirmed same-site multi-unit SMR plans are 12 units (X-energy Xe-100 for Amazon Cascade in Washington state, and X-energy/Centrica at Hartlepool, UK). The furthest-advanced multi-unit project actually under construction is OPG Darlington (4 BWRX-300s). No project has attempted 17+ units at a single site, though the modular nature of SMRs — factory-built, standardized, and designed for fleet deployment — is specifically intended to make this feasible.

## The Fusion Question

The ~1.9 GW fusion allocation is explicitly speculative. As of early 2026, the fusion landscape has advanced significantly but remains pre-commercial:

- **Commonwealth Fusion Systems (CFS)**: The SPARC tokamak is under active assembly at Devens, Massachusetts, with the first of 18 toroidal field magnets completed. SPARC targets first plasma in 2026 and net fusion energy (Q > 2) in 2027. If SPARC succeeds, CFS plans to build ARC, a ~400 MWe commercial plant, at James River Industrial Park in Virginia, targeting grid connection in the early-to-mid 2030s [cfs-arc-virginia-2024].
- **Helion Energy**: Broke ground on the Orion plant (Malaga, Washington) in July 2025, targeting ≥50 MWe for Microsoft by 2028. Helion's field-reversed configuration approach has never demonstrated net electricity from fusion — the key physics milestone remains unproven.
- **ITER**: First plasma now delayed to mid-2030s; D-T burning plasma operations pushed to 2039. ITER produces no electricity — it is a pure science facility.
- **TAE Technologies**: Published a peer-reviewed FRC plasma breakthrough in Nature Communications (April 2025), achieving stable plasma at >70 million degrees C via neutral beam injection. Commercial timeline remains speculative.

**What 1.9 GW from fusion actually requires:** No single private fusion plant will reach 1.9 GW. The pathway is fleet aggregation — approximately 4-5 ARC-class plants at ~400 MWe each. If the first ARC comes online in the mid-2030s and fleet replication proceeds at 2-3 years per unit, aggregated capacity of 1.6-2.0 GW is theoretically achievable by approximately 2042-2048 under the most optimistic credible scenario.

The consistent historical pattern is that every major fusion project runs late: ITER by 9+ years on first plasma, NIF by years, and even SPARC has slipped 1-2 years from original targets. Building 3-5 years of contingency against any announced timeline is not pessimism; it is pattern recognition.

This is an honest hedge, not optimism disguised as planning. The power budget works without fusion — it just works better with it. If fusion does not materialize within the construction window, the shortfall must be covered by approximately 6 additional 300 MWe SMRs (raising the nuclear fleet to ~23 units) or expanded grid interconnection to 3.0-3.5 GW.

## Waste Heat as Resource

9.5 GW of generation produces enormous waste heat. This is not exclusively a problem — it's a thermal resource. Multiple operating systems demonstrate the viability of large-scale waste heat recovery:

**Data center waste heat.** Up to 90% of electrical energy consumed by data centers becomes heat. The Fortum/Microsoft collaboration in the Helsinki region is the world's largest data center waste heat recovery project, expected to supply approximately 40% of district heating demand for the Espoo-Kirkkonummi area (serving ~250,000 users), with potential to reach 65% at full Microsoft data center capacity [fortum-microsoft-helsinki-2022]. Heat pumps with a COP of 3-5 lift 45-70 degrees C server exhaust to 60-90 degrees C district heating network temperatures. Stockholm Data Parks integrates 20+ data centers, heating approximately 30,000 apartments from recovered waste heat.

**Nuclear waste heat.** Standard PWR/BWR thermodynamic efficiency is 33-35%, meaning ~65% of fission heat is normally rejected to the environment. China's Haiyang AP1000 nuclear district heating system — the most advanced in the world — has expanded over six heating seasons from 31.5 MWth to 1,134 MWth, serving nearly 13 million square meters of heated area [haiyang-nuclear-heating-2025]. Heat is extracted from the secondary (non-radioactive) circuit via multi-stage heat exchangers, maintaining complete isolation from the primary coolant. Globally, 56 reactor units in 10 countries supply district heat totaling approximately 5,000 MWth.

The waste heat cascade concept (see district thermal entry) uses compute and nuclear waste heat to:
- Heat residential spaces (reducing HVAC load)
- Drive absorption chillers for cooling
- Support vertical agriculture (greenhouse heating)
- Preheat domestic hot water

A well-designed thermal network can recover 40-65% of data center waste heat for useful purposes. For the arcology, with 6.175 GW of compute generating approximately 5.5 GW of waste heat, a 40% recovery rate yields ~2.2 GW of useful thermal energy — roughly equivalent to the entire non-compute power allocation. The arcology's co-location of massive heat generation (data centers) and massive heat demand (10 million residents) is a thermodynamic advantage that distributed cities cannot replicate.

## Grid Interdependence

The 1.5 GW grid allocation assumes ERCOT interconnection. ERCOT's total installed generation capacity is approximately 160 GW nameplate across all resources, with 2025 summer peak demand of 83.9 GW. The 1.5 GW interconnection represents approximately 1.8% of ERCOT's peak demand — large but not unprecedented. ERCOT's interconnection queue already contains 233+ GW of pending large-load requests, 73% of which are data centers, and the queue grew nearly 300% in 2025 alone.

**Reliability risk.** ERCOT's experience with Winter Storm Uri in February 2021 is directly relevant: 20,000 MW of rolling blackouts, the largest manually controlled load shed in US history [ferc-uri-2021]. FERC's investigation traced 75.6% of unplanned outages to freezing and fuel supply failures — natural gas units accounted for 58% of outages, wind 27%, coal 6%. Post-Uri reforms include mandatory weatherization (SB 2/SB 3) with fines up to $1 million per violation per day, and over 7,400 weatherization inspections. However, a Texas State Auditor report from August 2025 found that the Railroad Commission — which regulates natural gas production and delivery — is inadequately verifying that gas infrastructure has been properly hardened. The same fuel supply vulnerability that caused Uri may not be fully addressed.

The arcology's grid connection should be bidirectional: drawing power during internal shortfalls, but also exporting surplus during normal operation. At 9.5 GW total generation and typical internal demand of 8-9 GW, the arcology could be a significant grid stabilizer for the surrounding region. The 1.5 GW interconnection should be designed for both import and export, with the arcology functioning as a dispatchable resource for ERCOT — absorbing excess renewable generation during oversupply and providing baseload support during grid stress events. This bidirectional capability transforms the grid dependency from a vulnerability into a strategic asset.
