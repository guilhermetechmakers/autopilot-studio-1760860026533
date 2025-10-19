import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, FileText, Send, Eye, Edit, MoreHorizontal } from "lucide-react";

export default function ProposalsPage() {
  const proposals = [
    {
      id: "1",
      title: "E-commerce Platform Development",
      client: "TechCorp Inc.",
      value: 50000,
      status: "sent",
      created: "2024-01-15",
      due: "2024-02-15"
    },
    {
      id: "2", 
      title: "Mobile App Redesign",
      client: "StartupXYZ",
      value: 25000,
      status: "draft",
      created: "2024-01-20",
      due: "2024-02-20"
    },
    {
      id: "3",
      title: "AI Chatbot Integration", 
      client: "Enterprise Ltd.",
      value: 15000,
      status: "accepted",
      created: "2024-01-10",
      due: "2024-01-30"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft": return "bg-gray-500";
      case "sent": return "bg-blue-500";
      case "accepted": return "bg-green-500";
      case "rejected": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Proposals & SoW</h1>
            <p className="text-muted-foreground">
              Manage your proposals and statements of work
            </p>
          </div>
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" />
            New Proposal
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Proposals</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proposals.map((proposal) => (
                  <TableRow key={proposal.id}>
                    <TableCell className="font-medium">{proposal.title}</TableCell>
                    <TableCell>{proposal.client}</TableCell>
                    <TableCell>${proposal.value.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(proposal.status)}>
                        {proposal.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{proposal.created}</TableCell>
                    <TableCell>{proposal.due}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}