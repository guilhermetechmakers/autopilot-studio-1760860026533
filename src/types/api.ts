export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  limit: number;
  total_pages: number;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: Record<string, any>;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

export interface DashboardStats {
  total_projects: number;
  active_projects: number;
  completed_projects: number;
  total_revenue: number;
  monthly_recurring_revenue: number;
  pending_invoices: number;
  overdue_tasks: number;
  team_members: number;
}

export interface PipelineStats {
  leads: number;
  proposals: number;
  active_projects: number;
  completed_projects: number;
  total_value: number;
  conversion_rate: number;
}