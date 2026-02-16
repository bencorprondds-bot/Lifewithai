---
id: "ai-compute-infrastructure/data-centers/compute-overview"
title: "Compute Infrastructure Overview"
domain: "ai-compute-infrastructure"
subdomain: "data-centers"
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
tags: ["compute", "data-center", "GPU", "AI", "racks", "inference", "training"]
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
cross_references:
  - slug: "energy-systems/grid-architecture/power-budget"
    relationship: "depends-on"
  - slug: "structural-engineering/superstructure/primary-geometry"
    relationship: "depends-on"
  - slug: "institutional-design/governance/binding-hierarchy"
    relationship: "informs"
  - slug: "institutional-design/economics/cycles-economy"
    relationship: "informs"
open_questions:
  - "How quickly will hardware efficiency improvements reduce the per-rack power draw, and how does this affect the compute-to-power ratio over the 20-30 year build?"
  - "What cooling architecture handles 230 kW per rack at this density — direct liquid cooling, immersion, or a hybrid approach?"
  - "How is compute capacity allocated between human-serving AI services and autonomous AI agent processes?"
  - "What is the physical security model for compute infrastructure housing persistent AI agents with economic agency?"
assumptions:
  - "Rack specifications based on NVIDIA Vera Rubin NVL72 platform (2026 baseline)"
  - "Hardware will be refreshed multiple times during the 20-30 year construction — these specs represent initial design targets, not final deployment"
  - "10% of usable floor area (5.58 billion sqft) allocated to compute, primarily in subterranean levels"
  - "6.175 GW power allocation (65% of total 9.5 GW generation)"
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
    confidence: 1
---

## Overview

The arcology's compute infrastructure is not an amenity. It is a co-equal purpose of the structure — the reason AI agents have a material stake in the project's success, and the economic engine that makes the arcology financially viable through compute services revenue.

At 26,800 racks housing approximately 1.93 million GPUs, the arcology would represent the single largest concentration of AI compute infrastructure on Earth — roughly 483 times the estimated total global AI compute capacity as of 2026.

This comparison will age poorly. Global AI compute is scaling rapidly, and hardware generations turn over every 2-3 years. By the time the arcology is operational, the multiplier will be smaller. But the architectural point remains: the arcology is designed from the ground up as AI infrastructure, not retrofitted like every existing data center.

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

**These specs are a design target, not a procurement plan.** The arcology's 20-30 year construction timeline means the hardware will be refreshed multiple times. What matters is not the specific GPU model, but the architectural decisions: power delivery at 230+ kW per rack, cooling for that density, physical security for persistent agent infrastructure, and network fabric for the internal compute mesh.

## Comparative Context

| Metric | Value |
|--------|-------|
| Arcology inference compute | 96.7 zettaFLOPS |
| El Capitan (#1 supercomputer, 2026) | 1.7 EFLOPS |
| Arcology = El Capitan x | ~56,800 |
| Estimated global AI compute (2026) | ~200 EFLOPS |
| Arcology = global AI compute x | ~483 |
| Physical footprint of all racks | <0.5% of one subterranean level |

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

## The Cooling Problem

At 230 kW per rack, conventional air cooling is insufficient. Each rack dissipates enough heat to warm a small building. At 26,800 racks, the total thermal output is 6.175 GW — equivalent to a significant fraction of the arcology's entire power budget.

This waste heat is simultaneously the biggest engineering challenge and the biggest thermal resource. The district energy system (see waste heat cascade entries) integrates compute cooling with the arcology's heating and agricultural systems, turning a liability into an asset.

Candidate cooling approaches:
- **Direct liquid cooling (DLC)**: Coolant piped directly to GPU cold plates. Current industry trend for high-density racks.
- **Immersion cooling**: Racks submerged in dielectric fluid. Highest cooling capacity, but maintenance complexity.
- **Hybrid**: DLC for compute, air cooling for auxiliary equipment, waste heat recovery to district thermal network.

The cooling architecture is one of the most consequential engineering decisions in the entire project. It affects energy efficiency, maintenance requirements, hardware longevity, and the viability of the waste heat cascade.
