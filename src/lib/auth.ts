
import { toast } from "sonner";

// Mock user type
export interface User {
  id: string;
  email: string;
  name?: string;
  phoneNumber?: string;
  walletBalance: number;
  cashbackPoints: number;
  profilePicture?: string;
}

// Get currently logged in user (if any)
export const getCurrentUser = (): User | null => {
  const savedUser = localStorage.getItem("bharat_user");
  if (savedUser) {
    try {
      return JSON.parse(savedUser);
    } catch (error) {
      console.error("Failed to parse user data", error);
      localStorage.removeItem("bharat_user");
    }
  }
  return null;
};

// Mock authentication function - in real app, this would connect to a backend
export const sendOTP = async (email: string): Promise<boolean> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, this would send an actual email with OTP
  console.log(`OTP sent to ${email}`);
  toast.success(`OTP sent to ${email}`);
  return true;
};

// Mock OTP verification
export const verifyOTP = async (email: string, otp: string): Promise<User | null> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For demo purposes, any 6-digit OTP works
  if (otp.length === 6 && /^\d+$/.test(otp)) {
    // Create a mock user
    const mockUser: User = {
      id: `user-${Math.random().toString(36).substring(2, 9)}`,
      email,
      walletBalance: Math.floor(Math.random() * 1000),
      cashbackPoints: Math.floor(Math.random() * 100)
    };
    
    toast.success("Login successful!");
    return mockUser;
  }
  
  toast.error("Invalid OTP. Please try again.");
  return null;
};

// Logout function
export const logout = (): void => {
  localStorage.removeItem("bharat_user");
  toast.info("Logged out successfully");
  // Forcing a page reload to ensure clean state after logout
  window.location.href = "/";
};
