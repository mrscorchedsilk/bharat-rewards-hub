
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import { sendOTP, verifyOTP } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";

const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    try {
      const success = await sendOTP(email);
      if (success) {
        setStep("otp");
      }
    } catch (error) {
      console.error("Failed to send OTP", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    setLoading(true);
    try {
      const user = await verifyOTP(email, otp);
      if (user) {
        login(user);
      }
    } catch (error) {
      console.error("Failed to verify OTP", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-xl overflow-hidden animate-fade-in">
      <div className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome to Bharat Rewards</h2>
          <p className="text-gray-600 mt-2">
            {step === "email" 
              ? "Enter your email to receive a one-time password" 
              : "Enter the 6-digit OTP sent to your email"}
          </p>
        </div>

        {step === "email" ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-bharat-600 hover:bg-bharat-700 text-white"
              disabled={loading || !email}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                type="text"
                id="otp"
                placeholder="6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="text-center text-lg font-medium letter-spacing-wide"
                maxLength={6}
                required
              />
              <p className="text-xs text-gray-500">
                We've sent a code to {email}
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-bharat-600 hover:bg-bharat-700 text-white"
              disabled={loading || otp.length !== 6}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify & Login"
              )}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep("email")}
                className="text-sm text-bharat-600 hover:text-bharat-700"
              >
                Change email
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
