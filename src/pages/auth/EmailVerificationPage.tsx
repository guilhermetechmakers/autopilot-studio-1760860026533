import { motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Mail, CheckCircle, ArrowRight, RefreshCw } from "lucide-react";
import { useEmailVerification } from "@/hooks/useAuth";

export default function EmailVerificationPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const emailVerification = useEmailVerification();
  
  const token = searchParams.get("token");

  const handleVerification = () => {
    if (token) {
      emailVerification.mutate(token, {
        onSuccess: () => {
          setIsVerified(true);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        },
      });
    }
  };

  const handleResend = () => {
    // TODO: Implement resend verification email
    console.log("Resending verification email...");
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Email verified!</CardTitle>
              <CardDescription>
                Your email has been successfully verified. Redirecting to dashboard...
              </CardDescription>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="card-hover">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
            <CardDescription>
              We've sent a verification link to your email address
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Please check your email and click the verification link to activate your account.
              </p>
            </div>

            <div className="space-y-4">
              {token && (
                <Button
                  onClick={handleVerification}
                  className="w-full btn-primary"
                  disabled={emailVerification.isPending}
                >
                  {emailVerification.isPending ? "Verifying..." : "Verify Email"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              
              <Button
                onClick={handleResend}
                variant="outline"
                className="w-full"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Resend verification email
              </Button>
              
              <Link to="/login">
                <Button variant="ghost" className="w-full">
                  Back to sign in
                </Button>
              </Link>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Didn't receive the email?</strong>
                <br />
                Check your spam folder or contact support if you continue to have issues.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}