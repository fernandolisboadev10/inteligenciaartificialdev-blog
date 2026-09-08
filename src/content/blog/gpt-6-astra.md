---
title: "GPT-6 Astra Explained: OpenAI's New Flagship, Benchmarks, and Price"
description: "OpenAI's GPT-6 Astra launched September 2026 with computer-use skills and an AGI claim from Greg Brockman. Here's what it does, what it costs, and the safety trade-off."
category: "Chatbots"
date: 2026-09-07
readingTime: "8 min"
image: "./images/gpt-6-astra.webp"
imageAlt: "Glowing translucent robotic hand reaching toward a holographic browser and code interface, illustrating GPT-6 Astra's computer-use capabilities"
---

OpenAI announced GPT-6 Astra on September 3, 2026, calling it "the most intelligent and aligned model in the world." A day later, it started rolling out to paid ChatGPT users. It's the first OpenAI model that President Greg Brockman has publicly floated as a possible early glimpse of AGI, which is either the most important AI headline of the year or the most overused phrase in the industry, depending who you ask.

Here's what actually shipped, separate from the hype.

## What Makes Astra Different: It Operates a Computer

Every previous GPT release got better at answering questions and writing code. Astra's bigger shift is that it's built to operate a computer the way a person would.

OpenAI says Astra is state-of-the-art at computer use, browsing, software engineering, cybersecurity, science, professional work, and 3D/CAD-style tasks. In practice, that means it can inspect what's on a screen, build a working website, generate a document, run its own QA checks, work inside a coding environment, analyze scientific data, and, in one of OpenAI's own examples, model a house in Blender and turn it into a walkable Unreal Engine 5 scene without a person doing the manual steps in between.

That's a meaningfully different pitch than "smarter chatbot." Astra is positioned as something you hand a goal to, not just a prompt.

## The AGI Claim, in Context

Greg Brockman said Astra could eventually be seen as the arrival of artificial general intelligence. OpenAI itself described the release as a "generational leap" in cybersecurity, professional work, software engineering, and science.

That's a claim worth treating as marketing until independent evaluation catches up, not as settled fact. What is measurable right now is the benchmark and safety data OpenAI published alongside the model, which is substantial enough on its own without needing the AGI framing.

## The Cybersecurity Trade-Off

This is the part that got as much coverage as the capability claims. Astra is the first OpenAI model to reach the **Critical** level of cybersecurity capability under the company's Preparedness Framework.

In practical terms, OpenAI says that with the right tools and access, Astra can find previously unknown security flaws and develop new ways to exploit them across well-protected systems, without a person guiding each individual step. That's a significant jump from "helps a security researcher work faster" to "can operate semi-independently on offensive security tasks."

Because of that, the public version of Astra is deliberately restricted: it rejects certain prompts in sensitive cybersecurity areas, and the full cyber-capable version is gated behind a trusted-access program for vetted organizations, similar in spirit to how Anthropic handles Claude Mythos 5.1.

## Context Window and Pricing

Astra runs a 1,050,000 token context window with a maximum output of 128,000 tokens, enough room for a large repository or a long document in one pass.

Pricing is tiered:

- **Standard**: $10 per million input tokens, $50 per million output tokens
- **Cached input**: $1 per million tokens
- **Batch processing**: half the standard rate
- **Fast mode**: 2x the standard rate
- **Above 272,000 input tokens**: pricing steps up to $20 per million input and $75 per million output

That standard rate is about 2.5 times what GPT-5.6 Sol costs, which tracks with a model OpenAI is positioning as its most capable rather than its most efficient.

## Rollout: Who Gets It First

Access is staged, not instant for everyone:

1. A limited set of trusted organizations got access on day one (September 3)
2. ChatGPT Plus, Pro, Business, and Enterprise subscribers followed over the next several days
3. The OpenAI API and AWS availability rolled out alongside the consumer tiers
4. The cyber-sensitive capabilities stay behind a separate trusted-access program indefinitely

If you're on a paid ChatGPT plan and don't see Astra yet, that's expected. It's a phased rollout, not a broken feature.

## GPT-6 Astra vs. GPT-5.6 Sol

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Feature</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🚀 GPT-6 Astra</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">☀️ GPT-5.6 Sol</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">📅 Released</td>
        <td style="padding:12px 16px;">September 3, 2026</td>
        <td style="padding:12px 16px;">2026 (earlier GPT-5.6 generation)</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">📊 Context window</td>
        <td style="padding:12px 16px;">1.05M tokens</td>
        <td style="padding:12px 16px;">1.05M tokens</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🖥️ Computer use / browsing</td>
        <td style="padding:12px 16px;">✅ Core strength</td>
        <td style="padding:12px 16px;">Limited</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">🔐 Cybersecurity level</td>
        <td style="padding:12px 16px;">Critical (Preparedness Framework)</td>
        <td style="padding:12px 16px;">Lower tier</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">💰 Standard price</td>
        <td style="padding:12px 16px;">$10 in / $50 out per million tokens</td>
        <td style="padding:12px 16px;">~2.5x cheaper</td>
      </tr>
    </tbody>
  </table>
</div>

## Frequently Asked Questions

### Is GPT-6 Astra available now?

It's rolling out in stages. Trusted organizations got it first on September 3, 2026, with ChatGPT Plus, Pro, Business, and Enterprise plans, plus the API and AWS, following over the next several days.

### How much does GPT-6 Astra cost?

$10 per million input tokens and $50 per million output tokens at the standard rate, roughly 2.5x GPT-5.6 Sol's price. Requests over 272,000 input tokens bill at a higher $20/$75 tier, and Fast mode costs double the standard rate.

### Is GPT-6 Astra actually AGI?

No independent consensus says so. OpenAI's Greg Brockman raised the possibility publicly, but that's a claim from the company, not a verified benchmark result. Treat it as a bold marketing framing around a genuinely capable model, not a settled classification.

### Why is GPT-6 Astra's cybersecurity capability a concern?

It's the first OpenAI model to hit the Critical tier under OpenAI's Preparedness Framework, meaning it can find and exploit unknown security flaws with minimal human guidance. That's why the public release is restricted and the full capability is gated behind a trusted-access program.

## The Bottom Line

GPT-6 Astra is less about better answers and more about handing off entire tasks: operating software, verifying its own work in a browser, and handling professional and scientific workflows end to end. That capability jump is real, and so is the safety trade-off that came with it, which is why this is the first OpenAI model release that reads as much like a security story as a product launch.

Whether it deserves the AGI label is a separate question from whether it's useful. For anyone doing serious agentic or computer-use work, it's worth testing on your own tasks before deciding, regardless of how the marketing frames it.

---

*Sources: [OpenAI — GPT-6 Astra: A new generation of intelligence](https://openai.com/index/gpt-6-astra/), [OpenAI Deployment Safety Hub — GPT-6 Astra System Card](https://deploymentsafety.openai.com/gpt-6-astra), [CNBC — OpenAI announces rollout of GPT-6 Astra model](https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html), [Axios — OpenAI releases new model GPT-6 Astra, says it may represent AGI](https://www.axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman), [Yotta Labs — GPT-6 Astra: Release Date, Pricing, Benchmarks, and Rollout](https://www.yottalabs.ai/post/gpt-6-release-date-rumors-what-is-known-2026).*
