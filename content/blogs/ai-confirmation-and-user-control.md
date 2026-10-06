---
title: "Make AI confirmation clear enough to make a real decision"
summary: "Design review and approval steps that tell people exactly what an AI feature is about to do and how to correct it."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "AI UX"
  - "Interaction design"
draft: false
sources:
  - https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/
  - https://pair.withgoogle.com/guidebook-v2/chapter/feedback-controls/
---

Before an AI feature takes an action, the person using it should understand what will happen and have the control that the situation needs. A button labelled “Confirm” is useful only when the surrounding information makes the decision clear.

Start the design review with the action. Is the system preparing text, changing a private draft, sending a message, or committing money? These actions have different consequences. Their review steps should reflect that difference.

## Separate preparation from commitment

An AI can help assemble a proposed action before it is ready to carry it out. Make the current stage visible. Words such as “Draft ready,” “Awaiting approval,” and “Sent” describe different states and should only appear when they are true.

Microsoft Research's [human–AI interaction guidelines](https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/) include making correction easy, explaining consequences, and giving users controls over system behaviour.

Let people inspect and edit the proposed action in place. They should not have to search back through a long conversation to work out what the assistant is about to do.

## Check the dinner invitation before sending it

Imagine an assistant helping someone arrange a birthday dinner. It has drafted an invitation for eight guests. Before sending, the review shows the recipients, restaurant, date, time, and exact message.

The user spots that the dinner is on Saturday, while the draft says Friday. They edit the date. The preview updates, and the final button clearly says “Send invitations.”

Now imagine that the assistant also found a prepaid reservation. That needs a separate review of the charge and booking conditions. Approval to send an invitation should not silently become permission to make a payment.

## Put the important information beside the action

A useful confirmation answers a few concrete questions. What will change? Who will see it? What will it cost, if anything? Can it be reversed? What remains uncertain?

Prioritise the information that could change the user's decision. If the assistant is about to replace a shared document, highlight the document and the effect on existing content. If it is sending a message, make the recipients easy to check.

Avoid using a confident writing style to hide an unresolved fact. If a recipient is ambiguous, resolve that ambiguity before offering the send action. A user cannot give informed approval to a destination the product has not identified.

Google's People + AI Guidebook makes room for [editing the output and using a manual route](https://pair.withgoogle.com/guidebook-v2/chapter/feedback-controls/). Those options matter when the assistant's proposal is close, but one important detail is wrong.

![A proposed AI action passes through review and approval before execution; editing returns to review, and cancellation exits before execution.](/images/blog/ai-confirmation-and-user-control.svg)

*Editing returns the action to review. Approval applies to the version the person actually checked.*

## Make control work after the preview

Check what happens when the user cancels, changes a field, or approves while the underlying information changes. A preview should remain tied to the action it authorises. If a material detail changes, the interface needs to bring that change back for review when required.

Engineering and design should also agree what “Stop” means. Stopping text generation may be immediate. Stopping a request already sent to another service may not undo it. The interface needs to report the actual result and provide a recovery route where one exists.

For lower-consequence, reversible actions, repeated approval can add unnecessary work. Test a lighter interaction where policy allows it. For consequential actions, test whether people can explain what they approved, rather than measuring only how quickly they clicked.

## Test what people understand before they approve

- Is the action named in plain language?
- Can the user inspect the exact content and destination?
- Are charges and important conditions visible when relevant?
- Is uncertainty resolved or clearly explained?
- Can the user edit, cancel, or choose a supported manual route?
- Does approval apply to the version that will actually run?
- Does the result distinguish success, failure, and uncertainty?

In a usability test, pause before the person presses the final button. Ask them who will receive the invitation, what it says, and whether anything will be charged. Their answers will tell you more about the confirmation than the speed of the click.
