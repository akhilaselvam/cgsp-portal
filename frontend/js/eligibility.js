const API = 'http://localhost:5000/api';
let selectedCat = '';

function selectCat(cat, el) {
  selectedCat = cat;
  document.querySelectorAll('.cat-select-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

async function checkEligibility() {
  if (!selectedCat) { alert('Please select a category first!'); return; }
  const data = {
    category: selectedCat,
    age: document.getElementById('age').value,
    annual_income: document.getElementById('annual-income').value,
    state: document.getElementById('state').value,
    disability_type: document.getElementById('disability').value,
    course_stream: document.getElementById('course').value
  };
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  try {
    const res = await fetch(`${API}/eligibility/check`, { method: 'POST', headers, body: JSON.stringify(data) });
    const result = await res.json();
    localStorage.setItem('eligibilityResults', JSON.stringify(result));
    window.location.href = 'eligibility-results.html';
  } catch { alert('Error checking eligibility. Please try again.'); }
}

function resetForm() { document.querySelectorAll('input,select').forEach(el => el.value = ''); selectedCat = ''; document.querySelectorAll('.cat-select-card').forEach(c => c.classList.remove('selected')); }