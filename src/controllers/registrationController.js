// // src/controllers/registrationController.js



const registerAuthor = (req, res) => {
    const { name, email, password } = req.body;
  
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    // Check if email is already registered
    if (authors.some(author => author.email === email)) {
      return res.status(409).json({ error: 'Email already registered' });
    }
  
    const newAuthor = { id: authors.length + 1, name, email, password };
    authors.push(newAuthor);
  
    res.status(201).json({ message: 'Author registered successfully', author: newAuthor });
  };
  
  module.exports = { registerAuthor };
  