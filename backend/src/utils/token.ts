import jwt from 'jsonwebtoken';

export const generateToken = (userId: number): string => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );
}; 