import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import { sendVerificationEmail } from '../config/email';
import Otp from '../models/Otp';
import User from '../models/User';
import { generateToken } from '../utils/token';

// Send OTP
export const sendOtp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Generate a 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    
    // Set OTP expiration to 10 minutes from now
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Save or update OTP in database
    await Otp.upsert({
      email,
      otp,
      expiresAt
    });

    // Send OTP via email
    await sendVerificationEmail(email, otp);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Error sending OTP' });
  }
};

// Verify OTP
export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    // Find the OTP record
    const otpRecord = await Otp.findOne({
      where: {
        email,
        otp,
        expiresAt: {
          [Op.gt]: new Date() // Check if OTP hasn't expired
        }
      }
    });

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // Delete the used OTP
    await otpRecord.destroy();

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ message: 'Error verifying OTP' });
  }
};

// Sign up
export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      isVerified: true // Since we've already verified the email with OTP
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token
    });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Sign in
export const signin = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Verify OTP
    const otpRecord = await Otp.findOne({
      where: {
        email,
        otp,
        expiresAt: {
          [Op.gt]: new Date()
        }
      }
    });

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // Delete the used OTP
    await otpRecord.destroy();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token
    });
  } catch (error) {
    console.error('Error in signin:', error);
    res.status(500).json({ message: 'Error signing in' });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;

    if (!token || typeof token !== 'string') {
      return res.status(400).json({ message: 'Invalid verification token' });
    }

    const user = await verifyUser(token);

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired verification token' });
    }

    res.status(200).json({
      message: 'Email verified successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ message: 'Error verifying email' });
  }
}; 