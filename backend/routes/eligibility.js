const express = require('express');
const router = express.Router();
const { checkEligibility } = require('../controllers/eligibilityController');

router.post('/check', (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token) {
    const jwt = require('jsonwebtoken');
    try { req.user = jwt.verify(token, process.env.JWT_SECRET); } catch {}
  }
  next();
}, checkEligibility);

module.exports = router;