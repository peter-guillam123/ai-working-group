# Sources

Every figure and dated claim in the deck, slide by slide. Checked on
29 September 2026.

Labels:
- **read**: the primary source was opened and read
- **outlet**: reported by a reputable outlet quoting the company or data; the primary page was blocked or not available
- **field guide**: taken from the AI risk field guide, which cites and labels its own sources (peter-guillam123.github.io/ai-risk-field-guide)
- **background**: well-established fact, not re-checked this time

Company user numbers are self-reported, unaudited, and each company counts differently. Say so if asked.

## 04 Already used at scale

| Claim | Source | Label |
|---|---|---|
| ChatGPT: more than 1bn weekly active users | OpenAI, "Expanding access to AI with ChatGPT ads", 31 Aug 2026. https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/ | read |
| AI Overviews: over 2.5bn monthly users | Sundar Pichai, Google I/O keynote, 19 May 2026. https://blog.google/innovation-and-ai/sundar-pichai-io-2026/ | read |
| Gemini app passed 1bn monthly users | Pichai on X, 11 Aug 2026, via TechCrunch. https://techcrunch.com/2026/08/11/googles-gemini-app-surges-to-one-billion-users/ (950m at Q2 earnings, 22 Jul, read) | outlet |
| 54% of UK adults use AI tools; 79% of 16–24s | Ofcom, Adults' Media Use and Attitudes 2026, published 2 Apr 2026, fieldwork 29 Sep–28 Nov 2025. https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/media-literacy-research/adults/adults-media-use-and-attitudes-2026/adults-media-use-and-attitudes-2026-report.pdf | read. Ofcom changed method in 2025, so don't lean on the rise from 31% |
| 55% of GB workers use AI for work or education | ONS, Artificial intelligence in UK businesses: 2023 to 2026, 20 Jul 2026 (survey 6 May–28 Jun 2026). https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026 | read |

### What changed from the board deck, and why

- **Dropped the US "third of the time" line** at Chris's request (29 Sep). It was sound: Bick, Blandin and Deming's tracker, May 2026.
- **Dropped the news and search-traffic slide.** Business models and click-through are for session four. The figures and sources are still in `../research/research-usage.md`.

- **Dropped the three-line adoption chart.** "Internet at work ~20% (1995–98)" was really overall internet use (ITU, all ages, 1997); the paper says internet data can't be split into work and non-work. "Smartphones ~25% (2007–10, Pew)" has no source: Pew's first smartphone figure is 35% ownership in May 2011. The 41% was right for Q4 2025 but is now 45%.
- **Dropped the enterprise gap slide.** The 18% BTOS figure was right for December 2025; the latest is 23.8% (Census BTOS, published 24 Sep 2026), and Census changed the question in November 2025, so older figures don't compare.

## 05–09 The four layers

| Claim | Source | Label |
|---|---|---|
| Three stages of training; "grown, not built"; the next-word toy and its odds (illustrative, labelled on the slide) | AI risk field guide, part one and plate 1 | field guide |
| o1, 12 Sep 2024 | OpenAI, "Learning to reason with LLMs" | field guide / background |
| DeepSeek R1, 20 Jan 2025, open and cheap | DeepSeek-AI, arXiv 2501.12948 | field guide / background |
| Gemini Deep Think, IMO gold standard, July 2025 (35/42) | Google DeepMind, 21 Jul 2025. https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/ | read |
| IMO 2026: two AI systems officially graded 42/42; 7 of 666 humans | TechXplore, July 2026. https://techxplore.com/news/2026-07-ai-humans-score-math-contest.html | outlet |
| Council budget sum: 1.04 ÷ 1.06 = 0.981, about 2% less per head | Arithmetic | checked |
| Train example (think, act, look) | AI risk field guide, plate 2 (illustrative) | field guide |
| How long the best agent can work on its own (50% success, measured in a skilled person's time): GPT-4, 2023, 3.5 min; Claude 3.7 Sonnet, early 2025, 60 min; Claude Opus 4.5, late 2025, 320 min (~5 hours); early Claude Mythos Preview, published May 2026, 16+ hours, the top of what METR's tasks can measure | METR Time Horizon 1.1, 29 Jan 2026. https://metr.org/blog/2026-1-29-time-horizon-1-1/ ; https://metr.org/time-horizons/ | read |
| Reasoning: GPT-4o solved 12% of AIME 2024 problems, o1 74% (one attempt each) | OpenAI, "Learning to reason with LLMs", 12 Sep 2024. https://openai.com/index/learning-to-reason-with-llms/ (page blocks our fetches; figures confirmed by search of the page and several secondary sources) | outlet |
| The two answers to the council question | Illustrative, labelled as such on the slide | ours |
| MCP, the shared connector standard, now run by the Linux Foundation's Agentic AI Foundation | https://aaif.io/projects/model-context-protocol | outlet |
| Harness names (Claude Code, Cowork, Claude in Chrome, Codex, ChatGPT Work, Gemini Spark, Comet) | Research notes, 29 Sep 2026 | read / outlet |

## 10 Now it acts on your behalf

| Claim | Source | Label |
|---|---|---|
| Muse launched 8 Sep 2026, US only, app and WhatsApp; emails, forms, travel, shopping; keeps working after you close it; approval before purchases | Meta, "Introducing Muse". https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/ ; WhatsApp via The Decoder | read |
| "Muse will sometimes make mistakes" | Meta, security and safety post, 8 Sep 2026. https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse | read |
| No. 1 on the US App Store from 18 Sep | TechCrunch, 25 Sep 2026. https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/ | outlet |
| ChatGPT Voice uses connected apps (Gmail, calendar, Slack), works in ChatGPT Work, worldwide, free users included in Chat; spoken approval not accepted, tap on screen | Android Headlines, Mixed, Notebookcheck, quoting OpenAI's help centre, 23 Sep 2026. https://mixed-news.com/en/chatgpt-voice-plugins-web-ios-android-on-screen-approval/ | outlet. OpenAI's own pages blocked our fetches |

## 11 Timeline

ChatGPT (Nov 2022), MCP (Nov 2024), Claude Code (Feb 2025): background. Claude Opus 4.5 and METR's five hours: METR, read. Hugging Face: field guide. Other dates as above.

## 12 What can go wrong

| Claim | Source | Label |
|---|---|---|
| Prompt injection unsolved | Meta's Muse safety post: "remains an open problem" | read |
| EchoLeak: one crafted email made Microsoft 365 Copilot leak data, no click (CVE-2025-32711, June 2025) | Widely reported security research | outlet |
| Operator bought $31 of eggs without checking | Geoffrey Fowler, Washington Post, February 2025 | outlet |
| Lethal trifecta, cited by Meta | Meta safety post, citing Simon Willison | read |
| CoastRunners boat, OpenAI 2016 | AI risk field guide, plate 3 | field guide |

## 13 This summer, and last week

| Claim | Source | Label |
|---|---|---|
| ~700 agents, under 13 hours, ~17,600 actions | OpenAI technical report, 26 Aug 2026; Hugging Face timeline, 27 Jul 2026; METR and Redwood review, 26 Aug 2026 | field guide (all read there) |
| Anthropic, Meta and Google admitted similar breaches in tests | Anthropic, 30 Jul 2026 (read); NPR on Meta, 8 Aug (headline); NBC on Google, 18 Sep (read) | field guide |
| 25 Sep: OpenAI says an agent reached a public chatbot via DNS lookups on 20 Sep; tool-use work on its most capable models paused | OpenAI alignment blog. https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/ ; Fortune, 26 Sep | read. Coverage says the pause covers internal research models, not ChatGPT |

## 14 Why nobody agrees how good it is

| Claim | Source | Label |
|---|---|---|
| The jagged line and its task labels | Illustrative, labelled as such on the slide | ours |
| Consultants using AI were 19 percentage points less likely to get a correct answer on a task outside the AI's ability; over 40% higher quality on tasks inside it; 758 BCG consultants | Dell'Acqua et al, "Navigating the Jagged Technological Frontier", Harvard Business School working paper 24-013, September 2023 | outlet (HBS page blocked; abstract confirmed via several sources) |
| Newest, largest models usually better and often barely slower; a tool answering billions of searches must be quick and cheap | General description, not a measurement | ours |
| Anthropic warns its top thinking setting can overthink; its newest Opus (5.5) defaults to medium effort | Anthropic, Effort docs: max effort "can lead to overthinking" on some tasks (written for Opus 4.7); Opus 5.5 defaults to medium. https://platform.claude.com/docs/en/build-with-claude/effort | read |
| Overthinking in reasoning models generally | Chen et al, "Do NOT Think That Much for 2+3=?", arXiv 2412.21187, December 2024 | read (abstract) |
| "GPT-6 Astra thinking for minutes" | GPT-6 Astra, OpenAI, 3 Sep 2026 (see research notes) | read (system card) |

## Part 2

| Claim | Source | Label |
|---|---|---|
| Topic examples (Fairford, the Manchester City tribunal, Andy Burnham's first speech) | Chris's choices. The notes on why each works are general characterisations, with no factual claims | ours |
| Once people are arrested, the law limits what can be reported | Contempt of Court Act 1981, Schedule 1: proceedings are active from arrest | background |
| AI Overviews and AI Mode: publishers can limit them only with nosnippet, data-nosnippet, max-snippet or noindex, the same controls as ordinary Search | Google Search Central, "AI features and your website". https://developers.google.com/search/docs/appearance/ai-features | read |
| Gemini app: publishers can block training and grounding with Google-Extended, which does not affect Search | Google Search Central, Google's common crawlers. https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers | read |
| ChatGPT search: publishers can block OpenAI's crawlers without affecting Google | OpenAI's crawler documentation (OAI-SearchBot) | background |
| AI Mode runs many searches behind the scenes | Google's description of AI Mode ("query fan-out"), Google I/O 2025 | background |
| "Our test run took seven" minutes | Chris's ChatGPT screenshot: "Worked for 6m 56s", GPT-5.6 Sol, Extra High | Chris's run |
| "Each one is built for a job" table | A rough guide, labelled on the slide. "For its maker" is our reading | ours |
| AI Overviews runs on Gemini 3 (default globally since 27 Jan 2026) | Google blog, AI Mode and AI Overviews updates. https://blog.google/products-and-platforms/products/search/ai-mode-ai-overviews-updates/ | read |
| ChatGPT: ads on the free tier | OpenAI, "Expanding access to AI with ChatGPT ads", 31 Aug 2026 | read |
| Gemini app: choose fast or Thinking; ChatGPT: choose model and thinking level | Chris's screenshots of both interfaces, 29 Sep 2026 | seen |
| ChatGPT agent mode (ChatGPT Work, launched 9 July 2026) | The Next Web, via research notes | outlet |
| AI Overviews 91% correct on SimpleQA (4,326 questions), up from 85% (Oct 2025 to Feb 2026, across the Gemini 3 switch); ungrounded share of correct answers 37% to 56% | Oumi for the New York Times: Oumi blog, 14 Apr 2026, https://oumi.ai/blog/oumis-study-finds-50-of-ai-overviews ; NYT 7 Apr 2026 (paywalled). Google: "serious holes", SimpleQA "full of errors"; DeepMind's SimpleQA Verified paper (arXiv 2509.07968) says the original has noisy and incorrect labels | read (Oumi, arXiv); outlet (NYT, Google quotes) |
| 89% of 98,020 claims from 55,393 trending US searches supported by cited pages; 2.66% contradicted; "better than critics suggest, worse than Google claims" | Xu, Iqbal and Montgomery, Washington University in St Louis, arXiv 2605.14021, 13 May 2026 (preprint). https://arxiv.org/html/2605.14021v1 | read |
| Pancreatic cancer advice the opposite of expert advice | The Guardian, 2 Jan 2026. https://www.theguardian.com/technology/2026/jan/02/google-ai-overviews-risk-harm-misleading-health-information | read |
| Air India crash plane named as an Airbus; it was a Boeing (June 2025) | Cybernews; AI Incident Database 1097 | outlet |
| Canadian musician falsely called a sex offender, suing | The Guardian, 5 May 2026 | read |
| Munich court: AI Overviews are Google's own statements (June 2026) | Techdirt, Search Engine Land (ruling not read) | outlet |
| Glue on pizza (May 2024); made-up sayings (April 2025) | Google's own blog, 30 May 2024; Engadget | read; outlet |
| 45% of news answers from free ChatGPT, Copilot, Gemini and Perplexity had a significant issue; Gemini 76%, Copilot 37%, ChatGPT 36%, Perplexity 30%; mostly sourcing | EBU/BBC News Integrity in AI Assistants report, 21 Oct 2025, 22 public service media, responses May–June 2025 | read |
| Why they go wrong (making it up, answering too fast, wrong source, missing source) | General account, drawing on part 1 and the studies above | ours |
| Google has never published an error rate | No figure in Google's statements from May 2024 to January 2026 (research notes) | read (absence) |
| Prompts for Gemini and ChatGPT | Chris's own, verbatim from his screenshots | Chris |

Full research notes, with more than made the slides, are in `../research/`, outside the repo.
