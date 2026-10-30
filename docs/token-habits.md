# Reduce wasted work

Load this guide only when useful. For everyday work, the
[starter rules](../toolkit/AGENTS.example.md) are enough.

| Situation | Adjustment | Preserve this boundary |
| --- | --- | --- |
| Broad repository searches | Give an entry point and reproducer | Follow real dependencies |
| Repeated long explanations | Request outcome, checks, and remaining work | Keep meaningful caveats |
| Huge tool responses | Filter fields and request a bounded sample | A sample cannot prove full coverage |
| Long logs | Start with the error and timestamp | Keep full evidence available |
| Sessions lose decisions | Maintain one current handoff | Recheck facts that may have changed |
| Instruction files grow endlessly | Link optional references | Required checks still apply |
| Same action repeatedly fails | Revise the hypothesis using the error | Transient retries can be valid |
| Workers duplicate investigation | Give bounded tasks and minimal evidence | Count coordination costs |
| A cheap model requires repairs | Compare completed outcomes | Price alone does not determine task cost |
| Many unused integrations | Inspect what the app actually loads | Deferred tools may not load all definitions |

Context capacity, cumulative usage, cache accounting, and subscription allowances
are different measurements. A short final answer does not reveal the input,
reasoning, tool output, or failed attempts used to produce it.

If you control API assembly, keep eligible stable prefixes consistent and inspect
actual cache statistics. Coding applications may handle this for you. Do not preserve
irrelevant conversation just to chase cache hits or rearrange meaningful rules for
an assumed discount. Verify current provider documentation before using rates or
cache thresholds; this toolkit deliberately includes no permanent price table.

Avoid blanket rules such as “never ask,” “read one file only,” or “skip tests.”
Missing requirements and dependencies cause expensive rework. Likewise, delegating
everything or restarting every few messages can cost more than focused continuation.

These original templates accompany
[Alex's article](https://rgcdata.com/2026/10/21/ai-token-management-context-coding-costs/).
Evaluate them on finished work before making a savings claim.
