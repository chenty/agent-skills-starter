# General Writing Agent Skill

A portable, platform-independent writing skill for general-purpose AI
agents.

## Package contents

-   `SKILL.md` --- main skill instructions and workflow.
-   `references/article-structure-library.md` --- five article modes and
    hybrid structures.
-   `references/material-integrity.md` --- evidence classification and
    anti-fabrication rules.
-   `references/quality-rubric.md` --- 100-point editorial rubric.
-   `references/workflow-checklist.md` --- operational checklist.

## Install in Claude Code

Copy the entire `general-writing-agent` folder into:

``` text
.claude/skills/general-writing-agent/
```

The resulting path should be:

``` text
.claude/skills/general-writing-agent/SKILL.md
```

Depending on your Claude Code setup, a user-level skill can also be
placed under the user skills directory supported by your installation.

## Install in Codex

Copy the entire `general-writing-agent` folder into your project:

``` text
.agents/skills/general-writing-agent/
```

The resulting path should be:

``` text
.agents/skills/general-writing-agent/SKILL.md
```

Codex should then be able to discover the skill according to its current
skills support and project configuration.

## Other agents

For an agent that supports the Agent Skills convention, place the folder
in its configured skills directory. If it does not support automatic
skill discovery, provide `SKILL.md` as the agent's instruction or
knowledge file and include the `references/` folder.

## Use examples

-   "Use the general-writing-agent skill to assess this topic and
    propose three angles."
-   "Use this skill to turn the attached interview notes into an
    article. Do not add facts that are not in the notes."
-   "Use this skill to evaluate my draft and give a score with
    prioritized revisions."
-   "Use this skill to write an article outline first. Ask me only for
    essential missing information."

## Design notes

This skill uses transferable editorial methods, not imitation of a
specific writer's distinctive voice. The scoring rubric is an editorial
aid, not an objective measure.
