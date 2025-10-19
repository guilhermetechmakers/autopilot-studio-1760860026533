import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { toast } from 'sonner';
import type { Project, CreateProjectInput, UpdateProjectInput, Task, Milestone } from '@/types/project';

// Query keys
export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
  list: (filters: string) => [...projectKeys.lists(), { filters }] as const,
  details: () => [...projectKeys.all, 'detail'] as const,
  detail: (id: string) => [...projectKeys.details(), id] as const,
  tasks: (projectId: string) => [...projectKeys.detail(projectId), 'tasks'] as const,
  milestones: (projectId: string) => [...projectKeys.detail(projectId), 'milestones'] as const,
};

// Get all projects
export const useProjects = (filters?: Record<string, any>) => {
  return useQuery({
    queryKey: projectKeys.list(JSON.stringify(filters || {})),
    queryFn: () => api.get<Project[]>('/projects'),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Get project by ID
export const useProject = (id: string) => {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => api.get<Project>(`/projects/${id}`),
    enabled: !!id,
  });
};

// Get project tasks
export const useProjectTasks = (projectId: string) => {
  return useQuery({
    queryKey: projectKeys.tasks(projectId),
    queryFn: () => api.get<Task[]>(`/projects/${projectId}/tasks`),
    enabled: !!projectId,
  });
};

// Get project milestones
export const useProjectMilestones = (projectId: string) => {
  return useQuery({
    queryKey: projectKeys.milestones(projectId),
    queryFn: () => api.get<Milestone[]>(`/projects/${projectId}/milestones`),
    enabled: !!projectId,
  });
};

// Create project mutation
export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (project: CreateProjectInput) => 
      api.post<Project>('/projects', project),
    onSuccess: (newProject) => {
      // Invalidate and refetch projects list
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
      
      // Add the new project to the cache
      queryClient.setQueryData(projectKeys.detail(newProject.id), newProject);
      
      toast.success('Project created successfully!');
    },
    onError: (error: any) => {
      toast.error(`Failed to create project: ${error.message}`);
    },
  });
};

// Update project mutation
export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: UpdateProjectInput }) =>
      api.put<Project>(`/projects/${id}`, updates),
    onSuccess: (updatedProject) => {
      // Update the project in the cache
      queryClient.setQueryData(projectKeys.detail(updatedProject.id), updatedProject);
      
      // Invalidate projects list to ensure consistency
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
      
      toast.success('Project updated successfully!');
    },
    onError: (error: any) => {
      toast.error(`Failed to update project: ${error.message}`);
    },
  });
};

// Delete project mutation
export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/projects/${id}`),
    onSuccess: (_, deletedId) => {
      // Remove the project from the cache
      queryClient.removeQueries({ queryKey: projectKeys.detail(deletedId) });
      
      // Invalidate projects list
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
      
      toast.success('Project deleted successfully!');
    },
    onError: (error: any) => {
      toast.error(`Failed to delete project: ${error.message}`);
    },
  });
};