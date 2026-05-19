import {
  categoryLabels,
  compareAtAmount,
  filterCatalog,
  formatMoney,
  getBandForPrice,
  getCatalog,
  getEquivalenceSet,
  getProfiles,
  priceToPercent
} from "./catalog.mjs";
import { clientYToRailPercent, pickSeparatedRailPins } from "./interaction.mjs";

const state = {
  region: "cn",
  profileId: "builder",
  sensitivity: "medium",
  mode: "axis",
  amountPercent: 58,
  selectedId: "cn-genshin-648",
  query: ""
};

let isMouseDraggingRail = false;
let isPointerDraggingRail = false;
let suppressNextRailClick = false;

const elements = {
  app: document.querySelector("#app"),
  amountBand: document.querySelector("#amount-band"),
  amountLabel: document.querySelector("#amount-label"),
  amountMeaning: document.querySelector("#amount-meaning"),
  attentionList: document.querySelector("#attention-list"),
  focusCard: document.querySelector("#focus-card"),
  ledger: document.querySelector("#ledger"),
  profileBar: document.querySelector("#profile-bar"),
  profileLine: document.querySelector("#profile-line"),
  query: document.querySelector("#query"),
  rail: document.querySelector("#amount-rail"),
  railMarks: document.querySelector("#rail-marks"),
  modeButtons: document.querySelectorAll("button[data-mode]"),
  regionButtons: document.querySelectorAll("button[data-region]"),
  sensitivityButtons: document.querySelectorAll("button[data-sensitivity]"),
  trueList: document.querySelector("#true-list"),
  verticalSlider: document.querySelector("#vertical-slider"),
  wishlist: document.querySelector("#wishlist")
};

const presets = {
  cn: [33, 70, 148, 198, 299, 399, 648, 899, 1299, 1899, 2999, 5999, 8499, 15000],
  us: [5.5, 15, 35, 80, 180, 350, 700, 1400, 5000, 10000]
};

function init() {
  elements.regionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.region = button.dataset.region;
      state.profileId = getProfiles(state.region)[0].id;
      state.selectedId = state.region === "cn" ? "cn-genshin-648" : "us-specialty-coffee";
      state.amountPercent = state.region === "cn" ? 58 : 35;
      state.mode = "axis";
      state.query = "";
      elements.query.value = "";
      elements.verticalSlider.value = String(state.amountPercent);
      render();
    });
  });

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      render();
    });
  });

  elements.sensitivityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.sensitivity = button.dataset.sensitivity;
      render();
    });
  });

  elements.verticalSlider.addEventListener("input", () => {
    setAmountPercent(Number(elements.verticalSlider.value));
  });

  elements.rail.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    event.preventDefault();
    isPointerDraggingRail = true;
    suppressNextRailClick = true;
    elements.rail.setPointerCapture(event.pointerId);
    updateAmountFromPointer(event);
  });

  elements.rail.addEventListener("pointermove", (event) => {
    if (!elements.rail.hasPointerCapture(event.pointerId)) return;
    event.preventDefault();
    updateAmountFromPointer(event);
  });

  elements.rail.addEventListener("pointerup", (event) => {
    isPointerDraggingRail = false;
    event.preventDefault();
    if (elements.rail.hasPointerCapture(event.pointerId)) {
      elements.rail.releasePointerCapture(event.pointerId);
    }
    window.setTimeout(() => {
      suppressNextRailClick = false;
    }, 0);
  });

  elements.rail.addEventListener("pointercancel", (event) => {
    isPointerDraggingRail = false;
    if (elements.rail.hasPointerCapture(event.pointerId)) {
      elements.rail.releasePointerCapture(event.pointerId);
    }
    suppressNextRailClick = false;
  });

  // Dragging rerenders rail marks under the pointer; ignore the synthetic release click.
  elements.rail.addEventListener("click", (event) => {
    if (!suppressNextRailClick) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    suppressNextRailClick = false;
  }, true);

  elements.rail.addEventListener("lostpointercapture", () => {
    isPointerDraggingRail = false;
  });

  elements.rail.addEventListener("mousedown", (event) => {
    startMouseRailDrag(event);
  });

  document.addEventListener("mousedown", (event) => {
    if (!event.target.closest("#amount-rail")) return;
    startMouseRailDrag(event);
  }, true);

  window.addEventListener("mousemove", (event) => {
    if (!isMouseDraggingRail || isPointerDraggingRail) return;
    updateAmountFromPointer(event);
  });

  window.addEventListener("mouseup", () => {
    isMouseDraggingRail = false;
    window.setTimeout(() => {
      suppressNextRailClick = false;
    }, 0);
  });

  elements.query.addEventListener("input", () => {
    state.query = elements.query.value;
    if (state.query.trim()) {
      state.mode = "list";
    }
    render();
  });

  render();
}

function updateAmountFromPointer(event) {
  const line = elements.rail.querySelector(".rail-line");
  setAmountPercent(clientYToRailPercent(event.clientY, line.getBoundingClientRect()));
}

function startMouseRailDrag(event) {
  if (isPointerDraggingRail || event.target.closest("button")) return;
  event.preventDefault();
  isMouseDraggingRail = true;
  suppressNextRailClick = true;
  updateAmountFromPointer(event);
}

function setAmountPercent(percent) {
  state.amountPercent = percent;
  state.selectedId = "";
  render();
}

function render() {
  const items = getCatalog(state.region);
  const bounds = getBounds(items);
  const selected = items.find((item) => item.id === state.selectedId);
  const amount = selected?.price ?? percentToPrice(state.amountPercent, bounds.min, bounds.max);
  const comparison = compareAtAmount(items, amount, {
    profileId: state.profileId,
    sensitivity: state.sensitivity,
    limit: 9
  });
  const filtered = filterCatalog(items, { budget: bounds.max, query: state.query });
  const focusItem = selected ?? nearestItem(items, amount);
  const band = getBandForPrice(state.region, amount);

  state.amountPercent = priceToPercent(amount, bounds.min, bounds.max);
  elements.verticalSlider.value = String(state.amountPercent);
  elements.app.dataset.region = state.region;
  elements.app.dataset.sensitivity = state.sensitivity;
  elements.app.dataset.mode = state.mode;

  elements.regionButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.region === state.region));
  });
  elements.modeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.mode === state.mode));
  });
  elements.sensitivityButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.sensitivity === state.sensitivity));
  });

  elements.amountLabel.textContent = formatMoney(state.region, amount);
  elements.amountMeaning.textContent = selected
    ? `正在看：${selected.title}`
    : state.region === "cn"
      ? "拖动金额，看这笔钱可以变成什么"
      : "Drag the amount and compare what it can become";
  elements.amountBand.textContent = bandLine(state.region, band.id);

  renderProfiles(comparison.profile);
  renderRail(items, bounds, amount);
  renderFocus(focusItem, amount, getEquivalenceSet(items, focusItem.id, 4));
  renderCards(elements.trueList, comparison.trueOptions, "true");
  renderCards(elements.attentionList, comparison.attention, "attention");
  renderWishlist(filtered, comparison.profile, amount);
  renderLedger(comparison, amount);
}

function renderProfiles(activeProfile) {
  const profiles = getProfiles(state.region);
  elements.profileLine.textContent = activeProfile.line;
  elements.profileBar.replaceChildren(
    ...profiles.map((profile) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "profile-chip";
      button.textContent = profile.label;
      button.setAttribute("aria-pressed", String(profile.id === activeProfile.id));
      button.addEventListener("click", () => {
        state.profileId = profile.id;
        render();
      });
      return button;
    })
  );
}

function renderRail(items, bounds, amount) {
  const chosenPresets = presets[state.region] ?? presets.cn;
  elements.rail.style.setProperty("--amount-y", `${100 - priceToPercent(amount, bounds.min, bounds.max)}%`);

  const marks = selectRailMarks(chosenPresets, bounds, amount).map((value) => {
    const mark = document.createElement("span");
    mark.className = "rail-mark";
    mark.style.setProperty("--y", `${100 - priceToPercent(value, bounds.min, bounds.max)}%`);
    mark.dataset.active = String(Math.abs(Math.log(value / amount)) < 0.08);
    mark.innerHTML = `<span>${formatMoney(state.region, value)}</span>`;
    return mark;
  });

  const itemPins = selectRailPins(items, bounds, amount)
    .map((item) => {
      const pin = document.createElement("span");
      pin.className = "rail-pin";
      pin.dataset.lens = item.lens;
      pin.dataset.active = String(item.id === state.selectedId);
      pin.style.setProperty("--y", `${100 - priceToPercent(item.price, bounds.min, bounds.max)}%`);
      pin.title = `${formatMoney(item)} · ${item.title}`;
      pin.textContent = item.brand || item.title.slice(0, 5);
      return pin;
    });

  elements.railMarks.replaceChildren(...marks, ...itemPins);
}

function selectRailMarks(values, bounds, amount) {
  return pickSeparatedRailPins(values.map((value, index) => {
    const active = Math.abs(Math.log(value / amount)) < 0.08;
    const edge = index === 0 || index === values.length - 1 ? 2 : 0;
    const closeness = 1 - Math.min(1, Math.abs(Math.log(value / amount)) / Math.log(10));

    return {
      value,
      side: "center",
      y: 100 - priceToPercent(value, bounds.min, bounds.max),
      score: edge + closeness * 8 + (active ? 100 : 0),
      required: active
    };
  }), {
    maxPerSide: 10,
    maxPins: 10,
    minGapPercent: 5.2
  })
    .map((candidate) => candidate.value)
    .sort((left, right) => left - right);
}

function selectRailPins(items, bounds, amount) {
  const candidates = items
    .filter((item) => item.lens === "attention" || item.truthScore >= 5)
    .map((item) => ({
      item,
      side: item.lens === "attention" ? "left" : "right",
      y: 100 - priceToPercent(item.price, bounds.min, bounds.max),
      score: railImportance(item, amount),
      required: item.id === state.selectedId
    }));

  return pickSeparatedRailPins(candidates, {
    maxPerSide: 6,
    maxPins: 12,
    minGapPercent: 8.5
  })
    .map((candidate) => candidate.item)
    .sort((left, right) => left.price - right.price)
    .slice(0, 12);
}

function railImportance(item, amount) {
  const closeness = 1 - Math.min(1, Math.abs(Math.log(item.price / amount)) / Math.log(8));
  const active = item.id === state.selectedId ? 100 : 0;
  const lens = item.lens === "attention" ? 3 : item.truthScore;
  const brand = item.brand ? 0.8 : 0;

  return active + closeness * 8 + lens + brand;
}

function renderFocus(item, amount, equivalents) {
  const scoreLabel = item.lens === "attention" ? "容易被带走" : item.lens === "true" ? "很可能是真的" : "要看用法";
  const brand = item.brand ? `<span class="brand">${item.brand}</span>` : "";
  const equivalentButtons = equivalents.map((entry) => `
    <button class="equivalent" type="button" data-item-id="${entry.id}">
      <span>${formatMoney(entry)}</span>
      <strong>${entry.title}</strong>
    </button>
  `).join("");

  elements.focusCard.innerHTML = `
    <div class="focus-meta">
      <span>${categoryLabels[item.category]}</span>
      <span>${scoreLabel}</span>
      ${brand}
    </div>
    <h2>${item.title}</h2>
    <p>${item.meaning}</p>
    <div class="focus-money">
      <strong>${formatMoney(item)}</strong>
      <span>和当前金额 ${formatMoney(state.region, amount)} 放在同一把尺上。</span>
    </div>
    <div class="truth-meter" aria-label="真实度 ${item.truthScore}/5">
      ${Array.from({ length: 5 }, (_, index) => `<i data-on="${index < item.truthScore}"></i>`).join("")}
    </div>
    <div class="focus-details">
      <div>
        <span>买到什么</span>
        <p>${item.details.buys}</p>
      </div>
      <div>
        <span>同价位也许是</span>
        <p>${item.details.swap}</p>
      </div>
    </div>
    <blockquote>${item.details.question}</blockquote>
    ${equivalentButtons ? `
      <div class="equivalence-set" aria-label="同价位横向对照">
        ${equivalentButtons}
      </div>
    ` : ""}
  `;

  elements.focusCard.querySelectorAll("[data-item-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectItem(button.dataset.itemId, { mode: "axis" });
    });
  });
}

function renderCards(container, items, mode) {
  if (items.length === 0) {
    container.innerHTML = `<p class="empty">${mode === "attention" ? "这个金额附近暂时没有明显注意力消费。" : "试着把金额调高或换一个奖励画像。"}</p>`;
    return;
  }

  container.replaceChildren(...items.slice(0, 9).map(renderCard));
}

function renderCard(item) {
  const article = document.createElement("article");
  article.className = "money-card";
  article.dataset.lens = item.lens;
  article.dataset.cardId = item.id;
  article.innerHTML = `
    <button class="card-main" type="button">
      <span class="card-top">
        <span>${formatMoney(item)}</span>
        <span>${item.brand || categoryLabels[item.category]}</span>
      </span>
      <strong>${item.title}</strong>
      <span class="card-meaning">${item.meaning}</span>
      <span class="card-action">放到价值轴上</span>
    </button>
  `;

  article.querySelector(".card-main").addEventListener("click", () => {
    selectItem(item.id, { mode: "axis" });
  });

  return article;
}

function renderWishlist(items, profile, amount) {
  const query = state.query.trim().toLowerCase();
  const hasQuery = query.length > 0;
  const weighted = items
    .filter((item) => hasQuery || item.lens !== "attention")
    .map((item) => ({
      item,
      score: item.truthScore
        + item.rewardTags.reduce((total, tag) => total + (profile.weights[tag] ?? 0), 0)
        + queryBoost(item, query)
    }))
    .sort((left, right) => right.score - left.score || Math.abs(left.item.price - amount) - Math.abs(right.item.price - amount))
    .slice(0, 12);

  elements.wishlist.replaceChildren(
    ...weighted.map(({ item }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "wish";
      button.innerHTML = `<span>${formatMoney(item)}</span><strong>${item.title}</strong>`;
      button.addEventListener("click", () => {
        selectItem(item.id, { mode: "axis" });
      });
      return button;
    })
  );
}

function queryBoost(item, query) {
  if (!query) return 0;

  if (String(item.price).includes(query)) return 20;
  if ([item.title, item.brand].some((text) => text.toLowerCase().includes(query))) return 12;
  if ([item.meaning, item.details.buys, item.details.swap].some((text) => text.toLowerCase().includes(query))) return 4;
  return 0;
}

function selectItem(itemId, { mode = state.mode } = {}) {
  state.selectedId = itemId;
  state.mode = mode;
  render();
}

function renderLedger(comparison, amount) {
  const trueTotal = comparison.trueOptions.slice(0, 3).reduce((total, item) => total + item.truthScore, 0);
  const attentionTotal = comparison.attention.slice(0, 3).reduce((total, item) => total + item.truthScore, 0);
  const delta = Math.max(0, trueTotal - attentionTotal);

  elements.ledger.innerHTML = `
    <div>
      <span>当前金额</span>
      <strong>${formatMoney(state.region, amount)}</strong>
    </div>
    <div>
      <span>真实感差值</span>
      <strong>+${delta}</strong>
    </div>
    <div>
      <span>敏感度</span>
      <strong>${sensitivityLabel(state.sensitivity)}</strong>
    </div>
  `;
}

function getBounds(items) {
  return {
    min: Math.max(0.01, items[0].price),
    max: items.at(-1).price
  };
}

function nearestItem(items, amount) {
  return [...items].sort((left, right) => Math.abs(left.price - amount) - Math.abs(right.price - amount))[0];
}

function percentToPrice(percent, min, max) {
  const minLog = Math.log10(min);
  const maxLog = Math.log10(max);
  const price = 10 ** (minLog + (percent / 100) * (maxLog - minLog));
  const preset = nearestPresetPrice(price);

  return preset ?? nicePrice(price);
}

function nearestPresetPrice(price) {
  const chosenPresets = presets[state.region] ?? [];

  return chosenPresets.find((value) => Math.abs(Math.log(value / price)) < 0.018);
}

function nicePrice(price) {
  if (price < 10) return Math.round(price * 4) / 4;
  if (price < 100) return Math.round(price);
  if (price < 1000) return Math.round(price);
  if (price < 3000) return Math.round(price / 10) * 10;
  if (price < 10000) return Math.round(price / 100) * 100;
  return Math.round(price / 1000) * 1000;
}

function sensitivityLabel(sensitivity) {
  return {
    low: "迟钝一点",
    medium: "正常",
    high: "很敏感"
  }[sensitivity] ?? sensitivity;
}

function bandLine(region, bandId) {
  const cnLines = {
    "loose-change": "零钱：不是小到没意义，而是小到最容易被忽略。",
    "small-ritual": "小仪式钱：一杯咖啡、一月网盘、一次不被打断。",
    "one-evening": "一晚钱：已经能买到一段明确的身体、关系或注意力。",
    "one-day": "一天钱：开始能决定一个周末、一件工具、一次检查。",
    "one-weekend": "周末钱：它可以是抽卡，也可以是回家、椅子、课程或作品。",
    "one-tool": "工具钱：接近手机、电脑和长期能力的入口。",
    "life-room": "余地钱：未花出去时，常常就是选择权本身。"
  };
  const usLines = {
    "loose-change": "Loose change: tiny enough to disappear, real enough to steer a day.",
    "small-ritual": "Small ritual money: coffee, storage, transit, one protected pause.",
    "one-evening": "One evening money: a meal, a room, a ride, a focused hour.",
    "one-day": "One day money: it starts changing tools, health, and plans.",
    "one-weekend": "Weekend money: travel, repair, learning, or a larger buffer.",
    "one-tool": "Tool money: phone, laptop, furniture, or capability.",
    "life-room": "Room-to-move money: unspent, it may be freedom."
  };

  return (region === "us" ? usLines : cnLines)[bandId] ?? "";
}

init();
