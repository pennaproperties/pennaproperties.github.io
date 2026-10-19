// ===========================================================
//  PENNA PROPERTIES - SHARED APP LOGIC
// ===========================================================

// --- Mobile menu toggle ---
function toggleMenu() {
    const links = document.getElementById('navLinks');
    if (links) links.classList.toggle('open');
}

// --- Build a single property card ---
function buildPropertyCard(p) {
    const typeTag = p.type === 'plot'
        ? '<span class="tag tag-plot">PLOT</span>'
        : '<span class="tag tag-apartment">APARTMENT</span>';

    const newTag = p.newlyAvailable ? '<span class="tag-new">✨ NEW</span>' : '';

    return `
        <a href="property.html?id=${p.id}" class="property-card">
            <div class="card-img">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                ${typeTag}
                ${newTag}
            </div>
            <div class="card-body">
                <h3>${p.title}</h3>
                <div class="location">📍 ${p.location}</div>
                <div class="meta">
                    <span class="price">${p.price}</span>
                    <span class="area">${p.area}</span>
                </div>
            </div>
        </a>
    `;
}

// --- Render a list of properties into a container ---
function renderProperties(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--gray);grid-column:1/-1;">No properties found in this category.</p>';
        return;
    }

    container.innerHTML = list.map(buildPropertyCard).join('');
}

// --- Get URL query parameter ---
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// --- Find a property by id ---
function findProperty(id) {
    return PROPERTIES.find(function (p) { return p.id === id; });
}

// --- Build one testimonial card ---
function buildTestimonialCard(t) {
    const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    return `
        <div class="testimonial-card">
            <div class="testimonial-head">
                <img src="${t.image}" alt="${t.name}" class="testimonial-photo" loading="lazy">
                <div class="testimonial-person">
                    <div class="t-name">${t.name}</div>
                    <div class="t-location">📍 ${t.location}</div>
                </div>
            </div>
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-quote">${t.quote}</p>
        </div>
    `;
}

// --- Render the moving testimonials carousel ---
// The list is duplicated so the scroll loops seamlessly.
function renderTestimonials(trackId) {
    const track = document.getElementById(trackId);
    if (!track || typeof TESTIMONIALS === 'undefined') return;

    const cards = TESTIMONIALS.map(buildTestimonialCard).join('');
    track.innerHTML = cards + cards; // duplicate for seamless loop
}

// ===========================================================
//  CATALOG: ADVANCED FILTERS (category, location, budget)
// ===========================================================

// Get the unique list of categories from the data (for the dropdown)
function getCategories() {
    const set = {};
    PROPERTIES.forEach(function (p) { if (p.category) set[p.category] = true; });
    return Object.keys(set);
}

// Get the unique list of locations from the data
function getLocations() {
    const set = {};
    PROPERTIES.forEach(function (p) { if (p.location) set[p.location] = true; });
    return Object.keys(set).sort();
}

// Budget ranges for the dropdown. [min, max] in rupees. max = null means "and above".
const BUDGET_RANGES = [
    { label: "Under ₹15 Lakh", min: 0, max: 1500000 },
    { label: "₹15 Lakh - ₹30 Lakh", min: 1500000, max: 3000000 },
    { label: "₹30 Lakh - ₹50 Lakh", min: 3000000, max: 5000000 },
    { label: "₹50 Lakh - ₹1 Crore", min: 5000000, max: 10000000 },
    { label: "Above ₹1 Crore", min: 10000000, max: null }
];

// Populate the filter dropdowns on the catalog page
function initCatalogFilters() {
    const catSel = document.getElementById('filterCategory');
    const locSel = document.getElementById('filterLocation');
    const budSel = document.getElementById('filterBudget');
    if (!catSel) return; // not on catalog page

    getCategories().forEach(function (c) {
        catSel.insertAdjacentHTML('beforeend', '<option value="' + c + '">' + c + '</option>');
    });
    getLocations().forEach(function (l) {
        locSel.insertAdjacentHTML('beforeend', '<option value="' + l + '">' + l + '</option>');
    });
    BUDGET_RANGES.forEach(function (b, i) {
        budSel.insertAdjacentHTML('beforeend', '<option value="' + i + '">' + b.label + '</option>');
    });

    applyCatalogFilters(); // initial render
}

// Apply all active filters and render results
function applyCatalogFilters() {
    const category = document.getElementById('filterCategory').value;
    const location = document.getElementById('filterLocation').value;
    const budgetIdx = document.getElementById('filterBudget').value;

    let results = PROPERTIES.filter(function (p) {
        if (category && p.category !== category) return false;
        if (location && p.location !== location) return false;
        if (budgetIdx !== "") {
            const range = BUDGET_RANGES[budgetIdx];
            if (p.priceValue < range.min) return false;
            if (range.max !== null && p.priceValue > range.max) return false;
        }
        return true;
    });

    renderProperties('allGrid', results);

    const countEl = document.getElementById('filterCount');
    if (countEl) {
        countEl.textContent = results.length + (results.length === 1 ? ' property found' : ' properties found');
    }
}

// Clear all filters
function clearCatalogFilters() {
    document.getElementById('filterCategory').value = "";
    document.getElementById('filterLocation').value = "";
    document.getElementById('filterBudget').value = "";
    applyCatalogFilters();
}
