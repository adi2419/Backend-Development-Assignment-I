// src/controllers/blogsController.js


  
const getAllBlogs = (req, res) => {
    res.json({ blogs });
  };
  
const createBlog = (req, res) => {
    const { authorId, title, content } = req.body;
  
    // Validation
    if (!authorId || !title || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const newBlog = { id: blogs.length + 1, authorId, title, content };
    blogs.push(newBlog);
  
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  };
  
const getBlogByAuthorId = (req, res) => {
    const authorId = parseInt(req.params.authorId);
  
    // Validation
    if (isNaN(authorId)) {
      return res.status(400).json({ error: 'Invalid author ID. Must be an integer.' });
    }
  
    const authorBlogs = blogs.filter(blog => blog.authorId === authorId);
  
    res.json({ blogs: authorBlogs });
  };
  
module.exports = { getAllBlogs, createBlog, getBlogByAuthorId };
  