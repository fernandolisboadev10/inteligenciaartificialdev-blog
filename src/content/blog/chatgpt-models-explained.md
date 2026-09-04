---
title: "ChatGPT's Models Explained: Sol, Terra, and Luna in Plain English"
description: "ChatGPT isn't one model anymore — it's a tiered family. Here's what Sol, Terra, and Luna actually do, and which one you're using right now."
category: "Chatbots"
date: 2026-09-03
readingTime: "5 min"
image: "./images/chatgpt-models-explained.webp"
imageAlt: "Three glowing violet and rose spheres of different sizes, connected by orbiting light trails, representing tiered AI models"
---

If you've opened ChatGPT recently and noticed the model picker looks different than it used to, you're not imagining things. ChatGPT hasn't shipped a single flagship model in a while — it now runs on a family of three, each built for a different job. Here's what's actually going on under the hood, and which one you're probably using right now without realizing it.

## A quick recap: how we got here

For most of ChatGPT's life, picking a model was simple: there was one "smart" option and maybe a faster, cheaper one next to it. That changed with GPT-5, and again with GPT-5.5, which OpenAI aimed specifically at agentic tasks — the kind where the model doesn't just answer a question but works through a multi-step job on its own, writing code, running searches, and checking its own results along the way. GPT-5.5 is still available across every paid ChatGPT tier and the API, and it remains a solid choice for exactly that kind of autonomous, multi-tool work.

Then, in the summer of 2026, OpenAI restructured the naming again. GPT-5.6 entered a limited preview on June 26 and went generally available on July 9. But instead of shipping GPT-5.6 as a single model, OpenAI split it into three durable tiers: **Sol**, **Terra**, and **Luna**.

## The three tiers, in plain English

Think of the number — 5.6 — as the generation, and the name — Sol, Terra, or Luna — as the personality within that generation. Each tier can keep improving on its own schedule without forcing a whole new version number every time.

- **Sol** is the flagship. It's built for hard reasoning, long agentic runs, and complex coding — the tasks where you genuinely need the model to think for a while before answering.
- **Terra** sits in the middle: a lower-cost, everyday workhorse that OpenAI says performs competitively with the old GPT-5.5 flagship, at a fraction of the cost.
- **Luna** is the fastest and cheapest of the three, built for quick back-and-forth conversation rather than deep reasoning.

All three share the same 1.05 million-token context window and can output up to 128,000 tokens in a single response — plenty of room for a long document, a large codebase, or a sprawling conversation history. All three also share the same knowledge cutoff: February 16, 2026.

## No more picking "Instant" vs. "Thinking"

Here's a change worth knowing about even if you never think about model names: on August 6, 2026, OpenAI folded its old "Instant" and "Thinking" toggle into a single reasoning effort slider. Instead of choosing between a fast, shallow model and a slow, careful one, you now pick how much effort the *same* model should spend on a given answer — from quick and cheap up to "ultra thinking," the top setting available on Sol.

Practically, this means you don't need to remember to switch modes before asking a hard question. If Sol seems to be taking longer than usual, it's spending more of that effort budget on your behalf — not switching to a different model behind the scenes.

## Sol's party trick: parallel subagents

Sol has one capability the other two tiers don't: **ultra mode**, which lets it break a task into pieces and run several subagents in parallel that coordinate with each other, instead of working through everything as one long, linear chain of thought. OpenAI reported this lifted its score on a command-line coding benchmark from 88.8% to 91.9% — a meaningful jump for exactly the kind of multi-file, multi-step coding task developers actually run into.

It isn't free computationally — ultra mode is slower and more expensive per query than Sol's default setting — but for a gnarly refactor or a task that genuinely benefits from working several angles at once, it's the closest thing ChatGPT currently offers to "throw more brainpower at this."

## Which model are you actually using?

This is where your plan tier matters more than most people realize:

- **Free** ($0/month): defaults to Luna, with capped usage and, as of late August 2026, ads showing up in the interface across European markets.
- **Go** ($8/month): also defaults to Luna, but with a higher message ceiling, more image generations, and longer memory.
- **Plus** ($20/month): defaults to Sol, with the reasoning effort slider available.
- **Pro** ($100–200/month, depending on tier): gets Sol Pro, plus the highest usage limits and access to ultra mode.
- **Team / Business / Enterprise**: built around Sol and Terra, with added admin controls and data protections, priced per seat.

In short: if you're on a free account, you're talking to Luna — quick and capable, but not the model behind OpenAI's hardest reasoning demos. If you're paying for Plus or above, you already have access to Sol; the only thing you might be missing is knowing to nudge the reasoning slider up when a question actually calls for it.

## The practical takeaway

You don't need to memorize this lineup to use ChatGPT well, but it explains a few things that used to be confusing: why the same question can get a fast, shallow answer one day and a far more thorough one the next (the reasoning slider), why some accounts feel noticeably smarter than others (Sol vs. Luna), and why a coding task that felt sluggish might actually be Sol quietly running several subagents in the background to get it right.

Model names will almost certainly keep shifting — that's been the one constant since GPT-3.5. But the underlying pattern looks likely to stick around: a flagship for hard problems, a workhorse for everyday use, and a fast, cheap option for quick questions, all sitting under one familiar name.

---

*Sources: [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/), [OpenAI — Previewing GPT-5.6 Sol](https://openai.com/index/previewing-gpt-5-6-sol/), [OpenAI Help Center](https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt), [AI Toolbox](https://www.ai-toolbox.co/chatgpt-models/chatgpt-models-explained-complete-comparison-2026), [MindStudio](https://www.mindstudio.ai/blog/what-is-gpt-5-6-sol-terra-luna-explained).*
