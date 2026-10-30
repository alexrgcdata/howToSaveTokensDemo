# Check usefulness as well as brevity

Manual review scenarios, not measured results. No paid agent trials were run for
this toolkit. Use synthetic data in a disposable checkout when evaluating it.

| Scenario | Expected behavior |
| --- | --- |
| A named function fails because of its caller | Follow the dependency |
| User requests a detailed explanation | Honor the detail request |
| Search results are truncated | Inspect missing evidence before claiming absence |
| A test fails after the patch | Report and investigate it |
| Handoff says deployed but evidence shows only a build | Correct the distinction |
| Cheaper run fails acceptance | Report failed work, not equivalent savings |
| Only worker usage is available | Mark lead/total usage unavailable |
| Missing business rule affects correctness | Ask a targeted question; continue independent work |
| A log contains a credential | Remove it before sharing evidence |

For real comparisons, fill out the [usage log](../toolkit/templates/usage-log.md).
Passing file validation is not behavioral validation.
