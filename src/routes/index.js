// src/routes/index.js
const express = require('express');
const blogsRouter = require('./blogs');

const router = express.Router();

router.use('/blogs', blogsRouter);

module.exports = router;
