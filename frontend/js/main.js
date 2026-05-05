const API = 'http://localhost:5000/api';

// Update nav login button based on auth
window.onload = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const btn = document.getElementById('nav-auth');
  if (btn && user) btn.textContent = `Hi, ${user.name.split(' ')[0]}`;
};

function searchSchemes() {
  const q = document.getElementById('hero-search').value;
  if (q) window.location.href = `schemes.html?search=${encodeURIComponent(q)}`;
}