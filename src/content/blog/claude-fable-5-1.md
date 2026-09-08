---
title: "Claude Fable 5.1 Explained: Benchmarks, Pricing, and What's New"
description: "Anthropic's Claude Fable 5.1 lands with a near-perfect SWE-bench score and a cheaper price tag. Here's what changed, what Mythos 5.1 is, and what it costs."
category: "Chatbots"
date: 2026-09-07
readingTime: "7 min"
image: "./images/claude-fable-5-1.webp"
imageAlt: "Glowing ornate book radiating warm light and neural-network patterns, illustrating Claude Fable 5.1"
---

Anthropic released Claude Fable 5.1 on September 1, 2026, and the headline number is hard to ignore: 95.0% on SWE-bench Verified, one of the highest scores any model has posted on that benchmark. It's generally available now across the Claude API, AWS, Google Cloud, and Microsoft Azure, callable as `claude-fable-5-1`.

If you're still on Fable 5, or you've just seen the name "Mythos 5.1" floating around and weren't sure how it relates, here's the plain-English rundown.

## What Claude Fable 5.1 Actually Is

Fable 5.1 is Anthropic's new flagship, built to push further on coding, knowledge work, and long-running problem-solving. Anthropic says it matches or beats Fable 5 at low and medium reasoning effort, and pulls noticeably ahead at higher effort tiers, the setting you'd reach for on a genuinely hard task rather than a quick question.

It ships with a 1 million token context window and can output up to 128,000 tokens per response, enough to hold a large codebase or a long research document in a single conversation.

## Fable 5.1 vs. Mythos 5.1: What's the Difference?

Here's the part that trips people up: Fable 5.1 and Mythos 5.1 are the same underlying model wearing two different outfits.

**Fable 5.1** is the version everyone gets, with Anthropic's production safety guardrails fully in place. **Mythos 5.1** is the same model with looser cyber and biology safeguards, and it's invite-only, restricted to vetted cybersecurity and life-sciences organizations that have a legitimate need for capabilities the standard safeguards would otherwise constrain.

That gap isn't just theoretical. On Terminal-Bench 4.0, Mythos 5.1 scores 60.9% against Fable 5.1's 55.8%, a real performance cost that comes from keeping the public model safer by default.

## The Benchmark Jump From Fable 5

The numbers move a lot in this release, not just around the edges:

- **Terminal-Bench-Science**: 24.7% → 52.6%, more than double Fable 5's score
- **Terminal-Bench 4.0** (coding): 42.0% → 55.8%
- **SWE-bench Verified**: 95.0%
- **SWE-bench Pro**: 81.2, a slim lead over both Fable 5 and Opus 5
- **ProofBench v1.1** (formal math proofs): a perfect 100%

The science and coding jumps stand out the most. Doubling a benchmark score in one release is unusual, and it signals Anthropic tuned this generation specifically for long, multi-step technical work rather than general chat polish.

## Pricing: Cheaper Despite Being Smarter

Fable 5.1 costs $10 per million input tokens and $50 per million output tokens, roughly 25% cheaper than Fable 5 overall, and up to 45% cheaper on heavily agentic workloads where the model is calling tools and iterating repeatedly.

The bigger change is cache pricing. Cached input tokens now cost $0.25 per million, down from $1.00 on Fable 5, a 75% cut. For anything that reuses a long system prompt or codebase context across many requests, that difference adds up fast.

## Fable 5.1 at a Glance

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Metric</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Fable 5</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Fable 5.1</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Mythos 5.1</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🧪 Terminal-Bench-Science</td>
        <td style="padding:12px 16px;">24.7%</td>
        <td style="padding:12px 16px;">52.6%</td>
        <td style="padding:12px 16px;">—</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">💻 Terminal-Bench 4.0</td>
        <td style="padding:12px 16px;">42.0%</td>
        <td style="padding:12px 16px;">55.8%</td>
        <td style="padding:12px 16px;">60.9%</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">✅ SWE-bench Verified</td>
        <td style="padding:12px 16px;">—</td>
        <td style="padding:12px 16px;">95.0%</td>
        <td style="padding:12px 16px;">—</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">📤 Cache-read price</td>
        <td style="padding:12px 16px;">$1.00/M</td>
        <td style="padding:12px 16px;">$0.25/M</td>
        <td style="padding:12px 16px;">$0.25/M</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">🔐 Access</td>
        <td style="padding:12px 16px;">General</td>
        <td style="padding:12px 16px;">General</td>
        <td style="padding:12px 16px;">Invite-only</td>
      </tr>
    </tbody>
  </table>
</div>

## Frequently Asked Questions

### What is Claude Fable 5.1?

It's Anthropic's newest flagship model, released September 1, 2026, focused on coding, knowledge work, and long-running problem-solving. It's available through the Claude API, AWS, Google Cloud, and Microsoft Azure.

### Is Claude Fable 5.1 the same as Mythos 5.1?

They're the same underlying model. Fable 5.1 runs with Anthropic's full production safeguards. Mythos 5.1 has looser cyber and biology restrictions and is invite-only, limited to vetted cybersecurity and life-sciences organizations.

### How much does Claude Fable 5.1 cost?

$10 per million input tokens and $50 per million output tokens, with cached input at $0.25 per million. That's about 25% cheaper than Fable 5 overall, and up to 45% cheaper on agentic workloads.

### What's Claude Fable 5.1's context window?

1 million tokens, with a maximum output of 128,000 tokens per response.

## The Bottom Line

Fable 5.1 isn't a minor point release. Doubling a science benchmark, pushing coding scores past 95% on SWE-bench Verified, and cutting cache prices by 75% all in the same launch is a lot to land at once. If you're building on Claude for coding or research-heavy agents, this is worth switching to; the performance gain and the price cut both point the same direction.

---

*Sources: [Anthropic — Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1), [VentureBeat — Claude Fable 5.1 and Mythos 5.1 arrive with a 75% cost reduction](https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads), [Vellum — Claude Fable 5.1 & Mythos 5.1 Benchmarks Explained](https://www.vellum.ai/blog/claude-fable-5-1-mythos-5-1-benchmarks-explained), [llm-stats.com — Claude Fable 5.1](https://llm-stats.com/models/claude-fable-5-1).*
