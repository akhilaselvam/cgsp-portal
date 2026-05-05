const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'CGSP Backend Running ✅', status: 'OK' });
});

// Routes
try {
  app.use('/api/auth',        require('./routes/auth'));
  console.log('✅ Auth routes loaded');
} catch(e) { console.error('❌ Auth routes failed:', e.message); }

try {
  app.use('/api/schemes',     require('./routes/schemes'));
  console.log('✅ Schemes routes loaded');
} catch(e) { console.error('❌ Schemes routes failed:', e.message); }

try {
  app.use('/api/eligibility', require('./routes/eligibility'));
  console.log('✅ Eligibility routes loaded');
} catch(e) { console.error('❌ Eligibility routes failed:', e.message); }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});