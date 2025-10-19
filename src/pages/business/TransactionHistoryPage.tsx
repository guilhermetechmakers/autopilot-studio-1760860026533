import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

export default function TransactionHistoryPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="text-center py-8">
            <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Transaction history coming soon.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}