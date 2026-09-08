---
title: "ChatGPT's Sol, Terra, and Luna Models: What You're Actually Talking To"
description: "Discover what ChatGPT's Sol, Terra, and Luna models actually do, and find out which one your subscription gives you access to."
category: "Chatbots"
date: 2026-09-03
readingTime: "7 min"
image: "./images/chatgpt-sol-terra-luna-models-explained.webp"
imageAlt: "ChatGPT Sol Terra Luna models comparison illustration"
---

Open ChatGPT's model picker today and something feels off. The names don't match what you remember. That's because ChatGPT's Sol Terra Luna models replaced the old single-flagship setup, and most users have no idea which one answers their questions every day.

This shift happened quietly. OpenAI didn't throw a press conference. It just split its lineup into three permanent tiers, each tuned for a different kind of work, and let the naming settle into place over the summer.

I dug through OpenAI's own documentation and a handful of independent breakdowns to figure out what changed, why it matters, and which model your subscription actually hands you. Here's the plain-English version.

## A Quick History of How We Got Here

For most of ChatGPT's existence, the choice was simple. One smart model, maybe a cheaper backup sitting next to it. That changed with GPT-5, and it changed again with GPT-5.5.

GPT-5.5 was built specifically for agentic work, tasks where the model doesn't just reply once but grinds through several steps on its own: writing code, running searches, checking its own output before handing it back. It's still live across every paid ChatGPT tier and the API, and it still holds up well for that kind of job.

Then, in the summer of 2026, OpenAI reshuffled the naming scheme again. GPT-5.6 entered limited preview on June 26 and rolled out generally on July 9. But this time, instead of one model wearing the GPT-5.6 badge, OpenAI split it three ways: Sol, Terra, and Luna.

## Sol, Terra, and Luna: The Three Tiers in Plain English

Picture the number, 5.6, as the generation. Sol, Terra, and Luna are the personalities living inside that generation. Each one can keep improving on its own schedule without OpenAI needing to slap a new version number on everything every few months.

**Sol** is the flagship. It handles hard reasoning, long autonomous runs, and heavy coding work, the jobs where you actually want the model to sit and think before it answers.

**Terra** sits in the middle. It's the everyday workhorse, priced far below the old GPT-5.5 flagship while matching its performance on most common tasks.

**Luna** is the fast, cheap option built for quick back-and-forth chat rather than deep reasoning.

All three share a 1.05 million-token context window and can output up to 128,000 tokens per response. That's enough room for a long document, a sprawling codebase, or a conversation that's gone on for hours. They also share the same knowledge cutoff: February 16, 2026.

## No More Choosing "Instant" vs. "Thinking"

Here's a change worth knowing even if you never think about model names. On August 6, 2026, OpenAI folded its old Instant and Thinking toggle into a single reasoning effort slider.

You no longer pick between a fast, shallow model and a slow, careful one. You pick how much effort the same model spends on your specific question, from quick and cheap all the way up to "ultra thinking," the top setting available on Sol.

In practice, this means you don't need to remember to flip a switch before asking something hard. If Sol takes longer than usual to answer, it's spending more of its effort budget on you, not swapping to a different model behind the scenes.

## Sol's Party Trick: Running Several Subagents at Once

Sol has one capability Terra and Luna don't get: ultra mode. Instead of working through a task as one long chain of thought, Sol can break the job into pieces and run several subagents in parallel that coordinate with each other.

OpenAI reported this pushed its score on a command-line coding benchmark from 88.8% to 91.9% ✅, a real jump for the kind of multi-file, multi-step coding work developers run into constantly.

It's not free, computationally speaking. Ultra mode costs more and runs slower per query than Sol's default setting. But for a messy refactor, or any task that genuinely benefits from attacking it from several angles at once, it's the closest thing ChatGPT offers to throwing more brainpower at a problem.

## Which Model Are You Actually Using?

Your plan tier decides this, and most people have never checked.

- 🆓 **Free** ($0/month): Defaults to Luna, with capped usage. As of late August 2026, ads also started appearing in the interface across European markets.
- 💵 **Go** ($8/month): Also defaults to Luna, but with a higher message ceiling, more image generations, and longer memory.
- 💰 **Plus** ($20/month): Defaults to Sol, with the reasoning effort slider unlocked.
- 🚀 **Pro** ($100 to $200/month): Gets Sol Pro, the highest usage limits, and access to ultra mode.
- 🏢 **Team / Business / Enterprise**: Built around Sol and Terra, with admin controls and data protections layered on top, priced per seat.

If you're on a free account, you're talking to Luna. It's quick and genuinely useful, but it's not the model behind OpenAI's hardest reasoning demos. If you're paying for Plus or higher, you already have Sol. The only thing you might be missing is knowing to nudge that reasoning slider up when a question actually deserves it.

## 📊 Sol vs. Terra vs. Luna at a Glance

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Feature</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">☀️ Sol</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🌍 Terra</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🌙 Luna</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">💰 Best for</td>
        <td style="padding:12px 16px;">Hard reasoning, long agentic runs, complex coding</td>
        <td style="padding:12px 16px;">Everyday tasks at a lower cost</td>
        <td style="padding:12px 16px;">Fast, casual chat</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">⏱️ Speed</td>
        <td style="padding:12px 16px;">Slower (thinks more)</td>
        <td style="padding:12px 16px;">Balanced</td>
        <td style="padding:12px 16px;">Fastest</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">📊 Context window</td>
        <td style="padding:12px 16px;">1.05M tokens</td>
        <td style="padding:12px 16px;">1.05M tokens</td>
        <td style="padding:12px 16px;">1.05M tokens</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">📤 Max output</td>
        <td style="padding:12px 16px;">128,000 tokens</td>
        <td style="padding:12px 16px;">128,000 tokens</td>
        <td style="padding:12px 16px;">128,000 tokens</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🧠 Reasoning slider</td>
        <td style="padding:12px 16px;">✅ Full range, up to "ultra thinking"</td>
        <td style="padding:12px 16px;">✅ Available</td>
        <td style="padding:12px 16px;">❌ Not applicable</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">🤖 Parallel subagents (ultra mode)</td>
        <td style="padding:12px 16px;">✅ Exclusive to Sol</td>
        <td style="padding:12px 16px;">❌</td>
        <td style="padding:12px 16px;">❌</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">💳 Default on plan</td>
        <td style="padding:12px 16px;">Plus, Pro, Team/Business/Enterprise</td>
        <td style="padding:12px 16px;">Team/Business/Enterprise</td>
        <td style="padding:12px 16px;">Free, Go</td>
      </tr>
    </tbody>
  </table>
</div>

## Frequently Asked Questions

### Is Sol the same as GPT-5.6?

Not exactly. GPT-5.6 is the generation, and Sol is one of three tiers inside it, alongside Terra and Luna. Sol is the flagship version built for hard reasoning and long agentic tasks, while Terra and Luna cover everyday use and fast chat.

### Which ChatGPT model do free users get?

Free and Go accounts both default to Luna, the fastest and cheapest tier. Luna handles everyday questions well but isn't built for deep reasoning or long autonomous coding runs the way Sol is.

### What does the reasoning effort slider actually do?

It replaces the old Instant versus Thinking toggle. Instead of switching models, you tell Sol how much effort to spend on a given answer, from quick responses up to "ultra thinking" for the hardest problems.

### Is ultra mode worth the extra cost?

For simple questions, no. For messy, multi-file coding tasks or problems that benefit from tackling several angles at once, ultra mode's parallel subagents can meaningfully improve results, according to OpenAI's own benchmark data.

## The Bottom Line

You don't need to memorize this lineup to use ChatGPT well. But it explains a lot: why the same question sometimes gets a fast, shallow answer and sometimes a much deeper one (that's the reasoning slider), why some accounts feel noticeably sharper than others (Sol versus Luna), and why a coding task that felt sluggish might actually be Sol quietly running several subagents to get it right.

Model names will keep shifting. That's been true since GPT-3.5. But the underlying pattern looks like it's here to stay: a flagship for hard problems, a workhorse for daily use, and a fast, cheap option for quick questions, all living under one name.

Next time someone asks which ChatGPT model they're using, you'll actually know the answer.

---

*Sources: [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/), [OpenAI — Previewing GPT-5.6 Sol](https://openai.com/index/previewing-gpt-5-6-sol/), [OpenAI Help Center](https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt), [AI Toolbox](https://www.ai-toolbox.co/chatgpt-models/chatgpt-models-explained-complete-comparison-2026), [MindStudio](https://www.mindstudio.ai/blog/what-is-gpt-5-6-sol-terra-luna-explained).*
