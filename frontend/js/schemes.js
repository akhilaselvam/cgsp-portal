const API = 'https://cgsp-portal.onrender.com/api';
let currentCat = 'All';

const BADGE = {
  'Student': 'badge-s',
  'Agriculture': 'badge-a',
  'Physically Challenged': 'badge-d',
  'Health & Wellness': 'badge-h'
};

// ===== MAIN LOAD FUNCTION =====
async function loadSchemes() {
  const grid = document.getElementById('schemes-grid');
  grid.innerHTML = '<p style="padding:20px;color:#888">Loading schemes...</p>';

  const searchInput = document.getElementById('schemes-search') ||
                      document.getElementById('search-input');
  const search = searchInput ? searchInput.value.trim() : '';

  try {
    // Fetch ALL schemes first
    const res = await fetch(API + '/schemes');
    if (!res.ok) throw new Error('Server error');
    let schemes = await res.json();

    // ✅ Filter by category on FRONTEND (most reliable)
    if (currentCat !== 'All' && currentCat !== 'All Categories') {
      schemes = schemes.filter(s =>
        s.category.trim().toLowerCase() === currentCat.trim().toLowerCase()
      );
    }

    // ✅ Filter by search text on FRONTEND
    if (search) {
      schemes = schemes.filter(s =>
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        (s.description && s.description.toLowerCase().includes(search.toLowerCase()))
      );
    }

    // Show results
    if (!schemes.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:40px;
          background:#fff;border-radius:12px;border:1.5px solid #e1e8f5">
          <div style="font-size:2rem;margin-bottom:10px">🔍</div>
          <h3 style="color:#0f2557;margin-bottom:8px">No schemes found</h3>
          <p style="color:#64748b;font-size:0.88rem">
            Try different keywords or select a different category.
          </p>
          <button onclick="clearAll()"
            style="margin-top:14px;padding:9px 20px;background:#0f2557;
            color:#fff;border:none;border-radius:8px;cursor:pointer;
            font-size:0.88rem;font-weight:600">
            Show All Schemes
          </button>
        </div>`;
      return;
    }

    grid.innerHTML = schemes.map(s => `
      <div class="scheme-card">
        <span class="badge ${BADGE[s.category] || ''}">${s.category}</span>
        <h3>${s.title}</h3>
        <p>${(s.description || '').substring(0, 90)}...</p>
        <div class="scheme-amount">${s.benefit_amount || 'Variable Support'}</div>
        <a href="scheme-detail.html?id=${s.id}" class="btn-view">View Details</a>
      </div>
    `).join('');

  } catch(err) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:40px;
        background:#fff;border-radius:12px;border:1.5px solid #fecaca">
        <div style="font-size:2rem;margin-bottom:10px">❌</div>
        <h3 style="color:#b91c1c;margin-bottom:8px">Cannot Load Schemes</h3>
        <p style="color:#64748b;font-size:0.88rem">
          Make sure backend is running on port 5000.<br>
          Run: <code>node server.js</code> in backend folder.
        </p>
      </div>`;
  }
}

// ===== FILTER BY CATEGORY =====
function filterSchemes(cat, btn) {
  // Set current category
  currentCat = cat;

  // Update TOP tab buttons
  document.querySelectorAll('.ctab').forEach(t => {
    t.classList.remove('active');
  });
  if (btn) {
    btn.classList.add('active');
  } else {
    // Find and activate matching tab
    document.querySelectorAll('.ctab').forEach(t => {
      if (t.textContent.trim() === cat ||
         (cat === 'All' && t.textContent.trim() === 'All Categories')) {
        t.classList.add('active');
      }
    });
  }

  // Update SIDEBAR list
  document.querySelectorAll('.s-sidebar-list li').forEach(li => {
    li.classList.remove('active');
    const liText = li.textContent.trim();
    if (liText === cat || (cat === 'All' && liText === 'All Categories')) {
      li.classList.add('active');
    }
  });

  // Clear search box when changing category
  const searchInput = document.getElementById('schemes-search') ||
                      document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  // Load filtered schemes
  loadSchemes();
}

// ===== CLEAR ALL FILTERS =====
function clearAll() {
  currentCat = 'All';
  const searchInput = document.getElementById('schemes-search') ||
                      document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  // Reset tabs
  document.querySelectorAll('.ctab').forEach((t, i) => {
    t.classList.remove('active');
    if (i === 0) t.classList.add('active');
  });

  // Reset sidebar
  document.querySelectorAll('.s-sidebar-list li').forEach((li, i) => {
    li.classList.remove('active');
    if (i === 0) li.classList.add('active');
  });

  loadSchemes();
}

// ===== SEARCH FUNCTION =====
function searchSchemes() {
  loadSchemes();
}

// ===== ON PAGE LOAD =====
window.onload = () => {
  const params = new URLSearchParams(window.location.search);

  // Read category from URL
  const cat = params.get('cat');
  if (cat) {
    currentCat = decodeURIComponent(cat);

    // Activate matching tab
    document.querySelectorAll('.ctab').forEach(t => {
      t.classList.remove('active');
      if (t.textContent.trim() === currentCat) {
        t.classList.add('active');
      }
    });

    // Activate sidebar item
    document.querySelectorAll('.s-sidebar-list li').forEach(li => {
      li.classList.remove('active');
      if (li.textContent.trim() === currentCat) {
        li.classList.add('active');
      }
    });
  }

  // Read search from URL
  const search = params.get('search');
  if (search) {
    const decoded = decodeURIComponent(search);
    const searchInput = document.getElementById('schemes-search') ||
                        document.getElementById('search-input');
    if (searchInput) searchInput.value = decoded;
  }

  // Load schemes
  loadSchemes();
};