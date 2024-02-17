// src/routes/authentication.js
const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/register', registrationController.registerAuthor);

module.exports = router;
