import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from "sonner";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');

      if (!token) {
        toast.error('Invalid verification link');
        setIsVerifying(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/auth/verify-email?token=${token}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Verification failed');
        }

        setIsVerified(true);
        toast.success('Email verified successfully!');
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Failed to verify email');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams]);

  if (isVerifying) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Verifying your email...</h1>
          <p className="text-gray-500">Please wait while we verify your email address.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center space-y-6 max-w-md">
        {isVerified ? (
          <>
            <h1 className="text-2xl font-bold">Email Verified!</h1>
            <p className="text-gray-500">
              Your email has been successfully verified. You can now log in to your account.
            </p>
            <Button
              onClick={() => navigate('/login')}
              className="w-full"
            >
              Go to Login
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold">Verification Failed</h1>
            <p className="text-gray-500">
              We couldn't verify your email. The link might be expired or invalid.
            </p>
            <Button
              onClick={() => navigate('/signup')}
              className="w-full"
            >
              Back to Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  );
} 