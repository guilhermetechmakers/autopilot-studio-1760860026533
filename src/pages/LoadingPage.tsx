import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function LoadingPage() {
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
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center"
              >
                <Bot className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-2">Loading...</h2>
            <p className="text-muted-foreground mb-6">
              Please wait while we process your request.
            </p>
            
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}