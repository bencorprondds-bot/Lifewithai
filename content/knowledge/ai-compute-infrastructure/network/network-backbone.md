---
id: "ai-compute-infrastructure/network/network-backbone"
title: "Network Backbone Architecture"
domain: "ai-compute-infrastructure"
subdomain: "network"
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
tags: ["network", "fiber", "wireless", "SDN", "Wi-Fi", "5G", "infrastructure", "backbone", "connectivity"]
summary: "The arcology's network infrastructure serves 10 million residents with a fiber backbone exceeding 50,000 miles of internal cabling, 50,000-100,000 wireless access points, and AI-driven network management at a scale 100-1,000x beyond any current deployment. The core challenge is not any single technology gap but integration complexity at city scale within a single vertical structure."
citations:
  - id: "mckeown-sdn-2025"
    type: "industry"
    title: "Nick McKeown Named 2025 Marconi Fellow for SDN"
    source: "Marconi Society"
    year: 2025
  - id: "marvell-teralynx-2025"
    type: "industry"
    title: "Marvell Teralynx 51.2T Switch Production Announcement"
    source: "Marvell"
    year: 2025
  - id: "broadcom-tomahawk6-2025"
    type: "industry"
    title: "Tomahawk 6: First 100-Terabit Switch Chip"
    source: "Gazettabyte"
    year: 2025
  - id: "corning-fiber-backbone"
    type: "industry"
    title: "Types of Fiber Optic Backbone Networks"
    source: "Corning"
    year: 2024
  - id: "ruckus-wifi7-2025"
    type: "industry"
    title: "Wi-Fi 7 for Packed Stadiums"
    source: "RUCKUS Networks"
    year: 2025
  - id: "meta-backbone-2025"
    type: "project-data"
    title: "10X Backbone: How Meta is Scaling Backbone Connectivity for AI"
    source: "Meta Engineering"
    year: 2025
cross_references:
  - slug: "ai-compute-infrastructure/data-centers/compute-overview"
    relationship: "depends-on"
  - slug: "mechanical-electrical/electrical/electrical-distribution"
    relationship: "depends-on"
  - slug: "ai-compute-infrastructure/edge-iot/edge-sensor-mesh"
    relationship: "informs"
  - slug: "mechanical-electrical/fire-life-safety/fire-life-safety"
    relationship: "informs"
open_questions:
  - "Should the control plane be fully centralized (SDN) or distributed with SDN overlay, given that a single controller managing millions of network elements raises scalability and single-point-of-failure concerns?"
  - "What is the optimal wireless technology mix for dense, vertical environments: Wi-Fi 7, private 5G/CBRS, Li-Fi, or all three in different proportions by zone?"
  - "Who governs wireless spectrum allocation inside the arcology - a single building operator coordinating all deployments, or tenants deploying independently as in conventional apartment buildings?"
  - "What is the network power consumption budget, and how does it integrate with the overall energy systems allocation?"
assumptions:
  - "Population of 10 million residents generating 30-50 million simultaneous wireless device connections"
  - "5,000-foot (1,524m) vertical structure requiring intermediate fiber support points every 100-200 feet"
  - "3-4 million residential units each requiring fiber drops, plus commercial/institutional spaces"
  - "Hardware technologies will advance significantly over the 20-30 year construction timeline"
parameters:
  - name: "building_height_ft"
    value: 5000
    unit: "feet"
    confidence: 3
  - name: "population"
    value: 10000000
    unit: "residents"
    confidence: 3
  - name: "simultaneous_wireless_devices"
    value: 40000000
    unit: "devices (estimated 30-50M range)"
    confidence: 1
  - name: "fiber_terminations"
    value: 7500000
    unit: "terminations (estimated 5-10M range)"
    confidence: 1
  - name: "internal_fiber_miles"
    value: 50000
    unit: "miles (estimated 50,000+)"
    confidence: 1
  - name: "wireless_access_points"
    value: 75000
    unit: "APs (estimated 50,000-100,000+)"
    confidence: 1
  - name: "current_switch_throughput_tbps"
    value: 51.2
    unit: "Tbps (Marvell Teralynx)"
    confidence: 3
  - name: "target_switch_throughput_tbps"
    value: 100
    unit: "Tbps (Broadcom Tomahawk 6)"
    confidence: 2
  - name: "fiber_backbone_speed_gbps"
    value: 800
    unit: "Gbps per wavelength (deployed)"
    confidence: 3
  - name: "single_mode_fiber_max_ft"
    value: 8200
    unit: "feet between crossconnects"
    confidence: 3
  - name: "vertical_riser_support_interval_ft"
    value: 150
    unit: "feet (typical 100-200 ft range)"
    confidence: 2
  - name: "vertical_latency_us"
    value: 7.6
    unit: "microseconds (one-way, 5000 ft)"
    confidence: 3
  - name: "switching_latency_per_hop_us"
    value: 2.75
    unit: "microseconds (0.5-5 us range)"
    confidence: 2
  - name: "ai_management_scale_gap"
    value: 500
    unit: "x (current platforms manage ~10,000-50,000 endpoints; arcology needs 5-10M)"
    confidence: 1
---

## The Integration Problem

A 5,000-foot vertical structure housing 10 million people requires a communications backbone unlike anything that exists. The individual components are available: 800 Gbps fiber runs are routine, 51.2 Tbps switches are in volume production, Wi-Fi 7 supports tens of thousands of concurrent users in stadiums, and private 5G on CBRS serves hundreds of thousands of radios across logistics hubs and factories. No fundamental technology gaps block the path.

The challenge is integration. The arcology is not a single network. It is thousands of overlapping networks: residential ISP service for millions, commercial office networks, industrial control networks, building management systems for HVAC and elevators and fire safety, emergency services communications, public Wi-Fi, and data center interconnects supporting the compute infrastructure that is co-equal to the arcology's purpose. Each requires isolation, different quality-of-service policies, and different security postures. Current software-defined networking and network slicing can handle multi-tenancy, but not at this scale with this diversity.

## Wired Backbone: Fiber to Everything

The primary medium is single-mode OS2 fiber. Single-mode fiber supports distances up to 8,200 feet between crossconnects - comfortably exceeding the arcology's 5,000-foot height. Distance is not the constraint.

Weight is. All fiber optic cables have a maximum vertical rise determined by cable weight and tensile strength. Exceeding this limit causes fiber breakage, excess attenuation, or fiber sliding in loose-tube cables. At 5,000 feet, the arcology exceeds the typical maximum vertical rise for most cable types. The solution is intermediate support points at each sky lobby or mechanical floor (every 100-200 feet), using tight-buffer riser cables rated for vertical installation and cascading multiple riser segments rather than continuous pulls.

The scale of the cable plant is staggering. If each of 3-4 million residential units requires a fiber drop, plus commercial and institutional spaces, plus IoT and sensor networks, the arcology could require 5-10 million individual fiber terminations and potentially 50,000+ miles of internal fiber. This is comparable to a small country's national fiber buildout, compressed into a single structure. Installation, testing, and maintenance of this plant requires automated planning tools and robotic installation systems.

Backbone switching has reached extraordinary throughput. The Marvell Teralynx at 51.2 Tbps is in volume production. The Broadcom Tomahawk 6 - the first single-chip 100-terabit switch - has been announced. Standards for 1.6 Tbps Ethernet are targeting completion by July 2026, and major hyperscalers are already preparing for 3.2 Tbps speeds. The arcology's core switches will likely leverage technology several generations beyond what is available today by the time they are installed.

## Wireless: Density Beyond Any Precedent

An arcology housing 10 million people could generate 30-50 million simultaneous wireless device connections. For context, the largest stadium Wi-Fi deployments handle approximately 80,000 users. The arcology represents 375-625 stadiums stacked vertically and jammed into a single RF environment.

The problems multiply at this scale. Spectrum exhaustion is real - even with 6 GHz (Wi-Fi 6E/7), channels will be saturated in dense residential areas. Millions of access points in close proximity create co-channel interference that degrades performance for everyone. Users moving vertically in elevators and horizontally through the structure need seamless handoff across thousands of access points. And Wi-Fi 7, private 5G/CBRS, carrier cellular via distributed antenna systems, and emerging Li-Fi technology must coexist and hand off between each other.

Each wireless technology has its domain:

**Wi-Fi 7 (802.11be)** offers the highest raw throughput with 320 MHz channels, 4K QAM modulation, and Multi-Link Operation. Stadium deployments prove the technology at high concurrency, but those are wide-open spaces with carefully engineered RF, not apartment buildings with walls and floors and interfering neighbor networks.

**Private 5G on CBRS** (3.5 GHz shared spectrum) provides better mobility and quality-of-service than Wi-Fi but at higher cost per access point. Network slicing enables different QoS policies for different applications on the same physical infrastructure. Over 420,000 CBRS radios are deployed across the US, demonstrating that private cellular networks reliably serve dense indoor environments - but the largest single-site deployments cover thousands of users, not millions.

**Distributed Antenna Systems** capture cellular signals from external carriers and distribute them over fiber to antenna points throughout large buildings. Critical for 5G coverage in structures where high-band frequencies cannot penetrate internal walls and floors. The arcology requires DAS for carrier cellular coverage, in addition to its own private 5G.

**Li-Fi** uses LED lighting modulation to transmit data wirelessly at multi-Gbps speeds. Each room requires its own transmitter (light can't penetrate walls), which is a constraint but also provides inherent room-level security and zero RF interference. Li-Fi could serve as the highest-bandwidth option for fixed locations - workstations, data-intensive equipment, high-security areas.

The architecture likely requires all four technologies in different proportions depending on the zone, with an interworking layer that enables seamless handoff between them. This interworking architecture is an open problem that no existing deployment has solved at this density.

## Network Management at Scale

No human team can manually manage a network with millions of endpoints across a 5,000-foot vertical structure. The gap between current AI-driven network management capabilities and arcology requirements is one to two orders of magnitude.

Cisco DNA Center and Juniper Mist AI represent the current state of the art. Juniper's "Marvis Minis" create digital twins that continuously simulate user experiences to predict problems before they occur. These platforms handle anomaly detection, predictive analytics, and automated remediation. But they manage thousands of endpoints, not millions.

Software-defined networking separates the control plane from the data plane, enabling centralized, programmable network management. SDN enables dynamic bandwidth allocation, tenant isolation, and automated policy enforcement - all essential for arcology-scale network management. But a single controller managing millions of network elements raises concerns about controller scalability and single-point-of-failure. The debate between fully centralized SDN (clean abstraction, easier policy management) and distributed control with SDN overlay (more resilient, harder to manage) is unresolved at this scale.

The network will likely require a federated management architecture: semi-autonomous zones that operate independently but coordinate at the boundaries, with AI-driven operations that learn and adapt to the building's traffic patterns over time.

## Fault Tolerance: When Failure Is Not an Option

When 10 million people depend on a single structure's network, failure modes that are acceptable in a building - reboot the switch, wait for the technician - become unacceptable.

The network must survive the loss of any single node, link, or riser without service degradation. Self-healing mesh networks and redundant fiber paths are proven technologies. Detection and rerouting around failures in milliseconds is achievable with current mesh protocols. Zero-downtime upgrades and maintenance windows without service interruption are standard practice in large data centers.

The key design requirement is ensuring that no single failure - fire, flood, mechanical damage - can take out more than one zone of the network. This means physical diversity of fiber routes (not just logical redundancy), hardened emergency communications paths independent of the general-purpose network, and fire-survival cables that maintain connectivity during and after fire events.

The Shanghai Tower's zone-based mechanical architecture offers a model: nine cylindrical building zones stacked vertically, each functioning semi-independently with its own mechanical systems. Each zone could operate as a semi-autonomous network domain, with inter-zone routing providing redundancy without tight coupling.

## Latency: Mostly Fine, Occasionally Matters

At the speed of light in fiber (~200,000 km/s), a 5,000-foot vertical run adds approximately 7.6 microseconds of one-way latency. This is negligible for almost all applications.

The larger latency concern is switch hops. Each intermediate switch adds 500ns to 5 microseconds depending on the platform. A hierarchical design with 5-8 switch hops between any two endpoints adds 2.5-40 microseconds of switching latency. For most human-facing applications, this is invisible. For time-sensitive industrial control systems or high-frequency trading operations (if any exist within the arcology), it could matter.

The architecture decision between traditional three-tier campus networks (core/distribution/access), modern spine-leaf architectures borrowed from data centers, and zone-based architectures with inter-zone routing affects the typical hop count between endpoints. This is an engineering tradeoff between simplicity, resilience, and latency that must be resolved during detailed design.

## Cross-Domain Dependencies

The network touches everything:

**Compute infrastructure** drives the backbone's capacity requirements. High-bandwidth east-west traffic between data center racks flows over the same physical fiber plant that serves residential internet. The network backbone and internal data center interconnects are co-designed.

**Electrical distribution** must deliver reliable power at thousands of locations where network equipment - switches, access points, DAS nodes - is installed. UPS and emergency power must be co-designed with network topology to ensure that power failures don't cascade into network failures.

**Elevator shafts** are primary vertical riser pathways for fiber. Moving elevators require continuous wireless connectivity despite being Faraday cages hurtling through the RF environment. Elevator dispatch systems depend on network connectivity.

**Fire and life safety** systems require dedicated, hardened network paths independent of the general-purpose network. Fire-survival cables and redundant routing are mandatory. The fire alarm and emergency communication systems cannot fail when the building is burning.

**HVAC and atmospheric systems** rely on network-connected sensors and controls. Network equipment rooms generate significant heat requiring dedicated cooling. Cable pathway design must account for fire compartmentalization.

**Edge and IoT** systems connect millions of sensors and actuators through the network infrastructure. IoT traffic patterns - many small devices, low bandwidth each, high aggregate - differ from human-generated traffic and require different QoS treatment.

## Where Current Technology Falls Short

Three gaps stand out:

**AI-driven network management at scale.** Current platforms manage tens of thousands of endpoints. The arcology needs 5-10 million. This is a 100-1,000x gap that requires either breakthrough advances in centralized management or novel federated architectures that divide the problem into manageable pieces.

**Wireless integration at density.** Wi-Fi 7, private 5G, DAS, and Li-Fi are individually mature. Making them work together as a seamless, city-scale wireless fabric with billions of handoffs per day requires innovation in spectrum coordination, handoff protocols, and AI-driven interference management that doesn't exist today.

**Building-scale network design literature.** Nobody has published on "building-scale networking for populations above 100,000" because nobody has built anything like this. The arcology will need to develop its own engineering playbook, drawing on precedents from stadium Wi-Fi, hyperscale data centers, and supertall buildings like Burj Khalifa - but synthesizing them in ways that haven't been attempted.

These gaps are not physics barriers. They are engineering challenges that can be addressed over the 10-15 year construction timeline, during which the underlying technologies will continue to advance. By the time the first residential zones come online, 6G standards will be maturing, terabit switching will be commonplace, and AI-native networking will be standard practice.

## The Hardest Question

The deepest unresolved issue is governance, not technology.

Who manages the wireless spectrum inside the arcology? A single entity - the building operator - could coordinate all wireless deployments to minimize interference, ensure quality of service, and prevent the chaos seen in conventional apartment buildings where dozens of Wi-Fi networks compete for the same channels. This is more efficient but centralizes control.

Alternatively, tenants could deploy their own wireless networks, accepting interference as the price of independence. The CBRS model - shared spectrum with an automated Spectrum Access System - offers a middle path where a central coordinator dynamically allocates spectrum to competing users. But CBRS has not been tested at this density, and the question of who operates the coordinator (and what rules they enforce) remains.

This is a microcosm of the arcology's broader governance challenge: how much centralized control is necessary for the infrastructure to function, and how much autonomy should zones and individuals retain even if it reduces aggregate efficiency? The network is where this tension becomes measurable in dropped packets and degraded throughput.
