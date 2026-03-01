---
id: "structural-engineering/foundation-systems/foundation-systems"
title: "Foundation Systems at Arcology Scale"
domain: "structural-engineering"
subdomain: "foundation-systems"
kedl: 200
confidence: 1
status: "published"
created: "2026-02-24"
updated: "2026-02-24"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "analysis"
tags: ["foundation", "piles", "piled-raft", "settlement", "subsidence", "bearing-capacity", "gulf-coastal-plain", "geotechnical", "clay", "ground-improvement"]
summary: "Foundation systems for a 5,000-foot arcology on the Texas Gulf Coastal Plain. The structure's estimated 37.5 billion tonnes must be transferred to expansive clay with no accessible bedrock, a shallow water table, and active subsidence history. Individual pile and raft technology is mature; the site geology is the fundamental constraint."
citations:
  - id: "poulos-bunce-2008"
    type: "peer-reviewed"
    title: "Foundation Design for the Burj Khalifa"
    source: "CTBUH / Coffey Geotechnics"
    year: 2008
  - id: "jeddah-tower-piled-raft-2014"
    type: "peer-reviewed"
    title: "From Supertall to Megatall: Analysis of the Kingdom Tower Piled Raft"
    source: "CTBUH"
    year: 2014
  - id: "shanghai-tower-foundation-2012"
    type: "peer-reviewed"
    title: "Shanghai Tower Foundation Design and Pile Load Tests"
    source: "Advanced Materials Research"
    year: 2012
  - id: "twdb-yegua-jackson"
    type: "project-data"
    title: "Yegua-Jackson Aquifer: Structure and Hydrogeology"
    source: "Texas Water Development Board"
    year: 2010
  - id: "usgs-houston-subsidence"
    type: "project-data"
    title: "Houston-Galveston Subsidence Interactive Data"
    source: "USGS"
    year: 2024
  - id: "pmc-houston-subsidence-2024"
    type: "peer-reviewed"
    title: "A Century of Houston Subsidence Studies: Compaction, Creep, and Irreversibility"
    source: "PMC / Environmental Earth Sciences"
    year: 2024
  - id: "sciencedirect-large-pile-groups-2022"
    type: "peer-reviewed"
    title: "Numerical Analysis of Large Pile Group Lateral Effects"
    source: "Computers and Geotechnics"
    year: 2022
  - id: "kansai-airport-settlement"
    type: "project-data"
    title: "Kansai International Airport: Settlement Management on Soft Marine Clay"
    source: "Kansai International Airport Co."
    year: 1994
cross_references:
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "environmental-systems/water/closed-loop-water"
    relationship: "parallel"
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "informs"
open_questions:
  - "Can the Gulf Coastal Plain subsurface support 37+ billion tonnes without meters of differential settlement over the structure's lifetime?"
  - "What pile group settlement behavior emerges at scales of hundreds of thousands of piles, given no validated design methodology for groups beyond ~25?"
  - "Would a distributed foundation model — many independent systems across the 3.5-mile footprint — change the feasibility picture compared to a single integrated foundation?"
  - "Is compensated (buoyancy) foundation design feasible at this scale, and how much structural load could excavation offset?"
  - "What is the actual depth to competent bedrock at the Burleson County site, and could deep rock anchors reach it?"
  - "Can the Kansai Airport jacking model — accommodating settlement rather than preventing it — be adapted for a rigid multi-story structure?"
assumptions:
  - "Target population of approximately 10 million residents"
  - "Terraced ziggurat form with 3.5-mile base footprint (~24.6 km²)"
  - "Total structural dead load of approximately 37.5 billion tonnes (order-of-magnitude estimate: 46M m² inhabitable area at 8 kN/m² average)"
  - "Structure located in Burleson County, Texas on Gulf Coastal Plain geology"
  - "No bedrock within practical drilling range (hundreds of meters minimum)"
  - "Shallow groundwater table with active confined aquifer at depth"
parameters:
  - name: "total_structural_load_tonnes"
    value: 37500000000
    unit: "tonnes (estimated dead load)"
    confidence: 1
  - name: "foundation_footprint_sqkm"
    value: 24.6
    unit: "km²"
    confidence: 2
  - name: "surface_bearing_capacity_kpa"
    value: 96
    unit: "kPa (range: 72-120)"
    confidence: 2
  - name: "max_pile_depth_current_m"
    value: 105
    unit: "meters (Jeddah Tower, current record)"
    confidence: 3
  - name: "target_pile_depth_m"
    value: 175
    unit: "meters (estimated minimum for Gulf Coastal Plain)"
    confidence: 1
  - name: "largest_raft_current_sqm"
    value: 8945
    unit: "m² (Shanghai Tower, current record)"
    confidence: 3
  - name: "max_pile_working_load_mn"
    value: 70
    unit: "MN (limestone-socketed, current best)"
    confidence: 3
  - name: "estimated_pile_load_gcp_mn"
    value: 20
    unit: "MN (estimated achievable in Gulf Coastal Plain clays)"
    confidence: 1
  - name: "historical_subsidence_max_m"
    value: 3.0
    unit: "meters (Harris County, 20th century cumulative)"
    confidence: 3
  - name: "subsidence_rate_recent_cm_yr"
    value: 2.0
    unit: "cm/year (suburban Houston analog, e.g. Katy TX)"
    confidence: 2
  - name: "max_concrete_pour_current_m3"
    value: 61000
    unit: "m³ (Shanghai Tower, single pour over 63 hours)"
    confidence: 3
  - name: "stiff_clay_depth_m"
    value: 10
    unit: "meters (typical depth to stiff CL/SM, Houston-area analog)"
    confidence: 2
  - name: "beaumont_formation_thickness_m"
    value: 30
    unit: "meters (approximate, Burleson County regional estimate)"
    confidence: 1
  - name: "load_ratio_to_burj_khalifa"
    value: 83000
    unit: "× (arcology load / Burj Khalifa load)"
    confidence: 1
---

Foundation systems are the load-transfer interface between a structure and the earth — the piles, rafts, and ground improvement that distribute building weight into competent bearing strata. For Arcology One — a 5,000-foot terraced ziggurat housing 10 million people — this interface must handle approximately 37.5 billion tonnes of dead load across a 24.6 km² footprint in Burleson County, Texas. That load is roughly 83,000 times the Burj Khalifa's foundation load. The site is Gulf Coastal Plain clay — expansive Vertisols over Beaumont Formation deposits, with a shallow water table, no bedrock within hundreds of meters, and an active subsidence history that has already permanently deformed the regional landscape. This is not an engineering optimization problem. It is a feasibility question, and the honest answer is that it is unsolved at multiple levels simultaneously.

## What Supertall Foundations Look Like Today

The dominant foundation system for supertall buildings is the piled raft: a thick reinforced concrete slab connected to an array of bored piles. The raft distributes load broadly while piles reach competent bearing strata below soft surface soils. Three projects define the current frontier.

The **Burj Khalifa** (828m, Dubai) sits on 192 bored piles, 1.5m diameter, 43m long, connected to a 3.7m-thick raft covering 3,305 m². Total load: approximately 450,000 tonnes. Per-pile working load: ~3,000 tonnes. The design was governed by settlement tolerance (predicted 45–62mm), not bearing capacity — the piles tip into calcareous siltstone, a competent rock analog that Gulf Coastal Plain geology does not offer (poulos-bunce-2008).

The **Jeddah Tower** (planned 1,000m+, Saudi Arabia) pushed the frontier with 270 bored piles extending to **105 meters depth** at the tower center — the deepest Kelly-drilled building piles on record. Raft thickness: 4.5–5.0m. Total load: 860,000 tonnes. Foundation pressure: 2.65 MPa. This project proved that extreme pile depths are achievable in reasonable geology (jeddah-tower-piled-raft-2014).

The **Shanghai Tower** (632m, Shanghai) is the closest structural analog to Gulf Coastal Plain conditions. Its 955 bored piles, 1.0m diameter, extend 52–56m into deep Yangtze River delta soft alluvium — friction piles, not end-bearing. The raft is 6.0m thick (the thickest on record) covering 8,945 m² (the largest single-building raft footprint). A single foundation pour consumed 61,000 m³ of concrete over 63 hours, requiring embedded coolant pipes to manage hydration heat (shanghai-tower-foundation-2012). Shanghai Tower demonstrates that large pile counts in soft clay are buildable. But its total foundation area is **2,750 times smaller** than the arcology's footprint.

Current pile technology limits: maximum proven building pile depth of 105m (Jeddah), with proposed records of ~150m in Kuala Lumpur. Maximum machine-drilled shaft diameter ~3.65m. Maximum working load per pile: 40–70 MN in limestone-socketed bored piles. In Gulf Coastal Plain clays, achievable working loads are likely 15–25 MN — reduced 3–5× by geology.

## The Ground Beneath Burleson County

Burleson County sits in the transition zone between the Texas inland and the Gulf Coastal Plain, underlain by the Yegua-Jackson Aquifer system (twdb-yegua-jackson). The subsurface profile presents problems at every depth.

**Surface (0–3m):** Expansive Vertisols and Alfisols — shrink-swell clays that produce constant foundation movement under normal conditions. These are the soils that crack Texas slab-on-grade houses.

**Shallow (3–12m):** Loose to medium soils with poor bearing capacity. Stiff clay (CL) and medium-dense silty sand (SM) typically appear at 8–12m depth (central estimate: 10m) at Houston-area analog sites. Bearing capacity in this zone: 72–120 kPa (mean ~96 kPa) — or 1,500–2,500 psf. For comparison, the Jeddah Tower foundation operates at 2,650 kPa. The Gulf Coastal Plain surface is 22–37× weaker.

**Mid-depth (12–40m):** Beaumont Formation — Pleistocene clay, silt, and sand from fluvial and deltaic deposition. Approximately 20–40m thick in the region (estimated ~30m at the Burleson County site, pending site-specific confirmation). This is where conventional Houston-area piles terminate, at 60–150+ feet (18–46m). Adequate for houses and low-rises. Inadequate for arcology-scale loads.

**Deep (40m+):** More clay and interbedded sands, extending hundreds of meters. No competent bedrock within practical drilling range. Reaching competent bearing strata would require piles of an estimated 175m minimum — deeper than any building pile ever driven and 17% beyond the current proposed frontier of ~150m in Kuala Lumpur. The regional rock is far deeper still. Exactly how deep is unknown without site-specific borehole logs; the Texas Bureau of Economic Geology likely has well logs from the region, but this data has not yet been retrieved.

**Groundwater:** Shallow water table with an active confined aquifer at depth. This matters for construction: excavating any meaningful foundation depth requires aggressive dewatering. For a 24.6 km² site, dewatering would depressurize the regional aquifer for miles, inducing the same irreversible clay compaction that caused Houston's historical subsidence crisis — before a single pile is installed.

## Subsidence: A Geological Constraint

This is the critical site-specific problem, and it is not primarily an engineering problem. It is a geological one.

Harris and Galveston Counties experienced up to **3 meters (10 feet)** of cumulative land subsidence over the 20th century from groundwater pumping (usgs-houston-subsidence). Peak historical rates reached 5 cm/year. Recent suburban rates in Katy, Texas — a comparable distance from Houston to Burleson County — reach up to 2 cm/year. More than 90% of this compaction is **permanent inelastic deformation** — the clay grains rearrange irreversibly, and the ground never comes back (pmc-houston-subsidence-2024).

The arcology's relationship to subsidence operates at three scales:

**Construction-induced:** Dewatering a 24.6 km² excavation would draw down the regional aquifer, inducing meters of subsidence across a wide area during the construction phase itself.

**Load-induced:** A structure of 37.5 billion tonnes would generate pore pressure changes propagating kilometers laterally and hundreds of meters vertically. This is not local soil consolidation under a foundation — it is a regional hydrogeological disturbance. Standard geotechnical consolidation models do not apply at this scale.

**Time-dependent:** Gulf Coastal Plain clays exhibit secondary consolidation (creep) — ongoing settlement independent of pore pressure dissipation. For a 100+ year structure, these contributions are poorly constrained. Houston subsidence studies document ongoing creep even decades after water levels recover (pmc-houston-subsidence-2024).

The structure would also span areas of increasing induced seismicity from oil and gas wastewater injection. The largest recorded earthquake in the region since 1970 is M3.8 (November 2022). Growth faults are present in the Texas Coastal Plain and have been reactivated by groundwater withdrawal in suburban Houston areas. A 3.5-mile foundation footprint would almost certainly span multiple growth faults. No building code addresses rigid structures spanning active faults.

## Differential Settlement Across Miles

No structure approaches a 3.5-mile (5.6 km) integrated foundation footprint. The Shanghai Tower's record-setting raft (8,945 m²) is 2,750 times smaller than the arcology's ~24.6 km². The scaling problem is not just load — it is heterogeneity.

Over 5.6 km, even 0.1% differential settlement variation produces **5.6 meters** of vertical displacement across the footprint. That is catastrophic for any rigid structural system. The subsurface of the Gulf Coastal Plain is not uniform — it contains paleochannels (ancient buried river courses), sand lenses of varying thickness, growth fault offsets, and Beaumont Formation thickness variations that change across distances much shorter than 5.6 km. Predicting uniform settlement across this footprint is not possible with current subsurface modeling.

The Kansai International Airport offers a cautionary precedent (kansai-airport-settlement). Built as an artificial island on soft marine clay in Osaka Bay, it settled **8.2 meters beyond design expectations**. The terminal building and runways were adjusted through continuous jacking systems — an approach that works for a flat infrastructure platform but not for a vertically integrated rigid structure with 360 floors of interconnected systems.

The implication is uncomfortable: a rigid arcology on this footprint would need to either achieve nearly perfect settlement uniformity (not achievable with current prediction) or incorporate structural articulation — expansion joints, settlement-tolerant connections, independent foundation zones — that would fragment the monolithic structural concept. The geometry described in the primary geometry entry (structural-engineering/superstructure/primary-geometry) assumes an integrated structural system. Foundation realities may force that system toward a collection of structurally independent modules.

## Pile Groups at a Scale Nobody Has Modeled

Published pile group design guidance covers groups of up to approximately 25 piles (sciencedirect-large-pile-groups-2022). The Shanghai Tower — with 955 piles — was designed through extensive site-specific testing and numerical modeling, not standard codes. The arcology would require **hundreds of thousands of piles**.

Pile-soil-pile interaction in large groups produces two competing effects: **shadowing** (reduced soil resistance from overlapping stress zones between adjacent piles, reducing capacity) and **reinforcement** (soil stiffening from confinement between closely spaced piles, reducing settlement). In small groups, these effects are characterized. In groups of thousands, they are not. The 2022 study in Computers and Geotechnics was among the first to examine lateral effects for groups of 100+ piles and explicitly noted the absence of published guidance.

At arcology scale, the piles would interact not just with each other but with the regional groundwater system. Hundreds of thousands of concrete elements driven into the aquifer would alter permeability patterns, redirect groundwater flow, and create a subsurface structure that fundamentally changes the hydrogeological behavior of the site. This interaction is wholly uncharacterized.

Ground improvement technologies — deep soil mixing (reliable to 30m), stone columns, rigid inclusions — can improve near-surface bearing capacity and reduce settlement by 60%+ in treated zones. But these methods operate in the top 30 meters. The arcology's load would stress soils to depths far beyond that range. Ground improvement helps the surface problem but does not address the deep consolidation and subsidence problems.

## The Site Is the Problem

Individual foundation elements are mature technology. Bored piles to 100–150m, large piled rafts to ~9,000 m², high-capacity pile groups of hundreds to a few thousand piles — all proven. Ground improvement for near-surface preparation is well-developed. The Jeddah Tower demonstrates that 860,000-tonne total loads are engineerable in difficult ground.

What does not exist:

1. **A load distribution system** for 37.5+ billion tonnes that avoids impossible local bearing pressures. The ziggurat form may help — more mass at lower elevations with wider footprint available — but the engineering system to transfer these loads to Gulf Coastal Plain clay has not been designed or theorized.

2. **A subsidence management strategy** for a structure that would induce geological-scale consolidation on a site already prone to irreversible subsidence. Current technology cannot prevent meters of differential settlement over decades on inelastic compressible clays at this loading.

3. **A geotechnical model** validated at this scale. Characterizing the subsurface across 24.6 km² to the standard required for a safety-critical foundation would be a decade-scale investigation program. The heterogeneity of Gulf Coastal Plain deposits means model uncertainty at this scale would remain enormous even after that investigation.

A different geology would transform this picture. Hard rock, minimal clay, stable groundwater, and accessible bedrock would make foundation systems a significant but solvable engineering challenge. On the Texas Coastal Plain, foundation systems represent a fundamental feasibility barrier — not an engineering challenge waiting for optimization, but an open question about whether this site can physically support this structure. The water systems analysis (environmental-systems/water/closed-loop-water) identifies pumping energy as a major cost of height; here, the cost of height is compounded by the cost of the ground itself. The power budget (energy-systems/grid-architecture/power-budget) must eventually account for whatever active settlement management system the foundation demands — if one can be designed at all.

The single largest lever is site selection. Everything else — pile depth, raft design, ground improvement, structural articulation — is optimization within a problem space that may not contain a feasible solution for this particular patch of Gulf Coastal Plain.
