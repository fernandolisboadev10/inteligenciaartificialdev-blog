---
title: "Open Source Maintainers Are Closing the Door on AI-Generated Pull Requests. Here's How to Contribute Without Getting Banned."
description: "cURL ended its bug bounty, Ghostty restricted AI code, and tldraw auto-closes outside PRs. What 'AI slop' means for maintainers, and a 7-step checklist for using AI on open source the right way."
category: "AI Coding Tools"
date: 2026-10-02
updated: 2026-10-05
related: ["ai-code-review-tools-pricing", "vibe-coding-habits", "context-engineering-habits-developers"]
readingTime: "7 min"
image: "./images/ai-slop-pull-requests-open-source.webp"
imageAlt: "Over-the-shoulder editorial photo of a tired open source maintainer at a desk late in the evening, reviewing a long list of pull requests on a laptop with warm lamp light and a coffee mug"
draft: false
---

If you've used an AI coding tool to fix a bug in someone else's project and opened a pull request, you've probably felt the rush: it worked, the tests passed, and it took ten minutes. Now look at it from the other side of the screen. A maintainer, usually unpaid, opens their inbox and finds the fifteenth AI-written pull request this week, most of them confidently wrong.

That second view is why a growing number of well-known projects are changing the rules. The trend even has a name now: "AI Slopageddon," a term RedMonk analyst Kate Holterhoff used for the flood of AI-generated contributions that maintainers can't keep up with.

This article covers what's actually happening, why it matters even if you only contribute occasionally, and a checklist for using AI on open source without becoming the problem.

## What Maintainers Are Actually Doing

According to [InfoQ's reporting on the trend](https://www.infoq.com/news/2026/02/ai-floods-close-projects/), the responses so far are not subtle:

- **cURL** shut down its bug bounty program in January 2026. Maintainer Daniel Stenberg had run it for six years and paid out about $86,000 in total. By 2025, roughly 20% of submissions were AI-generated, and the share of valid reports had fallen to around 5%.
- **Ghostty**, the terminal emulator, now bans AI-generated code submitted without prior approval. Creator Mitchell Hashimoto was explicit that the rule isn't against AI itself. In his words: "This is not an anti-AI stance. This is an anti-idiot stance."
- **tldraw** set its repository to automatically close all external pull requests. Its creator, Steve Ruiz, found that his own AI scripts had produced poorly written issues, which then attracted hallucinated PRs in a loop.
- **Gentoo Linux and NetBSD** went further and banned AI contributions entirely.

Notice what these have in common. None of the maintainers are saying AI-assisted code is inherently bad. They're reacting to volume and effort. Generating a pull request now costs the contributor almost nothing, but reviewing it still costs the maintainer real time, and that imbalance is what's breaking the system.

![Close-up of a laptop screen showing a blurred, endless list of open pull requests with a maintainer's hand resting on the trackpad](./images/ai-slop-pull-requests-open-source-queue.webp)

## Why This Matters to You, Even If You're Not a Maintainer

There are two reasons to pay attention.

First, the rules are changing under you. Contribution guidelines that said nothing about AI a year ago may now include a disclosure requirement, an approval step, or an outright ban. A pull request that would have been welcome in 2024 can get you blocked today.

Second, a lot of developers, especially students and people learning through vibe coding, are building their first public track record through open source contributions. A closed-and-flagged PR from a project you wanted to be associated with is a bad start. Getting this right is useful for your reputation, not only for the maintainers' sanity.

## What "AI Slop" Looks Like in a Pull Request

Maintainers describe the same patterns over and over. If your contribution has any of these, expect it to be closed:

- **A fix for a problem nobody reported.** The AI found something that looks like a bug and "fixed" it, with no linked issue and no discussion.
- **A description that doesn't match the diff.** The PR text is polished and generic, but the code changes something different, or much more.
- **A huge unrelated cleanup.** Reformatting, renamed variables, and "improvements" mixed in with the real change.
- **Code the author can't explain.** The first review question gets a vague answer, or the same pasted-looking text again.
- **Tests that test nothing.** They pass because they assert what the code already does, not what it should do.
- **An invented bug report.** A security or bug report describing behavior that doesn't actually exist, which is exactly what drowned cURL's bounty program.

## A 7-Step Checklist for Using AI on Open Source

This is the process that keeps AI in the role of a tool instead of a spam cannon. Run through it before you click "Create pull request."

### 1. Read the contribution rules first

Open `CONTRIBUTING.md` and look for any mention of AI, LLMs, or "generated" code. If the project bans or restricts it, that settles the question. Don't argue, and don't try to hide it. Pick another project or contribute in a way the rules allow, like triaging issues or improving docs by hand.

### 2. Start from an existing issue

Look for an issue that's already been acknowledged by a maintainer, ideally labeled something like "good first issue" or "help wanted." If there isn't one, open a short discussion first and ask whether the change is wanted. A comment that says "I'd like to work on this, is that okay?" costs you thirty seconds and saves everyone a wasted review.

### 3. Reproduce the problem yourself

Before you ask AI for a fix, run the project and see the bug with your own eyes. If you can't reproduce it, you can't verify your fix, and that's the line between a contribution and a guess.

### 4. Keep the change as small as the problem

Tell the AI to touch only what's needed:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">prompt</span>
    <button class="copy-btn" data-copy-target="minimal-prompt">Copy</button>
  </div>
  <pre id="minimal-prompt"><code>Fix only the bug described below, with the smallest possible change.
Do not reformat code, rename anything, or refactor unrelated parts.
Follow the existing code style of this file exactly.

After the fix, list every file and line you changed and explain why
each change is necessary. If you're not sure the root cause is what
I described, say so instead of guessing.

[paste issue text and the relevant file]</code></pre>
</div>

The last sentence matters. Giving the model permission to say "I'm not sure" reduces the confident-but-wrong answers that make up most slop.

### 5. Read your own diff like a reviewer

Open the diff and read every line as if someone else wrote it. If there's a line you can't explain, either ask the AI to explain it and check that explanation against the docs, or delete the line. You should be able to defend each change in a code review without pasting anything back into a chat window.

### 6. Run the project's real tests, and add one that fails first

Run the existing test suite locally. Then, if you're adding a test, confirm it fails without your fix and passes with it. A test that passes both ways proves nothing.

### 7. Write the description yourself and disclose AI use

Write the pull request description in your own words: what the problem was, how you reproduced it, what you changed, and how you tested it. Where the project asks for it, or even where it doesn't, add a one-line note like "I used an AI assistant to draft the fix and reviewed and tested it myself." Being upfront builds trust. Getting caught hiding it destroys it.

![Open notebook with a handwritten checklist next to a laptop showing a blurred code diff, on a clean wooden desk in soft morning light](./images/ai-slop-pull-requests-open-source-checklist.webp)

## For Maintainers: A Few Defenses That Don't Require a Ban

If you run a project and you're drowning, closing contributions isn't the only option. Based on what the affected projects have tried, a few lighter measures are worth considering:

- **Require a linked, approved issue** before a pull request can be opened.
- **Add an AI policy to `CONTRIBUTING.md`.** State plainly what's allowed, what needs disclosure, and what gets closed.
- **Use a PR template with a checkbox** confirming the contributor reproduced the problem and ran the tests.
- **Ask for the reasoning.** One question, like "why did you choose this approach over the existing helper?", filters out most unreviewed output quickly.

The tldraw story is a useful warning here too. If you automate issue creation or triage with AI, review what it produces, because bad generated issues invite bad generated PRs.

## Related Reading and Official Resources

Using AI well on someone else's repository comes down to context and verification, the same habits covered in [7 context engineering habits for developers](/context-engineering-habits-developers/) and [6 vibe coding habits](/vibe-coding-habits/). Teams facing the same review pressure internally can compare [AI code review tools and what they cost](/ai-code-review-tools-pricing/). GitHub's own guides are useful on both sides of the pull request: [setting guidelines for repository contributors](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors), [limiting interactions in your repository](https://docs.github.com/en/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository), and the [Open Source Guides](https://opensource.guide/how-to-contribute/). The White House's new voluntary accord also stresses review and controls; [here is what it means for developers](/trump-super-intelligence-order-developers/).

## The Takeaway

AI didn't make open source contributions bad. It made them cheap to produce, and the cost of reviewing didn't drop with it. The contributors who will keep getting welcomed are the ones who treat AI as a way to work faster on a problem they understand, not as a way to skip understanding it.

If you remember one thing: the AI can write the code, but you still have to be the one who vouches for it.

*Source for the maintainer policy changes and figures: [InfoQ, "AI 'Vibe Coding' Threatens Open Source as Maintainers Face Crisis."](https://www.infoq.com/news/2026/02/ai-floods-close-projects/)*
