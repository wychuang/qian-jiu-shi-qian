import assert from "node:assert/strict";
import { test } from "node:test";

import {
  categoryLabels,
  filterCatalog,
  getCatalog,
  getEquivalenceSet,
  priceToPercent,
  validateCatalog
} from "../src/catalog.mjs";

test("China catalog spans tiny choices through major purchases in ascending order", () => {
  const items = getCatalog("cn");

  assert.ok(items.length >= 55);
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

test("every purchase has a one-line meaning and expandable reflection content", () => {
  for (const region of ["cn", "us"]) {
    const errors = validateCatalog(region);
    assert.deepEqual(errors, []);
  }
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
