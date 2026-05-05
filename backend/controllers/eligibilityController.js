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
    if (req.user) {
      await db.query(
        'INSERT INTO eligibility_checks (user_id, category) VALUES (?, ?)',
        [req.user.id, category]
      );
    }
    res.json({ eligible: schemes, count: schemes.length });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};