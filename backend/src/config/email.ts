import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Bharat Rewards Hub',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Bharat Rewards Hub</h2>
        <p>Your OTP for verification is:</p>
        <h1 style="color: #2563eb; font-size: 32px; letter-spacing: 5px; text-align: center; padding: 20px; background: #f3f4f6; border-radius: 8px;">${otp}</h1>
        <p>This OTP will expire in 10 minutes.</p>
        <p>If you didn't request this OTP, please ignore this email.</p>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="color: #6b7280; font-size: 14px;">This is an automated email, please do not reply.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send verification email');
  }
};

export default transporter; 