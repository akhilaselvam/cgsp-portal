const API = 'https://cgsp-portal.onrender.com/api';
let selectedCat = '';

function selectEligCat(cat, el) {
  selectedCat = cat;
  document.querySelectorAll('.elig-cat-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

async function checkEligibility() {
  if (!selectedCat) {
    alert('Please select a category first!');
    return;
  }

  const btn = document.querySelector('.btn-primary') ||
              document.getElementById('check-btn');
  if (btn) { btn.textContent = 'Checking...'; btn.disabled = true; }

  try {
    const res = await fetch(API + '/schemes');
    if (!res.ok) throw new Error('Server error ' + res.status);
    
    const allSchemes = await res.json();
    
    const eligible = allSchemes.filter(s =>
      s.category.trim().toLowerCase() === selectedCat.trim().toLowerCase()
    );

    localStorage.setItem('eligibilityResults', JSON.stringify({
      eligible: eligible,
      count: eligible.length,
      category: selectedCat
    }));

    window.location.href = 'eligibility-results.html';

  } catch(err) {
    const errEl = document.getElementById('error-msg');
    if (errEl) {
      errEl.textContent = '❌ Error: ' + err.message;
      errEl.style.display = 'block';
    } else {
      alert('Error: ' + err.message);
    }
    if (btn) { btn.textContent = '✅ Check Eligibility'; btn.disabled = false; }
  }
}

function resetEligForm() {
  document.querySelectorAll('input, select').forEach(el => el.value = '');
  document.querySelectorAll('.elig-cat-card').forEach(c => c.classList.remove('sel'));
  selectedCat = '';
}

function resetForm() { resetEligForm(); }