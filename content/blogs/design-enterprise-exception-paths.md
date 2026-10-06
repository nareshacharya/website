---
title: "Design the paths people take when enterprise work gets stuck"
summary: "Plan for missing information, permissions, partial results and failures so enterprise workflows offer a safe next step."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "Enterprise UX"
  - "Interaction design"
draft: false
sources:
  - https://design-system.service.gov.uk/patterns/validation/
  - https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/
  - https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/
---

Review an enterprise workflow at the point where it stops working. Can the person understand what happened, see what was saved, and take a safe next step?

That review reveals details a successful demo can miss. A request may need information from another team. An approver may be unavailable. A batch may finish only some items. These situations deserve explicit design decisions because each changes what the person can do next.

## Start by naming the kind of problem

An exception is a situation that leaves the usual route. Different exceptions need different responses.

Missing information might need a field correction. A permission limit might need another authorised person. A service outage might need a saved draft and a later retry. An uncertain result might need a status check before anyone tries again.

The GOV.UK Design System makes this distinction in its [validation pattern](https://design-system.service.gov.uk/patterns/validation/): checking submitted information is different from deciding whether someone has permission to proceed. The explanation and next step need to fit the problem.

Use this distinction in the workflow review. A red border cannot help someone whose account lacks the right access.

## When two orders are ready and the third is stuck

Imagine an office administrator ordering replacement chairs for three locations. Two locations have approved delivery details. The third has an old address, and its manager is away.

The interface could block the entire order with “Something went wrong.” A more useful design would identify the affected location, preserve the two ready sections, and explain who can confirm the address.

Whether the first two orders should proceed is a business decision. Splitting the order might create extra delivery charges or break a purchasing rule. The product team needs to settle that question before the interface offers a “Continue with two locations” action.

## Give every exception a complete response

For each important exception, specify five things: the trigger, the current state, the responsible person, the next action, and the evidence that recovery worked.

“Upload failed” leaves important gaps. Were any files accepted? Has the user lost their selection? Is retrying safe? Does someone else need to act?

A more useful state might say that two files were received and one could not be uploaded, with the failed file identified. Offer a retry for that file when the service supports it. Engineering must confirm the actual state; the interface should not guess.

GOV.UK has a separate pattern for [problems with the service](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/). It is worth keeping that distinction visible in the product too. People should not be asked to fix an input when the service itself is unavailable.

![A blocked request branches into missing information, missing permission, and an uncertain result, with separate recovery actions for each.](/images/blog/design-enterprise-exception-paths.svg)

*Missing information, missing access, and an unknown result each need a different next step.*

## Review recovery with engineering and operations

Ask an engineer what happens if the connection drops after the server accepts a request but before the screen receives confirmation. A timeout may leave the outcome unknown. The design should show that uncertainty and offer a supported way to check status. Automatically inviting another submission could repeat work. Amazon’s Builders’ Library explains [why retries can repeat an action and how services can prevent that](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).

Ask operations what happens when the next responsible person is absent. A “Contact your administrator” message needs a real, supported route behind it.

For bulk tasks, review both the overall summary and individual items. The user needs enough detail to repair failures without repeating completed actions. Also test keyboard navigation, screen-reader announcements, and whether error messages stay connected to the relevant controls.

## Questions to ask at the next design review

- Is this invalid input, missing access, a business rule, or a system failure?
- What work is safely saved?
- Is the result known, partial, or still uncertain?
- Who can resolve the problem?
- Can the user recover without repeating successful work?
- Does retrying risk creating a duplicate?
- What confirms that recovery is complete?

Choose exception paths by their consequence as well as their frequency. A rare failure that loses work or repeats an order can deserve attention before a common inconvenience. For the chair order, the team should be able to demonstrate what happens to all three locations when one gets stuck. Put that scenario in the release test, with someone responsible for checking the result.
