export interface Project {
  id: string;
  name: string;
  description: string;
  client_id: string;
  client_name: string;
  status: 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  budget: number;
  start_date: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
  team_members: ProjectMember[];
  milestones: Milestone[];
  repository_url?: string;
  deployment_url?: string;
}

export interface ProjectMember {
  id: string;
  user_id: string;
  user_name: string;
  user_email: string;
  role: 'lead' | 'developer' | 'designer' | 'qa' | 'client';
  joined_at: string;
}

export interface Milestone {
  id: string;
  project_id: string;
  name: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  due_date: string;
  completed_date?: string;
  billing_amount?: number;
  acceptance_criteria: string[];
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  project_id: string;
  milestone_id?: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee_id?: string;
  assignee_name?: string;
  due_date?: string;
  estimated_hours?: number;
  actual_hours?: number;
  created_at: string;
  updated_at: string;
}

export interface CreateProjectInput {
  name: string;
  description: string;
  client_id: string;
  budget: number;
  start_date: string;
  end_date?: string;
  team_member_ids: string[];
}

export interface UpdateProjectInput {
  name?: string;
  description?: string;
  status?: Project['status'];
  priority?: Project['priority'];
  budget?: number;
  end_date?: string;
}