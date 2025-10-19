import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

// Layout
import DashboardLayout from "@/components/layout/DashboardLayout";

// Pages
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import PasswordResetPage from "@/pages/auth/PasswordResetPage";
import EmailVerificationPage from "@/pages/auth/EmailVerificationPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import ProjectSpacePage from "@/pages/projects/ProjectSpacePage";
import ClientPortalPage from "@/pages/projects/ClientPortalPage";
import AICopilotPage from "@/pages/projects/AICopilotPage";
import ProposalsPage from "@/pages/business/ProposalsPage";
import BillingPage from "@/pages/business/BillingPage";
import TimeTrackingPage from "@/pages/business/TimeTrackingPage";
import HandoverPackPage from "@/pages/business/HandoverPackPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import SettingsPage from "@/pages/admin/SettingsPage";
import HelpPage from "@/pages/admin/HelpPage";
import CheckoutPage from "@/pages/business/CheckoutPage";
import TransactionHistoryPage from "@/pages/business/TransactionHistoryPage";
import ContentEditorPage from "@/pages/admin/ContentEditorPage";
import PrivacyPolicyPage from "@/pages/legal/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/legal/TermsOfServicePage";
import CookiePolicyPage from "@/pages/legal/CookiePolicyPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ServerErrorPage from "@/pages/ServerErrorPage";
import LoadingPage from "@/pages/LoadingPage";

// React Query client with optimal defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/password-reset" element={<PasswordResetPage />} />
              <Route path="/email-verification" element={<EmailVerificationPage />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/cookies" element={<CookiePolicyPage />} />
              
              {/* Protected Routes with Dashboard Layout */}
              <Route path="/" element={<DashboardLayout />}>
                {/* Dashboard Routes */}
                <Route path="dashboard" element={<DashboardPage />} />
                
                {/* Project Routes */}
                <Route path="projects/:id" element={<ProjectSpacePage />} />
                <Route path="client-portal/:id" element={<ClientPortalPage />} />
                <Route path="ai-copilot" element={<AICopilotPage />} />
                
                {/* Business Process Routes */}
                <Route path="proposals" element={<ProposalsPage />} />
                <Route path="billing" element={<BillingPage />} />
                <Route path="time-tracking" element={<TimeTrackingPage />} />
                <Route path="handover-pack" element={<HandoverPackPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="transactions" element={<TransactionHistoryPage />} />
                
                {/* Admin Routes */}
                <Route path="admin" element={<AdminDashboardPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="help" element={<HelpPage />} />
                <Route path="content-editor" element={<ContentEditorPage />} />
              </Route>
              
              {/* Utility Routes */}
              <Route path="/loading" element={<LoadingPage />} />
              <Route path="/500" element={<ServerErrorPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
