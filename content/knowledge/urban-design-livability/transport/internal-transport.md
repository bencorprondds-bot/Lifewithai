---
id: "urban-design-livability/transport/internal-transport"
title: "Internal Transport and Multi-Modal Mobility"
domain: "urban-design-livability"
subdomain: "transport"
kedl: 300
confidence: 2
status: "published"
created: "2026-02-26"
updated: "2026-02-28"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "analysis"
tags: ["internal-transport", "people-movers", "horizontal-transit", "sky-lobbies", "wayfinding", "multi-modal", "automated-transit", "gondolas", "moving-walkways", "urban-mobility", "transfer-penalty", "indoor-positioning"]
summary: "Analysis of integrated internal mobility for 10 million residents across a 3.5-mile floor plate and 360 floors. Covers horizontal transport (automated people movers, walkways, aerial connectors), multi-modal integration at sky lobbies, and the critical relationship between transport design and urban livability. Vegas Loop and WVU PRT demonstrate automated internal transit is proven technology; the integration challenge at arcology scale is design-intensive but achievable. Research quantifies the transfer penalty at 10-15 equivalent in-vehicle minutes per transfer, establishing a hard constraint of maximum two transfers per trip for acceptable user experience."
citations:
  - id: "tkelevator-multi-2024"
    type: "project-data"
    title: "MULTI Ropeless Elevator System Specifications"
    source: "TK Elevator"
    year: 2024
  - id: "boring-vegas-loop-2025"
    type: "project-data"
    title: "Vegas Loop Operational Statistics"
    source: "The Boring Company"
    year: 2025
  - id: "wvu-prt-2024"
    type: "project-data"
    title: "WVU Personal Rapid Transit: 50 Years of Operations"
    source: "West Virginia University"
    year: 2024
  - id: "sciencedirect-vertical-transport-2024"
    type: "peer-reviewed"
    title: "Current and Future Trends in Vertical Transportation Systems"
    source: "European Journal of Operational Research"
    year: 2024
  - id: "ctbuh-ropeless-2023"
    type: "peer-reviewed"
    title: "Ropeless Elevators and the Future of Tall Building Transport"
    source: "CTBUH Research"
    year: 2023
  - id: "accelerating-walkways-2008"
    type: "peer-reviewed"
    title: "Accelerating Moving Walkways: Safety and Feasibility Analysis"
    source: "Transportation Research Part A"
    year: 2008
  - id: "la-paz-gondola-2024"
    type: "project-data"
    title: "Mi Teleferico Urban Cable Car System"
    source: "Mi Teleferico"
    year: 2024
  - id: "shimizu-megacity-2004"
    type: "industry"
    title: "TRY 2004 Mega-City Pyramid Design Study"
    source: "Shimizu Corporation"
    year: 2004
  - id: "jara-diaz-transfer-penalty-2022"
    type: "peer-reviewed"
    title: "An international time equivalency of the pure transfer penalty in urban transit trips: Closing the gap"
    source: "Transport Policy"
    year: 2022
  - id: "transport-politic-montparnasse-2009"
    type: "industry"
    title: "Paris' Experimental High-Speed Moving Walkway is Abandoned"
    source: "The Transport Politic"
    year: 2009
  - id: "buildingtheskyline-core-2023"
    type: "industry"
    title: "The Technology of Tall (Part III): Getting to the Core"
    source: "Building the Skyline"
    year: 2023
  - id: "uwb-rtls-review-2024"
    type: "peer-reviewed"
    title: "UWB-Based Real-Time Indoor Positioning Systems: A Comprehensive Review"
    source: "Applied Sciences MDPI"
    year: 2024
  - id: "crowdconnected-ips-2025"
    type: "industry"
    title: "Indoor Positioning Technology Review 2025"
    source: "Crowd Connected"
    year: 2025
  - id: "muller-prt-apm-comparison"
    type: "industry"
    title: "A Personal Rapid Transit/Airport Automated People Mover Comparison"
    source: "Advanced Transit Association"
    year: 2011
  - id: "khaleejtimes-burj-2024"
    type: "industry"
    title: "Dubai's Burj Khalifa named world's most popular landmark with 17 million visitors per year"
    source: "Khaleej Times"
    year: 2024
cross_references:
  - slug: "mechanical-electrical/elevators/vertical-transport"
    relationship: "extends"
  - slug: "urban-design-livability/public-space/public-space-design"
    relationship: "informs"
  - slug: "urban-design-livability/residential/space-allocation"
    relationship: "depends-on"
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "ai-compute-infrastructure/edge-iot/edge-sensor-mesh"
    relationship: "depends-on"
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "informs"
  - slug: "mechanical-electrical/fire-life-safety/fire-life-safety"
    relationship: "parallel"
open_questions:
  - "What is the optimal balance between fixed-route transit (predictable, simple mental model) and AI-dispatched on-demand transport (efficient, complex) at arcology scale?"
  - "Can aerial transit operate inside enclosed atriums as functional transit (not amusement rides), or should gondolas be reserved for exterior terraces with genuine sky access?"
  - "How do you maintain psychological orientation and prevent disorientation anxiety in residents who spend extended periods navigating three-dimensional interior spaces?"
assumptions:
  - "Population of 10 million residents"
  - "Structure height of 5,000 feet (1,524m) with approximately 360 floors"
  - "Base footprint of approximately 3.5 miles (5.6 km) across"
  - "Ten-tier structure with approximately 36 floors per tier"
  - "Vertical transport via zoned elevator systems with sky lobby transfers at tier boundaries (see vertical-transport entry)"
  - "Each tier functions as a semi-autonomous neighborhood with most daily needs met locally"
  - "Peak hour demand distributed by staggered schedules to prevent synchronized peaks"
parameters:
  - name: "base_footprint_miles"
    value: 3.5
    unit: "miles diameter"
    confidence: 2
  - name: "population"
    value: 10000000
    unit: "people"
    confidence: 2
  - name: "floors_total"
    value: 360
    unit: "floors"
    confidence: 2
  - name: "tiers"
    value: 10
    unit: "tiers"
    confidence: 2
  - name: "floors_per_tier"
    value: 36
    unit: "floors"
    confidence: 2
  - name: "max_elevator_speed"
    value: 18
    unit: "m/s (current best)"
    confidence: 3
  - name: "elevator_wait_time_target"
    value: 30
    unit: "seconds"
    confidence: 2
  - name: "walking_distance_max_target"
    value: 200
    unit: "meters to nearest transit"
    confidence: 2
  - name: "vegas_loop_target_capacity"
    value: 90000
    unit: "passengers/hour (full network target)"
    confidence: 2
  - name: "vegas_loop_current_capacity"
    value: 6600
    unit: "passengers/hour (2025 operations)"
    confidence: 3
  - name: "prt_guideway_capacity"
    value: 6500
    unit: "passengers/hour/direction (0.7s headway at 50 km/h)"
    confidence: 2
  - name: "moving_walkway_speed_standard"
    value: 1.8
    unit: "km/h (0.5 m/s)"
    confidence: 3
  - name: "accelerating_walkway_speed_tested"
    value: 16
    unit: "km/h (Beltways 2026 trial)"
    confidence: 2
  - name: "accelerating_walkway_speed_failed"
    value: 9
    unit: "km/h (Paris Montparnasse reduced from 12 km/h)"
    confidence: 3
  - name: "la_paz_gondola_daily_peak"
    value: 583841
    unit: "passengers (single-day record)"
    confidence: 3
  - name: "la_paz_gondola_capacity_per_line"
    value: 3000
    unit: "passengers/hour/direction (extendable to 4000)"
    confidence: 3
  - name: "wvu_prt_years_operational"
    value: 50
    unit: "years"
    confidence: 3
  - name: "wvu_prt_co2_reduction"
    value: 2200
    unit: "tons/year"
    confidence: 2
  - name: "burj_khalifa_elevators"
    value: 57
    unit: "elevators"
    confidence: 3
  - name: "burj_khalifa_daily_visitors"
    value: 47000
    unit: "people"
    confidence: 2
  - name: "burj_khalifa_annual_visitors"
    value: 17000000
    unit: "visitors/year"
    confidence: 3
  - name: "core_space_conventional_pct"
    value: 35
    unit: "percent of floor plate (30-40% range)"
    confidence: 2
  - name: "core_space_multi_reduction"
    value: 50
    unit: "percent shaft space reduction vs conventional"
    confidence: 2
  - name: "core_space_target_pct"
    value: 18
    unit: "percent of floor plate (with MULTI, realistic)"
    confidence: 2
  - name: "transfer_penalty_single"
    value: 10.9
    unit: "equivalent in-vehicle minutes"
    confidence: 3
  - name: "transfer_penalty_double"
    value: 16.7
    unit: "equivalent in-vehicle minutes (total for 2 transfers)"
    confidence: 3
  - name: "transfer_penalty_range"
    value: "13-18"
    unit: "equivalent in-vehicle minutes (planning range)"
    confidence: 2
  - name: "max_acceptable_transfers"
    value: 2
    unit: "transfers per trip"
    confidence: 2
  - name: "uwb_positioning_accuracy"
    value: "10-30"
    unit: "centimeters"
    confidence: 3
  - name: "ble_positioning_accuracy"
    value: "2-3"
    unit: "meters (with inertial data)"
    confidence: 3
---

## The Three-Mile Commute on Floor 200

The arcology's base footprint spans approximately 3.5 miles. Walking from one edge to another at average pedestrian speed (3 mph) takes over an hour. On any single floor, the distance problem is equivalent to crossing a small city — except there's no outdoor walking path, no bicycle lanes with fresh air, no sense of progression through distinct neighborhoods. The challenge is not moving people vertically (covered in the vertical-transport entry) but moving them horizontally across a floor plate larger than many downtown cores, and integrating horizontal and vertical modes into a seamless network.

This is not a technology problem. Automated people movers, moving walkways, and aerial gondolas all exist and operate reliably at large scales. The challenge is integration: creating a multi-modal system where a resident on Tier 7, floor 250, can reach any destination in the structure — another apartment, a workplace, a park, a medical clinic — without feeling like they're navigating a transportation bureaucracy.

## The Transfer Penalty: A Hard Constraint

Research on transit user behavior establishes a quantitative constraint that shapes all multi-modal design. The "pure transfer penalty" — the perceived cost of disrupting a trip to change vehicles — has been measured across multiple international transit systems. A 2022 study in Transport Policy found the penalty equivalent to 10.9 minutes of additional in-vehicle travel time for a single transfer, rising to 16.7 equivalent minutes for two transfers [jara-diaz-transfer-penalty-2022]. The planning range of 13-18 equivalent in-vehicle minutes per transfer is well-established in the literature.

This has direct implications for arcology transport design:

- **Maximum two transfers per trip**: A journey requiring three or more mode changes will be perceived as prohibitively burdensome, regardless of actual travel time. The arcology's transport network must be designed so that any origin-destination pair within the structure is reachable in two transfers or fewer.
- **Transfer environment matters**: The penalty decreases in well-designed stations with short walking distances between modes, real-time arrival information, and comfortable waiting environments. Poorly designed transfers compound the penalty.
- **Weather is irrelevant indoors**: Research shows the transfer penalty drops from 18.4 to 13.9 equivalent minutes in bad weather, as transfers provide shelter. In an enclosed arcology, all transfers occur in controlled environments — a modest advantage.

The typical intra-tier journey (elevator → people mover → walkway) involves one mode change. Cross-tier journeys (local elevator → sky lobby → express elevator → sky lobby → local elevator) involve two to four mode changes. The transport system must minimize the perceived friction of these transitions or residents will experience daily travel as burdensome.

## Horizontal Transport Technologies

### Automated People Movers

The Vegas Loop, operated by The Boring Company, provides the closest operational precedent for high-capacity automated internal transport. As of late 2025, the system handles approximately 6,600 passengers per hour with 8 operational stations. The planned full network targets 90,000 passengers per hour across 104 stations — an order-of-magnitude increase through network expansion rather than per-vehicle capacity [boring-vegas-loop-2025].

West Virginia University's Personal Rapid Transit system has operated continuously since 1975 — 50 years of automated guideway transit connecting campus buildings. The WVU PRT uses 67 rubber-tired, electrically powered vehicles traveling at up to 33 mph on 8.7 miles of dedicated guideway, transporting approximately 12,000 riders daily. The system reduces campus CO2 emissions by approximately 2,200 tons annually compared to the bus alternative it replaced. Replacing PRT service would require at least 34 buses on an average day [wvu-prt-2024].

**Capacity calculations for arcology scale**: PRT-style systems can achieve 6,500 passengers per hour per direction on a single guideway using 0.7-second headways at 50 km/h with 1.3 average occupancy [muller-prt-apm-comparison]. The arcology needs to move roughly 500,000+ passengers per hour during peak periods across all horizontal routes combined. This requires approximately 80 parallel guideway-directions operating simultaneously — achievable but requiring substantial dedicated corridor space on each tier.

For the arcology, automated people movers would serve as the primary horizontal transit mode within each tier. A network of guideway routes — think indoor light rail without drivers — could connect sky lobbies, residential clusters, commercial districts, parks, and civic facilities. The technology is mature; the design question is network topology and capacity allocation.

### Moving Walkways

Standard moving walkways operate at 0.5 m/s (1.8 km/h) — slightly faster than a slow walking pace. At this speed, crossing 200 meters takes about 2 minutes on the walkway. This is acceptable for airport terminals but inadequate for a 3.5-mile floor plate.

Accelerating walkways achieve higher speeds (up to 12-16 km/h) by using a slow-speed entry/exit zone that accelerates passengers to cruising speed in the middle section. The Paris Montparnasse high-speed walkway, installed in 2003, originally operated at 12 km/h but was reduced to 9 km/h after repeated passenger falls in the acceleration and deceleration zones. Despite warnings to keep both feet flat on the metal roller entry surface, travelers continued to fall and sustain injuries, leading RATP to pay compensation. In May 2009, RATP announced the system would be replaced with a conventional walkway, citing "numerous customer complaints concerning safety and unreliability" [transport-politic-montparnasse-2009].

A US startup called Beltways plans to test what it claims will be the world's fastest moving walkway at Cincinnati & Northern Kentucky International Airport in early 2026, targeting 16 km/h top speed. The technology continues to advance, but the Paris experience demonstrates that accelerating walkways at 10+ km/h remain problematic for general public use.

**Design approach for the arcology**: Standard-speed walkways (0.5 m/s) for pedestrian flow enhancement in high-traffic corridors, with accelerating walkways (up to 8-9 km/h) only on designated express routes with enhanced safety barriers, soft surfaces, and explicit accessibility alternatives. Moving walkways serve as the "last mile" connection between transit stops and destinations, not as the primary horizontal mode. The arcology population includes elderly residents, children, and people with mobility limitations — the same population that caused the Paris system to fail.

### Aerial Connectors

La Paz, Bolivia operates the world's most extensive urban cable car system (Mi Teleferico) — over 20 miles of lines, 30+ stations. Each line handles approximately 3,000 passengers per hour per direction, extendable to 4,000 with operational adjustments. The system's single-day ridership record reached 583,841 passengers. In its first four years, Mi Teleferico transported 150 million passengers, demonstrating cable transit operates effectively at major city scale [la-paz-gondola-2024].

For the arcology, gondolas could connect the tier-top terraces created by the ziggurat setbacks. These outdoor spaces have genuine sky access, making cable systems both technically feasible and psychologically appealing — a moment of fresh air and views during a cross-tier journey.

Interior gondolas are more speculative but not unprecedented. Gondolania at Villaggio Mall in Doha operates enclosed gondola rides inside a shopping mall, though these function as amusement attractions rather than transit. The technical requirements differ: transit gondolas must handle high throughput, rapid loading/unloading, and continuous operation, while amusement gondolas optimize for experience duration. Whether aerial transit can function effectively inside multi-story atriums — navigating structural elements, competing sight lines, and air handling systems — remains an open engineering question.

**Current conclusion**: Gondolas are proven technology for exterior terrace connections and tier-to-tier routes with outdoor segments. Interior atrium gondolas require further feasibility study before committing to them as transit infrastructure.

## The Sky Lobby as Transit Hub

The vertical-transport entry describes the sky lobby system: transfer floors where express elevators connect to local elevators, appearing approximately every 100-150 vertical feet (at tier boundaries). In the arcology, sky lobbies must function as more than elevator banks. They are the critical interchange points where vertical and horizontal modes meet.

**Singapore's integrated transit hubs** (like Jewel Changi) provide the design template: multimodal stations where rail, bus, walking, and commercial activity converge in a single architectural volume. A sky lobby serving a tier of 1 million people should offer:

- Express and local elevator access
- Automated people mover stations
- Moving walkway connections to adjacent zones
- Wayfinding kiosks and real-time transit information
- Commercial services (food, retail, convenience) to make transfers productive
- Public space — seating, greenery, natural light where possible — to make waiting pleasant

The transfer penalty research establishes specific design requirements: short walking distances between modes (ideally under 2 minutes), real-time arrival information to reduce uncertainty, and comfortable waiting environments that don't feel like purgatory. A trip requiring elevator → people mover → elevator → walkway involves two mode changes. If each transfer feels frictionless, the journey remains acceptable. If transfers involve long walks through featureless corridors, the same journey becomes an ordeal.

**Capacity challenge**: If 1 million people live on a single tier and 30% leave the tier during morning peak hours, the sky lobby must handle 300,000 transfer movements in approximately 2-3 hours — or 100,000-150,000 per hour. The lobby floor area must accommodate queuing, circulation, and mode changes without gridlock. Pedestrian flow simulation (AnyLogic, LEGION, or equivalent tools) is essential during design.

## Wayfinding in Three Dimensions

GPS does not work inside a steel superstructure. Magnetic compasses are unreliable near large metal masses. Traditional navigation cues (sun position, landmarks, street grids) are absent in an enclosed structure with hundreds of similar-looking corridors.

Modern indoor positioning technology solves the localization problem. Ultra-wideband (UWB) systems achieve 10-30 centimeter accuracy — precise enough for turn-by-turn navigation and augmented reality wayfinding overlays. Bluetooth Low Energy (BLE) beacons paired with smartphone inertial data deliver 2-3 meter accuracy without requiring UWB hardware in user devices [uwb-rtls-review-2024, crowdconnected-ips-2025]. The arcology's edge sensor mesh (see edge-iot entry) would incorporate positioning infrastructure as a standard utility.

**The remaining challenge is cognitive, not technical**: A resident arriving at a sky lobby they've never visited before needs to build a mental model of their location in three-dimensional space. This is substantially harder than 2D street navigation. Research on spatial cognition in complex buildings suggests several strategies:

**Visual consistency**: Each tier has a distinct visual identity (color palette, architectural features, material textures) so residents know immediately what tier they're on.

**Numbered addressing**: Floor, zone, and unit numbers following a consistent logic (like postal codes). A destination address like "T7-F238-NW-4421" encodes tier, floor, quadrant, and unit — learnable with exposure.

**Vertical landmarks**: Atriums, light wells, or other vertical features visible across multiple floors create reference points that anchor spatial memory.

**Physical landmarks at decision points**: Distinctive public art, water features, or architectural elements where paths diverge. These serve the same function as memorable street corners in traditional cities.

**Real-time digital wayfinding**: App-based turn-by-turn navigation using the building's positioning system. This handles the first-time visitor case but shouldn't be required for daily residents.

The wayfinding challenge is as much UX design and architectural psychology as engineering. The technical infrastructure exists; the design problem is creating spaces that feel navigable rather than disorienting.

## The Multi-Modal Network

An arcology resident's typical journey might look like:

1. Walk from apartment to tier local elevator (2 min)
2. Local elevator to tier sky lobby (3 min including wait)
3. Walk across sky lobby to people mover station (2 min)
4. People mover to destination zone (5 min)
5. Walk or moving walkway to final destination (3 min)

Total: approximately 15 minutes for an intra-tier journey of 1+ miles. This involves one mode change (elevator to people mover). Per the transfer penalty research, this adds roughly 11 equivalent minutes to perceived travel time — acceptable for most trips.

For inter-tier journeys (e.g., Tier 3 to Tier 8):

1. Walk to tier local elevator (2 min)
2. Local elevator to Tier 3 sky lobby (3 min)
3. Walk to express elevator (2 min)
4. Express elevator to Tier 8 sky lobby (5 min including wait)
5. Walk to tier local elevator (2 min)
6. Local elevator to destination floor (3 min)
7. Walk to final destination (3 min)

Total: approximately 20 minutes for a cross-structure journey. This involves two mode changes (local → express → local), adding roughly 17 equivalent minutes to perceived travel time. This approaches the threshold of acceptability. Adding a horizontal people mover leg would push the journey to three mode changes — unacceptable for routine trips.

**The design imperative is clear**: Most daily trips must occur within a single tier. If every resident regularly travels to distant tiers, the vertical transport system collapses regardless of capacity, and the psychological burden of multi-transfer journeys degrades quality of life. The space-allocation entry distributes all land uses (residential, commercial, parks, civic) across all tiers precisely to enable this — you can live, work, shop, and socialize without leaving your tier on most days.

## Core Space and Floor Plate Efficiency

In conventional high-rise buildings, elevator shafts, stairwells, and mechanical systems consume 30-40% of total floor area — space that generates no revenue and cannot be used for human activity [buildingtheskyline-core-2023]. The Burj Khalifa, with 57 elevators serving approximately 47,000 daily visitors, exemplifies this constraint [khaleejtimes-burj-2024].

TK Elevator's MULTI ropeless system claims 50% shaft space reduction compared to conventional elevators by enabling multiple cabins per shaft and bidirectional movement [tkelevator-multi-2024]. If conventional core space is 35% of floor area and shaft space represents roughly half of that, MULTI could reduce total core allocation to approximately 18-20% — a significant gain but not the 12% figure sometimes cited. The realistic target for arcology core space with MULTI technology is 18% of floor plate, representing a meaningful but not revolutionary improvement over conventional approaches.

This matters for horizontal transport: every percentage point of core space reduction is floor area available for people mover guideways, moving walkway corridors, and the commercial/public space that makes sky lobbies function as destinations rather than chokepoints.

## Autonomous Internal Shuttles

An emerging technology layer: autonomous shuttles designed for indoor navigation. The technology is nascent in 2026 but maturing rapidly. By the time arcology construction reaches interior fit-out phase (likely 2030s or later), indoor autonomous transport will likely be production-ready.

For the arcology, autonomous shuttles could serve as:

- On-demand point-to-point transport for mobility-limited residents
- Last-mile connections from people mover stations to specific destinations
- Off-peak service on routes with insufficient demand for full-capacity people movers
- Emergency response vehicles reaching specific locations quickly

The design should allocate dedicated shuttle lanes on major corridors, even if initial operations use conventional people movers. Retrofitting autonomous vehicle infrastructure into occupied space is expensive; designing it in from the start costs little.

## Energy and Regeneration

Elevator systems in tall buildings regenerate significant energy during descent — a cab descending with passengers converts potential energy to electrical energy through regenerative braking. The energy-systems entries cover the grid architecture, but internal transport is a meaningful energy consumer and potential energy contributor.

**People movers** operate at high efficiency: light rail and metro systems achieve approximately 0.15 kWh per passenger-kilometer, among the most efficient motorized transport modes. The WVU PRT system significantly reduced campus carbon emissions compared to bus alternatives — evidence that automated guideway transit can be environmentally superior to conventional vehicles even at modest scale.

**Moving walkways** consume energy continuously whether loaded or empty. High-efficiency motors and sleep modes for low-traffic periods can reduce waste, but walkways remain less efficient than discrete vehicles that only consume energy when occupied.

**Gondolas** are gravity-assisted: ascending cabins are partially balanced by descending cabins, with motors providing only the differential. This makes aerial cable systems among the most energy-efficient transit modes per passenger-kilometer.

The transport system should be designed for energy monitoring at the route level, enabling optimization based on actual demand patterns. The edge sensor mesh makes this possible; the question is whether transport operators use the data.

## Emergency Evacuation

The vertical-transport entry notes that emergency evacuation of 10 million people is an unsolved problem. Standard building codes prohibit elevator use during fires; walking down 360 floors is impossible for most people and would take hours even for the fit.

Internal transport implications:

- **Horizontal evacuation routes**: Moving residents horizontally to refuge areas or alternate vertical shafts may be safer than vertical evacuation in many scenarios
- **Fire-rated transport corridors**: Key horizontal routes must maintain structural integrity during fire events
- **Autonomous shuttle redeployment**: On-demand shuttles could redirect to evacuation mode, moving mobility-limited residents to safe zones
- **Sky lobby refuge capacity**: Sky lobbies may need to function as temporary refuge areas with life support (air, water, communications)

This is not an internal transport question alone — it intersects with fire-life-safety systems across the structure. But the transport network must be designed with emergency use cases from the start, not retrofitted.

## The Vertical-Horizontal Balance

The vertical-transport entry frames a fundamental debate: vertical-first (maximize elevator capacity, minimize horizontal travel) versus distributed-nodes (self-sufficient neighborhood zones with horizontal connections between them).

The evidence supports distributed-nodes. Internal transport works when most trips are short and horizontal. Vertical transport becomes the bottleneck when residents must travel across multiple tiers for daily activities. The arcology's tiered structure naturally creates neighborhood-scale units (each tier serves ~1 million people); the design task is ensuring each tier is complete enough that most life happens locally.

This has implications beyond transport:

- **Employment distribution**: Jobs must exist on every tier, not concentrated in lower tiers
- **Service distribution**: Schools, clinics, retail must appear in every tier, not just selected "commercial zones"
- **Social design**: Community identity should attach to tiers/neighborhoods, not just to "living in the arcology"

The transport system cannot solve a land-use problem. If the arcology develops with employment concentrated in Tiers 1-3 and housing concentrated in Tiers 7-10, no elevator system can handle the resulting commute flows. Transport and urban design must be co-designed from the start.

## What Current Technology Achieves

**Proven and deployable**:
- Zoned elevator systems with sky lobby transfers to 1,500m height
- Double-deck and TWIN elevators for increased capacity
- Automated people movers (Vegas Loop, WVU PRT models) for horizontal routes
- Standard moving walkways for pedestrian flow
- Destination dispatch AI for elevator optimization
- Aerial gondolas for outdoor/terrace connections
- UWB/BLE indoor positioning with centimeter-level accuracy

**Requires technology maturation (2030s)**:
- MULTI-style ropeless elevators at building-wide scale
- Integrated indoor autonomous shuttle networks
- eVTOL integration for external terraces
- Real-time AI traffic management for 10M-person flows
- Accelerating walkways safe for universal accessibility

**Requires breakthrough or innovation**:
- Psychological framework for 3D wayfinding that prevents disorientation in long-term residents
- Regulatory frameworks for novel internal transport modes at arcology scale
- Emergency evacuation protocols for 10M people that work within structural constraints

## The Integration Gap

Individual transport technologies are not the constraint. The challenge is system integration at unprecedented scale. No building has combined:

- 360 floors of vertical transport
- 3.5 miles of horizontal distance
- 10 million residents
- Multiple horizontal modes (people movers, walkways, shuttles, gondolas)
- Multi-modal transfers at sky lobbies
- Real-time demand management across all modes
- Maximum two-transfer constraint for acceptable user experience

The Shimizu Mega-City Pyramid concept (2004) was the first serious engineering study of internal transport in a mega-structure, proposing inclined elevators, escalators, and PRT pods in truss shafts. The concept was never built. The arcology would be the first implementation of integrated multi-modal transport at this scale.

This is achievable with current technology and careful design. It does not require breakthroughs. But it requires treating transport as a primary design constraint from the earliest phases — not an afterthought to be solved once the structure is defined. The transport network shapes the structure as much as the structure shapes the network.
