import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, FileText, Code, Lightbulb, Clock } from "lucide-react";

export default function AICopilotPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Bot className="mr-3 h-8 w-8" />
              AI Copilot Workspace
            </h1>
            <p className="text-muted-foreground">
              Generate specs, documentation, and project artifacts with AI assistance
            </p>
          </div>
          <Badge variant="outline">Beta</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Prompt Console</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Describe what you need help with... (e.g., 'Generate user stories for an e-commerce checkout flow')"
                    className="min-h-[120px]"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Generate Specs
                      </Button>
                      <Button variant="outline" size="sm">
                        <Code className="mr-2 h-4 w-4" />
                        Code Review
                      </Button>
                      <Button variant="outline" size="sm">
                        <Lightbulb className="mr-2 h-4 w-4" />
                        Brainstorm
                      </Button>
                    </div>
                    <Button className="btn-primary">
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Generations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">User Stories for Checkout Flow</h4>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Generated 8 user stories with acceptance criteria
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      2 minutes ago
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">API Documentation</h4>
                      <Badge variant="outline">Draft</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Generated API documentation for payment endpoints
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      1 hour ago
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  User Stories
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Code className="mr-2 h-4 w-4" />
                  Technical Specs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Test Cases
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Brainstorm Ideas
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tokens Used</span>
                    <span className="font-medium">2,450 / 10,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '24.5%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>This month</span>
                    <span>Resets on 1st</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}