# 钱就是钱 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use test-driven-development while implementing. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight static web app that visualizes money as cross-domain purchase equivalents for China and the US.

**Architecture:** Keep the app dependency-free: catalog data and pure functions live in `src/catalog.mjs`, browser behavior in `src/app.mjs`, presentation in `styles.css`, and a tiny Node static server in `scripts/dev-server.mjs`. Tests exercise the catalog contract and the price/equivalence logic.

**Tech Stack:** HTML, CSS, browser ES modules, Node `node:test`, PowerShell verification script.

---

### Task 1: Catalog Contract

**Files:**
- Create: `tests/catalog.test.mjs`
- Create: `src/catalog.mjs`

- [x] Write failing tests for region catalogs, item shape, filtering, logarithmic price positions, and cross-domain equivalence.
- [x] Implement `src/catalog.mjs` with China and US catalog data, validation, filtering, and equivalence helpers.
- [x] Run `npm test` and confirm the tests pass.

### Task 2: Interactive Web App

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `src/app.mjs`

- [x] Build a first-screen app layout with region toggle, budget control, category chips, price rail, item cards, and expandable details.
- [x] Render same-price alternatives so ordinary purchases and subscriptions sit beside each other.
- [x] Keep the UI light, fast, and usable on desktop and mobile.

### Task 3: Local Workflow

**Files:**
- Create: `scripts/dev-server.mjs`
- Create: `scripts/check.ps1`
- Create: `README.md`
- Create: `DEVELOPMENT.md`
- Create: `AGENTS.md`
- Modify: `F:\Projects\WORKSPACE.md`

- [x] Add one-command verification.
- [x] Document project purpose, local run commands, and agent boundaries.
- [x] Add the project to the workspace index.

### Task 4: Verification

**Files:**
- No new files.

- [ ] Run `npm test`.
- [ ] Run `scripts\check.ps1`.
- [ ] Start the local server.
- [ ] Use a browser smoke check to confirm the app renders and interactions work.

### Task 5: GitHub Pages Publishing

**Files:**
- Create: `.github/workflows/pages.yml`
- Create: `.nojekyll`
- Modify: `README.md`
- Modify: `DEVELOPMENT.md`
- Modify: `AGENTS.md`

- [x] Add a GitHub Pages workflow that publishes only the static app files.
- [x] Document the expected Pages URL and deployment workflow.
- [ ] Initialize the project as its own git repository.
- [ ] Push to GitHub and verify the Pages deployment.
