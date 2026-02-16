---
id: "environmental-systems/water/closed-loop-water"
title: "Closed-Loop Water Systems"
domain: "environmental-systems"
subdomain: "water"
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
tags: ["water", "closed-loop", "recycling", "treatment", "pumping", "gray-water", "black-water", "elevation"]
summary: "Water management for 10 million residents targeting near-zero discharge. Per-capita consumption targets, gray/black water separation, recycling rates, energy cost of water treatment and pumping at mile-high elevation. Cross-references to energy (pumping power) and structural (weight of water storage)."
citations:
  - id: "nasa-eclss-2024"
    type: "project-data"
    title: "Environmental Control and Life Support System: ISS Water Recovery"
    source: "NASA"
    year: 2024
  - id: "singapore-newater-2023"
    type: "project-data"
    title: "NEWater: Singapore's Closed-Loop Water Reclamation"
    source: "PUB Singapore"
    year: 2023
  - id: "arcology-manifesto-2026"
    type: "internal"
    title: "All Boats Rise with the Tide: A Manifesto for Building the Future Together"
    source: "Life with AI"
    year: 2026
cross_references:
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "urban-design-livability/residential/space-allocation"
    relationship: "informs"
open_questions:
  - "What is the energy penalty of pumping recycled water to upper tiers vs maintaining distributed treatment on each tier?"
  - "Can biological treatment processes operate reliably in a closed structure?"
  - "What is the minimum water storage reserve for a structure that cannot rely on external supply during emergencies?"
assumptions:
  - "Target population of 10 million residents"
  - "Per-capita water consumption of 200 liters/day (lower than US average of ~300 L/day due to efficient fixtures and recycling)"
  - "95% water recycling target (comparable to ISS recovery rates but at 10-million-person scale)"
  - "Structure height requires pumping against significant head pressure"
  - "Burleson County, Texas location — semi-arid climate, limited natural water supply"
  - "Near-zero discharge policy: minimal water leaves the structure as waste"
parameters:
  - name: "population"
    value: 10000000
    unit: "people"
    confidence: 2
  - name: "per_capita_water_liters_day"
    value: 200
    unit: "liters/day"
    confidence: 2
  - name: "total_daily_water_ML"
    value: 2000
    unit: "megalitres/day"
    confidence: 2
  - name: "recycling_target_pct"
    value: 95
    unit: "percent"
    confidence: 2
  - name: "pumping_power_mw"
    value: 225
    unit: "MW (estimate range: 150-300)"
    confidence: 1
  - name: "water_storage_reserve_days"
    value: 3
    unit: "days"
    confidence: 2
---

## The Water Budget

Ten million people consuming 200 liters per day each require 2,000 megalitres (2 billion liters) of water daily. For comparison, New York City consumes approximately 3,800 megalitres per day for 8.3 million people — about 460 liters per capita. The arcology's 200 L/day target is aggressive, roughly 57% below current US urban averages, achieved through high-efficiency fixtures, closed-loop gray water recycling, and a culture of water consciousness that the structure's design enforces.

At 95% recycling, the daily fresh water intake requirement drops to 100 megalitres — 5% makeup water to replace losses from evaporation, biological processes, and the small fraction of wastewater too contaminated for economical recovery. This is roughly the output of a mid-sized municipal water treatment plant, a manageable external dependency for a structure that otherwise operates as a closed system.

## Separation Strategy: Gray and Black

The water system separates flows into two streams from the point of use:

**Gray water** includes sink drainage, shower water, laundry effluent, and condensate from HVAC systems. This water is lightly contaminated — soap, skin cells, food particles, detergents — and can be treated to potable standard with relatively simple processes. Gray water constitutes approximately 60-70% of total residential wastewater volume.

**Black water** includes toilet waste, kitchen disposal waste, and medical facility effluent. This water carries biological pathogens, pharmaceuticals, and higher organic loads. Treatment is more energy-intensive and requires more sophisticated processes.

The separation matters because mixing gray and black water (as conventional plumbing does) contaminates the entire volume to the higher treatment standard. By keeping them separate from the fixture to the treatment plant, the system treats 60-70% of its water at lower energy cost and reserves the intensive processes for the 30-40% that requires them.

This requires dual plumbing throughout the structure — a significant infrastructure cost, but one that pays back continuously through reduced treatment energy over the structure's lifetime.

## The Treatment Chain

Water treatment in the arcology follows a multi-stage cascade:

**Stage 1 — Physical separation.** Screens, settling tanks, and membrane filtration remove particulates. This is conventional technology, well-proven at municipal scale. Energy cost: approximately 0.1-0.3 kWh per cubic meter.

**Stage 2 — Biological treatment.** Bioreactors using activated sludge or membrane bioreactor (MBR) technology break down organic contaminants. This is where the closed-structure question becomes interesting: biological treatment relies on microbial communities that produce gases (CO2, methane, trace H2S) and require oxygen input. In an enclosed structure, the gas management for biological treatment systems must be integrated with the overall atmospheric management system. Energy cost: 0.3-0.6 kWh/m3.

**Stage 3 — Advanced oxidation and disinfection.** UV treatment, ozone, or advanced oxidation processes (AOP) destroy remaining pathogens and trace pharmaceuticals. This stage is what distinguishes recycled water that is technically safe from recycled water that is genuinely potable. Energy cost: 0.1-0.5 kWh/m3.

**Stage 4 — Reverse osmosis (for black water stream).** The black water stream passes through RO membranes to remove dissolved solids, salts, and residual contaminants. RO is energy-intensive but produces water quality exceeding most municipal tap water. Energy cost: 1.0-3.0 kWh/m3.

**Stage 5 — Remineralization and blending.** Treated water is remineralized to appropriate hardness and pH, then blended with the gray water stream for distribution. The blended product meets or exceeds EPA drinking water standards.

Total treatment energy for the blended system: approximately 0.5-1.5 kWh/m3 weighted average, depending on the gray/black ratio and target quality. At 2,000 ML/day (2 million m3/day), the treatment energy demand is 1-3 GWh/day, or approximately 40-125 MW continuous.

## Pumping Energy at Elevation

This is where the physics gets uncomfortable. Water weighs 1 kg per liter. Pumping it vertically requires energy proportional to the height. The theoretical minimum energy to lift 1 m3 of water by 1 meter is 9.81 kJ (0.00272 kWh). At real pump efficiencies of 70-85%, the practical energy is approximately 0.0035 kWh per m3 per meter of lift.

The arcology's peak height is approximately 1,524 meters. Even assuming the average delivery point is at tier 5 (roughly 750 meters), the pumping energy per cubic meter is:

- 750m x 0.0035 kWh/m3/m = 2.6 kWh per m3 to the average floor

At 2 million m3/day, this implies roughly 5.2 GWh/day, or approximately 217 MW continuous — just for vertical pumping. Adding horizontal distribution losses, the total pumping power falls in the 150-300 MW range.

This is a significant fraction of the arcology's non-compute power budget (3.325 GW). Water pumping alone could consume 5-9% of non-compute power. This is the primary argument for distributed treatment — treating water on or near the tier where it is consumed, rather than pumping raw water up from centralized basement facilities and treated water back down.

## Distributed vs. Centralized Treatment

The pumping energy calculation creates a design tension:

**Centralized treatment** (in subterranean levels) offers economies of scale, easier maintenance, and simpler process control. But it requires pumping treated water to the highest tiers — a continuous energy penalty of 150-300 MW.

**Distributed treatment** (treatment plants on each tier or every 2-3 tiers) eliminates most vertical pumping by treating water locally. But it requires 10-30 smaller treatment plants instead of 1-2 large ones, with correspondingly more complex maintenance, more points of failure, and more floor area consumed.

The likely solution is a hybrid. Heavy treatment (RO, advanced oxidation) is centralized in the subterranean levels where space and structural capacity are abundant. Light treatment (gray water filtration and disinfection) is distributed at the tier level. Only the relatively small volume of black water concentrates is pumped vertically. This reduces the pumping penalty by an estimated 40-60% compared to full centralization.

## Comparison to Existing Closed-Loop Systems

**ISS Environmental Control and Life Support System (ECLSS):** Achieves approximately 90-93% water recovery for 6-7 crew members. The system processes approximately 3.6 liters per crew member per day of urine into potable water. It is the gold standard for closed-loop water recycling but operates at a scale 6 orders of magnitude smaller than the arcology's requirement.

**Singapore NEWater:** Processes 800+ ML/day of treated wastewater into ultra-pure water that supplements the municipal supply. Achieves water quality exceeding WHO drinking water standards. This is the closest terrestrial analogue in terms of scale, though Singapore's system is not fully closed-loop (it supplements, not replaces, conventional supply).

**Submarine systems:** Nuclear submarines operate closed-loop water systems for crews of 100-150 for deployments of 3-6 months. Relevant for the psychological dimension — submariners accept recycled water because the alternative is dehydration. The arcology must achieve acceptance not through necessity but through quality and transparency.

The scale gap between any existing closed-loop system and the arcology's 2,000 ML/day requirement is enormous. No facility on Earth recycles water at this volume in a fully closed loop. The closest precedent is Singapore, and the arcology's daily volume is roughly 2.5x Singapore's NEWater capacity — achievable, but only with purpose-built infrastructure at a capital cost that reflects the engineering challenge.

## Water Storage and Emergency Reserve

Three days of storage reserve at 2,000 ML/day requires 6,000 ML (6 billion liters) of stored water. Water weighs 1 kg per liter, so this reserve weighs 6 million metric tons. For structural reference, this is approximately the weight of 30 large aircraft carriers, distributed across storage tanks throughout the structure.

The weight of water storage is a non-trivial structural consideration. Placing large reserves on upper tiers increases the structural load at elevation, where the structure is already most stressed. The likely approach is distributed storage — smaller tanks on each tier with a larger strategic reserve in the subterranean levels, gravity-fed upward only during emergency pump failures.

The three-day reserve is a minimum. The arcology cannot call the municipal water department during a supply disruption. It must be self-sufficient for at least the duration of any plausible external supply interruption. In the semi-arid climate of central Texas, drought conditions could extend the self-sufficiency requirement to weeks or months, making the 95% recycling rate not just an efficiency target but a survival parameter.
