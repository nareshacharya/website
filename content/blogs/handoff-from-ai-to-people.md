---
title: "Design the handoff when AI needs a person to continue"
summary: "Carry context, responsibility and status through the transition from an AI assistant to a human teammate."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "AI UX"
  - "Service design"
draft: false
sources:
  - https://pair.withgoogle.com/guidebook-v2/chapter/errors-failing/
  - https://www.gov.uk/service-manual/service-standard/point-3-join-up-across-channels
---

When someone has already restarted a router and checked the cable, asking them to do both again makes a support handoff feel like starting over. The receiving person needs to see what has been tried, what happened, and which question is still open.

A “Talk to a person” button begins that transition. The rest of the experience needs just as much design attention: the waiting state, the information passed across, the receiving person's tools, and the confirmation that someone has accepted the work.

## Decide when to hand over

Some handoffs happen because the user asks. Others happen because the system lacks permission, cannot resolve an ambiguity, encounters a failure, or reaches a task that requires human judgement.

Define those conditions with the team. Avoid making users prove that the automation has failed repeatedly before they can reach an available person. Also avoid promising immediate help when the service only supports a later response.

Google's People + AI Guidebook says a [transition back to human control](https://pair.withgoogle.com/guidebook-v2/chapter/errors-failing/) needs to give the person enough information to understand the situation and take the next step. It also cautions that manual takeover can carry its own risks.

## Keep the troubleshooting history useful

Imagine a home internet assistant helping someone whose connection keeps dropping. The person has already restarted the router and checked the cable. The assistant cannot determine whether the problem is inside the home or on the network.

A useful handoff might offer a support request with a short, editable summary: the connection drops repeatedly, the router restart did not solve it, and the cable check is complete. It includes the relevant test results and clearly labels anything the assistant has only inferred.

The person can correct that summary before it is shared. The receiving support worker sees the same problem history and can start with the unresolved question.

## Decide what the next person needs to know

Build the handoff around a small set of fields:

- The person's goal and current problem
- Actions already attempted and their results
- Facts confirmed by the user or a reliable system
- Unresolved questions and any uncertainty
- The action requested from the receiving person

Keep observations separate from interpretations. “The user says the connection drops every evening” is different from “The network is overloaded.” The second statement needs evidence.

Include only information needed by the recipient and allowed for the purpose. A full conversation transcript may contain unrelated or private details. Where a transcript is useful and permitted, make clear who receives it and provide appropriate review or consent.

The same care applies to the receiving interface. A summary should help staff reach the original evidence when needed, rather than forcing them to trust an AI-written account without checking.

## Design the wait and the ownership change

Give each stage a truthful status: request prepared, submitted, waiting, accepted, or resolved. Define what evidence moves the case between those stages. Submitting a request does not establish that a person is already working on it.

If nobody is available, offer a supported alternative. That might be a callback request, a saved case, or a clear time to try again. Keep existing progress visible and explain what the user can safely do while waiting.

GOV.UK's [joined-up service standard](https://www.gov.uk/service-manual/service-standard/point-3-join-up-across-channels) includes testing both online and offline parts of a service and involving frontline staff in design decisions. Apply that thinking to the support worker's screen as well as the chat window.

![A handoff moves from AI-assisted work through a reviewed summary and waiting request to a person accepting responsibility.](/images/blog/handoff-from-ai-to-people.svg)

*The request can be submitted before anyone has accepted it. Show that gap honestly.*

## A handoff rehearsal

Test the transition with both sides present: one person using the service and another receiving the case. Ask:

- Can the user find the handoff when they need it?
- Does the recipient understand the unresolved problem?
- Are attempted actions and confirmed results easy to distinguish?
- Can incorrect or unnecessary details be corrected before sharing?
- Is responsibility clear while the request waits?
- Can the user resume if the transfer fails?

Watch for repeated questions and time spent rebuilding the story. If the receiving person immediately asks whether the router has been restarted, check why. The summary might be missing, hard to find, or too vague to trust. Each calls for a different repair.
