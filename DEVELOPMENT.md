# Development

This is a dependency-free static web app. It uses browser ES modules and Node's built-in test runner.

## Local Commands

```powershell
npm start
```

```powershell
npm test
```

```powershell
.\scripts\check.ps1
```

## Files

- `src/catalog.mjs`: purchase catalogs, youth-culture anchors, personal reward profiles, true-vs-attention lenses, price formatting, filters, validation, and comparison logic.
- `src/interaction.mjs`: pure interaction helpers for mapping pointer position to rail amount.
- `src/app.mjs`: DOM rendering, vertical amount-rail interaction, profile/sensitivity state, and comparison panels.
- `styles.css`: responsive layout, large vertical rail visual system, finance-like controls, cards, and mobile behavior.
- `tests/catalog.test.mjs`: data contract and pure behavior tests.
- `scripts/dev-server.mjs`: tiny local static server for module loading.
- `scripts/check.ps1`: syntax, tests, and browser smoke check.
- `.github/workflows/pages.yml`: GitHub Pages deployment. It uploads only `index.html`, `styles.css`, `.nojekyll`, and `src/*.mjs` into the Pages artifact.

## Content Editing Rules

- Add new purchase items in `src/catalog.mjs` through the `item(...)` helper.
- Keep every `meaning` to one sharp visible line of intent.
- Keep `details.buys`, `details.swap`, and `details.question` filled for every item.
- Every item needs `lens`, `truthScore`, `rewardTags`, and `sensitivity`; defaults exist, but high-signal branded items should set them deliberately.
- Cross-domain comparison works best when attention purchases and true options exist near the same amount.
- Add `linkedIds` only for pairings that should be especially visible, such as 648 top-ups against chairs, therapy, travel, or tools.
- Run `npm test` after catalog edits. The validation test catches missing fields, duplicate IDs, unknown categories, weak item shape, missing youth anchors, and missing personal-finance lenses.

## Price Notes

Prices are approximate mental-model anchors. When replacing them with more exact prices, avoid turning the app into a live shopping database; the product value is comparison, reflection, and careful observation, not price scraping.
