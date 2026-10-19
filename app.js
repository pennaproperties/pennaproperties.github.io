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
