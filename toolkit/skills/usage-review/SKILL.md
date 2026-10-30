---
name: usage-review
description: Compare completed agent workflows using recorded usage, retries, elapsed time, and acceptance results. Use to evaluate a token-saving change or an expensive task.
---

# Usage review

Define a repeatable task and acceptance check. Keep the starting revision, fixtures,
and scope comparable. Record model/provider versions, settings, tool selection,
cache conditions, and meaningful environment differences.

Use the [usage log](../../templates/usage-log.md). Preserve provider category meanings:
cached input may be a subset of input, not an additional total. Do not add categories
until their relationship is known. Word counts are not token measurements.

Include failed calls, worker usage, lead-agent integration, repairs, and repeat runs.
Prefer actual billing. For an estimate, record the dated pricing source and formula.
Subscription allowance percentages do not translate directly into API charges.

Compare quality and elapsed time alongside usage. If the alternative fails acceptance,
report a failed alternative, not equivalent work completed cheaply. Use repeated
trials when variability matters and report the range rather than only the best run.

Separate measured, estimated, and unavailable values. Calculate percentage savings
only for compatible totals and a positive baseline. Otherwise report raw observations.
This skill reviews evidence; it does not authorize paid trials or delegation.
