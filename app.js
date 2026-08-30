const reviews = [
  {
    id: "solo-stove-yukon",
    brand: "Solo Stove",
    product: "Yukon 2.0",
    category: "heat",
    type: "fire-pit",
    verdict: "buy",
    summary:
      "A smokeless wood pit that actually earns the word. Heat is close-range and social, not whole-yard. Worth it if you want a fire without sending guests upwind.",
    caveat: "Pellet and gas versions exist; this verdict is for the wood Yukon only."
  },
  {
    id: "bromic-tungsten",
    brand: "Bromic",
    product: "Tungsten Smart-Heat",
    category: "heat",
    type: "heater",
    verdict: "wait",
    summary:
      "Serious infrared for a covered patio. It warms people, not air, which is the right physics outdoors. Price and install are the whole story.",
    caveat: "Skip the portable mushroom heaters if you already decided you want mounted infrared — but do not buy this until you measure mounting height and gas line run."
  },
  {
    id: "mistcooling-patio",
    brand: "MistCooling",
    product: "High-pressure patio misting kit",
    category: "cold",
    type: "cooler",
    verdict: "buy",
    summary:
      "Dry-climate cooling that works because water flashes off before it soaks the furniture. Not a substitute for shade, and a bad idea in humid summers.",
    caveat: "If your August air already feels like a wet towel, look at shade and airflow instead."
  }
];

const els = {
  category: document.getElementById("filter-category"),
  type: document.getElementById("filter-type"),
  verdict: document.getElementById("filter-verdict"),
  list: document.getElementById("reviews"),
  count: document.getElementById("filter-count")
};

function matches(review) {
  return (
    (els.category.value === "all" || review.category === els.category.value) &&
    (els.type.value === "all" || review.type === els.type.value) &&
    (els.verdict.value === "all" || review.verdict === els.verdict.value)
  );
}

function render() {
  const shown = reviews.filter(matches);
  els.count.textContent =
    shown.length === reviews.length
      ? `${reviews.length} reviews`
      : `${shown.length} of ${reviews.length} reviews`;

  if (!shown.length) {
    els.list.innerHTML = `<p class="empty">Nothing in this cut. Clear a filter.</p>`;
    return;
  }

  els.list.innerHTML = shown
    .map(
      (r) => `
      <article class="review" data-id="${r.id}">
        <header>
          <h2>${r.brand} ${r.product}</h2>
          <span class="verdict ${r.verdict}">${r.verdict}</span>
        </header>
        <p class="meta">${r.category} · ${r.type.replace("-", " ")}</p>
        <p>${r.summary}</p>
        <p>${r.caveat}</p>
      </article>`
    )
    .join("");
}

[els.category, els.type, els.verdict].forEach((el) =>
  el.addEventListener("change", render)
);

render();
