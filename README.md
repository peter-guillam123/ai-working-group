# AI working group, session 1

Slides for the first session of the ELG working group on AI, agents and the
future of our journalism, 30 September 2026. Part one is a twenty-minute
overview of where AI is now. Part two, still to build, puts the leading
models to work on the same news story.

Live at [peter-guillam123.github.io/ai-working-group](https://peter-guillam123.github.io/ai-working-group/),
behind the same light password gate as the board and vibe coding decks.
Either of their passwords opens it. The gate is a deterrent, not
security: the slide text still reaches the browser.

Built from the Guardian deck template, second edition, by way of the vibe
coding workshop deck. The house rules live in `CLAUDE.md`. Every figure has
a source in `SOURCES.md`.

## Presenting it

Arrow keys or space to move, R to reset, G to show the grid, Cmd-P to save
a PDF. Nothing advances by itself. The fonts load from Guardian servers, so
it wants a network connection.

To run it locally:

```bash
python3 -m http.server 8811
```

## Changelog

### 29 September 2026, evening: finer points

Layer 1 is now called the LLM, which fits its circle and says what it is.
The reasoning slide says plainly that it's the same LLM writing out a
plan and its working first. The next-word odds became one bar split by
probability. The risks lead became an ink panel. The timeline key matches
the dots. The final slide's right side now shows how tools differ on each
of the four layers, including that more thinking isn't always better.

### 29 September 2026, later: one idea, polished

Narrowed part one to a single job: showing that AI is no longer just a
language model, and pulling apart the layers that took us from a chatbot
to agents that are truly useful, and to Hugging Face. The news and
search-traffic slide went, and so did the "what it means for news" close;
the business side belongs to session four.

The new last slide explains why nobody agrees how good AI is: its
ability is jagged, and "AI" is many different machines, from a
one-second search summary to an agent that works for hours. The Harvard
and BCG consultants study gives it a real number.

Then a design pass on everything but the harness and incident slides.
The cover carries the four rings. The agenda draws the hour to scale.
The model slide shows the next-word guess as a waterfall. The reasoning
slide now asks the same question two ways, one wrong and one right, next
to OpenAI's 12% against 74% on the same maths test. The agent's 16+
hours is now a small chart from METR, so the jump reads at a glance. The
risks slide leads with one line, then the ledger.

### 29 September 2026: Part one, first build

Fifteen slides. The spine is four layers built around a language model:
the model, reasoning, the loop and the harness. Each has one colour and
keeps it, so the ring diagram on the map slide comes back as a small
"you are here" badge on each layer slide, and colours the timeline.

The usage section went from the board deck's two slides of charts to one
slide of four big numbers and one about news. Checking the board deck's
figures turned up two I couldn't stand behind: the "internet at work"
line was really all internet use, and the smartphone line had no source
at all. Both went, along with the chart they drew. The 41% of US workers
is now 45%.

The latest news changed the ending. Meta's Muse (8 September) and
ChatGPT Voice using your apps (23 September) give the "acts for you"
slide, and OpenAI's pause on 25 September, after an agent slipped out of
a test again, joins the Hugging Face story from the risk field guide.

Also fixed the body font: Guardian's server now refuses the regular Text
Egyptian file the kit pointed to, so body text had been falling back to
Georgia.
