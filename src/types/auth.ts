export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: 'admin' | 'manager' | 'developer' | 'client';
  company?: string;
  created_at: string;
  updated_at: string;
  email_verified: boolean;
  two_factor_enabled: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
  refresh_token: string;
}

export interface SignInInput {
  email: string;
  password: string;
  remember_me?: boolean;
}

export interface SignUpInput {
  email: string;
  password: string;
  full_name: string;
  company?: string;
  role?: 'admin' | 'manager' | 'developer' | 'client';
}

export interface PasswordResetInput {
  email: string;
}

export interface PasswordUpdateInput {
  token: string;
  password: string;
  confirm_password: string;
}

export interface EmailVerificationInput {
  token: string;
}