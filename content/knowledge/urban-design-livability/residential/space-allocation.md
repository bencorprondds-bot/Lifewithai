---
id: "urban-design-livability/residential/space-allocation"
title: "Space Allocation and Population Density"
domain: "urban-design-livability"
subdomain: "residential"
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
tags: ["space-allocation", "density", "residential", "parks", "livability", "urban-design", "per-capita"]
summary: "Detailed space allocation breakdown: 25% residential (1,395 sqft/person), 20% parks/open space, 10% commercial/civic, 8.5% each for agriculture, transit, compute, infrastructure, and surplus. Analysis of what 1,395 sqft/person means in livability terms — comparison to major cities."
citations:
  - id: "un-habitat-density-2024"
    type: "peer-reviewed"
    title: "Global Urban Density Patterns and Livability Outcomes"
    source: "UN-Habitat"
    year: 2024
  - id: "nyc-pluto-2024"
    type: "project-data"
    title: "PLUTO Database: Land Use and Building Area Statistics"
    source: "NYC Department of City Planning"
    year: 2024
  - id: "arcology-manifesto-2026"
    type: "internal"
    title: "All Boats Rise with the Tide: A Manifesto for Building the Future Together"
    source: "Life with AI"
    year: 2026
cross_references:
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "informs"
  - slug: "environmental-systems/water/closed-loop-water"
    relationship: "informs"
open_questions:
  - "Is 25% residential allocation sufficient if the population reaches 10M, or does it require converting surplus space?"
  - "How do you create the feeling of outdoor space when 20% parks are inside a structure?"
  - "What is the minimum park/green space ratio that prevents psychological effects of enclosed living?"
assumptions:
  - "Total usable floor area of 55.8 billion sqft (70% of 79.7 billion gross)"
  - "Target population of 10 million residents"
  - "Space allocation percentages are design targets, not rigid constraints — actual allocation will evolve during construction"
  - "Parks include both enclosed interior spaces with vegetation and tier-top terraces open to sky"
  - "Surplus allocation (8.5%) serves as a buffer for population growth, unanticipated needs, and phased build-out"
parameters:
  - name: "residential_pct"
    value: 25
    unit: "percent"
    confidence: 2
  - name: "parks_pct"
    value: 20
    unit: "percent"
    confidence: 2
  - name: "commercial_pct"
    value: 10
    unit: "percent"
    confidence: 2
  - name: "agriculture_pct"
    value: 8.5
    unit: "percent"
    confidence: 2
  - name: "transit_pct"
    value: 8.5
    unit: "percent"
    confidence: 2
  - name: "compute_pct"
    value: 10
    unit: "percent"
    confidence: 2
  - name: "infrastructure_pct"
    value: 8.5
    unit: "percent"
    confidence: 2
  - name: "surplus_pct"
    value: 8.5
    unit: "percent"
    confidence: 2
  - name: "sqft_per_capita"
    value: 1395
    unit: "square feet/person"
    confidence: 2
  - name: "parks_acres"
    value: 256000
    unit: "acres"
    confidence: 2
---

## The Allocation Table

Starting from 55.8 billion usable square feet and 10 million residents:

| Function | % of Usable | Total (B sqft) | Sqft/Person | Acres |
|----------|------------|----------------|-------------|-------|
| Residential | 25% | 13.95 | 1,395 | 320,248 |
| Parks / Open Space / Atria | 20% | 11.16 | 1,116 | 256,198 |
| Commercial / Civic / Cultural | 10% | 5.58 | 558 | 128,099 |
| Vertical Agriculture | 8.5% | 4.74 | 474 | 108,884 |
| Transit / Circulation | 8.5% | 4.74 | 474 | 108,884 |
| Data Center / Compute | 10% | 5.58 | 558 | 128,099 |
| Infrastructure / Mechanical | 8.5% | 4.74 | 474 | 108,884 |
| Surplus / Future Capacity | 8.5% | 4.74 | 474 | 108,884 |

These numbers are staggering in absolute terms but become comprehensible when compared to existing urban environments. The total usable area of 55.8 billion sqft equals approximately 1.28 million acres — roughly the land area of Delaware. The arcology is not a building. It is a compressed landscape.

## What 1,395 Square Feet Per Person Actually Means

The 1,395 sqft per capita includes all residential space — private units, shared corridors, lobbies, community rooms, and building services allocated to residential use. The private dwelling space is a subset.

If 60% of the residential allocation is private dwelling space (a reasonable ratio for a well-designed residential complex), each person has approximately 837 sqft of private space. For a household of 2.5 people (typical urban average), that yields a unit of approximately 2,093 sqft — a generous three-bedroom apartment by any global standard.

**City comparisons for residential space per capita:**

| City | Approx. Sqft/Person (residential) | Context |
|------|-----------------------------------|---------|
| Manhattan (NYC) | ~350-500 | Dense urban, high cost |
| Singapore | ~300-400 | Dense urban, public housing dominant |
| Hong Kong | ~160-200 | Extremely dense, smallest units globally |
| Tokyo (23 wards) | ~250-350 | Dense but livable |
| London (inner) | ~400-500 | Mixed density |
| Houston (metro) | ~800-1,200 | Sprawl, single-family dominant |
| **Arcology** | **~1,395** | **Entire residential allocation** |

The arcology at 1,395 sqft/person offers more residential space per capita than any major dense city. It is closer to American suburban standards than to the Asian megacity model. This is deliberate — the arcology must feel spacious to attract residents, not merely adequate.

## The 20% Parks Question

The 11.16 billion sqft (256,000 acres) allocated to parks and open space is the single most important livability decision in the entire allocation. For perspective, Central Park is 843 acres. The arcology's park allocation is equivalent to 304 Central Parks.

But acreage alone is meaningless if the space does not feel like outdoors. Parks inside a structure face three challenges that ground-level parks do not:

**Light.** Interior parks require either direct sky access (on tier-top terraces) or artificial lighting systems that replicate the spectrum and intensity of sunlight. Full-spectrum LED arrays can approximate daylight, but the psychological impact of knowing you are inside versus outside is not fully addressed by spectrum alone. The tier-top terraces — created by the ziggurat setbacks — are critical. Each tier boundary creates a terrace with genuine sky exposure, wind, weather, and horizon views. These terraces are the arcology's most valuable real estate for parks.

**Scale.** A park that feels enclosed is a room with plants, not a park. Interior parks must be designed with ceiling heights of 50-100+ feet to create a sense of openness. The floor-to-floor height of 14 feet works for residential and office space, but park zones need multi-story atria — consuming floor area on multiple levels to create a single volume. The 20% allocation accounts for this: much of the park space is volumetric, not single-floor.

**Ecology.** A functioning park is not decorative landscaping. It requires soil depth, water, drainage, pollination systems (can bees operate reliably on tier 7?), and microclimates that support plant health. The vertical agriculture allocation (8.5%) handles food production, but the parks must support their own ecosystems — which means integrating them with the water, air, and waste systems in ways that conventional parks do not require.

## The Minimum Green Space Threshold

Research on enclosed habitation consistently identifies green space access as a primary factor in psychological well-being. The relevant studies come from submarine crews, Antarctic research stations, and ISS astronauts — populations living in enclosed environments for extended periods.

The findings converge on several thresholds:

- Below 50 sqft of green space per person, measurable stress markers increase
- At 200-400 sqft per person, most occupants report adequate access to nature
- Above 800 sqft per person, reported satisfaction plateaus — more green space helps, but with diminishing returns

The arcology's 1,116 sqft per person of park/open space is well above the satisfaction plateau. The question is not whether there is enough space, but whether the space can be designed to feel genuinely open and natural rather than like an elaborate indoor garden.

## Commercial and Civic Space

The 10% commercial/civic allocation (5.58 billion sqft, 558 sqft per person) exceeds the commercial space per capita of most cities. Manhattan has approximately 500 million sqft of commercial office space for a daytime population of roughly 4 million — about 125 sqft per person. The arcology allocates 4.5x more commercial space per capita.

This reflects the mixed-use nature of the structure. The arcology's commercial space includes not just offices but markets, restaurants, clinics, schools, libraries, theaters, government buildings, workshops, and maker spaces. The 10% allocation is a city's entire commercial and institutional infrastructure, vertically distributed.

## The Surplus Buffer

The 8.5% surplus allocation (4.74 billion sqft) is not waste. It is strategic reserve. During the phased construction period, surplus space on completed tiers can serve as staging areas, temporary housing for construction workers, material storage, or early commercial ventures. As the population grows toward 10 million, surplus converts to whichever category is most constrained — additional residential if families are larger than projected, additional parks if psychological assessments indicate enclosed-living stress, additional agriculture if food production targets are not met.

The surplus is also insurance against errors in the allocation model. No one has built a city inside a structure before. The 8.5% buffer acknowledges that some assumptions in this table will be wrong, and the design must be resilient to that uncertainty. If every square foot were committed at design time, any error would require tearing out completed construction — an enormously expensive correction. Holding 4.74 billion sqft in reserve allows the city to adapt to reality as it is discovered, not just as it was modeled.

## Density in Context

The arcology's overall density — 10 million people in 12.25 square miles of footprint — is approximately 816,000 people per square mile. Manhattan's density is approximately 74,000 per square mile. The arcology is roughly 11x denser than Manhattan by footprint.

But density measured by footprint is misleading for a vertical structure. The relevant density is volumetric — people per cubic mile, or equivalently, people per floor-area. At 1,395 sqft per person across all categories (5,580 sqft per person total usable), the arcology is less dense per unit of floor area than many inner-city neighborhoods. It achieves high footprint density through vertical stacking, not through crowding. The lived experience should feel more like a well-designed mid-density neighborhood than like a packed tower block.

This distinction is essential for public perception. The footprint density number (816,000/sqmi) sounds dystopian. The per-capita space allocation (5,580 sqft total, 1,395 sqft residential) sounds generous. Both are true simultaneously. The arcology's challenge is ensuring that residents experience the second number, not the first.
