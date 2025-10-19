import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, RefreshCw, Home, Mail } from "lucide-react";

export default function ServerErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="card-hover">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <Bot className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold text-red-500 mb-4">500</h1>
            <h2 className="text-2xl font-semibold mb-2">Server Error</h2>
            <p className="text-muted-foreground mb-8">
              Something went wrong on our end. We're working to fix it.
            </p>
            
            <div className="space-y-4">
              <Button
                onClick={() => window.location.reload()}
                className="w-full btn-primary"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              
              <Link to="/dashboard">
                <Button variant="outline" className="w-full">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Button>
              </Link>
              
              <Button variant="ghost" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}