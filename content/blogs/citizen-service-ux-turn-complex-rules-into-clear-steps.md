---
title: "Citizen service UX that turns complex rules into clear steps"
summary: "Turn policy rules and exceptions into understandable questions, progress and recovery paths for public services."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "Public services"
  - "UX design"
draft: false
sources:
  - https://design-system.service.gov.uk/patterns/question-pages/
  - https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/
  - https://design-system.service.gov.uk/components/error-message/
---

A citizen should be able to use a public service without first becoming an expert in the department's rules. The interface should ask clear questions, explain what happens next, and help people recover when their situation does not fit the expected path.

That takes careful work behind the screen. Every simple question still needs to connect to the correct rule.

Think about a resident parking-permit service. Suppose its policy distinguishes between residents, temporary visitors, company vehicles, and people who have just moved. A form that asks for an “applicant classification” passes the department's sorting problem to the person using it.

A question such as “Do you live at this address?” is easier to answer. The service can use the answer to find the next relevant step, as long as that wording matches the actual policy.

## Map the rules before writing the form

Start with a working list of decisions. For each one, record the rule, its source, the information needed, any exceptions, and who can confirm its meaning.

This creates a shared view for design, policy, engineering, and service teams. It also makes disagreements visible early. If two documents appear to define residency differently, a designer should not resolve the conflict by choosing whichever wording fits the screen.

Turn the confirmed rules into example situations. Include a routine case, an exception, a missing document, and an answer that changes halfway through. Follow each situation from start to finish before adding visual polish.

## Ask only what changes the path

GOV.UK's question-page guidance recommends knowing why each question is needed and beginning with one question per page. It also allows “I do not know” where that is a valid answer. These are useful starting points to test in the service's own context. [GOV.UK question-page guidance](https://design-system.service.gov.uk/patterns/question-pages/)

For the parking example, ask about the address before requesting vehicle documents if the address determines which service applies. Explain an unusual question beside the field, where the person needs the answer.

A question-by-question flow still needs judgment. Closely related fields may belong together. A very long sequence may need a clear overview and a way to return later. Test the flow with people using small screens, assistive technology, and less reliable connections.

## Help people find the right service early

A short suitability check can help when eligibility is complicated. GOV.UK advises using simple questions, showing the result, and explaining useful alternatives when someone cannot use the service. It also says a separate checker is unnecessary when a start page can explain the requirements clearly. [GOV.UK suitability-check pattern](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/)

In our example, a visitor should find the visitor-permit route before completing a resident application. The result should explain the relevant reason and link to the next step.

If the service cannot decide because information is missing, say what is needed. Do not turn uncertainty into a rejection.

## Separate mistakes from policy outcomes

An unreadable date and an ineligible application are different situations. One asks the user to correct an entry. The other needs an explanation of the outcome.

GOV.UK's error-message guidance makes this distinction explicit: validation messages should help people fix their information, while eligibility or service problems need an appropriate explanation and next step. [GOV.UK error-message guidance](https://design-system.service.gov.uk/components/error-message/)

Keep earlier answers when something fails. If a changed answer affects later questions, tell the user which details need another look. At the end, let them check the important information before submitting.

## Test understanding and the full journey

Ask people to explain why a document is needed and what they expect after submission. Can someone with an exception find help? Can a support colleague understand what the applicant has already done?

Keep a visible link between policy, questions, and outcomes. A simpler service preserves the rules while making the next action easier to understand.
