import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Download } from "lucide-react";

export default function HandoverPackPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Handover Pack</h1>
            <p className="text-muted-foreground">
              Generate project deliverables and post-launch plans
            </p>
          </div>
          <Button className="btn-primary">
            <Package className="mr-2 h-4 w-4" />
            Generate Pack
          </Button>
        </div>

        <Card>
          <CardContent className="text-center py-8">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Handover pack generation coming soon. Create comprehensive project deliverables.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}