# How to use this template

Touch_Grass — HEAD Genève Media Design × Bureau 1217

## 1. Create your repository

1. On this page, click **Use this template → Create a new repository**.
2. Owner: **Bureau1217**. Name: `touch-grass-[project-name]` (lowercase, dashes).
3. Visibility: **Public**.
4. Add your group members as collaborators (*Settings → Collaborators*).

## 2. Turn on GitHub Pages

*Settings → Pages → Build and deployment → Source:* **GitHub Actions**.

Every push to `main` publishes:

| What | Where |
|---|---|
| Your website | `https://bureau1217.github.io/[your-repo]/site/` |
| Your Friday presentation | `https://bureau1217.github.io/[your-repo]/presentation/` |

## 3. Work locally

```bash
git clone https://github.com/Bureau1217/[your-repo]
cd [your-repo]
npx serve .
```

- Website: `http://localhost:3000/site/`
- Presentation: `http://localhost:3000/presentation/`
- Debug panel on the website: add `?debug` to the URL.

## 4. What goes where

```
README.md          ← your documentation AND your Friday presentation
site/
  index.html       ← your website
  style.css
  main.js          ← your system, in 4 blocks: SIGNAL → RULE → BEHAVIOUR → STORY
presentation/      ← renders README.md as full screens. Don't edit.
docs/
  media/           ← images, GIFs, videos used in the README
  process/         ← sketches, Monday concept slides, notes
```

## 5. The rules for main.js

- Keep the four blocks: **SIGNAL**, **RULE**, **BEHAVIOUR**, **STORY**.
- Every state must be reachable with `?simulate=[state]`. On Friday the conditions might not be there.
- Always handle the **absent** state: sensors fail, APIs go down.
- Vibecode it if you want — but you must be able to explain every block, without your laptop.

## 6. Friday

Open your presentation page, full screen. Scroll one section at a time.
Section 5 (Demo) is the moment: open the live website, then show the other states with `?simulate=`.

About 5 minutes per group.
