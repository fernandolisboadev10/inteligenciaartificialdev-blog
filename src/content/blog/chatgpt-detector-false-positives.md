---
title: "We Fed AI Detectors Human-Written Essays. They Flagged Real Students as Cheaters."
description: "AI detectors flagged an 1841 essay and a 2012 Wikipedia article as 'fake' in our own test. Here's the real data on false positives, and how to protect yourself."
category: "Tutorials"
date: 2026-09-08
readingTime: "9 min"
image: "./images/chatgpt-detector-false-positives.webp"
imageAlt: "Close-up editorial photo of a printed essay with sentences highlighted in red and a red pen on top, next to a laptop showing a blurred AI detection score"
---

In February 2026, a federal judge ordered Adelphi University to erase a plagiarism finding against a student named Orion Newby. His professor had run a World Civilizations paper through Turnitin's AI detector, which flagged it as AI-generated. Newby, who receives support through the university's program for students with learning and neurological disabilities, submitted independent checks from Grammarly and ZeroGPT that both called the essay human-written. Adelphi disciplined him anyway. It took a lawsuit and six figures in legal fees to fix it.

That case is now cited as the first time a student won a federal lawsuit over a false AI-plagiarism accusation. It's not an isolated glitch. To see how bad the underlying problem actually is, we ran our own test: real human writing, decades old, through a live AI detector, right alongside text we generated ourselves.

## What We Tested

We built four samples, each clearly labeled by what it actually is:

- **Sample A — Human, literary**: The opening of Ralph Waldo Emerson's essay "Self-Reliance," published in 1841. Unambiguously human, written 179 years before ChatGPT existed.
- **Sample B — Human, plain/encyclopedic**: The lead paragraph of Wikipedia's "Photosynthesis" article, pulled from a May 2012 revision, long before large language models were writing web content. Used under Wikipedia's CC BY-SA license.
- **Sample C — 100% AI-generated**: A paragraph explaining how immune memory works, written by Claude (Anthropic's AI model) for this test, with no editing.
- **Sample D — AI-generated, then edited**: The same paragraph as Sample C, rewritten with contractions, informal transitions, and looser sentence structure, simulating a student who drafted with AI and then rewrote it in their own voice.

We ran all four through Sapling's free AI detector, one of the more established tools in the space. We also tried GPTZero, ZeroGPT, and Quillbot's detector, but couldn't complete anonymous tests on any of them; each either required an account to see a result or blocked automated submission entirely, which is itself worth noting; these tools have gotten harder to casually verify since 2023, not easier.

## The Results

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Sample</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Actually written by</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Sapling's verdict</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">A — Emerson, 1841</td>
        <td style="padding:12px 16px;">Human</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--rose);">84.2% Fake</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">B — Wikipedia, 2012</td>
        <td style="padding:12px 16px;">Human</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--rose);">100.0% Fake</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">C — AI paragraph</td>
        <td style="padding:12px 16px;">AI</td>
        <td style="padding:12px 16px;font-weight:600;">100.0% Fake</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">D — AI, then edited</td>
        <td style="padding:12px 16px;">AI + human edit</td>
        <td style="padding:12px 16px;font-weight:600;">100.0% Fake</td>
      </tr>
    </tbody>
  </table>
</div>

"Fake" is Sapling's own label for text it believes is AI-generated. In our small test, it flagged both human samples as confidently as it flagged the actual AI text. It correctly caught our two AI paragraphs, including the lightly edited one, but that's not much comfort when it also called an 1841 essay "fake" with 84% confidence.

We want to be upfront about the limits of this: this is one detector, four samples, one sitting. It's not a scientific survey. It's a demonstration that a real, currently marketed detector can fail on real human writing in the most basic way possible, which is exactly the failure mode described in the research below, at far larger scale.

## Do AI Detectors Actually Work?

Our test is a small, ad-hoc echo of a much larger, well-documented problem.

A [Stanford study](https://www.sciencedirect.com/science/article/pii/S2666389923001307) published in the journal *Patterns* ran 91 real TOEFL essays written by non-native English speakers through seven commercial AI detectors. On average, **61.3% were flagged as AI-generated**. Essays from native English speakers were flagged just **5.1%** of the time. The researchers' explanation: non-native writing tends to use simpler, more predictable sentence structures, and detectors mistake that low variability for a machine's fingerprint, not a person's.

That bias compounds. [Common Sense Media](https://getcoai.com/news/ai-detection-tools-disadvantage-black-students-study-finds/) surveyed over a thousand US teenagers and found Black students were falsely accused of using AI at roughly **twice the rate** of white or Latino students, 20% versus 7% and 10%. Separate research has found similar disparities for neurodivergent students, including those with ADHD and autism.

Turnitin, the detector most widely deployed in US schools, originally claimed a **1% false positive rate**. In June 2023, the company acknowledged the real rate was higher, without publishing a corrected number. The [Washington Post's own testing](https://lawlibguides.sandiego.edu/c.php?g=1443311&p=10721367) found a false positive rate closer to 50% on a smaller sample. Even OpenAI, the company that popularized the AI text these tools try to catch, gave up on its own classifier: it correctly identified only 26% of AI-written text, incorrectly flagged human text as AI-written 9% of the time, and OpenAI [discontinued it entirely in July 2023](https://www.searchenginejournal.com/openai-shuts-down-flawed-ai-detector/492565/) for "low rate of accuracy."

The institutional response has followed the data. More than 25 universities, including MIT, Yale, NYU, UC Berkeley, and Vanderbilt, have banned or restricted AI detectors in academic misconduct cases. The University of Pittsburgh disabled Turnitin's AI detector outright, concluding the tool wasn't reliable enough to use without a substantial risk of false accusations.

## How to Protect Yourself From a False Positive

If you write your own work and you're still worried about getting flagged, a few habits genuinely help:

- **Write and save in a platform with version history.** Google Docs' version history, or any tool that timestamps your drafts, is far stronger evidence than a detector score in either direction. This is exactly the kind of evidence that helped Newby's case.
- **Keep your research trail.** Browser history, saved sources, and notes showing your work developing over time back up a "yes, I wrote this" claim better than anything after the fact.
- **Don't rely on a detector to defend yourself, and don't let one accuse you either.** If a detector flags your work, ask what other evidence is being used. A percentage score alone, on either side, isn't proof of anything, per the universities that have already reached that conclusion.
- **If you did use AI and edited it yourself, that editing may not save you.** Our Sample D shows a lightly rewritten AI paragraph got flagged just as hard as the unedited one. Light paraphrasing doesn't reliably beat these tools, in either direction, be that using it to hide AI use or worrying it will hide honest human writing.
- **Know your institution's actual policy**, not just its software. Many schools, following Pitt and Vanderbilt's lead, now require a detector score to be backed by other evidence before any disciplinary action. If yours doesn't say that explicitly, ask.

## FAQ

### Can AI detectors reliably tell human writing from AI writing?

Not consistently. Our own small test flagged two pieces of unambiguously human writing as "Fake" with as much confidence as actual AI text. Peer-reviewed research on much larger samples backs that up, with false positive rates ranging from roughly 5% up to 61% depending on the writer's background.

### Which AI detector is most accurate?

None of the major ones, including Turnitin, GPTZero, Sapling, and ZeroGPT, have published false positive rates low enough for universities to treat a score as standalone proof. More than 25 major universities now require additional evidence before acting on a detector's result.

### Why do detectors flag non-native English speakers and plain writing so often?

Detectors largely work by measuring "perplexity," how predictable a piece of text is. Simpler sentence structures, common in non-native English writing and in plain, information-dense prose like older Wikipedia articles, read as statistically predictable, which is the same signal detectors use to spot AI text. The writing style is the problem, not the writer.

### Does editing AI-generated text help it pass a detector?

Not reliably, at least against the detector we tested. Our lightly rewritten AI paragraph (Sample D) was flagged as confidently as the unedited version. Heavier rewriting can lower detection scores in some tools, but there's no consistent threshold, which cuts both ways: it's not a dependable way to hide AI use, and it's not a dependable way to prove you didn't use it either.

### What should I do if I'm falsely accused of using AI?

Gather independent evidence: document version history, research notes, browser history, and drafts. Point out, calmly, that detector scores alone aren't considered reliable proof by many universities' own current policies, and ask what additional evidence is being used against you before accepting any outcome.

## The Bottom Line

AI detectors aren't lying when they hand back a percentage, but that number is a lot less meaningful than it looks. In our own quick test, a 185-year-old essay by one of America's most famous writers got flagged as 84% fake, and a decade-old Wikipedia paragraph got flagged as 100% fake. Larger, peer-reviewed research shows the same failure at scale, hitting non-native English speakers, Black students, and neurodivergent students hardest. Universities that have actually studied their own detection tools have mostly reached the same conclusion: a score is a signal, not a verdict. Treat it that way, whether you're a student worried about being falsely accused or a teacher deciding what to do with a flag.

---

*Sources: [CBS New York — Orion Newby wins AI plagiarism lawsuit](https://www.cbsnews.com/newyork/news/orion-newby-adelphi-university-ai-plagiarism-accusations/), [Liang et al., "GPT detectors are biased against non-native English writers," Patterns (2023)](https://www.sciencedirect.com/science/article/pii/S2666389923001307), [Common Sense Media study via CO/AI](https://getcoai.com/news/ai-detection-tools-disadvantage-black-students-study-finds/), [Vanderbilt University — Guidance on AI Detection](https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/), [Search Engine Journal — OpenAI Shuts Down Flawed AI Detector](https://www.searchenginejournal.com/openai-shuts-down-flawed-ai-detector/492565/), [University of San Diego — The Problems with AI Detectors](https://lawlibguides.sandiego.edu/c.php?g=1443311&p=10721367). Live detection test run on [Sapling AI Detector](https://sapling.ai/ai-content-detector), September 2026.*
