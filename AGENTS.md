# Agent Notes for 钱就是钱

This project lives under `F:\Projects\codex\apps\qian-jiu-shi-qian`.

## Boundaries

- Keep changes inside this project unless updating `F:\Projects\WORKSPACE.md`.
- Do not commit private agent configuration, local caches, credentials, or unrelated research notes.
- This app is intentionally light: no framework, no build step, no account system, no scraping pipeline.

## Workflow

1. Check project status if this folder becomes a git repo.
2. Read `README.md` and `DEVELOPMENT.md`.
3. For catalog changes, update `src/catalog.mjs` and run `npm test`.
4. For UI changes, run `.\scripts\check.ps1` and inspect the page in a browser when practical.
5. If the run workflow or project purpose changes, update `README.md` and `DEVELOPMENT.md`.
6. For GitHub Pages changes, keep the deployed artifact small and avoid uploading docs, tests, local screenshots, or private files.

## Product Taste

- The app should feel like a sharp, quiet cognitive instrument with a faint personal-finance dashboard feeling.
- The core question is "what could this money become if it were spent on something truer?"
- Prefer concrete Chinese youth brands, rituals, and scenes over generic categories.
- Keep visible copy short; put nuance in the single focused item view, not in expandable notes on every card.
- Treat the large vertical amount rail as the primary interaction, not a decorative slider.
- Preserve both China and US versions unless a task explicitly narrows scope.
