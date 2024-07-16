const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());

// Placeholder for future authentication middleware
// app.use(authMiddleware);

// Routes
app.use('/api', require('./routes'));

// Error handling middleware
app.use(errorHandler);

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch(err => {
    console.log('Error: ' + err);
  });

module.exports = app;
