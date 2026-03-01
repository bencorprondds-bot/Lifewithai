---
id: "construction-logistics/phasing/construction-phasing"
title: "Construction Phasing at Arcology Scale"
domain: "construction-logistics"
subdomain: "phasing"
kedl: 300
confidence: 2
status: "published"
created: "2026-02-26"
updated: "2026-03-01"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "analysis"
tags: ["construction", "phasing", "scheduling", "logistics", "mega-project", "4d-bim", "last-planner", "concrete-pumping", "occupancy-during-construction", "adaptive-scheduling", "rolling-wave", "pentagon-renovation", "modular-construction"]
summary: "Construction phasing for a 5,000-foot terraced ziggurat housing 10 million people over a 20-50 year timeline. Current scheduling tools can model the project but not execute it. The key constraints are vertical material transport beyond 606m, coordination of hundreds of concurrent work fronts, and managing occupancy while construction continues — problems that have no precedent at this scale."
citations:
  - id: "flyvbjerg-megaprojects-2017"
    type: "peer-reviewed"
    title: "The Iron Law of Megaproject Management"
    source: "Transportation Institute / Oxford"
    year: 2017
  - id: "alice-technologies-2024"
    type: "industry"
    title: "ALICE Construction Optioneering Platform"
    source: "ALICE Technologies"
    year: 2024
  - id: "bentley-synchro-2024"
    type: "industry"
    title: "SYNCHRO 4D Construction Scheduling"
    source: "Bentley Systems"
    year: 2024
  - id: "oracle-p6-2026"
    type: "industry"
    title: "Primavera P6 Schedule Intelligence"
    source: "Oracle"
    year: 2026
  - id: "burj-khalifa-pumping-2010"
    type: "project-data"
    title: "Concrete Pumping to Record Heights at Burj Khalifa"
    source: "Putzmeister / Samsung C&T"
    year: 2010
  - id: "jeddah-tower-2025"
    type: "project-data"
    title: "Jeddah Tower Construction Update"
    source: "Jeddah Economic Company"
    year: 2025
  - id: "neom-line-2025"
    type: "news"
    title: "NEOM Provides Major Update Including 100-Year Timeframe for The Line"
    source: "New Civil Engineer"
    year: 2025
  - id: "lean-construction-lps"
    type: "peer-reviewed"
    title: "Last Planner System: Origins and Current Practice"
    source: "Lean Construction Institute / UC Berkeley"
    year: 2000
  - id: "three-gorges-records-2006"
    type: "project-data"
    title: "Three Gorges Dam Construction Records: Peak Annual Concrete Placement"
    source: "China Three Gorges Corporation"
    year: 2006
    url: "https://www.yangtzeriver.org/threegorges_dam/records.htm"
  - id: "pentagon-renovation-2011"
    type: "project-data"
    title: "Pentagon Renovation Program: SIPS and Occupied Building Phasing"
    source: "DBIA / Washington Post"
    year: 2011
    url: "https://dbia.org/blog/the-pentagon-renovation/"
  - id: "icra-2-ashe-2022"
    type: "industry"
    title: "ICRA 2.0: Infection Control Risk Assessment for Construction"
    source: "American Society for Health Care Engineering"
    year: 2022
    url: "https://www.ashe.org/icra2"
  - id: "ibc-111-3-2021"
    type: "government-report"
    title: "International Building Code Section 111.3: Temporary Certificate of Occupancy"
    source: "International Code Council"
    year: 2021
  - id: "avenue-south-ppvc-2023"
    type: "project-data"
    title: "Avenue South Residences: 56-Story PPVC Modular Construction"
    source: "Modular Building Institute / UOL Group"
    year: 2023
    url: "https://www.modular.org/avenue-south-residence/"
  - id: "sagrada-familia-2026"
    type: "project-data"
    title: "Completing the Sagrada Familia: Technology-Driven Construction Acceleration"
    source: "Ingenia / Institution of Civil Engineers"
    year: 2026
    url: "https://www.ingenia.org.uk/articles/completing-the-sagrada-familia/"
  - id: "pmi-rolling-wave-2019"
    type: "peer-reviewed"
    title: "Rolling Wave Planning and Progressive Elaboration"
    source: "Project Management Institute / PMBOK 7"
    year: 2019
    url: "https://www.pmi.org/learning/library/rolling-wave-approach-project-management-10514"
  - id: "heathrow-t5-safety-2008"
    type: "project-data"
    title: "Heathrow Terminal 5: Safety Culture and Construction Phasing"
    source: "JMJ Associates / BAA"
    year: 2008
    url: "https://www.jmj.com/insights/case-study/heathrow-t5-creats-strong-safety-culture-breakthrough-results/"
cross_references:
  - slug: "structural-engineering/foundation-systems/foundation-systems"
    relationship: "depends-on"
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "structural-engineering/materials/materials-at-scale"
    relationship: "depends-on"
  - slug: "construction-logistics/robotics/robotics-factory"
    relationship: "parallel"
  - slug: "mechanical-electrical/elevators/vertical-transport"
    relationship: "informs"
  - slug: "mechanical-electrical/fire-life-safety/fire-life-safety"
    relationship: "informs"
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "construction-logistics/workforce/workforce-planning"
    relationship: "depends-on"
  - slug: "construction-logistics/supply-chain/supply-chain-logistics"
    relationship: "depends-on"
open_questions:
  - "What is the minimum viable logistics model for material staging areas that migrate vertically as construction progresses?"
  - "Given that IBC Section 111.3 TCOs and ICRA-derived risk classification provide the regulatory framework, what jurisdiction-specific code amendments are needed for decades-long partial occupancy of a mega-structure?"
  - "How does construction robotics deployment change the phasing model if robots mature faster or slower than projected?"
  - "Can staged concrete batching plants embedded at 200-300m intervals be designed as permanent building infrastructure rather than temporary construction facilities?"
  - "What rebaseline interval and rolling-wave planning horizon is appropriate for a 20-50 year construction program — and which institutional model (NASA stage-gate, DoD EVMS, or a hybrid) best fits?"
assumptions:
  - "Target population of approximately 10 million residents"
  - "Terraced ziggurat form: 5,000 feet tall (1,524m), 3.5-mile base footprint"
  - "Construction duration: 20-50 years for full build-out"
  - "Parallel construction across multiple zones, not serial vertical construction"
  - "Partial occupancy begins before construction completes, potentially within first decade"
  - "Construction robotics achieve meaningful deployment during mid-project phases"
  - "Rolling-wave planning with 5-year detailed horizon and strategic milestones for full duration"
parameters:
  - name: "max_concrete_pump_height_m"
    value: 606
    unit: "meters (world record, Burj Khalifa)"
    confidence: 3
  - name: "arcology_height_m"
    value: 1524
    unit: "meters (5,000 feet)"
    confidence: 3
  - name: "pump_coverage_ratio"
    value: 0.40
    unit: "fraction of height reachable from ground-level pumping"
    confidence: 3
  - name: "peak_construction_rate_floors_per_month"
    value: 10
    unit: "floors/month (Burj Khalifa peak)"
    confidence: 3
  - name: "estimated_concrete_volume_m3"
    value: 75000000
    unit: "m3 (range: 50-100 million, aligned with materials entry)"
    confidence: 2
  - name: "estimated_steel_tonnes"
    value: 10000000
    unit: "tonnes (range: 5-15 million)"
    confidence: 2
  - name: "concurrent_work_fronts"
    value: 500
    unit: "zones (range: hundreds to thousands)"
    confidence: 1
  - name: "4d_bim_activity_count"
    value: 1000000
    unit: "activities (range: 500,000-5,000,000)"
    confidence: 1
  - name: "mega_project_overrun_rate"
    value: 45
    unit: "percent average (dams and rail)"
    confidence: 3
  - name: "construction_duration_years"
    value: 35
    unit: "years (range: 20-50+)"
    confidence: 1
  - name: "modular_height_limit_stories"
    value: 56
    unit: "stories (Avenue South Residences, Singapore, 2023)"
    confidence: 3
  - name: "burj_khalifa_duration_years"
    value: 5.75
    unit: "years (excavation to completion)"
    confidence: 3
  - name: "required_annual_concrete_rate_m3"
    value: 2100000
    unit: "m3/year (at 75M over 35 years)"
    confidence: 2
  - name: "world_record_annual_concrete_rate_m3"
    value: 5480000
    unit: "m3/year (Three Gorges Dam, 2000)"
    confidence: 3
---

## The Scale Problem in a Single Number

The world record for vertical concrete pumping is **606 meters** (1,988 feet), set at the Burj Khalifa using three custom-built Putzmeister trailer pumps with reinforced frames [burj-khalifa-pumping-2010]. Arcology One is 1,524 meters tall. Ground-level pumping can reach 40% of the structure's height. The remaining 60% — everything above the 200th floor — cannot be served by any concrete pump ever built. This single constraint forces a fundamental rethinking of vertical construction logistics, and it is only one of several problems that have no precedent at this scale.

Construction phasing for the arcology is not an optimization problem within existing methodology. It is a feasibility question that requires inventing new construction logistics paradigms. The tools to plan the project exist. The tools to execute it do not.

## What Current Scheduling Technology Can Do

Modern construction phasing relies on a hierarchy of methods, each suited to different scales and planning horizons.

**Critical Path Method (CPM)** has been the industry standard since the 1960s. It identifies the longest sequence of dependent activities and calculates float — the scheduling slack in non-critical paths. CPM works well for single buildings with 10,000–50,000 activities. The arcology would require 500,000 to 5,000,000 activities. No CPM implementation has been validated at this scale, and the combinatorial explosion of path dependencies would likely overwhelm current algorithms.

**Last Planner System (LPS)** emerged from lean construction research at UC Berkeley and represents a fundamentally different approach [lean-construction-lps]. Instead of top-down master scheduling, LPS decentralizes planning authority to crew-level "last planners" who commit to weekly work plans. Phase scheduling and look-ahead planning provide medium-term coordination. Studies show LPS improves Percent Plan Complete (PPC) from ~50% to 75–85% in conventional projects. This is the most applicable lean method for arcology-scale coordination — but it assumes human crews making human judgments. The interaction between LPS and AI-supervised robot teams (construction-logistics/robotics/robotics-factory) is uncharacterized.

**4D BIM Simulation** links 3D building information models to time-based schedules, creating visual construction sequence animations. Tools include Bentley SYNCHRO [bentley-synchro-2024] and Autodesk Navisworks. SYNCHRO reports 71.5% faster staging plan development versus 2D methods. These tools can model the arcology's construction sequence in principle. Whether they can coordinate hundreds of concurrent work fronts with real-time adaptive replanning is an open question.

**AI-Powered Generative Scheduling** is the emerging frontier, led by ALICE Technologies [alice-technologies-2024]. ALICE uses AI to explore millions of alternative construction sequences from a single BIM model and optimize for time, cost, and resource utilization simultaneously. Claims: 17% duration reduction, 14% labor cost savings. Oracle's Primavera P6 2026 release adds AI-powered Schedule Intelligence with predictive delay forecasting up to 6 weeks ahead [oracle-p6-2026]. These systems represent the most promising path toward adaptive scheduling at arcology scale — but none have been tested on projects longer than a decade or with activity counts in the millions.

**Rolling-Wave Planning** offers the program-level framework that individual scheduling tools cannot [pmi-rolling-wave-2019]. Codified in PMI's PMBOK 7, rolling-wave planning decomposes work in detail only for the near-term horizon (0–13 weeks), maintains work packages at medium-term (3–6 months), and holds strategic milestones only for the far horizon. At predefined intervals, the detail window advances — the "wave" rolling through time. NASA's International Space Station assembly program employed a variant of this approach, using Stage Assessment Reviews to certify each assembly flight configuration independently. The ISS program absorbed the 29-month post-Columbia shutdown (2003–2005) by resequencing 7 planned assembly flights without scrapping the program. DoD's Earned Value Management System (EVMS) provides the cost and schedule tracking backbone for multi-decade programs, with formal rebaseline procedures when disruptions exceed planning tolerance. For the arcology, rolling-wave planning at the program level — with LPS at the work-front level and AI-powered tools for zone-level optimization — is the most credible scheduling architecture. Detailed plans for years 1–5, strategic frameworks for years 5–15, and placeholder structures for years 15+ is not a failure of planning. It is the only honest approach at this horizon.

## Vertical Material Transport: The 600-Meter Wall

Current concrete pumping technology maxes out at 606 meters. Beyond that, concrete must move by crane bucket — slower, more expensive, and with sharply reduced throughput. The Jeddah Tower addresses this by transitioning from concrete lower structure to steel upper structure, eliminating the high-altitude pumping bottleneck [jeddah-tower-2025]. But Jeddah Tower is a single shaft. The arcology is a 3.5-mile-wide ziggurat.

Solutions under consideration for upper-level construction include:

**Relay pumping stations** at intermediate levels. Conceptually feasible — concrete is pumped to a mid-height station, transferred to a second pump, and pushed higher. No relay system has been deployed for building construction. The logistics of maintaining pump stations at 700+ meters elevation, with continuous concrete supply and cleanout requirements, are uncharacterized.

**In-situ concrete batch plants** embedded in the structure at intermediate levels. Raw aggregates and cement would be hoisted to upper-level plants, mixed on-site, and delivered over short horizontal distances. This converts the vertical pumping problem into a vertical material freight problem — still hard, but potentially solvable with construction elevators and hoists.

**Transition to steel/modular construction** at height. Steel framing can be lifted by tower cranes operating at heights exceeding 600 meters (2,000 feet) — specialized configurations, but proven on supertall projects. The transition zone itself becomes a major phasing challenge: where does concrete end and steel begin, and how do the two structural systems connect?

**Construction robotics** (construction-logistics/robotics/robotics-factory) may change this picture if robots capable of high-altitude structural work mature during the construction timeline. A robot welding steel at 1,200 meters does not care about concrete pumping limits. But the robotics factory's output timeline is uncertain, and betting the schedule on technology that doesn't yet exist is the definition of schedule risk.

## Concurrent Work Fronts at Unprecedented Scale

The Burj Khalifa had one primary vertical work front. NEOM's The Line planned 40 simultaneous 500-meter tower cores connected by steel trusses — and suspended work after demonstrating the logistical impossibility at the announced timeline. NEOM leadership acknowledged a 100-year revised timeframe in January 2025 [neom-line-2025].

The arcology would require **hundreds to thousands of concurrent work fronts**: foundation sectors in various stages, lower terrace superstructure, mid-level mechanical/electrical rough-in, upper-level structural work, interior fit-out in completed zones, and potentially early occupancy areas with full life-safety systems operational. All active simultaneously. All drawing from the same material supply chain. All requiring coordination to avoid conflicts.

For scale context: the Three Gorges Dam project at peak employed 26,000–40,000 workers across a 2.3 km dam axis with a coordinated multi-front concrete placement operation that set world records [three-gorges-records-2006]. Heathrow Terminal 5 managed 6,000 workers across a 260-hectare construction site while maintaining operations at a 67-million-passenger-per-year airport — and required a 14-year pre-construction learning investment (£63M) plus a bespoke safety culture transformation program to achieve zero construction fatalities [heathrow-t5-safety-2008]. The arcology's coordination demands exceed both by at least an order of magnitude.

The scheduling problem is not just activity count — it is dependency management at a scale where no human can hold the system in their head. The dependencies include:

**Vertical dependencies** — upper floors cannot be built until lower floors can bear the load, obviously, but load redistribution during construction must be managed continuously. The foundation must be designed to support phased loading (structural-engineering/foundation-systems/foundation-systems).

**Horizontal dependencies** — work in adjacent zones must not conflict. Crane swing radii, material staging areas, access routes, and safety exclusion zones must be coordinated across a 3.5-mile footprint.

**System dependencies** — MEP rough-in follows structural completion. Fire-life-safety systems must function in partially completed zones during occupancy (mechanical-electrical/fire-life-safety/fire-life-safety). Temporary power systems must supply construction loads while permanent systems are still being installed.

**Resource dependencies** — labor crews, equipment, material deliveries, and inspection capacity are all finite. Optimizing across hundreds of work fronts requires allocation algorithms that don't exist in current practice.

## Material Flow as Urban Logistics

The Burj Khalifa consumed 330,000 m³ of concrete and 31,400 tonnes of rebar. Jeddah Tower: 500,000 m³ of concrete and 80,000 tonnes of steel. The arcology would consume approximately **50–100 million m³ of concrete** and **5–15 million tonnes of steel** — equivalent to 2–4 times the concrete placed in the Three Gorges Dam, the largest concrete structure ever built [three-gorges-records-2006].

The concrete placement rate is the binding constraint. Three Gorges Dam set the world record at 5.48 million m³ in the year 2000, sustained over a roughly 8-year placement campaign. The arcology at 75 million m³ midpoint over 35 years requires an average annual rate of approximately 2.1 million m³/year — well within the proven envelope of a single large dam project, but sustained for 4× longer and distributed vertically across a structure rather than horizontally across a dam. At accelerated phases, the arcology might approach 4–5 million m³/year, which is achievable only with multiple concurrent batch plants, dedicated rail delivery, and around-the-clock placement operations.

This is not construction logistics. This is freight logistics at the scale of a port city.

The site would need:
- **Dedicated rail lines** for bulk material delivery — road transport cannot handle the volume
- **On-site concrete batch plants** — possibly multiple facilities, potentially migrating vertically as construction progresses
- **Steel fabrication facilities** — either on-site or in a nearby industrial zone with dedicated transport links
- **Material staging areas** — storage for components in transit between arrival and installation, sized for the rhythm of hundreds of concurrent work fronts
- **Waste processing** — construction generates debris; at this scale, debris management is a continuous operation

The supply chain analysis (construction-logistics/supply-chain/supply-chain-logistics) addresses these logistics in detail. The phasing implication is that material flow constraints will dominate schedule constraints for much of the project. You cannot build faster than you can deliver and place materials, regardless of how many work fronts are theoretically active.

## Occupancy During Construction: The Living Construction Site

Unlike any existing building project, the arcology must be **occupied while under construction** — potentially for decades. Lower terraces might house 100,000+ residents while upper terraces are still being built 1,000 meters above.

This creates phasing constraints that have no precedent at building scale — but useful precedents exist in other domains.

**The Pentagon Renovation Program (PENREN)** is the most directly relevant case study [pentagon-renovation-2011]. From 1993 to 2011, the Pentagon — 6.5 million sqft, occupied daily by 25,000–33,000 personnel — was completely renovated wedge-by-wedge while remaining fully operational. Each of five chevron-shaped wedges (~1.3M sqft) underwent slab-to-slab demolition, asbestos abatement, and complete MEP rebuild. Adjacent wedges continued operating. The program's signature innovation was Short Interval Production Scheduling (SIPS): each wedge divided into ~10,000 sqft zones, each trade given exactly 5 days per zone, creating a continuous workflow "train" that dramatically reduced schedule conflicts. The program completed approximately 4 years ahead of the 1999 revised schedule despite the 9/11 attack occurring when Wedge 1 was 5 days from completion. PENREN demonstrates that building-scale occupied-during-construction phasing is achievable — with design-build delivery, co-located project teams, and SIPS-driven workflow management.

**The ICRA 2.0 framework** — the Infection Control Risk Assessment developed by the American Society for Health Care Engineering — provides the most developed risk classification system for construction in occupied buildings [icra-2-ashe-2022]. Originally designed for hospital construction (where dust and vibration can literally kill immunocompromised patients), ICRA 2.0 classifies construction activities into five risk classes. Class IV and V require full physical containment barriers, continuous negative air pressure (≥0.02" water column), HEPA-filtered exhaust, and sealed debris transport. Adopted by 67% of healthcare facilities by 2023, this framework is directly applicable to arcology zones where construction occurs adjacent to inhabited space. The arcology's occupied-construction management system should adapt ICRA's risk classification to the specific hazards of mega-structure construction: falling object risk, structural vibration, construction noise, and dust at scale.

**The regulatory foundation exists but is untested at this scale.** IBC Section 111.3 authorizes building officials to issue Temporary Certificates of Occupancy (TCOs) for portions of a building before the entire structure is complete, provided the occupied portion can be "occupied safely" [ibc-111-3-2021]. TCOs require complete fire detection, alarm, and suppression in occupied zones; approved MEP finals; and fire-rated separation between construction and occupied areas. What no code addresses is a TCO regime that persists for decades across a structure orders of magnitude larger than any building the code's authors imagined.

Additional constraints specific to the arcology:

**Construction noise, dust, and vibration** must be isolated from inhabited zones. Conventional construction noise is 85–100 dB at the source. Horizontal and vertical transmission through the structure would need to be attenuated to livable levels — requiring physical separation, acoustic barriers, or restricted construction hours in zones adjacent to occupied areas.

**Safety exclusion zones** around active construction must be maintained. Falling object risk at 1,000 meters elevation is catastrophic. Occupied zones must be protected by overhead shields, perimeter barriers, or sufficient horizontal offset from active vertical construction.

**Temporary utility systems** must serve occupied areas while permanent systems are still being installed above. The power budget (energy-systems/grid-architecture/power-budget) must account for both construction power and occupied-zone power simultaneously. Water, HVAC, and sanitation systems face the same split demand.

**Fire and life-safety systems** must function in partially completed zones during occupancy. The fire-life-safety entry (mechanical-electrical/fire-life-safety/fire-life-safety) identifies the challenge of zoned protection in a 360-floor structure. Achieving this while construction continues above is an order of magnitude harder. Egress routes must be maintained through construction zones. Fire suppression must be operational in occupied zones even if not yet installed above.

The closest successful analogy is phased airport expansion — Heathrow Terminal 5 was built over 5.5 years with 60,000+ total workers while the airport handled 67 million annual passengers, achieving zero construction fatalities through a bespoke safety culture program [heathrow-t5-safety-2008]. But even T5 involved tens of thousands of occupants adjacent to construction, not millions, and construction was horizontal rather than directly above occupied space.

## Schedule Uncertainty Over Multi-Decade Horizons

Flyvbjerg's research on mega-projects is unambiguous: 9 out of 10 go over budget, with rail projects averaging 44.7% cost overrun and dams averaging 45% schedule delay [flyvbjerg-megaprojects-2017]. These statistics describe projects costing $1–50 billion over 5–15 years.

Extrapolating to a project costing $500 billion to $2+ trillion over 20–50 years introduces compounding uncertainty that no scheduling methodology addresses:

**Economic cycles** — multiple recessions over a 30-year project, each disrupting funding, labor availability, and material costs.

**Material price fluctuations** — steel and cement prices can double or halve over a decade. A 30-year materials budget is inherently unstable.

**Technology changes** — construction technology in 2056 will differ from construction technology in 2026 in ways that cannot be predicted. The schedule must accommodate technology upgrades mid-project. The Sagrada Familia provides a striking example: the first 130 years built 60% of the basilica, while the final 12 years completed the remaining 40% — a roughly 10× acceleration driven by CNC stone milling, prefabricated prestressed masonry panels (installed in 30 minutes each), and CAD/CAM parametric design [sagrada-familia-2026]. The lesson is real: technology can radically compress construction timelines. But the specific technologies that will accelerate arcology construction in 2050 are unknowable today.

**Political transitions** — local, state, and federal administrations will change multiple times. Regulatory frameworks, permitting requirements, and public support are all subject to political evolution.

**Workforce availability** — a 30-year project requires workforce planning across generational timescales (construction-logistics/workforce/workforce-planning). The labor market of 2056 is unknowable today.

Rolling-wave planning [pmi-rolling-wave-2019] provides the formal framework for managing this uncertainty. The program maintains three planning horizons: near-term (0–13 weeks, fully decomposed task-level), mid-term (3–6 months, work package level), and far-term (strategic milestones only). At regular intervals, the detail window advances. When disruptions exceed the current baseline's tolerance — a recession, a technology breakthrough, a political change — a formal rebaseline resets the Performance Measurement Baseline while preserving the program's strategic intent. NASA, DoD, and major infrastructure authorities use this approach for multi-decade programs. It is not a concession to uncertainty. It is the only methodology that treats long-horizon uncertainty honestly rather than pretending a 30-year Gantt chart is credible.

## What NEOM The Line Teaches

The Line was the closest precedent for arcology-scale construction phasing. The original plan: 170 km linear city, 500m tall, 200m wide, housing 9 million people, completed by 2030. The revised plan (2024): scaled to 2.4 km initial section, 300,000 residents. The revised timeline (2025): 100-year construction timeframe acknowledged by NEOM leadership. Work suspended September 16, 2025 [neom-line-2025].

The failure analysis reveals specific bottlenecks the arcology must avoid. NEOM's linear geometry meant every material delivery traveled up to 85 km from the nearest supply endpoint — no hub-and-spoke logistics possible. The on-site concrete factory produced 20,000 m³/day (7.3 million m³/year at capacity), which sounds enormous but was physically insufficient for the full design. NEOM reportedly consumed 20% of global specialty structural steel supply, distorting markets and attracting scrutiny. The workforce peaked at 140,000+ construction workers housed in a purpose-built desert camp — itself a megaproject. The module count was repeatedly reduced (20 → 12 → 7 → 4 → 3) as logistics reality collided with design ambition. Saudi PIF wrote down $8 billion across NEOM projects in August 2025 before suspending construction the following month.

NEOM demonstrates that city-scale construction phasing encounters qualitatively different challenges than building-scale phasing. Every mega-project that succeeded at scale — Three Gorges, Itaipu, Hoover Dam — allowed workforce concentration at the point of work with parallel supply chains. Linear geometry eliminates this possibility. The arcology's compact ziggurat form is a fundamental advantage: its 3.5-mile base creates a hub geometry where supply lines converge from all directions, and work fronts can be served by multiple staging areas simultaneously. This is the structural argument for the ziggurat over any linear or distributed form.

The arcology should study NEOM's failures carefully. What specific engineering methodologies were attempted and why did they fail? This data, as it becomes available after the project suspension, would be among the most valuable inputs to arcology phasing planning.

## What Can Be Built Today Versus What Requires Breakthroughs

**Achievable with current technology:**
- Detailed phasing plans for the first 5–10 years (foundation + lower terraces)
- Digital twin simulation of construction sequences using 4D BIM
- Lean construction management of individual work zones using Last Planner System
- Modular/prefabricated interior fit-out once structural shell is complete — proven up to 56 stories with Prefabricated Prefinished Volumetric Construction (PPVC), as demonstrated at Avenue South Residences in Singapore (two 192m towers, 80% fabricated off-site) [avenue-south-ppvc-2023]. The structural core must remain cast-in-place, but 50–65% of habitable volume above the podium level can be modular-constructed in completed terrace zones. Modular content decreases with height as lateral load demands increase and the structural core claims a larger fraction of the floor plate.
- Construction elevator integration with permanent vertical transport (mechanical-electrical/elevators/vertical-transport)
- Rolling-wave program management with formal rebaseline procedures [pmi-rolling-wave-2019]
- Occupied-during-construction phasing using PENREN-derived SIPS workflow and ICRA-adapted risk classification [pentagon-renovation-2011, icra-2-ashe-2022]

**Requires technology maturation:**
- Construction robotics at scale for structural work above 600m (construction-logistics/robotics/robotics-factory)
- Adaptive scheduling frameworks validated for multi-decade projects
- AI-powered coordination of 500+ concurrent work fronts with real-time replanning

**Requires invention:**
- Integrated occupancy-during-construction safety and logistics systems at mega-structure scale with decades-long TCO regimes
- Self-contained material processing (concrete batch plants, steel fabrication) embedded in the structure at intermediate levels
- Regulatory frameworks for partial occupancy during decades-long construction
- Multi-decade Earned Value Management systems that maintain accountability across political and economic cycles

## The Scheduling Architecture Problem

Traditional mega-project scheduling (Primavera P6, CPM) is centralized — one master schedule with top-down control. Lean Construction's Last Planner System advocates distributed planning with bottom-up reliability. At arcology scale, neither approach alone suffices.

A centralized schedule cannot respond fast enough to conditions across hundreds of work fronts. A distributed system cannot maintain global coordination — preventing the conflicts where Zone A's crane swing interferes with Zone B's material staging, or where Zone C's concrete pour draws resources needed for Zone D's time-sensitive operation.

The Pentagon Renovation Program offers a partial model: SIPS created predictable, repeatable work-zone rhythms (5-day trade cycles in 10,000 sqft zones) that eliminated the need for constant central replanning while maintaining global coordination through the design-build team's integrated field office [pentagon-renovation-2011]. This is the closest deployed analogy to the scheduling architecture the arcology needs — local autonomy within zones, coordinated through middleware that maintains global invariants.

The scheduling architecture for the arcology may need to resemble distributed computing architectures more broadly: local autonomy within zones, coordinated through middleware that maintains global invariants (no conflicts, resource balance, dependency satisfaction) while allowing rapid local adaptation. The governance entry (institutional-design/governance/binding-hierarchy) describes analogous architecture for decision-making; the construction schedule may need similar hybrid structures.

This architecture does not exist as a construction scheduling paradigm at arcology scale. It would need to be invented, tested at smaller scale, and proven before being trusted with a $500B+ project. The first decade of arcology construction might function as that test — building the lower terraces while simultaneously developing and validating the scheduling systems for the upper levels.
