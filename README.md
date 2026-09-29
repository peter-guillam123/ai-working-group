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

### 29 September 2026, late: read it like an editor

The checklist slide was too thin and too much like a marking scheme. It
is now three groups of questions to hold while working: can we trust it,
how does it compare with us, where is it useful. Under them, six prompts
to copy that show what bending to one reader can do: explain it simply,
"I live near Fairford", the case that it's overblown, who wants what,
the next question, three sentences for a family WhatsApp.

### 29 September 2026, late: how good are AI Overviews?

The room thinks AI Overviews are terrible and typical of AI. A new slide
after the tool gives the fairest picture I could find: 91% right on a
hard factual test and improving, but more than half of those right
answers backed by links that don't support them; 89% of claims matching
their sources in a big spring study. Then where it fails, with the
Guardian's health investigation first. And the 76% everyone quotes was
the Gemini app, not AI Overviews. The tool slides also lost their deks,
which only repeated the title, and gained Open links and typed prompts.

### 29 September 2026, late: reach, not read

The map said the Google tools "read" most. They can reach most, which
isn't the same: a quick answer draws on almost anything but uses very
little of it. The map and every tool slide now say reach, and the map
says plainly that reaching isn't reading. The room doesn't need telling
how to check a story or what Fairford is, so the story slide became "a
good test case" and the checks slide lost its how-to lines.

### 29 September 2026, evening: part two

Ten slides for the hands-on half: one story, four tools, quickest first.
Each tool gets a slide with a prompt you can copy and follow-ups on the
left, and the same five rows on the right: what it's for, what it can
read, where it's strong, what to watch, how long. A map sets out the
trade-off: Google's AI Overviews and AI Mode can read almost everything,
because publishers can't keep out of them without leaving Search, but
think least; Gemini and ChatGPT can be blocked, and think more. Fairford
is the fallback story; the morning's news may give a better one.

### 29 September 2026, evening: the reasoning race

The two answers on the reasoning slide now stream out the way a model
writes. The quick one is done and wrong in about a second. The other
shows "Thinking" with a live count while its working appears, then
"Thought for N seconds" and its answer. The 12% against 74% chart waits
until both have finished. `stream.js` does it; with reduced motion, no
JavaScript or when printing, every word is simply there.

### 29 September 2026, evening: the word toy comes over

The layer 1 slide now carries the next-word toy from plate 1 of the AI
risk field guide, restyled for the deck: pick a word or let the model
roll the dice, and turn the risk up to wild to see the same start end
differently. Space and Enter on its buttons press the button rather than
turning the slide, and it resets each time the slide comes round. The
risks lead went back to paper colours; ink with yellow on a paper slide
was two styles crossing.

### 29 September 2026, evening: no agenda slide

The agenda slide felt unnecessary. The cover now names the two parts in a
line each, and the deck is thirteen slides.

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
