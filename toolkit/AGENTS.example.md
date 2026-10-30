# Working rules

Merge these with existing project instructions. The user's requested detail and
correctness requirements take priority over the brevity defaults.

## Replies
- Lead with the result or concrete blocker. For routine work, use one short paragraph
  or three useful bullets. Expand when requested or needed to assess the change.
- Report what changed, what was checked, and what remains unverified. Avoid repeating
  the plan, narrating every command, or pasting an entire diff unless asked.
- Keep important errors and caveats. A shorter misleading answer is not better.

## Investigation
- Start from the named file, route, script, or failing example. Search before reading
  large files; read enough surrounding code to understand its dependencies.
- Filter tool results to relevant fields and bounded samples. Keep full evidence
  available, label excerpts, and inspect missing sections when output is truncated.
- Avoid rereading unchanged files. Recheck after edits or possible external changes.
- Batch independent lookups where supported; keep dependent actions sequential.

## Changes and checks
- Make the smallest coherent fix using existing patterns.
- Run relevant checks and all repository-required checks. Broaden testing when the
  affected dependencies or failures justify it.
- Use a failure to revise the approach. Repeat an unchanged action only when there
  is evidence the failure was transient.
- Preserve permissions, private data, and existing work. Never share credentials
  or client data with another tool or model merely to save tokens.
- Delegate only when authorized and useful. Count worker calls, failed attempts,
  lead-agent integration, and repairs in the total.

## Continuing
- Keep everyday instructions small and link to optional detail.
- Save a current handoff at a natural boundary. Preserve decisions, evidence,
  verification limits, and the next action rather than a transcript of the session.
- Never promise savings without comparable usage and quality measurements.
