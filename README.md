# Spend fewer tokens on useful work

Practical agent instructions by [Alex Seidler](https://alexseidler.dev), accompanying
my [token-management article](https://rgcdata.com/2026/10/21/ai-token-management-context-coding-costs/).

I wanted a small set of files I could bring into a project: short replies, focused
investigation, sensible checks, and a handoff that saves the next session from
starting over. This toolkit is that starting point, not a promise of cheaper bills.

## Start here

1. Merge the useful parts of [the starter rules](toolkit/AGENTS.example.md) into your
   existing project instructions. Preserve its build commands and permission rules.
2. Fill in [a task brief](toolkit/templates/task-brief.md) with a starting point,
   a reproducible example, and the expected result.
3. Ask your agent to read one relevant skill:
   - [Focused work](toolkit/skills/focused-work/SKILL.md)
   - [Session handoff](toolkit/skills/session-handoff/SKILL.md)
   - [Usage review](toolkit/skills/usage-review/SKILL.md)

No keys or installation needed. Copy only the files you need. Automatic skill
discovery depends on your agent's supported locations and configuration; explicitly
asking an agent to read a skill file works without assuming automatic discovery.

Download the repository with **Code → Download ZIP**, or:

```sh
git clone https://github.com/alexrgcdata/howToSaveTokensDemo.git
```

## Useful files

| File | Purpose |
| --- | --- |
| [Starter rules](toolkit/AGENTS.example.md) | Concise replies and focused investigation |
| [Task brief](toolkit/templates/task-brief.md) | Give the agent somewhere useful to start |
| [Handoff](toolkit/templates/handoff.md) | Continue without replaying a whole conversation |
| [Usage log](toolkit/templates/usage-log.md) | Compare cost, retries, quality, and time |
| [FileMaker example](toolkit/examples/filemaker-task.md) | Preserve script/layout context without a full export |
| [Everyday habits](docs/token-habits.md) | Context, caching, tools, delegation, and common mistakes |
| [Review scenarios](docs/review-scenarios.md) | Check usefulness as well as brevity |

Short output does not prove low total usage. Never save tokens by skipping required
checks, concealing uncertainty, or removing the context needed for a correct result.
Measure completed work, including repairs. There is no universal savings percentage.

## Original demonstration

The School React app and hybrid-model experiment remain intact. Their
[original walkthrough](docs/school-experiment.md) preserves setup instructions and
results. The report distinguishes recorded DeepInfra usage from estimated comparison
scenarios; it does not measure this new toolkit.

- [Configured demo URL](https://alexrgcdata.github.io/howToSaveTokensDemo/)
- [Configured report URL](https://alexrgcdata.github.io/howToSaveTokensDemo/metrics/sidebar-experiment-report.html)

Hosting status: the current Pages workflow builds the app successfully, but GitHub
reports that the Pages site is not configured. These are the intended hosting URLs,
not verified live demos. The source, local report, and Markdown toolkit remain usable.

Check the Markdown package with `node scripts/check-toolkit.mjs`. This checks links
and skill metadata, not model behavior. Build the existing app with `npm ci` followed
by `npm run check`. No paid experiment is needed to use or validate the toolkit.

New files under `toolkit/` are [MIT licensed](toolkit/LICENSE). This addition does
not relicense the existing application, experiment, or dependencies.
