
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { sendOTP, verifyOTP } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      return;
    }

    setIsLoading(true);
    try {
      const success = await sendOTP(email);
      if (success) {
        setIsOtpSent(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      return;
    }

    setIsLoading(true);
    try {
      const user = await verifyOTP(email, otp);
      if (user) {
        login(user);
        navigate("/dashboard");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" onClick={() => navigate("/")} className="text-gray-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
      
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-[#38b6ff] flex items-center justify-center mb-4">
            <span className="text-white font-bold text-lg">BR</span>
          </div>
          <CardTitle className="text-2xl font-bold">Bharat Rewards</CardTitle>
          <CardDescription>
            {isOtpSent 
              ? "Enter the OTP sent to your email"
              : "Sign in to your account to access exclusive rewards"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isOtpSent ? (
            <form onSubmit={handleSendOTP}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#38b6ff] hover:bg-[#38b6ff]/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="otp">One-Time Password</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We sent a 6-digit code to {email}
                  </p>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#38b6ff] hover:bg-[#38b6ff]/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>
                <Button 
                  type="button" 
                  variant="link" 
                  className="w-full mt-2"
                  onClick={() => setIsOtpSent(false)}
                  disabled={isLoading}
                >
                  Use a different email
                </Button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-center text-gray-500">
            For demo purposes, any 6-digit code will work as a valid OTP
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
