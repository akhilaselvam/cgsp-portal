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
// ===== HAMBURGER MENU =====
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  if (menu && hamburger) {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  if (menu && hamburger) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  }
});

// Close menu when link clicked
document.addEventListener('DOMContentLoaded', function() {
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.remove('open');
      document.getElementById('hamburger')?.classList.remove('open');
    });
  });
});