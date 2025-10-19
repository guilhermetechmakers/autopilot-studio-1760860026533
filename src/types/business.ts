export interface Proposal {
  id: string;
  client_id: string;
  client_name: string;
  project_id?: string;
  title: string;
  content: string;
  status: 'draft' | 'sent' | 'reviewed' | 'accepted' | 'rejected' | 'expired';
  value: number;
  currency: string;
  valid_until: string;
  created_at: string;
  updated_at: string;
  version: number;
  signed_at?: string;
  signed_by?: string;
}

export interface StatementOfWork {
  id: string;
  proposal_id: string;
  project_id: string;
  title: string;
  content: string;
  status: 'draft' | 'sent' | 'reviewed' | 'accepted' | 'rejected';
  milestones: SowMilestone[];
  created_at: string;
  updated_at: string;
  version: number;
  signed_at?: string;
  signed_by?: string;
}

export interface SowMilestone {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  acceptance_criteria: string[];
  due_date: string;
  billing_amount: number;
  billing_trigger: 'completion' | 'partial' | 'time_based';
}

export interface Invoice {
  id: string;
  project_id: string;
  client_id: string;
  client_name: string;
  invoice_number: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  amount: number;
  currency: string;
  due_date: string;
  paid_date?: string;
  created_at: string;
  updated_at: string;
  line_items: InvoiceLineItem[];
  payment_method?: string;
  payment_reference?: string;
}

export interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
  milestone_id?: string;
  time_entry_ids?: string[];
}

export interface TimeEntry {
  id: string;
  project_id: string;
  task_id?: string;
  user_id: string;
  user_name: string;
  description: string;
  start_time: string;
  end_time?: string;
  duration_minutes: number;
  billable: boolean;
  billable_rate?: number;
  status: 'running' | 'stopped' | 'submitted' | 'approved' | 'billed';
  created_at: string;
  updated_at: string;
}

export interface Intake {
  id: string;
  client_name: string;
  client_email: string;
  company?: string;
  project_type: string;
  budget_range: string;
  timeline: string;
  requirements: string;
  technical_stack?: string[];
  qualification_score: number;
  status: 'new' | 'qualified' | 'proposal_sent' | 'accepted' | 'rejected';
  created_at: string;
  updated_at: string;
  assigned_to?: string;
  notes?: string;
}