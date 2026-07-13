const db = require('../config/db');

exports.checkEligibility = async (req, res) => {
  const { category } = req.body;
  
  if (!category) {
    return res.status(400).json({ message: 'Category is required' });
  }

  try {
    const [schemes] = await db.query(
      'SELECT * FROM schemes WHERE status = "active" AND category = ?',
      [category]
    );
    
    res.json({ eligible: schemes, count: schemes.length });
    
  } catch (err) {
    console.error('Eligibility error:', err.message);
    res.status(500).json({ 
      message: 'Server error', 
      error: err.message 
    });
  }
};