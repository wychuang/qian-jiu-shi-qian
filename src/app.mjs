import {
  categoryHints,
  categoryLabels,
  filterCatalog,
  formatMoney,
  getBandForPrice,
  getCatalog,
  getEquivalenceSet,
  priceBands,
  priceToPercent
} from "./catalog.mjs";

const state = {
  region: "cn",
  budgetPercent: 100,
  categories: new Set(),
  openId: "cn-chain-coffee",
  query: ""
};

const elements = {
  app: document.querySelector("#app"),
  budget: document.querySelector("#budget"),
  budgetLabel: document.querySelector("#budget-label"),
  categoryBar: document.querySelector("#category-bar"),
  count: document.querySelector("#count"),
  equivalence: document.querySelector("#equivalence"),
  itemList: document.querySelector("#item-list"),
  map: document.querySelector("#money-map"),
  query: document.querySelector("#query"),
  regionButtons: document.querySelectorAll("[data-region]"),
  reset: document.querySelector("#reset")
};

function init() {
  elements.regionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.region = button.dataset.region;
      state.openId = state.region === "cn" ? "cn-chain-coffee" : "us-specialty-coffee";
      state.budgetPercent = 100;
      state.categories.clear();
      elements.budget.value = String(state.budgetPercent);
      render();
    });
  });

  elements.budget.addEventListener("input", () => {
    state.budgetPercent = Number(elements.budget.value);
    render();
  });

  elements.query.addEventListener("input", () => {
    state.query = elements.query.value;
    render();
  });

  elements.reset.addEventListener("click", () => {
    state.budgetPercent = 100;
    state.categories.clear();
    state.query = "";
    elements.query.value = "";
    elements.budget.value = "100";
    render();
  });

  render();
}

function render() {
  const allItems = getCatalog(state.region);
  const bounds = getBounds(allItems);
  const budget = percentToPrice(state.budgetPercent, bounds.min, bounds.max);
  const selectedCategories = [...state.categories];
  const visibleItems = filterCatalog(allItems, {
    budget,
    categories: selectedCategories,
    query: state.query
  });

  if (!visibleItems.some((item) => item.id === state.openId)) {
    state.openId = visibleItems.at(-1)?.id ?? allItems[0].id;
  }

  elements.app.dataset.region = state.region;
  elements.regionButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.region === state.region));
  });

  elements.budgetLabel.textContent = formatMoney(state.region, budget);
  elements.count.textContent = String(visibleItems.length);

  renderCategoryBar(allItems);
  renderMap(allItems, visibleItems, bounds, budget);
  renderEquivalence(allItems, visibleItems);
  renderItems(visibleItems);
}

function renderCategoryBar(items) {
  const categories = [...new Set(items.map((item) => item.category))];

  elements.categoryBar.replaceChildren(
    ...categories.map((category) => {
      const button = document.createElement("button");
      button.className = "chip";
      button.type = "button";
      button.textContent = categoryLabels[category];
      button.dataset.category = category;
      button.setAttribute("aria-pressed", String(state.categories.has(category)));
      button.title = categoryHints[category];
      button.addEventListener("click", () => {
        if (state.categories.has(category)) {
          state.categories.delete(category);
        } else {
          state.categories.add(category);
        }
        render();
      });
      return button;
    })
  );
}

function renderMap(allItems, visibleItems, bounds, budget) {
  const visibleIds = new Set(visibleItems.map((item) => item.id));
  const lanes = [...new Set(allItems.map((item) => item.category))];
  const axisStops = makeAxisStops(state.region);

  const axis = document.createElement("div");
  axis.className = "axis";
  axis.replaceChildren(
    ...axisStops.map((stop) => {
      const tick = document.createElement("span");
      tick.className = "tick";
      tick.style.setProperty("--x", `${priceToPercent(stop, bounds.min, bounds.max)}%`);
      tick.textContent = formatMoney(state.region, stop);
      return tick;
    })
  );

  const budgetCurtain = document.createElement("div");
  budgetCurtain.className = "budget-curtain";
  budgetCurtain.style.setProperty("--budget-x", `${priceToPercent(budget, bounds.min, bounds.max)}%`);

  const pins = allItems.map((item, index) => {
    const button = document.createElement("button");
    button.className = "pin";
    button.type = "button";
    button.dataset.category = item.category;
    button.dataset.muted = String(!visibleIds.has(item.id));
    button.dataset.active = String(item.id === state.openId);
    button.style.setProperty("--x", `${priceToPercent(item.price, bounds.min, bounds.max)}%`);
    button.style.setProperty("--lane", String(lanes.indexOf(item.category)));
    button.style.setProperty("--drift", String(index % 3));
    button.title = `${formatMoney(item)} · ${item.title}`;
    button.innerHTML = `<span>${shortTitle(item.title)}</span>`;
    button.addEventListener("click", () => {
      state.openId = item.id;
      if (item.price > budget) {
        state.budgetPercent = priceToPercent(item.price, bounds.min, bounds.max);
        elements.budget.value = String(state.budgetPercent);
      }
      render();
      document.querySelector(`[data-card-id="${item.id}"]`)?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
    return button;
  });

  const lanesLayer = document.createElement("div");
  lanesLayer.className = "lanes";
  lanesLayer.style.setProperty("--lane-count", String(lanes.length));
  lanesLayer.replaceChildren(budgetCurtain, ...pins);

  const bandLayer = document.createElement("div");
  bandLayer.className = "band-labels";
  bandLayer.replaceChildren(
    ...priceBands[state.region].map((band) => {
      const start = priceToPercent(Math.max(band.min || bounds.min, bounds.min), bounds.min, bounds.max);
      const end = priceToPercent(Math.min(Number.isFinite(band.max) ? band.max : bounds.max, bounds.max), bounds.min, bounds.max);
      const marker = document.createElement("span");
      marker.style.setProperty("--x", `${start}%`);
      marker.style.setProperty("--w", `${Math.max(4, end - start)}%`);
      marker.textContent = band.label;
      return marker;
    })
  );

  elements.map.replaceChildren(axis, lanesLayer, bandLayer);
}

function renderEquivalence(allItems, visibleItems) {
  const selected = allItems.find((item) => item.id === state.openId) ?? visibleItems.at(-1) ?? allItems[0];
  const equivalents = getEquivalenceSet(allItems, selected.id, 4);
  const band = getBandForPrice(state.region, selected.price);

  const header = document.createElement("div");
  header.className = "equivalence-head";
  header.innerHTML = `
    <p>${band.label}</p>
    <strong>${formatMoney(selected)} · ${selected.title}</strong>
    <span>${selected.meaning}</span>
  `;

  const list = document.createElement("div");
  list.className = "equivalence-list";
  list.replaceChildren(
    ...equivalents.map((item) => {
      const article = document.createElement("article");
      article.className = "equivalence-item";
      article.dataset.category = item.category;
      article.innerHTML = `
        <small>${categoryLabels[item.category]} · ${formatMoney(item)}</small>
        <strong>${item.title}</strong>
        <span>${item.meaning}</span>
      `;
      article.addEventListener("click", () => {
        state.openId = item.id;
        render();
      });
      return article;
    })
  );

  elements.equivalence.replaceChildren(header, list);
}

function renderItems(items) {
  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = state.region === "cn" ? "这个预算和筛选下暂时没有项目。" : "No items match this lens yet.";
    elements.itemList.replaceChildren(empty);
    return;
  }

  const groups = groupByBand(items);
  elements.itemList.replaceChildren(
    ...groups.map((group) => {
      const section = document.createElement("section");
      section.className = "band-section";
      section.innerHTML = `<h2>${group.band.label}</h2>`;

      const grid = document.createElement("div");
      grid.className = "cards";
      grid.replaceChildren(...group.items.map(renderCard));

      section.append(grid);
      return section;
    })
  );
}

function renderCard(item) {
  const details = document.createElement("details");
  details.className = "purchase-card";
  details.dataset.category = item.category;
  details.dataset.cardId = item.id;
  details.open = item.id === state.openId;

  details.addEventListener("toggle", () => {
    if (details.open) {
      state.openId = item.id;
      renderEquivalence(getCatalog(state.region), filterCatalog(getCatalog(state.region)));
    }
  });

  details.innerHTML = `
    <summary>
      <span class="card-price">${formatMoney(item)}</span>
      <span class="card-title">${item.title}</span>
      <span class="card-category">${categoryLabels[item.category]}</span>
      <span class="card-meaning">${item.meaning}</span>
    </summary>
    <div class="card-body">
      <p>${item.details.buys}</p>
      <p>${item.details.swap}</p>
      <blockquote>${item.details.question}</blockquote>
    </div>
  `;

  return details;
}

function groupByBand(items) {
  const groups = new Map();

  for (const item of items) {
    const band = getBandForPrice(state.region, item.price);
    if (!groups.has(band.id)) groups.set(band.id, { band, items: [] });
    groups.get(band.id).items.push(item);
  }

  return [...groups.values()];
}

function getBounds(items) {
  return {
    min: Math.max(0.01, items[0].price),
    max: items.at(-1).price
  };
}

function percentToPrice(percent, min, max) {
  const minLog = Math.log10(min);
  const maxLog = Math.log10(max);
  const price = 10 ** (minLog + (percent / 100) * (maxLog - minLog));

  return nicePrice(price);
}

function nicePrice(price) {
  if (price < 10) return Math.round(price * 4) / 4;
  if (price < 100) return Math.round(price);
  if (price < 1000) return Math.round(price / 10) * 10;
  if (price < 10000) return Math.round(price / 100) * 100;
  return Math.round(price / 1000) * 1000;
}

function makeAxisStops(region) {
  if (region === "us") {
    return [0.25, 1, 5, 20, 100, 500, 2000, 10000, 80000];
  }

  return [1, 5, 30, 100, 500, 2000, 10000, 50000, 150000];
}

function shortTitle(title) {
  const compact = title.replace(/\s+/g, "");
  return compact.length > 8 ? `${compact.slice(0, 8)}...` : compact;
}

init();
