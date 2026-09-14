---
title: "We Gave DeepSeek and ChatGPT (Free) the Same Pomodoro Prompt. Here's What Each One Built Differently."
description: "Same exact prompt, both free tiers, zero follow-up edits. We tested both Pomodoro timers by hand — pause, resume, tab-switch — and found real differences in time drift handling, accessibility, and scope."
category: "Case Studies"
date: 2026-09-14
readingTime: "6 min"
image: "./images/deepseek-vs-chatgpt-pomodoro-timer.webp"
imageAlt: "Close-up editorial photo of two laptops side by side on a wooden desk, each screen showing a blurred countdown timer interface, with a small red tomato-shaped kitchen timer softly out of focus in the foreground"
draft: false
---

We gave DeepSeek's free tier and ChatGPT's free tier the exact same prompt, word for word, and didn't touch either output afterward: no follow-up edits, no "fix this," no second try. Just the raw first result from a single-file web app prompt, tested by hand — start, pause, resume, reset, and a tab switch to see what breaks.

Both widgets below are the actual, unedited code each model produced. Try them yourself before reading our take.

## The Prompt

```
Build a Pomodoro timer web app. Requirements:
- 25 minute work session, 5 minute short break, automatically alternates between them
- Start, Pause, and Reset buttons
- Visible countdown timer (MM:SS)
- Clear indicator of whether it's currently "Work" or "Break"
- Play a sound or show a visual alert when a session ends
- Single self-contained HTML file: inline CSS and JS, no external libraries or CDN links
- Clean, minimal design

Give me the complete code in one HTML file, nothing else.
```

## What ChatGPT Built

<iframe src="/demos/pomodoro-chatgpt.html" title="ChatGPT's Pomodoro timer, live and interactive" loading="lazy" style="width:100%;max-width:100%;height:560px;border:1px solid var(--line);border-radius:12px;background:#f5f5f5;"></iframe>

ChatGPT built exactly what the prompt described and stopped there. A single `setInterval` ticks the countdown down once a second, `Pause` clears it, `Start` creates a new one, `Reset` puts everything back to 25:00. It plays a three-note chime through the Web Audio API when a session ends, and it updates the browser tab title live, a small touch nobody asked for but a genuinely useful one if you're Pomodoro-ing in a background tab.

What it didn't do: touch anything outside the six bullet points. No progress bar, no keyboard shortcuts, no accessibility attributes beyond what a plain `<button>` gives you for free.

## What DeepSeek Built

<iframe src="/demos/pomodoro-deepseek.html" title="DeepSeek's Pomodoro timer, live and interactive" loading="lazy" style="width:100%;max-width:100%;height:560px;border:1px solid var(--line);border-radius:12px;background:#f4f5f7;"></iframe>

DeepSeek answered the same six bullet points, then kept going. The countdown isn't a naive decrement, it recalculates remaining time from `Date.now()` against a stored end timestamp every 100ms, which means it won't drift even if the tab gets throttled in the background, a real bug class in the "just do `timeLeft--` every second" approach ChatGPT used. It also shipped a progress bar, a color shift from red (work) to green (break), `Start`/`Pause` buttons that correctly disable themselves depending on state, `aria-live` regions for screen readers, a `prefers-reduced-motion` fallback, phone vibration on session end, and keyboard shortcuts (Space to start/pause, R to reset) that weren't in the prompt at all.

## Side by Side

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Behavior</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">ChatGPT (free)</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">DeepSeek (free)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Timer method</td>
        <td style="padding:12px 16px;"><code>setInterval</code>, decrements once/sec</td>
        <td style="padding:12px 16px;font-weight:600;"><code>Date.now()</code> recalculated every 100ms</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Pause / resume</td>
        <td style="padding:12px 16px;">Correct, no drift in our test</td>
        <td style="padding:12px 16px;">Correct, drift-resistant by design</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">End-of-session alert</td>
        <td style="padding:12px 16px;">3-note chime, updates tab title</td>
        <td style="padding:12px 16px;">Chime + phone vibration + card flash</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Button states</td>
        <td style="padding:12px 16px;">Always clickable</td>
        <td style="padding:12px 16px;font-weight:600;">Start/Pause disable based on state</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Accessibility</td>
        <td style="padding:12px 16px;">None beyond native buttons</td>
        <td style="padding:12px 16px;font-weight:600;"><code>aria-live</code>, reduced-motion support</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Keyboard shortcuts</td>
        <td style="padding:12px 16px;">None</td>
        <td style="padding:12px 16px;">Space to start/pause, R to reset</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">Scope vs. the prompt</td>
        <td style="padding:12px 16px;font-weight:600;">Matched it exactly</td>
        <td style="padding:12px 16px;">Went well beyond it, unasked</td>
      </tr>
    </tbody>
  </table>
</div>

## What We Couldn't Fully Verify

DeepSeek's UI showed a visible "thought for 17 seconds" indicator before returning code; ChatGPT's free tier doesn't expose that step at all, so there's no equivalent number to compare it to. Subjectively, ChatGPT's response felt faster start to finish, but we didn't use a stopwatch on it, so treat that as an impression, not a measurement. We're flagging it rather than papering over it: one model shows its work, the other doesn't, and that's worth knowing even without a clean number on both sides.

## The Bottom Line

Neither model shipped broken code. That's the first finding worth sitting with: the "AI writes buggy code" story is easy to reach for, and it just didn't happen here, on a task small enough to hold in your head. The real difference was scope. ChatGPT read six bullet points and delivered six bullet points, correctly, with nothing extra. DeepSeek read the same six bullet points and decided a Pomodoro timer also needed drift-resistant timing, accessibility support, and keyboard shortcuts, none of which we asked for.

Which one is "better" depends on what you're doing with it. Prototyping a UI idea you'll rewrite anyway? ChatGPT's tight, literal output is easier to read and strip down. Shipping something a real person will actually use for a full workday, tab-switching and backgrounding it the whole time? DeepSeek's unprompted attention to drift and accessibility is the difference between a toy and a tool.

Both timers are still live above. Pause one, switch to another tab for a minute, come back, and see which one still tells the truth.
