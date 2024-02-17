// src/routes/blogs.js
const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

router.use(authenticationMiddleware);

router.get('/', blogsController.getAllBlogs);
router.post('/', blogsController.createBlog);
router.get('/:authorId', blogsController.getBlogByAuthorId);

module.exports = router;
