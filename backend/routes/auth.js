const express = require('express');
const router = express.Router();
const { adminLogin, createAdmin } = require('../controllers/authController');

router.post('/admin-login', adminLogin);
router.post('/create-admin', createAdmin);

module.exports = router;