/* ══════════════════════════════════════════════════
   EXPLORE CEYLON — main.js
   All data, rendering logic, and event handlers
══════════════════════════════════════════════════ */

function updateStats() {
    // 1. Total number of hiking destinations
    const totalPeaks = hikes.length;

    // 2. Calculate total trail distance
    const totalDistance = hikes.reduce((total, hike) => {
        const distance = parseFloat(hike.distance);
        return total + (isNaN(distance) ? 0 : distance);
    }, 0);

    // 3. Find the highest elevation
    const highestPeak = hikes.reduce((highest, hike) => {
        const elevation = parseFloat(hike.elevation);
        return Math.max(highest, isNaN(elevation) ? 0 : elevation);
    }, 0);

    // 4. Count unique regions
    const regions = new Set(
        hikes
            .map(hike => hike.region)
            .filter(region => region)
    );

    const totalRegions = regions.size;

    // Update stat targets
    const stats = document.querySelectorAll(".stat-count");

    stats[0].dataset.target = totalPeaks;
    stats[1].dataset.target = totalDistance;
    stats[2].dataset.target = highestPeak;
    stats[3].dataset.target = totalRegions;

    // Animate the numbers
    animateStats();
}


function animateStats() {
    const counters = document.querySelectorAll(".stat-count");

    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);

        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth animation
            const value = start + (target - start) * progress;

            // Show decimal for KM, otherwise whole numbers
            if (target % 1 !== 0) {
                counter.textContent = value.toFixed(1);
            } else {
                counter.textContent = Math.floor(value);
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent =
                    target % 1 !== 0 ? target.toFixed(1) : target;
            }
        }

        requestAnimationFrame(update);
    });
}


// Run after the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateStats();
});

// ──────────────────────────────────────
//  DATASETS: 14 SRI LANKAN MOUNTAIN HIKES

// ──────────────────────────────────────



const hikes = [
  {
    name: "Adam's Peak (Sri Pada)",
    region: "Sabaragamuwa",
    distance: "7 km",
    duration: "4–5 hrs",
    difficulty: "Hard",
    elevation: "2243m",
    rating: 4.9,
    lat: 6.8096, lng: 80.4994,
    img: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600&q=80",
    desc: "Adam's Peak, known as Sri Pada, is Sri Lanka's most sacred pilgrimage hike. The 5,000+ steps climb through lush forest reserves to a summit adorned with a giant footprint shrine revered across religions. The 'shadow of the peak' phenomenon at sunrise is one of Asia's most magnificent sights.",
    seasons: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    trailhead: "Nallathanniya / Ratnapura",
    difficultyPct: 85,
    videoId: "2bNFO_2_fPc",
    mapQ: "Adam's+Peak+Sri+Lanka"
  },
  {
    name: "Little Adam's Peak",
    region: "Uva",
    distance: "4.5 km",
    duration: "45–60 min",
    difficulty: "Easy",
    elevation: "1141m",
    rating: 4.8,
    lat: 6.8667, lng: 81.0500,
    img: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&q=80",
    desc: "Named after its sacred big brother due to its matching silhouette, Little Adam's Peak offers a breezy, highly accessible walk through rolling tea estates with panoramic 360° views across Ella Gap.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Aug"],
    trailhead: "Ella Town",
    difficultyPct: 30,
    videoId: "5p3M5sZ0_x8",
    mapQ: "Little+Adams+Peak+Ella"
  },
  {
    name: "Ella Rock",
    region: "Uva",
    distance: "10 km",
    duration: "3–4 hrs",
    difficulty: "Moderate",
    elevation: "1040m",
    rating: 4.8,
    lat: 6.8500, lng: 81.0333,
    img: "Images/ella_rock_view.jpg",
    desc: "A rewarding trek starting along active highland railway tracks, winding through aromatic eucalyptus groves, tea fields, and steep forest paths to a dramatic cliff overlooking the southern plains.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Aug"],
    trailhead: "Kithalella Railway Station",
    difficultyPct: 60,
    videoId: "Wz6U6Y_xN4g",
    mapQ: "Ella+Rock+Sri+Lanka"
  },
  {
    name: "Pidurangala Rock",
    region: "Central",
    distance: "2 km",
    duration: "30–45 min",
    difficulty: "Moderate",
    elevation: "350m",
    rating: 4.9,
    lat: 7.9625, lng: 80.7600,
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80",
    desc: "Located opposite Sigiriya, Pidurangala features an ancient cave temple, reclining Buddha statue, and a fun boulder scramble to an open granite summit with unbeatable sunrise views of Sigiriya Lion Rock.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    trailhead: "Pidurangala Temple Entrance",
    difficultyPct: 50,
    videoId: "3yX9w5_z9P8",
    mapQ: "Pidurangala+Rock+Sigiriya"
  },
  {
    name: "Thotupola Kanda",
    region: "Central",
    distance: "4 km",
    duration: "2 hrs",
    difficulty: "Easy",
    elevation: "2357m",
    rating: 4.7,
    lat: 6.8167, lng: 80.8000,
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    desc: "Sri Lanka's 3rd highest peak is one of the most accessible high-altitude summits. Situated inside Horton Plains National Park, the trail gently ascends through dwarf cloud forest and rhododendron fields.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May"],
    trailhead: "Pattipola Gate, Horton Plains",
    difficultyPct: 35,
    videoId: "4kX7z8_y1P2",
    mapQ: "Thotupola+Kanda+Horton+Plains"
  },
  {
    name: "Kirigalpoththa",
    region: "Central",
    distance: "14 km",
    duration: "5–6 hrs",
    difficulty: "Hard",
    elevation: "2395m",
    rating: 4.9,
    lat: 6.7833, lng: 80.7833,
    img: "Images/mountain_peak.jpg",
    desc: "The 2nd highest peak in Sri Lanka (and highest public summit, as Pidurutalagala is restricted). Trail crosses mountain bogs, endemic bamboo, rocky scrambles, and active leopard & sambar deer habitat.",
    seasons: ["Jan", "Feb", "Mar", "Apr"],
    trailhead: "Horton Plains Visitor Center",
    difficultyPct: 82,
    videoId: "2jNFO_7_z3k",
    mapQ: "Kirigalpoththa+Horton+Plains"
  },
  {
    name: "Knuckles Range (Gombaniya)",
    region: "Central",
    distance: "15 km",
    duration: "6–8 hrs",
    difficulty: "Extreme",
    elevation: "1906m",
    rating: 4.9,
    lat: 7.4167, lng: 80.8167,
    img: "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=600&q=80",
    desc: "UNESCO World Heritage sanctuary featuring 34 distinct peaks resembling folded knuckles. Offers multi-day wilderness treks, pygmy cloud forests, hidden waterfalls, endemic fauna, and sheer razor ridges.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
    trailhead: "Illukkumbura / Deanston Center",
    difficultyPct: 90,
    videoId: "1kM8w9_z4P5",
    mapQ: "Knuckles+Mountain+Range"
  },
  {
    name: "Great Western Mountain",
    region: "Central",
    distance: "8 km",
    duration: "5–6 hrs",
    difficulty: "Hard",
    elevation: "2216m",
    rating: 4.8,
    lat: 6.9667, lng: 80.6833,
    img: "https://images.unsplash.com/photo-1602147743086-9cc49a7e7086?w=600&q=80",
    desc: "Sri Lanka's 6th highest peak. A steep, relentless, and largely unmarked trail starting near Great Western Railway Station, ascending through thick bamboo groves and dense montane rainforest.",
    seasons: ["Jan", "Feb", "Mar", "Apr"],
    trailhead: "Great Western Railway Station",
    difficultyPct: 85,
    videoId: "6mX9w1_y3P7",
    mapQ: "Great+Western+Mountain+Sri+Lanka"
  },
  {
    name: "Namunukula",
    region: "Uva",
    distance: "12 km",
    duration: "4–5 hrs",
    difficulty: "Hard",
    elevation: "2036m",
    rating: 4.7,
    lat: 6.9333, lng: 81.1167,
    img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80",
    desc: "Meaning 'Nine Peaks' in Sinhala, Namunukula is the dominant mountain massif overlooking Badulla and the southeastern Uva basin. Features tea garden trails transitioning into virgin ridge-top forest.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jul"],
    trailhead: "Third Mile Post, Passara Road",
    difficultyPct: 75,
    videoId: "8kNFO_9_x1q",
    mapQ: "Namunukula+Badulla"
  },
  {
    name: "Lakegala Monolith",
    region: "Central",
    distance: "6 km",
    duration: "6–7 hrs",
    difficulty: "Extreme",
    elevation: "1310m",
    rating: 4.9,
    lat: 7.5500, lng: 80.8500,
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80",
    desc: "A sheer pyramid rock monolith rising sharply above Meemure village in Knuckles. Widely regarded as Sri Lanka's most technical and dangerous climb, requiring ropes, local guides, and extreme scramble endurance.",
    seasons: ["Jan", "Feb", "Mar", "Apr"],
    trailhead: "Meemure Remote Village",
    difficultyPct: 98,
    videoId: "9xNFO_3_z2w",
    mapQ: "Lakegala+Meemure"
  },
  {
    name: "Seven Virgins (Saptha Kanya)",
    region: "Sabaragamuwa",
    distance: "10 km",
    duration: "7–8 hrs",
    difficulty: "Extreme",
    elevation: "1569m",
    rating: 4.8,
    lat: 6.9000, lng: 80.5167,
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    desc: "A rugged serrated mountain range consisting of seven distinct razor-sharp peaks. Overgrown trails, steep vertical rock face scrambles, and dense fog make this one of the most intense full-day wilderness treks.",
    seasons: ["Jan", "Feb", "Mar", "Apr"],
    trailhead: "Laxapana / Maskeliya",
    difficultyPct: 95,
    videoId: "7zM9w2_x4P8",
    mapQ: "Saptha+Kanya+Seven+Virgins"
  },
  {
    name: "Pidurutalagala Peak",
    region: "Central",
    distance: "6 km",
    duration: "2–3 hrs",
    difficulty: "Moderate",
    elevation: "2524m",
    rating: 4.6,
    lat: 7.0000, lng: 80.7667,
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
    desc: "Mount Pedro is Sri Lanka's highest geographical peak (2,524m). Located near Nuwara Eliya, the summit area houses radar installations and high-altitude flora with expansive views across the central massif.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May"],
    trailhead: "Nuwara Eliya Gate",
    difficultyPct: 55,
    videoId: "3jX7z9_y5P1",
    mapQ: "Pidurutalagala+Nuwara+Eliya"
  },
  {
    name: "Bible Rock (Bathalegala)",
    region: "Sabaragamuwa",
    distance: "5 km",
    duration: "2–3 hrs",
    difficulty: "Moderate",
    elevation: "798m",
    rating: 4.7,
    lat: 7.1833, lng: 80.4333,
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    desc: "Prominent flat-topped mountain resembling an open book when viewed from the Colombo road. Offers dramatic 360-degree views over Kegalle, Kadugannawa Pass, and the surrounding green valleys.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Aug"],
    trailhead: "Aranayaka / Hasalaka Road",
    difficultyPct: 50,
    videoId: "4kNFO_8_z9k",
    mapQ: "Bathalegala+Bible+Rock"
  },
  {
    name: "Horton Plains & World's End",
    region: "Central",
    distance: "9.5 km",
    duration: "3–4 hrs",
    difficulty: "Moderate",
    elevation: "2100m",
    rating: 4.9,
    lat: 6.8000, lng: 80.8000,
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    desc: "High-altitude cloud forest plateau terminating at World's End — a sheer precipice dropping 870 meters straight down into the southern lowlands. Also features Baker's Falls.",
    seasons: ["Jan", "Feb", "Mar", "Apr", "May"],
    trailhead: "Horton Plains Entrance",
    difficultyPct: 55,
    videoId: "8jX9w4_z6P3",
    mapQ: "Worlds+End+Horton+Plains"
  }
];

// ── GEAR & CAMPING DATASETS ──
const gearData = [
  {
    cat: "Hiking Essentials",
    icon: "🥾",
    items: [
      "Hiking boots",
      "Trekking poles",
      "Backpack (30–40L)",
      "Headlamp / torch",
      "Rain jacket",
      "Sun hat",
      "Gloves (for cold peaks)",
      "Gaiters"
    ]
  },
  {
    cat: "Navigation & Safety",
    icon: "🧭",
    items: [
      "Compass",
      "Whistle",
      "First aid kit",
      "Power bank",
      "Trail map",
      "Emergency blanket",
      "Multi-tool / knife"
    ]
  },
  {
    cat: "Clothing Layers",
    icon: "👕",
    items: [
      "Moisture-wicking shirt",
      "Thermal base layer",
      "Quick-dry pants",
      "Wool hiking socks",
      "Waterproof jacket",
      "Sun gloves"
    ]
  },
  {
    cat: "Food & Water",
    icon: "🍶",
    items: [
      "Water bottles (2L+)",
      "Water purification tablets",
      "Energy bars",
      "Packed meals",
      "Electrolyte sachets",
      "Nuts & dried fruit"
    ]
  }
];

const campingData = [
  { name: "Dalhousie Base Camp",   mountain: "Adam's Peak",   toilet: true,  water: true,  fire: false, cost: "Free",            permit: "No permit needed" },
  { name: "Knuckles Forest Lodge", mountain: "Knuckles Range", toilet: true,  water: true,  fire: true,  cost: "LKR 2,500/night", permit: "DWC permit required" },
  { name: "Ohiya Rest House",      mountain: "Horton Plains",  toilet: true,  water: true,  fire: false, cost: "LKR 1,800/night", permit: "NP entry fee" },
  { name: "Ella Jungle Retreat",   mountain: "Ella Rock",      toilet: true,  water: true,  fire: true,  cost: "LKR 3,000/night", permit: "No permit needed" },
  { name: "Nuwara Eliya Campsite", mountain: "Pidurutalagala", toilet: true,  water: true,  fire: false, cost: "LKR 1,500/night", permit: "Military clearance" },
  { name: "Namunukula Foothills",  mountain: "Namunukula",     toilet: false, water: true,  fire: true,  cost: "LKR 800/night",   permit: "No permit needed" },
  { name: "Kegalle Community Camp",mountain: "Bible Rock",     toilet: true,  water: false, fire: true,  cost: "LKR 1,200/night", permit: "No permit needed" },
  { name: "Kirigalpotta Base",     mountain: "Kirigalpotta",   toilet: false, water: false, fire: false, cost: "Free",            permit: "NP entry fee" }
];

const videosData = [
  { mountain: "Adam's Peak",    title: "Sunrise Pilgrimage to Sri Pada — Full Trail Guide", channel: "Sri Lanka Hiking", thumb: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=400&q=75", url: "https://www.youtube.com/results?search_query=Adams+Peak+Sri+Lanka+hike" },
  { mountain: "Knuckles Range", title: "Trekking the Wild Knuckles — 2-Day Adventure",      channel: "Wild Ceylon",      thumb: "https://images.unsplash.com/photo-1560448075-bb485b069f2a?w=400&q=75", url: "https://www.youtube.com/results?search_query=Knuckles+Range+Sri+Lanka+hike" },
  { mountain: "Horton Plains",  title: "World's End & Baker's Falls — Horton Plains Loop",  channel: "Ceylon Trails",    thumb: "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=400&q=75", url: "https://www.youtube.com/results?search_query=Horton+Plains+Worlds+End+hike" },
  { mountain: "Ella Rock",      title: "Ella Rock Summit — Through Tea Country",             channel: "Peak Seekers SL",  thumb: "https://images.unsplash.com/photo-1602147743086-9cc49a7e7086?w=400&q=75", url: "https://www.youtube.com/results?search_query=Ella+Rock+hike+Sri+Lanka" },
  { mountain: "Bible Rock",     title: "Scrambling Bible Rock — An Unexpected Adventure",   channel: "Sri Lanka Hiking", thumb: "https://images.unsplash.com/photo-1584555613957-1a4a72e99c35?w=400&q=75", url: "https://www.youtube.com/results?search_query=Bible+Rock+Bathalegala+hike" },
  { mountain: "Kirigalpotta",   title: "Sri Lanka's 2nd Highest Peak — Full Trail",          channel: "Ceylon Summits",   thumb: "https://images.unsplash.com/photo-1573148042437-7e33c4bd5cb2?w=400&q=75", url: "https://www.youtube.com/results?search_query=Kirigalpotta+hike+Sri+Lanka" }
];

// ──────────────────────────────────────
//  STATE & HELPER FUNCTIONS
// ──────────────────────────────────────
let isExpanded = false;
let activeFilter = '';

function diffBadge(diff) {
  const map = { Easy: 'badge-easy', Moderate: 'badge-moderate', Hard: 'badge-hard', Extreme: 'badge-extreme' };
  return `<span class="hike-badge ${map[diff] || 'badge-moderate'}">${diff}</span>`;
}

function starsHTML(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return `<span class="hike-rating-stars">${s}</span> <span class="hike-rating-num">${r}</span>`;
}

// ──────────────────────────────────────
//  RENDER HIKES GRID WITH SEE MORE TOGGLE
// ──────────────────────────────────────
function renderHikes(filter = '') {
  activeFilter = filter;
  const grid   = document.getElementById('hikesGrid');
  const searchInput = document.getElementById('heroSearch');
  const search = searchInput ? searchInput.value.toLowerCase().trim() : '';

  if (!grid) return;

  const filtered = hikes.filter(h => {
    const matchDiff   = !filter || h.difficulty === filter;
    const matchSearch = !search || h.name.toLowerCase().includes(search) || h.region.toLowerCase().includes(search);
    return matchDiff && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:rgba(240,236,228,0.5);font-size:1.1rem;">No mountain hikes match your search. Try adjusting your filters.</div>`;
    return;
  }

  // Check if we are on the dedicated mountains.html page or searching/filtering
  const isMountainsPage = document.body.classList.contains('all-mountains-page');
  const displayLimit = (isMountainsPage || filter || search) ? filtered.length : 8;
  const displayHikes = filtered.slice(0, displayLimit);

  grid.innerHTML = displayHikes.map(h => {
    const idx = hikes.indexOf(h);
    const cleanName = h.name.replace(/\s*\([^)]*\)/, '');
    const province = h.region.toUpperCase() + (h.region.toLowerCase().includes('province') ? '' : ' PROVINCE');
    return `
      <div class="hike-card" onclick="openModal(${idx})">
        <div class="card-img">
          <img src="${h.img}" alt="${cleanName}" loading="lazy" onerror="this.onerror=null;this.src='Images/mountain_peak.jpg';"/>
          <div class="card-img-overlay"></div>
          <div class="card-elevation">${h.elevation} <span>elevation</span></div>
          <div class="card-badge">${diffBadge(h.difficulty)}</div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${cleanName}</h3>
          <div class="card-region">📍 ${province}</div>
          <div class="card-meta">
            <div class="meta-item"><span class="meta-icon">📏</span> ${h.distance}</div>
            <div class="meta-item"><span class="meta-icon">⏱️</span> ${h.duration}</div>
          </div>
          <div class="card-footer">
            <div class="card-rating">
              ${starsHTML(h.rating)}
            </div>
            <span class="btn-details">View Trail →</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateSeeMoreButton(totalCount, displayedCount) {
  let btn = document.getElementById('seeMoreBtn');
  let wrap = document.getElementById('seeMoreWrap');

  if (!btn) return;

  if (totalCount <= 8 && !activeFilter) {
    if (wrap) wrap.style.display = 'none';
    return;
  }

  if (wrap) wrap.style.display = 'block';

  if (!isExpanded && displayedCount < totalCount) {
    const remaining = totalCount - displayedCount;
    btn.innerHTML = `<span>See More Mountains & Summits (${remaining} More)</span> <span class="btn-arrow">↓</span>`;
  } else {
    btn.innerHTML = `<span>Show Less Mountains</span> <span class="btn-arrow">↑</span>`;
  }
}

function toggleSeeMore() {
  isExpanded = !isExpanded;
  renderHikes(activeFilter);

  if (!isExpanded) {
    const section = document.getElementById('mountains');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ──────────────────────────────────────
//  MODAL HANDLERS
// ──────────────────────────────────────
function openModal(idx) {
  const h = hikes[idx];
  if (!h) return;

  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  document.getElementById('modalHeroImg').src = h.img;
  document.getElementById('modalTitle').textContent = h.name;
  document.getElementById('modalBadge').innerHTML = diffBadge(h.difficulty);
  document.getElementById('modalDesc').textContent = h.desc;

  document.getElementById('modalInfoGrid').innerHTML = `
    <div class="info-chip"><div class="info-chip-icon">📍</div><div class="info-chip-val">${h.region}</div><div class="info-chip-key">Region</div></div>
    <div class="info-chip"><div class="info-chip-icon">📏</div><div class="info-chip-val">${h.distance}</div><div class="info-chip-key">Distance</div></div>
    <div class="info-chip"><div class="info-chip-icon">⏱️</div><div class="info-chip-val">${h.duration}</div><div class="info-chip-key">Duration</div></div>
    <div class="info-chip"><div class="info-chip-icon">🏔️</div><div class="info-chip-val">${h.elevation}</div><div class="info-chip-key">Elevation</div></div>
    <div class="info-chip"><div class="info-chip-icon">⭐</div><div class="info-chip-val">${h.rating}/5</div><div class="info-chip-key">Rating</div></div>
    <div class="info-chip"><div class="info-chip-icon">🥾</div><div class="info-chip-val">${h.trailhead.split(',')[0]}</div><div class="info-chip-key">Trailhead</div></div>
  `;

  document.getElementById('modalDiffLabel').textContent = h.difficulty;
  const bar = document.getElementById('modalDiffBar');
  if (bar) {
    bar.style.width = '0%';
    bar.style.background = h.difficulty === 'Easy' ? '#3cb454' : h.difficulty === 'Moderate' ? '#d4a843' : '#dc3c3c';
    setTimeout(() => { bar.style.width = h.difficultyPct + '%'; }, 100);
  }

  const seasonsWrap = document.getElementById('modalSeasons');
  if (seasonsWrap) {
    seasonsWrap.innerHTML = h.seasons.map(s => `<span class="season-tag">${s}</span>`).join('');
  }

  const mapFrame = document.getElementById('modalMap');
  if (mapFrame) mapFrame.src = `https://maps.google.com/maps?q=${h.mapQ}&output=embed&z=13`;

  const videoFrame = document.getElementById('modalVideo');
  if (videoFrame) videoFrame.src = `https://www.youtube.com/embed/videoseries?list=&search=${encodeURIComponent(h.name + ' hike Sri Lanka')}`;

  switchTab('overview');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
  const mapFrame = document.getElementById('modalMap');
  if (mapFrame) mapFrame.src = '';
  const videoFrame = document.getElementById('modalVideo');
  if (videoFrame) videoFrame.src = '';
}

function switchTab(tabName) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === 'tab-' + tabName));
}

function initModalTabs() {
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });
  }
}

// ──────────────────────────────────────
//  SEARCH & FILTER BAR HANDLERS
// ──────────────────────────────────────
function doSearch() {
  renderHikes(activeFilter);
  const mountSection = document.getElementById('mountains');
  if (mountSection) mountSection.scrollIntoView({ behavior: 'smooth' });
}

function filterHikes() {
  const val = document.getElementById('heroFilter').value;
  renderHikes(val);
  const mountSection = document.getElementById('mountains');
  if (mountSection) mountSection.scrollIntoView({ behavior: 'smooth' });
}

function initFilterBar() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  bar.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      bar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderHikes(pill.dataset.filter);
    });
  });
}

// ──────────────────────────────────────
//  GEAR CHECKLIST LOGIC
// ──────────────────────────────────────
function renderGear() {
  const grid = document.getElementById('gearGrid');
  if (!grid) return;

  const saved = JSON.parse(localStorage.getItem('gearChecked') || '[]');

  grid.innerHTML = gearData.map(cat => `
    <div class="gear-category">
      <div class="gear-cat-title"><span class="gear-cat-icon">${cat.icon}</span>${cat.cat}</div>
      <div class="gear-items">
        ${cat.items.map(item => {
          const key = (cat.cat + ':' + item).replace(/\s/g, '-');
          const checked = saved.includes(key);
          return `
            <div class="gear-item ${checked ? 'checked' : ''}" data-key="${key}" onclick="toggleGear(this)">
              <div class="gear-checkbox">${checked ? '✓' : ''}</div>
              <span class="gear-item-name">${item}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function toggleGear(el) {
  const key = el.dataset.key;
  let saved = JSON.parse(localStorage.getItem('gearChecked') || '[]');

  if (saved.includes(key)) {
    saved = saved.filter(k => k !== key);
    el.classList.remove('checked');
    el.querySelector('.gear-checkbox').textContent = '';
  } else {
    saved.push(key);
    el.classList.add('checked');
    el.querySelector('.gear-checkbox').textContent = '✓';
  }

  localStorage.setItem('gearChecked', JSON.stringify(saved));
}

// ──────────────────────────────────────
//  CAMPING & VIDEOS RENDER
// ──────────────────────────────────────
function renderCamping() {
  const grid = document.getElementById('campingGrid');
  if (!grid) return;

  grid.innerHTML = campingData.map(c => `
    <div class="camp-card">
      <div class="camp-name">${c.name}</div>
      <div class="camp-mountain">Near ${c.mountain}</div>
      <div class="camp-facilities">
        <div class="facility ${c.toilet ? 'yes' : 'no'}">${c.toilet ? '✓' : '✗'} Toilets</div>
        <div class="facility ${c.water  ? 'yes' : 'no'}">${c.water  ? '✓' : '✗'} Water</div>
        <div class="facility ${c.fire   ? 'yes' : 'no'}">${c.fire   ? '✓' : '✗'} Fire Pit</div>
      </div>
      <div class="camp-footer">
        <div class="camp-cost">${c.cost}</div>
        <div class="camp-permit">🪪 ${c.permit}</div>
      </div>
    </div>
  `).join('');
}

function renderVideos() {
  const container = document.getElementById('videosScroll');
  if (!container) return;

  container.innerHTML = videosData.map(v => `
    <div class="video-card" onclick="window.open('${v.url}','_blank')">
      <div class="video-thumb">
        <img src="${v.thumb}" alt="${v.mountain}" loading="lazy"/>
        <div class="play-btn"><span>▶</span></div>
      </div>
      <div class="video-info">
        <div class="video-mountain">⛰️ ${v.mountain}</div>
        <div class="video-title">${v.title}</div>
        <div class="video-channel">📺 ${v.channel}</div>
      </div>
    </div>
  `).join('');
}

function scrollVideos(dir) {
  const container = document.getElementById('videosScroll');
  if (container) container.scrollBy({ left: dir * 340, behavior: 'smooth' });
}

// ──────────────────────────────────────
//  HERO ANIMATED STATS
// ──────────────────────────────────────
function animateCounter(el, target, duration = 1500) {
  if (!el) return;
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function triggerHeroStats() {
  const s1 = document.getElementById('stat1'); if (s1) animateCounter(s1, 8, 1200);
  const s2 = document.getElementById('stat2'); if (s2) animateCounter(s2, 72, 1500);
  const s3 = document.getElementById('stat3'); if (s3) animateCounter(s3, 2524, 1800);
}

// ──────────────────────────────────────
//  SCROLL, MOBILE MENU & THEME TOGGLE
// ──────────────────────────────────────
function handleScroll() {
  const navbar = document.getElementById('navbar');
  const btt = document.getElementById('back-to-top');

  if (navbar) {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  if (btt) {
    if (window.scrollY > 60) btt.classList.add('visible');
    else btt.classList.remove('visible');
  }

  // Highlight active nav section
  const sectionIds = ['hero', 'mountains', 'map-section', 'gear', 'camping', 'videos'];
  let current = '';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menuClose = document.getElementById('menuClose');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.add('open');
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMobileMenu);
  }
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  let isDark = true;
  btn.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('light-mode', !isDark);
    btn.textContent = isDark ? '🌙' : '☀️';
  });
}

// ──────────────────────────────────────
//  DOM CONTENT LOADED INITIALIZER
// ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHikes();
  renderGear();
  renderCamping();
  renderVideos();
  initFilterBar();
  initMobileMenu();
  initModalTabs();
  initThemeToggle();

  const searchInput = document.getElementById('heroSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderHikes(activeFilter));
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  const btt = document.getElementById('back-to-top');
  if (btt) {
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const strip = document.getElementById('stats-strip');
  if (strip) {
    const stripObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        triggerHeroStats();
        stripObserver.disconnect();
      }
    });
    stripObserver.observe(strip);
  }
});
