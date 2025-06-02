import jwt from 'jsonwebtoken';
import User from '../models/User';

export const generateToken = (userId: number): string => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );
};

export const verifyUser = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { userId: number };
    return await User.findByPk(decoded.userId);
  } catch (error) {
    return null;
  }
}; 