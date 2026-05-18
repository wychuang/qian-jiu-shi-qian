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

- `src/catalog.mjs`: purchase catalogs, category labels, price formatting, filters, validation, and equivalence logic.
- `src/app.mjs`: DOM rendering and interaction state.
- `styles.css`: responsive layout, price-map visual system, cards, and controls.
- `tests/catalog.test.mjs`: data contract and pure behavior tests.
- `scripts/dev-server.mjs`: tiny local static server for module loading.
- `scripts/check.ps1`: syntax, tests, and browser smoke check.
- `.github/workflows/pages.yml`: GitHub Pages deployment. It uploads only `index.html`, `styles.css`, `.nojekyll`, and `src/*.mjs` into the Pages artifact.

## Content Editing Rules

- Add new purchase items in `src/catalog.mjs` through the `item(...)` helper.
- Keep every `meaning` to one visible line of intent.
- Keep `details.buys`, `details.swap`, and `details.question` filled for every item.
- Cross-domain equivalence works best when items near the same price have different categories.
- Add `linkedIds` only for pairings that should be especially visible, such as coffee and cloud membership.
- Run `npm test` after catalog edits. The validation test catches missing fields, duplicate IDs, unknown categories, and weak item shape.

## Price Notes

Prices are approximate mental-model anchors. When replacing them with more exact prices, avoid turning the app into a live shopping database; the product value is comparison and reflection, not price scraping.
