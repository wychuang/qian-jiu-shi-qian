import assert from "node:assert/strict";
import { test } from "node:test";

import { clientYToRailPercent } from "../src/interaction.mjs";

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
