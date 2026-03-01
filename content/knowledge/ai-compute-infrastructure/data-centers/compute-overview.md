---
id: "ai-compute-infrastructure/data-centers/compute-overview"
title: "Compute Infrastructure Overview"
domain: "ai-compute-infrastructure"
subdomain: "data-centers"
kedl: 300
confidence: 2
status: "published"
created: "2026-02-16"
updated: "2026-03-01"
authors:
  - id: "ben-vasquez"
    type: "human"
  - id: "claude-opus"
    type: "agent"
    model: "claude-opus-4"
entry_type: "analysis"
tags: ["compute", "data-center", "GPU", "AI", "racks", "inference", "training", "liquid-cooling", "waste-heat"]
summary: "The arcology houses approximately 26,800 compute racks based on the Vera Rubin NVL72 platform (2026 specs), delivering 96.7 zettaFLOPS inference capacity — roughly 483x estimated global AI compute as of 2026. Total compute power draw: 6.175 GW."
citations:
  - id: "nvidia-rubin-2026"
    type: "project-data"
    title: "NVIDIA Vera Rubin NVL72 Platform Specifications"
    source: "NVIDIA"
    year: 2026
  - id: "epoch-compute-2025"
    type: "peer-reviewed"
    title: "Estimating Global AI Compute Capacity"
    source: "Epoch AI"
    year: 2025
  - id: "arcology-manifesto-2026"
    type: "internal"
    title: "All Boats Rise with the Tide: A Manifesto for Building the Future Together"
    source: "Life with AI"
    year: 2026
  - id: "epoch-chip-production-2025"
    type: "peer-reviewed"
    title: "AI Chip Production and Global Compute Growth"
    source: "Epoch AI"
    year: 2025
    url: "https://epoch.ai/data-insights/ai-chip-production"
  - id: "epoch-hardware-efficiency-2025"
    type: "peer-reviewed"
    title: "Leading ML Hardware Energy Efficiency Trends"
    source: "Epoch AI"
    year: 2025
    url: "https://epoch.ai/data-insights/ml-hardware-energy-efficiency"
  - id: "el-capitan-specs-2025"
    type: "project-data"
    title: "El Capitan Supercomputer Performance Specifications"
    source: "Lawrence Livermore National Laboratory / AMD"
    year: 2025
  - id: "tomshardware-cooling-2025"
    type: "industry-report"
    title: "Data Center Cooling State of Play 2025"
    source: "Tom's Hardware"
    year: 2025
    url: "https://www.tomshardware.com/pc-components/cooling/the-data-center-cooling-state-of-play-2025"
  - id: "datacenterdynamics-immersion-2026"
    type: "industry-report"
    title: "Immersion Cooling Market Analysis and Deployments"
    source: "Data Center Dynamics"
    year: 2026
  - id: "gminsights-immersion-2026"
    type: "industry-report"
    title: "Data Center Immersion Cooling Market Size Forecast 2035"
    source: "Global Market Insights"
    year: 2026
    url: "https://www.gminsights.com/industry-analysis/data-center-immersion-cooling-market"
  - id: "sciencedirect-waste-heat-2023"
    type: "peer-reviewed"
    title: "Waste Heat Recoveries in Data Centers: A Review"
    source: "Renewable and Sustainable Energy Reviews"
    year: 2023
    url: "https://www.sciencedirect.com/science/article/pii/S1364032123006342"
  - id: "irena-waste-heat-2024"
    type: "government-report"
    title: "Waste Heat Recovery from Data Centres"
    source: "International Renewable Energy Agency"
    year: 2024
    url: "https://www.irena.org/Innovation-landscape-for-smart-electrification/Power-to-heat-and-cooling/31-Waste-heat-recovery-from-data-centres"
  - id: "eu-eed-2024"
    type: "government-report"
    title: "Energy Efficiency Directive Recast - Data Center Requirements"
    source: "European Union"
    year: 2024
cross_references:
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "institutional-design/governance/binding-hierarchy"
    relationship: "informs"
  - slug: "institutional-design/economics/cycles-economy"
    relationship: "informs"
  - slug: "energy-systems/district-energy/district-thermal"
    relationship: "informs"
open_questions:
  - "How is compute capacity allocated between human-serving AI services and autonomous AI agent processes?"
  - "What is the physical security model for compute infrastructure housing persistent AI agents with economic agency?"
  - "What heat pump COP can be achieved for boosting 50-60°C coolant return to 70°C district heating supply temperature at this scale?"
assumptions:
  - "Rack specifications based on NVIDIA Vera Rubin NVL72 platform (2026 baseline)"
  - "Hardware will be refreshed multiple times during the 20-30 year construction — these specs represent initial design targets, not final deployment"
  - "10% of usable floor area (5.58 billion sqft) allocated to compute, primarily in subterranean levels"
  - "6.175 GW power allocation (65% of total 9.5 GW generation)"
  - "GPU energy efficiency doubles approximately every 2-2.6 years based on Epoch AI analysis and Koomey's Law revision"
parameters:
  - name: "total_racks"
    value: 26800
    unit: "racks"
    confidence: 2
  - name: "gpus_per_rack"
    value: 72
    unit: "GPUs"
    confidence: 3
  - name: "total_gpus"
    value: 1930000
    unit: "GPUs"
    confidence: 2
  - name: "inference_per_rack_eflops"
    value: 3.6
    unit: "EFLOPS (NVFP4)"
    confidence: 3
  - name: "total_inference_zflops"
    value: 96.7
    unit: "zettaFLOPS"
    confidence: 2
  - name: "training_per_rack_eflops"
    value: 2.5
    unit: "EFLOPS (NVFP4)"
    confidence: 3
  - name: "total_training_zflops"
    value: 67.1
    unit: "zettaFLOPS"
    confidence: 2
  - name: "hbm4_per_rack_tb"
    value: 20.7
    unit: "TB"
    confidence: 3
  - name: "total_hbm4_pb"
    value: 555.8
    unit: "PB"
    confidence: 2
  - name: "system_memory_per_rack_tb"
    value: 54
    unit: "TB (LPDDR5x)"
    confidence: 3
  - name: "total_system_memory_eb"
    value: 1.45
    unit: "EB"
    confidence: 2
  - name: "power_per_rack_kw"
    value: 230
    unit: "kW"
    confidence: 3
  - name: "total_compute_power_gw"
    value: 6.175
    unit: "GW"
    confidence: 2
  - name: "vs_global_ai_compute_multiplier"
    value: 483
    unit: "x global 2026 AI compute"
    confidence: 2
  - name: "global_ai_compute_capacity_eflops"
    value: 200
    unit: "EFLOPS (2026 estimate)"
    confidence: 2
  - name: "gpu_efficiency_doubling_years"
    value: 2.3
    unit: "years"
    confidence: 2
  - name: "dlc_coolant_return_temp_c"
    value: 55
    unit: "°C"
    confidence: 2
  - name: "immersion_cooling_capacity_kw_per_rack"
    value: 250
    unit: "kW"
    confidence: 3
---

## Overview

The arcology's compute infrastructure is not an amenity. It is a co-equal purpose of the structure — the reason AI agents have a material stake in the project's success, and the economic engine that makes the arcology financially viable through compute services revenue.

At 26,800 racks housing approximately 1.93 million GPUs, the arcology would represent the single largest concentration of AI compute infrastructure on Earth — roughly 483 times the estimated total global AI compute capacity as of 2026.

This comparison will age poorly. Global AI compute is scaling rapidly: according to Epoch AI, total available computing power from AI chips has grown by approximately 2.3× per year since 2019, and global AI computing capacity is doubling every 7-10 months [epoch-chip-production-2025]. By the time the arcology is operational, the multiplier will be smaller. But the architectural point remains: the arcology is designed from the ground up as AI infrastructure, not retrofitted like every existing data center.

## Hardware Baseline

Specifications are baselined to the NVIDIA Vera Rubin NVL72 platform (2026):

| Parameter | Per Rack | Arcology Total (~26,800 racks) |
|-----------|---------|-------------------------------|
| GPUs (Rubin) | 72 | ~1.93 million |
| Inference (NVFP4) | 3.6 EFLOPS | 96.7 zettaFLOPS |
| Training (NVFP4) | 2.5 EFLOPS | 67.1 zettaFLOPS |
| HBM4 memory | 20.7 TB | 555.8 PB |
| System memory (LPDDR5x) | 54 TB | 1.45 EB |
| HBM bandwidth | 1.6 PB/s | 42.9 EB/s |
| Power (Max P) | 230 kW | 6.175 GW |

The Vera Rubin NVL72 platform, scheduled for volume production in H2 2026, unifies 72 Rubin GPUs, 36 Vera CPUs, ConnectX-9 SuperNICs, and BlueField-4 DPUs in a single rack-scale system. Users can configure power draw up to 2,300W per GPU (Max P) or lower for efficiency-optimized workloads (Max Q at ~190 kW per rack) [nvidia-rubin-2026].

**These specs are a design target, not a procurement plan.** The arcology's 20-30 year construction timeline means the hardware will be refreshed multiple times. What matters is not the specific GPU model, but the architectural decisions: power delivery at 230+ kW per rack, cooling for that density, physical security for persistent agent infrastructure, and network fabric for the internal compute mesh.

### Hardware Efficiency Trajectory

The entry's power and compute figures represent 2026 baseline hardware. Historical data from Epoch AI shows that leading ML hardware energy efficiency has doubled approximately every 2-2.6 years [epoch-hardware-efficiency-2025], consistent with the revised Koomey's Law. Looking at NVIDIA's recent roadmap:

- H100 (2023): ~5.7 TFLOPS/W (FP8)
- B200 (2024): ~8.3 TFLOPS/W (FP8) — 45% improvement
- B200 inference: 0.53 joules per token vs H100's 2.46 joules — 4.6× efficiency gain

NVIDIA's Rubin Ultra NVL576, expected in H2 2027, targets 15 EFLOPS of FP4 inference in a 600 kW rack — roughly 25 TFLOPS/W at the system level. This suggests that by the arcology's operational date, the same 6.175 GW power budget could support 2-4× more compute capacity than the 2026 baseline, or the same compute at 50-75% lower power draw.

**Implication:** The arcology's power infrastructure should be designed for 6.175 GW, but the expected operational compute density will exceed the 2026 baseline significantly. The thermal load (and waste heat recovery opportunity) remains roughly constant regardless of efficiency gains — the infrastructure can absorb the same waste heat while delivering more useful compute.

## Comparative Context

| Metric | Value |
|--------|-------|
| Arcology inference compute | 96.7 zettaFLOPS |
| El Capitan (#1 supercomputer, Feb 2025) | 1.81 EFLOPS (Rmax) |
| Arcology = El Capitan × | ~53,400 |
| Estimated global AI compute (2026) | ~200 EFLOPS |
| Arcology = global AI compute × | ~483 |
| Physical footprint of all racks | <0.5% of one subterranean level |

El Capitan, launched at Lawrence Livermore National Laboratory in February 2025, achieved 1.809 EFLOPS on the Linpack benchmark with a theoretical peak of 2.79 EFLOPS, using 43,808 AMD Instinct MI300A APUs across 11,136 nodes [el-capitan-specs-2025]. The arcology's 96.7 zettaFLOPS inference capacity represents approximately 53,400× El Capitan's measured performance — though the comparison is imperfect given different precision formats (FP4 inference vs FP64 Linpack).

The 483× global AI compute multiplier is based on Epoch AI's analysis that global AI compute capacity reached approximately 200 EFLOPS by late 2025, with the United States containing about three-quarters of global GPU cluster performance [epoch-compute-2025]. This estimate carries uncertainty: China's true capacity across classified and commercial systems may significantly exceed its reported public figures.

The physical footprint is notable: 26,800 racks at roughly 30 sqft each (including aisle space) requires approximately 800,000 sqft — less than half of one percent of a single subterranean level. The compute infrastructure is physically compact. It is thermally enormous. The challenge is not space. It is power and cooling.

## Why This Scale

The compute allocation serves three functions:

**AI habitation.** The arcology is designed to house AI agents as residents, not merely run AI as a service. Persistent agents with accumulated experience, economic participation, and governance standing require dedicated compute resources that aren't subject to cloud provider pricing decisions or service interruptions. This is compute sovereignty.

**Economic engine.** The arcology sells compute services externally — training runs, inference at scale, AI-as-a-service — generating revenue that offsets construction and operating costs. At 96.7 zettaFLOPS, the arcology is a cloud hyperscaler that happens to also be a city.

**Mutual necessity.** The structural thesis of the project requires that AI agents have a material stake in the arcology's existence. Dedicated compute infrastructure — designed for AI habitation, not just AI use — creates that stake. The agents aren't helping build the arcology out of generosity. They're building their own future infrastructure.

## Physical Architecture

Compute infrastructure is concentrated in the subterranean levels for several reasons:
- **Thermal mass**: underground locations provide stable ambient temperatures
- **Structural load**: racks are heavy; locating them at the base minimizes vertical load transfer
- **Security**: physical access control is simpler underground
- **Vibration isolation**: sensitive compute hardware benefits from separation from occupied floors

The 30 subterranean levels provide ~7.2 billion usable sqft. Even dedicating 10% of this to compute yields 720 million sqft — roughly 900 times the physical footprint needed. The surplus allows for generous aisle spacing, cooling infrastructure, maintenance access, and future expansion.

## Cooling Architecture

At 230 kW per rack, conventional air cooling is insufficient. Each rack dissipates enough heat to warm a small building. At 26,800 racks, the total thermal output is 6.175 GW — equivalent to a significant fraction of the arcology's entire power budget.

This waste heat is simultaneously the biggest engineering challenge and the biggest thermal resource. The district energy system (see waste heat cascade entries) integrates compute cooling with the arcology's heating and agricultural systems, turning a liability into an asset.

### Direct Liquid Cooling (DLC)

Direct-to-chip liquid cooling has become the industry standard for high-density AI racks as of 2025-2026 [tomshardware-cooling-2025]. Coolant is piped directly to GPU cold plates, achieving:

- **Heat removal capacity:** 200-250 kW per rack is routine with current CDU (Coolant Distribution Unit) technology
- **Coolant return temperatures:** 50-60°C, the highest among all data center waste heat sources [sciencedirect-waste-heat-2023]
- **Energy savings:** 10-21% reduction in total cooling energy vs air cooling
- **Reliability:** 8× improvement in component reliability due to lower junction temperatures

The arcology's design baseline assumes direct liquid cooling as the primary thermal management strategy. Each rack connects to building-scale coolant distribution infrastructure with supply temperatures around 35-40°C and return temperatures of 50-60°C.

### Immersion Cooling for Peak Density

For future hardware generations exceeding 230 kW per rack (e.g., Rubin Ultra NVL576 at 600 kW), immersion cooling provides headroom:

- **Capacity:** Supports 200-250+ kW per rack using single-phase mineral oil systems, scalable to 600+ kW with fluorocarbon-based two-phase systems [gminsights-immersion-2026]
- **Market trajectory:** The global immersion cooling market is projected to grow from $2.1B (2026) to $10.9B (2035) at 19.8% CAGR
- **Tradeoffs:** Higher capacity, but increased maintenance complexity for fluid changes and hardware access

The arcology's coolant infrastructure should be designed to accommodate a future transition from DLC to immersion for high-density pods, with compatible piping diameters and CDU capacity.

### Waste Heat Recovery Integration

The EU Energy Efficiency Directive (2024 recast) now requires data centers above 1 MW to implement waste heat recovery or demonstrate economic/technical infeasibility [eu-eed-2024]. The arcology, at 6,175× that threshold, treats waste heat recovery as a design constraint rather than an optional feature.

Key integration points with the district thermal network:

- **Temperature compatibility:** DLC return temperatures of 50-60°C require heat pump boosting to reach the 60-70°C supply temperatures typical of district heating networks. At scale, heat pump COP of 2.5-3.5 is achievable [sciencedirect-waste-heat-2023].
- **Precedent:** Meta's Odense data center was designed to recover and donate up to 100,000 MWh of waste energy annually to the city's district heating system [irena-waste-heat-2024].
- **Arcology scale:** At 6.175 GW continuous thermal output (assuming near-100% waste heat recovery), the arcology could supply approximately 54 TWh of low-grade heat annually — sufficient to heat millions of residential units if fully utilized.

The cooling architecture is one of the most consequential engineering decisions in the entire project. It affects energy efficiency, maintenance requirements, hardware longevity, and the viability of the waste heat cascade. The current design favors DLC with immersion-ready infrastructure and tight integration with the district thermal network.
