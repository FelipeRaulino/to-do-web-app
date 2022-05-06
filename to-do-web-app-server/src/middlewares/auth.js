import jwt from 'jsonwebtoken';

import authConfig from '../config/auth.js';

export default async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if(!bearerToken){
    return res.status(400).json({ Message: 'Token is missing' });
  }

  const [, token] = bearerToken.split(' ');
  
  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);
    req.userId = decoded.id;
    return next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ Message: 'Token is invalid.' });
  }
};