require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Create uploads directory if not in Vercel environment
if (process.env.NODE_ENV !== 'production') {
  !fs.existsSync('./uploads') && fs.mkdirSync('./uploads');
}

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://benevolent-biscochitos-8f4a30.netlify.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Only use static uploads directory in development
if (process.env.NODE_ENV !== 'production') {
  app.use('/uploads', express.static('uploads'));
}

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/users', require('./routes/users'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/transport-modes', require('./routes/transportModes'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

// Start server only in development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `✓ Server is running on port ${PORT}`);
    console.log('\x1b[36m%s\x1b[0m', `✓ API endpoint: http://localhost:${PORT}/api`);
    console.log('\x1b[33m%s\x1b[0m', '✓ Press CTRL+C to stop the server');
  });
}

// Export app for Vercel
module.exports = app;