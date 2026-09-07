---
title: "12 Custom ChatGPT Commands That Turn It Into a Study Tool"
description: "Set up 12 slash-style commands once, and ChatGPT stops giving generic answers and starts building mind maps, flashcards, and memory palaces on demand. Copy-paste ready."
category: "Prompt Engineering"
date: 2026-09-07
readingTime: "5 min"
image: "./images/chatgpt-study-commands.webp"
imageAlt: "Confident man using a laptop at night, surrounded by glowing neon labels for ChatGPT study commands like /mindmap, /flashcards, and /quizboard"
---

Typing a fresh, detailed prompt every time you want ChatGPT to quiz you or summarize a chapter gets old fast. There's a simpler pattern that's been circulating among students on social media: teach the model a handful of short commands once, then trigger them with a single line for the rest of your study session.

The idea is straightforward. You paste one setup message that defines what each command means. From that point on, typing something like `/flashcards Mitosis vs Meiosis` gets you a formatted flashcard set instead of a wall of prose you have to reshape yourself.

Below is a working setup prompt with 12 commands, plus a usage example for each one. Paste the setup once at the start of a chat (or save it as a custom instruction / Project instruction if your plan supports it), then use the short commands for every topic you're studying.

## The setup prompt

Paste this once, at the top of a new chat:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">setup.txt</span>
    <button class="copy-btn" data-copy-target="prompt-setup">Copy</button>
  </div>
  <pre id="prompt-setup"><code>You are my personal study assistant. From now on, whenever a message starts with one of the commands below, respond using that exact format instead of a normal answer. Ignore this instruction for any message that doesn't start with a command.

/mindmap [topic] -> Build a text-based mind map: one central idea, 4-6 main branches, 2-3 sub-points under each branch.
/cheatsheet [topic] -> One-page cheat sheet: key definitions, formulas, and facts only. No long explanations.
/explodedview [topic] -> Break the topic into its individual parts, explaining what each one does and how it connects to the rest.
/blueprint [topic] -> Step-by-step learning path to master this topic from zero, in the right order, with rough time estimates.
/flowchart [topic] -> Turn the process into a text flowchart using arrows: Start -> Step -> Decision -> End.
/flashcards [topic] -> Generate 10 question-and-answer flashcards, one pair per line, formatted as Q: / A:.
/diagram [topic] -> Describe a labeled diagram showing how the parts of this topic relate to each other.
/timeline [topic] -> List key events or stages in chronological order, one line of context each.
/comparison [A] vs [B] -> Comparison table with at least 5 criteria, showing differences and similarities.
/conceptmap [topic] -> Map how the concepts inside this topic connect to and influence each other.
/memorypalace [topic] -> Turn the key facts into a memory palace: assign each one to a vivid spot in an imaginary house, in order.
/quizboard [topic] -> 10-question self-test mixing multiple choice, true/false, and short answer, with the answer key at the end.

Keep every response focused on studying and memorization, not general explanations, unless I explicitly ask for one.</code></pre>
</div>

Once that's in, here's what each command is actually good for.

## /mindmap

Use this when you need the big picture before the details — how a topic branches out and where everything sits relative to everything else.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-mindmap">Copy</button>
  </div>
  <pre id="prompt-mindmap"><code>/mindmap Photosynthesis</code></pre>
</div>

## /cheatsheet

Best the night before a test, when you already understand the material and just need every formula and definition in one place, no fluff.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-cheatsheet">Copy</button>
  </div>
  <pre id="prompt-cheatsheet"><code>/cheatsheet Organic Chemistry Reactions</code></pre>
</div>

## /explodedview

Good for anything made of interacting parts — a cell, an engine, a piece of legislation. It forces the model to name every component instead of describing the topic as one blob.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-explodedview">Copy</button>
  </div>
  <pre id="prompt-explodedview"><code>/explodedview How a Neural Network Works</code></pre>
</div>

## /blueprint

For when you're starting a subject from absolute zero and don't know what order to learn things in. It gives you a syllabus instead of an answer.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-blueprint">Copy</button>
  </div>
  <pre id="prompt-blueprint"><code>/blueprint Learn Python From Scratch</code></pre>
</div>

## /flowchart

Ideal for processes with steps and decision points — cycles, algorithms, workflows. Text arrows are enough to see the shape of it without drawing anything.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-flowchart">Copy</button>
  </div>
  <pre id="prompt-flowchart"><code>/flowchart The Water Cycle</code></pre>
</div>

## /flashcards

The workhorse for spaced repetition. Ask for these regularly on the same topic and you'll get slightly different angles each time, which is more useful than memorizing one fixed set.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-flashcards">Copy</button>
  </div>
  <pre id="prompt-flashcards"><code>/flashcards French Revolution Causes</code></pre>
</div>

## /diagram

A looser version of /explodedview — use it when you care more about relationships than an exhaustive part list.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-diagram">Copy</button>
  </div>
  <pre id="prompt-diagram"><code>/diagram The Human Immune System</code></pre>
</div>

## /timeline

Order matters for this one — history, project phases, biological stages. It keeps you from mixing up sequence with importance.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-timeline">Copy</button>
  </div>
  <pre id="prompt-timeline"><code>/timeline World War II Key Events</code></pre>
</div>

## /comparison

Whenever two concepts get confused with each other, this puts them side by side instead of describing each one in a separate paragraph you have to cross-reference yourself.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-comparison">Copy</button>
  </div>
  <pre id="prompt-comparison"><code>/comparison Mitosis vs Meiosis</code></pre>
</div>

## /conceptmap

Similar to /mindmap but focused on cause-and-effect and influence rather than hierarchy — useful for subjects like economics where everything pushes on everything else.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-conceptmap">Copy</button>
  </div>
  <pre id="prompt-conceptmap"><code>/conceptmap Supply and Demand</code></pre>
</div>

## /memorypalace

The classic loci technique, generated for you. Best for ordered lists of facts that are otherwise hard to memorize by rote — nerve names, bones, capital cities.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-memorypalace">Copy</button>
  </div>
  <pre id="prompt-memorypalace"><code>/memorypalace The 12 Cranial Nerves</code></pre>
</div>

## /quizboard

Run this after everything else to check what actually stuck. Mixed question formats catch gaps that flashcards alone tend to miss.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">example</span>
    <button class="copy-btn" data-copy-target="prompt-quizboard">Copy</button>
  </div>
  <pre id="prompt-quizboard"><code>/quizboard The Periodic Table</code></pre>
</div>

## Making it stick

The setup prompt only lasts for the current chat unless you save it somewhere permanent. If you're on ChatGPT Plus, paste it into **Custom Instructions** (Settings → Personalization) or into a **Project's** instructions so every new chat inside that project already knows the commands. Claude and Gemini support the same idea through their own persistent instructions or "Projects" features — the prompt itself doesn't need to change, just where you save it.

You don't have to use all 12. Most people settle into three or four they reach for constantly — usually /flashcards, /cheatsheet, and whichever one matches how they naturally think, mind maps for visual learners, timelines for anyone studying history or processes. Try them on your next reading assignment and keep the ones that actually change how you review.
