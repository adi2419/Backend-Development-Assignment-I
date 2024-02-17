// src/middleware/rateLimiter.js
const rateLimiter = (limit) => {
    const requestCounts = new Map();
  
    return (req, res, next) => {
      const ip = req.ip;
  
      if (!requestCounts.has(ip)) {
        requestCounts.set(ip, 1);
      } else {
        requestCounts.set(ip, requestCounts.get(ip) + 1);
      }
  
      if (requestCounts.get(ip) <= limit) {
        next();
      } else {
        res.status(429).json({ error: 'Too Many Requests' });
      }
    };
  };
  
  module.exports = rateLimiter;
  