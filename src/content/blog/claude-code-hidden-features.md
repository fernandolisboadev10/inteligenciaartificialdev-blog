---
title: "5 Claude Code Features Most Developers Never Turn On"
description: "Plan mode, auto memory, subagents, skills, and hooks turn Claude Code from a chat window into a real dev workflow. Here's how each one actually works, with real config."
category: "Reviews"
date: 2026-09-12
readingTime: "8 min"
image: "./images/claude-code-hidden-features.webp"
imageAlt: "Close-up editorial photo of a developer's laptop at night showing an AI coding agent session in a dark terminal, with a second monitor softly blurred in the background showing a code editor"
---

Most developers who try Claude Code use it the same way: open a terminal, type a request, read the diff, approve it, repeat. That's a fine way to get value out of it, and it's exactly how the tool is marketed in a quickstart. It's also only a fraction of what's actually there.

Underneath the chat loop is a set of features built specifically for the parts of coding-with-AI that get annoying at scale: reviewing a plan before it touches disk, not re-explaining the same preference every session, keeping a big exploration task from flooding your context window, and enforcing a rule so it can't be skipped by accident. None of these require a plugin or a workaround. They're built in, documented, and mostly off by default or just unused because nobody went looking for them.

Here are five, what each one actually solves, and the real configuration for turning it on.

## 1. Plan Mode: Review Before Anything Touches Disk

The default flow lets Claude read files, decide on an approach, and start editing in one motion, asking for approval as it goes tool by tool. Plan mode splits that in two: Claude reads the code and proposes a full plan first, in plain text, with zero file edits, and only starts changing anything after you approve it.

This matters most on changes where the risk isn't "did it write correct code" but "did it understand the task the way I meant it." A vague request like "clean up the auth flow" can be interpreted a dozen reasonable ways. Reviewing the plan costs 30 seconds; reviewing (and reverting) a wrong implementation across eight files costs a lot more.

Turn it on for the current session by pressing `Shift+Tab` until the status bar shows `⏸ plan mode on`, or start a session in it directly:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">terminal</span>
    <button class="copy-btn" data-copy-target="plan-mode-cmd">Copy</button>
  </div>
  <pre id="plan-mode-cmd"><code>claude --permission-mode plan</code></pre>
</div>

Once you approve a plan, Claude executes it under your normal permission settings. You can also open the plan in your own text editor and hand-edit it before approving, which is faster than typing corrections back into the chat for anything longer than a sentence.

## 2. Auto Memory: It Stops Re-Learning the Same Thing Every Session

Every Claude Code session starts with an empty context window. Without memory, that means re-explaining "we use pnpm, not npm" or "the staging environment needs a local Redis instance" every single time it comes up, forever.

Auto memory fixes this by having Claude write its own notes as you work, based on corrections you give it and patterns it can't derive from the code itself. It saves four kinds of notes, tagged by type: your role and preferences, feedback you've given (corrections and confirmations), ongoing project context like deadlines or decisions, and references to where things live outside the repo (a Linear project, a Grafana dashboard).

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">~/.claude/projects/&lt;project&gt;/memory/</span>
    <button class="copy-btn" data-copy-target="memory-tree">Copy</button>
  </div>
  <pre id="memory-tree"><code>memory/
├── MEMORY.md            # index, one line per memory, loaded every session
├── feedback_testing.md  # "don't mock the database in integration tests"
├── project_deadline.md  # "staging freeze starts March 5 for the mobile release"
└── reference_tracker.md # "bugs are tracked in Linear project INGEST"</code></pre>
</div>

It's on by default, machine-local, and shared across every worktree of the same repo. Run `/memory` inside a session to browse, edit, or delete what's been saved; it's all plain markdown, nothing hidden. If Claude starts assuming something wrong about your workflow, that's usually a stale memory file worth opening and fixing directly rather than correcting in chat every time.

## 3. Subagents: Keep the Big, Messy Exploration Out of Your Main Thread

Ask Claude to "figure out how token refresh works in this codebase" and the honest answer requires reading a dozen files, most of which are dead ends. Do that in your main conversation and your context window fills up with file contents you'll never look at again, pushing out the things that actually matter for the task.

Subagents solve this by running that exploration in a completely separate context window with its own tools and even its own model, and reporting back only a summary. The three built-in ones, Explore, Plan, and general-purpose, cover most cases without any setup. You can also define your own for a repeated job, like a read-only code reviewer that only ever gets `Read`, `Grep`, and `Glob`, never `Write` or `Edit`.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/agents/security-auditor.md</span>
    <button class="copy-btn" data-copy-target="subagent-example">Copy</button>
  </div>
  <pre id="subagent-example"><code>---
name: security-auditor
description: Audit code for security vulnerabilities
tools: Read, Grep, Glob
model: opus
---

You are a security expert. Review code for vulnerabilities, injection
risks, authentication issues, and compliance concerns.</code></pre>
</div>

The practical upside beyond a cleaner context window: you can route exploration to a cheaper, faster model like Haiku while keeping your main conversation on a stronger one, and run several subagents on independent parts of a task at the same time instead of serially.

## 4. Skills: Package a Workflow Once, Stop Re-Explaining It

CLAUDE.md instructions load into every session whether you need them or not, which is fine for a handful of standing rules but wasteful for a multi-step procedure you only need occasionally, like "how we cut a release" or "our PR description template." Skills solve that gap: they're markdown files that load only when invoked, either by name or automatically when your request matches their description.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/skills/pr-summary/SKILL.md</span>
    <button class="copy-btn" data-copy-target="skill-example">Copy</button>
  </div>
  <pre id="skill-example"><code>---
description: Summarize a pull request's diff and flag anything risky
---

PR diff:
!`gh pr diff`

Summarize the changes above in 2-3 bullet points, then list anything
that looks risky: missing error handling, untested paths, or breaking
changes to a public API.</code></pre>
</div>

That `` !`command` `` syntax runs the shell command once and inlines its output before Claude ever sees the prompt, which is a cheap way to pull in live data (a diff, a log tail, test output) without an extra back-and-forth. A team that packages its five most common procedures as skills gets a consistent result from anyone who runs `/pr-summary`, instead of five slightly different ad-hoc requests typed into chat.

## 5. Hooks: Rules Claude Can't Talk Its Way Out Of

CLAUDE.md and memory are both context, not enforcement. Claude reads them and tries to follow them, but a vague or unusual request can still slip past an instruction that lives only in a markdown file. Hooks are different: they're shell commands that fire automatically at specific points in the session, like before a tool runs or after a file is edited, and they execute regardless of what Claude decides to do.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/settings.json</span>
    <button class="copy-btn" data-copy-target="hooks-example">Copy</button>
  </div>
  <pre id="hooks-example"><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/check-style.sh",
            "timeout": 30
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

The example above runs a lint script automatically after every file edit, so style drift gets caught the moment it happens instead of at code review. The same mechanism, on the `PreToolUse` event, can block a dangerous command outright, like a script that inspects a shell command before it runs and refuses to execute anything matching `rm -rf`. That's the real difference from an instruction: an instruction asks nicely, a hook doesn't ask at all.

## Which One Actually Solves Your Problem

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">If you're annoyed by...</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Use</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Where it lives</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Wrong-guess edits on vague requests</td>
        <td style="padding:12px 16px;font-weight:600;">Plan Mode</td>
        <td style="padding:12px 16px;"><code>Shift+Tab</code>, no config</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Repeating the same correction every session</td>
        <td style="padding:12px 16px;font-weight:600;">Auto Memory</td>
        <td style="padding:12px 16px;">On by default, <code>/memory</code> to inspect</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Context window filling with dead-end file reads</td>
        <td style="padding:12px 16px;font-weight:600;">Subagents</td>
        <td style="padding:12px 16px;"><code>.claude/agents/*.md</code></td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Re-typing the same multi-step procedure</td>
        <td style="padding:12px 16px;font-weight:600;">Skills</td>
        <td style="padding:12px 16px;"><code>.claude/skills/*/SKILL.md</code></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">A rule that must never be skipped</td>
        <td style="padding:12px 16px;font-weight:600;">Hooks</td>
        <td style="padding:12px 16px;"><code>.claude/settings.json</code></td>
      </tr>
    </tbody>
  </table>
</div>

## FAQ

### Do these features require a specific Claude Code plan?

No. Plan mode, auto memory, subagents, skills, and hooks are all part of the core CLI and work the same way regardless of whether you're authenticated through a Claude subscription or an Anthropic Console API key.

### Is auto memory shared with my team or across machines?

No. Auto memory is machine-local, stored under your own `~/.claude/` directory. It's shared across git worktrees of the same repository on your machine, but not with teammates and not synced to another computer. CLAUDE.md files, by contrast, are meant to be committed and shared through version control.

### Can a hook actually stop Claude from doing something?

Yes, and that's the point. A `PreToolUse` hook can inspect a proposed tool call and return a deny decision before it executes, which is enforced by Claude Code itself, not by Claude choosing to comply. That's the mechanism to reach for anything CLAUDE.md hasn't reliably prevented.

### What's the actual difference between a skill and a subagent?

A skill loads instructions into your current conversation; a subagent runs in a completely separate context window and reports back a summary. Use a skill for a procedure you want to guide the current conversation, and a subagent for exploration or work you want isolated so it doesn't consume your main context.

### Where do I see what's actually loaded in a given session?

Run `/context` inside a session. It lists every CLAUDE.md, rule, and memory file that actually loaded, which is the fastest way to debug an instruction that doesn't seem to be taking effect.

## The Bottom Line

Plan mode, auto memory, subagents, skills, and hooks solve five specific, unglamorous annoyances: wrong guesses on vague asks, repeated corrections, a flooded context window, retyped procedures, and rules that can be talked around. None of them need a plugin, a subscription upgrade, or more than a config file to turn on. If you've only ever used Claude Code as a chat box in a terminal, picking one of these that matches a problem you actually have this week is a better use of twenty minutes than reading the rest of the documentation cover to cover.

---

*Sources: [Claude Code — Overview](https://code.claude.com/docs/en/overview), [Claude Code — How Claude Remembers Your Project](https://code.claude.com/docs/en/memory), [Claude Code — Subagents](https://code.claude.com/docs/en/sub-agents), [Claude Code — Skills](https://code.claude.com/docs/en/skills), [Claude Code — Hooks](https://code.claude.com/docs/en/hooks), [Claude Code — Common Workflows](https://code.claude.com/docs/en/common-workflows).*
