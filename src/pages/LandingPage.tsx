import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Bot, 
  FileText, 
  Zap, 
  DollarSign, 
  Users, 
  BarChart3, 
  Shield,
  CheckCircle,
  Star,
  Github,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Bot,
    title: "AI-Assisted Intake",
    description: "Conversational UI with branching and LLM-generated follow-ups for prospect qualification",
    color: "text-blue-400"
  },
  {
    icon: FileText,
    title: "Proposal & SoW Generation",
    description: "Template engine with LLM for draft/re-generation and e-signature integration",
    color: "text-green-400"
  },
  {
    icon: Zap,
    title: "Project Scaffolding",
    description: "Automated creation of project records, permissions, and timeline with repo mapping",
    color: "text-yellow-400"
  },
  {
    icon: BarChart3,
    title: "Repository Sync",
    description: "OAuth with GitHub/GitLab, webhook integration, and commit analysis",
    color: "text-purple-400"
  },
  {
    icon: DollarSign,
    title: "Billing & Invoicing",
    description: "Milestone billing, time tracking, QuickBooks sync, and profit analytics",
    color: "text-emerald-400"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Standups, status reports, meeting notes, and client feedback synthesis",
    color: "text-pink-400"
  }
];

const integrations = [
  { name: "GitHub", logo: "🐙" },
  { name: "Vercel", logo: "▲" },
  { name: "Stripe", logo: "💳" },
  { name: "QuickBooks", logo: "📊" },
  { name: "Slack", logo: "💬" },
  { name: "Zoom", logo: "📹" }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Agency",
    content: "Autopilot Studio transformed our entire workflow. We've reduced project setup time by 80% and increased client satisfaction significantly.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, AI Solutions Co",
    content: "The AI copilot is a game-changer. It generates proposals and specs that are 90% ready to go, saving us hours of work.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Project Manager, DevCorp",
    content: "Finally, a platform that handles everything from intake to handover. Our team productivity has increased by 150%.",
    rating: 5
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Autopilot Studio</span>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              🚀 Now in Beta
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              The Unified Business OS
              <br />
              for AI Development Agencies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Automate your entire service pipeline from intake through project handover. 
              Streamline lead qualification, proposal generation, project setup, and billing—all with built-in AI copilots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  Book AI Intake
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Request Demo
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Scale</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From prospect intake to project handover, Autopilot Studio handles every step of your agency workflow.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-muted-foreground mb-12">
              Connect with your favorite tools and services
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {integrations.map((integration) => (
                <div key={integration.name} className="flex items-center space-x-2 text-2xl">
                  <span>{integration.logo}</span>
                  <span className="text-lg font-medium">{integration.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Loved by Agencies Worldwide</h2>
            <p className="text-xl text-muted-foreground">
              See what our customers are saying about Autopilot Studio
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Agency?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of agencies already using Autopilot Studio to streamline their workflows and scale their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Autopilot Studio</span>
              </div>
              <p className="text-muted-foreground">
                The unified business OS for AI development agencies.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="/help" className="hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/help" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="mailto:support@autopilotstudio.com" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Autopilot Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}