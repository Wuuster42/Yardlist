const reviews = [
  { id: "solo-stove-yukon", brand: "Solo Stove", product: "Yukon 2.0", category: "heat", type: "fire-pit", verdict: "buy", summary: "A smokeless wood pit that actually earns the word. Heat is close-range and social, not whole-yard." },
  { id: "bromic-tungsten", brand: "Bromic", product: "Tungsten Smart-Heat", category: "heat", type: "heater", verdict: "wait", summary: "Serious infrared for a covered patio. It warms people, not air. Price and install are the whole story." },
  { id: "mistcooling-patio", brand: "MistCooling", product: "High-pressure patio misting kit", category: "cold", type: "cooler", verdict: "buy", summary: "Dry-climate cooling that works because water flashes off before it soaks the furniture." },
  { id: "breeo-x24", brand: "Breeo", product: "X24", category: "heat", type: "fire-pit", verdict: "wait", summary: "A cook-first steel pit. Better as a grill that happens to gather people than as a smokeless showpiece." },
  { id: "amazon-mushroom-heater", brand: "Generic", product: "Propane mushroom heater", category: "heat", type: "heater", verdict: "skip", summary: "Heats a hat, not a patio. Tip-over risk and wasted propane for anyone sitting more than an arm’s length away." },
  { id: "portacool-jetstream", brand: "Portacool", product: "Jetstream 260", category: "cold", type: "cooler", verdict: "wait", summary: "Evaporative cooling that moves real air in dry heat. Loud, wet, and useless when humidity is already high." }
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
  els.count.textContent = shown.length === reviews.length ? `${reviews.length} reviews` : `${shown.length} of ${reviews.length} reviews`;
  if (!shown.length) {
    els.list.innerHTML = `<p class="empty">Nothing in this cut. Clear a filter.</p>`;
    return;
  }
  els.list.innerHTML = shown.map((r) => `
      <article class="review">
        <header>
          <h2><a href="reviews/${r.id}.html">${r.brand} ${r.product}</a></h2>
          <span class="verdict ${r.verdict}">${r.verdict}</span>
        </header>
        <p class="meta">${r.category} · ${r.type.replace("-", " ")}</p>
        <p>${r.summary}</p>
        <p><a class="more" href="reviews/${r.id}.html">Full page</a></p>
      </article>`).join("");
}
[els.category, els.type, els.verdict].forEach((el) => el.addEventListener("change", render));
render();
