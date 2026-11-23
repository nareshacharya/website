---
title: "Design for the phone people keep"
summary: "Entry-level phones are getting harder to buy in India, and AI is finally reaching the low-memory ones people already own. What that means for product teams."
author: Naresh Pentapati
date: 2026-11-23
topics:
  - "Product design"
  - "UX"
  - "AI"
  - "India"
  - "Mobile"
draft: false
sources:
  - https://blog.google/innovation-and-ai/products/gemini-app/gemini-lower-memory-devices/
  - https://support.google.com/gemini/answer/17079170?hl=en
  - https://www.forbesindia.com/article/business/tech/indias-sub-rs-10000-smartphone-segment-collapses-amid-rising-chip-prices/2999688/1
  - https://www.fonearena.com/blog/497163/india-smartphone-shipments-q3-2026-idc.html
  - https://www.business-standard.com/industry/news/dialling-a-slowdown-entry-level-phone-slump-takes-shine-off-festive-sales-126103001885_1.html
  - https://developer.android.com/guide/topics/androidgo
---

Think of a young woman who runs the billing counter at a family pharmacy. Her phone is three years old. It holds the shop's supplier chats, her college notes, two payment apps and a few thousand photos. Every few weeks a popup tells her storage is almost full, and every few weeks she deletes something she would rather keep.

This Diwali she meant to upgrade. She walked into the mobile shop down the road, looked at the price of the model she had in mind, and walked out with a new screen guard instead. The old phone will have to last another year, maybe two.

She is not an edge case. Shop owners and analysts describe many buyers making the same choice this year, and that has real consequences for anyone who builds digital products.

![Design for the phone people keep](/images/blog/design-for-the-phone-people-keep.png)

## The cheapest phones are leaving the shelf

Memory chips are the main reason. Demand from AI and data centres has pushed up the price of DRAM and storage, and phone makers are paying for it. Citing Counterpoint, [Forbes India reported](https://www.forbesindia.com/article/business/tech/indias-sub-rs-10000-smartphone-segment-collapses-amid-rising-chip-prices/2999688/1) that chips, which used to be about 10% of the cost of making a phone, now account for 53% of the cost of a ₹10,000 model. The sub-₹10,000 segment fell from 18% of the market in Q3 2025 to 4% in Q2 2026.

IDC's latest numbers point the same way. India shipped 36.8 million smartphones in Q3 2026, [down 23.3% year on year](https://www.fonearena.com/blog/497163/india-smartphone-shipments-q3-2026-idc.html), its weakest festive quarter in a decade. Phones under US$100 dropped from 16.2% of shipments to 1.9%, and IDC said that segment has effectively left the market. [Business Standard](https://www.business-standard.com/industry/news/dialling-a-slowdown-entry-level-phone-slump-takes-shine-off-festive-sales-126103001885_1.html), also citing Counterpoint, put the sub-₹15,000 share at 41% a year ago and 18% now, with buyers postponing purchases or choosing refurbished phones.

![Entry-level share of India smartphone shipments, Q3 2025 vs Q3 2026](/images/blog/entry-level-share-chart.png)

The headline reading is that Indians are "moving up" to mid-range and premium phones, and some are. Counterpoint's Tarun Pathak told Forbes India that consumers are willing to stretch for devices that last longer. But the quieter reading matters more for product teams. Many people are simply not buying. They are keeping what they have.

## AI is meeting those phones halfway

In the same week, Google shipped something that fits this moment well. On 18 November it [brought the Gemini app to Android (Go edition) devices](https://blog.google/innovation-and-ai/products/gemini-app/gemini-lower-memory-devices/), the lower-memory phones that until now had only basic voice commands. Google said it re-architected the app so the core experience runs on hardware with less memory. The [help page](https://support.google.com/gemini/answer/17079170?hl=en) says it needs 2GB of RAM or more.

The choices in that launch are worth studying. The examples Google highlights are about talking rather than typing: Gemini Live in more than 45 languages, pointing the camera at notes or forms to translate them, and making a flyer for a weekend bakery sale. It also left a few things out. The help page notes that "Hey Google" and "Ask about this screen" are not supported on Go devices.

I read that as a fair, honest trade. A smaller feature set that works smoothly is better than a full feature set that stutters, and saying clearly what is missing builds more trust than hiding it. It is also a reminder that the newest AI features no longer have to start at the top of the market and trickle down over years.

## Two ways to build

Across 20+ years in UX and product, I have seen most roadmaps follow one pattern. The team designs on the latest phone, tests on fast office Wi-Fi, and plans a "lite" version for later. Later rarely arrives on time. The comparison below is how I think about the two approaches. Both have a place.

![Flagship-first compared with building for the phone people keep](/images/blog/flagship-first-vs-phone-people-keep.png)

Flagship-first has real strengths. It is quick to build, it shows off what the technology can do, and early adopters notice it. Its weakness is that it quietly assumes free storage, steady data and a recent operating system, and those assumptions are getting less true for a large group of users this year.

Building for the phone people keep is slower at the start. Some features have to be cut or moved to the cloud, and the demo looks less impressive. The payoff is reach and loyalty. An app that installs small, works on patchy data and does not drain the battery earns a place on a phone where every megabyte is being negotiated.

## What I would ask a product team this quarter

None of this needs a new framework. Google's own [Android (Go edition) guidance](https://developer.android.com/guide/topics/androidgo) has covered the basics for years. What has changed is the urgency. These are the questions I would bring to a roadmap review:

1. **What is the oldest phone in our real user base, and does anyone on the team carry one?** Dashboards average things out. A test phone in a designer's bag does not.
2. **What happens when storage is full?** Many apps fail silently here. Show a clear message and let people keep working.
3. **Can the key task finish on a weak connection?** Save progress, queue the action, and tell the user plainly that it will go through.
4. **Is voice or the camera a better entry point than typing?** For many users, speaking in their own language is the fastest interface they have.
5. **What do we leave out, and do we say so?** A clear "not available on this phone" note is kinder than a feature that half works.

## The leadership angle

The easiest thing for a design or product leader to do is approve what looks good in the review room. The review room usually has the best phones in the building. I have learned to ask for at least one walkthrough on a modest, well-used device before anything ships, and the conversation changes every time.

There is a resilience point here too. A country's digital growth depends on products that keep working when household budgets tighten and upgrade cycles stretch. Payments, learning, healthcare and small-business tools that respect older hardware keep people included in tough years, not just good ones.

The woman at the pharmacy counter will probably not read a product roadmap. But she will notice, within a minute, whether an app was built with her phone in mind.

What is the oldest phone your team tests on before a release?
