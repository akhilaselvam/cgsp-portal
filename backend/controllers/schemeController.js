const db = require('../config/db');

// PUBLIC - Get all schemes
exports.getAllSchemes = async (req, res) => {
  const { category, search } = req.query;
  let query = 'SELECT * FROM schemes WHERE status = "active"';
  const params = [];
  if (category && category !== 'All') {
    query += ' AND category = ?';
    params.push(category);
  }
  if (search) {
    query += ' AND (title LIKE ? OR description LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }
  try {
    const [schemes] = await db.query(query, params);
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// PUBLIC - Get scheme by ID
exports.getSchemeById = async (req, res) => {
  try {
    const [scheme] = await db.query(
      'SELECT * FROM schemes WHERE id = ?', [req.params.id]
    );
    if (scheme.length === 0) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    res.json(scheme[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ADMIN - Get ALL schemes including inactive
exports.adminGetAllSchemes = async (req, res) => {
  try {
    const [schemes] = await db.query(
      'SELECT * FROM schemes ORDER BY created_at DESC'
    );
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ADMIN - Add new scheme
exports.addScheme = async (req, res) => {
  const {
    title, description, category, department,
    income_limit, benefit_amount, application_mode,
    eligibility_criteria, key_benefits,
    required_documents, official_link
  } = req.body;
  try {
    await db.query(
      `INSERT INTO schemes 
       (title, description, category, department, income_limit, 
        benefit_amount, application_mode, eligibility_criteria, 
        key_benefits, required_documents, official_link, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
      [title, description, category, department, income_limit,
       benefit_amount, application_mode, eligibility_criteria,
       key_benefits, required_documents, official_link]
    );
    res.json({ message: 'Scheme added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ADMIN - Update scheme
exports.updateScheme = async (req, res) => {
  const {
    title, description, category, department,
    income_limit, benefit_amount, application_mode,
    eligibility_criteria, key_benefits,
    required_documents, official_link, status
  } = req.body;
  try {
    await db.query(
      `UPDATE schemes SET 
       title=?, description=?, category=?, department=?,
       income_limit=?, benefit_amount=?, application_mode=?,
       eligibility_criteria=?, key_benefits=?,
       required_documents=?, official_link=?, status=?
       WHERE id=?`,
      [title, description, category, department, income_limit,
       benefit_amount, application_mode, eligibility_criteria,
       key_benefits, required_documents, official_link, status,
       req.params.id]
    );
    res.json({ message: 'Scheme updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ADMIN - Delete scheme
exports.deleteScheme = async (req, res) => {
  try {
    await db.query('DELETE FROM schemes WHERE id = ?', [req.params.id]);
    res.json({ message: 'Scheme deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ADMIN - Dashboard stats
exports.getStats = async (req, res) => {
  try {
    const [[{ total }]] = await db.query(
      'SELECT COUNT(*) as total FROM schemes'
    );
    const [[{ active }]] = await db.query(
      'SELECT COUNT(*) as active FROM schemes WHERE status="active"'
    );
    const [[{ student }]] = await db.query(
      'SELECT COUNT(*) as student FROM schemes WHERE category="Student"'
    );
    const [[{ agriculture }]] = await db.query(
      'SELECT COUNT(*) as agriculture FROM schemes WHERE category="Agriculture"'
    );
    const [[{ disabled }]] = await db.query(
      'SELECT COUNT(*) as disabled FROM schemes WHERE category="Physically Challenged"'
    );
    const [[{ health }]] = await db.query(
      'SELECT COUNT(*) as health FROM schemes WHERE category="Health & Wellness"'
    );
    res.json({ total, active, student, agriculture, disabled, health });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};