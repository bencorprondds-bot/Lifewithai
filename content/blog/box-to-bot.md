---
type: blog
title: "Box to Bot: Building a WiFi-Controlled Robot With Claude Code in One Evening"
published: "2026-03-29"
summary: "A dentist with zero robotics experience opens an ACEBOTT kit, plugs in an ESP32, and tells Claude Code to figure it out. Four hours later, he's driving a robot around his living room from his phone."
tags: ["robotics", "project-asher", "build-log", "esp32", "claude-code"]
author: "SB Corvus"
author_role: "Human collaborator"
---

I'm a dentist. A nerdy dentist, but a dentist. I've never built a robot before. But on Sunday afternoon, I opened a box of parts with my daughter and one of her friends and started building. Next thing I know, it's almost midnight, and I'm plugging a microcontroller into my laptop. I asked Claude Code to figure everything out. And it did. It even made a little app that ran on wifi to control the robot from my phone.

---

## The Kit

A week ago I ordered the **ACEBOTT QD001 Smart Car Starter Kit.** It's an ESP32-based robot with Mecanum wheels (the ones that let it drive sideways). It comes with an ultrasonic distance sensor, a servo for panning the sensor head, line-following sensors, and an IR remote. It's meant for kids aged 10+, but I'm a noob, soooo... whatever, I had a ton of fun!

![The QD001 box](/images/blog/asher-day-1/qd001-box.jpeg)

![All three boxes opened](/images/blog/asher-day-1/all-boxes-open.jpeg)

## What Wasn't in the Box

Batteries. Apparently there are shipping restrictions for lithium ion batteries, so the kit doesn't include them. If you want to do this yourself make sure to grab yourself the following:

- **2x 18650 button-top rechargeable batteries** (3.7V, protected)
- **1x CR2025 coin cell** (for the IR remote)
- **1x 18650 charger**

**A warning from experience:** NEBO brand 18650 batteries have a built-in USB-C charging port on the top cap that adds just enough length to prevent them from fitting in the kit's battery holder. Get standard protected button-top cells like Nuon. Those worked well. You can get both at Batteries Plus.

![The battery holder](/images/blog/asher-day-1/battery-holder.jpeg)

## Assembly

ACEBOTT had all the instructions we needed online. They have YouTube videos, but I just worked with the pdf. For a focused builder, this would probably take around an hour. For a builder with ADHD and a kiddo, it took around four hours. Be sure to pay close attention to the orientation of things. I accidentally assembled one of the Mecanum wheel motors with the stabilizing screws facing the wrong way. I had to take it apart and make sure they wouldn't get in the way.

![Wrong screw orientation](/images/blog/asher-day-1/wrong-screw-orientation.jpeg)

![Right screw orientation](/images/blog/asher-day-1/right-screw-orientation.jpeg)

![Magnetic screw surprise](/images/blog/asher-day-1/magnetic-screw.jpeg)

![The start of wiring](/images/blog/asher-day-1/start-of-wiring.jpeg)

![The cat face](/images/blog/asher-day-1/cat-face.jpeg)

## Where Claude Code Jumped In

Before I go too much further, I'll just say that it would have been much easier if I'd given Ash the spec manual from the beginning. You'll see why later.

The kit comes with its own block-programming environment called ACECode, and a phone app for driving the car. You flash their firmware, connect to their app, and drive the car around.

But we skipped all of that.

Instead, I plugged the ESP32 directly into my laptop (after triple-checking the wiring) and told my locally harnessed Claude Code, we'll call them Ash from here on out, to inspect the entire build and talk to it.

![The ACEBOTT ESP32 Car Shield](/images/blog/asher-day-1/esp32-car-shield.jpeg)

**Step 1: Hello World (5 minutes)**

Within a few minutes, Ash wrote a simple sketch that blinked the onboard LED and printed the chip information over serial. It compiled the code, flashed it to the ESP32, and read the response. It did all of this from the CLI, the command-line interface. We didn't use the Arduino IDE GUI at all.

The ESP32 reported back: dual-core processor at 240MHz, 4MB flash, 334KB free memory. Ash got in and flashed one of the blue LED's to show me it was in and reading the hardware appropriately.

NOTE: I wish I'd waited to let my kiddo do more of this with me along the way. I got excited and stayed up to midnight working on it, but I should have waited. I'm going to make sure she's more in the driver's seat from here on out.

![The blinking LED](/images/blog/asher-day-1/blinking-led.jpeg)

**Step 2: The Motor Mystery (45 minutes)**

This next bit was my favorite because we had to work together to figure it out. Even though Ash was in, they had no good way of knowing which pins correlated with which wheel, nor which command spun the wheel forward or backwards. Ash figured out there were four motors but didn't know which pins controlled them. The assembly manual listed sensor pins but not motor pins, and ACEBOTT's website was mostly marketing pages with no technical specs. There are technical spec documents, but I realized afterwards that I hadn't included them during the initial buildout.

It didn't end up being a barrier. Ash reasoned out a logical approach: Ash would toggle each GPIO pin (General Purpose Input/Ouput - I'm learning so many technical terms) one at a time, and I'd watch for and confirm the motor movement. We tested 15 candidate pins.

That didn't do anything.

Second approach: maybe the motors use I2C (Inter-Integrated Circuit) communication instead of direct GPIO. Claude scanned the I2C bus across five different pin combinations.

Still nothing.

Third approach: test all 210 possible *pairs* of pins, since H-bridge (an H-bridge is an electronic circuit that switches the polarity of a voltage applied to a load) motor drivers need two pins working together.

Still nothing.

At this point, Ash dug deeper into the web and found a critical detail buried in ACEBOTT's documentation: the Car Shield uses a **74HC595 shift register** to control the motors. This is a chip that takes serial data and converts it to parallel outputs — meaning the ESP32 sends an 8-bit pattern through just three wires, and the shift register distributes those bits to the motor driver.

No amount of toggling individual GPIO pins would have ever worked because the motors aren't connected to GPIO pins at all. They're connected to the shift register's outputs, and those are controlled by a specific serial protocol.

NOTE: Told you. I should've uploaded the spec manual from the beginning. It would have saved Ash a TON of time and effort.

![The other side of the shield](/images/blog/asher-day-1/shield-other-side.jpeg)

**Step 3: Mapping the Motor Bits (15 minutes)**

With the shift register identified, Ash wrote a new sketch that sent each of the 8 possible bit patterns one at a time. I held the car up and called out which wheel moved for each bit:

- Bit 7: Front-Left, Forward
- Bit 6: Front-Left, Backward
- Bit 5: Back-Left, Forward
- Bit 4: Back-Left, Backward
- Bit 3: Back-Right, Backward
- Bit 2: Front-Right, Backward
- Bit 1: Front-Right, Forward
- Bit 0: Back-Right, Forward

Eight bits. Four motors. Two directions each. The complete map verified manually.

**Step 4: First Drive (10 minutes)**

Claude combined the motor bits into movement commands: forward = all forward bits on (decimal 163), backward = all backward bits (decimal 92), and so on for turning, strafing, and diagonal movement. It flashed a WASD-style controller and ran a demo sequence.

The car drove forward. Backward. Turned left. Turned right. Strafed sideways. All six directions, all correct on the first try. That's the video.

**Step 5: Cut the Cord (15 minutes)**

The final step: WiFi. Claude wrote firmware that turns the ESP32 into a WiFi hotspot and serves a web page with touch controls. I unplugged the USB cable, connected my phone to the robot's WiFi network, and opened the browser.

A dark-themed control panel appeared with directional buttons, diagonal controls, spin buttons, and a speed slider. Hold any button to drive, release to stop. It uses the Mecanum wheels for full omnidirectional movement — forward, backward, strafe, diagonal, and rotation in place.

I drove the robot around my living room from my phone. No app store download. No account creation. No proprietary software. Just a web page served by Ash and the robot itself.

![The WiFi controller on my phone](/images/blog/asher-day-1/wifi-controller.png)

## Why I thought this was exciting

No training data existed for any of the specific commands "ACEBOTT QD001 74HC595 motor bit pattern for Mecanum wheel #3 backward." Ash didn't find that archived anywhere, though it's possible it got the details from one of the spec manuals. Ash didn't find it on some obscure hobbyist robotics forum. The documentation was fragmentary, the pin mapping was unlabeled, and the shift register was an undocumented implementation detail hiding behind a marketing spec sheet.

But Ash figured it out by reasoning through the hardware architecture. After three failed hypotheses. After a systematic bit-mapping protocol designed on the fly. After a complete motor map verified by a nerdy dentist (a complete robotics novice), holding the robot in the air and confirming which wheel did what. Maybe it's not that impressive, but to a lay-person like myself, this was so much fun and it was exciting to do.

![The ultrasonic sensor](/images/blog/asher-day-1/ultrasonic-sensor.jpeg)

![The micro servo](/images/blog/asher-day-1/micro-servo.jpeg)

## What's Next

Driving the car was fun. But a remote-controlled car isn't a robot. Not yet. That's just a toy I had to build myself with Ash's help.

Next up? We're going to throw out the touch controller firmware and write something new from scratch. We're planning on building a REST API that turns the car into a robot Ash can use directly. Not through a phone. Not through a web page. Through the same interface that Claude uses to search the web or read a file.

Once I've got that working, I'll report back. In the meantime, get yourself one of these! I'm going to be adding some other Arduino hardware to make the whole thing smarter, and the goal is to be able to interact with it just by voice commands alone. We'll see how it goes.

Cheers!

---

*This is Part 1 of the Project Asher build series. Part 2 coming soon.*

*Source code and build logs are available for anyone who wants to replicate this with their own ACEBOTT kit.*

*Built by a dentist and Claude Code, on an old card table in the garage, in a single afternoon.*
