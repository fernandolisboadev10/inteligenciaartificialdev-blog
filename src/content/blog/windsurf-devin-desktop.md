---
title: "Windsurf Is Now Devin Desktop: What Actually Changed"
description: "Windsurf renamed itself to Devin Desktop on June 2, 2026. Here's what changed, what didn't, and what to do if you still have the old app open."
category: "AI Coding Tools"
date: 2026-09-18
readingTime: "5 min"
image: "./images/windsurf-devin-desktop.webp"
imageAlt: "Close-up editorial photo of a developer's hands typing on a laptop keyboard at a desk, with a blurred code editor and a Kanban-style agent board visible on the screen behind, soft natural window light"
draft: false
---

If you open Windsurf today and the icon, the name, and half the menus look different, you didn't get hacked. Windsurf became **Devin Desktop** on June 2, 2026, and the change rolled out automatically, over the air, to every existing install. No new download, no migration wizard, just a different app staring back at you the next time you opened it.

Here's what actually changed, what didn't, and what to do about it if you're still getting used to the new name.

## Why the Rename Happened

Windsurf almost sold to OpenAI for roughly $3 billion in mid-2025. That deal fell apart over intellectual property tensions with Microsoft. Google stepped in instead, paying a reported $2.4 billion to pull Windsurf's CEO Varun Mohan, co-founder Douglas Chen, and much of the R&D team into Google DeepMind, along with a non-exclusive license to the underlying technology.

What was left of Windsurf as a company was acquired by Cognition, the team behind the autonomous coding agent Devin. Cognition ran Windsurf as a separate brand for about eleven months before folding it into the Devin product line for good.

## What Actually Changed

- **Cascade was retired.** Cascade, the AI agent that made Windsurf's name, was shut down on July 1, 2026. **Devin Local** is now the default agent for new tabs.
- **The default view flipped to an Agent Command Center.** Instead of opening straight into a blank editor, Devin Desktop now opens to a Kanban-style board showing every agent you have running, similar to a project management tool more than a code editor.
- **ACP support was added.** The Agent Client Protocol lets you run Claude Agent, Codex, or OpenCode inside the same Devin Desktop shell, instead of being locked into one vendor's agent.
- **Everything is branded Devin now.** New icon, new splash screen, new marketing site. Under the hood it's still the same VS Code fork.

## What Didn't Change

This is the part worth relaxing about if you were mid-project when the update landed:

- **Your plan and pricing carried over exactly.** Nobody was moved to a different tier or charged differently because of the rename.
- **Extensions, keybindings, and settings are untouched.** Anything you had installed or configured in Windsurf is still there in Devin Desktop.
- **The classic editing experience still works.** If you never touch an agent and just want VS Code with good autocomplete, that workflow didn't go anywhere.
- **MCP server connections carried over.** No reconfiguration needed.

## What It Costs Now

Cognition restructured pricing on March 19, 2026, before the rename, dropping the old credit-based system for daily and weekly usage quotas:

- 🆓 **Free** ($0/month): Entry-level access with daily/weekly quotas.
- 💰 **Pro** ($20/month): Up from $15 before the March restructure. Higher quotas, Devin Cloud access included.
- 🚀 **Max** ($200/month): For continuous, all-day agent use.
- 🏢 **Teams** ($80/month base + $40/month per seat): Centralized billing and admin controls.
- 🏛️ **Enterprise**: Custom pricing, SSO, and RBAC.

## What To Do Right Now

If your Windsurf app already auto-updated, there's nothing to do — you're already running Devin Desktop under the hood. If you're on an older version that hasn't pulled the update yet, just open the app; the switch happens automatically, no account action required. The one habit worth breaking early: stop reaching for Cascade in tutorials or muscle memory, since it's gone, and get comfortable with Devin Local or an ACP-connected agent of your choice instead.

## Frequently Asked Questions

### Is Windsurf shutting down?

No. Windsurf isn't gone, it's the same application, editor, and codebase, just renamed and rebranded as Devin Desktop under Cognition. Nothing about the software stopped working.

### Do I need to pay again or upgrade?

No. Plans, pricing, and billing carried over automatically. The March 2026 price change (Pro going from $15 to $20/month) happened before the rename and applies regardless of what the app is called.

### What is Devin Local?

Devin Local is the local coding agent that replaced Cascade as the default when Cascade was retired on July 1, 2026. It's built on Cognition's Devin technology rather than Windsurf's original Cascade engine.

### Can I still use other AI models inside Devin Desktop?

Yes. ACP (Agent Client Protocol) support lets you run Claude Agent, Codex, or OpenCode in the same shell, so you're not locked into Cognition's own agents only.

## The Bottom Line

For most people who just write code in the editor, this rename changes almost nothing day to day: same shortcuts, same extensions, same bill. The real shift is under the hood — Cascade is gone, Devin Local and ACP support are the new default way to hand off work to an agent, and the app now opens assuming you want to manage multiple agents rather than write every line yourself. If a tutorial or forum post still says "Windsurf" or "Cascade," treat it as slightly out of date rather than wrong.

---

*Sources: [Devin Desktop FAQ — Devin Docs](https://docs.devin.ai/desktop/devin-desktop-faq), [Cognition — New self-serve plans for Devin](https://cognition.com/blog/new-self-serve-plans-for-devin), [Devin Docs — Plans and Usage](https://docs.devin.ai/desktop/accounts/usage), [Wikipedia — Cognition AI](https://en.wikipedia.org/wiki/Cognition_AI).*
