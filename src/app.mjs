import {
  categoryLabels,
  compareAtAmount,
  filterCatalog,
  formatMoney,
  getCatalog,
  getProfiles,
  priceToPercent
} from "./catalog.mjs";

const state = {
  region: "cn",
  profileId: "builder",
  sensitivity: "medium",
  amountPercent: 58,
  selectedId: "cn-genshin-648",
  query: ""
};

const elements = {
  app: document.querySelector("#app"),
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
  regionButtons: document.querySelectorAll("[data-region]"),
  sensitivityButtons: document.querySelectorAll("[data-sensitivity]"),
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
      elements.verticalSlider.value = String(state.amountPercent);
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
    state.amountPercent = Number(elements.verticalSlider.value);
    state.selectedId = "";
    render();
  });

  elements.query.addEventListener("input", () => {
    state.query = elements.query.value;
    render();
  });

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

  state.amountPercent = priceToPercent(amount, bounds.min, bounds.max);
  elements.verticalSlider.value = String(state.amountPercent);
  elements.app.dataset.region = state.region;
  elements.app.dataset.sensitivity = state.sensitivity;

  elements.regionButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.region === state.region));
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

  renderProfiles(comparison.profile);
  renderRail(items, bounds, amount);
  renderFocus(selected ?? nearestItem(items, amount), amount);
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

  const marks = chosenPresets.map((value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rail-mark";
    button.style.setProperty("--y", `${100 - priceToPercent(value, bounds.min, bounds.max)}%`);
    button.dataset.active = String(Math.abs(Math.log(value / amount)) < 0.08);
    button.innerHTML = `<span>${formatMoney(state.region, value)}</span>`;
    button.addEventListener("click", () => {
      state.amountPercent = priceToPercent(value, bounds.min, bounds.max);
      const exact = items.find((item) => Math.abs(item.price - value) < 0.01);
      state.selectedId = exact?.id ?? "";
      render();
    });
    return button;
  });

  const itemPins = selectRailPins(items, bounds, amount)
    .map((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "rail-pin";
      button.dataset.lens = item.lens;
      button.dataset.active = String(item.id === state.selectedId);
      button.style.setProperty("--y", `${100 - priceToPercent(item.price, bounds.min, bounds.max)}%`);
      button.title = `${formatMoney(item)} · ${item.title}`;
      button.textContent = item.brand || item.title.slice(0, 5);
      button.addEventListener("click", () => {
        state.selectedId = item.id;
        state.amountPercent = priceToPercent(item.price, bounds.min, bounds.max);
        render();
      });
      return button;
    });

  elements.railMarks.replaceChildren(...marks, ...itemPins);
}

function selectRailPins(items, bounds, amount) {
  const candidates = items
    .filter((item) => item.lens === "attention" || item.truthScore >= 5)
    .map((item) => ({
      item,
      side: item.lens === "attention" ? "left" : "right",
      y: 100 - priceToPercent(item.price, bounds.min, bounds.max),
      score: railImportance(item, amount)
    }))
    .sort((left, right) => right.score - left.score);
  const buckets = new Map();
  const selected = [];

  for (const candidate of candidates) {
    const bucket = `${candidate.side}:${Math.round(candidate.y / 5)}`;
    const count = buckets.get(bucket) ?? 0;
    const isActive = candidate.item.id === state.selectedId;
    const nearCurrent = Math.abs(Math.log(candidate.item.price / amount)) < Math.log(2.2);

    if (!isActive && !nearCurrent && selected.length > 42) continue;
    if (!isActive && count >= 2) continue;

    buckets.set(bucket, count + 1);
    selected.push(candidate.item);
  }

  return selected
    .sort((left, right) => left.price - right.price)
    .slice(0, 58);
}

function railImportance(item, amount) {
  const closeness = 1 - Math.min(1, Math.abs(Math.log(item.price / amount)) / Math.log(8));
  const active = item.id === state.selectedId ? 100 : 0;
  const lens = item.lens === "attention" ? 3 : item.truthScore;
  const brand = item.brand ? 0.8 : 0;

  return active + closeness * 8 + lens + brand;
}

function renderFocus(item, amount) {
  const scoreLabel = item.lens === "attention" ? "容易被带走" : item.lens === "true" ? "很可能是真的" : "要看用法";
  const brand = item.brand ? `<span class="brand">${item.brand}</span>` : "";

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
    <blockquote>${item.details.question}</blockquote>
  `;
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
      <span>${item.meaning}</span>
    </button>
    <details>
      <summary>看清楚这笔钱</summary>
      <p>${item.details.buys}</p>
      <p>${item.details.swap}</p>
      <blockquote>${item.details.question}</blockquote>
    </details>
  `;

  article.querySelector(".card-main").addEventListener("click", () => {
    state.selectedId = item.id;
    render();
  });

  return article;
}

function renderWishlist(items, profile, amount) {
  const weighted = items
    .filter((item) => item.lens !== "attention")
    .map((item) => ({
      item,
      score: item.truthScore + item.rewardTags.reduce((total, tag) => total + (profile.weights[tag] ?? 0), 0)
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
        state.selectedId = item.id;
        render();
      });
      return button;
    })
  );
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

  return nicePrice(price);
}

function nicePrice(price) {
  if (price < 10) return Math.round(price * 4) / 4;
  if (price < 100) return Math.round(price);
  if (price < 1000) return Math.round(price / 10) * 10;
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

init();
