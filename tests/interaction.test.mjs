import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { clientYToRailPercent, pickSeparatedRailPins } from "../src/interaction.mjs";

test("rail pointer mapping treats the whole vertical rail as the amount control", () => {
  const rect = { top: 100, bottom: 900, height: 800 };

  assert.equal(clientYToRailPercent(100, rect), 100);
  assert.equal(clientYToRailPercent(500, rect), 50);
  assert.equal(clientYToRailPercent(900, rect), 0);
});

test("rail pointer mapping clamps drags outside the rail", () => {
  const rect = { top: 100, bottom: 900, height: 800 };

  assert.equal(clientYToRailPercent(20, rect), 100);
  assert.equal(clientYToRailPercent(980, rect), 0);
});

test("rail pin picking keeps annotation labels from stacking on one side", () => {
  const pins = pickSeparatedRailPins([
    { id: "a", side: "right", y: 40, score: 10 },
    { id: "b", side: "right", y: 42, score: 9 },
    { id: "c", side: "right", y: 49, score: 8 },
    { id: "d", side: "left", y: 42, score: 9 },
    { id: "e", side: "left", y: 90, score: 1 }
  ], { minGapPercent: 7, maxPerSide: 3 });

  assert.deepEqual(pins.map((pin) => pin.id), ["a", "c", "d", "e"]);
});

test("rail pin picking preserves the active item before lower priority labels", () => {
  const pins = pickSeparatedRailPins([
    { id: "nearby", side: "right", y: 58, score: 20 },
    { id: "active", side: "right", y: 60, score: 1, required: true },
    { id: "far", side: "right", y: 78, score: 2 }
  ], { minGapPercent: 7, maxPerSide: 3 });

  assert.ok(pins.some((pin) => pin.id === "active"));
  assert.ok(!pins.some((pin) => pin.id === "nearby"));
  assert.ok(pins.some((pin) => pin.id === "far"));
});

test("data-attribute controls are scoped to buttons, not the app root", async () => {
  const source = await readFile(new URL("../src/app.mjs", import.meta.url), "utf8");

  assert.match(source, /querySelectorAll\("button\[data-region\]"\)/);
  assert.match(source, /querySelectorAll\("button\[data-sensitivity\]"\)/);
  assert.match(source, /querySelectorAll\("button\[data-mode\]"\)/);
  assert.doesNotMatch(source, /querySelectorAll\("\[data-(region|sensitivity|mode)\]"\)/);
});
