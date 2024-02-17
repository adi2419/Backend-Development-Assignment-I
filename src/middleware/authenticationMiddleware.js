// src/middleware/authenticationMiddleware.js

const authors = [
    { id: 1, name: 'Author1', email: 'author1@example.com', password: 'password1' },
    { id: 2, name: 'Author2', email: 'author2@example.com', password: 'password2' },
    // ... more authors
  ];
  
  const authenticationMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
  
    // Validation
    if (!token) {
      return res.status(401).json({ error: 'Authorization token missing' });
    }
  
    const decodedToken = Buffer.from(token, 'base64').toString('utf-8');
    const [email, password] = decodedToken.split(':');
  
    // Check if the email and password match any author
    const authorizedAuthor = authors.find(author => author.email === email && author.password === password);
  
    if (!authorizedAuthor) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    req.author = authorizedAuthor;
    next();
  };
  
  module.exports = authenticationMiddleware;
  


  