/* ══════════════════════════════════════════════════
   EXPLORE CEYLON — main.js
   All data, rendering logic, and event handlers
══════════════════════════════════════════════════ */

// ──────────────────────────────────────
//  DATA
// ──────────────────────────────────────
const hikes = [
  {
    name: "Adam's Peak",
    region: "Sabaragamuwa",
    distance: "7 km",
    duration: "4–5 hrs",
    difficulty: "Hard",
    elevation: "2243m",
    rating: 4.9,
    lat: 6.8096, lng: 80.4994,
    img: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600&q=80",
    desc: "Adam's Peak, known as Sri Pada, is Sri Lanka's most sacred pilgrimage hike. The 5,500+ steps climb through lush forests to a summit adorned with a giant footprint revered by Buddhists, Hindus, Christians, and Muslims alike. The 'shadow of the peak' phenomenon at sunrise — a perfect triangular shadow cast on the clouds below — is one of the most spectacular natural phenomena in Asia.",
    seasons: ["Dec", "Jan", "Feb", "Mar", "Apr"],
    trailhead: "Dalhousie Village, Nallathanniya",
    difficultyPct: 85,
    videoId: "2bNFO_2_fPc",
    mapQ: "Adam's+Peak+Sri+Lanka"
  },
  {
    name: "Knuckles Range",
    region: "Central",
    distance: "15 km",
    duration: "6–8 hrs",
    difficulty: "Hard",
    elevation: "1906m",
    rating: 4.7,
    lat: 7.4167, lng: 80.8167,
    img: "https://images.unsplash.com/photo-1560448075-bb485b069f2a?w=600&q=80",
    desc: "The Knuckles Mountain Range is a UNESCO World Heritage landscape of astonishing biodiversity. Its jagged peaks (resembling knuckles) rise through cloud forests populated by endemic orchids, leopards, and over 34 endemic bird species. Multi-day treks through this wilderness offer an unparalleled connection with Sri Lanka's natural heritage.",
    seasons: ["Jan", "Feb", "Mar", "Aug", "Sep"],
    trailhead: "Rangala or Illukkumbura",
    difficultyPct: 90,
    videoId: "dQw4w9WgXcQ",
    mapQ: "Knuckles+Mountain+Range+Sri+Lanka"
  },
  {
    name: "Horton Plains",
    region: "Central",
    distance: "9 km",
    duration: "3–4 hrs",
    difficulty: "Easy",
    elevation: "2100m",
    rating: 4.8,
    lat: 6.8010, lng: 80.8030,
    img: "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=600&q=80",
    desc: "Horton Plains National Park is a hauntingly beautiful plateau in the central highlands, protected as both a National Park and UNESCO World Heritage Site. The World's End cliff drops a staggering 870 metres into the lowland jungles below. The circular trail winds through cloud forest, open patana grasslands, and past Baker's Falls — a serene 20m waterfall.",
    seasons: ["Jan", "Feb", "Mar", "Jul", "Aug"],
    trailhead: "Ohiya or Pattipola entrance",
    difficultyPct: 30,
    videoId: "dQw4w9WgXcQ",
    mapQ: "Horton+Plains+National+Park+Sri+Lanka"
  },
  {
    name: "Ella Rock",
    region: "Uva",
    distance: "8 km",
    duration: "3–4 hrs",
    difficulty: "Moderate",
    elevation: "1041m",
    rating: 4.6,
    lat: 6.8667, lng: 81.0466,
    img: "https://images.unsplash.com/photo-1602147743086-9cc49a7e7086?w=600&q=80",
    desc: "Ella Rock is the quintessential Sri Lankan hike — a moderate climb that rewards with panoramic views of the Ella Gap, terraced tea plantations, and the iconic Ella town below. The trail passes through working tea estates and lush jungle, following the railway tracks for part of the ascent. The summit offers 360° views that stretch to the coast on clear days.",
    seasons: ["Jan", "Feb", "Mar", "Aug", "Sep"],
    trailhead: "Ella Town, follow railway tracks",
    difficultyPct: 55,
    videoId: "dQw4w9WgXcQ",
    mapQ: "Ella+Rock+Sri+Lanka"
  },
  {
    name: "Pidurutalagala",
    region: "Central",
    distance: "5 km",
    duration: "2–3 hrs",
    difficulty: "Moderate",
    elevation: "2524m",
    rating: 4.4,
    lat: 7.0010, lng: 80.7726,
    img: "https://images.unsplash.com/photo-1565197119566-01a26c6ca47c?w=600&q=80",
    desc: "Pidurutalagala is the highest mountain in Sri Lanka at 2,524m, located in the heart of Nuwara Eliya. Access is restricted as it houses military communication infrastructure, but the summit offers the highest viewpoint on the island. The surrounding area is lush with montane forests, and guided treks can be arranged through local tour operators.",
    seasons: ["Jan", "Feb", "Mar", "Apr"],
    trailhead: "Nuwara Eliya (permit required)",
    difficultyPct: 60,
    videoId: "dQw4w9WgXcQ",
    mapQ: "Pidurutalagala+Sri+Lanka"
  },
  {
    name: "Namunukula",
    region: "Uva",
    distance: "10 km",
    duration: "5–6 hrs",
    difficulty: "Hard",
    elevation: "2036m",
    rating: 4.5,
    lat: 6.9833, lng: 81.1167,
    img: "https://images.unsplash.com/photo-1571003123771-bd6a099d30c0?w=600&q=80",
    desc: "Namunukula, meaning 'nine peaks', is one of Sri Lanka's most dramatic and underrated hikes. The trail traverses through pristine cloud forests, tea estates, and montane grasslands before reaching a summit ridge with nine distinct peaks. The route is challenging with steep ascents, but the isolation and spectacular views make it a favourite among serious hikers.",
    seasons: ["Feb", "Mar", "Aug", "Sep"],
    trailhead: "Lunugala or Passara",
    difficultyPct: 80,
    videoId: "dQw4w9WgXcQ",
    mapQ: "Namunukula+Mountain+Sri+Lanka"
  },
  {
    name: "Bible Rock",
    region: "Sabaragamuwa",
    distance: "6 km",
    duration: "3–4 hrs",
    difficulty: "Moderate",
    elevation: "1698m",
    rating: 4.5,
    lat: 6.9833, lng: 80.5167,
    img: "https://images.unsplash.com/photo-1584555613957-1a4a72e99c35?w=600&q=80",
    desc: "Bible Rock (Bathalegala) is a dramatic granite monolith that rises abruptly from the surrounding jungle near Kegalle. The hike involves scrambling up steep rocky faces with fixed ropes in sections, rewarding climbers with stunning views over the Mawanella valley and surrounding mountains. Its flat, book-like profile is unmistakable from the Colombo–Kandy highway.",
    seasons: ["Jan", "Feb", "Mar", "Jul", "Aug"],
    trailhead: "Kegalle, 2km from highway",
    difficultyPct: 65,
    videoId: "dQw4w9WgXcQ",
    mapQ: "Bible+Rock+Bathalegala+Sri+Lanka"
  },
  {
    name: "Kirigalpotta",
    region: "Central",
    distance: "12 km",
    duration: "5–7 hrs",
    difficulty: "Hard",
    elevation: "2395m",
    rating: 4.6,
    lat: 6.7960, lng: 80.7780,
    img: "https://images.unsplash.com/photo-1573148042437-7e33c4bd5cb2?w=600&q=80",
    desc: "Kirigalpotta is Sri Lanka's second highest peak and one of its most rewarding long hikes. Starting from Horton Plains, the trail heads into dense cloud forest to reach an open summit plateau with extraordinary views. The route passes through some of Sri Lanka's last remaining montane wet evergreen forest, habitat for rare species like the Sri Lanka Leopard.",
    seasons: ["Jan", "Feb", "Mar", "Aug"],
    trailhead: "Horton Plains main entrance",
    difficultyPct: 88,
    videoId: "dQw4w9WgXcQ",
    mapQ: "Kirigalpotta+Sri+Lanka"
  }
];

const gearData = [
  {
    cat: "Hiking Essentials", icon: "🥾",
    items: ["Hiking boots", "Trekking poles", "Backpack (30–40L)", "Headlamp / torch", "Rain jacket", "Sun hat", "Gloves (for cold peaks)", "Gaiters"]
  },
  {
    cat: "Navigation & Safety", icon: "🧭",
    items: ["Compass", "Whistle", "First aid kit", "Power bank", "Trail map", "Emergency blanket", "Multi-tool / knife"]
  },
  {
    cat: "Clothing Layers", icon: "👕",
    items: ["Moisture-wicking shirt", "Thermal base layer", "Quick-dry pants", "Wool hiking socks", "Waterproof jacket", "Sun gloves"]
  },
  {
    cat: "Food & Water", icon: "🧴",
    items: ["Water bottles (2L+)", "Water purification tablets", "Energy bars", "Packed meals", "Electrolyte sachets", "Nuts & dried fruit"]
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
//  HELPERS
// ──────────────────────────────────────
function diffBadge(d) {
  const map = { Easy: 'badge-easy', Moderate: 'badge-moderate', Hard: 'badge-hard' };
  return `<span class="stack-badge ${map[d]}">${d}</span>`;
}

function diffBarColor(d) {
  return d === 'Easy' ? '#3cb454' : d === 'Moderate' ? '#d4a843' : '#dc3c3c';
}

function starsHTML(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

// ──────────────────────────────────────
//  RENDER: HIKE CARDS
// ──────────────────────────────────────
function renderHikes(filter = '') {
  const grid   = document.getElementById('hikesGrid');
  const search = document.getElementById('heroSearch').value.toLowerCase();

  const filtered = hikes.filter(h => {
    const matchDiff   = !filter || h.difficulty === filter;
    const matchSearch = !search || h.name.toLowerCase().includes(search) || h.region.toLowerCase().includes(search);
    return matchDiff && matchSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:rgba(240,236,228,0.4);font-size:1.1rem;">No hikes match your search. Try a different filter.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((h, i) => {
    const idx = hikes.indexOf(h);
    return `
      <div class="hike-card" onclick="openModal(${idx})" style="animation-delay:${i * 0.07}s">
        <div class="card-img">
          <img src="${h.img}" alt="${h.name}" loading="lazy"/>
          <div class="card-img-overlay"></div>
          <div class="card-elevation">${h.elevation} <span>elevation</span></div>
          <div class="card-badge">${diffBadge(h.difficulty)}</div>
        </div>
        <div class="card-body">
          <div class="card-title">${h.name}</div>
          <div class="card-region">${h.region} Province</div>
          <div class="card-meta">
            <div class="meta-item"><span class="meta-icon">📏</span>${h.distance}</div>
            <div class="meta-item"><span class="meta-icon">⏱️</span>${h.duration}</div>
          </div>
          <div class="card-footer">
            <div class="card-rating">
              <span class="stars">${starsHTML(h.rating)}</span>
              <span>${h.rating}</span>
            </div>
            <button class="btn-details">View Trail →</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ──────────────────────────────────────
//  MODAL
// ──────────────────────────────────────
function openModal(idx) {
  const h       = hikes[idx];
  const overlay = document.getElementById('modal-overlay');

  document.getElementById('modalHeroImg').src           = h.img;
  document.getElementById('modalTitle').textContent     = h.name;
  document.getElementById('modalBadge').innerHTML       = diffBadge(h.difficulty);
  document.getElementById('modalDesc').textContent      = h.desc;

  document.getElementById('modalInfoGrid').innerHTML = `
    <div class="info-chip"><div class="info-chip-icon">📍</div><div class="info-chip-val">${h.region}</div><div class="info-chip-key">Region</div></div>
    <div class="info-chip"><div class="info-chip-icon">📏</div><div class="info-chip-val">${h.distance}</div><div class="info-chip-key">Distance</div></div>
    <div class="info-chip"><div class="info-chip-icon">⏱️</div><div class="info-chip-val">${h.duration}</div><div class="info-chip-key">Duration</div></div>
    <div class="info-chip"><div class="info-chip-icon">🏔️</div><div class="info-chip-val">${h.elevation}</div><div class="info-chip-key">Elevation</div></div>
    <div class="info-chip"><div class="info-chip-icon">⭐</div><div class="info-chip-val">${h.rating}/5</div><div class="info-chip-key">Rating</div></div>
    <div class="info-chip"><div class="info-chip-icon">🥾</div><div class="info-chip-val">${h.trailhead.split(',')[0]}</div><div class="info-chip-key">Trailhead</div></div>
  `;

  // Difficulty bar
  const bar = document.getElementById('modalDiffBar');
  document.getElementById('modalDiffLabel').textContent = h.difficulty;
  bar.style.width      = '0%';
  bar.style.background = diffBarColor(h.difficulty);
  setTimeout(() => { bar.style.width = h.difficultyPct + '%'; }, 100);

  // Seasons
  document.getElementById('modalSeasons').innerHTML = h.seasons.map(s => `<span class="season-tag">${s}</span>`).join('');

  // Map & Video iframes (set on tab open to avoid loading all at once)
  document.getElementById('modalMap').src   = `https://maps.google.com/maps?q=${h.mapQ}&output=embed&z=13`;
  document.getElementById('modalVideo').src = `https://www.youtube.com/embed/videoseries?list=&search=${encodeURIComponent(h.name + ' hike Sri Lanka')}`;

  switchTab('overview');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('modalMap').src   = '';
  document.getElementById('modalVideo').src = '';
}

function switchTab(tabName) {
  document.querySelectorAll('.modal-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === tabName)
  );
  document.querySelectorAll('.tab-panel').forEach(p =>
    p.classList.toggle('active', p.id === 'tab-' + tabName)
  );
}

// ──────────────────────────────────────
//  RENDER: GEAR CHECKLIST
// ──────────────────────────────────────
function renderGear() {
  const saved = JSON.parse(localStorage.getItem('gearChecked') || '[]');

  document.getElementById('gearGrid').innerHTML = gearData.map(cat => `
    <div class="gear-category">
      <div class="gear-cat-title"><span class="gear-cat-icon">${cat.icon}</span>${cat.cat}</div>
      <div class="gear-items">
        ${cat.items.map(item => {
          const key     = (cat.cat + ':' + item).replace(/\s/g, '-');
          const checked = saved.includes(key);
          return `
            <div class="gear-item ${checked ? 'checked' : ''}" data-key="${key}" onclick="toggleGear(this)">
              <div class="gear-checkbox"></div>
              <span class="gear-item-name">${item}</span>
            </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function toggleGear(el) {
  el.classList.toggle('checked');
  const key  = el.dataset.key;
  let saved  = JSON.parse(localStorage.getItem('gearChecked') || '[]');
  if (el.classList.contains('checked')) {
    if (!saved.includes(key)) saved.push(key);
  } else {
    saved = saved.filter(k => k !== key);
  }
  localStorage.setItem('gearChecked', JSON.stringify(saved));
}

// ──────────────────────────────────────
//  RENDER: CAMPING CARDS
// ──────────────────────────────────────
function renderCamping() {
  document.getElementById('campingGrid').innerHTML = campingData.map(c => `
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

// ──────────────────────────────────────
//  RENDER: VIDEOS
// ──────────────────────────────────────
function renderVideos() {
  document.getElementById('videosScroll').innerHTML = videosData.map(v => `
    <div class="video-card" onclick="window.open('${v.url}','_blank')">
      <div class="video-thumb">
        <img src="${v.thumb}" alt="${v.mountain}" loading="lazy"/>
        <div class="play-btn"><span>▶</span></div>
      </div>
      <div class="video-info">
        <div class="video-mountain">${v.mountain}</div>
        <div class="video-title">${v.title}</div>
        <div class="video-channel">📺 ${v.channel}</div>
      </div>
    </div>
  `).join('');
}

function scrollVideos(dir) {
  document.getElementById('videosScroll').scrollBy({ left: dir * 340, behavior: 'smooth' });
}

// ──────────────────────────────────────
//  ANIMATED COUNTERS
// ──────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  const start  = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function triggerHeroStats() {
  animateCounter(document.getElementById('stat1'), 8,    1200);
  animateCounter(document.getElementById('stat2'), 72,   1500);
  animateCounter(document.getElementById('stat3'), 2524, 1800);
}

// Strip counters — fire once when scrolled into view
let countersTriggered = false;
const stripObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersTriggered) {
      countersTriggered = true;
      document.querySelectorAll('#stats-strip .stat-count').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target));
      });
    }
  });
}, { threshold: 0.5 });

// ──────────────────────────────────────
//  NAVBAR SCROLL EFFECT + ACTIVE LINK
// ──────────────────────────────────────
function handleScroll() {
  const navbar = document.getElementById('navbar');
  const btt    = document.getElementById('back-to-top');

  navbar.classList.toggle('scrolled', window.scrollY > 60);
  btt.classList.toggle('visible', window.scrollY > 60);

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

// ──────────────────────────────────────
//  FILTER BAR
// ──────────────────────────────────────
let activeFilter = '';

function initFilterBar() {
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      activeFilter = pill.dataset.filter;
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderHikes(activeFilter);
    });
  });
}

function filterHikes() {
  activeFilter = document.getElementById('heroFilter').value;
  renderHikes(activeFilter);
  if (activeFilter) document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' });
}

function doSearch() {
  renderHikes(activeFilter);
  document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' });
}

// ──────────────────────────────────────
//  DARK / LIGHT MODE TOGGLE
// ──────────────────────────────────────
function initThemeToggle() {
  let isDark = true;
  document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('light-mode', !isDark);
    document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
  });
}

// ──────────────────────────────────────
//  MOBILE MENU
// ──────────────────────────────────────
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

function initMobileMenu() {
  document.getElementById('hamburger').addEventListener('click', () =>
    document.getElementById('mobileMenu').classList.add('open')
  );
  document.getElementById('menuClose').addEventListener('click', closeMobileMenu);
}

// ──────────────────────────────────────
//  MODAL TAB SWITCHING
// ──────────────────────────────────────
function initModalTabs() {
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
}

// ──────────────────────────────────────
//  LAZY IMAGE FADE-IN
// ──────────────────────────────────────
function initLazyImages() {
  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        imgObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.hike-card img, .video-card img, .camp-card img').forEach(img => {
    img.style.opacity   = '0';
    img.style.transition = 'opacity 0.5s ease';
    imgObserver.observe(img);
  });
}

// ──────────────────────────────────────
//  INIT — run when DOM is ready
// ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render all dynamic sections
  renderHikes();
  renderGear();
  renderCamping();
  renderVideos();

  // Wire up interactivity
  initFilterBar();
  initThemeToggle();
  initMobileMenu();
  initModalTabs();

  // Live search
  document.getElementById('heroSearch').addEventListener('input', () => renderHikes(activeFilter));

  // Scroll listeners
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ESC key closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Back-to-top button
  document.getElementById('back-to-top').addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  // Animated counters on strip visibility
  stripObserver.observe(document.getElementById('stats-strip'));

  // Hero counters after short delay
  setTimeout(triggerHeroStats, 800);

  // Lazy image setup after render
  setTimeout(initLazyImages, 100);
});
