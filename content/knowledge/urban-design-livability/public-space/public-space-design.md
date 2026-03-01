---
id: "urban-design-livability/public-space/public-space-design"
title: "Public Space and Sky Gardens at Arcology Scale"
domain: "urban-design-livability"
subdomain: "public-space"
kedl: 200
confidence: 2
status: "published"
created: "2026-02-26"
updated: "2026-02-26"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "analysis"
tags: ["public-space", "sky-gardens", "parks", "biophilic-design", "atrium", "vertical-forest", "livability", "green-space", "indoor-parks"]
summary: "Analysis of public space requirements for 10 million residents in an enclosed vertical structure. Covers sky gardens, interior atriums, artificial sky technology, and the 90 km2 green space challenge. Singapore's skyrise greenery program and Gardens by the Bay provide closest precedents, but no existing project approaches the scale required."
citations:
  - id: "biosensor-sky-gardens-2024"
    type: "peer-reviewed"
    title: "Restorative Benefits of Sky Gardens: A Biosensor Study"
    source: "Building and Environment"
    year: 2024
  - id: "sky-gardens-asia-2022"
    type: "peer-reviewed"
    title: "Sky Gardens in High-Density Cities: Analysis of 982 Projects"
    source: "Sustainability (MDPI)"
    year: 2022
  - id: "gardens-by-the-bay-2024"
    type: "project-data"
    title: "Gardens by the Bay Conservatory Specifications"
    source: "Gardens by the Bay"
    year: 2024
  - id: "bosco-verticale-2014"
    type: "project-data"
    title: "Bosco Verticale Technical Documentation"
    source: "Stefano Boeri Architetti"
    year: 2014
  - id: "singapore-skyrise-handbook-2023"
    type: "industry"
    title: "Skyrise Greenery Design Guidelines"
    source: "National Parks Board Singapore"
    year: 2023
  - id: "hong-kong-elevated-2020"
    type: "peer-reviewed"
    title: "Socialising on a Skywalk: Hong Kong's Elevated Walkways as Public Space"
    source: "ResearchGate"
    year: 2020
  - id: "coelux-artificial-sky-2023"
    type: "industry"
    title: "CoeLux Artificial Sky Technology"
    source: "CoeLux"
    year: 2023
  - id: "eden-project-2001"
    type: "project-data"
    title: "Eden Project Biome Engineering"
    source: "Grimshaw Architects"
    year: 2001
cross_references:
  - slug: "urban-design-livability/residential/space-allocation"
    relationship: "depends-on"
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "environmental-systems/hvac/atmospheric-control"
    relationship: "depends-on"
  - slug: "environmental-systems/water/closed-loop-water"
    relationship: "informs"
  - slug: "environmental-systems/food-production/food-systems"
    relationship: "parallel"
open_questions:
  - "Can artificial sky technology (CoeLux) provide sufficient psychological benefit for deep interior spaces, or is genuine sky access required for long-term well-being?"
  - "What is the maximum distance from the facade before plants require supplemental photosynthetic lighting?"
  - "How do you design fauna integration (pollinators, birds) in an enclosed ecosystem without creating pest or disease vector problems?"
  - "What is the optimal vertical spacing of sky gardens to ensure every resident is within 5 minutes of meaningful green space?"
assumptions:
  - "Population of 10 million residents"
  - "20% of usable floor area allocated to parks and open space (11.16 billion sqft per space-allocation entry)"
  - "Structure height of 5,000 feet with ziggurat setbacks creating tier-top terraces"
  - "WHO minimum of 9 m2 green space per urban resident as baseline target"
  - "Deep interior spaces (beyond 20m from facade) comprise majority of floor area"
parameters:
  - name: "green_space_per_capita_target"
    value: 9
    unit: "m2/person"
    confidence: 3
  - name: "green_space_total_required"
    value: 90
    unit: "km2"
    confidence: 2
  - name: "base_footprint"
    value: 16
    unit: "km2"
    confidence: 2
  - name: "parks_allocation_pct"
    value: 20
    unit: "percent"
    confidence: 2
  - name: "parks_floor_area"
    value: 11.16
    unit: "billion sqft"
    confidence: 2
  - name: "largest_existing_sky_garden"
    value: 15000
    unit: "m2"
    confidence: 3
  - name: "largest_climate_controlled_interior"
    value: 20000
    unit: "m2"
    confidence: 3
  - name: "bosco_verticale_trees"
    value: 800
    unit: "trees per tower"
    confidence: 3
  - name: "arcology_tree_target"
    value: 100000
    unit: "trees minimum"
    confidence: 1
  - name: "natural_light_penetration"
    value: 20
    unit: "meters from facade"
    confidence: 2
  - name: "soil_weight"
    value: 1800
    unit: "kg/m3"
    confidence: 3
  - name: "mature_tree_weight"
    value: 5000
    unit: "kg average"
    confidence: 2
  - name: "max_vertical_distance_to_greenspace"
    value: 100
    unit: "vertical feet (target)"
    confidence: 1
---

## The 90 Square Kilometer Problem

The World Health Organization recommends a minimum of 9 m2 of green space per urban resident. For 10 million people, that equals 90 km2 — roughly 5.6 times the arcology's 16 km2 base footprint. There is no precedent for creating this much functional green space within an enclosed structure. Singapore's entire Skyrise Greenery program targets 200 hectares by 2030. The arcology requires 450 times that amount.

The 20% parks allocation from the space-allocation entry provides 11.16 billion sqft of floor area — approximately 1,036 km2 if measured as pure floor space. This far exceeds the 90 km2 WHO minimum. But floor space is not green space. An interior room with potted plants is not a park. The challenge is not area, but quality: making interior spaces feel like genuine nature rather than elaborate greenery decoration.

## What Works at Current Scale

The best evidence for sky gardens comes from Singapore, where mandatory landscape replacement policies have driven systematic adoption. Research analyzing 982 sky gardens across Singapore, Hong Kong, and Shenzhen identifies specific design features that deliver measurable psychological benefits.

**Biosensor studies (2024)** using skin conductance, heart rate variability, EEG, and eye tracking found:

- Large sky gardens with spatial depth and plant diversity produce the strongest stress reduction
- Medium-scale gardens with high visual complexity ("vitality") provide the best physiological relief
- Even small sky gardens overlooking cityscapes deliver meaningful restorative effects
- Vegetative density matters more than garden area
- Rich color variation and stable green coverage are more effective than minimal or sparse planting

These findings suggest that the arcology does not need 90 km2 of continuous parkland. It needs thousands of high-quality sky gardens distributed so that every resident has access within a short walk. The Singapore model of mandatory green replacement ratios — every square meter of ground coverage must be replaced with equivalent vertical greenery — provides a policy template.

## The Best Existing Precedents

**Gardens by the Bay (Singapore, 2012)** operates the world's largest climate-controlled conservatories: the Flower Dome (1.2 hectares) and Cloud Forest (0.8 hectares) maintain Mediterranean and tropical montane climates respectively. The cooling system achieves near-zero carbon operation by burning waste wood biomass to power absorption chillers. This demonstrates that enclosed botanical environments can function at significant scale with sustainable energy systems.

The arcology requires 450 times the enclosed botanical space of Gardens by the Bay. The engineering is proven. The scale is not.

**Bosco Verticale (Milan, 2014)** proved that significant tree populations can survive on building facades. Two towers (80m and 112m) support 480 large and medium trees, 300 small trees, 11,000 perennials, and 5,000 shrubs. The vegetation filters pollution, produces oxygen, and regulates building temperature. Maintenance requires specialized "flying gardeners" who rappel down the facade.

For the arcology, facade forests are secondary to interior and terrace parks, but Bosco Verticale demonstrates that trees at height are structurally and horticulturally viable. The arcology would need at least 100,000 trees distributed throughout the structure — 125 times the Bosco Verticale count — and the maintenance model cannot rely on human rappelling.

**Singapore's Skyrise Greenery Program** provides the policy framework: mandatory 1:1 landscape replacement, incentive schemes (SGIS), Green Plot Ratio requirements, and the LUSH program for intensive rooftop greenery. At 200 hectares national target, the program addresses individual buildings rather than integrated mega-structures. But the standards and design guidelines establish what quality sky gardens require.

**Hong Kong's Elevated Walkway System** — 15+ km of pedestrian networks in the Central district — shows how elevated infrastructure becomes de facto public space in land-constrained environments. The social dynamics are revealing: food gathering and informal socializing dominate usage; marginalized populations depend on these spaces disproportionately; design choices about seating, climate control, and amenities determine whether the space serves all residents or only those passing through.

## The Deep Interior Challenge

In a structure kilometers wide, the vast majority of floor area is "deep interior" — beyond 20 meters from any facade, receiving no natural daylight. Plants in deep interior spaces cannot photosynthesize on ambient light. Humans in deep interior spaces lack the circadian and psychological cues that sunlight provides.

Three technologies address this:

**Artificial Sky (CoeLux)** uses nano-structured optical panels and LED systems to replicate Rayleigh scattering — the optical phenomenon that makes the sky appear blue and creates the perception of infinite depth. A CoeLux installation only millimeters thick can create the visual perception of an open sky. The technology is deployed in hospitals, hotels, and commercial spaces where access to windows is limited.

For deep interior parks, artificial sky technology can provide the visual experience of being outdoors. But it does not address photosynthesis, and no long-term studies confirm whether artificial sky alone prevents the psychological effects of prolonged enclosed living. The question is whether humans need actual sky or merely convincing simulation.

**Photosynthetic Lighting** supplements or replaces sunlight for plant growth. LED arrays tuned to the photosynthetically active radiation (PAR) spectrum can support healthy plant growth indefinitely. Vertical farms already operate entirely under artificial light. The energy cost is significant — roughly 200-400 kWh per m2 per year for intensive growing — but the technology is mature.

Deep interior parks would not need agricultural-intensity lighting, but they would need supplemental PAR radiation for trees and large plants. Low-light adapted species (ferns, mosses, shade-tolerant groundcovers) can survive on lower intensities.

**Tier-Top Terraces** created by the ziggurat setbacks are the most valuable park space in the entire structure. These terraces have genuine sky access — sunlight, wind, weather, and horizon views. They are the only locations where residents experience actual outdoors without leaving the arcology.

The structural geometry should maximize terrace area. Every square meter of tier-top is worth more than ten square meters of interior park for psychological well-being. The setback angles are constrained by structural requirements, but within those constraints, terrace optimization is a primary design goal.

## Vertical Distribution

A ground-level park in a conventional city serves residents within approximately 300 meters walking distance — a 5-minute walk. In a vertical structure, the relevant distance is three-dimensional. A park on floor 200 does not serve a resident on floor 250 unless they can reach it in reasonable time.

For every resident to be within 5 minutes of meaningful green space, the arcology needs:

- **Horizontal coverage**: Parks distributed so that no point is more than 150-200 meters from a park entrance
- **Vertical coverage**: Parks on every 100-150 vertical feet (7-10 floors), connected by dedicated elevator service

This implies a minimum of 50 major park levels for a 5,000-foot structure, each with multiple park zones distributed across the floor plate. The 20% allocation must be understood volumetrically: many parks will be multi-story atria, consuming floor area on several levels to create a single open volume.

The circulation integration is critical. Parks cannot be isolated destinations requiring long elevator trips. They must be woven into the daily movement patterns — on the route to work, school, shopping, not a separate journey.

## Structural and Systems Integration

Green space at height creates engineering challenges that ground-level parks avoid:

**Weight.** Soil weighs 1,600-2,000 kg/m3. A park with 1 meter of planting depth adds 1.8 tonnes per square meter to floor loads. Water for irrigation adds more. Mature trees weigh 1,000-10,000+ kg each. Distributed across hundreds of floors, the cumulative load is enormous.

The structural engineering must accommodate these loads from the design stage. Retrofitting parks into a structure designed for standard floor loads is prohibitively expensive. The superstructure entry's load calculations must include distributed landscape mass.

**Water.** Parks need irrigation. At arcology scale, landscape irrigation is a significant water demand — potentially millions of gallons daily. This water must come from the closed-loop water system, and greywater recycling for irrigation is the obvious integration point. Rainwater capture at terrace levels reduces demand on the central system.

**Atmosphere.** Enclosed parks require atmospheric management: temperature, humidity, CO2 levels (plants need CO2; humans produce it), and air quality. The HVAC system must treat park zones differently from residential or commercial space. The Gardens by the Bay model — integrated cooling via biomass combustion — suggests that park climate control can be designed for energy efficiency, but it requires dedicated systems.

## Maintenance Economics

Bosco Verticale requires specialized gardeners rappelling down the facade for regular maintenance. At arcology scale — 100,000+ trees, millions of smaller plants — that model does not work. The maintenance workforce would number in the thousands, and rappelling access is impractical for interior and terrace gardens.

The industry estimate is roughly 5 maintenance workers per 1,000 plants. For a million plants, that implies 5,000 full-time gardeners. This is not impossible — it is roughly the landscaping workforce of a large city — but it is a significant labor commitment.

Automation offers partial solutions. Robotic pruning, sensor-based irrigation, drone-mounted monitoring, and AI-driven plant health diagnostics can reduce the human hours per plant. But plants are biological systems with high variance, and fully autonomous maintenance is not currently achievable for complex landscapes.

The practical approach is layered: automated monitoring and basic irrigation for all green space; robotic assistance for routine maintenance; human specialists for design, health assessment, and intervention. The robotics subdomain integration is critical — park maintenance is a leading use case for service robotics at arcology scale.

## The Psychological Threshold

Research on enclosed habitation (submarines, Antarctic stations, spacecraft) consistently identifies nature access as a primary factor in psychological well-being. The 2024 biosensor studies on sky gardens confirm that even brief exposure to well-designed green space produces measurable stress reduction.

The relevant question is not "how much green space is enough" — the 20% allocation provides generous area — but "what kind of green space prevents the psychological effects of living in an enclosed structure permanently."

No one has lived in a fully enclosed arcology-scale structure for years at a time. The closest precedents are isolated research stations where personnel rotate every 6-18 months, and the psychological challenges are well-documented. The arcology's residents will not rotate out. They will raise children, grow old, and potentially spend their entire lives without ever standing under an actual open sky (tier-top terraces excepted).

This is not a solved problem. The design must assume that high-quality interior green space, artificial sky technology, and tier-top access can together provide sufficient nature connection — but this assumption should be treated as hypothesis, not established fact. The 8.5% surplus allocation in the space-allocation entry serves partly as insurance: if psychological assessments during early habitation show that residents are struggling, surplus space can convert to additional parks.

## The Authentic Nature Debate

There is active debate over whether artificial plants and synthetic nature provide biophilic benefits. High-quality simulations — artificial trees, preserved moss walls, nature photography and video — can evoke some of the visual responses that living plants provide.

Research suggests that people respond differently when they know the nature is artificial. The stress-reduction benefits are reduced (though not eliminated) for synthetic environments. This implies that where possible, living plants are preferable — but in spaces where living plants cannot survive (true deep interior with no supplemental lighting), high-quality simulation may be better than nothing.

The practical middle ground: living plants wherever horticulturally viable, with supplemental lighting extending viability into deeper interior zones; high-quality simulation only where living systems are truly impractical; and design transparency — residents should know which spaces are living and which are simulated.

## Public vs. Private Green Space

Singapore includes private balcony gardens in its green space calculations. The arcology faces a similar question: should the 20% allocation emphasize communal parks or include distributed private gardens (balconies, terraces, window boxes)?

The WOHA architectural model places community terraces every 11 stories, creating neighborhood-scale public space. This creates nodes of social interaction at walkable intervals. Private green space, by contrast, supports individual well-being but does not build community.

The answer is probably both: communal parks for social space and ecosystem function; private or semi-private green space (shared terraces for residential clusters) for everyday nature contact. The communal parks must be genuinely public — accessible to all residents, not gated by neighborhood or tier — while the private spaces can be allocated with residential units.

The balance matters for social equity. Hong Kong research documents how elevated walkway scarcity impacts disadvantaged groups most severely. If the best green spaces are effectively privatized (high-tier terraces, premium-location parks), the arcology will reproduce rather than resolve urban inequality.

## What the Arcology Requires

Synthesizing across precedents and constraints:

**Tier-top terraces** with genuine sky access are the highest-value green space and should be maximized within structural constraints. These terraces serve the entire population for true outdoor experience.

**Major park atria** (50,000+ m2 each) should appear on approximately every 100 vertical feet, distributed across the floor plate so that no resident is more than 200 meters horizontal distance from a park entrance. These parks should be multi-story volumes with 50-100+ foot ceiling heights.

**Neighborhood sky gardens** (500-5,000 m2) should appear every 30-50 vertical feet, integrated with residential clusters. These provide daily casual nature contact.

**Facade forests** following the Bosco Verticale model can cover appropriate exterior surfaces, contributing both to interior views and to external air quality.

**Artificial sky installations** are necessary for all deep interior parks and should be designed with the highest-fidelity technology available.

**Automated maintenance infrastructure** must be integrated from the design stage, with robotic access paths, sensor networks, and irrigation systems embedded in park construction.

The total system — terraces, atria, sky gardens, facades, artificial sky, and automation — must collectively achieve the psychological function of outdoor nature for a population that may spend years without leaving the structure. This is achievable with current technology, but it has never been attempted at this scale.
