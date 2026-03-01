---
id: "energy-systems/nuclear-smr/nuclear-smr-baseload"
title: "Nuclear SMR Baseload Generation"
domain: "energy-systems"
subdomain: "nuclear-smr"
kedl: 200
confidence: 2
status: "published"
created: "2026-02-25"
updated: "2026-02-25"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "analysis"
tags: ["nuclear", "SMR", "baseload", "power-generation", "NuScale", "BWRX-300", "cogeneration", "waste-heat", "EPZ", "reactor-fleet"]
summary: "Small modular reactors provide the arcology's 5.0 GW nuclear baseload through a fleet of 25-70 reactor modules, depending on design selection. SMR technology is real and advancing — NuScale is NRC-certified, BWRX-300 is under construction in Ontario — but siting reactors within or beneath an inhabited megastructure requires regulatory frameworks that do not yet exist."
citations:
  - id: "nuscale-voygr-2025"
    type: "project-data"
    title: "NuScale VOYGR SMR: Design Certification and Deployment Status"
    source: "NuScale Power"
    year: 2025
  - id: "gehitachi-bwrx300-2025"
    type: "project-data"
    title: "BWRX-300 Small Modular Reactor: Darlington Construction Status"
    source: "GE Vernova Hitachi Nuclear"
    year: 2025
  - id: "xenergy-xe100-2025"
    type: "project-data"
    title: "Xe-100 High-Temperature Gas-Cooled Reactor Specifications"
    source: "X-energy"
    year: 2025
  - id: "deep-fission-borehole-2025"
    type: "project-data"
    title: "Gravity Borehole Reactor: Underground SMR Deployment"
    source: "Deep Fission"
    year: 2025
  - id: "nrc-epz-framework-2023"
    type: "peer-reviewed"
    title: "Performance-Based Emergency Planning Zone Framework for Advanced Reactors"
    source: "US Nuclear Regulatory Commission"
    year: 2023
  - id: "stanford-smr-waste-2022"
    type: "peer-reviewed"
    title: "Nuclear Waste from Small Modular Reactors"
    source: "PNAS (Stanford/UBC)"
    year: 2022
  - id: "argonne-smr-waste-2023"
    type: "peer-reviewed"
    title: "Small Modular Reactor Waste Management Analysis"
    source: "Argonne National Laboratory"
    year: 2023
  - id: "ieee-deep-fission-2025"
    type: "industry"
    title: "Underground Nuclear Reactor: Deep Fission Borehole Concept"
    source: "IEEE Spectrum"
    year: 2025
cross_references:
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "structural-engineering/foundation-systems/foundation-systems"
    relationship: "depends-on"
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "structural-engineering/seismic-design/seismic-resilience"
    relationship: "depends-on"
  - slug: "environmental-systems/water/closed-loop-water"
    relationship: "informs"
open_questions:
  - "Can the NRC's performance-based EPZ framework be extended to approve reactors sited within an inhabited structure, or does this require fundamentally new regulatory categories?"
  - "What is the realistic deployment timeline for 25+ SMR modules at a single site, given that no nation has deployed more than 2 simultaneously?"
  - "Should the arcology prioritize proven LWR designs (NuScale, BWRX-300) available by 2030, or wait for Gen IV designs (HTGR, molten salt) with superior cogeneration characteristics?"
  - "How does seismic isolation work for reactor modules integrated with a 1,500-meter structure that itself experiences seismic loading?"
  - "What is the appropriate on-site spent fuel storage capacity for a 60-year operating lifetime at 10-20 GW scale?"
assumptions:
  - "Target baseload capacity of 5.0 GW from nuclear sources (per power-budget entry)"
  - "Next-generation SMR units achieve approximately 200 MW per module (improvement over current NuScale 77 MW)"
  - "Reactor siting is beneath the foundation or in adjacent exclusion zones, not within the inhabited superstructure"
  - "Cogeneration captures waste heat for district heating, absorption cooling, and desalination"
  - "Regulatory pathway exists or can be created for intra-site EPZ approval"
parameters:
  - name: "nuclear_baseload_gw"
    value: 5.0
    unit: "GW"
    confidence: 2
  - name: "smr_unit_count_target"
    value: 25
    unit: "reactors (at 200 MW each)"
    confidence: 2
  - name: "nuscale_module_capacity_mw"
    value: 77
    unit: "MW"
    confidence: 3
  - name: "bwrx300_capacity_mw"
    value: 300
    unit: "MW"
    confidence: 3
  - name: "voygr12_plant_capacity_mw"
    value: 924
    unit: "MW (12 modules)"
    confidence: 3
  - name: "voygr12_footprint_acres"
    value: 35
    unit: "acres"
    confidence: 2
  - name: "nuclear_thermal_rejection_pct"
    value: 65
    unit: "percent of thermal input"
    confidence: 2
  - name: "cogeneration_thermal_gw"
    value: 7.5
    unit: "GW (waste heat at 5 GW electric)"
    confidence: 2
  - name: "xe100_outlet_temp_c"
    value: 750
    unit: "degrees Celsius"
    confidence: 3
  - name: "nuscale_refueling_months"
    value: 21
    unit: "months per module"
    confidence: 3
  - name: "spent_fuel_tonnes_gwe_year"
    value: 20
    unit: "tonnes heavy metal per GWe-year (LWR)"
    confidence: 2
  - name: "annual_spent_fuel_tonnes"
    value: 100
    unit: "tonnes HM/year at 5 GWe"
    confidence: 2
---

## The 5 GW Nuclear Question

The arcology's power budget allocates 5.0 GW to nuclear baseload generation from 25 next-generation SMR units. This is not a speculative figure — it is the foundation of the entire energy strategy. Compute infrastructure demands 24/7 power with no interruptions. Solar is intermittent. Grid connections fail during Texas weather events. Fusion is aspirational. Nuclear is the only generation technology that can deliver gigawatt-scale baseload power with the reliability that AI data centers require.

But 5.0 GW from SMRs is an unprecedented deployment. The world's largest nuclear installation — Kashiwazaki-Kariwa in Japan — operates 7 reactors totaling 8.0 GW. The arcology's nuclear capacity would be roughly 60% of that, concentrated at a single site, sited within or beneath an inhabited structure housing 10 million people.

The technology is real. The engineering is achievable. The regulatory pathway does not exist.

## Certified and Near-Deployable Designs

Three SMR designs are closest to commercial deployment as of 2026:

**NuScale VOYGR.** Each Power Module produces 77 MWe, weighing approximately 700 tons and shipped in three segments. A VOYGR-12 plant combines 12 modules for 924 MWe total. NuScale holds the first NRC-certified SMR design (2023) and secured approval for a site-boundary emergency planning zone — meaning the EPZ ends at the plant fence rather than extending 10 miles. The first US commercial units are expected operational in 2029 (Ohio and Pennsylvania). Romania signed an investment decision for a 6-module plant in February 2026.

At 77 MWe per module, reaching 5.0 GW requires approximately 65 NuScale modules — roughly 5.5 VOYGR-12 plants. This is more reactor modules than currently exist in any single nuclear installation on Earth.

**GE Vernova Hitachi BWRX-300.** A 300 MWe boiling water reactor with natural circulation cooling (no electrical pumps required) and passive safety — no operator action or external power needed for safe shutdown. Construction began at Darlington, Ontario in May 2025, with commercial operation expected around 2030. Ontario plans four units by 2035.

At 300 MWe per unit, 5.0 GW requires approximately 17 BWRX-300 units — a more manageable fleet size than NuScale, though the individual units are larger and less modular.

**Rolls-Royce SMR (UK).** A 470 MWe close-coupled three-loop PWR with a footprint of two football pitches per station and a 60-year design life. The Generic Design Assessment completes August 2026, with three units approved for Wylfa, Wales.

At 470 MWe, 5.0 GW requires approximately 11 Rolls-Royce units — the smallest fleet size of the proven designs.

## Advanced Designs Worth Watching

Several Gen IV designs offer advantages that matter specifically for arcology integration:

**X-energy Xe-100.** An 80 MWe high-temperature gas-cooled reactor (HTGR) using TRISO pebble fuel with 15.5% enrichment and helium coolant. The outlet temperature of 750°C enables process heat applications: hydrogen production, desalination, industrial chemistry. The demo project at Dow's Seadrift, Texas targets construction start in 2026 and operation by 2030.

The Xe-100's high temperature is the key differentiator. LWR designs (NuScale, BWRX-300) produce steam at 300-320°C — useful for electricity and low-grade heating, but not for industrial processes. The Xe-100's 750°C output enables thermochemical hydrogen production and high-efficiency absorption cooling, both valuable for arcology operations.

**Kairos Power Hermes.** A fluoride-salt-cooled high-temperature reactor using molten fluoride salt as coolant with TRISO pebble fuel. The Hermes 1 demonstration reactor at Oak Ridge, Tennessee is under construction — the first non-LWR reactor approved by the NRC. Online refueling (pebbles added and removed during operation) eliminates scheduled refueling shutdowns.

**Deep Fission Gravity.** A borehole reactor concept: 15 MWt (5 MWe) units installed 1 mile underground in 30-inch boreholes. The PWR core operates at approximately 160 atmospheres natural hydrostatic pressure. Each unit has a 10-20 year fuel cycle. A site of 100 borehole reactors produces 1.5 GWe. Deep Fission claims 70-80% cost advantages over conventional nuclear through simplified construction and elimination of above-ground containment structures.

The Gravity concept is particularly relevant for arcology siting. Reactors one mile beneath the foundation provide natural geological containment, eliminate surface emergency planning concerns, and physically separate the reactor from the inhabited structure. The technology is unproven — initial criticality is targeted for July 2026 at DOE pilot sites in Utah, Texas, and Kansas — but if it works, it solves the siting problem that LWR SMRs cannot.

## The Emergency Planning Zone Problem

Every nuclear reactor in the United States operates with an emergency planning zone — a radius around the plant within which emergency evacuation plans must exist. Conventional reactors require a 10-mile EPZ. The NRC's 2023 performance-based framework allows advanced reactors to demonstrate consequence-based EPZ sizing; NuScale achieved site-boundary EPZ approval based on passive safety and source term analysis.

For the arcology, even a site-boundary EPZ is problematic. If the reactor is beneath the foundation, the "site boundary" is the building itself — which contains 10 million people. Evacuating the arcology is not a meaningful emergency response; it would take days and cause chaos exceeding any plausible reactor incident.

The regulatory question is whether a reactor can be licensed with essentially zero external EPZ — where the containment and safety systems are designed such that no accident scenario requires action outside the reactor building, because the reactor building is inside the inhabited structure.

The NRC has no framework for this. Neither does the IAEA. The closest precedent is naval reactor integration: aircraft carriers operate two reactors totaling approximately 600 MWt within a hull containing 5,000+ crew, with no evacuation option beyond abandoning ship. The Navy has operated 200+ reactor cores in submarines and carriers since the 1950s without a single reactor-related crew fatality. But naval reactors operate under military authority, not civilian licensing.

Creating the regulatory pathway for arcology-integrated reactors is a prerequisite for everything else. Without it, the nuclear baseload strategy is theoretical.

## Siting Beneath vs. Adjacent

Two siting philosophies are feasible:

**Underground/subterranean (Deep Fission model).** Reactors are placed in boreholes or caverns beneath the arcology foundation, one mile or more below grade. The geological mass provides containment. Cooling water and electrical connections run vertically to the surface. The reactor modules are physically separated from the inhabited structure by hundreds of meters of rock.

This approach has historical precedent. The Lucens reactor in Switzerland (1968) was built inside a rock cavern. It suffered a partial meltdown in 1969 — but the underground containment successfully prevented any release to the surface, validating geological containment. Chooz A in France operated as a cavern-sited PWR from 1967-1991.

**Adjacent surface siting with enhanced EPZ.** Reactors are placed on adjacent land outside the arcology footprint, using the smallest achievable EPZ. Heat and power are transmitted into the structure via district energy pipes and electrical cables. This is the conventional approach scaled up — multiple SMR plants surrounding the arcology rather than integrated with it.

Adjacent siting is more compatible with existing regulatory frameworks but requires substantial land area. A VOYGR-12 plant has a 35-acre footprint. Five such plants require 175+ acres — nearly a square mile of reactor infrastructure. At a 3.5-mile base diameter, the arcology footprint itself is approximately 6,000 acres. Adding 200+ acres of adjacent nuclear plants increases land requirements by 3%.

The pragmatic path is underground siting using borehole or cavern reactors if the technology proves out, with fallback to adjacent surface siting if it does not. Underground siting enables the "building IS the EPZ" concept that surface reactors cannot achieve.

## Cogeneration: Converting Waste to Asset

Nuclear plants are approximately 33% thermally efficient. For every 3 units of heat generated, 1 unit becomes electricity and 2 units are rejected as waste heat. At 5.0 GW electric output, the thermal input is approximately 15 GW, meaning 10 GW of waste heat to manage.

This is either a massive thermal rejection problem or a massive thermal resource, depending on design.

Cogeneration converts waste heat to useful purposes:
- **District heating:** Steam or hot water loops serve residential and commercial heating loads throughout the structure
- **Absorption cooling:** Heat-driven chillers produce cooling without electrical compressors, serving HVAC loads
- **Desalination:** Thermal desalination (multi-effect distillation) produces fresh water using waste heat as the energy input
- **Industrial process heat:** High-temperature reactors (Xe-100 at 750°C, IMSR at 700°C) can supply process heat for hydrogen production, materials processing, and chemical synthesis

The existing district heating precedent is Haiyang, China, where a nuclear plant supplies heating to 200,000+ residents. Switzerland's Beznau PWR has provided district heating since 1983. South Korea's SMART reactor was specifically designed for 100 MWe plus district heating for 100,000 people.

At arcology scale, nuclear cogeneration could supply a significant fraction of the 1.14 GW allocated to agriculture, HVAC, and transit (per power-budget). The thermal cascade — from high-grade nuclear heat to progressively lower-grade applications — maximizes the value extracted from each unit of fission energy.

## Spent Fuel and Waste Logistics

Light-water SMRs produce approximately 20 tonnes of heavy metal (HM) in spent fuel per GWe-year. At 5 GWe, this is 100 tonnes per year — 6,000 tonnes over a 60-year operating lifetime.

Spent fuel management at this scale is a continuous industrial operation, not an occasional event. NuScale modules have a 21-month refueling cycle; with 65 modules, the arcology would average one module refueling every 10 days. Pebble-bed designs (Xe-100, Kairos) offer online refueling — fuel continuously added and removed during operation — eliminating scheduled outages but requiring continuous fuel handling infrastructure.

The Stanford/UBC study (2022) argued that SMRs may produce more voluminous and chemically reactive waste per MWh than conventional reactors due to enhanced neutron leakage in small cores. Argonne's counter-study (2023) concluded that waste management challenges are "roughly comparable" to conventional plants. For arcology planning, the conservative assumption is that SMR waste volumes are no better than conventional nuclear — meaning substantial on-site interim storage plus eventual transport to a permanent repository.

Underground waste storage beneath the foundation — leveraging the same geological formations used for borehole reactors — is a theoretical possibility. The rock formations suitable for borehole reactor installation are also suitable for dry cask spent fuel storage. This could create a vertically integrated nuclear fuel cycle: fresh fuel enters from above, electricity and heat flow upward, spent fuel descends into long-term geological storage.

## Fleet Management and Autonomous Operations

Managing 25-65 reactor modules requires automation beyond current nuclear industry practice. Today's nuclear plants operate with large staffs and intensive human oversight. An arcology with 65 NuScale modules operating three-shift coverage would require hundreds of licensed reactor operators — assuming no efficiency gains from automation.

Digital twin technology is advancing toward this challenge. Argonne National Laboratory's GNN-based digital twins model reactor physics in real time. Oak Ridge's risk-informed digital twins for the BWRX-300 integrate safety analysis with operational decision-making. The ExaSMR project (Department of Energy Exascale Computing) is developing high-fidelity reactor simulations at scales previously impossible.

Fully autonomous nuclear reactor operation has never been demonstrated and faces regulatory barriers. But the arcology's AI governance infrastructure — the same systems managing building operations, transportation, and life safety — could extend to reactor oversight. The question is whether regulators will permit AI control of nuclear systems, and on what timeline.

## What Must Be True

For the nuclear baseload strategy to succeed:

**Technically:** SMR designs must achieve their promised cost and schedule targets. The NuScale CFPP cancellation in 2023 (costs escalated from $5.3B to $9.3B) is the cautionary case. Factory fabrication must deliver actual cost reductions, not theoretical ones.

**Regulatorily:** The NRC must approve either underground siting with geological containment, or an EPZ framework compatible with inhabited-structure proximity. This is the critical path constraint — no amount of engineering solves it.

**Operationally:** Fleet management of 25+ reactor modules at a single site must be achievable with automation-augmented staffing. Current nuclear industry staffing models do not scale to this fleet size.

**Economically:** Nuclear generation costs (including fuel, waste, and decommissioning) must remain competitive with grid power over the 60-year operating lifetime. The arcology's captive load and vertical integration provide advantages conventional merchant plants lack, but the capital cost must be financeable.

None of these are physics breakthroughs. All of them are hard.
