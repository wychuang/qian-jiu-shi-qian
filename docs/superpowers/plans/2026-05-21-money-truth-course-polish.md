# Money Truth Course Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use frontend-design and design-review while implementing. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the app from a list of clever comparisons into a calm instrument for asking "what could this money become if spent on something truer?"

**Architecture:** Keep the static app shape. Product framing and interaction changes stay in `index.html`, `src/app.mjs`, and `styles.css`; regression coverage stays in `tests/interaction.test.mjs` and `tests/catalog.test.mjs`. The design record lives in this plan file and is not part of the GitHub Pages artifact.

**Tech Stack:** HTML, CSS, browser ES modules, Node `node:test`, Chrome DevTools Protocol visual QA.

**Course Homework:** See `docs/2026-05-21-money-truth-course-homework.md` for the full staged product-design submission.

---

### Task 1: Product Thesis And Rubric

**Files:**
- Create: `docs/superpowers/plans/2026-05-21-money-truth-course-polish.md`

- [x] Define the product thesis: money is a converter of attention, body, relationship, tools, and future room.
- [x] Define the first-screen job: one amount, one focused item, a few cross-domain exits.
- [x] Define the industrial-design rubric:
  - The amount rail is the primary control, not decoration.
  - The current amount must never be hidden by the rail, labels, or cards.
  - A user should understand the same-money comparison without opening anything.
  - Personal finance controls can exist, but only in modes where they help.
  - The interface should feel quiet, sharp, and inspectable.

### Task 2: Existing Product Audit

**Files:**
- Modify: `styles.css`
- Modify: `src/app.mjs`

- [x] Capture desktop and mobile screenshots at default `¥648`.
- [x] Capture desktop and mobile screenshots at high amount `¥36,000`.
- [x] Confirm the main visual bug: the desktop left amount readout can be clipped by the rail column at large values.
- [x] Confirm the rail readout itself no longer overlaps active tick labels, but the surrounding layout still needs stronger spatial contracts.

### Task 3: Amount Rail As Instrument

**Files:**
- Modify: `index.html`
- Modify: `src/app.mjs`
- Modify: `styles.css`

- [x] Keep the amount rail large and vertical, but give it explicit left/right annotation lanes.
- [x] Move large amount typography onto a width-safe readout system.
- [x] Add dynamic amount-size states for large currency strings.
- [x] Set `aria-valuetext` so the invisible range has the same semantic amount users see.
- [x] Tighten rail marks, pins, and current readout so the control feels deliberate rather than crowded.

### Task 4: Focused Meaning, Not Sticky Notes

**Files:**
- Modify: `src/app.mjs`
- Modify: `styles.css`

- [x] Keep nuance inside the focused item.
- [x] Make the equivalence buttons read like exits to other realities, not extra cards.
- [x] Reduce decorative chrome where it competes with the amount/control surface.

### Task 5: Regression And Browser QA

**Files:**
- Modify: `tests/interaction.test.mjs`

- [x] Add tests for dynamic amount readout sizing and semantic rail value.
- [x] Run `npm test`.
- [x] Run `.\scripts\check.ps1`.
- [x] Re-capture desktop/mobile screenshots at `¥648`, `¥36,000`, and a very high amount.
- [x] Check DOM rectangles for current amount readout overlap and left amount clipping.

### Task 6: Publish

**Files:**
- No source layout change expected beyond the app files above.

- [x] Review `git diff --check`.
- [x] Commit the finished iteration.
- [x] Push or fast-forward `main` through the GitHub API fallback if HTTPS push fails.
- [x] Wait for GitHub Pages deployment and verify the live static assets.

### Course Self-Review

- [x] **Research:** The app speaks to Chinese young-adult impulse spending without moralizing it.
- [x] **Product:** The default action is dragging one amount, not operating a dashboard.
- [x] **Interaction:** Releasing the rail never jumps back to `¥648`.
- [x] **Visual:** The amount, rail, focus item, and exits form one readable instrument.
- [x] **Engineering:** Tests cover the bugs users have actually noticed.
