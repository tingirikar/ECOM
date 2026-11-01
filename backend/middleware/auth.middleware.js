/**
 *  auth.middleware.js
 *  checks if a request made has a valid token
**/

import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // ?. optional chaining (when undefined => undefined)

  if (!token) {
    return res.status(401).json({
      message: 'No token provided'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch (err) {
    res.status(401).json({
      message: 'Invalid or expired token'
    });
  }
}
