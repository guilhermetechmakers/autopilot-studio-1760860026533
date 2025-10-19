import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cookie className="mr-2 h-5 w-5" />
              Cookie Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Cookie policy content coming soon.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}