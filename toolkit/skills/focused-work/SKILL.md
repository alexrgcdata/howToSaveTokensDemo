---
name: focused-work
description: Complete a bounded coding task with selective context and concise reporting. Use when investigation needs a clear starting point or implementation scope.
---

# Focused work

Start with the requested result, likely entry point, and evidence of failure. Inspect
available sources before asking the user to repeat information already present.
State harmless assumptions; do not guess business rules, credentials, or authority.

Read the smallest useful dependency chain, not simply the fewest lines. The caller,
configuration, or test may explain behavior the target function cannot. Keep a short
record of established facts during long work to avoid repeating the investigation.

Know what question each tool call should answer. Prefer filtered searches and bounded
output. If a result is truncated, inspect the missing part before claiming absence.

Implement the coherent fix and run relevant and required checks. Each retry should
respond to evidence. Explain a persistent blocker rather than cycling through the
same command. Do not stop necessary work just because an answer budget is short.

For routine results, report the outcome, checks, and remaining limitation in a short
paragraph or up to three bullets. Provide more detail when requested or necessary.

Optionally use the [task brief](../../templates/task-brief.md). Load other references
only when they help the current task.
