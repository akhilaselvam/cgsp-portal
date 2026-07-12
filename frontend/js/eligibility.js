const API = 'https://cgsp-portal.onrender.com/api';
let selectedCat = '';

// Select category
function selectEligCat(cat, el) {
  selectedCat = cat;
  document.querySelectorAll('.elig-cat-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

// Check eligibility
async function checkEligibility() {
  if (!selectedCat) {
    alert('⚠️ Please select a category first!');
    return;
  }

  const btn = document.querySelector('.btn-primary');
  if (btn) {
    btn.textContent = 'Checking...';
    btn.disabled = true;
  }

  try {
    // Fetch ALL schemes from backend
    const res = await fetch(API + '/schemes');
    if (!res.ok) throw new Error('Server error');
    const allSchemes = await res.json();

    // Filter by selected category on frontend
    const eligible = allSchemes.filter(s =>
      s.category.trim().toLowerCase() === selectedCat.trim().toLowerCase()
    );

    // Save results to localStorage
    localStorage.setItem('eligibilityResults', JSON.stringify({
      eligible: eligible,
      count: eligible.length,
      category: selectedCat
    }));

    // Go to results page
    window.location.href = 'eligibility-results.html';

  } catch(err) {
    alert('❌ Cannot connect to server. Make sure backend is running on port 5000.');
    if (btn) {
      btn.textContent = 'Check Eligibility';
      btn.disabled = false;
    }
  }
}

// Reset form
function resetEligForm() {
  document.querySelectorAll('.elig-page input, .elig-page select').forEach(el => {
    el.value = '';
  });
  document.querySelectorAll('.elig-cat-card').forEach(c => c.classList.remove('sel'));
  selectedCat = '';
}