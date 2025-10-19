import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Play, Pause, Square } from "lucide-react";

export default function TimeTrackingPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Time Tracking</h1>
            <p className="text-muted-foreground">
              Track time, manage timesheets, and bill clients
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Timer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-2xl font-bold mb-4">00:00:00</p>
              <div className="flex justify-center space-x-4">
                <Button className="btn-primary">
                  <Play className="mr-2 h-4 w-4" />
                  Start Timer
                </Button>
                <Button variant="outline">
                  <Pause className="mr-2 h-4 w-4" />
                  Pause
                </Button>
                <Button variant="outline">
                  <Square className="mr-2 h-4 w-4" />
                  Stop
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}