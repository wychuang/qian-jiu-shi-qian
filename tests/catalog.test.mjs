import assert from "node:assert/strict";
import { test } from "node:test";

import {
  categoryLabels,
  compareAtAmount,
  filterCatalog,
  getCatalog,
  getEquivalenceSet,
  getProfiles,
  priceToPercent,
  validateCatalog
} from "../src/catalog.mjs";

test("China catalog spans tiny choices through major purchases in ascending order", () => {
  const items = getCatalog("cn");

  assert.ok(items.length >= 110);
  assert.ok(items[0].price <= 2);
  assert.ok(items.at(-1).price >= 30000);

  for (let index = 1; index < items.length; index += 1) {
    assert.ok(items[index - 1].price <= items[index].price);
  }
});

test("US catalog is available with the same interaction contract", () => {
  const items = getCatalog("us");

  assert.ok(items.length >= 35);
  assert.equal(items[0].currency, "USD");
  assert.ok(items.some((item) => item.id === "us-specialty-coffee"));
  assert.ok(items.some((item) => item.id === "us-cloud-storage-month"));
});

test("every purchase has a one-line meaning and focused reflection content", () => {
  for (const region of ["cn", "us"]) {
    const errors = validateCatalog(region);
    assert.deepEqual(errors, []);
  }
});

test("China catalog contains realistic youth-culture anchors and value framing", () => {
  const items = getCatalog("cn");
  const ids = new Set(items.map((item) => item.id));

  for (const id of [
    "cn-genshin-648",
    "cn-airpods-pro",
    "cn-macbook-air",
    "cn-iphone-main",
    "cn-luckin-week",
    "cn-nayuki-tea",
    "cn-bilibili-year",
    "cn-xiaohongshu-outfit",
    "cn-keep-year",
    "cn-ikea-desk"
  ]) {
    assert.ok(ids.has(id), `missing youth anchor ${id}`);
  }

  const genshin = items.find((item) => item.id === "cn-genshin-648");
  assert.match(genshin.details.buys, /50/);
  assert.match(genshin.details.question, /90|保底|小保底/);
});

test("items carry personal finance lenses rather than only price tiers", () => {
  const items = getCatalog("cn");

  for (const item of items) {
    assert.ok(["true", "attention", "mixed"].includes(item.lens), `${item.id} has invalid lens`);
    assert.ok(Number.isInteger(item.truthScore), `${item.id} missing truthScore`);
    assert.ok(item.truthScore >= 1 && item.truthScore <= 5, `${item.id} truthScore out of range`);
    assert.ok(Array.isArray(item.rewardTags), `${item.id} missing rewardTags`);
    assert.ok(item.rewardTags.length >= 1, `${item.id} missing reward tag`);
    assert.ok(["low", "medium", "high"].includes(item.sensitivity), `${item.id} missing sensitivity`);
  }
});

test("profiles express different shopping lists and spending sensitivity", () => {
  const profiles = getProfiles("cn");

  assert.ok(profiles.length >= 5);
  assert.ok(profiles.some((profile) => profile.id === "builder"));
  assert.ok(profiles.some((profile) => profile.id === "appearance"));
  assert.ok(profiles.every((profile) => profile.weights && profile.sensitivity));
});

test("amount comparison separates attention spend from truer alternatives", () => {
  const comparison = compareAtAmount(getCatalog("cn"), 648, {
    profileId: "builder",
    sensitivity: "medium",
    limit: 8
  });

  assert.equal(comparison.amount, 648);
  assert.ok(comparison.attention.some((item) => item.id === "cn-genshin-648"));
  assert.ok(comparison.trueOptions.length >= 3);
  assert.ok(comparison.trueOptions.every((item) => item.lens !== "attention"));
});

test("filtering keeps only purchases inside the chosen budget and category", () => {
  const items = getCatalog("cn");
  const filtered = filterCatalog(items, {
    budget: 35,
    categories: ["time", "digital"]
  });

  assert.ok(filtered.length > 3);
  assert.ok(filtered.every((item) => item.price <= 35));
  assert.ok(filtered.every((item) => ["time", "digital"].includes(item.category)));
});

test("price scale maps logarithmic prices to stable visual positions", () => {
  assert.equal(priceToPercent(1, 1, 10000), 0);
  assert.equal(priceToPercent(10000, 1, 10000), 100);
  assert.ok(priceToPercent(100, 1, 10000) > priceToPercent(10, 1, 10000));
  assert.equal(priceToPercent(0, 1, 10000), 0);
});

test("equivalence set connects cross-domain alternatives at nearly the same price", () => {
  const items = getCatalog("cn");
  const coffee = items.find((item) => item.id === "cn-chain-coffee");
  assert.ok(coffee);

  const equivalents = getEquivalenceSet(items, coffee.id, 5);
  const equivalentIds = equivalents.map((item) => item.id);

  assert.ok(equivalentIds.includes("cn-baidu-netdisk-month"));
  assert.ok(equivalents.every((item) => item.category !== coffee.category));
});

test("category labels cover every category used by the catalogs", () => {
  const categories = new Set([
    ...getCatalog("cn").map((item) => item.category),
    ...getCatalog("us").map((item) => item.category)
  ]);

  for (const category of categories) {
    assert.ok(categoryLabels[category], `missing label for ${category}`);
  }
});
