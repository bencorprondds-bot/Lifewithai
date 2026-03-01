---
id: "mechanical-electrical/electrical/electrical-distribution"
title: "Electrical Distribution at City Scale"
domain: "mechanical-electrical"
subdomain: "electrical"
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
tags: ["electrical", "power-distribution", "substations", "voltage-drop", "busway", "medium-voltage", "solid-state-transformers", "dc-distribution", "lightning-protection", "microgrid"]
summary: "The arcology requires delivering 4-8 GW across 1,524 meters of vertical height — a utility-scale power distribution challenge compressed into a single structure. Current supertall practice extends to this scale with significant engineering work, but emerging solid-state transformer and DC distribution technologies could fundamentally reshape the architecture."
citations:
  - id: "abb-burj-khalifa-2024"
    type: "project-data"
    title: "ABB Smart Grid Implementation at Burj Khalifa"
    source: "ABB"
    year: 2024
  - id: "siemens-high-rise-electrical-2023"
    type: "industry"
    title: "Application Model for High-Rise Buildings: Electrical Design Manual"
    source: "Siemens"
    year: 2023
  - id: "freedm-sst-2024"
    type: "peer-reviewed"
    title: "Solid-State Transformer Research and Development"
    source: "NC State FREEDM Systems Center"
    year: 2024
  - id: "lbnl-dc-distribution-2024"
    type: "peer-reviewed"
    title: "Direct Current Power in Data Centers"
    source: "Lawrence Berkeley National Laboratory"
    year: 2024
  - id: "eaton-busway-guide-2023"
    type: "industry"
    title: "Pow-R-Way Busway Design Guide"
    source: "Eaton"
    year: 2023
cross_references:
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "energy-systems/nuclear-smr/nuclear-smr-baseload"
    relationship: "depends-on"
  - slug: "mechanical-electrical/elevators/vertical-transport"
    relationship: "parallel"
  - slug: "ai-compute-infrastructure/data-centers/compute-overview"
    relationship: "informs"
  - slug: "environmental-systems/hvac/atmospheric-control"
    relationship: "informs"
open_questions:
  - "What is the optimal riser technology for 1,500m+ vertical distribution — extended busway, cable, or a hybrid approach?"
  - "Can solid-state transformers mature to commercial scale within the construction timeline to enable DC distribution backbone?"
  - "How do 50+ zone microgrids coordinate in real-time without creating protection and control complexity that exceeds current software tools?"
  - "What is the thermal expansion management strategy for conductors spanning 1,500m of vertical height?"
assumptions:
  - "Total peak electrical load of 4-8 GW based on 10 million residents at 400-800W per capita average"
  - "Primary distribution at 11-33 kV (medium voltage) with secondary distribution at 415/480V"
  - "On-site generation (nuclear + solar) provides primary power; diesel backup is impractical at this scale"
  - "Lightning strikes will be frequent at 1,524m elevation; protection is mandatory, not optional"
parameters:
  - name: "total_peak_load_gw"
    value: 6
    unit: "GW (range: 4-8)"
    confidence: 1
  - name: "vertical_distribution_height_m"
    value: 1524
    unit: "meters"
    confidence: 2
  - name: "residential_load_mw"
    value: 4000
    unit: "MW peak"
    confidence: 1
  - name: "hvac_load_mw"
    value: 3000
    unit: "MW (range: 2000-4000)"
    confidence: 1
  - name: "vertical_transport_load_mw"
    value: 750
    unit: "MW (range: 500-1000)"
    confidence: 1
  - name: "food_production_load_mw"
    value: 350
    unit: "MW (range: 200-500)"
    confidence: 1
  - name: "substation_floor_interval_m"
    value: 100
    unit: "meters (primary substations)"
    confidence: 2
  - name: "primary_substation_count"
    value: 15
    unit: "floors"
    confidence: 2
  - name: "secondary_substation_count"
    value: 45
    unit: "floors (estimate range: 40-50)"
    confidence: 1
  - name: "voltage_drop_limit_total_pct"
    value: 5
    unit: "percent (3% branch + 2% feeder)"
    confidence: 3
  - name: "max_busway_height_m"
    value: 600
    unit: "meters (practical limit)"
    confidence: 2
  - name: "burj_khalifa_height_m"
    value: 828
    unit: "meters"
    confidence: 3
  - name: "burj_khalifa_transformer_count"
    value: 74
    unit: "transformers"
    confidence: 3
---

## The Distribution Challenge

The arcology requires approximately 4-8 GW of peak electrical power — equivalent to a medium-sized country's generation capacity — delivered across 1,524 meters of vertical height. This is not an incremental scaling of existing building electrical practice; it is a compression of utility-scale power distribution into a single vertical structure.

For context: the Burj Khalifa (828m) uses 74 transformers, 5,300 km of electrical cabling, and a sophisticated ABB smart grid monitoring 400+ electrical loads. The arcology is nearly twice as tall and serves 1,000x the population. The electrical infrastructure must deliver reliable power to residential units, commercial spaces, data centers, HVAC systems, vertical transport, and internal agriculture — with voltage regulation, fault isolation, and emergency backup capability at every level.

The core challenge is achievable with current technology. Modern supertall practice provides a template that can be extended with additional engineering. But emerging technologies — particularly solid-state transformers and DC distribution — could fundamentally reshape the optimal architecture if they mature on the construction timeline.

## Load Magnitude

A 10-million-person vertical city presents utility-scale electrical demand distributed across multiple categories:

| Load Category | Estimated Peak (MW) | Notes |
|--------------|---------------------|-------|
| Residential | 4,000 | 400W/capita average with diversity factor |
| Commercial/Industrial | 1,500-2,500 | Internal economy, manufacturing |
| HVAC (cooling dominant) | 2,000-4,000 | Texas climate; largest single load |
| Vertical transport | 500-1,000 | Elevators, people movers |
| Food production | 200-500 | Vertical farming LED lighting |

The total estimated peak of 4-8 GW assumes that load diversity — the statistical reality that not all loads operate simultaneously — reduces the arithmetic sum. Still, this is the electrical demand of a city compressed into a structure where every watt must travel vertically before reaching its load.

## Vertical Distribution Architecture

### Current Supertall Practice

Modern supertall buildings receive utility power at 11-66 kV and step down through multiple distribution tiers:

- **Primary substations** at basement/podium level receive the utility feed and distribute at 11-33 kV medium voltage (MV)
- **Secondary substations** every 25-35 floors transform MV to 415V/480V for floor distribution
- **Busway risers** carry power vertically using copper or aluminum bus duct, rated up to 6,300A

The Burj Khalifa exemplifies this approach: primary substation at the base, secondary substations distributed vertically (including one at the 155th floor), and 74 total transformers coordinating the voltage cascade. The ABB Ability control system monitors real-time power flow across 400+ loads.

### The Height Problem

At 1,524 meters, several physics problems compound:

**Voltage drop** accumulates with distance. Standard practice limits total drop to 5% (3% on branch circuits, 2% on feeders per NEC). Achieving this across 5x the height of the Burj Khalifa requires either higher distribution voltages, lower-impedance conductors, or more frequent substations — likely all three.

**Conductor weight** becomes a structural consideration. Copper weighs 8.96 g/cm³. A vertical busway running the full height carries significant mass that must be supported at intervals, with expansion joints accommodating thermal movement.

**Thermal expansion** causes conductors to lengthen with temperature variation. A 1,500m copper run experiencing a 50°C temperature swing expands by approximately 1.25 meters. The mechanical engineering of conductor support and termination must accommodate this movement without creating stress points.

**Stack effect** creates air pressure differentials in electrical rooms. The natural chimney effect in a 1,500m structure pulls air upward, affecting equipment cooling and requiring HVAC coordination in every electrical room.

### Scaling the Substation Model

Extrapolating current practice to arcology scale:

- **Primary substations** every ~100m vertical = approximately 15 major transformer floors
- **Secondary substations** every 30-35 floors = 40-50 electrical riser rooms per vertical stack
- **Multiple parallel stacks** across the footprint to limit horizontal distribution distance

Each substation floor removes habitable space from the structure. At 15 primary and 45+ secondary substation floors, the electrical infrastructure consumes a meaningful fraction of the 30% non-usable allocation shared with structural columns, mechanical systems, and elevator shafts.

## Fault Protection at Scale

With hundreds of thousands of circuits spanning five or more voltage levels, protection coordination becomes a software-scale engineering problem:

**Selectivity** requires that the protective device closest to a fault trips first, isolating the problem without affecting upstream systems. Coordinating thousands of breakers, fuses, and relays across the voltage cascade requires sophisticated modeling tools (ETAP, SKM Power Tools, or equivalent).

**Arc flash energy** in MV switchgear presents serious safety hazards. Incident energy calculations must inform equipment ratings, PPE requirements, and approach boundaries throughout the structure.

**Ground fault protection** in a mixed MV/LV system requires careful design to prevent both nuisance trips and undetected faults. The arcology's ground fault strategy must account for multiple grounding configurations across different zones.

The good news: current protection coordination tools can model networks of this complexity, though they may need extension for the node count involved. The engineering is demanding but not unprecedented — utility networks manage comparable coordination challenges, just distributed horizontally rather than vertically.

## The Riser Question

Vertical power distribution traditionally uses busway (bus duct) — prefabricated enclosures containing copper or aluminum busbars with plug-in connection points at each floor. Busway offers easier maintenance, simpler modifications, and lower installation labor than equivalent cable systems.

The practical height limit for continuous busway is approximately 600 meters. Beyond this, the cumulative weight, thermal expansion, and conductor support challenges require either:

- **Segmented busway** with intermediate termination points and structural supports
- **Cable risers** with higher fault current capacity per cross-section but requiring termination boxes rather than plug-in connections
- **Hybrid approaches** using cable for express runs between substations and busway for local distribution

No consensus exists on the optimal approach for 1,500m+ vertical distribution. The arcology will likely require a novel riser architecture combining segmented MV cable runs (for long express sections) with local busway distribution (for floor-by-floor connection).

## AC vs. DC Distribution

The conventional AC approach is proven and standardized. Equipment ecosystems are mature. Codes and standards are established. Electricians know how to work with it.

But AC distribution for buildings with significant modern loads is increasingly inefficient. Computers, LED lighting, EV charging, and battery storage are all natively DC. Each AC-DC conversion loses 5-10% efficiency. A building where 60%+ of end-use loads are electronic loses substantial energy in unnecessary power conversion.

**DC distribution advantages:**
- Direct connection to solar PV, batteries, and DC loads eliminates conversion losses
- 10-20% efficiency gains versus equivalent AC systems
- Data centers are already adopting 380V DC as standard
- Simpler power electronics for variable-speed drives (HVAC, elevators)

**DC distribution barriers:**
- Limited equipment availability outside data center applications
- Codes and standards still developing (NEC Article 393 for DC microgrids)
- Electrician training and familiarity gaps
- Protection devices less mature than AC equivalents

Research consensus indicates DC distribution is technically superior for buildings with significant renewable integration and electronic loads. The barrier is ecosystem maturity, not physics. By the arcology's construction timeline, DC distribution may be commercially viable for at least the compute infrastructure zones, with hybrid AC/DC architectures for the broader structure.

## Solid-State Transformers

Solid-state transformers (SSTs) use power electronics rather than magnetic cores to transform voltage. The NC State FREEDM Systems Center demonstrated the first SST in 2010, and development has continued since.

**SST capabilities:**
- Real-time voltage regulation and power routing
- Fault isolation and power quality correction
- Smaller and lighter than equivalent magnetic transformers
- Native interface between AC and DC systems
- Bidirectional power flow for microgrid applications

**Current limitations:**
- Still primarily research-grade; commercial deployment limited
- Efficiency approaching but not exceeding conventional transformers
- Cost remains 5-10x conventional transformers

If SSTs mature to commercial scale during the construction timeline, they could enable a fundamentally different distribution architecture — an "Energy Internet" with intelligent power routing at every node. Each SST acts as both a transformer and a smart switch, enabling dynamic reconfiguration of power flow paths without physical switching.

The arcology should design its infrastructure to accommodate SST integration, even if the initial build uses conventional transformers. This means electrical room sizes, cooling provisions, and control system architecture that can support either technology.

## Microgrid Architecture

The choice between centralized and distributed electrical architecture has significant implications for reliability and control complexity:

**Centralized approach:** Traditional utility model with single point of common coupling. Simpler protection coordination, easier to manage, but vulnerable to single points of failure. A fault in the primary substation affects the entire structure.

**Microgrid approach:** Multiple semi-autonomous zones capable of islanding from the main grid during disturbances. Better resilience — localized faults don't cascade. More complex protection and control, but enables peer-to-peer energy trading between zones.

The optimal architecture is likely hybrid: a centralized MV backbone providing primary distribution, with zone-level microgrids (perhaps one per tier) capable of operating independently. During normal operation, the microgrids draw from the backbone. During disturbances, affected zones island while the backbone maintains service to healthy zones.

This architecture aligns with the tiered residential structure. Each tier becomes an electrically semi-autonomous neighborhood — drawing from shared infrastructure but capable of brief independent operation during outages. The regenerative braking energy from descending elevators becomes a local power source within each tier's microgrid.

## Emergency Power

Diesel backup at this scale is impractical. Providing 96-hour operation (per NFPA 110 for critical facilities) at 4-8 GW would require 20,000-40,000 tons of diesel fuel, with associated fire risk and logistics complexity that exceeds any reasonable design envelope.

The alternative: treat on-site generation as primary power, not backup. The nuclear SMRs provide 5.0 GW of baseload that is independent of external grid conditions. Solar and battery storage provide additional resilience. The grid interconnection becomes a supplemental and backup source, not the other way around.

This inverts the traditional relationship between building and utility. The arcology is not a large building that depends on the grid; it is a generation source that happens to interconnect with the grid. Emergency power becomes "what happens if SMRs trip" — a scenario addressed by load shedding, battery storage, and grid import rather than diesel generators.

## Lightning Protection

At 1,524 meters, the structure will intercept lightning strikes regularly — likely several times per week during active weather. The Burj Khalifa experiences 6-8 strikes per year at 828m; the arcology's exposure increases superlinearly with height.

The protection strategy:

- **Air termination network** at the crown and upper tiers captures strikes
- **Down conductor system** — likely the structural steel itself acting as a Faraday cage
- **Grounding system** with bonding at multiple levels, not just the base, to manage ground potential rise
- **Surge protection** on all critical circuits to prevent electromagnetic pulse damage to sensitive electronics

The lightning protection system must be coordinated with the electrical distribution from the earliest design phase. A strike on the structure is not an exceptional event — it is a routine operating condition that the electrical infrastructure must tolerate without damage or disruption.

## The Path Forward

The arcology's electrical distribution system is achievable with current technology, but it requires unprecedented integration of utility-scale and building-scale electrical engineering.

**What works with current technology:**
- MV distribution backbone extending proven supertall practice
- Voltage regulation via tap-changing transformers and power factor correction
- Protection coordination using existing software tools, extended for scale
- On-site generation eliminating diesel backup constraints
- Smart monitoring platforms (ABB, Siemens, Schneider) managing real-time load balancing

**What requires engineering advances:**
- Novel riser designs for 1,500m+ vertical distribution
- Protection selectivity software for 100,000+ node networks
- Control algorithms for 50+ zone microgrids coordinating in real-time
- Thermal expansion management for full-height conductor runs

**What benefits from technology maturation:**
- Solid-state transformers enabling DC distribution backbone
- Wide-bandgap semiconductors (SiC/GaN) at MV levels
- Commercial DC distribution equipment ecosystems

The electrical infrastructure is demanding but not speculative. The hardest engineering question is not whether it can work, but which of the emerging technologies will mature fast enough to incorporate into the design — and whether the added complexity of next-generation approaches is worth the efficiency gains compared to proven conventional systems.
