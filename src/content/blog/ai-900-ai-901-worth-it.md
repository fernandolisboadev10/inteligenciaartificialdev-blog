---
title: "Is the AI-900 Worth It in 2026? It Was Replaced by the AI-901, Here's What That Means"
description: "The AI-900 retired on June 30, 2026, and the Azure AI Fundamentals certification now runs through the AI-901. Here's what the exam covers, how hands-on it is, how hard to expect it to be, and who actually benefits."
category: "Career"
date: 2026-10-12
translation: "ai-900-ai-901-vale-a-pena"
related: ["vibe-coding-habits", "context-engineering-habits-developers", "ai-coding-tools-case-studies"]
readingTime: "8 min"
image: "./images/ai-900-ai-901-worth-it.webp"
imageAlt: "Editorial photo of a study desk with an open laptop showing a blurred cloud dashboard, a handwritten notebook and a coffee mug, natural window light"
---

**Short answer:** you can't take the **AI-900** anymore. Microsoft retired it on **June 30, 2026** and replaced it with the [**AI-901**](https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/). The credential itself kept its name, [*Microsoft Certified: Azure AI Fundamentals*](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/), so what changed is the exam you sit. It's worth it if you're early in your AI career and want a structured path through Microsoft's AI stack. It's not worth it if you expect a certificate alone to land a job, or if you already ship AI apps for a living.

If you've searched "AI-900" lately, you've probably hit a pile of outdated courses, practice tests, and videos that treat the old exam as current. This guide pulls together what Microsoft actually publishes about the current exam, what changed, and who it makes sense for.

**A note on method:** this is based on Microsoft's own pages ([certification](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/), [exam](https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/), [study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901), and [exam policies](https://learn.microsoft.com/en-us/credentials/certifications/frequently-asked-questions)), not on a first-person exam report. We left out the exam price on purpose: it varies by country and region, and Microsoft shows the figure at scheduling.

## What happened to the AI-900

Microsoft's [**Azure AI Fundamentals** certification page](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/) now lists one required exam: the **AI-901**. The AI-900 is gone, and Microsoft's retirement note says that after the retirement date you should follow the related certification's requirements.

In practice:

- **The credential name is the same.** Pass the AI-901 and you earn *Azure AI Fundamentals*, the same credential the AI-900 led to.
- **The exam is different.** The content was rewritten, and the English version was updated on April 15, 2026.
- **If you already hold the AI-900:** this change matters for people who haven't taken it yet. Check your Microsoft Learn profile to see what's on your transcript.

## What the AI-901 covers

Per the [official study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901), the exam splits into two blocks:

| Block | Weight | What's in it |
|---|---|---|
| **Identify AI concepts and capabilities** | 40–45% | Responsible AI (fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability), how generative models work, picking a model and its configuration, workloads like text, speech, vision, and information extraction |
| **Implement AI solutions by using Microsoft Foundry** | 55–60% | Writing system and user prompts, deploying a model, building a chat client with the Foundry SDK, creating and testing a single agent, apps for text, speech, vision, and information extraction |

Responsible AI is a real section, not filler. If fairness problems feel abstract, [why AI detectors flag real students as cheaters](/chatgpt-detector-false-positives/) is a concrete example. And writing good system and user prompts is a skill of its own: see [Prompt Engineering Isn't Dead](/context-engineering-habits-developers/).

That second block is the story: **more than half the exam is implementation.** The guide asks you to build a lightweight chat client with the Foundry SDK, create and test an agent, and extract information from documents with Content Understanding. Microsoft also says candidates should know **Python syntax** and be **familiar with Azure resources**.

The old AI-900 leaned on concepts. The AI-901 expects you to have built something.

## How hard is it?

Microsoft doesn't publish a pass rate, so any number you see is unofficial. Here's what the published material supports:

- **The passing score is 700.**
- **It's not a memorization exam.** With 55–60% on implementation, reading theory alone is a risky plan for the Foundry, SDK, and agent questions.
- **If you already write Python and call AI APIs,** the practical block is mostly familiar territory. Your work is learning the Azure names and workflow.
- **If you've never coded,** the jump is bigger than "Fundamentals" suggests.

The most honest first step is Microsoft's free **Practice Assessment** on [AI Skills Navigator](https://aiskillsnavigator.microsoft.com/credentials/cert-83587e0a0754cfee561ade3e27d9fa1cdaf15ae03be52d2413b2b858d1b4eda4). It shows you the question style and where your gaps are. You'll need to sign in.

## What to weigh on cost (no price here)

- **Price depends on where you take the exam,** and you see it on the exam page when you schedule. Microsoft notes it can change without notice and excludes taxes.
- **Students may get [academic pricing](https://learn.microsoft.com/en-us/credentials/certifications/student-discounts)** in eligible countries, with verification that lasts 12 months. Get verified *before* you pay: there are no refunds afterward.
- **A fail means paying again.** Under the [retake policy](https://learn.microsoft.com/en-us/credentials/support/retake-policy), after a first fail you wait 24 hours; between later attempts it's 14 days, with a maximum of five attempts in 12 months. Each retake is paid.
- **No refunds** for a failed exam or a missed appointment.
- **Study time** is likely the bigger cost, but hands-on Foundry practice uses Azure resources, so check what your account covers first.

## Who it's worth it for

- **Students and career changers** who want a clear study plan in applied AI, with a finish line.
- **Developers moving toward AI work** who want to organize what they know about APIs and prompting into a vocabulary the cloud job market recognizes. If that's you, [six habits that keep AI-generated projects from falling apart](/vibe-coding-habits/) pair well with the study.
- **People working in Microsoft/Azure shops** (employers, consultancies, or teams already on the platform), where the credential speaks the client's language.
- **Adjacent roles** (data, product, technical support) who need to talk to AI teams more precisely.

## Who it's not for

- **Anyone expecting the certificate alone to get them hired.** It's an entry-level credential. It shows you studied in a structured way; it doesn't replace projects, a portfolio, or experience.
- **Anyone who wants depth in machine learning.** The focus is consuming and deploying services and models, not training models from scratch.
- **Engineers already building AI apps in production,** especially those weighing tools like the ones in [our case-study check of Claude Code, Codex, Copilot, and Antigravity](/ai-coding-tools-case-studies/). You likely have the skills. The badge may satisfy an employer or vendor requirement, but it won't teach you much.
- **People working only in other clouds** with no plan to touch Azure. The content is specific to Microsoft's ecosystem.

## How to start without wasting time

1. **Take the free Practice Assessment before studying.** It shows where the gaps are.
2. **Use the official study guide as a checklist.** Every bullet is a measured skill.
3. **Practice in Foundry for real:** deploy a model, build a chat client with the SDK, create and test an agent. That's 55–60% of the exam.
4. **Check language and update timing.** Microsoft says localized versions are updated about eight weeks after English. If you're taking it in another language and it lags, the English guide may match the exam better. If the exam isn't offered in your preferred language, you can request 30 extra minutes.
5. **Then schedule it.** You can sit the exam at a test center or online through Pearson VUE.

## FAQ

### Can I still take the AI-900?

No. It retired on June 30, 2026. To earn Azure AI Fundamentals today, the exam is the AI-901.

### Do I need to know how to code?

Microsoft says candidates should have Python syntax and programming knowledge and be familiar with Azure resources. It isn't a concepts-only exam.

### Does the certification expire?

Microsoft says associate, expert, and specialty certifications expire annually and can be renewed through a free assessment. Fundamentals isn't in that list, but confirm on your Learn profile.

### How many times can I retake it?

If you fail: 24 hours before the second attempt, 14 days between later attempts, and at most five attempts within 12 months of the first.

### Is there free prep?

Yes. The Practice Assessment on AI Skills Navigator is free, and Microsoft Learn has the study guide and learning paths.

## Bottom line

The AI-900 is gone, but the certification lives on with a more hands-on exam. It's worth your time if you want a structured path from "I use ChatGPT" to "I build with models and agents" on Azure, and you're willing to write some code. It's not a career shortcut: it's a decent step, not the whole staircase. If you're on the fence, take the free practice assessment first. If it feels too easy, the badge won't add much. If it feels like a good stretch, you've got a study plan.

---

*Sources (Microsoft Learn): [Azure AI Fundamentals](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/), [Exam AI-901](https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/), [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901), [Exam retake policy](https://learn.microsoft.com/en-us/credentials/support/retake-policy), [Exam FAQ](https://learn.microsoft.com/en-us/credentials/certifications/frequently-asked-questions). Checked October 12, 2026; rules and prices can change.*
