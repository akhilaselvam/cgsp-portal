const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/auth');
const {
  getAllSchemes,
  getSchemeById,
  adminGetAllSchemes,
  addScheme,
  updateScheme,
  deleteScheme,
  getStats
} = require('../controllers/schemeController');

// PUBLIC routes (no login needed)
router.get('/', getAllSchemes);
router.get('/:id', getSchemeById);

// ADMIN routes (admin login required)
router.get('/admin/all', adminAuth, adminGetAllSchemes);
router.get('/admin/stats', adminAuth, getStats);
router.post('/admin/add', adminAuth, addScheme);
router.put('/admin/update/:id', adminAuth, updateScheme);
router.delete('/admin/delete/:id', adminAuth, deleteScheme);

module.exports = router;