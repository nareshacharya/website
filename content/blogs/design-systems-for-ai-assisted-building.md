---
title: "Give AI interface builders a design system they can use"
summary: "Make components, states, rules and checks explicit so AI-assisted interface work stays consistent and reviewable."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "Design systems"
  - "AI UX"
draft: false
sources:
  - https://storybook.js.org/docs/writing-stories
  - https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
---

“Use our design system” needs something concrete behind it. Which components should the builder import? What happens when a request is still loading? Which button should appear when the user cannot continue? A gallery of polished screens leaves those decisions open.

Treat the design system as a practical agreement between design and engineering. It should explain which component to use, how it behaves, what content it expects, and how to check that it works. This makes the system useful to people as well as to coding tools.

## Start with one complete task

Choose a familiar screen, such as an account form or order list. Identify the existing components it should use. Then write a short brief that names the task, approved components, required states, and acceptance checks.

Avoid asking the builder to invent a new visual language when the product already has one. Provide the actual component imports and supported properties. If the system lacks a needed pattern, make that gap explicit and have the responsible team decide how to handle it.

## A book card needs more than the available state

Imagine a library building a page where members reserve books. The design system contains a book card, availability label, primary button, and status message.

A screenshot may show the card only when a book is available. The working page also needs to handle a long title, an unavailable book, a reservation in progress, and a failed request.

Give the builder those states and the expected behaviour. The reserve button should not claim success before the service confirms it. If a request fails, the page should preserve enough context for the member to try a supported recovery step.

## Document behaviour alongside appearance

For each important component, include its purpose, allowed variants, required content, interaction rules, and examples of when it should not be used. Explain design tokens in plain language: they are named values for shared choices such as colour, spacing, and type size.

A status component also needs rules for its words and timing. “Saved” means something different from “Saving.” An AI builder should receive that distinction in the component's documentation and examples.

[Storybook stories](https://storybook.js.org/docs/writing-stories) capture a component's appearance and behaviour with particular inputs. Use them to show the book card while a reservation is loading, after it succeeds, and when it fails. The examples should agree with the written rules.

## Keep accessibility in the working component

Prefer tested components that already implement the required interaction. Then test the assembled page, because composition and content can introduce new problems.

W3C's [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/) explains that an ARIA role does not automatically add the keyboard behaviour expected for that role. Giving a visual element the role of a button still leaves its behaviour to implement and test.

For review, check that controls have clear names, focus moves sensibly, the page works without a mouse, and important status changes are available to assistive technology. Visual similarity alone cannot establish those behaviours.

![Components, tokens, behaviour examples, and tests inform an AI-assisted interface build, which then passes through human and automated review.](/images/blog/design-systems-for-ai-assisted-building.svg)

*Give the builder components, examples, and checks that point to the same expected behaviour.*

## Make the build review repeatable

Ask the builder to identify which existing components it used and flag new ones. Review whether repeated values use the system's tokens. Run the project's supported checks, then inspect the page with realistic content at the sizes people use.

Include uncomfortable examples: a name that wraps, no records, a slow request, a disabled action, and a failed save. These examples make missing decisions visible before a polished happy-path screen hides them.

Keep ownership clear. Someone needs to approve new patterns, maintain examples, and remove outdated guidance. Pin the component version or otherwise record which version a build used, so a later review can reproduce the result.

## Before giving the next screen to an AI builder

- Are real components and supported inputs available?
- Do examples cover realistic content and important states?
- Are interaction and accessibility requirements explicit?
- Are tokens and naming conventions explained?
- Does the brief say what requires a new design decision?
- Can the team run repeatable checks on the result?
- Is there an owner for changes to the system?

Start with the book reservation or another small, complete task. Note every decision the builder had to guess, then decide which belongs in the shared system. Repeat the same task after improving the documentation. That gives the team a concrete way to check whether the system is becoming easier to use.
