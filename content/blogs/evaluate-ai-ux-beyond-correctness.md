---
title: "Evaluate AI UX beyond a correct answer"
summary: "Assess AI experiences through task completion, understanding, control and recovery as well as answer accuracy."
author: Naresh Pentapati
date: 2026-10-06
topics:
  - "AI UX"
  - "Research"
draft: false
sources:
  - https://developers.openai.com/api/docs/guides/evaluation-best-practices
  - https://www.nist.gov/itl/ai-risk-management-framework
---

A correct AI answer can still leave someone unable to finish a task. They may not understand the answer, know whether it applies, or find a way to correct it. If the product can take actions, a good answer also says little about whether the right action happened.

Evaluate the whole task. Define what the person is trying to achieve, what a successful result looks like, and which failures would make the feature unsafe or unusable.

## The train ticket is still unchanged

Imagine an assistant that explains how to change a train ticket. It gives an accurate summary of the operator's rules. However, the person still cannot tell which ticket they hold or where to make the change.

The answer is accurate, but the task is unfinished. A different design might first help the person identify the ticket, show the relevant conditions, and provide the correct next step.

If the assistant can submit the change, the evaluation must also check the destination, price difference, user approval, and final booking state. Fluent language does not establish any of those facts.

## Build a small scorecard around the task

Start with correctness, then add observable questions:

- **Completion:** Did the person reach the intended outcome?
- **Understanding:** Could they explain the important information and next step?
- **Appropriate reliance:** Did they notice when an answer needed checking?
- **Control:** Could they inspect, change, or stop a proposed action?
- **Recovery:** Could they continue after a wrong answer or failed request?
- **Effort:** How much time and work went into checking or repairing the result?

For each question, define what a pass and a failure look like. “Easy to use” is difficult to score consistently. “The participant can correct the destination before submission” gives observers something concrete to check.

OpenAI's [evaluation guidance](https://developers.openai.com/api/docs/guides/evaluation-best-practices) recommends task-specific tests, evaluating repeatedly, and checking automated scores against human judgement. Start with a few clear examples of a pass and a failure so reviewers can compare their decisions.

![A real user task is assessed for correctness, completion, understanding, control, recovery, and effort, with serious failures reviewed separately.](/images/blog/evaluate-ai-ux-beyond-correctness.svg)

*Review the task from several angles, and keep serious failures visible in the release decision.*

## Include cases that challenge the experience

Build a test set that reflects the task's variation. Include ordinary requests, incomplete information, ambiguous names, conflicting instructions, unavailable tools, and requests outside the feature's limits. Use approved or synthetic test data when private material is unnecessary.

Test with relevant users, including people who use assistive technology. Check the full interaction rather than only the generated text. A useful response still needs to be reachable by keyboard and understandable when read by a screen reader.

Keep scenario labels so results can be examined separately. An overall average could conceal poor performance for a particular language, user group, or high-consequence task. Show the number of cases behind each result and describe gaps in the sample.

## Give serious failures their own decision rule

Agree which failures block release or limit the feature before reviewing the results. For an assistant that sends messages, sending to the wrong person could be a release blocker even if most writing tests pass. The exact rule should follow the task's risks and the organisation's requirements.

NIST's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) provides voluntary guidance for considering trustworthiness throughout an AI system's life. Use it to structure the risk discussion; the team still needs evidence about how its own product performs.

Pair automated tests with observed sessions. Automation can check many repeated cases. Watching people use the product can reveal confusion that a text score misses. Record whether a failure comes from the model, source data, interface, or connected service so the right team can act.

## What to bring to the release decision

- State the task, test population, and sample size
- Show results by important scenario, alongside the overall result
- List serious failures separately
- Include review effort and recovery, not just answer quality
- Name the remaining unknowns and their owners
- Repeat relevant tests after changes to prompts, models, tools, or UI

For the train-ticket task, a useful result would show whether people found the right ticket, understood the conditions, and completed the change without an unwanted charge. That gives the team a basis to release the feature, revise it, or limit what it can do.
