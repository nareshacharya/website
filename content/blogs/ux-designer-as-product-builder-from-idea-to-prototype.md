---
title: "The UX designer as a product builder"
summary: "Use working prototypes to test real product decisions, surface missing states and bring design and engineering closer."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "Product design"
  - "Prototyping"
draft: false
sources:
  - https://www.gov.uk/service-manual/design/making-prototypes
  - https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html
---

A working prototype helps a UX designer see the consequences of a design choice. A button needs a result. A form needs validation. A slow request needs a state that makes sense to the person waiting.

Moving from an idea to something usable brings these questions forward. It also gives research, design, and engineering a more concrete subject to discuss.

Suppose you are designing a shared household shopping list. The first sketch looks simple: add an item, tick it off, and see what is left. Once the flow works, more questions appear. What happens when two people add milk? Can someone undo an accidental tick? What does the page show when the connection drops?

Those questions are part of the product.

## Choose the question before the tool

Start with one thing the team needs to learn. For the shopping list, it could be: “Can two people understand which items still need buying?”

That question sets the scope. A working list with add, complete, and undo may be enough. Account management, recipe suggestions, and a polished homepage can wait if they do not help answer it.

Write a short description of the user, task, and expected outcome. Add the important constraints. Is it mobile-first? Will people use it one-handed in a shop? Does it need to show who changed an item?

The brief should guide both manual work and any AI-assisted generation. A vague request to “build a beautiful shopping app” leaves too many product decisions hidden in the output.

## Build one complete path

Choose the simplest version that lets someone start, act, and understand the result. Use realistic example content, clearly marked as sample data. Include an empty state and at least one recoverable mistake.

GOV.UK's prototyping guidance explains that prototypes can range from sketches to working code. It recommends choosing the form that fits the question and notes that code can support realistic interactions in research. [GOV.UK guidance on making prototypes](https://www.gov.uk/service-manual/design/making-prototypes)

A static sketch may be enough to compare two navigation ideas. A working version is more useful when the question involves timing, input, or changing state. The point is to build only as much as the next decision needs.

## Review behavior while building

After each change, use the flow from the beginning. Try a long item name. Add the same item twice. Change the screen width. Interrupt a request. Check whether the interface explains what happened and preserves useful work.

Test keyboard use too. Can someone reach each control, activate it, and tell where focus is? W3C's keyboard guidance explains the requirement for functionality to work through a keyboard interface, with a limited exception for functions that depend on the path of movement. [W3C keyboard guidance](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

A successful mouse click is only one part of checking an interaction.

If AI generates the code, inspect the result with the same care. Read labels, confirm data behavior, and check that the implementation matches the intended rule. A convincing preview is a reason to test the idea, not evidence that every part is ready.

## Keep a record of what was learned

Ask a participant to use the list for a small task. Avoid explaining the interface while they work. Note the point where they hesitate, what they expect, and whether they recover.

Then separate the observations from possible explanations. “The participant tapped the item name three times” is an observation. “The completion control may be hard to notice” is a hypothesis to test in the next version.

Keep the rejected options and the reasons for changing direction. This record can make a portfolio case study much stronger than a sequence of final screens alone.

## Define the next handoff

Before a prototype becomes a live product, review security, privacy, accessibility, performance, and maintainability. GOV.UK explicitly warns against simply copying prototype code into production. [Prototype and production-code boundary](https://www.gov.uk/service-manual/design/making-prototypes)

Build a small complete experience, use it to learn, and make the next decision explicit. That is a useful way for a UX designer to contribute across the full product journey.
