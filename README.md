# [Project name]

**[One sentence: what your website IS.]**

[Group name] — [Name Surname] · [Name Surname] · [Name Surname]

↗ **Live website:** [https://bureau1217.github.io/[your-repo]/site/](https://bureau1217.github.io/[your-repo]/site/)

Touch_Grass — HEAD Genève Media Design × Bureau 1217 · October 2026

<!--
  HOW TO USE THIS TEMPLATE — read HOW-TO.md first.
  Every grey comment like this one is an instruction: read it, then delete it.
  Each "## " heading becomes one screen in the Friday presentation (/presentation/).
  Write in English.
-->

---

## 1 · Pitch

<!--
  Max 500 characters, spaces included.
  - What does your website sense?
  - What does it depend on?
  - Why did it need to touch grass?
  Be specific. No adjectives you can't show.
-->

[Your pitch.]

---

## 2 · Observations

<!--
  Your website depends on a real phenomenon: wind, light, tides, noise,
  presence, battery… What did you learn by watching it, outside AND in the data?
  - Rhythm: daily cycle, seasons, how often it changes
  - Extremes: highest, lowest, sudden events
  - Absence: when it disappears or becomes unpredictable
  - Who else depends on it: humans, animals, plants, infrastructure
  - What surprised you
  Add references, photos, sketches, data screenshots in docs/media/:
  ![Description](docs/media/your-image.jpg)
-->

- **Rhythm** —
- **Extremes** —
- **Absence** —
- **Who else** —
- **Surprise** —

---

## 3 · Scenario

### What is your website?

<!--
  Choose a figure that gives meaning to its behaviours:
  a creature · a relay / messenger · a story · a witness ·
  a place / a garden · a ritual · …or your own.
  Explain it in 2–3 sentences. What does the visitor become?
-->

[Your website is a …]

### How does it unfold?

<!--
  Tell it from the point of view of your figure.
  One image or screenshot per moment (docs/media/).
-->

1. **First visit** —
2. **Coming back later** —
3. **When the phenomenon is absent** —

---

## 4 · Your disobedient system

<!--
  SIGNAL: source / API / sensor, which value, how often, and what happens
  when it's missing (fallback).
  Then one row per behaviour:
  - Behaviour: what the website does, and when (with real numbers)
  - Why: its link to the phenomenon and to your figure
  - Impact beyond: on resources, on other visitors, on what comes next
  If you can't fill "Impact beyond", your behaviour is probably decoration.
-->

**SIGNAL** — [source], [value], every [x] min · fallback: [what happens when it's missing]

| Behaviour | Why | Impact beyond |
|---|---|---|
| | | |
| | | |
| | | |

**States** — [state] → [state] → [state] → [state]

---

## 5 · Demo

<!--
  The conditions might not be there on Friday.
  Every state must be reachable in simulation mode (see site/main.js).
  Replace the state names with yours.
-->

↗ **[Live website](https://bureau1217.github.io/[your-repo]/site/)**

| State | Simulation |
|---|---|
| [calm] | [`?simulate=calm`](https://bureau1217.github.io/[your-repo]/site/?simulate=calm) |
| [windy] | [`?simulate=windy`](https://bureau1217.github.io/[your-repo]/site/?simulate=windy) |
| [storm] | [`?simulate=storm`](https://bureau1217.github.io/[your-repo]/site/?simulate=storm) |
| [signal absent] | [`?simulate=absent`](https://bureau1217.github.io/[your-repo]/site/?simulate=absent) |

---

## 6 · Technology & resources

### Stack

<!-- HTML / CSS / JS, libraries, hosting, hardware. -->

-

### APIs & sensors

| Source | Data used | Every | Link |
|---|---|---|---|
| | | | |

### Resources

<!--
  What does your website consume: energy, data, requests, attention?
  How do we FEEL it in its behaviour?
  When does it stop?
-->

[…]

### AI transparency

<!--
  What did you vibecode, and with which tools?
  What did you write or decide yourselves?
  Then explain each block in your own words — if you can't, ask us.
-->

- **Vibecoded** —
- **Ours** —
- **Signal** —
- **Rule** —
- **Behaviour** —

---

### Run it

```bash
git clone https://github.com/Bureau1217/[your-repo]
cd [your-repo]
npx serve .
# website:      http://localhost:3000/site/
# presentation: http://localhost:3000/presentation/
```

### Credits & sources

-
