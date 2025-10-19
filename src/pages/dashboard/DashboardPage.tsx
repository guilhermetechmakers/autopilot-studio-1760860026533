import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  FolderOpen,
  Clock,
  Bot,
  ArrowRight,
  Plus,
  Calendar,
  FileText,
  CheckCircle,
  AlertCircle,
  MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const pipelineData = [
  { name: "Leads", value: 24, color: "#3b82f6" },
  { name: "Proposals", value: 12, color: "#8b5cf6" },
  { name: "Active", value: 8, color: "#10b981" },
  { name: "Completed", value: 15, color: "#6b7280" },
];

const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 28000 },
  { month: "Feb", revenue: 52000, expenses: 32000 },
  { month: "Mar", revenue: 48000, expenses: 30000 },
  { month: "Apr", revenue: 61000, expenses: 35000 },
  { month: "May", revenue: 55000, expenses: 33000 },
  { month: "Jun", revenue: 67000, expenses: 38000 },
];

const projectStatusData = [
  { name: "Planning", value: 3, color: "#f59e0b" },
  { name: "Active", value: 8, color: "#3b82f6" },
  { name: "On Hold", value: 2, color: "#ef4444" },
  { name: "Completed", value: 15, color: "#10b981" },
];

const recentProjects = [
  {
    id: "1",
    name: "E-commerce Platform",
    client: "TechCorp Inc.",
    status: "active",
    progress: 75,
    dueDate: "2024-02-15",
    team: ["John Doe", "Jane Smith"],
  },
  {
    id: "2",
    name: "Mobile App Redesign",
    client: "StartupXYZ",
    status: "planning",
    progress: 25,
    dueDate: "2024-03-01",
    team: ["Mike Johnson", "Sarah Wilson"],
  },
  {
    id: "3",
    name: "AI Chatbot Integration",
    client: "Enterprise Ltd.",
    status: "active",
    progress: 90,
    dueDate: "2024-01-30",
    team: ["Alex Brown", "Emma Davis"],
  },
];

const aiSuggestions = [
  {
    type: "proposal",
    title: "Generate proposal for TechStart Inc.",
    description: "Based on intake data, create a comprehensive proposal",
    priority: "high",
  },
  {
    type: "milestone",
    title: "Update project milestones",
    description: "Review and adjust timeline for E-commerce Platform",
    priority: "medium",
  },
  {
    type: "meeting",
    title: "Schedule client check-in",
    description: "Follow up with StartupXYZ on project status",
    priority: "low",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-blue-500";
    case "planning":
      return "bg-yellow-500";
    case "completed":
      return "bg-green-500";
    case "on_hold":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "text-red-500";
    case "medium":
      return "text-yellow-500";
    case "low":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </motion.div>

      {/* Pipeline Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {pipelineData.map((item, index) => (
          <Card key={item.name} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Expenses</CardTitle>
              <CardDescription>
                Monthly revenue and expense trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stackId="2"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Project Status</CardTitle>
              <CardDescription>
                Distribution of projects by status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>
                  Your current projects and their progress
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{project.name}</h4>
                        <Badge
                          variant="secondary"
                          className={getStatusColor(project.status)}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.client}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                        <span>Due: {project.dueDate}</span>
                        <span>{project.team.length} members</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Copilot Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5" />
                AI Copilot Suggestions
              </CardTitle>
              <CardDescription>
                Smart recommendations to improve your workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm">{suggestion.title}</h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getPriorityColor(suggestion.priority)}`}
                        >
                          {suggestion.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {suggestion.description}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Create Proposal</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Generate a new proposal using AI assistance
            </p>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              New Proposal
            </Button>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bot className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-semibold mb-2">AI Intake</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start a new client intake process
            </p>
            <Button variant="outline" className="w-full">
              <Bot className="mr-2 h-4 w-4" />
              Start Intake
            </Button>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-2">Schedule Meeting</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Book a meeting with clients or team
            </p>
            <Button variant="outline" className="w-full">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}