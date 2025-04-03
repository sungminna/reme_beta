export interface WaitlistEntry {
  id: number;
  email: string;
  plan: string;
  created_at: string;
}

export interface WaitlistFormData {
  email: string;
  plan: string;
}

export interface WaitlistError {
  error: string;
} 