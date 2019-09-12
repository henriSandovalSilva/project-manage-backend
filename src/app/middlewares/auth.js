import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token is required' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.secret);

    req.userId = decoded.id;
    req.userLevel = decoded.level;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
