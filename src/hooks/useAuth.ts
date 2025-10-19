import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { toast } from 'sonner';
import type { SignInInput, SignUpInput, AuthResponse, User, PasswordResetInput, PasswordUpdateInput } from '@/types/auth';

// Query keys
export const authKeys = {
  user: ['auth', 'user'] as const,
};

// Get current user
export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.user,
    queryFn: () => api.get<User>('/auth/me'),
    retry: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: !!localStorage.getItem('auth_token'),
  });
};

// Sign in mutation
export const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: SignInInput) => 
      api.post<AuthResponse>('/auth/login', credentials),
    onSuccess: (data) => {
      // Store tokens
      if (data.token) {
        localStorage.setItem('auth_token', data.token);
      }
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token);
      }
      
      // Update the user in the cache
      if (data.user) {
        queryClient.setQueryData(authKeys.user, data.user);
      }
      
      toast.success('Signed in successfully!');
    },
    onError: (error: any) => {
      toast.error(`Sign in failed: ${error.message}`);
    },
  });
};

// Sign up mutation
export const useSignUp = () => {
  return useMutation({
    mutationFn: (credentials: SignUpInput) => 
      api.post<AuthResponse>('/auth/register', credentials),
    onSuccess: (data) => {
      // Store tokens
      if (data.token) {
        localStorage.setItem('auth_token', data.token);
      }
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token);
      }
      
      toast.success('Account created successfully!');
    },
    onError: (error: any) => {
      toast.error(`Sign up failed: ${error.message}`);
    },
  });
};

// Sign out mutation
export const useSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.post('/auth/logout', {}),
    onSuccess: () => {
      // Clear tokens
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
      
      // Clear all cached data
      queryClient.clear();
      
      toast.success('Signed out successfully!');
    },
    onError: (error: any) => {
      toast.error(`Sign out failed: ${error.message}`);
    },
  });
};

// Password reset mutation
export const usePasswordReset = () => {
  return useMutation({
    mutationFn: (data: PasswordResetInput) => 
      api.post('/auth/forgot-password', data),
    onSuccess: () => {
      toast.success('Password reset email sent! Check your inbox.');
    },
    onError: (error: any) => {
      toast.error(`Password reset failed: ${error.message}`);
    },
  });
};

// Password update mutation
export const usePasswordUpdate = () => {
  return useMutation({
    mutationFn: (data: PasswordUpdateInput) => 
      api.post('/auth/reset-password', data),
    onSuccess: () => {
      toast.success('Password updated successfully!');
    },
    onError: (error: any) => {
      toast.error(`Password update failed: ${error.message}`);
    },
  });
};

// Email verification mutation
export const useEmailVerification = () => {
  return useMutation({
    mutationFn: (token: string) => 
      api.post('/auth/verify-email', { token }),
    onSuccess: () => {
      toast.success('Email verified successfully!');
    },
    onError: (error: any) => {
      toast.error(`Email verification failed: ${error.message}`);
    },
  });
};