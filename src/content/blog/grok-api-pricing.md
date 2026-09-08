---
title: "xAI's Grok API Is Cheaper Than GPT-6 Astra and Claude Opus 5. We Ran the Numbers."
description: "Grok's flagship model costs a fraction of GPT-6 Astra and undercuts Claude Opus 5. Here's the real per-token math, a working code example, and where the cheap price stops being a deal."
category: "AI Coding Tools"
date: 2026-09-08
readingTime: "7 min"
image: "./images/grok-api-pricing.webp"
imageAlt: "Close-up editorial photo of a laptop screen showing a blurred code editor and a token cost comparison chart, with US dollar bills and coins softly out of focus on the desk in the foreground"
---

Every API pricing page looks reasonable on its own. Line them up side by side, though, and the gap between xAI's Grok API and the two biggest names in the space gets hard to ignore. We pulled the current per-token rates for Grok, OpenAI, and Anthropic's API lineups and ran the same workload through all three to see what it actually costs in dollars, not just cents-per-million-tokens on a marketing page.

Short version: at the flagship tier, Grok 4.6 is roughly 6x cheaper than GPT-6 Astra and 3x cheaper than Claude Opus 5 for the same input/output mix. It's not the cheapest model on the market at every tier, but at the top end, the gap is bigger than most developers probably assume.

## What the Grok API Actually Is

The Grok API is xAI's developer platform for calling Grok models programmatically, separate from the Grok chatbot app and separate from X Premium. You don't need an X subscription to use it, and paying for X doesn't give you API credits. It's billing you'd recognize from any other LLM provider: pay per token, metered per request, billed monthly or prepaid through console credits.

The API is OpenAI-SDK compatible, which matters more than it sounds. If you already have code calling OpenAI's API, switching to Grok is usually a base URL and API key swap, not a rewrite.

## How to Get a Grok API Key

1. Go to [console.x.ai](https://console.x.ai) and sign up with an email. No waitlist, no X Premium requirement.
2. New accounts get **$25 in free credits** to start testing without a card.
3. In the console sidebar, open **API Keys** → **Create API Key**.
4. Copy the key immediately. It starts with `xai-` and xAI doesn't store the plaintext value, so if you lose it, you generate a new one.

Rate limits scale with how much you've spent since January 1, 2026: new accounts start around 150 requests/second and 50M tokens/minute, climbing to 500 RPS and 100M TPM once you cross $5,000 in cumulative spend. Fine for prototyping and most production apps; something to plan around if you're building at real scale.

## A Working Code Example

Because the API mirrors OpenAI's SDK, this is the entire integration if you're using Python:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">grok_example.py</span>
    <button class="copy-btn" data-copy-target="prompt-python">Copy</button>
  </div>
  <pre id="prompt-python"><code>from openai import OpenAI
client = OpenAI(
    api_key="your_xai_api_key",
    base_url="https://api.x.ai/v1",
)
response = client.responses.create(
    model="grok-4.6",
    input="Explain the difference between a race condition and a deadlock.",
)
print(response.output_text)</code></pre>
</div>

Or with plain curl, if you're just testing the key works:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">terminal</span>
    <button class="copy-btn" data-copy-target="prompt-curl">Copy</button>
  </div>
  <pre id="prompt-curl"><code>curl https://api.x.ai/v1/responses \
  -H "Authorization: Bearer $XAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.6",
    "input": "Explain the difference between a race condition and a deadlock."
  }'</code></pre>
</div>

Grok supports function calling and structured outputs, so agentic and tool-use workflows built for OpenAI or Claude's function-calling format port over with minor adjustments, not a redesign.

## The Price Table

Here's what each provider charges per million tokens at three comparable tiers: flagship, mid-tier/efficient, and budget/coding-specific.

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Tier</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧠 Model</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📥 Input / 1M</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📤 Output / 1M</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;" rowspan="3">🚀 Flagship</td>
        <td style="padding:12px 16px;">Grok 4.6</td>
        <td style="padding:12px 16px;">$2.00</td>
        <td style="padding:12px 16px;">$6.00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">GPT-6 Astra</td>
        <td style="padding:12px 16px;">$10.00</td>
        <td style="padding:12px 16px;">$50.00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Claude Opus 5</td>
        <td style="padding:12px 16px;">$5.00</td>
        <td style="padding:12px 16px;">$25.00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;" rowspan="3">⚙️ Mid-tier</td>
        <td style="padding:12px 16px;">Grok 4.3</td>
        <td style="padding:12px 16px;">$1.25</td>
        <td style="padding:12px 16px;">$2.50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">GPT-5.6 Terra</td>
        <td style="padding:12px 16px;">$2.00</td>
        <td style="padding:12px 16px;">$12.00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Claude Sonnet 5</td>
        <td style="padding:12px 16px;">$2.00</td>
        <td style="padding:12px 16px;">$10.00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;" rowspan="3">💸 Budget / coding</td>
        <td style="padding:12px 16px;">Grok Build 0.1</td>
        <td style="padding:12px 16px;">$1.00</td>
        <td style="padding:12px 16px;">$2.00</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;">GPT-5.6 Luna</td>
        <td style="padding:12px 16px;">$0.20</td>
        <td style="padding:12px 16px;">$1.20</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">Claude Haiku 4.5</td>
        <td style="padding:12px 16px;">$1.00</td>
        <td style="padding:12px 16px;">$5.00</td>
      </tr>
    </tbody>
  </table>
</div>

*Grok's flagship and mid tiers roughly double in price once a single request's prompt crosses 200K tokens (Grok 4.6 goes to $4/$12); GPT-6 Astra similarly steps up past 272K input tokens.*

## We Ran the Numbers

Rates per million tokens don't mean much until you attach them to a real workload. Say you're running an AI coding assistant in production that processes **10 million input tokens and 2 million output tokens in a month** — a realistic load for a small team's internal tool with steady daily use.

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Tier</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧠 Model</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">💵 Monthly cost</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🚀 Flagship</td>
        <td style="padding:12px 16px;">Grok 4.6</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">$32</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Claude Opus 5</td>
        <td style="padding:12px 16px;">$100</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">GPT-6 Astra</td>
        <td style="padding:12px 16px;">$200</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">⚙️ Mid-tier</td>
        <td style="padding:12px 16px;">Grok 4.3</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">$17.50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Claude Sonnet 5</td>
        <td style="padding:12px 16px;">$40</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">GPT-5.6 Terra</td>
        <td style="padding:12px 16px;">$44</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">💸 Budget / coding</td>
        <td style="padding:12px 16px;">GPT-5.6 Luna</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">$4.40</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Grok Build 0.1</td>
        <td style="padding:12px 16px;">$14</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Claude Haiku 4.5</td>
        <td style="padding:12px 16px;">$20</td>
      </tr>
    </tbody>
  </table>
</div>

Two things jump out. First, at the flagship tier, Grok 4.6 isn't just cheaper, it's in a different price class: $32 versus $100 for Claude Opus 5 and $200 for GPT-6 Astra for identical usage. Second, Grok isn't automatically the cheapest option everywhere — GPT-5.6 Luna undercuts every Grok tier at the budget end, because Luna is OpenAI's deliberately stripped-down, high-volume model. Cheap has a ceiling and a floor at every provider; Grok's advantage is concentrated at the top.

## Where Grok Actually Wins or Loses

**It wins on price-to-capability at the top end.** Third-party evaluations from Vals AI put Grok 4.6 around 95.6% on SWE-bench Verified, in the same range as Claude Opus 5's reported ~96% and well ahead of what most mid-tier models score, at a fraction of Opus 5's price. If your workload leans on a flagship-tier model anyway, Grok is the cheapest way into that performance bracket right now.

**It wins on real-time data access.** Grok's API has built-in web and X search as a callable tool ($5 per 1,000 calls), which OpenAI and Anthropic don't offer natively in the same way — you'd normally wire up your own search integration. For anything that needs current information mid-conversation, that's a real convenience, not just a pricing footnote.

**It loses on ecosystem maturity.** OpenAI and Anthropic have years more of third-party tooling, framework integrations, eval libraries, and Stack Overflow answers built around them. Grok's OpenAI-compatible API closes most of that gap for basic usage, but for anything relying on provider-specific SDK features, you'll find fewer examples.

**It loses at the very bottom of the price range.** If your workload is high-volume, low-complexity (classification, simple extraction, short completions), GPT-5.6 Luna or a similarly stripped-down model will beat Grok on pure cost.

## When It's Worth Switching

If you're running flagship-tier workloads and pricing is a real line item, not an afterthought, testing Grok 4.6 against your current provider is a low-risk move: $25 in free credits covers a meaningful evaluation before you commit a card. If your app already leans on OpenAI- or Anthropic-specific tooling (Assistants-style features, Claude's Model Context Protocol integrations, provider-specific fine-tuning), the migration cost may outweigh the per-token savings unless you're at a scale where the price gap adds up to real money.

For anyone building a coding agent or vibe-coding workflow evaluating [Gemini's Antigravity](/google-antigravity) or Claude-based tooling on model choice, Grok is now a legitimate line item in that comparison, not just a curiosity.

## FAQ

### Is the Grok API free?

Not ongoing, but new accounts get $25 in free credits, which is enough to run real evaluation workloads before you pay anything. After that, it's pay-per-token like every other major provider.

### Do I need X Premium or SuperGrok to use the API?

No. The Grok API, X Premium, and SuperGrok are billed completely separately. You can use the API with zero X subscription.

### Is the Grok API compatible with OpenAI's SDK?

Yes. Point the OpenAI Python or Node SDK at `https://api.x.ai/v1` with your xAI key, and most existing OpenAI integrations work with minimal changes.

### Which Grok model should I use for coding?

Grok Build 0.1 is xAI's coding-specific model at $1/$2 per million tokens, cheaper than the general-purpose Grok 4.6 for that use case. For the highest raw coding benchmark scores, Grok 4.6 itself is the stronger (and pricier) option.

## The Bottom Line

The headline number holds up under real math: at the flagship tier, Grok's API is dramatically cheaper than GPT-6 Astra and meaningfully cheaper than Claude Opus 5, without a corresponding drop in benchmark performance. It's not a universal discount, though. Budget-tier workloads have cheaper options elsewhere, and the ecosystem around Grok is still catching up to the two incumbents. If your use case sits at the top end where model quality actually matters, it's worth the twenty minutes it takes to burn through the free credits and see the price difference on your own workload.

---

*Sources: [xAI — API Docs: Models & Pricing](https://docs.x.ai/docs/models), [xAI — API Quickstart](https://docs.x.ai/developers/quickstart), [xAI — Grok API](https://x.ai/api), [Vals AI — Grok 4.6 SWE-bench results](https://benchlm.ai/models/grok-4-6), [BenchLM — Claude API Pricing](https://benchlm.ai/anthropic/api-pricing), [BenchLM — OpenAI API Pricing](https://benchlm.ai/openai/api-pricing).*
