---
title: "Learn the domain before drawing the first wireframe"
summary: "Understand the people, decisions and exceptions in a workflow before a polished screen turns assumptions into apparent facts."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "Discovery"
  - "UX research"
draft: false
sources:
  - https://www.gov.uk/service-manual/user-research/user-research-in-discovery
  - https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
---

Before drawing a screen for an unfamiliar business, try explaining how the work gets done. Who needs something? What decision moves it forward? Who can make that decision? What happens when the usual route fails?

If those answers are unclear, a wireframe can make an assumption look settled too early. A neat approval screen is still the wrong solution if the team has misunderstood who is allowed to approve.

## Follow one piece of work

Choose a task with a clear beginning and end. Ask someone who does it to walk through a recent example, using material they are allowed to share. Watch where they pause, check another source, ask a colleague, or leave the main system.

GOV.UK's [discovery research guidance](https://www.gov.uk/service-manual/user-research/user-research-in-discovery) includes learning how people currently do the work and what gets in their way. It also asks teams to research the people providing support. That is a useful reminder to speak to the person answering calls as well as the person completing the form.

Keep three separate notes: what was observed, what the participant explained, and what still needs checking. This makes it easier to avoid turning one person's workaround into a business rule.

## What a repair booking can hide

Imagine designing software for a neighbourhood repair shop. The brief asks for a better booking form. A customer reports a washing machine fault, the receptionist records it, and a technician estimates the work.

Then the interesting questions appear. Can the receptionist promise a visit before checking spare parts? Who approves a higher price? Does the customer need another appointment if the first visit only diagnoses the fault?

A booking form could look excellent while promising an appointment the shop cannot fulfil. Following the whole repair reveals that parts availability and customer approval may matter as much as the date picker.

## Learn the words and the decisions

Build a short glossary as research progresses. For each term, include a plain explanation, a real example from authorised material, and who uses it. Check whether different teams use the same word differently.

Next, map the decisions. Write the information needed, the person responsible, and what changes after the decision. In the repair example, an estimate and a confirmed price may have different meanings. That distinction affects labels, notifications, and the data the frontend needs to display.

Ask about rules without assuming every rule is fixed. Some come from policy or technical limits. Others may be habits that grew around old software. The [GOV.UK discovery guidance](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) includes understanding these constraints and questioning a solution that has already been chosen.

![A workflow from user goal to current work, decisions and exceptions, and a testable screen, with open questions feeding back into research.](/images/blog/learn-the-domain-before-wireframes.svg)

*Keep unanswered questions in the map as the first screen takes shape.*

## Decide what must be known before design

Discovery can become an endless reading exercise. Use the first design decision to set a stopping point. Before designing appointment confirmation, for example, establish what counts as a valid appointment, who can promise it, and what happens if a required part is unavailable.

Bring a domain specialist, product owner, designer, and engineer together to review that small map. Mark disagreements instead of smoothing them away. Assign an owner to each unresolved question that could change the design.

Then sketch. Keep uncertain areas visibly provisional and test them with the people who do the work. More detail can be learned as the design develops.

## A checklist before the first wireframe

- Can the team explain the user's goal in everyday language?
- Has someone shown a recent task from start to finish?
- Are important terms understood across teams?
- Is each major decision tied to a responsible role?
- Are observed facts separated from assumptions?
- Have at least two realistic exceptions been explored?
- Does every design-changing unknown have an owner?

The first wireframe review can then focus on questions that matter: who can promise this appointment, what must be checked, and what the customer sees if plans change. The team has something more useful to discuss than the position of the booking button.
