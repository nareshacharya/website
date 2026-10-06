---
title: "Map and real estate UX that makes missing data visible"
summary: "Make map data coverage, empty results and loading failures distinct so property decisions do not rest on false certainty."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "Map UX"
  - "Real estate"
draft: false
sources:
  - https://www.usgs.gov/faqs/how-accurate-are-us-topo-maps-and-why-dont-they-have-accuracy-statement
  - https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
---

A map can look precise while leaving out something important. A pin sits at an exact point. A boundary has a clean edge. A number appears beside a property. Together, these details can make the screen feel more certain than the data behind it.

For a property search experience, the design task includes showing where that certainty ends.

Imagine comparing two areas before choosing where to rent. One area shows several public transport stops. The other shows none. It is easy to read the empty area as “There is no public transport here.” The product may simply have no transport data for that area.

That difference can change a real decision.

## Give empty states specific meanings

Before designing markers, agree on the possible data states with the team. At minimum, consider:

- A value is available
- A search returned no matching records
- The source does not cover this area
- The source could not be loaded
- A value is available but older than the product expects

These states need different messages and different next steps. “No homes match these filters” may invite someone to widen a price range. “Listings could not be loaded” should offer a retry. “Coverage unavailable” should explain the gap.

Combining them into one blank map hides information the person needs. Replacing a missing value with zero creates an even stronger false claim.

![Illustrative map legend showing a recorded value, no matching records, missing coverage, and a load failure as different states.](/images/blog/map-data-states.svg)

## Attach trust information to the right layer

A map often combines several sources. The base map may be recent while a boundary or property record is older. One broad “Updated today” label can hide that difference.

The US Geological Survey explains that US Topo accuracy depends on its different source datasets, with accuracy details available for individual sources. Its guidance is about US Topo, but it illustrates why a single quality label can be too broad for a layered map. [USGS guidance on map accuracy](https://www.usgs.gov/faqs/how-accurate-are-us-topo-maps-and-why-dont-they-have-accuracy-statement)

A useful property detail panel could name the source and the date for each important fact. It should also distinguish the date a record was checked from the date the underlying information was collected.

Where the source has a known limit, explain its consequence. “Approximate location” is useful near a pin. A long disclaimer in the footer is less useful when the user is judging walking distance.

## Use a visible language for uncertainty

A missing-data area could use a light pattern with a plain label. A failed layer could show a message beside its toggle. A property with an approximate location could have a clear badge.

Color can support these differences, but the meaning needs another cue. W3C's guidance on use of color explains why information should also be available through text, patterns, or other visual signals. [W3C use-of-color guidance](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

In the transport example, a patterned area labelled “Transport data unavailable” gives the user a reason to look elsewhere for confirmation. It does not pretend to know whether stops exist.

A companion list also matters. People should be able to inspect the same properties and important limits without having to interpret the map alone.

## Let people question a result

Provide a route to the underlying record where it is available. Let someone report a possible error with the relevant property already attached. Explain whether the product can correct its own record or needs an update from another source.

For testing, ask a participant what an empty area means. Ask which property details they would verify before a visit. Then deliberately turn a layer off or simulate a failed load. Watch whether they notice the change in evidence.

Treat missing data as part of the interface. Trust grows when people can understand the source, the gap, and the next sensible check.
