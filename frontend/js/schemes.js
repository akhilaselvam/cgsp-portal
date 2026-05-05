const API = 'http://localhost:5000/api';
let currentCat = 'All';

const badgeClass = { 'Student':'badge-student', 'Agriculture':'badge-agriculture', 'Physically Challenged':'badge-disabled', 'Health & Wellness':'badge-health' };

async function loadSchemes() {
  const search = document.getElementById('search-input')?.value || '';
  let url = `${API}/schemes?`;
  if (currentCat && currentCat !== 'All') {
  url += 'category=' + encodeURIComponent(currentCat) + '&';
}
  if (search) url += `search=${encodeURIComponent(search)}`;

  const grid = document.getElementById('schemes-grid');
  grid.innerHTML = '<p>Loading...</p>';
  try {
    const res = await fetch(url);
    const schemes = await res.json();
    if (!schemes.length) { grid.innerHTML = '<p>No schemes found.</p>'; return; }
    grid.innerHTML = schemes.map(s => `
      <div class="scheme-card">
        <span class="badge ${badgeClass[s.category] || ''}">${s.category}</span>
        <h3>${s.title}</h3>
        <p>${s.description?.substring(0, 90)}...</p>
        <div class="amount">${s.benefit_amount || 'Variable Support'}</div>
        <a href="scheme-detail.html?id=${s.id}" class="btn-view">View Details</a>
      </div>
    `).join('');
  } catch { grid.innerHTML = '<p style="color:red">Failed to load schemes.</p>'; }
}

function filterCat(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.sidebar-cat-list li').forEach(l => l.classList.remove('active'));
  loadSchemes();
}

// Check URL params
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    currentCat = cat;
    document.querySelectorAll('.ctab').forEach(t => {
      t.classList.remove('active');
      if (t.textContent.trim().includes('Health') && cat.includes('Health')) {
        t.classList.add('active');
      } else if (t.textContent.trim() === cat) {
        t.classList.add('active');
      }
    });
  }
  loadSchemes();
};