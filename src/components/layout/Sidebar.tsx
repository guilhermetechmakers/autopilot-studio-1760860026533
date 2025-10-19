import { motion } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Bot,
  LayoutDashboard,
  FolderOpen,
  FileText,
  DollarSign,
  Clock,
  Package,
  Settings,
  Users,
  BarChart3,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  Search,
  Bell,
  User
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderOpen,
    children: [
      { name: "All Projects", href: "/projects" },
      { name: "Active", href: "/projects?status=active" },
      { name: "Completed", href: "/projects?status=completed" },
      { name: "Client Portal", href: "/client-portal" },
      { name: "AI Copilot", href: "/ai-copilot" },
    ],
  },
  {
    name: "Business",
    href: "/business",
    icon: FileText,
    children: [
      { name: "Proposals", href: "/proposals" },
      { name: "Billing", href: "/billing" },
      { name: "Time Tracking", href: "/time-tracking" },
      { name: "Handover Pack", href: "/handover-pack" },
    ],
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Team",
    href: "/team",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const quickActions = [
  { name: "New Project", icon: Plus, href: "/projects/new" },
  { name: "New Proposal", icon: FileText, href: "/proposals/new" },
  { name: "AI Intake", icon: Bot, href: "/intake" },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? "4rem" : "16rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-full bg-card border-r border-border flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={false}
              animate={{ opacity: isCollapsed ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Autopilot</span>
            </motion.div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      {!isCollapsed && (
        <motion.div
          initial={false}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="p-4"
        >
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Quick Actions
            </h3>
            {quickActions.map((action) => (
              <Link key={action.name} to={action.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  <action.icon className="mr-2 h-4 w-4" />
                  {action.name}
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      <Separator />

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <Collapsible
                  open={openSections.includes(item.name)}
                  onOpenChange={() => toggleSection(item.name)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start",
                        isActive(item.href) && "bg-primary/10 text-primary"
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 text-left">{item.name}</span>
                          {openSections.includes(item.name) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </>
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  
                  {!isCollapsed && (
                    <CollapsibleContent className="space-y-1 ml-6">
                      {item.children.map((child) => (
                        <Link key={child.name} to={child.href}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "w-full justify-start text-muted-foreground hover:text-foreground",
                              isActive(child.href) && "bg-primary/10 text-primary"
                            )}
                          >
                            {child.name}
                          </Button>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  )}
                </Collapsible>
              ) : (
                <Link to={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      isActive(item.href) && "bg-primary/10 text-primary"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>{item.name}</span>}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      {!isCollapsed && (
        <motion.div
          initial={false}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="p-4 border-t border-border"
        >
          <div className="space-y-2">
            <Link to="/help">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & Support
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}