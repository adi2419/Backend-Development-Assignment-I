// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const loggerMiddleware = require('./src/middleware/logger');

const app = express();
const port = process.env.PORT || 3000;

// Built-in middleware to parse JSON requests
app.use(express.json());

// Additional middleware
app.use(loggerMiddleware);

// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
