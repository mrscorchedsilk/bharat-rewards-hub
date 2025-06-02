import express from 'express';
import { sendOtp, signin, signup, verifyEmail, verifyOtp } from '../controllers/authController';

const router = express.Router();

// Auth routes
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/verify-email', verifyEmail);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

export default router; 