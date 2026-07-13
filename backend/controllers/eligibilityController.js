const db = require('../config/db');

exports.checkEligibility = async (req, res) => {
  const { category } = req.body;
  try {
    let query = 'SELECT * FROM schemes WHERE status = "active"';
    const params = [];
    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }
    const [schemes] = await db.query(query, params);

    // Only save check if user is logged in
    if (req.user && req.user.id) {
      try {
        await db.query(
          'INSERT INTO eligibility_checks (user_id, category) VALUES (?, ?)',
          [req.user.id, category]
        );
      } catch (insertErr) {
        // Ignore insert error - don't fail the whole request
        console.log('Check save skipped:', insertErr.message);
      }
    }

    res.json({ eligible: schemes, count: schemes.length });
  } catch (err) {
    console.error('Eligibility error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};